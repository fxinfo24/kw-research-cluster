# 🔧 Exact Vercel Environment Configuration

**Your n8n Instance Details:**
- **Base URL**: https://n8n.cintherian.com
- **API Key**: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlYTZlMmIxMC05OTQ1LTRiNmEtODkwYS02OTIwYzBlMzdjYTEiLCJpc3MiOiJuOG4iLCJhdWQiOiJwdWJsaWMtYXBpIiwiaWF0IjoxNzU3NDE5MjE4fQ.1S2-9xAuo9fgRywWoxTSIvVI0DyV6QzfsnB1VSNmS4A

## 🎯 Step 1: Configure Environment Variables in Vercel

Go to: **https://vercel.com/fxinfo24s-projects/kw-research-cluster/settings/environment-variables**

### **Add/Update These Exact Variables:**

#### **1. n8n API Configuration**
```
Name: N8N_API_BASE_URL
Value: https://n8n.cintherian.com
Environments: ✅ Production ✅ Preview ✅ Development
```

```
Name: N8N_API_KEY  
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlYTZlMmIxMC05OTQ1LTRiNmEtODkwYS02OTIwYzBlMzdjYTEiLCJpc3MiOiJuOG4iLCJhdWQiOiJwdWJsaWMtYXBpIiwiaWF0IjoxNzU3NDE5MjE4fQ.1S2-9xAuo9fgRywWoxTSIvVI0DyV6QzfsnB1VSNmS4A
Environments: ✅ Production ✅ Preview ✅ Development
```

#### **2. Application URLs**
```
Name: NEXT_PUBLIC_APP_URL
Value: https://kw-research-cluster.vercel.app
Environments: ✅ Production ✅ Preview ✅ Development
```

```
Name: NEXT_PUBLIC_WS_URL
Value: wss://n8n.cintherian.com
Environments: ✅ Production ✅ Preview ✅ Development
```

#### **3. Authentication Configuration**
```
Name: NEXTAUTH_URL
Value: https://kw-research-cluster.vercel.app
Environments: ✅ Production ✅ Preview ✅ Development
```

```
Name: NEXTAUTH_SECRET
Value: kw-research-cluster-2024-super-secret-key-for-nextauth-security
Environments: ✅ Production ✅ Preview ✅ Development
```

#### **4. Feature Flags**
```
Name: NEXT_PUBLIC_ENABLE_MOCK_DATA
Value: false
Environments: ✅ Production ✅ Preview ✅ Development
```

```
Name: NEXT_PUBLIC_ENABLE_WEBSOCKET
Value: true
Environments: ✅ Production ✅ Preview ✅ Development
```

```
Name: NODE_ENV
Value: production
Environments: ✅ Production
```

## 🚀 Step 2: Redeploy Your Application

After adding all environment variables:

### **Option A: Redeploy from Vercel Dashboard**
1. Go to: https://vercel.com/fxinfo24s-projects/kw-research-cluster/deployments
2. Click the "⋯" menu on the latest deployment
3. Click "Redeploy"
4. Wait for deployment to complete (2-3 minutes)

### **Option B: Push Update to GitHub**
```bash
# In your local repository
cd kw-research-cluster
echo "Updated environment configuration $(date)" >> DEPLOYMENT_LOG.md
git add .
git commit -m "Configure production environment variables"
git push origin main
```

## 🧪 Step 3: Test Your n8n Connection

### **3.1 Quick API Test**
Test your n8n API directly:
```bash
curl -H "X-N8N-API-KEY: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlYTZlMmIxMC05OTQ1LTRiNmEtODkwYS02OTIwYzBlMzdjYTEiLCJpc3MiOiJuOG4iLCJhdWQiOiJwdWJsaWMtYXBpIiwiaWF0IjoxNzU3NDE5MjE4fQ.1S2-9xAuo9fgRywWoxTSIvVI0DyV6QzfsnB1VSNmS4A" \
     https://n8n.cintherian.com/api/v1/workflows
```

**Expected Response:** JSON array of your workflows

### **3.2 Dashboard Test**
1. Visit: **https://kw-research-cluster.vercel.app/**
2. Check browser console (F12 → Console) for any errors
3. Verify dashboard shows:
   - ✅ Real workflow data (not mock)
   - ✅ Actual execution history
   - ✅ Working charts and metrics
   - ✅ "n8n Connected" status indicator

