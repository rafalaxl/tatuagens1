// SEO Manager - Pedro Tattoo Studio
const seoData = {
    title: "Pedro Tattoo | Fineline & Microrealismo em Sorocaba",
    description: "Tatuagem fineline em Sorocaba e microrealismo de alta precisão. Estúdio privado focado na precisão que o tempo não apaga.",
    url: "https://wa.me/5515996603395",
    image: "assets/portfolio/hero-parallax.svg"
};

// Create Meta Tags
const createMeta = (name, content, isProperty = false) => {
    const meta = document.createElement('meta');
    if (isProperty) meta.setAttribute('property', name);
    else meta.setAttribute('name', name);
    meta.setAttribute('content', content);
    document.head.appendChild(meta);
};

// OG & Twitter Tags
createMeta('og:type', 'website', true);
createMeta('og:url', seoData.url, true);
createMeta('og:title', seoData.title, true);
createMeta('og:description', seoData.description, true);
createMeta('og:image', seoData.image, true);
createMeta('twitter:card', 'summary_large_image');
createMeta('twitter:title', seoData.title);
createMeta('twitter:description', seoData.description);
createMeta('twitter:image', seoData.image);

// JSON-LD Schema
const schemaData = {
  "@context": "https://schema.org",
  "@type": "TattooParlor",
  "name": "Pedro Tattoo Studio",
  "image": "assets/branding/logo-pedro.svg",
  "description": seoData.description,
  "@id": seoData.url,
  "url": seoData.url,
  "telephone": "+55-15-99660-3395",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Estúdio Privado",
    "addressLocality": "Sorocaba",
    "addressRegion": "SP",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-23.5015",
    "longitude": "-47.4521"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "opens": "10:00", "closes": "20:00"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Serviços de Tatuagem",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": "Tatuagem Fineline Sorocaba" }
      },
      {
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": "Microrealismo" }
      }
    ]
  }
};

const script = document.createElement('script');
script.type = 'application/ld+json';
script.text = JSON.stringify(schemaData);
document.head.appendChild(script);