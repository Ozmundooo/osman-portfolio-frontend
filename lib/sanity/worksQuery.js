import groq from "groq";

export const worksQuery = groq`
  *[_type == "works"]| order(date) {
    _id,
    title,
    mainImage,
    description,
    slug,
    techs[]->{
      icon
    },
  }
`;
