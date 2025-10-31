# 🚀 Vercel Deployment Guide for n8n Workflow Dashboard

Complete step-by-step guide to deploy your n8n workflow dashboard to Vercel with GitHub integration.

## 📋 Prerequisites

Before starting, ensure you have:
- ✅ GitHub account
- ✅ Vercel account (free tier available)
- ✅ n8n instance running (local or cloud)
- ✅ n8n API key/access token

## 🔧 Step 1: Prepare Your Repository

### **1.1 Create GitHub Repository**
```bash
# If you haven't initialized git yet
git init
git add .
git commit -m "Initial commit: n8n workflow dashboard"

# Create repository on GitHub and push
git remote add origin https://github.com/YOUR_USERNAME/n8n-workflow-dashboard.git
git branch -M main
git push -u origin main
```

### **1.2 Verify Project Structure**
Ensure your project has these essential files:
```
n8n-workflow-dashboard/
├── package.json                 ✅
├── next.config.js              ✅
├── vercel.json                 ✅ (created)
├── .gitignore                  ✅ (created)
├── .env.example                ✅
├── src/app/layout.tsx          ✅
├── src/app/page.tsx            ✅
└── README.md                   ✅
```

## 🌐 Step 2: Connect to Vercel

### **2.1 Sign Up/Login to Vercel**
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" or "Login"
3. Choose "Continue with GitHub" for seamless integration

### **2.2 Import Your Repository**
1. On Vercel dashboard, click "New Project"
2. Select "Import Git Repository"
3. Choose your `n8n-workflow-dashboard` repository
4. Click "Import"

### **2.3 Configure Project Settings**
```json
{
  "name": "n8n-workflow-dashboard",
  "framework": "Next.js",
  "rootDirectory": "./",
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm install"
}
```

## 🔐 Step 3: Environment Variables Configuration

### **3.1 Required Environment Variables**
In Vercel project settings, add these environment variables:

#### **Production Environment Variables:**
```env
# n8n Configuration
N8N_API_BASE_URL=https://your-n8n-instance.com
N8N_API_KEY=your-n8n-api-key-here

# Application URLs
NEXT_PUBLIC_APP_URL=https://your-app-name.vercel.app
NEXT_PUBLIC_WS_URL=wss://your-n8n-instance.com

# Authentication (optional)
NEXTAUTH_SECRET=your-super-secret-32-character-key
NEXTAUTH_URL=https://your-app-name.vercel.app

# Optional: Analytics
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
```

### **3.2 Add Environment Variables in Vercel**
1. Go to your project in Vercel dashboard
2. Navigate to "Settings" → "Environment Variables"
3. Add each variable:
   - **Name**: `N8N_API_BASE_URL`
   - **Value**: `https://your-n8n-instance.com`
   - **Environment**: Production, Preview, Development
4. Repeat for all variables

### **3.3 Get Your n8n API Key**
```bash
# For n8n cloud users
1. Go to n8n.cloud dashboard
2. Navigate to "Settings" → "API Keys"
3. Create new API key
4. Copy the key (starts with 'n8n_api_')

# For self-hosted n8n
1. Login to your n8n instance
2. Go to "Settings" → "API Keys"
3. Create new API key or use existing
4. Copy the key
```

## 🚀 Step 4: Deploy

### **4.1 Automatic Deployment**
1. Click "Deploy" in Vercel dashboard
2. Vercel will automatically:
   - Install dependencies
   - Build the Next.js application
   - Deploy to global CDN
   - Provide preview URL

### **4.2 Monitor Deployment**
```bash
# Deployment process:
1. ⏳ Building...
2. 🔨 Installing dependencies
3. 🏗️ Building Next.js app
4. 🚀 Deploying to edge network
5. ✅ Deployment complete!
```

### **4.3 Verify Deployment**
1. Check build logs for any errors
2. Click on deployment URL
3. Verify dashboard loads correctly
4. Test n8n API connection

## 🔧 Step 5: Custom Domain (Optional)

### **5.1 Add Custom Domain**
1. In Vercel project settings
2. Go to "Domains"
3. Add your domain: `dashboard.yourdomain.com`
4. Follow DNS configuration instructions

### **5.2 Update Environment Variables**
```env
# Update URLs with custom domain
NEXT_PUBLIC_APP_URL=https://dashboard.yourdomain.com
NEXTAUTH_URL=https://dashboard.yourdomain.com
```

