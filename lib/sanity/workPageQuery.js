import groq from "groq";

export const workPageQuery = groq`
*[_type == "works" && slug.current == $pageSlug][0]{
  _id,
  title,
  mainImage,
  description,
  techs[]->{
    icon
  },
  website,
  problem,
  solution,
  images,
  date,
  slug,
}
`;
