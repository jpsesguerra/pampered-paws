import { groq } from "next-sanity";

const locationProjection = groq`{
  ...,
  "slug": slug.current,
  testimonials[]->
}`;

export const allLocationsQuery = groq`*[_type == "location"] | order(listOrder asc) ${locationProjection}`;
export const locationBySlugQuery = groq`*[_type == "location" && slug.current == $slug][0] ${locationProjection}`;

export const teamMembersByLocationKeyQuery = groq`*[_type == "teamMember" && locationKey == $locationKey]`;

export const allTestimonialsQuery = groq`*[_type == "testimonial"]`;
export const testimonialsByIdsQuery = groq`*[_type == "testimonial" && _id in $ids]`;
export const testimonialsByCategoryQuery = groq`*[_type == "testimonial" && category == $category]`;

const programProjection = groq`{
  "slug": slug.current,
  title,
  tagline,
  mainImage,
  duration,
  cost,
  level,
  description,
  ctaLabel
}`;

export const allProgramsQuery = groq`*[_type == "program"] | order(orderNumber asc) ${programProjection}`;
export const programBySlugQuery = groq`*[_type == "program" && slug.current == $slug][0] ${programProjection}`;

const resourceProjection = groq`{
  ...,
  "slug": slug.current,
  file{ asset-> { url } }
}`;

export const allResourcesQuery = groq`*[_type == "resource"] | order(title asc) ${resourceProjection}`;
export const resourceBySlugQuery = groq`*[_type == "resource" && slug.current == $slug][0] ${resourceProjection}`;

const blogPostProjection = groq`{ ..., "slug": slug.current }`;

export const allBlogPostsQuery = groq`*[_type == "blogPost"] | order(_createdAt desc) ${blogPostProjection}`;
export const blogPostBySlugQuery = groq`*[_type == "blogPost" && slug.current == $slug][0] ${blogPostProjection}`;

export const faqsByCategoryQuery = groq`*[_type == "faq" && category == $category] | order(order asc)`;

export const allBreedPricingQuery = groq`*[_type == "breedPricing"] | order(breed asc)`;

export const allServicesQuery = groq`*[_type == "service"] | order(category asc, name asc)`;
