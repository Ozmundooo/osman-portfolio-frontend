import React from "react";
import { sanityClient, urlFor } from "../../lib/sanity/client";
import { workPageQuery } from "../../lib/sanity/workPageQuery";
import PortableText from "react-portable-text";
import ContactForm from "../../components/ContactForm";
import Head from "next/head";
export default function Work({
  title,
  mainImage,
  description,
  techs,
  website,
  problem,
  solution,
  date,
  images,
}) {
  const heroBG = urlFor(mainImage);
  return (
    <>
      <Head>
        <title>Osman Ali: Web Development</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section>
        <div>
          <div class="relative w-screen ">
            <img src={heroBG} className="opacity-50 " />
            <img
              class="absolute w-1/4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              src="https://cdn.sanity.io/images/f5pxjqkf/production/1dd5df5b8735e1654a62c9cb5bb00d1f405571f3-398x79.png"
            />
          </div>
        </div>

        <div className="font-['Poppins'] px-5 lg:mx-10 lg:mt-10">
          <div className="lg:flex lg:flex-row-reverse ">
            <div className="lg:w-1/2">
              <h2 className="font-anon text-2xl my-2  lg:text-3xl font-bold">
                {title}
              </h2>
              <PortableText
                // Pass in block content straight from Sanity.io
                content={description}
                className="text-sm mb-4  lg:text-xl font-light lg:w-11/12"
              />
            </div>

            <div className="lg:w-1/2">
              <h2 className="font-anon text-xl lg:text-2xl mt-2 font-bold">
                Website
              </h2>
              <p className="font-light lg:text-lg">{website}</p>
              <h2 className="font-anon text-xl lg:text-2xl mt-2 font-bold">
                Tech used
              </h2>
              <div className="flex mb-4 ">
                {techs.map((tech) => (
                  <img
                    className="w-10 h-10 xl:h-10 xl:w-10"
                    src={urlFor(tech.icon)}
                  />
                ))}
              </div>
              <h2 className="font-anon text-xl lg:text-2xl mt-2 font-bold">
                Date
              </h2>
              <p className="font-light lg:text-lg">{date}</p>
            </div>
          </div>
          <div className="flex gap-4 lg:gap-8 overflow-y-hidden overflow-scroll  snap-mandatory snap-x  scrollbar-thin scrollbar-thumb-[#3B558F] scrollbar-track-blue-300 mt-6">
            {images.map((image) => (
              <img className="snap-start lg:h-[400px]" src={urlFor(image)} />
            ))}
          </div>
          <div className="lg:flex lg:flex-row lg:mt-4">
            <div className="lg:w-1/2">
              <h2 className="font-anon text-2xl my-2 font-bold">Problem</h2>
              <PortableText
                content={problem}
                className="text-sm mb-4  lg:text-xl font-light lg:w-11/12"
              />
            </div>
            <div className="lg:w-1/2 ">
              <h2 className="font-anon text-2xl my-2 font-bold">Solution</h2>
              <PortableText
                content={solution}
                className="text-sm mb-4  lg:text-xl font-light lg:w-11/12"
              />
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

  const work = await sanityClient.fetch(workPageQuery, { pageSlug });

  if (!work) {
    return {
      props: null,
      notFound: true,
    };
  } else {
    return {
      props: {
        title: work.title,
        mainImage: work.mainImage,
        description: work.description,
        techs: work.techs,
        website: work.website,
        problem: work.problem,
        solution: work.solution,
        date: work.date,
        images: work.images,
      },
    };
  }
};
