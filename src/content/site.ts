/**
 * Site-wide and page content from the Dumont Publishing
 * "Website Structure & Content Strategy" document.
 */

export const site = {
  name: "Dumont Publishing",
  tagline: "Your Story. Our Expertise. A Published Legacy.",
  alternativeTaglines: [
    "From Manuscript to Masterpiece.",
    "Every Story Deserves to Be Published.",
    "Empowering Authors. Publishing Stories.",
    "Your Publishing Journey Starts Here.",
  ],
  positioning:
    "A professional book publishing and author-services company that supports authors throughout the publishing journey—from early manuscript development to book production, publication preparation, distribution, and promotion.",
  primaryCta: { label: "Get a Free Consultation", href: "/contact-us/" },
};

export const resourcesMenu = [
  { label: "Blog", href: "/blog/" },
  { label: "Publishing Guides", href: "/blog/#publishing-guides" },
  { label: "FAQs", href: "/faqs/" },
  { label: "Publishing Process", href: "/publishing-process/" },
];

export const quickLinks = [
  { label: "About", href: "/about-us/" },
  { label: "Portfolio", href: "/portfolio/" },
  { label: "Process", href: "/publishing-process/" },
  { label: "Testimonials", href: "/testimonials/" },
  { label: "Blog", href: "/blog/" },
  { label: "FAQs", href: "/faqs/" },
];

export const home = {
  seoTitle: "Dumont Publishing | Book Publishing Company",
  metaDescription:
    "At Dumont Publishing, we help authors transform their ideas and manuscripts into professionally developed, edited, designed, and published books.",
  hero: {
    title: "Professional Book Publishing Services to Bring Your Story to Life",
    text: "Every great book begins with an idea. At Dumont Publishing, we help authors transform their ideas and manuscripts into professionally developed, edited, designed, and published books. Whether you’re starting with a concept or preparing a completed manuscript, our team provides the creative and professional support to guide you through every stage of your publishing journey.",
    primaryCta: { label: "Get a Free Consultation", href: "/contact-us/" },
    secondaryCta: { label: "Explore Our Services", href: "/services/" },
  },
  intro: {
    title: "Your Publishing Partner from the First Idea to the Final Page",
    text: "Publishing a book involves more than writing a manuscript. It requires careful planning, professional editing, thoughtful design, and an understanding of the publishing process. At Dumont Publishing, we bring these essential elements together to provide authors with organised and personalised publishing support. Whether you need help developing your manuscript, refining your content, preparing your book for publication, or reaching readers, we help you move forward with confidence.",
    cta: { label: "Learn More About Us", href: "/about-us/" },
  },
  services: {
    title: "Complete Book Publishing Solutions Under One Roof",
    text: "From developing your manuscript to preparing your book for readers, Dumont Publishing offers a range of services designed to support authors at different stages of their publishing journey.",
  },
  why: {
    label: "Why Choose Dumont Publishing?",
    title: "More Than Publishing – A Partner in Your Author Journey",
    text: "Your book represents your ideas, creativity, and hard work. Choosing the right publishing support can make the process more organised and manageable. Dumont Publishing aims to provide authors with professional services, collaborative communication, and practical guidance throughout the publishing process.",
    points: [
      {
        name: "Personalised Support",
        text: "Services aligned with each author’s goals, manuscript, and publishing requirements.",
      },
      {
        name: "Professional Expertise",
        text: "Access to appropriate writing, editorial, and design expertise.",
      },
      {
        name: "Complete Solutions",
        text: "Support across manuscript development, production, and promotion.",
      },
      {
        name: "Collaborative Process",
        text: "Opportunities for authors to provide feedback and participate in key decisions.",
      },
      {
        name: "Publishing Guidance",
        text: "Assistance in understanding formats, platforms, and publication requirements.",
      },
      {
        name: "Author-Focused Approach",
        text: "Clear communication about deliverables, responsibilities, and project progress.",
      },
    ],
  },
  process: {
    label: "Publishing Process",
    title: "A Clear Path from Manuscript to Published Book",
    steps: [
      {
        name: "Consultation & Project Assessment",
        text: "Understand the book, subject, target audience, current stage, and publishing objectives.",
      },
      {
        name: "Writing & Manuscript Development",
        text: "Develop the concept, create an outline, write content, or refine an existing manuscript.",
      },
      {
        name: "Editing & Proofreading",
        text: "Provide the appropriate editorial review to improve structure, clarity, and presentation.",
      },
      {
        name: "Cover Design & Formatting",
        text: "Prepare the book’s visual identity and interior layout for the intended formats.",
      },
      {
        name: "Publishing & Distribution",
        text: "Prepare publishing files, metadata, and submissions for suitable channels.",
      },
      {
        name: "Marketing & Promotion",
        text: "Support the book’s introduction to readers through appropriate promotional activities.",
      },
    ],
  },
  genres: {
    label: "Genres We Support",
    title: "Publishing Support Across Different Genres",
    items: [
      "Fiction",
      "Nonfiction",
      "Romance",
      "Mystery & Thriller",
      "Fantasy & Science Fiction",
      "Historical Fiction",
      "Memoirs & Biographies",
      "Business & Self-Help",
      "Children’s Books",
      "Educational Books",
    ],
  },
  portfolio: {
    label: "Portfolio",
    title: "Bringing Authors’ Stories into the World",
  },
  testimonials: {
    label: "Testimonials",
    title: "Hear from Authors We’ve Worked With",
    text: "Genuine author reviews and client experiences.",
  },
  insights: {
    label: "Blog and Resources",
    title: "Insights to Support Your Publishing Journey",
    articles: [
      "How to Prepare Your Manuscript for Publishing.",
      "Self-Publishing vs. Traditional Publishing: What Authors Should Know.",
      "How to Choose the Right Book Editing Service.",
      "A Complete Guide to Amazon KDP Publishing.",
      "What Authors Should Know About Book Formatting.",
      "How to Turn Your Book into an Audiobook.",
    ],
  },
  faqs: [
    "What services does Dumont Publishing offer?",
    "Can you help me publish a book if I only have an idea?",
    "Do you work with first-time authors?",
    "Can I choose individual services or complete publishing packages?",
    "Do I retain ownership of my manuscript and book rights?",
    "Can you help me publish through Amazon KDP?",
    "Do you provide paperback, hardcover, and eBook services?",
    "How can I get a quote for my book project?",
  ],
  finalCta: {
    title: "Your Story Deserves to Be Told.",
    text: "Every published book begins with a decision to take the first step. Whether you have a completed manuscript or an idea waiting to be developed, Dumont Publishing is ready to help you explore your publishing options.",
    cta: { label: "Start Your Publishing Journey", href: "/contact-us/" },
  },
};

