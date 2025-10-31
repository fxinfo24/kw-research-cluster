'use client'

// n8n API integration utilities
export interface N8nConfig {
  baseUrl: string
  apiKey: string
}

export interface WorkflowExecution {
  id: string
  workflowId: string
  status: 'success' | 'error' | 'running' | 'waiting' | 'canceled'
  startTime: string
  endTime?: string
  mode: 'manual' | 'trigger' | 'webhook' | 'scheduled'
  data: {
    resultData: {
      runData: any
    }
  }
}

export interface Workflow {
  id: string
  name: string
  active: boolean
  nodes: any[]
  connections: any
  settings: any
  tags: string[]
  versionId: string
}

class N8nApiClient {
  private config: N8nConfig

  constructor(config: N8nConfig) {
    this.config = config
  }

  private async request(endpoint: string, options: RequestInit = {}) {
    const url = `${this.config.baseUrl}/api/v1${endpoint}`
    
    const headers = {
      'Content-Type': 'application/json',
      'X-N8N-API-KEY': this.config.apiKey,
      ...options.headers,
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      })

      if (!response.ok) {
        throw new Error(`n8n API Error: ${response.status} ${response.statusText}`)
      }

      return await response.json()
    } catch (error) {
      console.error('n8n API request failed:', error)
      throw error
    }
  }

  // Get all workflows
  async getWorkflows(): Promise<Workflow[]> {
    return this.request('/workflows')
  }

  // Get workflow by ID
  async getWorkflow(id: string): Promise<Workflow> {
    return this.request(`/workflows/${id}`)
  }

  // Execute workflow
  async executeWorkflow(id: string, data?: any): Promise<WorkflowExecution> {
    return this.request(`/workflows/${id}/execute`, {
      method: 'POST',
      body: JSON.stringify(data || {}),
    })
  }

  // Get executions
  async getExecutions(filters?: {
    workflowId?: string
    status?: string
    limit?: number
    offset?: number
  }): Promise<{ data: WorkflowExecution[]; count: number }> {
    const params = new URLSearchParams()
    
    if (filters?.workflowId) params.append('workflowId', filters.workflowId)
    if (filters?.status) params.append('status', filters.status)
    if (filters?.limit) params.append('limit', filters.limit.toString())
    if (filters?.offset) params.append('offset', filters.offset.toString())

    const endpoint = `/executions${params.toString() ? `?${params.toString()}` : ''}`
    return this.request(endpoint)
  }

  // Get execution by ID
  async getExecution(id: string): Promise<WorkflowExecution> {
    return this.request(`/executions/${id}`)
  }

  // Stop execution
  async stopExecution(id: string): Promise<void> {
    await this.request(`/executions/${id}/stop`, {
      method: 'POST',
    })
  }

  // Activate/Deactivate workflow
  async setWorkflowActive(id: string, active: boolean): Promise<void> {
    await this.request(`/workflows/${id}/activate`, {
      method: 'PATCH',
      body: JSON.stringify({ active }),
    })
  }

  // Get workflow statistics
  async getWorkflowStats(id: string): Promise<{
    totalExecutions: number
    successfulExecutions: number
    failedExecutions: number
    lastExecution?: string
  }> {
    const executions = await this.getExecutions({ workflowId: id, limit: 1000 })
    
    const totalExecutions = executions.count
    const successfulExecutions = executions.data.filter(e => e.status === 'success').length
    const failedExecutions = executions.data.filter(e => e.status === 'error').length
    const lastExecution = executions.data[0]?.startTime

    return {
      totalExecutions,
      successfulExecutions,
      failedExecutions,
      lastExecution,
    }
  }
}

// Create API client instance
export const createN8nClient = (): N8nApiClient => {
  const config: N8nConfig = {
    baseUrl: process.env.NEXT_PUBLIC_N8N_API_BASE_URL || process.env.N8N_API_BASE_URL || 'http://localhost:5678',
    apiKey: process.env.N8N_API_KEY || '',
  }

  if (!config.apiKey) {
    console.warn('n8n API key not configured. Some features may not work.')
  }

  return new N8nApiClient(config)
}

// Export default client
export const n8nApi = createN8nClient()

// Helper functions for React Query
export const n8nQueries = {
  workflows: () => ['workflows'],
  workflow: (id: string) => ['workflows', id],
  executions: (filters?: any) => ['executions', filters],
  execution: (id: string) => ['executions', id],
  workflowStats: (id: string) => ['workflow-stats', id],
}

// Mock data for development/demo
export const mockData = {
  workflows: [
    {
      id: 'wf-001',
      name: 'Keyword Research & Clustering',
      active: true,
      nodes: [],
      connections: {},
      settings: {},
      tags: ['SEO', 'Keywords'],
      versionId: '1.0.0',
    },
    {
      id: 'wf-002',
      name: 'Content Opportunity Analysis',
      active: true,
      nodes: [],
      connections: {},
      settings: {},
      tags: ['Content', 'Analysis'],
      versionId: '1.2.0',
    },
  ] as Workflow[],

  executions: [
    {
      id: 'exec-001',
      workflowId: 'wf-001',
      status: 'success' as const,
      startTime: new Date(Date.now() - 300000).toISOString(),
      endTime: new Date(Date.now() - 120000).toISOString(),
      mode: 'manual' as const,
      data: { resultData: { runData: {} } },
    },
    {
      id: 'exec-002',
      workflowId: 'wf-001',
      status: 'running' as const,
      startTime: new Date(Date.now() - 60000).toISOString(),
      mode: 'scheduled' as const,
      data: { resultData: { runData: {} } },
    },
  ] as WorkflowExecution[],
}

// Development mode check
export const isDevelopment = process.env.NODE_ENV === 'development'
export const useMockData = isDevelopment && !process.env.N8N_API_KEY