import React from "react";
import PageHeader from "../../Components/Shared/PageHeader";
import Link from "next/link";
import { ArrowRight, Calendar, Person } from "react-bootstrap-icons";

export const metadata = {
  title: "Fitness Blog | PTA Personal Training Academy Luxembourg",
  description: "Tipps zu Training, Ernährung und Motivation. Expertenwissen von zertifizierten Personal Trainern aus Luxemburg. Rückenschmerzen, HIIT, Muskelaufbau und mehr.",
  openGraph: {
    title: "Fitness Blog | PTA Training Luxembourg",
    description: "Tipps zu Training, Ernährung und Motivation. Expertenwissen von zertifizierten Personal Trainern aus Luxemburg.",
    url: "https://pta-training.lu/blog",
    siteName: "PTA Training",
    locale: "de_DE",
    type: "website",
  },
};

const blogPosts = [
  {
    id: 1,
    slug: "rueckenschmerzen-uebungen",
    title: "Rückenschmerzen? Diese Übungen helfen wirklich",
    excerpt: "Stundenlanges Sitzen macht den Rücken mürbe – aber mit den richtigen Übungen kannst du gegensteuern und langfristig schmerzfrei bleiben.",
    date: "15. November 2024",
    author: "PTA Team",
    category: "Training",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=500&fit=crop"
  },
  {
    id: 2,
    slug: "ernaehrung-vor-nach-training",
    title: "Was du vor und nach dem Training essen solltest",
    excerpt: "Die richtige Ernährung kann deine Performance pushen und die Regeneration beschleunigen. Wir zeigen dir, welche Nährstoffe dein Körper wann braucht.",
    date: "10. November 2024",
    author: "PTA Team",
    category: "Ernährung",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=500&fit=crop"
  },
  {
    id: 3,
    slug: "motivation-training-tipps",
    title: "Keine Lust auf Training? 5 Tricks, die wirklich funktionieren",
    excerpt: "Wir alle kennen diese Tage, an denen die Couch verlockender ist. Mit diesen einfachen Strategien überwindest du den inneren Schweinehund.",
    date: "5. November 2024",
    author: "PTA Team",
    category: "Mindset",
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&h=500&fit=crop"
  },
  {
    id: 4,
    slug: "hiit-vs-dauerlauf",
    title: "HIIT oder Dauerlauf – was bringt mehr?",
    excerpt: "Kurz und knackig oder lang und gleichmäßig? Beide Trainingsformen haben ihre Stärken. Wir helfen dir zu entscheiden.",
    date: "28. Oktober 2024",
    author: "PTA Team",
    category: "Training",
    image: "https://images.unsplash.com/photo-1612831455359-970e23a1e4e9?w=800&h=500&fit=crop"
  },
  {
    id: 5,
    slug: "schlaf-muskelaufbau",
    title: "So wichtig ist Schlaf für deinen Muskelaufbau",
    excerpt: "Schlaf ist genauso wichtig wie Training und Ernährung. Wir zeigen dir, wie du deine Erholung optimierst.",
    date: "20. Oktober 2024",
    author: "PTA Team",
    category: "Regeneration",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&h=500&fit=crop"
  },
  {
    id: 6,
    slug: "anfaengerfehler-vermeiden",
    title: "Die 10 häufigsten Anfängerfehler – und wie du sie vermeidest",
    excerpt: "Viele Anfänger machen die gleichen Fehler. Wir zeigen dir, wie du von Anfang an richtig trainierst.",
    date: "15. Oktober 2024",
    author: "PTA Team",
    category: "Anfänger",
    image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=800&h=500&fit=crop"
  }
];

const Blog = () => {
  return (
    <>
      <PageHeader
        heading={"Blog"}
        page={"Blog"}
        backgroundImage="https://images.unsplash.com/photo-1486218119243-13883505764c?w=1920&q=80"
      />

      <section className="pt_120 pb_120">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-clr_base font-caveat text-2xl mb-4 block">Wissen & Tipps</span>
            <h2 className="text-white text-4xl lg:text-5xl font-medium mb-6">
              Fitness-Wissen für deinen Erfolg
            </h2>
            <p className="text-clr_pra text-lg">
              Entdecke wertvolle Tipps zu Training, Ernährung und Motivation
              von unserem Experten-Team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map(({ id, slug, title, excerpt, date, author, category, image }) => (
              <article
                key={id}
                className="bg-common_bg rounded-lg overflow-hidden group"
               
               
               
              >
                <div className="h-56 overflow-hidden relative">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-110 duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-clr_base text-clr_title px-3 py-1 rounded text-sm font-medium">
                    {category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-clr_pra text-sm mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="text-clr_base" />
                      {date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Person className="text-clr_base" />
                      {author}
                    </span>
                  </div>

                  <h3 className="text-white text-xl font-medium mb-3 group-hover:text-clr_base duration-300">
                    {title}
                  </h3>
                  <p className="text-clr_pra mb-4">{excerpt}</p>

                  <Link
                    href={`/blog/${slug}`}
                    className="inline-flex items-center gap-2 text-clr_base hover:text-white duration-300"
                  >
                    <span>Weiterlesen</span>
                    <ArrowRight />
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default Blog;
