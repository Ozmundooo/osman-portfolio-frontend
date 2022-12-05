import groq from "groq";

export const blogQuery = groq`
*[_type == "blog"] {
  _id,
  title,
  mainImage,
  description,
  authors,
  slug,
}
`;
