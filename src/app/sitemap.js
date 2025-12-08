export default function sitemap() {
  const baseUrl = 'https://pta-training.lu';

  // Static pages with actual modification dates
  const staticPages = [
    {
      url: baseUrl,
      lastModified: '2024-12-01',
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/ueber-uns`,
      lastModified: '2024-11-15',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/leistungen`,
      lastModified: '2024-11-15',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: '2024-11-15',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: '2024-11-15',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // Service pages with dates
  const services = [
    { slug: 'personal-training', date: '2024-11-15' },
    { slug: 'ernaehrungsberatung', date: '2024-11-15' },
    { slug: 'gruppentraining', date: '2024-11-15' },
    { slug: 'fitness-bootcamp', date: '2024-11-15' },
    { slug: 'rehabilitation', date: '2024-11-15' },
    { slug: 'sportmannschaften', date: '2024-11-15' },
  ];

  const servicePages = services.map(({ slug, date }) => ({
    url: `${baseUrl}/leistungen/${slug}`,
    lastModified: date,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Blog posts with actual publication dates
  const blogPosts = [
    { slug: 'rueckenschmerzen-uebungen', date: '2024-11-15' },
    { slug: 'ernaehrung-vor-nach-training', date: '2024-11-10' },
    { slug: 'motivation-training-tipps', date: '2024-11-05' },
    { slug: 'hiit-vs-dauerlauf', date: '2024-10-28' },
    { slug: 'schlaf-muskelaufbau', date: '2024-10-20' },
    { slug: 'anfaengerfehler-vermeiden', date: '2024-10-15' },
  ];

  const blogPages = blogPosts.map(({ slug, date }) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: date,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...blogPages];
}
