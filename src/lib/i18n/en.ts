export type Dictionary = {
  nav: {
    services: string;
    howItWorks: string;
    press: string;
    contact: string;
    downloadApp: string;
  };
  hero: {
    badge: string;
    headline1: string;
    headlineAccent: string;
    headline2: string;
    subheadline: string;
    cta: string;
    ctaSecondary: string;
    liveRoute: string;
    metaEst: string;
    metaPricing: string;
    metaPlay: string;
    metaLang: string;
    appPills: { booking: string; tracking: string; purchasing: string; trading: string };
  };
  marquee: string[];
  pillars: {
    kicker: string;
    headline: string;
    headlineAccent: string;
    headline2: string;
    subheadline: string;
    items: Array<{ kicker: string; title: string; body: string }>;
    learnMore: string;
  };
  showcase: {
    kicker: string;
    headline1: string;
    headlineAccent: string;
    headline2: string;
    body: string;
    features: string[];
  };
  numbers: Array<{ v: string; l: string }>;
  workflow: {
    kicker: string;
    headline1: string;
    headlineAccent: string;
    headline2: string;
    steps: Array<{ n: string; t: string; d: string }>;
  };
  cta: {
    kicker: string;
    headline1: string;
    headlineAccent: string;
    body: string;
    primary: string;
    secondary: string;
  };
  footer: {
    tagline: string;
    company: string;
    legal: string;
    links: {
      about: string;
      services: string;
      howItWorks: string;
      press: string;
      contact: string;
      terms: string;
      privacy: string;
      delivery: string;
      refund: string;
    };
    copyright: string;
    cities: string;
  };
  about: {
    kicker: string;
    title1: string;
    titleAccent: string;
    title2: string;
    subtitle: string;
    story: { heading: string; body: string };
    mission: { heading: string; body: string };
    believe: { heading: string; items: string[] };
  };
  services: {
    kicker: string;
    title1: string;
    titleAccent: string;
    subtitle: string;
    items: Array<{ title: string; body: string }>;
  };
  howItWorks: {
    kicker: string;
    title1: string;
    titleAccent: string;
    title2: string;
    subtitle: string;
    steps: Array<{ n: string; t: string; d: string }>;
  };
  contact: {
    kicker: string;
    title1: string;
    titleAccent: string;
    subtitle: string;
    phoneLabel: string;
    emailLabel: string;
    addressLabel: string;
    phone: string;
    email: string;
    address: string;
    form: {
      heading: string;
      subheading: string;
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      companyLabel: string;
      companyPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submit: string;
    };
  };
  press: {
    kicker: string;
    title1: string;
    titleAccent: string;
    title2: string;
    subtitle: string;
    contactHeading: string;
    contactBody: string;
    contactEmail: string;
  };
  appFeatures: {
    kicker: string;
    headline: string;
    items: Array<{ title: string; body: string }>;
  };
  map: {
    kicker: string;
    title: string;
    address: string;
  };
};

