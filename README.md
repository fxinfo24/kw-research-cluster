# n8n Workflow Dashboard

A comprehensive dashboard for monitoring and managing n8n keyword research and clustering workflows, built with Next.js 14, TypeScript, and Tailwind CSS.

## 🎯 Features

### 📊 Dashboard Overview
- **Real-time Metrics**: Monitor workflow executions, success rates, and performance
- **Visual Analytics**: Interactive charts showing execution trends and patterns
- **Quick Actions**: Run workflows, pause executions, and manage settings
- **System Status**: Real-time connection status and health monitoring

### 🔄 Workflow Management
- **Workflow Library**: View and manage all your n8n workflows
- **Execution History**: Detailed execution logs with input/output data
- **Performance Monitoring**: Track success rates, duration, and errors
- **Real-time Status**: Live updates on running executions

### 📈 Analytics & Insights
- **Execution Trends**: Visual representation of workflow performance over time
- **Success Rate Analysis**: Track and improve workflow reliability
- **Performance Metrics**: Monitor average execution times and bottlenecks
- **Error Tracking**: Identify and resolve common workflow issues

### 🔧 Management Tools
- **Quick Run Actions**: Start keyword research and clustering workflows instantly
- **Execution Control**: Pause, resume, or stop running workflows
- **Export Capabilities**: Download execution results and reports
- **Search & Filter**: Find specific executions and workflows easily

## 🏗️ Architecture

### **Tech Stack**
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives for accessibility
- **State Management**: React Query for server state
- **Charts**: Recharts for data visualization
- **Icons**: Lucide React for consistent iconography

### **Design System**
- **Color Palette**: n8n-inspired purple theme with semantic colors
- **Typography**: Inter font family for readability
- **Components**: Modular, reusable component library
- **Responsive**: Mobile-first design with desktop optimization
- **Accessibility**: WCAG compliant components and navigation

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- n8n instance running (local or cloud)
- n8n API access token

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd n8n-workflow-dashboard
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration:
```env
N8N_API_BASE_URL=http://localhost:5678
N8N_API_KEY=your-n8n-api-key
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

4. **Start the development server**
```bash
npm run dev
```

5. **Open your browser**
Visit [http://localhost:3000](http://localhost:3000)

## 📱 Pages & Features

### 🏠 Dashboard (`/`)
- **Overview Metrics**: Total executions, success rates, active workflows
- **Execution Chart**: Visual timeline of workflow runs
- **Recent Activity**: Latest executions with status and details
- **Quick Actions**: One-click workflow management
- **Performance Stats**: Workflow-specific analytics

### 🔄 Workflows (`/workflows`)
- **Workflow Library**: All available workflows with status
- **Management Controls**: Start, stop, pause, and configure workflows
- **Performance Metrics**: Success rates and execution statistics
- **Version Tracking**: Workflow version history and updates

### 📋 Executions (`/executions`)
- **Execution History**: Detailed log of all workflow runs
- **Status Filtering**: Filter by success, failed, running, or waiting
- **Detailed View**: Input data, output results, and error messages
- **Real-time Updates**: Live status updates for running executions

### 📊 Analytics (`/analytics`)
- **Performance Trends**: Historical data and patterns
- **Success Rate Analysis**: Identify improvement opportunities
- **Duration Metrics**: Track and optimize execution times
- **Error Analysis**: Common issues and resolution tracking

## 🎨 Component Library

### **Layout Components**
- `Header`: Navigation, search, and user actions
- `Sidebar`: Main navigation with workflow categories
- `Dashboard Layout`: Responsive grid system

### **Workflow Components**
- `WorkflowExecutionChart`: Visual execution timeline
- `RecentExecutions`: Latest execution activity
- `QuickActions`: Workflow management shortcuts
- `WorkflowStats`: Performance analytics

### **UI Components**
- `Button`: Various styles and sizes
- `Card`: Content containers with headers
- `Badge`: Status indicators and labels
- `Progress`: Visual progress indicators
- `Toast`: Notification system

## 🔌 n8n Integration

### **API Endpoints**
```typescript
// Get workflow executions
GET /api/executions
POST /api/executions/{id}/stop
POST /api/workflows/{id}/execute

// Workflow management
GET /api/workflows
POST /api/workflows/{id}/activate
POST /api/workflows/{id}/deactivate

// Real-time updates
WebSocket /socket.io for live execution updates
```

### **Data Models**
```typescript
interface WorkflowExecution {
  id: string
  workflowId: string
  status: 'success' | 'failed' | 'running' | 'waiting'
  startTime: string
  endTime?: string
  duration: number
  inputData: any
  outputData?: any
  error?: string
}

interface Workflow {
  id: string
  name: string
  active: boolean
  nodes: Node[]
  connections: Connection[]
  settings: WorkflowSettings
}
```

## 🔧 Configuration

### **Environment Variables**
```env
# n8n Configuration
N8N_API_BASE_URL=http://localhost:5678
N8N_API_KEY=your-api-key

# Application Settings
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_WS_URL=ws://localhost:5678

# Optional: Analytics
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
```

### **Customization**
- **Themes**: Modify `tailwind.config.js` for custom colors
- **Components**: Extend component library in `/components/ui`
- **API**: Configure endpoints in `/lib/api`
- **Workflows**: Add custom workflow types in `/types`

## 📊 Monitoring Features

### **Real-time Dashboard**
- Live execution status updates
- Performance metrics and trends
- System health monitoring
- Error rate tracking

### **Workflow Analytics**
- Success rate analysis by workflow
- Average execution time tracking
- Resource usage monitoring
- Performance optimization insights

### **Alerting & Notifications**
- Failed execution alerts
- Performance threshold warnings
- System status notifications
- Custom alert rules

## 🚀 Deployment

### **Vercel (Recommended)**
```bash
# Connect GitHub repository to Vercel
# Set environment variables in Vercel dashboard
# Deploy automatically on push to main
```

### **Docker**
```bash
# Build Docker image
docker build -t n8n-dashboard .

# Run container
docker run -p 3000:3000 \
  -e N8N_API_BASE_URL=http://n8n:5678 \
  -e N8N_API_KEY=your-key \
  n8n-dashboard
```

### **Manual Deployment**
```bash
# Build for production
npm run build

# Start production server
npm start
```

## 🔄 Development

### **Scripts**
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

### **Project Structure**
```
src/
├── app/                    # Next.js app router pages
│   ├── page.tsx           # Dashboard home
│   ├── workflows/         # Workflow management
│   ├── executions/        # Execution history
│   └── analytics/         # Performance analytics
├── components/            # Reusable components
│   ├── ui/               # Base UI components
│   ├── charts/           # Data visualization
│   ├── workflow/         # Workflow-specific components
│   └── layout/           # Layout components
├── lib/                  # Utility functions
├── hooks/                # Custom React hooks
└── types/                # TypeScript definitions
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **n8n Team**: For the amazing workflow automation platform
- **Vercel**: For the excellent Next.js framework and hosting
- **Radix UI**: For accessible component primitives
- **Tailwind CSS**: For the utility-first CSS framework

---

**Built with ❤️ for the n8n community**

*Transform your workflow monitoring experience with real-time insights and powerful management tools!*# kw-research-cluster
