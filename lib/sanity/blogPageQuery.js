import groq from "groq";

export const blogPageQuery = groq`
*[_type == "blog" && slug.current == $pageSlug][0]{
  _id,
  title,
  mainImage,
  date,
  description,
  authors[]->{
    profile,
    title
  },
  slug,
}
`;
