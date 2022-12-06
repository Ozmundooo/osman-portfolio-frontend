import React from "react";
import ContactForm from "../components/ContactForm";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Osman Ali: Web Development</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="h-screen">
        <ContactForm />
      </div>
    </>
  );
}
