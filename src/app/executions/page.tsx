'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { formatDate, formatDuration, formatStatus } from '@/lib/utils'
import { 
  ExternalLink, 
  Search, 
  Filter,
  Download,
  RefreshCw,
  Play,
  Square,
  AlertCircle,
  CheckCircle2,
  Clock
} from 'lucide-react'

const executions = [
  {
    id: 'exec-001',
    workflowName: 'Keyword Research & Clustering',
    status: 'success',
    startTime: '2024-01-15T10:30:00Z',
    endTime: '2024-01-15T10:34:07Z',
    duration: 247,
    trigger: 'Manual',
    user: 'john.doe@example.com',
    inputData: { keyword: 'fitness equipment', location: 'US', language: 'en' },
    outputData: { clusters: 12, keywords: 247, contentIdeas: 18 },
  },
  {
    id: 'exec-002',
    workflowName: 'SEO Content Clustering',
    status: 'running',
    startTime: '2024-01-15T11:15:00Z',
    endTime: null,
    duration: 120,
    trigger: 'Scheduled',
    user: 'system',
    inputData: { keyword: 'digital marketing', location: 'US', language: 'en' },
    outputData: null,
  },
  {
    id: 'exec-003',
    workflowName: 'Keyword Research & Clustering',
    status: 'failed',
    startTime: '2024-01-15T09:45:00Z',
    endTime: '2024-01-15T09:46:29Z',
    duration: 89,
    trigger: 'Webhook',
    user: 'api@example.com',
    inputData: { keyword: 'organic food', location: 'UK', language: 'en' },
    outputData: null,
    error: 'API rate limit exceeded - DataForSEO API returned 429',
  },
  {
    id: 'exec-004',
    workflowName: 'Content Opportunity Analysis',
    status: 'success',
    startTime: '2024-01-15T08:20:00Z',
    endTime: '2024-01-15T08:25:12Z',
    duration: 312,
    trigger: 'Manual',
    user: 'sarah.smith@example.com',
    inputData: { keyword: 'home automation', location: 'CA', language: 'en' },
    outputData: { opportunities: 23, clusters: 8, contentIdeas: 15 },
  },
  {
    id: 'exec-005',
    workflowName: 'Competitive Analysis Pipeline',
    status: 'waiting',
    startTime: '2024-01-15T12:00:00Z',
    endTime: null,
    duration: 0,
    trigger: 'Scheduled',
    user: 'system',
    inputData: { competitors: ['competitor1.com', 'competitor2.com'] },
    outputData: null,
  },
]

export default function ExecutionsPage() {
  const [selectedExecution, setSelectedExecution] = useState<string | null>(null)
  const [filterStatus, setFilterStatus] = useState<string>('all')

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return <CheckCircle2 className="h-4 w-4 text-green-600" />
      case 'failed':
        return <AlertCircle className="h-4 w-4 text-red-600" />
      case 'running':
        return <Play className="h-4 w-4 text-blue-600" />
      case 'waiting':
        return <Clock className="h-4 w-4 text-yellow-600" />
      default:
        return <Clock className="h-4 w-4 text-muted-foreground" />
    }
  }

  const filteredExecutions = executions.filter(execution => 
    filterStatus === 'all' || execution.status === filterStatus
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Workflow Executions</h1>
          <p className="text-muted-foreground">
            Monitor and manage workflow execution history
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Executions</p>
                <p className="text-2xl font-bold">1,247</p>
              </div>
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                <Play className="h-4 w-4 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Successful</p>
                <p className="text-2xl font-bold text-green-600">1,182</p>
              </div>
              <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Failed</p>
                <p className="text-2xl font-bold text-red-600">65</p>
              </div>
              <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                <AlertCircle className="h-4 w-4 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Running</p>
                <p className="text-2xl font-bold text-blue-600">3</p>
              </div>
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                <RefreshCw className="h-4 w-4 text-blue-600 animate-spin" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                placeholder="Search executions..."
                className="flex h-10 w-full rounded-md border border-input bg-background px-10 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
            <div className="flex items-center gap-2">
              {['all', 'success', 'failed', 'running', 'waiting'].map((status) => (
                <Button
                  key={status}
                  variant={filterStatus === status ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilterStatus(status)}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Executions List */}
      <div className="space-y-4">
        {filteredExecutions.map((execution) => {
          const status = formatStatus(execution.status)
          
          return (
            <Card 
              key={execution.id}
              className={`hover:shadow-lg transition-shadow cursor-pointer ${
                selectedExecution === execution.id ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => setSelectedExecution(execution.id)}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="space-y-3 flex-1">
                    {/* Header */}
                    <div className="flex items-center gap-3">
                      {getStatusIcon(execution.status)}
                      <h3 className="font-semibold">{execution.workflowName}</h3>
                      <Badge variant={status.variant} className="text-xs">
                        {status.label}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {execution.trigger}
                      </Badge>
                    </div>

                    {/* Details */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <div className="text-muted-foreground">Started</div>
                        <div className="font-medium">{formatDate(execution.startTime)}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Duration</div>
                        <div className="font-medium">
                          {execution.status === 'running' ? 
                            `${formatDuration(execution.duration)} (running)` : 
                            formatDuration(execution.duration)
                          }
                        </div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Triggered By</div>
                        <div className="font-medium">{execution.user}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Execution ID</div>
                        <div className="font-medium font-mono text-xs">{execution.id}</div>
                      </div>
                    </div>

                    {/* Input/Output Summary */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-muted-foreground mb-1">Input Data</div>
                        <div className="text-xs bg-muted rounded p-2 font-mono">
                          {JSON.stringify(execution.inputData, null, 2)}
                        </div>
                      </div>
                      {execution.outputData && (
                        <div>
                          <div className="text-muted-foreground mb-1">Output Data</div>
                          <div className="text-xs bg-muted rounded p-2 font-mono">
                            {JSON.stringify(execution.outputData, null, 2)}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Error Message */}
                    {execution.error && (
                      <div className="text-sm">
                        <div className="text-red-600 font-medium mb-1">Error</div>
                        <div className="text-red-600 bg-red-50 rounded p-2 text-xs">
                          {execution.error}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 ml-4">
                    {execution.status === 'running' && (
                      <Button variant="outline" size="icon">
                        <Square className="h-4 w-4" />
                      </Button>
                    )}
                    <Button variant="outline" size="icon">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}