## 🔄 Step 6: Automatic Deployments

### **6.1 GitHub Integration**
Vercel automatically deploys when you:
- Push to `main` branch (production)
- Create pull requests (preview deployments)
- Push to other branches (development deployments)

### **6.2 Deployment Workflow**
```bash
# Development workflow:
1. Make changes locally
2. git add .
3. git commit -m "Feature: Add new dashboard widget"
4. git push origin feature-branch
5. 🚀 Vercel creates preview deployment automatically

# Production deployment:
1. Merge to main branch
2. 🚀 Vercel deploys to production automatically
```

## 🛠️ Step 7: Advanced Configuration

### **7.1 Custom Build Settings**
```json
// vercel.json - Advanced configuration
{
  "framework": "nextjs",
  "regions": ["iad1", "cle1"], // US regions for faster access
  "functions": {
    "app/api/**/*.ts": {
      "maxDuration": 30 // API timeout settings
    }
  },
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        }
      ]
    }
  ]
}
```

### **7.2 API Proxy Configuration**
```json
// Proxy n8n API calls through Vercel
{
  "rewrites": [
    {
      "source": "/api/n8n/(.*)",
      "destination": "$N8N_API_BASE_URL/api/v1/$1"
    }
  ]
}
```

## 🔍 Step 8: Testing & Verification

### **8.1 Functionality Testing**
```bash
# Test checklist:
✅ Dashboard loads without errors
✅ n8n API connection working
✅ Workflow list displays correctly
✅ Execution history shows data
✅ Charts render properly
✅ Real-time updates function
✅ Mobile responsive design
✅ All navigation links work
```

### **8.2 Performance Testing**
1. Run Lighthouse audit
2. Check Core Web Vitals
3. Test loading speeds globally
4. Verify CDN edge caching

## 🚨 Troubleshooting

### **Common Issues & Solutions**

#### **Build Errors**
```bash
# Error: Module not found
Solution: Check package.json dependencies
Run: npm install locally to verify

# Error: Environment variable undefined
Solution: Verify environment variables in Vercel settings
Ensure all required variables are set
```

#### **API Connection Issues**
```bash
# Error: n8n API unreachable
Solutions:
1. Verify N8N_API_BASE_URL is correct
2. Check n8n instance is running
3. Confirm API key is valid
4. Check CORS settings in n8n
```

#### **Deployment Failures**
```bash
# Error: Build timeout
Solution: Optimize build process
Check for large dependencies

# Error: Function timeout
Solution: Increase maxDuration in vercel.json
Optimize API calls
```

## 📊 Step 9: Monitoring & Analytics

### **9.1 Vercel Analytics**
```bash
# Enable Vercel Analytics:
1. Go to project settings
2. Enable "Analytics"
3. View performance metrics
4. Monitor Core Web Vitals
```

### **9.2 Custom Monitoring**
```typescript
// Add error tracking
import * as Sentry from "@sentry/nextjs"

Sentry.init({
  dsn: process.env.SENTRY_DSN,
})
```

## 🔄 Step 10: Continuous Deployment

### **10.1 GitHub Actions (Optional)**
```yaml
# .github/workflows/deploy.yml
name: Deploy to Vercel
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm ci
      - name: Build application
        run: npm run build
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

## ✅ Deployment Checklist

### **Pre-Deployment**
- [ ] Repository pushed to GitHub
- [ ] Environment variables configured
- [ ] n8n instance accessible
- [ ] API key tested
- [ ] Build runs locally without errors

### **Post-Deployment**
- [ ] Dashboard loads successfully
- [ ] n8n API connection verified
- [ ] All features functional
- [ ] Mobile responsiveness tested
- [ ] Performance metrics acceptable
- [ ] Domain configured (if applicable)

## 🎉 Success!

Your n8n workflow dashboard is now live! 🚀

**Production URL**: `https://your-app-name.vercel.app`

### **Next Steps:**
1. **Share with team**: Send the dashboard URL to your team
2. **Set up monitoring**: Enable alerts for workflow failures
3. **Customize**: Add your branding and custom features
4. **Scale**: Monitor usage and upgrade plan if needed

---

## 📞 Support

### **Vercel Support**
- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Community](https://github.com/vercel/vercel/discussions)

### **Project Support**
- Check GitHub issues for common problems
- Review deployment logs in Vercel dashboard
- Test API connections with provided debug tools

**🎉 Your n8n workflow dashboard is now production-ready on Vercel!**