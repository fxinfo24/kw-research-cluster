'use client'

import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { 
  TrendingUp, 
  TrendingDown, 
  Minus,
  Search,
  GitBranch,
  Bot
} from 'lucide-react'

const workflowStats = [
  {
    name: 'Keyword Research',
    executions: 892,
    successRate: 94.2,
    avgDuration: 4.8,
    trend: 'up',
    trendValue: 12,
    icon: Search,
    color: 'bg-blue-500',
  },
  {
    name: 'Content Clustering',
    executions: 234,
    successRate: 97.1,
    avgDuration: 2.3,
    trend: 'up',
    trendValue: 8,
    icon: GitBranch,
    color: 'bg-green-500',
  },
  {
    name: 'AI Content Ideas',
    executions: 156,
    successRate: 89.7,
    avgDuration: 6.2,
    trend: 'down',
    trendValue: 3,
    icon: Bot,
    color: 'bg-purple-500',
  },
]

export function WorkflowStats() {
  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="h-3 w-3 text-green-600" />
      case 'down':
        return <TrendingDown className="h-3 w-3 text-red-600" />
      default:
        return <Minus className="h-3 w-3 text-muted-foreground" />
    }
  }

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up':
        return 'text-green-600'
      case 'down':
        return 'text-red-600'
      default:
        return 'text-muted-foreground'
    }
  }

  return (
    <div className="space-y-6">
      {workflowStats.map((workflow) => (
        <div key={workflow.name} className="space-y-3">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className={`h-2 w-2 rounded-full ${workflow.color}`} />
              <span className="font-medium text-sm">{workflow.name}</span>
            </div>
            <div className="flex items-center gap-1 text-xs">
              {getTrendIcon(workflow.trend)}
              <span className={getTrendColor(workflow.trend)}>
                {workflow.trendValue}%
              </span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Success Rate</span>
              <span>{workflow.successRate}%</span>
            </div>
            <Progress value={workflow.successRate} className="h-2" />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 text-xs">
            <div>
              <div className="text-muted-foreground">Executions</div>
              <div className="font-medium">{workflow.executions.toLocaleString()}</div>
            </div>
            <div>
              <div className="text-muted-foreground">Avg. Duration</div>
              <div className="font-medium">{workflow.avgDuration}m</div>
            </div>
          </div>
        </div>
      ))}

      {/* Summary */}
      <div className="pt-4 border-t space-y-3">
        <h4 className="font-medium text-sm">Performance Summary</h4>
        <div className="grid grid-cols-2 gap-4 text-xs">
          <div className="space-y-1">
            <div className="text-muted-foreground">Overall Success Rate</div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-lg">93.7%</span>
              <Badge variant="success">+2.1%</Badge>
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-muted-foreground">Avg. Processing Time</div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-lg">4.4m</span>
              <Badge variant="success">-0.3m</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}