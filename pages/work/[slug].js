import React from "react";
import { sanityClient, urlFor } from "../../lib/sanity/client";
import { workPageQuery } from "../../lib/sanity/workPageQuery";
import PortableText from "react-portable-text";
import ContactForm from "../../components/ContactForm";
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
          <div className="lg:flex lg:flex-row-reverse ">
            <div className="lg:w-1/2">
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
                // Pass in block content straight from Sanity.io
                content={problem}
                className="text-sm mb-4  lg:text-xl font-light lg:w-11/12"
                // Optionally override marks, decorators, blocks, etc. in a flat
                // structure without doing any gymnastics
              />
            </div>
            <div className="lg:w-1/2 ">
              <h2 className="font-anon text-2xl my-2 font-bold">Solution</h2>
              <PortableText
                // Pass in block content straight from Sanity.io
                content={solution}
                className="text-sm mb-4  lg:text-xl font-light lg:w-11/12"
                // Optionally override marks, decorators, blocks, etc. in a flat
                // structure without doing any gymnastics
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
