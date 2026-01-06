# 🚐 Nomanding - Van Rental Platform

A modern van rental platform built with React, TypeScript, and Node.js. Browse available vans, view details, and manage your van hosting business.

![Vite](https://img.shields.io/badge/Vite-7.1.11-646CFF?logo=vite)
![React](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript)
![Node.js](https://img.shields.io/badge/Node.js-Latest-339933?logo=node.js)

---

## ✨ Features

- 🔍 **Browse Vans** - Explore available vans with detailed information
- 🏠 **Host Dashboard** - Manage your van listings, income, and reviews
- 🔐 **Authentication** - Secure login system
- 📱 **Responsive Design** - Works on all devices
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development

---

## 🏗️ Architecture

This project uses a **split architecture**:

- **Frontend**: React SPA with React Router
- **Backend**: Node.js HTTP server with REST API
- **Data**: JSON-based storage (ready for database migration)

```
Frontend (React)  ←→  Backend (Node.js)  ←→  Data (JSON)
```

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/nomanding.git
cd nomanding

# Install dependencies
npm install
```

### Development

Run both frontend and backend:

```bash
# Terminal 1 - Start backend server (port 8000)
npm run server

# Terminal 2 - Start frontend dev server (port 5173)
npm run dev
```

Visit: `http://localhost:5173`

**Test Login:**
- Email: `b@b.com`
- Password: `p123`

---

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start frontend development server |
| `npm run build` | Build frontend for production |
| `npm run preview` | Preview production build locally |
| `npm run server` | Start backend API server |
| `npm run start` | Start both frontend and backend |
| `npm run lint` | Run ESLint |

---

## 🌐 Deployment

This project is designed for **split deployment**:

- **Frontend** → Vercel (or Netlify, Cloudflare Pages)
- **Backend** → Railway (or Render, Fly.io)

### Quick Deployment Guide

See **[DEPLOYMENT_QUICK.md](./DEPLOYMENT_QUICK.md)** for a fast deployment guide.

See **[DEPLOYMENT.md](./DEPLOYMENT.md)** for detailed step-by-step instructions.

### Why Split Architecture?

✅ **Better Performance** - Frontend served via CDN  
✅ **Scalability** - Scale frontend and backend independently  
✅ **Cost Effective** - Use free tiers on both platforms  
✅ **Best Practices** - Industry-standard architecture  

---

## 🗂️ Project Structure

```
nomanding/
├── src/                    # Frontend source code
│   ├── api/               # API client functions
│   ├── components/        # React components
│   ├── pages/             # Page components
│   └── types/             # TypeScript types
├── server/                # Backend server code
│   ├── server.js          # Main server file
│   ├── serveData.ts       # Data serving logic
│   └── sendResponse.ts    # Response helper
├── data/                  # JSON data files
│   └── vansData.json      # Van listings data
├── public/                # Static assets
├── .env.local             # Local environment variables (not committed)
├── .env.production        # Production environment template
└── package.json           # Dependencies and scripts
```

---

## 🔧 Configuration

### Environment Variables

**Development** (`.env.local`):
```env
VITE_API_URL=http://localhost:8000
```

**Production** (`.env.production`):
```env
VITE_API_URL=https://your-backend-url.railway.app
```

### Backend Environment

Set these on your hosting platform:
```env
PORT=8000
CORS_ORIGIN=https://your-frontend-url.vercel.app
```

---

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library
- **TypeScript** - Type safety
- **React Router** - Client-side routing
- **Vite** - Build tool and dev server
- **CSS3** - Styling

### Backend
- **Node.js** - Runtime
- **HTTP Module** - Native HTTP server
- **TypeScript** - Type safety
- **tsx** - TypeScript execution

---

## 📱 Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Home page |
| `/about` | About page |
| `/vans` | Browse all vans |
| `/vans/:id` | Van details |
| `/login` | Login page |
| `/host` | Host dashboard (protected) |
| `/host/income` | Income overview (protected) |
| `/host/reviews` | Reviews (protected) |
| `/host/vans` | Your van listings (protected) |
| `/host/vans/:id` | Van management (protected) |

---

## 🔐 Authentication

Currently uses a simple mock authentication system:
- Email: `b@b.com`
- Password: `p123`

**Note**: This is for development only. For production, implement:
- JWT tokens
- Password hashing (bcrypt)
- Secure session management
- Database-backed user storage

---

## 🎨 Styling

The project uses **vanilla CSS** with:
- CSS custom properties (variables)
- Flexbox and Grid layouts
- Responsive design patterns
- Mobile-first approach

---

## 🧪 Testing

```bash
# Run linter
npm run lint

# Build to check for errors
npm run build
```

---

## 🚧 Roadmap

- [ ] Database integration (PostgreSQL)
- [ ] Real authentication with JWT
- [ ] Image upload for vans
- [ ] Booking system
- [ ] Payment integration
- [ ] Email notifications
- [ ] Admin panel
- [ ] Search and filters
- [ ] Reviews and ratings

---

## 📚 Learning Resources

This project demonstrates:
- React with TypeScript
- Client-side routing
- API integration
- Environment variables
- CORS handling
- Split architecture deployment
- Modern build tools (Vite)

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🆘 Support

- 📖 [Deployment Guide](./DEPLOYMENT.md)
- 🚀 [Quick Start](./DEPLOYMENT_QUICK.md)
- 🐛 [Report Issues](https://github.com/yourusername/nomanding/issues)

---

## 👨‍💻 Author

Built with ❤️ for learning full-stack development

---

**Happy Coding! 🚐✨**
