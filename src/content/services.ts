import type { BookSlug } from "./books";

/**
 * Service content, taken from section 4 of the Dumont Publishing
 * "Website Structure & Content Strategy" document.
 *
 * Where the document gives a writer's brief rather than finished copy
 * ("Explain typography, contrast, …"), the brief's subject matter is kept
 * verbatim and only the instructing verb is dropped (see `brief` blocks).
 */

export type ServiceBlock =
  | { type: "checklist"; heading: string; items: string[] }
  | { type: "solutions"; heading: string; items: { name: string; text: string }[] }
  | { type: "process"; heading: string; items: string[] }
  | { type: "text"; heading: string; paragraphs: string[] }
  | { type: "brief"; heading: string; lead?: string; points?: string[] };

export type Service = {
  slug: string;
  number: string;
  /** Short label used in navigation and menus. */
  label: string;
  categoryId: CategoryId;
  title: string;
  seoTitle: string;
  metaDescription: string;
  keyword: string;
  intro: string;
  blocks: ServiceBlock[];
  faqs: string[];
  cta: string;
  cover: BookSlug;
  related: string[];
};

export type CategoryId =
  | "writing-ghostwriting"
  | "editing-proofreading"
  | "book-design-formatting"
  | "publishing-distribution"
  | "book-printing"
  | "book-marketing-audiobooks";

export type ServiceCategory = {
  id: CategoryId;
  name: string;
  /** Shorter group label used in the header dropdown. */
  menuLabel: string;
  description: string;
  included: string[];
  services: string[];
  cover: BookSlug;
};

export const categories: ServiceCategory[] = [
  {
    id: "writing-ghostwriting",
    name: "Writing & Ghostwriting",
    menuLabel: "Writing & Ghostwriting",
    description:
      "Turn your ideas, experiences, and expertise into structured, engaging manuscripts with professional writing support.",
    included: ["Book Writing", "Ghostwriting"],
    services: ["book-writing-services", "ghostwriting-services"],
    cover: "a-life-beyond-limits",
  },
  {
    id: "editing-proofreading",
    name: "Editing & Proofreading",
    menuLabel: "Editing",
    description:
      "Improve your manuscript’s structure, clarity, grammar, consistency, and readability through professional editorial review.",
    included: ["Developmental Editing", "Copyediting", "Proofreading"],
    services: ["book-editing-proofreading-services"],
    cover: "behind-closed-doors",
  },
  {
    id: "book-design-formatting",
    name: "Book Design & Formatting",
    menuLabel: "Book Design",
    description:
      "Give your book a polished visual identity with professionally designed covers and carefully formatted interiors.",
    included: ["Cover Design", "Interior Formatting", "Typesetting"],
    services: ["book-cover-design-services", "book-formatting-typesetting-services"],
    cover: "the-kingdom-of-forgotten-stars",
  },
  {
    id: "publishing-distribution",
    name: "Publishing & Distribution",
    menuLabel: "Publishing",
    description:
      "Prepare your book for publication and explore suitable platforms and distribution channels.",
    included: ["Self-Publishing", "Amazon KDP", "Distribution"],
    services: ["book-publishing-services", "book-distribution-services"],
    cover: "a-thousand-little-moments",
  },
  {
    id: "book-printing",
    name: "Book Printing",
    menuLabel: "Printing",
    description:
      "Bring your book into physical form with professionally prepared paperback, hardcover, and illustrated editions.",
    included: ["Paperback", "Hardcover", "Illustrated Books"],
    services: ["book-printing-services"],
    cover: "the-little-fox-and-the-secret-forest",
  },
  {
    id: "book-marketing-audiobooks",
    name: "Book Marketing & Audiobooks",
    menuLabel: "Marketing & Audio",
    description:
      "Develop your author presence, promote your published work, and explore audio editions for different audiences.",
    included: ["Book Promotion", "Author Branding", "Audiobook Production"],
    services: ["book-marketing-services", "audiobook-production-publishing"],
    cover: "beyond-the-last-horizon",
  },
];

