import React from "react";
import Header from "../components/Header";
import Head from "next/head";
import WorksList from "../components/WorksList";
import { sanityClient, urlFor } from "../lib/sanity/client";
import { worksQuery } from "../lib/sanity/worksQuery";
import ContactForm from "../components/ContactForm";

export default function Home({ works }) {
  return (
    <>
      <Head>
        <title>Osman Ali: Web Development</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