/** Section 7 — Recommended Author Journey. */
export const authorJourney = [
  {
    stage: "Book Writing / Ghostwriting",
    outcome: "develop the manuscript.",
    links: ["book-writing-services", "ghostwriting-services"],
  },
  {
    stage: "Editing & Proofreading",
    outcome: "refine the manuscript.",
    links: ["book-editing-proofreading-services"],
  },
  {
    stage: "Cover Design & Formatting",
    outcome: "prepare the book.",
    links: ["book-cover-design-services", "book-formatting-typesetting-services"],
  },
  {
    stage: "Publishing & Printing",
    outcome: "publish and produce the book.",
    links: ["book-publishing-services", "book-printing-services"],
  },
  {
    stage: "Distribution & Marketing",
    outcome: "make the book available and promote it.",
    links: ["book-distribution-services", "book-marketing-services"],
  },
];

export const about = {
  path: "/about-us/",
  seoTitle: "About Dumont Publishing | Your Book Publishing Partner",
  keyword: "About Dumont Publishing",
  title: "Helping Authors Turn Their Ideas into Published Books",
};

export const servicesPage = {
  path: "/services/",
  seoTitle: "Our Book Writing, Editing and Publishing Services | Dumont Publishing",
  title: "Complete Publishing Services to Support Every Stage of Your Book",
};

export const processPage = {
  path: "/publishing-process/",
  seoTitle: "Our Book Publishing Process | Dumont Publishing",
  title: "A Step-by-Step Approach to Bringing Your Book to Life",
  stages: [
    { name: "Consultation", text: "The initial discussion and project assessment." },
    {
      name: "Quotation and Scope",
      text: "How deliverables, pricing, timelines, and responsibilities are confirmed.",
    },
    { name: "Manuscript Development", text: "Writing and manuscript support." },
    {
      name: "Editing and Design",
      text: "Editorial review, cover design, and formatting.",
    },
    {
      name: "Publishing Preparation",
      text: "File checks, metadata, platform setup, and submission assistance.",
    },
    { name: "Distribution and Promotion", text: "Available follow-on support." },
  ],
};

