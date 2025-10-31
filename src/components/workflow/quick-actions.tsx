'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Play, 
  Pause, 
  RefreshCw, 
  Settings, 
  Download,
  Upload,
  Search,
  GitBranch
} from 'lucide-react'

const actions = [
  {
    name: 'Run Keyword Research',
    description: 'Start new keyword research workflow',
    icon: Search,
    action: 'run-keyword-research',
    variant: 'default' as const,
  },
  {
    name: 'Run Clustering',
    description: 'Process existing keywords into clusters',
    icon: GitBranch,
    action: 'run-clustering',
    variant: 'secondary' as const,
  },
  {
    name: 'Pause All Workflows',
    description: 'Temporarily stop all active workflows',
    icon: Pause,
    action: 'pause-all',
    variant: 'outline' as const,
  },
  {
    name: 'Export Results',
    description: 'Download latest execution results',
    icon: Download,
    action: 'export-results',
    variant: 'outline' as const,
  },
]

export function QuickActions() {
  const handleAction = (action: string) => {
    console.log(`Executing action: ${action}`)
    // Here you would integrate with your n8n API
  }

  return (
    <div className="space-y-3">
      {actions.map((action) => (
        <Button
          key={action.action}
          variant={action.variant}
          className="w-full justify-start h-auto p-4"
          onClick={() => handleAction(action.action)}
        >
          <div className="flex items-center gap-3">
            <action.icon className="h-5 w-5 flex-shrink-0" />
            <div className="text-left">
              <div className="font-medium">{action.name}</div>
              <div className="text-sm text-muted-foreground">
                {action.description}
              </div>
            </div>
          </div>
        </Button>
      ))}

      <div className="pt-4 border-t">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Active Workflows</span>
            <Badge variant="success">3 Running</Badge>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Queue Status</span>
            <Badge variant="warning">2 Waiting</Badge>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Last Execution</span>
            <span className="text-sm">2 minutes ago</span>
          </div>
        </div>
      </div>
    </div>
  )
}