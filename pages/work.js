import React from "react";
import Header from "../components/Header";
import WorksList from "../components/WorksList";
import { sanityClient, urlFor } from "../lib/sanity/client";
import { worksQuery } from "../lib/sanity/worksQuery";
import ContactForm from "../components/ContactForm";

export default function Home({ works }) {
  return (
    <>
      <WorksList works={works} />
      <ContactForm />
    </>
  );
}
export const getServerSideProps = async () => {
  const works = await sanityClient.fetch(worksQuery);
  if (!works.length && !testimonials.length) {
    return {
      props: {
        works: [],
      },
    };
  } else
    return {
      props: {
        works,
      },
    };
};