export const portfolioPage = {
  path: "/portfolio/",
  seoTitle: "Published Books and Author Projects | Dumont Publishing",
  title: "Discover the Books We’ve Helped Bring to Life",
};

export const testimonialsPage = {
  path: "/testimonials/",
  seoTitle: "Author Reviews and Client Testimonials | Dumont Publishing",
  title: "What Authors Say About Working with Dumont Publishing",
  sections: [
    { name: "Author Feedback", text: "Genuine client feedback and reviews." },
    {
      name: "Project Context",
      text: "Author names, book titles, service information, and photographs or video.",
    },
  ],
};

export const blogPage = {
  path: "/blog/",
  seoTitle: "Publishing Advice, Writing Tips and Author Resources | Dumont Publishing",
  title: "Publishing Insights and Resources for Authors",
  topics: [
    {
      name: "Book Writing",
      text: "Writing techniques, book planning, and manuscript development.",
      service: "book-writing-services",
    },
    {
      name: "Ghostwriting",
      text: "Ghostwriting process and author collaboration.",
      service: "ghostwriting-services",
    },
    {
      name: "Book Editing",
      text: "Editing techniques, proofreading, and manuscript quality.",
      service: "book-editing-proofreading-services",
    },
    {
      name: "Book Design",
      text: "Cover design, typography, and book presentation.",
      service: "book-cover-design-services",
    },
    {
      name: "Book Formatting",
      text: "KDP formatting, trim sizes, and interior layouts.",
      service: "book-formatting-typesetting-services",
    },
    {
      name: "Self-Publishing",
      text: "Publishing platforms, ISBNs, and metadata.",
      service: "book-publishing-services",
    },
    {
      name: "Book Distribution",
      text: "Retail channels and distribution options.",
      service: "book-distribution-services",
    },
    {
      name: "Book Marketing",
      text: "Book launches, author branding, and promotions.",
      service: "book-marketing-services",
    },
    {
      name: "Audiobook Publishing",
      text: "Narration, production, and audio distribution.",
      service: "audiobook-production-publishing",
    },
  ],
};

export const faqsPage = {
  path: "/faqs/",
  seoTitle: "Frequently Asked Questions About Book Publishing | Dumont Publishing",
  title: "Frequently Asked Questions About Our Publishing Services",
  groups: [
    {
      name: "Writing and Ghostwriting",
      text: "Questions about concepts, manuscripts, writing process, and collaboration.",
      services: ["book-writing-services", "ghostwriting-services"],
    },
    {
      name: "Editing and Design",
      text: "Questions about editing levels, cover design, and formatting.",
      services: [
        "book-editing-proofreading-services",
        "book-cover-design-services",
        "book-formatting-typesetting-services",
      ],
    },
    {
      name: "Publishing and Distribution",
      text: "Questions about platforms, ISBNs, ownership, and availability.",
      services: ["book-publishing-services", "book-distribution-services"],
    },
    {
      name: "Printing and Marketing",
      text: "Questions about print specifications, promotion, and campaign scope.",
      services: ["book-printing-services", "book-marketing-services"],
    },
    {
      name: "Audiobooks",
      text: "Questions about narration, production, formats, and distribution.",
      services: ["audiobook-production-publishing"],
    },
  ],
  pricing: {
    name: "Pricing and Ownership",
    text: "Quotation, payment terms, intellectual property, and project responsibilities.",
  },
};

export const contactPage = {
  path: "/contact-us/",
  seoTitle: "Contact Dumont Publishing | Discuss Your Book Project",
  title: "Let’s Talk About Your Book Project",
  intro: "Discuss a new idea, completed manuscript, or publishing requirement.",
  manuscriptStages: [
    "An idea or concept",
    "A rough outline",
    "An unfinished draft",
    "A completed manuscript",
    "A published book",
  ],
  contactMethods: ["Email", "Phone"],
  submitLabel: "Get a Free Consultation",
};
