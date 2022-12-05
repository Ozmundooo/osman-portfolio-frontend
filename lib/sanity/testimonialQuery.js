import groq from "groq";

export const testimonialsQuery = groq`
*[_type == "testimonials"] {
  _id,
  name,
  profilePic,
  testimonial,
}
`;
