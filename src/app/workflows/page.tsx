'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Play, 
  Pause, 
  Settings, 
  Eye, 
  Copy,
  MoreHorizontal,
  Search,
  GitBranch,
  Bot,
  Clock,
  CheckCircle2,
  XCircle
} from 'lucide-react'

const workflows = [
  {
    id: 'wf-001',
    name: 'Keyword Research & Clustering',
    description: 'Automated keyword research from DataForSEO with AI clustering and content ideas',
    status: 'active',
    lastRun: '2 minutes ago',
    executions: 1247,
    successRate: 94.2,
    avgDuration: '4.8m',
    trigger: 'Manual + Scheduled',
    tags: ['SEO', 'Keywords', 'AI'],
    version: '2.1.0',
  },
  {
    id: 'wf-002',
    name: 'Content Opportunity Analyzer',
    description: 'Analyzes keyword gaps and generates content opportunities',
    status: 'active',
    lastRun: '1 hour ago',
    executions: 234,
    successRate: 97.1,
    avgDuration: '2.3m',
    trigger: 'Webhook',
    tags: ['Content', 'Analysis'],
    version: '1.5.2',
  },
  {
    id: 'wf-003',
    name: 'Competitive Analysis Pipeline',
    description: 'Monitors competitor keywords and identifies new opportunities',
    status: 'paused',
    lastRun: '1 day ago',
    executions: 89,
    successRate: 91.0,
    avgDuration: '7.2m',
    trigger: 'Scheduled',
    tags: ['Competitive', 'Monitoring'],
    version: '1.0.1',
  },
]

export default function WorkflowsPage() {
  const [selectedWorkflow, setSelectedWorkflow] = useState<string | null>(null)

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <CheckCircle2 className="h-4 w-4 text-green-600" />
      case 'paused':
        return <Pause className="h-4 w-4 text-yellow-600" />
      case 'error':
        return <XCircle className="h-4 w-4 text-red-600" />
      default:
        return <Clock className="h-4 w-4 text-muted-foreground" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'success'
      case 'paused':
        return 'warning'
      case 'error':
        return 'error'
      default:
        return 'default'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Workflows</h1>
          <p className="text-muted-foreground">
            Manage and monitor your automated workflows
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Copy className="mr-2 h-4 w-4" />
            Import Workflow
          </Button>
          <Button className="gradient-n8n text-white border-0">
            <Play className="mr-2 h-4 w-4" />
            Create Workflow
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                placeholder="Search workflows..."
                className="flex h-10 w-full rounded-md border border-input bg-background px-10 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
            <Button variant="outline">
              Filter
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Workflows Grid */}
      <div className="grid gap-6">
        {workflows.map((workflow) => (
          <Card 
            key={workflow.id} 
            className={`hover:shadow-lg transition-shadow ${
              selectedWorkflow === workflow.id ? 'ring-2 ring-primary' : ''
            }`}
            onClick={() => setSelectedWorkflow(workflow.id)}
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <CardTitle className="text-xl">{workflow.name}</CardTitle>
                    <Badge variant={getStatusColor(workflow.status) as any}>
                      {getStatusIcon(workflow.status)}
                      <span className="ml-1 capitalize">{workflow.status}</span>
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      v{workflow.version}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {workflow.description}
                  </p>
                  <div className="flex items-center gap-2">
                    {workflow.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Settings className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                <div>
                  <div className="text-muted-foreground">Last Run</div>
                  <div className="font-medium">{workflow.lastRun}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Executions</div>
                  <div className="font-medium">{workflow.executions.toLocaleString()}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Success Rate</div>
                  <div className="font-medium text-green-600">{workflow.successRate}%</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Avg. Duration</div>
                  <div className="font-medium">{workflow.avgDuration}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Trigger</div>
                  <div className="font-medium">{workflow.trigger}</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-4 pt-4 border-t">
                <div className="flex items-center gap-2">
                  {workflow.status === 'active' ? (
                    <Button variant="outline" size="sm">
                      <Pause className="mr-2 h-4 w-4" />
                      Pause
                    </Button>
                  ) : (
                    <Button size="sm">
                      <Play className="mr-2 h-4 w-4" />
                      Activate
                    </Button>
                  )}
                  <Button variant="outline" size="sm">
                    <Play className="mr-2 h-4 w-4" />
                    Run Now
                  </Button>
                </div>
                <Button variant="ghost" size="sm">
                  View Details →
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}