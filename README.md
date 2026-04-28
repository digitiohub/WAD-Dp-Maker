# WAD DP Maker

Public Next.js 16 app for creating **Act On Asthma WAD 2026 Doctor DP** images.

## What it does

- Upload a doctor photo in the browser
- Crop and zoom the photo
- Composite it behind the WAD frame
- Generate and download a 900x900 JPG
- Log count-only generation events in MongoDB
- Show password-protected stats at `/admin`

The app does not store uploaded photos, doctor names, employee IDs, or login data.
The admin stats password is hardcoded as `12345678`.

## Environment variables

Copy `.env.example` to `.env.local` and fill in:

```bash
MONGODB_URI=
MONGODB_DB_NAME=default
```

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Useful routes

- `/` - public DP maker
- `/admin/login` - admin password page
- `/admin` - count-only generation stats
- `/api/generations` - POST endpoint used by the maker after successful JPG generation

## Available scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

See `DEPLOYMENT.md` for the Coolify deployment guide.
