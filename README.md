# PTA - Personal Training Academy

Website for PTA Personal Training Academy, a fitness studio in Heiderscheid, Luxembourg.

**Live URL:** https://pta-training.lu

## Tech Stack

- Next.js 14 (App Router)
- React 18
- Tailwind CSS 3.4
- react-bootstrap-icons
- Swiper.js
- Resend (email delivery)

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Environment Variables

Create a `.env.local` file:

```bash
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=your_email@example.com
```

## Performance

Optimized for PageSpeed Insights with:

- **Next.js Image** optimization with `quality={60}` for large images
- **next/font** for Google Fonts (Caveat) - no render-blocking
- **Responsive images** with proper `sizes` attributes
- **Modern browsers only** via browserslist (last 2 versions)
- **48px touch targets** for accessibility compliance
- **Proper heading hierarchy** (H1 → H2 → H3)

## Documentation

See [CLAUDE.md](./CLAUDE.md) for detailed project documentation including:

- Project structure
- Component reference
- API endpoints
- Styling guide
- SEO configuration
- Development notes

## Pages

- `/` - Homepage
- `/ueber-uns` - About us
- `/leistungen` - Services listing
- `/leistungen/[slug]` - Service details
- `/blog` - Blog listing
- `/blog/[slug]` - Blog posts
- `/kontakt` - Contact form

## Contact

- Phone: +352 691 789 483
- Email: info@pta-training.lu
- Location: 1 Fuussekaul, Heiderscheid, Luxembourg
