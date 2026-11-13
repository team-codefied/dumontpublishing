/** The eight supplied book covers. Titles, authors and genres are as supplied. */

export type PortfolioCategory =
  | "Fiction"
  | "Nonfiction"
  | "Children’s Books"
  | "Memoirs and Biographies"
  | "Business and Self-Help"
  | "Educational Books";

export const portfolioCategories: PortfolioCategory[] = [
  "Fiction",
  "Nonfiction",
  "Children’s Books",
  "Memoirs and Biographies",
  "Business and Self-Help",
  "Educational Books",
];

export const books = [
  {
    slug: "a-thousand-little-moments",
    title: "A Thousand Little Moments",
    author: "Emily Carter",
    genre: "Romance",
    categories: ["Fiction"],
  },
  {
    slug: "behind-closed-doors",
    title: "Behind Closed Doors",
    author: "Daniel Brooks",
    genre: "Mystery & Thriller",
    categories: ["Fiction"],
  },
  {
    slug: "the-kingdom-of-forgotten-stars",
    title: "The Kingdom of Forgotten Stars",
    author: "Olivia Hayes",
    genre: "Fantasy",
    categories: ["Fiction"],
  },
  {
    slug: "beyond-the-last-horizon",
    title: "Beyond the Last Horizon",
    author: "Nathan Cole",
    genre: "Science Fiction",
    categories: ["Fiction"],
  },
  {
    slug: "the-house-beneath-the-silence",
    title: "The House Beneath the Silence",
    author: "Rebecca Stone",
    genre: "Horror",
    categories: ["Fiction"],
  },
  {
    slug: "the-power-of-starting-again",
    title: "The Power of Starting Again",
    author: "James Bennett",
    genre: "Self-Help",
    categories: ["Nonfiction", "Business and Self-Help"],
  },
  {
    slug: "a-life-beyond-limits",
    title: "A Life Beyond Limits",
    author: "Michael Anderson",
    genre: "Biography & Memoir",
    categories: ["Nonfiction", "Memoirs and Biographies"],
  },
  {
    slug: "the-little-fox-and-the-secret-forest",
    title: "The Little Fox and the Secret Forest",
    author: "Sophie Miller",
    genre: "Children’s Fiction",
    categories: ["Children’s Books"],
  },
] as const satisfies readonly {
  slug: string;
  title: string;
  author: string;
  genre: string;
  categories: readonly PortfolioCategory[];
}[];

export type Book = (typeof books)[number];
export type BookSlug = Book["slug"];

export const COVER_WIDTH = 1024;
export const COVER_HEIGHT = 1536;

export const coverSrc = (slug: BookSlug) => `/books/${slug}.webp`;

export const getBook = (slug: BookSlug): Book => books.find((b) => b.slug === slug)!;

export const coverAlt = (book: Book) =>
  `Book cover of “${book.title}” by ${book.author} — ${book.genre}`;
