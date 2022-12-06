import Head from "next/head";
import Image from "next/image";
import { sanityClient, urlFor } from "../lib/sanity/client";
import { blogQuery } from "../lib/sanity/blogQuery";
import BlogsList from "../components/BlogsList";
import ContactForm from "../components/ContactForm";

export default function Blog({ blogs }) {
  return (
    <>
      <Head>
        <title>Osman Ali: Web Development</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BlogsList blogs={blogs} />
      <ContactForm />
    </>
  );
}

export const getServerSideProps = async () => {
  const query = `
  *[_type == "blog"] {
    _id,
    title,
    mainImage,
    description,
    authors,
    slug,
  }
  `;
  const blogs = await sanityClient.fetch(blogQuery);

  if (!blogs.length) {
    return {
      props: {
        blogs: [],
      },
    };
  } else
    return {
      props: {
        blogs,
      },
    };
};
