# 🚀 Quick Deployment Cheat Sheet

## 📦 Backend (Railway)

1. **Deploy**: Connect GitHub repo at [railway.app](https://railway.app)
2. **Environment Variables**:
   ```
   PORT=8000
   CORS_ORIGIN=https://your-frontend.vercel.app
   ```
3. **Get URL**: Settings → Generate Domain
4. **Test**: Visit `https://your-backend.railway.app/api/vans`

---

## 🎨 Frontend (Vercel)

1. **Update `.env.production`**:
   ```
   VITE_API_URL=https://your-backend.railway.app
   ```
2. **Commit & Push**:
   ```bash
   git add .env.production
   git commit -m "Update API URL"
   git push
   ```
3. **Deploy**: Import repo at [vercel.com](https://vercel.com)
4. **Test**: Visit your Vercel URL

---

## 🔄 Update CORS

Go back to Railway → Variables → Update `CORS_ORIGIN` with Vercel URL

---

## ✅ Done!

Your app is live! 🎉

**Login credentials:**
- Email: `b@b.com`
- Password: `p123`
