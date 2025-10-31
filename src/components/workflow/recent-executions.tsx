'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { formatDate, formatDuration, formatStatus } from '@/lib/utils'
import { 
  ExternalLink, 
  Search, 
  GitBranch, 
  Clock
} from 'lucide-react'

const executions = [
  {
    id: 'exec-001',
    workflowName: 'Keyword Research & Clustering',
    status: 'success',
    startTime: '2024-01-15T10:30:00Z',
    duration: 247,
    trigger: 'Manual',
    keywords: 'fitness equipment',
  },
  {
    id: 'exec-002',
    workflowName: 'SEO Content Clustering',
    status: 'running',
    startTime: '2024-01-15T11:15:00Z',
    duration: 120,
    trigger: 'Scheduled',
    keywords: 'digital marketing',
  },
  {
    id: 'exec-003',
    workflowName: 'Keyword Research & Clustering',
    status: 'failed',
    startTime: '2024-01-15T09:45:00Z',
    duration: 89,
    trigger: 'Webhook',
    keywords: 'organic food',
    error: 'API rate limit exceeded',
  },
  {
    id: 'exec-004',
    workflowName: 'Content Opportunity Analysis',
    status: 'success',
    startTime: '2024-01-15T08:20:00Z',
    duration: 312,
    trigger: 'Manual',
    keywords: 'home automation',
  },
  {
    id: 'exec-005',
    workflowName: 'Keyword Research & Clustering',
    status: 'success',
    startTime: '2024-01-15T07:10:00Z',
    duration: 198,
    trigger: 'Scheduled',
    keywords: 'sustainable energy',
  },
]

export function RecentExecutions() {
  const getWorkflowIcon = (workflowName: string) => {
    if (workflowName.includes('Keyword Research')) {
      return Search
    }
    if (workflowName.includes('Clustering')) {
      return GitBranch
    }
    return Clock
  }

  return (
    <div className="space-y-3">
      {executions.map((execution) => {
        const status = formatStatus(execution.status)
        const WorkflowIcon = getWorkflowIcon(execution.workflowName)
        
        return (
          <div
            key={execution.id}
            className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors"
          >
            <div className="flex items-center gap-3 flex-1">
              <WorkflowIcon className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-medium text-sm truncate">
                    {execution.workflowName}
                  </p>
                  <Badge variant={status.variant} className="text-xs">
                    {status.label}
                  </Badge>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span>Keywords: {execution.keywords}</span>
                  <span>{formatDuration(execution.duration)}</span>
                  <span>{formatDate(execution.startTime)}</span>
                </div>
                {execution.error && (
                  <p className="text-xs text-red-600 mt-1">{execution.error}</p>
                )}
              </div>
            </div>
            <Button variant="ghost" size="icon" className="flex-shrink-0">
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        )
      })}
      
      <div className="pt-2 border-t">
        <Button variant="outline" className="w-full">
          View All Executions
        </Button>
      </div>
    </div>
  )
}