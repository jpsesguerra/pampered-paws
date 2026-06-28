export type BlogPost = {
  slug: string;
  title: string;
  image: string;
  excerpt: string;
  content: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "critical-periods-in-your-puppys-life",
    title: "Critical Periods in your Puppy's life",
    image:
      "https://cdn.prod.website-files.com/60ba4364e4c676432b90ecb8/687fef376dba49254d35a3b2_IMG_5361.jpg",
    excerpt:
      "Acquiring a puppy at the right age and providing it with the proper atmosphere during the critical periods of its life is the only absolute way that the man-dog relationship can be predetermined.",
    content:
      "Scientific studies have shown that there are five critical periods in a puppy's life — five phases of mental development during which adverse conditions could cripple a dog emotionally for life, or, conversely, positive conditions will produce dogs of the highest caliber mentally and socially. Being aware of these critical periods, and providing the correct environment during them, will allow a puppy to develop emotionally and socially to full potential.",
  },
  {
    slug: "deadly-household-and-wild-plants-2",
    title: "Deadly Household and Wild Plants",
    image:
      "https://cdn.prod.website-files.com/60ba4364e4c676432b90ecb8/68800f9f94fbde07ab9cf0df_61979bc7ef61c702ab229030_AdobeStock_129198491.jpeg",
    excerpt:
      "Many people are not aware that a number of common household and wild plants are toxic to companion animals. Here's what to watch for.",
    content:
      "Common household plants to watch out for include Caladium, Spider plant, Dieffenbachia, Dragon tree, English holly, Daffodil, Snowhead, Foxglove, Poinsettia, Airplant and Hyacinth. Toxic naturally occurring plants include Oak, Red maple, Thorn apple, Water hemlock, Skunk cabbage, Milkweeds and Bluebonnet. Symptoms of poisoning include excessive salivation, intense pain, diarrhea, vomiting, and gastro-intestinal disorders.",
  },
  {
    slug: "holiday-pet-safety-turkey-chocolate",
    title: "Holiday Pet Safety: Turkey & Chocolate",
    image:
      "https://cdn.prod.website-files.com/60ba4364e4c676432b90ecb8/69433c99ea4e650896497da7_Turkey3.jpg",
    excerpt:
      "Holiday extras like seasonings, bones, and fatty skin can lead to serious health issues for pets, and chocolate is toxic to dogs and cats.",
    content:
      "While it may be tempting to share a holiday meal with your furry companions, holiday extras like seasonings, bones, and fatty skin can lead to serious health issues such as pancreatitis or intestinal blockages. Similarly, chocolate contains stimulants that are toxic to dogs and cats, with darker varieties posing the greatest threat.",
  },
  {
    slug: "leptospirosis-in-dogs",
    title: "Leptospirosis in Dogs",
    image:
      "https://cdn.prod.website-files.com/60ba4364e4c676432b90ecb8/6941d381812d22c53349efd2_Gemini_Generated_Image_k3mbmzk3mbmzk3mb.jpeg",
    excerpt:
      "A simple puddle on your daily walk could pose a serious risk to your dog — lepto is a potentially fatal bacterial infection.",
    content:
      "Leptospirosis, or \"lepto,\" is a potentially fatal bacterial infection that primarily attacks the kidneys and liver of dogs. Shed in the urine of infected animals like rodents, the bacteria contaminate water and soil. Your dog can become infected just by drinking from or wading in contaminated areas.",
  },
  {
    slug: "winter-paw-care",
    title: "Winter Paw Care",
    image: "https://cdn.prod.website-files.com/60ba4364e4c676432b90ecb8/694461d96c85c3a14b7fc7b1_Paws.png",
    excerpt:
      "Simple, practical steps to prevent tenderness, cracking, chemical burns, and cold injury during winter walks.",
    content:
      "Winter walks are great for mental and physical health — but winter conditions can be rough on paws. Cold pavement pulls heat from the pads, snow and ice can pack between toes, and de-icing salt/chemicals can sting, dry out, or burn the skin. A few small habits, and the right gear, can make a big difference.",
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getOtherBlogPosts(slug: string): BlogPost[] {
  return BLOG_POSTS.filter((post) => post.slug !== slug);
}
