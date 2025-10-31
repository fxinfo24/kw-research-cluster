'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  LayoutDashboard,
  Workflow,
  Activity,
  BarChart3,
  Settings,
  FileText,
  Search,
  Bot,
  Database,
  GitBranch,
  Zap
} from 'lucide-react'

const navigation = [
  {
    name: 'Dashboard',
    href: '/',
    icon: LayoutDashboard,
  },
  {
    name: 'Workflows',
    href: '/workflows',
    icon: Workflow,
    badge: 3,
  },
  {
    name: 'Executions',
    href: '/executions',
    icon: Activity,
    badge: 12,
  },
  {
    name: 'Analytics',
    href: '/analytics',
    icon: BarChart3,
  },
  {
    name: 'Keyword Research',
    href: '/keyword-research',
    icon: Search,
  },
  {
    name: 'Clustering',
    href: '/clustering',
    icon: GitBranch,
  },
]

const tools = [
  {
    name: 'Data Sources',
    href: '/data-sources',
    icon: Database,
  },
  {
    name: 'AI Models',
    href: '/ai-models',
    icon: Bot,
  },
  {
    name: 'Automations',
    href: '/automations',
    icon: Zap,
  },
  {
    name: 'Reports',
    href: '/reports',
    icon: FileText,
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-full w-64 flex-col border-r bg-background">
      {/* Logo */}
      <div className="flex h-16 items-center border-b px-6">
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg gradient-n8n flex items-center justify-center">
            <Workflow className="h-4 w-4 text-white" />
          </div>
          <span className="font-bold text-xl">n8n Dashboard</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-4">
        <div className="space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link key={item.name} href={item.href}>
                <Button
                  variant={isActive ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start",
                    isActive && "bg-secondary text-secondary-foreground"
                  )}
                >
                  <item.icon className="mr-3 h-4 w-4" />
                  {item.name}
                  {item.badge && (
                    <Badge 
                      variant="secondary" 
                      className="ml-auto h-5 px-1.5 text-xs"
                    >
                      {item.badge}
                    </Badge>
                  )}
                </Button>
              </Link>
            )
          })}
        </div>

        <div className="pt-6">
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight text-muted-foreground">
              Tools
            </h2>
            <div className="space-y-1">
              {tools.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link key={item.name} href={item.href}>
                    <Button
                      variant={isActive ? "secondary" : "ghost"}
                      className={cn(
                        "w-full justify-start",
                        isActive && "bg-secondary text-secondary-foreground"
                      )}
                    >
                      <item.icon className="mr-3 h-4 w-4" />
                      {item.name}
                    </Button>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Bottom Section */}
      <div className="border-t p-4">
        <Link href="/settings">
          <Button
            variant={pathname === '/settings' ? "secondary" : "ghost"}
            className="w-full justify-start"
          >
            <Settings className="mr-3 h-4 w-4" />
            Settings
          </Button>
        </Link>
        
        {/* Status Card */}
        <div className="mt-4 rounded-lg border bg-muted/50 p-3">
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <div className="font-medium">System Status</div>
              <div className="text-muted-foreground">All systems operational</div>
            </div>
            <div className="h-2 w-2 rounded-full bg-green-500" />
          </div>
        </div>
      </div>
    </div>
  )
}