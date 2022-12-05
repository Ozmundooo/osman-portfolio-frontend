import Link from "next/link";
import { urlFor } from "../lib/sanity/client";
import Image from "next/image";
import PortableText from "react-portable-text";
export default function TestimonialCard({ testimonial }) {
  return (
    <div className="font-['Poppins'] snap-center">
      <div className="p-4 border border-[#3B558F] w-[300px] lg:w-[400px] xl:w-[450px] ">
        <PortableText
          // Pass in block content straight from Sanity.io
          content={testimonial.testimonial}
          className="text-sm font-thin xl:text-xl text-center mb-8"
          // Optionally override marks, decorators, blocks, etc. in a flat
          // structure without doing any gymnastics
        />
        <div className="flex justify-center place-items-center">
          <img
            className="w-8 h-8 lg:w-14 lg:h-14 rounded-full"
            src={urlFor(testimonial.profilePic)}
          />
          <h2 className="font-anon font-bold text-lg xl:text-2xl ml-3">
            {testimonial.name}
          </h2>
        </div>
      </div>
    </div>
  );
}
