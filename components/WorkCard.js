import Link from "next/link";
import { urlFor } from "../lib/sanity/client";
import Image from "next/image";
import PortableText from "react-portable-text";
export default function WorkCard({ work }) {
  return (
    <Link
      className="w-[300px] md:w-[300px] xl:w-[370px] cursor"
      href={`work/${work.slug.current}`}
      key={work.id}
    >
      <div className="font-['Poppins'] ">
        <div className="group">
          <img
            className="w-full object-cover group-hover:scale-105 group-hover:mb-3 transition-transfrom duration-200 ease-in-out  z-100"
            src={urlFor(work.mainImage)}
          />
          <div className="p-4 border-x-2 border-b-2 border-[#3B558F] z-0 group-hover:scale-105 transition-transfrom duration-200 ease-in-out">
            <h2 className="font-anon font-bold text-xl xl:text-2xl">
              {work.title}
            </h2>
            <PortableText
              // Pass in block content straight from Sanity.io
              content={work.description}
              className="line-clamp-2 text-sm mb-2 font-thin xl:text-xl"
              // Optionally override marks, decorators, blocks, etc. in a flat
              // structure without doing any gymnastics
            />

            <div className="flex mb-4 ">
              {work.techs.map((tech) => (
                <img
                  className="w-6 h-6 xl:h-8 xl:w-8"
                  src={urlFor(tech.icon)}
                />
              ))}
            </div>

            <h3 className="text-sm font-light xl:text-xl">See more →</h3>
          </div>
        </div>
      </div>
    </Link>
  );
}
