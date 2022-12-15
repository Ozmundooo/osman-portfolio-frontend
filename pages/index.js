import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import WorksList from "../components/WorksList";
import styles from "../styles/Home.module.css";
import { sanityClient, urlFor } from "../lib/sanity/client";
import { worksQuery } from "../lib/sanity/worksQuery";
import { testimonialsQuery } from "../lib/sanity/testimonialQuery";
import TestimonialsList from "../components/TestimonialsList";
import ContactForm from "../components/ContactForm";

export default function Home({ works, testimonials }) {
  return (
    <>
      <Head>
        <title>Osman Ali: Web Development</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <WorksList works={works} />
      <TestimonialsList testimonials={testimonials} />
      <ContactForm />
    </>
  );
}

export const getServerSideProps = async () => {
  const works = await sanityClient.fetch(worksQuery);
  const testimonials = await sanityClient.fetch(testimonialsQuery);
  if (!works.length && !testimonials.length) {
    return {
      props: {
        works: [],
        testimonials: [],
      },
    };
  } else
    return {
      props: {
        works,
        testimonials,
      },
    };
};
