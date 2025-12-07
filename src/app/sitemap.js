export default function sitemap() {
  const baseUrl = 'https://pta-training.lu';

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/ueber-uns`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/leistungen`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // Service pages
  const services = [
    'personal-training',
    'ernaehrungsberatung',
    'gruppentraining',
    'fitness-bootcamp',
    'rehabilitation',
    'sportmannschaften',
  ];

  const servicePages = services.map((slug) => ({
    url: `${baseUrl}/leistungen/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Blog posts
  const blogPosts = [
    'rueckenschmerzen-uebungen',
    'ernaehrung-vor-nach-training',
    'motivation-training-tipps',
    'hiit-vs-dauerlauf',
    'schlaf-muskelaufbau',
    'anfaengerfehler-vermeiden',
  ];

  const blogPages = blogPosts.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...blogPages];
}
