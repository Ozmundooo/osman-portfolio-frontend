import React from "react";
import { sanityClient, urlFor } from "../../lib/sanity/client";
import PortableText from "react-portable-text";
import ContactForm from "../../components/ContactForm";
import { blogPageQuery } from "../../lib/sanity/blogPageQuery";
import Image from "next/image";
import Head from "next/head";
export default function Work({ title, mainImage, description, date, authors }) {
  console.log(date);
  return (
    <>
      <Head>
        <title>Osman Ali: Web Development</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section>
        <div className=" w-screen">
          <img className=" w-screen" src={urlFor(mainImage)} />
        </div>
        <div className="font-['Poppins'] px-5 lg:mx-10 lg:mt-10">
          <div className="lg:flex lg:flex-row-reverse flex flex-col-reverse">
            <div className="lg:w-3/4 lg:h-screen lg:sticky lg:top-0">
              <h2 className="font-anon text-2xl my-2  lg:text-3xl font-bold">
                {title}
              </h2>
              <PortableText
                // Pass in block content straight from Sanity.io
                content={description}
                className="text-sm mb-4  lg:text-xl font-light lg:w-11/12"
                // Optionally override marks, decorators, blocks, etc. in a flat
                // structure without doing any gymnastics
              />
            </div>

            <div className="lg:w-1/4 ">
              <h2 className="font-anon text-xl lg:text-2xl mt-2 font-bold">
                Date
              </h2>
              <p className="font-light lg:text-lg">{date}</p>
              <h2 className="font-anon text-xl lg:text-2xl mt-2 font-bold">
                Author
              </h2>
              <div className="flex mt-3">
                {authors.map((auth) => (
                  <div className=" flex justify-center place-items-center">
                    <img
                      className="w-8 h-8 lg:w-14 lg:h-14 rounded-full"
                      src={urlFor(auth.profile)}
                    />
                    <p className="ml-4 font-light lg:text-lg">{auth.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;

  const blog = await sanityClient.fetch(blogPageQuery, { pageSlug });

  if (!blog) {
    return {
      props: null,
      notFound: true,
    };
  } else {
    return {
      props: {
        title: blog.title,
        mainImage: blog.mainImage,
        description: blog.description,
        date: blog.date,
        authors: blog.authors,
      },
    };
  }
};
