# MediaNest — Full API & Integration Requirements

## Already Set Up ✅

### 1. Supabase (Database + Auth)
- **Status**: ✅ Connected
- **Project**: avvzzuxjxriosjfdghlz
- **Tables created**:
  - `contact_submissions` — contact form & general inquiries
  - `audit_requests` — free audit lead magnet submissions
  - `newsletter_subscribers` — email capture
  - `bookings` — Cal.com webhook storage
- **Cost**: Free tier (500MB database, 50K auth users)
- **API key needed**: ✅ Already in `.env.local`

---

## Need to Set Up 🔧

### 2. Resend (Email Notifications)
- **What it does**: Sends email when someone submits a form (to you) + confirmation email (to them)
- **Where to get API key**: https://resend.com/api-keys
- **Free tier**: 3,000 emails/month
- **Env var needed**: `RESEND_API_KEY`
- **Used in**:
  - `POST /api/contact` — notify you of new inquiry
  - `POST /api/audit` — notify you of audit request + send confirmation to lead
  - Newsletter welcome email
- **npm package**: `resend` (already supports React email templates)

### 3. Cal.com (Booking/Scheduling)
- **What it does**: Embeddable booking calendar for strategy calls
- **Where to sign up**: https://cal.com (free account)
- **Free tier**: Unlimited bookings (with Cal.com branding)
- **Env var needed**: `NEXT_PUBLIC_CAL_USERNAME` (your Cal.com username)
- **Used in**:
  - Contact page — "Book a Strategy Call" embed
  - Free Audit page — "Book Your Audit Call" embed
  - CTA sections throughout the site
- **npm package**: `@calcom/embed-react`
- **No API key needed** for basic embed — just your username

### 4. Cloudflare Turnstile (Spam Protection)
- **What it does**: Invisible bot protection on all forms (replaces reCAPTCHA)
- **Where to get keys**: https://dash.cloudflare.com → Turnstile
- **Free tier**: Unlimited
- **Env vars needed**:
  - `NEXT_PUBLIC_TURNSTILE_SITE_KEY`
  - `TURNSTILE_SECRET_KEY`
- **Used in**: All forms (contact, audit, newsletter)
- **No npm package needed** — simple script + API verification

### 5. Vercel Analytics (Performance Monitoring)
- **What it does**: Core Web Vitals, page views, performance scores
- **Where to enable**: Deploy to Vercel → Analytics tab
- **Free tier**: Included with Vercel hobby plan
- **Env var needed**: None (auto-configured on Vercel)
- **npm package**: `@vercel/analytics`
- **Note**: Only works when deployed to Vercel

### 6. Google Maps Embed (Contact Page)
- **What it does**: Shows office location on contact page
- **Where to get key**: https://console.cloud.google.com → Maps Embed API
- **Free tier**: Unlimited embeds (Embed API is free)
- **Env var needed**: `NEXT_PUBLIC_GOOGLE_MAPS_KEY` (optional — can use iframe without key)
- **Alternative**: Use a static map image or OpenStreetMap embed (no API key needed)

---

## Optional / Phase 2 🔮

### 7. Stripe (Payments & Invoicing)
- **What it does**: Accept payments for services, recurring billing
- **When needed**: When you want clients to pay online
- **Free tier**: No monthly fee, 2.9% + 30¢ per transaction
- **Env vars needed**:
  - `STRIPE_SECRET_KEY`
  - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
  - `STRIPE_WEBHOOK_SECRET`
- **npm package**: `stripe`, `@stripe/stripe-js`

### 8. PostHog (Advanced Analytics)
- **What it does**: Session recordings, funnels, heatmaps
- **Free tier**: 1M events/month
- **Env var needed**: `NEXT_PUBLIC_POSTHOG_KEY`
- **npm package**: `posthog-js`

### 9. Crisp Chat Widget
- **What it does**: Live chat bubble on website
- **Free tier**: 2 agents
- **Env var needed**: `NEXT_PUBLIC_CRISP_WEBSITE_ID`
- **No npm package** — script tag loaded lazily

---

## Summary: What You Need to Get Right Now

| Service | Sign Up URL | Get API Key | Priority |
|---------|------------|-------------|----------|
| **Resend** | https://resend.com | Dashboard → API Keys | 🔴 High |
| **Cal.com** | https://cal.com | Just create account + event | 🔴 High |
| **Cloudflare Turnstile** | https://dash.cloudflare.com | Turnstile → Add Site | 🟡 Medium |
| **Vercel** | https://vercel.com | Deploy the project | 🟡 Medium |
| **Google Maps** | https://console.cloud.google.com | Enable Maps Embed API | 🟢 Low |

## .env.local Template (what it should look like when complete)

```env
# Supabase (DONE)
NEXT_PUBLIC_SUPABASE_URL=https://avvzzuxjxriosjfdghlz.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Resend (TODO)
RESEND_API_KEY=re_xxxxxxxxxxxx

# Cal.com (TODO)
NEXT_PUBLIC_CAL_USERNAME=your-cal-username

# Cloudflare Turnstile (TODO)
NEXT_PUBLIC_TURNSTILE_SITE_KEY=0x4AAAAAAA...
TURNSTILE_SECRET_KEY=0x4AAAAAAA...

# Google Maps (OPTIONAL)
NEXT_PUBLIC_GOOGLE_MAPS_KEY=AIzaSy...

# Stripe (PHASE 2)
# STRIPE_SECRET_KEY=sk_live_...
# NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...

# PostHog (PHASE 2)
# NEXT_PUBLIC_POSTHOG_KEY=phc_...

# Crisp (PHASE 2)
# NEXT_PUBLIC_CRISP_WEBSITE_ID=xxxxxxxx-xxxx-xxxx-xxxx
```
