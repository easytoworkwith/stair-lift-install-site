# Stair Lift Install Lead Gen Website

Ready-to-deploy Next.js + Tailwind website for Stair Lift Installation call lead generation.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create `.env.local` from `.env.example`:

```bash
cp .env.example .env.local
```

3. Update phone values in `.env.local`:

```env
NEXT_PUBLIC_PHONE_DISPLAY=(555) 123-4567
NEXT_PUBLIC_PHONE_TEL=+15551234567
NEXT_PUBLIC_SITE_NAME=Stair Lift Connect
```

4. Run locally:

```bash
npm run dev
```

5. Deploy to Vercel:

- Push this folder to GitHub
- Import the repo in Vercel
- Add the same environment variables in Vercel Project Settings
- Deploy

## Included Pages

- `/` Home landing page
- `/privacy-policy`
- `/terms`
- `/contact`

## Compliance Notes

The copy avoids risky claims such as free stair lift, Medicare coverage, guaranteed installation, same-day guarantee, lowest price, or government program claims.

## Call Center Hours Included

- Monday through Friday: 7am - 10pm EST
- Saturday: 8am - 10pm EST
- Sunday: 7am - 9pm EST