export const en: Dictionary = {
  // ── Nav ─────────────────────────────────────────────────────────────────────
  nav: {
    services: "Services",
    howItWorks: "How it works",
    press: "Press",
    contact: "Contact",
    downloadApp: "Download App",
  },

  // ── Hero ────────────────────────────────────────────────────────────────────
  hero: {
    badge: "Bangladesh's first lighter-ship platform",
    headline1: "Shaping your",
    headlineAccent: "shipping",
    headline2: "one river at a time.",
    subheadline:
      "Book bulkhead vessels, track them live across inland routes, and trade onboard cargo — from a single, calm interface designed for the people who move the country.",
    cta: "Download Jahaji App",
    ctaSecondary: "See how it works",
    liveRoute: "Ctg → Narayanganj",
    metaEst: "Est. Dhaka 2019",
    metaPricing: "৳ Real-time pricing",
    metaPlay: "Available on Google Play",
    metaLang: "EN · বাংলা",
    appPills: {
      booking: "Booking",
      tracking: "Tracking",
      purchasing: "Purchasing",
      trading: "Trading",
    },
  },

  // ── Marquee ─────────────────────────────────────────────────────────────────
  marquee: [
    "Bulkhead booking",
    "Live tracking",
    "Onboard marketplace",
    "SMS notifications",
    "Verified vessels",
    "Transparent pricing",
  ],

  // ── Pillars ──────────────────────────────────────────────────────────────────
  pillars: {
    kicker: "What we do",
    headline: "A quiet, modern",
    headlineAccent: "command deck",
    headline2: "for the country's busiest waterways.",
    subheadline: "Three tools, one app. Built with operators, captains and cargo owners — not for them.",
    items: [
      {
        kicker: "01",
        title: "Bulkhead Booking",
        body: "Reserve the right vessel for the right cargo. Filter by capacity, route and crew — confirm in minutes, not days.",
      },
      {
        kicker: "02",
        title: "Live Tracking",
        body: "Watch your ship move along the inland route in real time. SMS alerts at every milestone so the office never wonders.",
      },
      {
        kicker: "03",
        title: "Onboard Marketplace",
        body: "Buy goods directly from a moving ship, with quality checks before it docks. A working river that works for everyone.",
      },
    ],
    learnMore: "Learn more",
  },

  // ── Showcase ─────────────────────────────────────────────────────────────────
  showcase: {
    kicker: "Built for the river",
    headline1: "The smart office",
    headlineAccent: "for ship owners",
    headline2: ", captains and cargo traders.",
    body: "Jahaji turns the daily chaos of phone calls and paper ledgers into one calm screen. Plan a voyage, watch it unfold, and settle the books — without leaving your chair.",
    features: [
      "Built for the smallest screens",
      "Verified vessels & operators",
      "Coverage across inland Bangladesh",
      "GPS pings every 60 seconds",
    ],
  },

  // ── Numbers ──────────────────────────────────────────────────────────────────
  numbers: [
    { v: "1,200+", l: "Verified vessels" },
    { v: "47", l: "Inland routes" },
    { v: "98%", l: "On-time arrivals" },
    { v: "24/7", l: "Operations support" },
  ],

  // ── Workflow ─────────────────────────────────────────────────────────────────
  workflow: {
    kicker: "How it works",
    headline1: "From",
    headlineAccent: "quote to cast-off",
    headline2: "in four calm steps.",
    steps: [
      { n: "Step 01", t: "Pick your ship", d: "Browse vessels by route, capacity and price. Real availability, no callbacks needed." },
      { n: "Step 02", t: "Confirm and pay", d: "Lock the booking with transparent pricing. Receipts and contracts arrive instantly." },
      { n: "Step 03", t: "Track in real time", d: "Follow the vessel on the live map. SMS milestones for cast-off, midpoint and arrival." },
      { n: "Step 04", t: "Settle and trade", d: "Close the voyage in one tap. Optionally list onboard cargo on the Jahaji marketplace." },
    ],
  },

  // ── CTA ──────────────────────────────────────────────────────────────────────
  cta: {
    kicker: "Available on Google Play",
    headline1: "Your ship business,",
    headlineAccent: "now in your pocket.",
    body: "Download Jahaji and join the operators already moving Bangladesh's economy with a calmer, smarter shipping app.",
    primary: "Download Jahaji App",
    secondary: "Talk to operations",
  },

  // ── Footer ───────────────────────────────────────────────────────────────────
  footer: {
    tagline: "Bangladesh's first digital platform for inland lighter shipping. Booking, tracking and trade — in your pocket.",
    company: "Company",
    legal: "Legal",
    links: {
      about: "About us",
      services: "Services",
      howItWorks: "How it works",
      press: "Press & Media",
      contact: "Contact",
      terms: "Terms of use",
      privacy: "Privacy policy",
      delivery: "Delivery policy",
      refund: "Refund policy",
    },
    copyright: "Jahaji Ltd. Shaping your shipping.",
    cities: "Dhaka · Chattogram · The rivers between.",
  },

  // ── About ─────────────────────────────────────────────────────────────────────
  about: {
    kicker: "About",
    title1: "Shaping your",
    titleAccent: "shipping",
    title2: ".",
    subtitle: "Jahaji is Bangladesh's first digital platform for inland lighter shipping — connecting cargo owners, ship operators and crews on the rivers between Dhaka and Chattogram.",
    story: {
      heading: "Our story",
      body: "For centuries the rivers of Bangladesh have carried the country's trade — quietly, tirelessly, and largely on paper. Jahaji was founded to bring this vital network online: a single command deck where a charter can be booked in minutes, a vessel tracked in real time, and a settlement closed without a single phone call.",
    },
    mission: {
      heading: "Our mission",
      body: "To make inland shipping faster, fairer and more transparent for everyone who depends on it — from the cargo owner in Dhaka to the crew anchored at Chattogram outer.",
    },
    believe: {
      heading: "What we believe",
      items: [
        "Trust is built voyage by voyage — we verify every operator on the platform.",
        "Technology should serve the boat, not replace the boatman.",
        "The river is a national asset; digitising it lifts the whole economy.",
      ],
    },
  },

  // ── Services ─────────────────────────────────────────────────────────────────
  services: {
    kicker: "Services",
    title1: "Six tools,",
    titleAccent: "one calm deck.",
    subtitle: "Everything an inland shipping operation needs — from quoting a voyage to settling the books.",
    items: [
      { title: "Bulkhead Booking", body: "Reserve verified vessels by route, capacity and crew. Transparent quotes, instant confirmation." },
      { title: "Live Tracking", body: "GPS pings every 60 seconds. SMS milestones at cast-off, midpoint and arrival." },
      { title: "Onboard Marketplace", body: "Buy and sell cargo from moving ships, with quality checks before docking." },
      { title: "Digital Contracts", body: "Receipts, manifests and contracts generated and stored automatically." },
      { title: "Crew Management", body: "Coordinate captains, deckhands and shore teams from a single roster." },
      { title: "Settlements", body: "Close voyages in one tap with reconciled, transparent ledger entries." },
    ],
  },

  // ── How it works ─────────────────────────────────────────────────────────────
  howItWorks: {
    kicker: "Process",
    title1: "From",
    titleAccent: "port to payment",
    title2: " — a better way.",
    subtitle: "Four calm steps that replace a week of calls.",
    steps: [
      { n: "Step 01", t: "Pick your ship", d: "Browse vessels by route, capacity and price. Real availability, no callbacks needed." },
      { n: "Step 02", t: "Confirm and pay", d: "Lock the booking with transparent pricing. Receipts and contracts arrive instantly." },
      { n: "Step 03", t: "Track in real time", d: "Follow the vessel on the live map. SMS milestones for cast-off, midpoint and arrival." },
      { n: "Step 04", t: "Settle and trade", d: "Close the voyage in one tap. Optionally list onboard cargo on the Jahaji marketplace." },
    ],
  },

  // ── Contact ──────────────────────────────────────────────────────────────────
  contact: {
    kicker: "Contact",
    title1: "We'd love to",
    titleAccent: "hear from you.",
    subtitle: "Our operations team is on call around the clock.",
    phoneLabel: "Phone",
    emailLabel: "Email",
    addressLabel: "Address",
    phone: "09639-707070",
    email: "info@jahajibd.com",
    address: "55 KDA Avenue (Level-9), Khulna 9100",
    form: {
      heading: "Send us a note",
      subheading: "We'll route it to the right desk.",
      nameLabel: "Your name",
      namePlaceholder: "Full name",
      emailLabel: "Email",
      emailPlaceholder: "you@company.com",
      companyLabel: "Company",
      companyPlaceholder: "Optional",
      messageLabel: "Message",
      messagePlaceholder: "Tell us about your shipping needs…",
      submit: "Send message",
    },
  },

  // ── Press ─────────────────────────────────────────────────────────────────────
  press: {
    kicker: "Press & Media",
    title1: "Jahaji in",
    titleAccent: "the news.",
    title2: "",
    subtitle: "Press releases, media assets and coverage of inland shipping in Bangladesh.",
    contactHeading: "Press enquiries",
    contactBody: "For interviews, asset requests and press releases, contact our media team.",
    contactEmail: "press@jahajibd.com",
  },

  // ── App Features ─────────────────────────────────────────────────────────────
  appFeatures: {
    kicker: "Why Jahaji different?",
    headline: "Jahaji is an unique app",
    items: [
      {
        title: "Weather forecasts",
        body: "Ship App users will be able to predict the inclement weather through the app",
      },
      {
        title: "Dynamic Dashboard",
        body: "The ship has a dynamic dashboard. It will get all your trip updates very easily",
      },
      {
        title: "24/7 Customer support",
        body: "We have skilled, trained and gentle staff. Who will give you 24/7 offline and online customer support",
      },
      {
        title: "Monthly reports",
        body: "Freezing to keep track of ship trips? Get daily, weekly and monthly reports on Jahaji app account of your current and past trips.",
      },
    ],
  },
  map: {
    kicker: "Visit us",
    title: "Contact with Jahaji",
    address: "55 KDA Avenue (Level-9), Khulna 9100",
  },
};
