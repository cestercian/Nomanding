# 🚀 Deployment Guide - Split Architecture

This guide will help you deploy your Nomanding app using a **split architecture**:
- **Frontend** → Vercel (free)
- **Backend** → Railway (free tier available)

---

## 📋 Prerequisites

1. **GitHub Account** - Your code should be pushed to GitHub
2. **Vercel Account** - Sign up at [vercel.com](https://vercel.com) (free)
3. **Railway Account** - Sign up at [railway.app](https://railway.app) (free tier)

---

## 🎯 Part 1: Deploy Backend to Railway

### Step 1: Push Your Code to GitHub

```bash
git add .
git commit -m "Prepare for deployment"
git push origin main
```

### Step 2: Deploy to Railway

1. **Go to [railway.app](https://railway.app)**
2. Click **"Start a New Project"**
3. Select **"Deploy from GitHub repo"**
4. Choose your **Nomanding** repository
5. Railway will auto-detect it's a Node.js project

### Step 3: Configure Environment Variables

In Railway dashboard:
1. Go to your project
2. Click **"Variables"** tab
3. Add these variables:
   ```
   PORT=8000
   CORS_ORIGIN=https://your-frontend-url.vercel.app
   ```
   ⚠️ **Note**: You'll update `CORS_ORIGIN` after deploying the frontend

### Step 4: Get Your Backend URL

1. Go to **"Settings"** tab in Railway
2. Click **"Generate Domain"** under **Networking**
3. Copy the URL (e.g., `https://nomanding-production.up.railway.app`)
4. **Save this URL** - you'll need it for the frontend!

### Step 5: Test Your Backend

Visit: `https://your-backend-url.railway.app/api/vans`

You should see your vans data!

---

## 🎨 Part 2: Deploy Frontend to Vercel

### Step 1: Update Production Environment File

Edit `.env.production` and replace with your Railway backend URL:

```env
VITE_API_URL=https://your-backend-url.railway.app
```

**Example:**
```env
VITE_API_URL=https://nomanding-production.up.railway.app
```

### Step 2: Commit the Change

```bash
git add .env.production
git commit -m "Update production API URL"
git push origin main
```

### Step 3: Deploy to Vercel

1. **Go to [vercel.com](https://vercel.com)**
2. Click **"Add New Project"**
3. **Import** your GitHub repository
4. Vercel will auto-detect it's a Vite project
5. Click **"Deploy"**

### Step 4: Get Your Frontend URL

After deployment completes:
1. Copy your Vercel URL (e.g., `https://nomanding.vercel.app`)
2. **Test your app** - it should work!

---

## 🔄 Part 3: Update CORS Settings

Now that you have your frontend URL, update the backend:

### Step 1: Update Railway Environment Variable

1. Go back to **Railway dashboard**
2. Go to **"Variables"** tab
3. Update `CORS_ORIGIN` with your Vercel URL:
   ```
   CORS_ORIGIN=https://nomanding.vercel.app
   ```
4. Click **"Save"**
5. Railway will automatically redeploy

### Step 2: Test Everything

1. Visit your Vercel URL
2. Try logging in (email: `b@b.com`, password: `p123`)
3. Browse the vans
4. Everything should work! 🎉

---

## 🧪 Testing Locally

To test the split architecture locally:

### Terminal 1 - Backend:
```bash
npm run server
```

### Terminal 2 - Frontend:
```bash
npm run dev
```

Visit: `http://localhost:5173`

---

## 🔧 Troubleshooting

### Issue: CORS errors in browser console

**Solution:**
- Make sure `CORS_ORIGIN` in Railway matches your Vercel URL exactly
- Include `https://` in the URL
- No trailing slash

### Issue: API calls failing (404 or network errors)

**Solution:**
- Check `.env.production` has the correct Railway URL
- Make sure you committed and pushed the change
- Redeploy on Vercel if needed

### Issue: Backend not responding

**Solution:**
- Check Railway logs (click "Deployments" → "View Logs")
- Make sure `PORT` environment variable is set
- Verify the server is running

---

## 📊 Architecture Overview

```
┌─────────────────┐
│   User Browser  │
└────────┬────────┘
         │
         ├──────────────────┐
         │                  │
         ▼                  ▼
┌─────────────────┐  ┌──────────────────┐
│  Vercel (CDN)   │  │  Railway Server  │
│   React App     │  │   Node.js API    │
│  (Static Files) │  │   Port 8000      │
└─────────────────┘  └──────────────────┘
                              │
                              ▼
                     ┌─────────────────┐
                     │  vansData.json  │
                     └─────────────────┘
```

---

## 💰 Cost Breakdown

- **Vercel**: FREE (100GB bandwidth/month)
- **Railway**: FREE tier ($5 credit/month, then pay-as-you-go)
- **Total**: $0/month for learning projects

---

## 🔄 Making Updates

### Update Frontend:
```bash
# Make your changes
git add .
git commit -m "Update frontend"
git push origin main
# Vercel auto-deploys!
```

### Update Backend:
```bash
# Make your changes
git add .
git commit -m "Update backend"
git push origin main
# Railway auto-deploys!
```

---

## 🎓 What You Learned

✅ **Environment variables** - Different configs for dev/prod  
✅ **CORS** - Cross-origin resource sharing  
✅ **Split architecture** - Frontend and backend separation  
✅ **CI/CD** - Continuous deployment from GitHub  
✅ **Cloud platforms** - Vercel and Railway  

---

## 📚 Next Steps

1. **Add a database** - Replace JSON file with PostgreSQL
2. **Add authentication** - JWT tokens instead of mock user
3. **Add monitoring** - Track errors and performance
4. **Custom domain** - Use your own domain name

---

## 🆘 Need Help?

- **Railway Docs**: [docs.railway.app](https://docs.railway.app)
- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Vite Env Vars**: [vitejs.dev/guide/env-and-mode](https://vitejs.dev/guide/env-and-mode)

---

**Good luck with your deployment! 🚀**
