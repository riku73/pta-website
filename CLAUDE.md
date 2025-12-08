# PTA Website - Project Documentation

## Overview

PTA (Personal Training Academy) is a fitness studio website for a gym located in Heiderscheid, Luxembourg. The site is built with Next.js 14, React 18, and Tailwind CSS, and is entirely in German.

**Live URL:** https://pta-training.lu

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **UI Library:** React 18
- **Styling:** Tailwind CSS 3.4
- **Icons:** react-bootstrap-icons
- **Slider:** Swiper.js
- **Language:** German (de_DE)

## Project Structure

```
/src
├── /app                     # Next.js App Router pages
│   ├── /api/contact         # Contact form API endpoint
│   ├── /blog                # Blog listing page
│   │   └── /[slug]          # Dynamic blog post pages
│   ├── /kontakt             # Contact page with multi-step form
│   ├── /leistungen          # Services listing page
│   │   └── /[slug]          # Dynamic service detail pages
│   ├── /ueber-uns           # About page
│   ├── globals.css          # Global styles
│   ├── layout.js            # Root layout with schema.org
│   ├── page.js              # Homepage
│   └── sitemap.js           # Dynamic sitemap generation
├── /components              # React components
│   ├── /About               # About section with tabs
│   ├── /Blogs               # Blog components
│   ├── /Contact             # Multi-step contact form
│   ├── /Services            # Services components
│   ├── /Shared              # Shared components (Header, Footer, etc.)
│   ├── /WorkProcess         # How-it-works section
│   ├── Banner.jsx           # Hero banner
│   ├── Meeting.jsx          # Contact CTA section
│   └── Testimonial.jsx      # Testimonials slider
└── /utils                   # Utilities and data files
    ├── blogList.jsx         # Blog post metadata
    ├── menuList.jsx         # Navigation structure
    └── socialIcons.jsx      # Social media links
```

## Pages

### Homepage (`/`)
- Hero banner with background image
- About section with tabbed content
- Services overview
- Work process (3 steps)
- Testimonials slider
- Meeting/Contact CTA
- Blog preview

### About (`/ueber-uns`)
- Company story
- Team/expertise cards
- Statistics (500+ clients, 10+ years, 5 trainers, 98% success)

### Services (`/leistungen`)
- 6 services with cards and pricing packages
- Dynamic routes: `/leistungen/[slug]`

**Available services:**
- `personal-training` - Personal Training
- `ernaehrungsberatung` - Nutrition Counseling
- `gruppentraining` - Group Training
- `fitness-bootcamp` - Fitness Bootcamp
- `rehabilitation` - Rehabilitation
- `sportmannschaften` - Sports Teams

### Blog (`/blog`)
- 6 blog posts with markdown parsing
- Dynamic routes: `/blog/[slug]`

**Available posts:**
- `rueckenschmerzen-uebungen`
- `ernaehrung-vor-nach-training`
- `motivation-training-tipps`
- `hiit-vs-dauerlauf`
- `schlaf-muskelaufbau`
- `anfaengerfehler-vermeiden`

### Contact (`/kontakt`)
- Multi-step form (3 steps)
- Step 1: Goals and service selection
- Step 2: Fitness level and availability
- Step 3: Contact information

## Key Components

### Header (`/components/Shared/Header/`)
- Transparent on desktop, solid on scroll
- Mobile hamburger menu with slide-in drawer
- Sticky behavior on scroll

### MultiStepForm (`/components/Contact/MultiStepForm.jsx`)
- 3-step wizard with icons
- Form validation
- Submits to `/api/contact`

### Testimonial (`/components/Testimonial.jsx`)
- Swiper.js carousel
- Auto-play with navigation

## Styling

### Custom Tailwind Colors
Defined in `tailwind.config.js`:

- `clr_base` - Primary green (#cae000)
- `clr_pra` - Paragraph text (gray)
- `clr_title` - Title text (dark)
- `clr_white` - White text
- `clr_body` - Body text
- `clr_cusborder` - Custom border color
- `clr_subtitle` - Subtitle text
- `clr_mtitle` - Menu title
- `common_bg` - Section background (#1a1a1a)

### Custom Font
- `Caveat` - Decorative font for accent text

### Responsive Breakpoints
Standard Tailwind breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `xxl`: 1400px

## API Endpoints

### POST `/api/contact`
Handles contact form submissions.

**Request body:**
```json
{
  "goals": ["muskelaufbau", "abnehmen"],
  "service": "personal-training",
  "fitnessLevel": "anfaenger",
  "availability": ["morgens", "abends"],
  "healthIssues": "no",
  "healthDetails": "",
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+352 123 456",
  "message": "Optional message"
}
```

**Response:**
```json
{ "success": true }
```

**Email Integration:**
Uses Resend for email delivery. Requires environment variables:
- `RESEND_API_KEY` - Resend API key
- `CONTACT_EMAIL` - Recipient email address (defaults to info@pta-training.lu)

## SEO

### Schema.org
- LocalBusiness schema in root layout
- Service offerings structured data
- Opening hours, contact info, social links

### Meta Tags
- OpenGraph tags on all pages
- Twitter card support
- Canonical URLs
- German locale (de_DE)

### Sitemap
Dynamic sitemap at `/sitemap.js` includes:
- All static pages
- All service detail pages
- All blog posts

## External Integrations

### Social Media
- Facebook: https://www.facebook.com/PTAlTraining
- Instagram: https://www.instagram.com/pta.training

### Contact Information
- Phone: +352 691 789 483
- Email: info@pta-training.lu
- Address: 1 Fuussekaul, Heiderscheid, Luxembourg

### Business Hours
- Mon-Thu: 08:00 - 21:00
- Fri: 09:00 - 19:00
- Sat: 09:00 - 12:00
- Sun: Closed

## Development Commands

```bash
npm run dev    # Start development server (http://localhost:3000)
npm run build  # Production build
npm run start  # Start production server
npm run lint   # Run ESLint
```

## Environment Variables

Create a `.env.local` file with:

```bash
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=your_email@example.com
```

## Images

All images are stored in `/public/images/`:
- `pta-logo.svg` - Main logo
- `og-image.jpg` - OpenGraph social sharing image
- `gym-interior-wide.jpg` - Hero background
- `team-trainers.jpg` - Team photo
- Various gym equipment and facility photos

## Notes

### Navigation Behavior
- All navigation uses `scroll={false}` with manual scroll to top
- Prevents scroll restoration issues between pages
- Mobile menu closes on navigation

### French Apostrophes
When adding German text content, be careful with apostrophes. Use `&apos;` or `{String.fromCharCode(39)}` instead of `'` in JSX to avoid build errors.

### Adding New Pages
1. Create new folder in `/src/app/`
2. Add `page.js` with metadata export
3. Update `sitemap.js` if needed
4. Add to navigation in `menuList.jsx`

### Adding New Blog Posts
1. Add entry to `/src/utils/blogList.jsx`
2. Add full content to `blogData` in `/src/app/blog/[slug]/page.js`
3. Include proper metadata and markdown content

### Adding New Services
1. Add entry to services arrays in `/src/app/leistungen/page.js`
2. Add full content to `servicesData` in `/src/app/leistungen/[slug]/page.js`
3. Update schema.org in `layout.js` if needed
