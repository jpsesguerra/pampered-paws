import { groq } from "next-sanity";

export const allLocationsQuery = groq`*[_type == "location"] | order(locationName asc)`;
export const locationBySlugQuery = groq`*[_type == "location" && slug.current == $slug][0]{
  ...,
  testimonials[]->
}`;

export const teamMembersByLocationKeyQuery = groq`*[_type == "teamMember" && locationKey == $locationKey]`;

export const allTestimonialsQuery = groq`*[_type == "testimonial"]`;
export const testimonialsByIdsQuery = groq`*[_type == "testimonial" && _id in $ids]`;

export const allProgramsQuery = groq`*[_type == "program"] | order(title asc)`;
export const programBySlugQuery = groq`*[_type == "program" && slug.current == $slug][0]`;

export const allResourcesQuery = groq`*[_type == "resource"] | order(title asc)`;
export const resourceBySlugQuery = groq`*[_type == "resource" && slug.current == $slug][0]`;

export const allBlogPostsQuery = groq`*[_type == "blogPost"] | order(_createdAt desc)`;
export const blogPostBySlugQuery = groq`*[_type == "blogPost" && slug.current == $slug][0]`;

export const faqsByCategoryQuery = groq`*[_type == "faq" && category == $category] | order(order asc)`;

export const allBreedPricingQuery = groq`*[_type == "breedPricing"] | order(breed asc)`;

export const allServicesQuery = groq`*[_type == "service"] | order(category asc, name asc)`;