export const services: Service[] = [
  {
    slug: "book-writing-services",
    number: "01",
    label: "Book Writing",
    categoryId: "writing-ghostwriting",
    title: "Professional Book Writing Services for Aspiring Authors",
    seoTitle: "Professional Book Writing Services | Dumont Publishing",
    metaDescription:
      "Turn your book idea into a compelling manuscript with professional book writing services. Get personalised writing support from Dumont Publishing.",
    keyword: "Book Writing Services",
    intro:
      "Every great book begins with an idea, but turning that idea into a complete manuscript requires planning, research, and dedicated writing. Dumont Publishing offers professional book writing services to help authors develop their concepts into structured, engaging books. Whether you’re starting with a rough outline, an unfinished draft, or a detailed concept, we provide writing support tailored to your subject, genre, and intended audience.",
    blocks: [
      {
        type: "checklist",
        heading: "Turn Your Book Idea into a Complete Manuscript",
        items: [
          "Concept development",
          "Subject research",
          "Chapter planning",
          "Content development",
          "Narrative structure",
          "Manuscript writing",
          "Revisions and refinement",
        ],
      },
      {
        type: "solutions",
        heading: "Our Book Writing Services",
        items: [
          {
            name: "Fiction Book Writing",
            text: "Develop fictional narratives with appropriate plots, characters, dialogue, pacing, and storytelling techniques.",
          },
          {
            name: "Nonfiction Book Writing",
            text: "Transform knowledge, research, and professional expertise into informative, well-organised books.",
          },
          {
            name: "Children’s Book Writing",
            text: "Create age-appropriate stories with engaging characters, accessible language, and suitable storytelling structures.",
          },
          {
            name: "Business Book Writing",
            text: "Communicate business strategies, leadership knowledge, professional experiences, and industry insights.",
          },
          {
            name: "Educational Book Writing",
            text: "Develop instructional and learning-focused content with clear explanations and organised chapters.",
          },
          {
            name: "eBook Writing",
            text: "Create original digital-first content designed for online reading and digital publishing platforms.",
          },
        ],
      },
      {
        type: "process",
        heading: "Our Book Writing Process",
        items: [
          "Initial consultation and idea assessment.",
          "Research and subject planning.",
          "Book outline and chapter structure.",
          "Manuscript writing and development.",
          "Author review and feedback.",
          "Final revisions and manuscript delivery.",
        ],
      },
      {
        type: "checklist",
        heading: "Who Can Benefit from Book Writing Services?",
        items: [
          "First-time authors who need guidance.",
          "Professionals sharing their knowledge.",
          "Entrepreneurs developing business books.",
          "Educators creating instructional books.",
          "Authors with unfinished manuscripts.",
          "Individuals documenting personal experiences.",
        ],
      },
    ],
    faqs: [
      "Can you write a book from just an idea?",
      "Do you write fiction and nonfiction books?",
      "Can I provide my own outline?",
      "Will the manuscript reflect my preferred writing style?",
      "How long does book writing take?",
      "Can I request revisions during the project?",
    ],
    cta: "Let’s Start Developing Your Book.",
    cover: "the-power-of-starting-again",
    related: ["ghostwriting-services", "book-editing-proofreading-services"],
  },
  {
    slug: "ghostwriting-services",
    number: "02",
    label: "Ghostwriting",
    categoryId: "writing-ghostwriting",
    title: "Professional Ghostwriting Services to Bring Your Story to Life",
    seoTitle: "Professional Ghostwriting Services | Dumont Publishing",
    metaDescription:
      "Turn your ideas, knowledge, and personal experiences into a professionally written book with Dumont Publishing’s ghostwriting services.",
    keyword: "Ghostwriting Services",
    intro:
      "You have a story, experience, or expertise worth sharing, but finding the time or words to write a complete book can be challenging. Dumont Publishing offers professional ghostwriting services to help transform your ideas into compelling manuscripts. We work collaboratively with authors to understand their vision, capture their voice, and develop content that communicates their message effectively.",
    blocks: [
      {
        type: "brief",
        heading: "What Are Ghostwriting Services?",
        lead: "Ghostwriting involves a writer developing content based on an author’s ideas, instructions, knowledge, and experiences.",
        points: [
          "Author interviews",
          "Research",
          "Voice and style development",
          "Manuscript planning",
          "Writing",
          "Revisions",
          "Confidentiality",
          "Contractual ownership arrangements",
        ],
      },
      {
        type: "solutions",
        heading: "Our Ghostwriting Solutions",
        items: [
          {
            name: "Memoir Ghostwriting",
            text: "Document personal experiences, memories, and significant life events.",
          },
          {
            name: "Autobiography Ghostwriting",
            text: "Develop a structured account of an individual’s life and achievements.",
          },
          {
            name: "Fiction Ghostwriting",
            text: "Create original fictional narratives, characters, and stories based on the author’s concept.",
          },
          {
            name: "Nonfiction Ghostwriting",
            text: "Transform expertise and subject knowledge into informative publications.",
          },
          {
            name: "Business Book Ghostwriting",
            text: "Develop leadership, entrepreneurship, management, and industry-focused books.",
          },
          {
            name: "Children’s Book Ghostwriting",
            text: "Develop age-appropriate stories and manuscripts for young readers.",
          },
        ],
      },
      {
        type: "process",
        heading: "Our Ghostwriting Process",
        items: [
          "Initial consultation.",
          "Author interviews and information gathering.",
          "Book outline development.",
          "Manuscript drafting.",
          "Author feedback and revisions.",
          "Final manuscript delivery.",
        ],
      },
      {
        type: "brief",
        heading: "Why Work with a Professional Ghostwriter?",
        points: [
          "Structured writing support",
          "Consistent manuscript development",
          "Time savings",
          "A collaborative writing process",
        ],
      },
    ],
    faqs: [
      "How does ghostwriting work?",
      "Can a ghostwriter capture my personal writing style?",
      "Who owns the completed manuscript?",
      "Is ghostwriting confidential?",
      "Can I provide my own research and notes?",
      "How many revisions are available?",
    ],
    cta: "Have a Story to Share? Let’s Write It Together.",
    cover: "a-life-beyond-limits",
    related: ["book-writing-services", "book-editing-proofreading-services"],
  },
  {
    slug: "book-editing-proofreading-services",
    number: "03",
    label: "Editing & Proofreading",
    categoryId: "editing-proofreading",
    title: "Professional Book Editing and Proofreading Services",
    seoTitle: "Book Editing and Proofreading Services | Dumont Publishing",
    metaDescription:
      "Refine your manuscript with professional book editing and proofreading services. Improve clarity, structure, grammar, and readability.",
    keyword: "Book Editing Services",
    intro:
      "A strong manuscript deserves careful editorial attention before publication. Dumont Publishing provides professional book editing and proofreading services to help authors refine their work, improve readability, and prepare their manuscripts for the next stage. From developmental editing to final proofreading, we offer editorial support based on your manuscript’s requirements.",
    blocks: [
      {
        type: "checklist",
        heading: "Why Does Your Manuscript Need Editing?",
        items: [
          "Content organisation",
          "Narrative consistency",
          "Language and sentence structure",
          "Grammar and punctuation",
          "Readability and flow",
          "Overall manuscript presentation",
        ],
      },
      {
        type: "solutions",
        heading: "Our Editing & Proofreading Solutions",
        items: [
          {
            name: "Developmental Editing",
            text: "Review overall structure, content, arguments, plot, character development, and narrative progression.",
          },
          {
            name: "Structural Editing",
            text: "Improve chapter organisation, sequencing, and the relationship between sections.",
          },
          {
            name: "Line Editing",
            text: "Refine sentence construction, word choice, tone, and readability.",
          },
          {
            name: "Copyediting",
            text: "Correct grammatical, spelling, punctuation, and consistency issues.",
          },
          {
            name: "Proofreading",
            text: "Identify remaining typographical, formatting, and language errors in the final manuscript.",
          },
          {
            name: "Nonfiction & Educational Editing",
            text: "Improve the clarity, organisation, and presentation of informative and research-based manuscripts.",
          },
        ],
      },
      {
        type: "process",
        heading: "Our Editorial Process",
        items: [
          "Manuscript submission.",
          "Editorial assessment.",
          "Editing scope confirmation.",
          "Professional editorial review.",
          "Author feedback and revisions.",
          "Final proofreading and delivery.",
        ],
      },
      {
        type: "text",
        heading: "Editing vs. Proofreading",
        paragraphs: [
          "Editing improves content and language and may involve structural or sentence-level changes.",
          "Proofreading is generally the final review, focusing on remaining typographical, formatting, and language errors.",
        ],
      },
    ],
    faqs: [
      "What is the difference between editing and proofreading?",
      "Which editing service does my book need?",
      "Do you edit fiction and nonfiction?",
      "Will you preserve my writing voice?",
      "Can you edit an incomplete manuscript?",
      "Do you provide a sample edit?",
    ],
    cta: "Give Your Manuscript the Professional Attention It Deserves.",
    cover: "behind-closed-doors",
    related: ["book-formatting-typesetting-services", "book-cover-design-services"],
  },
  {
    slug: "book-cover-design-services",
    number: "04",
    label: "Cover Design",
    categoryId: "book-design-formatting",
    title: "Creative Book Cover Design Services That Make Your Book Stand Out",
    seoTitle: "Professional Book Cover Design Services | Dumont Publishing",
    metaDescription:
      "Get creative, genre-appropriate book cover designs for paperback, hardcover, and eBooks with professional book cover design services.",
    keyword: "Book Cover Design Services",
    intro:
      "Your book cover is often the first impression readers have of your work. A carefully designed cover communicates your book’s genre, tone, and identity while helping it stand out in a competitive marketplace. Dumont Publishing provides professional book cover design services to create visually compelling covers aligned with your story and intended audience.",
    blocks: [
      {
        type: "checklist",
        heading: "Design That Reflects Your Story",
        items: [
          "Genre-specific visual direction",
          "Typography and title placement",
          "Colour selection",
          "Imagery and illustration",
          "Visual hierarchy",
          "Reader expectations",
          "Retail and print presentation",
        ],
      },
      {
        type: "solutions",
        heading: "Our Book Cover Design Services",
        items: [
          {
            name: "Fiction Book Covers",
            text: "Designs for romance, fantasy, thriller, mystery, historical fiction, and literary fiction.",
          },
          {
            name: "Nonfiction Book Covers",
            text: "Professional visual concepts for business, educational, self-help, and informational books.",
          },
          {
            name: "Children’s Book Covers",
            text: "Colourful and engaging covers appropriate for children’s literature.",
          },
          {
            name: "Memoir & Biography Covers",
            text: "Personalised concepts that reflect an author’s story and experiences.",
          },
          {
            name: "eBook Cover Design",
            text: "Digital covers prepared for online publishing and retail presentation.",
          },
          {
            name: "Paperback & Hardcover Cover Design",
            text: "Complete layouts including front, spine, and back cover.",
          },
          {
            name: "Book Series Design",
            text: "Consistent visual identities across multiple titles.",
          },
        ],
      },
      {
        type: "process",
        heading: "Our Cover Design Process",
        items: [
          "Book brief and genre assessment.",
          "Reference and visual research.",
          "Concept development.",
          "Cover design.",
          "Author feedback and revisions.",
          "Final print and digital file preparation.",
        ],
      },
      {
        type: "brief",
        heading: "What Makes a Professional Book Cover?",
        points: [
          "Typography",
          "Contrast",
          "Readability",
          "Image quality",
          "Visual hierarchy",
          "Genre alignment",
          "Print specifications",
        ],
      },
    ],
    faqs: [
      "Can I provide design inspiration?",
      "Do you design front, spine, and back covers?",
      "Can you redesign an existing cover?",
      "Do you provide KDP-ready files?",
      "Can you create illustrated covers?",
      "Will I receive a digital eBook cover?",
    ],
    cta: "Let’s Create a Cover That Represents Your Story.",
    cover: "the-kingdom-of-forgotten-stars",
    related: ["book-printing-services", "book-formatting-typesetting-services"],
  },
  {
    slug: "book-formatting-typesetting-services",
    number: "05",
    label: "Formatting & Typesetting",
    categoryId: "book-design-formatting",
    title: "Professional Book Formatting and Typesetting Services",
    seoTitle: "Book Formatting and Typesetting Services | Dumont Publishing",
    metaDescription:
      "Prepare your manuscript for publication with professional book formatting and typesetting for paperback, hardcover, and eBook editions.",
    keyword: "Book Formatting Services",
    intro:
      "A professionally formatted book provides a comfortable reading experience and a polished presentation. Dumont Publishing offers book formatting and typesetting services to prepare manuscripts for print and digital publication. From page layouts and typography to chapter styling and image placement, we help ensure your book is professionally presented in its intended format.",
    blocks: [
      {
        type: "brief",
        heading: "Professional Interior Formatting for Every Format",
        lead: "Print and digital editions require different formatting approaches.",
      },
      {
        type: "solutions",
        heading: "Our Formatting Solutions",
        items: [
          {
            name: "Paperback Formatting",
            text: "Prepare clean and readable interiors for paperback printing.",
          },
          {
            name: "Hardcover Formatting",
            text: "Develop professional layouts suitable for hardcover editions.",
          },
          {
            name: "eBook Formatting",
            text: "Prepare digital manuscripts for compatible reading devices and publishing platforms.",
          },
          {
            name: "Children’s Book Formatting",
            text: "Arrange text and illustrations in an age-appropriate layout.",
          },
          {
            name: "Illustrated Book Formatting",
            text: "Organise images, captions, graphics, and text.",
          },
          {
            name: "Academic & Educational Typesetting",
            text: "Format references, tables, footnotes, figures, and structured content.",
          },
        ],
      },
      {
        type: "checklist",
        heading: "What Our Formatting Process Includes",
        items: [
          "Trim size and page setup.",
          "Font and typography selection.",
          "Chapter and section styling.",
          "Headers and footers.",
          "Page numbering.",
          "Image and table placement.",
          "Front and back matter formatting.",
          "Print and digital file preparation.",
        ],
      },
      {
        type: "brief",
        heading: "Publishing Platform Compatibility",
        lead: "Preparation for Amazon KDP, IngramSpark, and other suitable publishing platforms according to their current specifications.",
      },
    ],
    faqs: [
      "What is the difference between formatting and typesetting?",
      "Can you format books for Amazon KDP?",
      "Do you format hardcover and paperback editions?",
      "Can you format books containing images and tables?",
      "Do you provide print-ready PDF files?",
      "Can you reformat an existing book?",
    ],
    cta: "Give Your Book a Professional Interior Layout.",
    cover: "the-house-beneath-the-silence",
    related: ["book-cover-design-services", "book-publishing-services"],
  },
  {
    slug: "book-publishing-services",
    number: "06",
    label: "Book Publishing",
    categoryId: "publishing-distribution",
    title: "Professional Book Publishing Services for Independent Authors",
    seoTitle: "Book Publishing Services for Independent Authors | Dumont Publishing",
    metaDescription:
      "Get professional support preparing and publishing your book. Explore self-publishing, Amazon KDP, manuscript preparation, and publishing assistance.",
    keyword: "Self-Publishing Services",
    intro:
      "Publishing your book is an important milestone, but navigating the requirements of different publishing platforms can be challenging. Dumont Publishing provides professional book publishing assistance to help authors prepare their manuscripts, understand publishing requirements, and move through the publication process. Whether you’re preparing an eBook, paperback, or hardcover edition, we help you explore suitable publishing options.",
    blocks: [
      {
        type: "checklist",
        heading: "Make Your Book Ready for Publication",
        items: [
          "Final manuscript preparation",
          "Professional editing",
          "Cover and interior formatting",
          "ISBN and publishing requirements",
          "Book metadata",
          "Pricing and format selection",
          "Publishing platform submission",
        ],
      },
      {
        type: "solutions",
        heading: "Our Publishing Solutions",
        items: [
          {
            name: "Amazon KDP Publishing",
            text: "Assistance with manuscript preparation, cover files, metadata, and publishing submission through Kindle Direct Publishing.",
          },
          {
            name: "eBook Publishing",
            text: "Prepare digital book editions for compatible publishing and retail platforms.",
          },
          {
            name: "Paperback Publishing",
            text: "Prepare paperback editions according to selected platform requirements.",
          },
          {
            name: "Hardcover Publishing",
            text: "Assist with the preparation of hardcover editions, including cover and interior specifications.",
          },
          {
            name: "Self-Publishing Assistance",
            text: "Provide guidance for authors who want to publish and manage their own books.",
          },
          {
            name: "Publishing Consultation",
            text: "Help authors understand publishing routes, platform requirements, and project preparation.",
          },
        ],
      },
      {
        type: "solutions",
        heading: "Understanding Your Publishing Options",
        items: [
          {
            name: "Self-Publishing",
            text: "Authors retain control of publishing decisions and manage associated investment and responsibilities.",
          },
          {
            name: "Traditional Publishing",
            text: "A publisher selects and publishes a manuscript under its own publishing agreement and business model.",
          },
          {
            name: "Hybrid Publishing",
            text: "An arrangement that combines elements of traditional and author-funded publishing, with terms varying by provider.",
          },
        ],
      },
      {
        type: "process",
        heading: "Our Publishing Process",
        items: [
          "Manuscript readiness assessment.",
          "Publishing format selection.",
          "Cover and interior preparation.",
          "ISBN and metadata guidance.",
          "Platform setup and submission assistance.",
          "Publication checks and follow-up.",
        ],
      },
    ],
    faqs: [
      "What publishing options are available?",
      "Can you help me publish on Amazon KDP?",
      "Do I need an ISBN?",
      "Can I publish paperback and eBook editions?",
      "Who retains ownership of the book?",
      "How long does the publishing process take?",
      "Do you guarantee acceptance by publishing platforms?",
    ],
    cta: "Take the Next Step Towards Publishing Your Book.",
    cover: "a-thousand-little-moments",
    related: [
      "book-distribution-services",
      "audiobook-production-publishing",
      "book-printing-services",
    ],
  },
  {
    slug: "book-distribution-services",
    number: "07",
    label: "Distribution",
    categoryId: "publishing-distribution",
    title: "Book Distribution Services to Help Your Book Reach More Readers",
    seoTitle: "Book Distribution Services for Authors | Dumont Publishing",
    metaDescription:
      "Prepare your book for wider availability with book distribution support for print and digital editions through relevant publishing channels.",
    keyword: "Book Distribution Services",
    intro:
      "Publishing your book is only one part of the author journey. Making it available to readers through suitable sales channels is another important step. Dumont Publishing provides book distribution assistance to help authors prepare their books for availability through online retailers, publishing platforms, and eligible distribution networks.",
    blocks: [
      {
        type: "brief",
        heading: "Expand Your Book’s Availability",
        lead: "Distribution connects published books with potential readers through online retailers and participating sales channels.",
      },
      {
        type: "solutions",
        heading: "Our Distribution Solutions",
        items: [
          {
            name: "Amazon Book Distribution",
            text: "Assistance with preparing book listings and availability through Amazon publishing channels.",
          },
          {
            name: "International Book Distribution",
            text: "Explore suitable distribution opportunities in international markets.",
          },
          {
            name: "Print Book Distribution",
            text: "Prepare paperback and hardcover editions for relevant print distribution channels.",
          },
          {
            name: "eBook Distribution",
            text: "Prepare digital editions for supported online retailers.",
          },
          {
            name: "Retail Distribution Support",
            text: "Guidance on making books available through participating retail networks.",
          },
          {
            name: "Distribution Setup",
            text: "Assistance with metadata, pricing, format selection, and platform configuration.",
          },
        ],
      },
      {
        type: "brief",
        heading: "Publishing Platforms and Distribution Channels",
        lead: "Relevant services such as Amazon KDP and IngramSpark, with their different capabilities and distribution arrangements.",
      },
      {
        type: "process",
        heading: "Our Distribution Process",
        items: [
          "Book and format assessment.",
          "Platform selection.",
          "Metadata preparation.",
          "Pricing and market configuration.",
          "Distribution setup.",
          "Listing and availability checks.",
        ],
      },
    ],
    faqs: [
      "Where can my book be distributed?",
      "Can I distribute my book internationally?",
      "Do you support print and digital distribution?",
      "Can my book be listed on Amazon?",
      "What is the difference between publishing and distribution?",
      "Does distribution guarantee physical bookstore placement?",
    ],
    cta: "Help Your Book Reach Its Intended Audience.",
    cover: "beyond-the-last-horizon",
    related: ["book-marketing-services", "book-publishing-services"],
  },
  {
    slug: "book-printing-services",
    number: "08",
    label: "Book Printing",
    categoryId: "book-printing",
    title: "Professional Book Printing Services for Your Published Work",
    seoTitle: "Professional Book Printing Services | Dumont Publishing",
    metaDescription:
      "Explore professional paperback, hardcover, and illustrated book printing services with support for print-ready file preparation and production requirements.",
    keyword: "Book Printing Services",
    intro:
      "A printed book gives readers a physical way to experience your work. Dumont Publishing offers book printing support to help authors produce professionally presented printed editions. From paperback and hardcover books to illustrated publications, we help prepare your files and coordinate the requirements of your print project.",
    blocks: [
      {
        type: "brief",
        heading: "Bring Your Manuscript into Print",
        lead: "The key elements of professional book printing.",
        points: [
          "Paper",
          "Binding",
          "Trim size",
          "Colour selection",
          "Cover design",
          "Print specifications",
        ],
      },
      {
        type: "solutions",
        heading: "Our Book Printing Solutions",
        items: [
          {
            name: "Paperback Book Printing",
            text: "Flexible printed editions suitable for novels, nonfiction, and general reading.",
          },
          {
            name: "Hardcover Book Printing",
            text: "Durable editions with premium presentation.",
          },
          {
            name: "Children’s Book Printing",
            text: "Illustrated books with appropriate paper and colour requirements.",
          },
          {
            name: "Full-Colour Book Printing",
            text: "Suitable for illustrated publications, photography, and visual-heavy content.",
          },
          {
            name: "Black-and-White Book Printing",
            text: "Suitable for text-focused manuscripts.",
          },
          {
            name: "Short-Run and Bulk Printing",
            text: "Options depending on quantities, production capacity, and availability.",
          },
        ],
      },
      {
        type: "solutions",
        heading: "Printing Specifications",
        items: [
          {
            name: "Cover",
            text: "Front, spine, back cover, bleed, safe margins, and print-ready PDF files.",
          },
          {
            name: "Interior",
            text: "Trim size, paper selection, colour or black-and-white printing, page count, and binding requirements.",
          },
        ],
      },
      {
        type: "process",
        heading: "From Print-Ready Files to Finished Books",
        items: ["File checking.", "Proof approval.", "Production.", "Quality review."],
      },
    ],
    faqs: [
      "What book sizes can you print?",
      "Do you offer paperback and hardcover printing?",
      "Can I order a small number of copies?",
      "What paper options are available?",
      "Can you print illustrated books?",
      "Do you provide print-ready file checks?",
    ],
    cta: "Let’s Bring Your Book into Print.",
    cover: "the-little-fox-and-the-secret-forest",
    related: ["book-publishing-services", "book-distribution-services"],
  },
  {
    slug: "book-marketing-services",
    number: "09",
    label: "Book Marketing",
    categoryId: "book-marketing-audiobooks",
    title: "Book Marketing Services to Build Your Author Brand and Reach Readers",
    seoTitle: "Professional Book Marketing Services | Dumont Publishing",
    metaDescription:
      "Build your author brand and promote your book through professional book marketing, social media campaigns, and promotional strategies.",
    keyword: "Book Marketing Services",
    intro:
      "Publishing your book is a significant achievement, but reaching readers requires a thoughtful promotional strategy. Dumont Publishing offers book marketing services to help authors develop their online presence, build awareness around their books, and connect with relevant audiences. From launch campaigns to author branding, we help create promotional activities aligned with your book and marketing objectives.",
    blocks: [
      {
        type: "brief",
        heading: "Make Your Book Visible to the Right Audience",
        points: [
          "Identifying the intended readership",
          "Positioning the book",
          "Selecting promotional channels",
          "Developing a consistent marketing approach",
        ],
      },
      {
        type: "solutions",
        heading: "Our Book Marketing Solutions",
        items: [
          {
            name: "Book Launch Marketing",
            text: "Develop promotional campaigns around your book’s release.",
          },
          {
            name: "Social Media Book Marketing",
            text: "Create content and promotional campaigns for suitable social platforms.",
          },
          {
            name: "Author Branding",
            text: "Build a consistent author identity and professional online presence.",
          },
          {
            name: "Amazon Book Marketing",
            text: "Improve book listing presentation and explore suitable platform promotional opportunities.",
          },
          {
            name: "Book Promotion Campaigns",
            text: "Develop promotional activities to increase awareness of published titles.",
          },
          {
            name: "Content Marketing",
            text: "Create articles, author-focused content, and relevant promotional materials.",
          },
          {
            name: "Email Marketing",
            text: "Develop newsletters and communication campaigns to connect with readers.",
          },
          {
            name: "Book Review Outreach",
            text: "Support ethical outreach to relevant reviewers and reading communities without guaranteeing reviews.",
          },
        ],
      },
      {
        type: "process",
        heading: "Our Marketing Process",
        items: [
          "Book and audience assessment.",
          "Author and book positioning.",
          "Marketing strategy development.",
          "Campaign and content creation.",
          "Promotional execution.",
          "Performance monitoring and reporting.",
        ],
      },
      {
        type: "brief",
        heading: "Marketing Your Book Beyond Publication",
        points: [
          "Ongoing promotion",
          "Author visibility",
          "Reader engagement",
          "Maintaining an active author platform",
        ],
      },
    ],
    faqs: [
      "When should I start marketing my book?",
      "Do you provide social media promotion?",
      "Can you help with book launch campaigns?",
      "Do you offer author branding?",
      "Can you help improve my Amazon book listing?",
      "Can you guarantee book sales or reviews?",
    ],
    cta: "Let’s Build a Marketing Strategy for Your Book.",
    cover: "the-kingdom-of-forgotten-stars",
    related: ["book-distribution-services", "audiobook-production-publishing"],
  },
  {
    slug: "audiobook-production-publishing",
    number: "10",
    label: "Audiobook Production",
    categoryId: "book-marketing-audiobooks",
    title: "Professional Audiobook Production and Publishing Services",
    seoTitle: "Audiobook Production and Publishing Services | Dumont Publishing",
    metaDescription:
      "Turn your written book into an audiobook with narration, script preparation, audio editing, mastering, and distribution preparation.",
    keyword: "Audiobook Production Services",
    intro:
      "Audiobooks provide another way for authors to share their stories and connect with readers. Dumont Publishing offers audiobook production and publishing support to transform written manuscripts into professionally prepared audio editions. From narration and script preparation to editing and distribution preparation, we help bring your book to life in an engaging listening format.",
    blocks: [
      {
        type: "brief",
        heading: "Transform Your Book into an Audio Experience",
        points: [
          "Accessibility",
          "Convenience",
          "Reaching audiences who prefer listening to reading",
        ],
      },
      {
        type: "solutions",
        heading: "Our Audiobook Services",
        items: [
          {
            name: "Audiobook Narration",
            text: "Select a suitable narration approach and voice style for your book.",
          },
          {
            name: "AI Audiobook Production",
            text: "Explore AI-assisted narration for appropriate projects and platforms, subject to applicable publishing requirements.",
          },
          {
            name: "Audiobook Script Preparation",
            text: "Adapt written content for clear and natural spoken delivery.",
          },
          {
            name: "Audio Recording",
            text: "Produce recorded narration using appropriate production standards.",
          },
          {
            name: "Audio Editing & Mastering",
            text: "Improve sound consistency, pacing, clarity, and technical quality.",
          },
          {
            name: "Audiobook Distribution",
            text: "Prepare audio editions for suitable audiobook platforms and distribution services.",
          },
        ],
      },
      {
        type: "process",
        heading: "Our Audiobook Production Process",
        items: [
          "Manuscript and suitability assessment.",
          "Narration style and voice selection.",
          "Script preparation and pronunciation review.",
          "Recording or voice generation.",
          "Editing and mastering.",
          "Quality assurance.",
          "Publishing and distribution preparation.",
        ],
      },
      {
        type: "brief",
        heading: "Audiobook Platforms and Formats",
        lead: "Platforms such as Audible and Spotify, along with audio specifications, chapter organisation, and applicable platform requirements.",
      },
    ],
    faqs: [
      "Can you convert my existing book into an audiobook?",
      "Do you offer AI-generated narration?",
      "Can I choose the narrator’s voice?",
      "Can you produce bilingual audiobooks?",
      "Which audiobook platforms can I use?",
      "How long does audiobook production take?",
    ],
    cta: "Give Your Book a Voice.",
    cover: "beyond-the-last-horizon",
    related: ["book-publishing-services", "book-marketing-services"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

export const getCategory = (id: CategoryId) => categories.find((c) => c.id === id)!;

export const servicesInCategory = (id: CategoryId) =>
  services.filter((s) => s.categoryId === id);
