const schemaData = {
  "@context": "https://schema.org",
  "@type": "TattooParlor",
  "name": "Pedro Tattoo Studio",
  "image": "assets/branding/logo-pedro.svg",
  "description": "Especialista em Fineline e Microrealismo em Sorocaba. Projetos exclusivos em estúdio privado com foco na precisão que o tempo não apaga.",
  "@id": "https://wa.me/5515996603395",
  "url": "https://wa.me/5515996603395",
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
    "dayOfWeek": [
      "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ],
    "opens": "10:00",
    "closes": "20:00"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Serviços de Tatuagem",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Tatuagem Fineline Sorocaba",
          "description": "Tatuagens de traço fino com precisão cirúrgica e alta durabilidade técnica."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Microrealismo",
          "description": "Tatuagens realistas em micro escala com extrema riqueza de detalhes."
        }
      }
    ]
  }
};

const script = document.createElement('script');
script.type = 'application/ld+json';
script.text = JSON.stringify(schemaData);
document.head.appendChild(script);