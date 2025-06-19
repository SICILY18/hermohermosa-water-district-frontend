# Hermosa Water District - Frontend

A modern Next.js frontend for the Hermosa Water District management system.

## Features

- 🔐 Admin authentication
- 📊 Dashboard with real-time statistics
- 👥 Customer and staff management
- 💰 Payment processing
- 📢 Announcements system
- 🎟️ Ticket management
- 📱 Responsive design with Tailwind CSS

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** React Hooks
- **HTTP Client:** Axios
- **UI Components:** Headless UI

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-frontend-repo-url>
cd hermosa-water-district-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp env.example .env.local
```

4. Update the environment variables:
```env
NEXT_PUBLIC_API_URL=https://your-backend-url.render.com
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This app is configured for deployment on Vercel.

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

The app will be automatically deployed on every push to the main branch.

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_API_URL` | Backend API URL | `https://api.example.com` |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL | `https://xxx.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` |

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
├── components/          # Reusable UI components
├── utils/              # Utility functions and API calls
└── types/              # TypeScript type definitions
```

## API Integration

The frontend communicates with the Laravel backend through REST API endpoints. All API calls are centralized in `src/utils/api.ts`.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary software for Hermosa Water District. 