# 🧪 n8n API Testing Guide

Your curl command got corrupted with line breaks. Here are the correct ways to test your n8n API:

## 🔧 Method 1: Correct Curl Command

Copy this **exact** command (all on one line):

```bash
curl -H "X-N8N-API-KEY: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlYTZlMmIxMC05OTQ1LTRiNmEtODkwYS02OTIwYzBlMzdjYTEiLCJpc3MiOiJuOG4iLCJhdWQiOiJwdWJsaWMtYXBpIiwiaWF0IjoxNzU3NDE5MjE4fQ.1S2-9xAuo9fgRywWoxTSIvVI0DyV6QzfsnB1VSNmS4A" https://n8n.cintherian.com/api/v1/workflows
```

**Note the space after `X-N8N-API-KEY:`**

## 🌐 Method 2: Test in Browser

This is easier! Open your browser and:

1. **Go to**: https://n8n.cintherian.com/api/v1/workflows
2. **Open Developer Tools** (F12)
3. **Go to Console tab**
4. **Paste this code**:

```javascript
fetch('https://n8n.cintherian.com/api/v1/workflows', {
  headers: {
    'X-N8N-API-KEY': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlYTZlMmIxMC05OTQ1LTRiNmEtODkwYS02OTIwYzBlMzdjYTEiLCJpc3MiOiJuOG4iLCJhdWQiOiJwdWJsaWMtYXBpIiwiaWF0IjoxNzU3NDE5MjE4fQ.1S2-9xAuo9fgRywWoxTSIvVI0DyV6QzfsnB1VSNmS4A'
  }
})
.then(response => response.json())
.then(data => {
  console.log('✅ n8n API Response:', data);
  if (data.length > 0) {
    console.log('🎉 Found', data.length, 'workflows!');
  }
})
.catch(error => {
  console.error('❌ API Error:', error);
});
```

## 🏠 Method 3: Direct n8n Dashboard Check

1. **Visit**: https://n8n.cintherian.com
2. **Log in** to your n8n instance
3. **Check workflows** are visible
4. **Verify API key** in Settings → API Keys

## 🎯 Method 4: Skip API Test - Configure Vercel Directly

Since we know your n8n instance is working (you have the API key), let's just configure Vercel:

### **Configure Vercel Environment Variables**

Go to: **https://vercel.com/fxinfo24s-projects/kw-research-cluster/settings/environment-variables**

**Add these exact variables:**

```
Variable Name: N8N_API_BASE_URL
Value: https://n8n.cintherian.com
Environments: Production, Preview, Development

Variable Name: N8N_API_KEY
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlYTZlMmIxMC05OTQ1LTRiNmEtODkwYS02OTIwYzBlMzdjYTEiLCJpc3MiOiJuOG4iLCJhdWQiOiJwdWJsaWMtYXBpIiwiaWF0IjoxNzU3NDE5MjE4fQ.1S2-9xAuo9fgRywWoxTSIvVI0DyV6QzfsnB1VSNmS4A
Environments: Production, Preview, Development

Variable Name: NEXT_PUBLIC_APP_URL
Value: https://kw-research-cluster.vercel.app
Environments: Production, Preview, Development

Variable Name: NEXTAUTH_URL
Value: https://kw-research-cluster.vercel.app
Environments: Production, Preview, Development

Variable Name: NEXTAUTH_SECRET
Value: kw-research-cluster-2024-secret-key-32-chars-min
Environments: Production, Preview, Development

Variable Name: NEXT_PUBLIC_ENABLE_MOCK_DATA
Value: false
Environments: Production, Preview, Development
```

## 🚀 Test Your Dashboard

After configuring Vercel:

1. **Redeploy** your project in Vercel
2. **Wait 2-3 minutes** for deployment
3. **Visit**: https://kw-research-cluster.vercel.app/

### **Expected Results:**

✅ **Dashboard loads without errors**
✅ **Shows "n8n Connected" status** (green dot in header)
✅ **Displays real workflow data** (not mock data)
✅ **Charts show actual metrics**
✅ **Workflows page lists your n8n workflows**

## 🔍 If Dashboard Still Shows Mock Data

1. **Check browser console** (F12 → Console) for errors
2. **Hard refresh** the page (Ctrl+F5 or Cmd+Shift+R)
3. **Verify environment variables** are saved in Vercel
4. **Check deployment logs** in Vercel for any errors

## 📊 Quick Browser Test

Once your dashboard is deployed, test the API connection directly in the dashboard:

1. **Open**: https://kw-research-cluster.vercel.app/
2. **Open browser console** (F12)
3. **Look for any error messages**
4. **Check if data is loading**

## 🎯 Success Indicators

Your dashboard is working when you see:

- ✅ Real execution numbers (not 1,247 mock data)
- ✅ Your actual workflow names
- ✅ Real execution history
- ✅ Working charts with your data
- ✅ "n8n Connected" status in header

## 🔧 Alternative: Use Postman or Insomnia

If curl isn't working, you can use a GUI tool:

### **Postman Setup:**
1. **Method**: GET
2. **URL**: https://n8n.cintherian.com/api/v1/workflows
3. **Headers**: 
   - Key: `X-N8N-API-KEY`
   - Value: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlYTZlMmIxMC05OTQ1LTRiNmEtODkwYS02OTIwYzBlMzdjYTEiLCJpc3MiOiJuOG4iLCJhdWQiOiJwdWJsaWMtYXBpIiwiaWF0IjoxNzU3NDE5MjE4fQ.1S2-9xAuo9fgRywWoxTSIvVI0DyV6QzfsnB1VSNmS4A`

## 🎉 Skip Testing - Let's Deploy!

Since we have your working n8n details, let's just configure Vercel and test through the dashboard. The API testing was just to verify, but we can do that after deployment.

**Next step: Configure the Vercel environment variables and redeploy!**