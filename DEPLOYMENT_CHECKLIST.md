# ✅ Deployment Checklist

Use this checklist to ensure you don't miss any steps during deployment.

---

## 📋 Pre-Deployment

- [ ] Code is working locally
- [ ] All changes are committed to Git
- [ ] Code is pushed to GitHub
- [ ] You have accounts on:
  - [ ] GitHub
  - [ ] Railway (or Render)
  - [ ] Vercel

---

## 🚂 Backend Deployment (Railway)

### Initial Setup
- [ ] Go to [railway.app](https://railway.app)
- [ ] Click "Start a New Project"
- [ ] Select "Deploy from GitHub repo"
- [ ] Choose your Nomanding repository
- [ ] Wait for initial deployment to complete

### Environment Variables
- [ ] Go to "Variables" tab
- [ ] Add `PORT` = `8000`
- [ ] Add `CORS_ORIGIN` = `http://localhost:5173` (temporary)
- [ ] Click "Save"

### Get Backend URL
- [ ] Go to "Settings" tab
- [ ] Click "Generate Domain" under Networking
- [ ] Copy the URL (e.g., `https://nomanding-production.up.railway.app`)
- [ ] Save this URL somewhere - you'll need it!

### Test Backend
- [ ] Visit: `https://your-backend-url.railway.app/api/vans`
- [ ] Verify you see JSON data with vans
- [ ] If you see data, backend is working! ✅

---

## 🎨 Frontend Deployment (Vercel)

### Update Environment File
- [ ] Open `.env.production` in your code editor
- [ ] Replace with your Railway backend URL:
  ```
  VITE_API_URL=https://your-actual-backend-url.railway.app
  ```
- [ ] Save the file

### Commit Changes
- [ ] Run: `git add .env.production`
- [ ] Run: `git commit -m "Update production API URL"`
- [ ] Run: `git push origin main`
- [ ] Verify changes are on GitHub

### Deploy to Vercel
- [ ] Go to [vercel.com](https://vercel.com)
- [ ] Click "Add New Project"
- [ ] Click "Import" next to your repository
- [ ] Vercel auto-detects settings (don't change anything)
- [ ] Click "Deploy"
- [ ] Wait for deployment (usually 1-2 minutes)

### Get Frontend URL
- [ ] Copy your Vercel URL (e.g., `https://nomanding.vercel.app`)
- [ ] Save this URL!

### Test Frontend
- [ ] Visit your Vercel URL
- [ ] You might see CORS errors in console - that's expected!
- [ ] We'll fix this in the next step

---

## 🔄 Update CORS Settings

### Update Railway Environment
- [ ] Go back to Railway dashboard
- [ ] Go to "Variables" tab
- [ ] Find `CORS_ORIGIN`
- [ ] Update value to your Vercel URL:
  ```
  https://your-actual-frontend.vercel.app
  ```
- [ ] Make sure to include `https://` and NO trailing slash
- [ ] Click "Save"
- [ ] Railway will automatically redeploy (wait ~1 minute)

---

## 🧪 Final Testing

### Test All Features
- [ ] Visit your Vercel URL
- [ ] Open browser DevTools (F12) → Console tab
- [ ] Check for errors (should be none now!)
- [ ] Click "Vans" in navigation
- [ ] Verify vans are loading
- [ ] Click on a van to see details
- [ ] Go to "Login" page
- [ ] Login with:
  - Email: `b@b.com`
  - Password: `p123`
- [ ] Verify you're redirected to Host dashboard
- [ ] Check "Income" page
- [ ] Check "Reviews" page
- [ ] Check "Vans" page in Host section
- [ ] Click on a van in Host section
- [ ] Verify all tabs work (Info, Pricing, Photos)

### Verify API Calls
- [ ] Open DevTools → Network tab
- [ ] Refresh the page
- [ ] Look for calls to your Railway backend
- [ ] Verify they return 200 status codes
- [ ] Check response data looks correct

---

## 🎉 Success Criteria

Your deployment is successful if:

✅ Frontend loads without errors  
✅ Vans page shows all vans  
✅ Van details page works  
✅ Login works  
✅ Host dashboard is accessible after login  
✅ All host pages work  
✅ No CORS errors in console  
✅ API calls return 200 status  

---

## 🐛 Troubleshooting

### Issue: CORS Errors

**Symptoms:**
```
Access to fetch at 'https://...' from origin 'https://...' has been blocked by CORS policy
```

**Solution:**
- [ ] Check `CORS_ORIGIN` in Railway matches your Vercel URL exactly
- [ ] Make sure it includes `https://`
- [ ] Make sure there's NO trailing slash
- [ ] Wait 1-2 minutes for Railway to redeploy
- [ ] Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)

### Issue: API Calls Failing (404)

**Symptoms:**
```
GET https://your-backend.railway.app/api/vans 404 Not Found
```

**Solution:**
- [ ] Check Railway logs (Deployments → View Logs)
- [ ] Verify server is running
- [ ] Check `PORT` environment variable is set to `8000`
- [ ] Verify the URL in `.env.production` is correct
- [ ] Redeploy Vercel if you changed `.env.production`

### Issue: Frontend Shows Old Code

**Solution:**
- [ ] Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
- [ ] Clear browser cache
- [ ] Check Vercel deployment logs
- [ ] Verify latest commit is deployed

### Issue: Backend Not Responding

**Solution:**
- [ ] Go to Railway dashboard
- [ ] Click "Deployments"
- [ ] Click "View Logs"
- [ ] Look for errors
- [ ] Verify server started successfully
- [ ] Check for message: "server is connected to 8000"

---

## 📊 Deployment URLs

Fill this in as you deploy:

**Backend (Railway):**
```
https://_________________________________.railway.app
```

**Frontend (Vercel):**
```
https://_________________________________.vercel.app
```

**Test Login:**
- Email: `b@b.com`
- Password: `p123`

---

## 🔄 Future Updates

### To Update Frontend:
```bash
# Make your changes
git add .
git commit -m "Your message"
git push origin main
# Vercel auto-deploys!
```

### To Update Backend:
```bash
# Make your changes
git add .
git commit -m "Your message"
git push origin main
# Railway auto-deploys!
```

---

## 📚 Reference Documents

- 📖 [Full Deployment Guide](./DEPLOYMENT.md)
- 🚀 [Quick Reference](./DEPLOYMENT_QUICK.md)
- 🏗️ [Architecture Diagram](./ARCHITECTURE.md)
- 📘 [Main README](./README.md)

---

## ✅ Deployment Complete!

Once all checkboxes are checked, your app is live! 🎉

**Share your deployed app:**
- Frontend: `https://your-app.vercel.app`
- Add it to your portfolio
- Share with friends
- Keep building! 🚀

---

**Good luck! You've got this! 💪**
