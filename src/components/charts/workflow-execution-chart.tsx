'use client'

import { 
  Area, 
  AreaChart, 
  ResponsiveContainer, 
  Tooltip, 
  XAxis, 
  YAxis,
  CartesianGrid
} from 'recharts'

const data = [
  { date: '2024-01-01', executions: 45, successful: 42, failed: 3 },
  { date: '2024-01-02', executions: 52, successful: 48, failed: 4 },
  { date: '2024-01-03', executions: 61, successful: 58, failed: 3 },
  { date: '2024-01-04', executions: 38, successful: 36, failed: 2 },
  { date: '2024-01-05', executions: 72, successful: 68, failed: 4 },
  { date: '2024-01-06', executions: 84, successful: 79, failed: 5 },
  { date: '2024-01-07', executions: 93, successful: 89, failed: 4 },
  { date: '2024-01-08', executions: 67, successful: 63, failed: 4 },
  { date: '2024-01-09', executions: 76, successful: 72, failed: 4 },
  { date: '2024-01-10', executions: 89, successful: 85, failed: 4 },
  { date: '2024-01-11', executions: 95, successful: 91, failed: 4 },
  { date: '2024-01-12', executions: 78, successful: 74, failed: 4 },
  { date: '2024-01-13', executions: 82, successful: 78, failed: 4 },
  { date: '2024-01-14', executions: 91, successful: 87, failed: 4 },
]

export function WorkflowExecutionChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorExecutions" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
            <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colorSuccessful" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3}/>
            <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
        <XAxis 
          dataKey="date" 
          tick={{ fontSize: 12 }}
          tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
          className="text-muted-foreground"
        />
        <YAxis 
          tick={{ fontSize: 12 }}
          className="text-muted-foreground"
        />
        <Tooltip 
          content={({ active, payload, label }) => {
            if (active && payload && payload.length) {
              return (
                <div className="rounded-lg border bg-background p-3 shadow-md">
                  <p className="font-medium">
                    {new Date(label).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </p>
                  <div className="space-y-1">
                    <p className="text-sm">
                      <span className="text-primary">Total:</span> {payload[0]?.value}
                    </p>
                    <p className="text-sm">
                      <span className="text-green-600">Successful:</span> {payload[1]?.value}
                    </p>
                    <p className="text-sm">
                      <span className="text-red-600">Failed:</span> {payload[0]?.payload?.failed}
                    </p>
                  </div>
                </div>
              )
            }
            return null
          }}
        />
        <Area
          type="monotone"
          dataKey="executions"
          stroke="hsl(var(--primary))"
          fillOpacity={1}
          fill="url(#colorExecutions)"
          strokeWidth={2}
        />
        <Area
          type="monotone"
          dataKey="successful"
          stroke="#22c55e"
          fillOpacity={1}
          fill="url(#colorSuccessful)"
          strokeWidth={2}
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}