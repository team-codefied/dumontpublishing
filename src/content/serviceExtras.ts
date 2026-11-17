import type { BookSlug } from "./books";

/**
 * The longer-form sections that sit around each service page's core content
 * (which comes from the client document in services.ts): the story, benefits,
 * audience and genre sections. Written for Dumont Publishing.
 *
 * Nothing here promises sales, rankings, reviews or specific turnaround
 * times — the document asks that only substantiable claims are published.
 */

type Chip = [title: string, subtitle: string];

export type ServiceExtras = {
  /** Small pill above the H1. */
  tag: string;
  /** One sentence introducing the offerings grid. */
  supportText: string;
  story: {
    title: string;
    accent: string;
    paragraphs: [string, string, string];
    cta: string;
    /** Four stages shown in the illustration. */
    nodes: [string, string, string, string];
    chips: [Chip, Chip, Chip];
  };
  benefits: {
    title: string;
    accent: string;
    text: string;
    items: [string, string, string, string, string];
    cta: string;
    covers: [BookSlug, BookSlug, BookSlug];
  };
  band: { title: string; cta: string };
  audience?: {
    title: string;
    accent: string;
    text: string;
    items: [string, string, string, string, string, string];
    cta: string;
  };
  genres?: { title: string; accent: string; text: string };
  /** Platforms named in the document for this service, shown as a strip. */
  platforms?: string[];
};

