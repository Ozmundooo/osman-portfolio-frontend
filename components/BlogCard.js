import Link from "next/link";
import { urlFor } from "../lib/sanity/client";
import Image from "next/image";
import PortableText from "react-portable-text";
export default function WorkCard({ blog }) {
  return (
    <Link
      className="w-[300px] md:w-[300px] xl:w-[370px] cursor"
      href={`blog/${blog.slug.current}`}
      key={blog.id}
    >
      <div className="font-['Poppins'] ">
        <div className="group">
          <img
            className="w-full object-cover group-hover:scale-105 group-hover:mb-3 transition-transfrom duration-200 ease-in-out  z-100"
            src={urlFor(blog.mainImage)}
          />
          <div className="p-4 border-x-2 border-b-2 border-[#3B558F] z-0 group-hover:scale-105 transition-transfrom duration-200 ease-in-out">
            <h2 className="font-anon font-bold text-xl xl:text-2xl">
              {blog.title}
            </h2>
            <PortableText
              // Pass in block content straight from Sanity.io
              content={blog.description}
              className="line-clamp-2 text-sm mb-2 font-thin xl:text-xl"
              // Optionally override marks, decorators, blocks, etc. in a flat
              // structure without doing any gymnastics
            />

            <h3 className="text-sm font-light xl:text-xl">Read more →</h3>
          </div>
        </div>
      </div>
    </Link>
  );
}