### **3.3 Feature Testing**
Test these specific features:
- [ ] **Dashboard**: Shows real metrics from your n8n instance
- [ ] **Workflows Page**: Displays your actual workflows
- [ ] **Executions Page**: Shows real execution history
- [ ] **Charts**: Render with actual data
- [ ] **Navigation**: All links work properly
- [ ] **Mobile**: Responsive design functions

## 🔍 Step 4: Verify Your Workflows

Your dashboard should display your actual n8n workflows, including:
- **"Keyword Research & Clustering"** workflow (if you have it)
- Any other workflows in your n8n instance
- Real execution history and status
- Performance metrics

## 🚨 Troubleshooting

### **If Dashboard Still Shows Mock Data:**
1. **Check Environment Variables**: Ensure all variables are saved in Vercel
2. **Wait for Deployment**: New variables need a redeploy to take effect
3. **Clear Browser Cache**: Hard refresh with Ctrl+F5 (Cmd+Shift+R on Mac)
4. **Check Console Errors**: Look for API connection issues in browser dev tools

### **If API Connection Fails:**
1. **Verify n8n API Access**:
   ```bash
   # Test from your browser console:
   fetch('https://n8n.cintherian.com/api/v1/workflows', {
     headers: {
       'X-N8N-API-KEY': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlYTZlMmIxMC05OTQ1LTRiNmEtODkwYS02OTIwYzBlMzdjYTEiLCJpc3MiOiJuOG4iLCJhdWQiOiJwdWJsaWMtYXBpIiwiaWF0IjoxNzU3NDE5MjE4fQ.1S2-9xAuo9fgRywWoxTSIvVI0DyV6QzfsnB1VSNmS4A'
     }
   }).then(r => r.json()).then(console.log)
   ```

2. **Check CORS Settings**: Ensure your n8n instance allows requests from vercel.app domain

3. **Verify API Key**: Make sure the API key hasn't expired

### **Common Issues & Solutions:**

#### **🚨 "CORS Error"**
If you see CORS errors, you may need to configure CORS in your n8n instance:
```bash
# Add to your n8n environment variables:
N8N_CORS_ORIGIN=https://kw-research-cluster.vercel.app,https://*.vercel.app
```

#### **🚨 "401 Unauthorized"**
- Double-check the API key is copied correctly
- Ensure API key hasn't expired
- Verify API key has proper permissions

#### **🚨 "Network Error"**
- Check if https://n8n.cintherian.com is accessible publicly
- Verify SSL certificate is valid
- Test API endpoint directly in browser

## ✅ Success Checklist

Your deployment is successful when:
- [ ] Dashboard loads at https://kw-research-cluster.vercel.app/
- [ ] Shows "n8n Connected" status (green dot)
- [ ] Displays your actual workflows (not mock data)
- [ ] Execution history shows real data
- [ ] Charts render with actual metrics
- [ ] No errors in browser console
- [ ] Mobile version works properly

## 🎉 Expected Results

After configuration, your dashboard will show:

### **Dashboard Page:**
- Real execution metrics from your n8n instance
- Live charts with actual workflow data
- Quick actions to run your workflows
- Recent execution history

### **Workflows Page:**
- List of your actual n8n workflows
- Real execution counts and success rates
- Working start/stop/pause controls
- Performance analytics per workflow

### **Executions Page:**
- Complete history of workflow runs
- Real input/output data
- Execution times and status
- Error details for failed runs

## 🔄 Next Steps After Success

1. **Bookmark Your Dashboard**: https://kw-research-cluster.vercel.app/
2. **Share with Team**: Send the URL to colleagues who need access
3. **Test Workflow Execution**: Try running your keyword research workflow
4. **Monitor Performance**: Check execution success rates and times
5. **Customize**: Add your branding or modify the interface

**🎯 Your n8n workflow dashboard should be fully functional within 5 minutes of applying these settings!**

---

## 📞 Immediate Support

If you encounter any issues:
1. Check the exact error message in browser console
2. Verify all environment variables are saved in Vercel
3. Test the API endpoint directly with curl
4. Check Vercel deployment logs for build errors

**Ready to configure? Start with Step 1 and your dashboard will be live shortly!** 🚀