export const extras: Record<string, ServiceExtras> = {
  "book-writing-services": {
    tag: "Book Writing",
    supportText:
      "Tell us what kind of book you are writing and we shape the support around it, from plot and pacing to structure and research.",
    story: {
      title: "From a Spark of an Idea to a Finished Manuscript",
      accent: "Finished Manuscript",
      paragraphs: [
        "Most books begin as a thought you keep coming back to. We help you give it shape: a clear premise, a chapter plan, and pages that read the way you imagined them.",
        "Arrive with a loose outline, a half-finished draft or nothing but a concept. Either way, we write alongside you and fit the work to your subject, your genre and your readers.",
        "You stay close to the process, reviewing and steering as we go, so the manuscript ends up unmistakably yours.",
      ],
      cta: "Talk to a Writing Specialist",
      nodes: ["Idea", "Outline", "Draft", "Manuscript"],
      chips: [
        ["Your concept", "is the starting point"],
        ["Chapter plan", "agreed before writing"],
        ["Your review", "at every stage"],
      ],
    },
    benefits: {
      title: "A Calmer Way to Write Your Book",
      accent: "Write Your Book",
      text: "Writing a whole book takes time, research and steady focus. We carry the heavy lifting and keep you informed, so progress never feels out of reach.",
      items: [
        "Dedicated writing time that fits around your schedule.",
        "A chapter-by-chapter plan before the first page is written.",
        "Support whether you hold an outline or a full draft.",
        "Regular check-ins, so you always know where the book stands.",
        "Revisions until the manuscript matches your intent.",
      ],
      cta: "Discuss Your Book Idea",
      covers: ["the-power-of-starting-again", "a-life-beyond-limits", "the-kingdom-of-forgotten-stars"],
    },
    band: { title: "Ready to Start Your Manuscript?", cta: "Start Writing With Us" },
    genres: {
      title: "Genres We Write In",
      accent: "Write In",
      text: "From a quiet memoir to a sweeping fantasy, we match your project to a writer who understands the genre and its readers.",
    },
  },

  "ghostwriting-services": {
    tag: "Ghostwriting",
    supportText:
      "Choose the form your book will take and we pair you with a writer who suits the subject, the genre and your voice.",
    story: {
      title: "Your Ideas, Written Up by a Professional",
      accent: "Written Up",
      paragraphs: [
        "Not everyone has the hours, or the words, to write a book alone. A ghostwriter listens first, through interviews, notes and drafts, and then puts your message on the page.",
        "The result reads like you at your clearest. Your name goes on the cover; our team does the writing behind it.",
        "Scope, confidentiality and ownership arrangements are agreed in writing before work begins, so there are no surprises later.",
      ],
      cta: "Talk to a Ghostwriting Specialist",
      nodes: ["Interview", "Outline", "Draft", "Final"],
      chips: [
        ["Your voice", "kept intact"],
        ["Drafts", "reviewed by you"],
        ["Terms", "agreed up front"],
      ],
    },
    benefits: {
      title: "Write Less. Say More.",
      accent: "Say More.",
      text: "A book needs sustained attention that busy people rarely have. Ghostwriting hands the drafting to a specialist while you keep control of the message.",
      items: [
        "Time freed up for the work only you can do.",
        "A writer who studies your tone before drafting.",
        "Your feedback shaping every stage of the draft.",
        "Support whether you hold notes, recordings or a rough draft.",
        "A finished manuscript that follows your brief.",
      ],
      cta: "Share Your Book Idea",
      covers: ["a-life-beyond-limits", "the-power-of-starting-again", "a-thousand-little-moments"],
    },
    band: { title: "Have a Story Worth Telling?", cta: "Start Your Ghostwriting Project" },
    audience: {
      title: "Ghostwriting for People With Something to Say",
      accent: "Something to Say",
      text: "If your story or your knowledge deserves a book but the writing is what holds you back, this service was built for you.",
      items: [
        "Memoir and autobiography authors",
        "Business leaders and founders",
        "Coaches, consultants and speakers",
        "Fiction authors with a strong concept",
        "Experts sharing specialist knowledge",
        "Storytellers writing for children",
      ],
      cta: "Request a Custom Book Plan",
    },
    genres: {
      title: "Genres Our Ghostwriters Cover",
      accent: "Ghostwriters Cover",
      text: "Whatever the subject, we pair your project with a writer who understands its readers and its conventions.",
    },
  },

  "book-editing-proofreading-services": {
    tag: "Editing & Proofreading",
    supportText:
      "Each level of editing answers a different question about your manuscript. Here is what every one of them covers.",
    story: {
      title: "A Second Pair of Eyes Before Your Readers See It",
      accent: "Before Your Readers",
      paragraphs: [
        "Even a strong draft hides repeated phrases, loose threads and small slips. Careful editing finds them before your readers do.",
        "We work through the manuscript in layers, from structure and argument down to the last comma, so each pass has a clear purpose.",
        "You decide which suggestions to keep. The voice stays yours; the clarity improves.",
      ],
      cta: "Request an Editing Assessment",
      nodes: ["Assess", "Edit", "Revise", "Proof"],
      chips: [
        ["Your voice", "preserved"],
        ["Scope", "confirmed first"],
        ["Changes", "reviewed by you"],
      ],
    },
    benefits: {
      title: "Polish That Readers Notice",
      accent: "Readers Notice",
      text: "Good editing is mostly invisible: the book simply reads better, moves faster and feels more trustworthy.",
      items: [
        "Sharper structure and smoother chapter flow.",
        "Consistent tone, tense and terminology.",
        "Cleaner grammar, spelling and punctuation.",
        "Clearer sentences that keep readers turning pages.",
        "A manuscript ready for formatting and publishing.",
      ],
      cta: "Get Your Manuscript Reviewed",
      covers: ["behind-closed-doors", "the-house-beneath-the-silence", "beyond-the-last-horizon"],
    },
    band: { title: "Ready for a Manuscript You're Proud Of?", cta: "Start Your Edit" },
    audience: {
      title: "Editing for Every Stage of a Manuscript",
      accent: "Every Stage",
      text: "Some drafts need a rebuild; others only a final pass. We help you choose the right level for yours.",
      items: [
        "Authors finishing a first draft",
        "Writers revising after reader feedback",
        "Business authors tightening an argument",
        "Fiction writers refining plot and pacing",
        "Educators preparing instructional material",
        "Self-publishers making a final check before launch",
      ],
      cta: "Find the Right Edit",
    },
    genres: {
      title: "Genres We Edit",
      accent: "We Edit",
      text: "Fiction and nonfiction need different kinds of attention. We edit across both, with the genre's conventions in mind.",
    },
  },

  "book-cover-design-services": {
    tag: "Cover Design",
    supportText:
      "Every kind of book has its own visual conventions. These are the cover services we offer, from a single eBook cover to a whole series.",
    story: {
      title: "A Cover That Stops the Scroll",
      accent: "Stops the Scroll",
      paragraphs: [
        "Readers decide in seconds. Your cover has to signal genre, mood and quality before they read a single line.",
        "We study your category, learn what its readers expect, and then design something that fits in while still standing out.",
        "You review concepts, give feedback and approve the final artwork before any files are prepared.",
      ],
      cta: "Discuss Your Cover",
      nodes: ["Brief", "Concept", "Refine", "Final"],
      chips: [
        ["Genre", "fit checked"],
        ["Concepts", "for your review"],
        ["Print and digital", "files prepared"],
      ],
    },
    benefits: {
      title: "A First Impression Worth Designing",
      accent: "Worth Designing",
      text: "A cover works on a shelf, on a screen and as a tiny thumbnail. We design with all three in mind.",
      items: [
        "Typography that stays legible at thumbnail size.",
        "Imagery and colour chosen for your genre.",
        "Layouts for front, spine and back where needed.",
        "Files prepared for print and digital editions.",
        "Revisions guided by your feedback.",
      ],
      cta: "Start Your Cover Design",
      covers: ["the-kingdom-of-forgotten-stars", "beyond-the-last-horizon", "a-thousand-little-moments"],
    },
    band: { title: "Give Your Book the Cover It Deserves", cta: "Request Cover Concepts" },
    audience: {
      title: "Covers for Every Kind of Book",
      accent: "Every Kind",
      text: "Each genre speaks its own visual language. We design in the one yours uses.",
      items: [
        "Romance, fantasy and thriller authors",
        "Memoir and biography writers",
        "Business and self-help authors",
        "Children's book authors",
        "Educational and academic authors",
        "Authors launching a book series",
      ],
      cta: "See Cover Options",
    },
    genres: {
      title: "Genres We Design For",
      accent: "Design For",
      text: "Browse the range below; each genre has its own palette, typography and imagery, and we work within them.",
    },
  },

  "book-formatting-typesetting-services": {
    tag: "Formatting & Typesetting",
    supportText:
      "Each format has its own rules. We set the page to suit the way your book will be read, on paper or on a screen.",
    story: {
      title: "A Reading Experience Without Distractions",
      accent: "Without Distractions",
      paragraphs: [
        "Good formatting disappears. Margins, fonts and spacing do their quiet work, and the reader simply keeps reading.",
        "We set your manuscript for the format you intend to publish, because print and digital pages behave very differently.",
        "From chapter openers to page numbers, every detail is checked before you receive the final files.",
      ],
      cta: "Request a Formatting Quote",
      nodes: ["Setup", "Layout", "Proof", "Files"],
      chips: [
        ["Trim size", "set to specification"],
        ["Print and eBook", "both covered"],
        ["Final files", "checked"],
      ],
    },
    benefits: {
      title: "Interiors That Feel Professionally Published",
      accent: "Professionally Published",
      text: "Layout is a craft. When it is right, your book sits comfortably beside any traditionally published title.",
      items: [
        "Typography chosen for comfortable long reading.",
        "Consistent chapter styling, headers and footers.",
        "Images, tables and captions placed cleanly.",
        "Layouts suited to paperback, hardcover and eBook.",
        "Files prepared against current platform specifications.",
      ],
      cta: "Get Your Book Formatted",
      covers: ["the-house-beneath-the-silence", "behind-closed-doors", "the-power-of-starting-again"],
    },
    band: { title: "Ready to See Your Book Typeset?", cta: "Start Formatting" },
    audience: {
      title: "Formatting for Every Format",
      accent: "Every Format",
      text: "Whatever the shape of your book, the interior should suit it. These are the authors we format for most often.",
      items: [
        "First-time self-publishers",
        "Authors of illustrated or image-rich books",
        "Academic authors with references and footnotes",
        "Children's book authors",
        "Authors reformatting an older title",
        "Writers preparing for KDP or IngramSpark",
      ],
      cta: "Plan Your Interior",
    },
    platforms: ["Amazon KDP", "IngramSpark", "Paperback", "Hardcover", "eBook"],
  },

  "book-publishing-services": {
    tag: "Book Publishing",
    supportText:
      "Pick the editions and platforms that match your goals. We handle the preparation and guide you through each submission.",
    story: {
      title: "Your Route to Publication, Mapped Out",
      accent: "Mapped Out",
      paragraphs: [
        "Publishing involves choices about formats, platforms, pricing and metadata. We explain each one in plain language and set it up with you.",
        "Whether your goal is an eBook, a paperback or a hardcover, we prepare what each platform needs and guide you through submission.",
        "You stay informed at every step, and nothing is submitted without your approval.",
      ],
      cta: "Plan Your Publication",
      nodes: ["Prepare", "Format", "Submit", "Check"],
      chips: [
        ["Metadata", "prepared for you"],
        ["ISBN", "guidance included"],
        ["Approval", "before submission"],
      ],
    },
    benefits: {
      title: "Publishing Without the Guesswork",
      accent: "Without the Guesswork",
      text: "Each platform has its own requirements. We keep track of them so you can concentrate on the book.",
      items: [
        "Plain-language advice on self, traditional and hybrid routes.",
        "Help with ISBNs, metadata and format selection.",
        "Cover and interior files prepared to platform specifications.",
        "Support with Amazon KDP submission.",
        "Follow-up checks once the book is submitted.",
      ],
      cta: "Ask About Publishing",
      covers: ["a-thousand-little-moments", "a-life-beyond-limits", "the-little-fox-and-the-secret-forest"],
    },
    band: { title: "Ready to Publish Your Book?", cta: "Start Publishing" },
    audience: {
      title: "Publishing Support for Independent Authors",
      accent: "Independent Authors",
      text: "You do not need to understand every platform before you begin. You only need a finished manuscript and a goal.",
      items: [
        "First-time authors new to publishing",
        "Authors choosing between publishing routes",
        "Writers preparing eBook, paperback and hardcover editions",
        "Authors who want hands-on guidance with KDP",
        "Business authors publishing to build credibility",
        "Authors with a finished, edited manuscript",
      ],
      cta: "Talk to a Publishing Consultant",
    },
    platforms: ["Amazon KDP", "IngramSpark", "eBook", "Paperback", "Hardcover"],
  },

  "book-distribution-services": {
    tag: "Book Distribution",
    supportText:
      "From a single retailer to international markets, these are the distribution options we can set up for your book.",
    story: {
      title: "Put Your Book Where Readers Already Shop",
      accent: "Readers Already Shop",
      paragraphs: [
        "Publishing makes your book exist. Distribution makes it findable. We set up the channels so readers can actually reach it.",
        "That means choosing suitable platforms, preparing metadata, and configuring pricing and territories correctly.",
        "We are honest about what distribution can and cannot do: it opens doors, but it does not guarantee a place on a bookstore shelf.",
      ],
      cta: "Plan Your Distribution",
      nodes: ["Assess", "Select", "Configure", "Check"],
      chips: [
        ["Metadata", "prepared"],
        ["Pricing", "configured with you"],
        ["Availability", "checked"],
      ],
    },
    benefits: {
      title: "Wider Availability, Properly Configured",
      accent: "Properly Configured",
      text: "A book is only as available as its setup allows. We make sure each listing is complete and correct.",
      items: [
        "Guidance on suitable retailers and networks.",
        "Print and digital editions prepared separately.",
        "Metadata set up to support discovery.",
        "Pricing and market settings configured with you.",
        "Listing and availability checks after setup.",
      ],
      cta: "Discuss Distribution",
      covers: ["beyond-the-last-horizon", "the-kingdom-of-forgotten-stars", "behind-closed-doors"],
    },
    band: { title: "Want Your Book in More Places?", cta: "Start Distribution" },
    audience: {
      title: "Distribution for Every Kind of Author",
      accent: "Every Kind",
      text: "Whether you have one title or several, the aim is the same: make it easy for readers to find and buy.",
      items: [
        "Authors with a newly published title",
        "Writers expanding beyond a single retailer",
        "Authors targeting international readers",
        "Independent publishers with several titles",
        "Authors who want print and eBook availability",
        "Writers unsure which channels suit their book",
      ],
      cta: "Find Your Channels",
    },
    platforms: ["Amazon KDP", "IngramSpark", "Online retailers", "Print networks", "International markets"],
  },

  "book-printing-services": {
    tag: "Book Printing",
    supportText:
      "Paper, binding and colour all change the finished book. These are the print options available to you.",
    story: {
      title: "Hold Your Book in Your Hands",
      accent: "in Your Hands",
      paragraphs: [
        "A printed book is a different kind of milestone. We help you reach it with files that are ready for press and specifications that suit your book.",
        "Paper, binding, trim size and colour all affect how a book feels and what it costs. We walk you through each choice.",
        "Before production begins, you review a proof and approve it.",
      ],
      cta: "Plan Your Print Run",
      nodes: ["Specify", "Check", "Proof", "Print"],
      chips: [
        ["Print-ready", "files checked"],
        ["Proof", "approved by you"],
        ["Run size", "your choice"],
      ],
    },
    benefits: {
      title: "Print Quality You Can Rely On",
      accent: "Rely On",
      text: "A well-made book is a pleasure to hold. We pay attention to the details that make the difference.",
      items: [
        "Paperback, hardcover and illustrated editions.",
        "Full-colour or black-and-white interiors.",
        "Short runs and larger quantities, subject to availability.",
        "Cover specifications set for spine, bleed and safe margins.",
        "A final quality review before delivery.",
      ],
      cta: "Request a Print Quote",
      covers: ["the-little-fox-and-the-secret-forest", "a-thousand-little-moments", "the-power-of-starting-again"],
    },
    band: { title: "Ready to See Your Book in Print?", cta: "Start Printing" },
    audience: {
      title: "Printing for Every Kind of Project",
      accent: "Every Kind",
      text: "From a small first run to a premium hardcover, we help you choose the print route that fits.",
      items: [
        "Novelists printing a first paperback",
        "Authors of illustrated and photography books",
        "Children's book authors",
        "Speakers who sell books at events",
        "Authors wanting a premium hardcover edition",
        "Writers ordering a small first run",
      ],
      cta: "Talk to a Print Specialist",
    },
  },

  "book-marketing-services": {
    tag: "Book Marketing",
    supportText:
      "Choose the activities that suit your book and your budget, and we plan them around your launch.",
    story: {
      title: "Help the Right Readers Find Your Book",
      accent: "Right Readers",
      paragraphs: [
        "Publishing is an achievement; being discovered is a separate job. A clear plan makes that job manageable.",
        "We work out who your readers are, how to position the book for them and which channels are worth your effort.",
        "Then we build the content and campaigns to match, with honest reporting on what is happening.",
      ],
      cta: "Plan Your Book Marketing",
      nodes: ["Audience", "Position", "Launch", "Review"],
      chips: [
        ["Audience", "defined"],
        ["Channels", "chosen with you"],
        ["Reporting", "included"],
      ],
    },
    benefits: {
      title: "Marketing Built Around Your Book",
      accent: "Around Your Book",
      text: "There is no single formula that works for every title. We start from your book and your goals, then choose the tools.",
      items: [
        "A launch plan shaped by your goals and timeline.",
        "A consistent author brand across your channels.",
        "Social, email and content ideas ready to use.",
        "Support improving your Amazon listing.",
        "Ethical review outreach, with no guaranteed outcomes.",
      ],
      cta: "Discuss Your Launch",
      covers: ["beyond-the-last-horizon", "the-power-of-starting-again", "the-house-beneath-the-silence"],
    },
    band: { title: "Ready to Reach Your Readers?", cta: "Start Marketing" },
    audience: {
      title: "Marketing Support for Authors at Any Stage",
      accent: "Any Stage",
      text: "A book can be promoted before launch, at launch or years afterwards. Here is who we usually work with.",
      items: [
        "Authors planning a book launch",
        "Authors with a book already on sale",
        "Business authors building a personal brand",
        "Fiction authors growing a readership",
        "Authors starting a newsletter",
        "Writers refreshing an older title",
      ],
      cta: "Build Your Strategy",
    },
  },

  "audiobook-production-publishing": {
    tag: "Audiobook Production",
    supportText:
      "From narration to mastering, these are the stages of audiobook production we handle for you.",
    story: {
      title: "Give Your Book a Voice",
      accent: "a Voice",
      paragraphs: [
        "An audiobook lets your story travel with people on commutes, walks and long drives. We turn your manuscript into one.",
        "We help you choose a narration approach, prepare the script, and look after recording, editing and mastering.",
        "Then we prepare the finished files for audiobook platforms, with their specifications checked.",
      ],
      cta: "Discuss Your Audiobook",
      nodes: ["Script", "Narrate", "Master", "Publish"],
      chips: [
        ["Voice", "chosen with you"],
        ["Script", "prepared for listening"],
        ["Audio", "mastered"],
      ],
    },
    benefits: {
      title: "Reach Listeners Who Prefer Audio",
      accent: "Prefer Audio",
      text: "Some readers will only ever listen. An audio edition lets your book reach them.",
      items: [
        "Narration style and voice selected with your input.",
        "A script adapted for natural spoken delivery.",
        "Editing for clarity, pacing and consistency.",
        "Mastering to platform technical standards.",
        "Distribution preparation for audiobook platforms.",
      ],
      cta: "Plan Your Audiobook",
      covers: ["the-little-fox-and-the-secret-forest", "a-life-beyond-limits", "the-kingdom-of-forgotten-stars"],
    },
    band: { title: "Ready to Hear Your Book?", cta: "Start Your Audiobook" },
    audience: {
      title: "Audiobooks for Every Kind of Author",
      accent: "Every Kind",
      text: "Audio suits more books than most authors expect. These are the writers who benefit most often.",
      items: [
        "Authors with an already published book",
        "Memoir writers who want their story heard",
        "Business authors with readers on the move",
        "Fiction authors with a strong narrative voice",
        "Educators making learning material accessible",
        "Authors considering a bilingual edition",
      ],
      cta: "Explore Audiobook Options",
    },
    genres: {
      title: "Genres We Produce",
      accent: "We Produce",
      text: "Each genre calls for a different delivery. We match narration style to the book you have written.",
    },
    platforms: ["Audible", "Spotify", "Narration", "Mastering", "Distribution"],
  },
};

/** Shared "one team" checklist, drawn from the six service categories in the document. */
export const oneTeam = {
  title: "One Team for Every Stage of Your Book",
  accent: "Every Stage",
  text: "Whether you arrive with a single idea or a finished manuscript, the same team can take you to the next step without handing you between companies.",
  items: [
    "Professional writing shaped around your ideas and style.",
    "Ghostwriting for authors who are short on time.",
    "Editing from structure down to final proofreading.",
    "Cover design suited to your genre.",
    "Interior formatting and typesetting for every format.",
    "Publishing guidance and submission support.",
    "Distribution through suitable channels.",
    "Paperback, hardcover and illustrated printing.",
    "Marketing and author branding.",
    "Audiobook narration and production.",
    "Plain-language advice on publishing routes and ISBNs.",
    "Clear communication about scope and responsibilities.",
  ],
  cta: "Request Your Custom Book Plan",
};
