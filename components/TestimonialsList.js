import Link from "next/link";
import TestimonialCard from "./TestimonialCard";
export default function TestimonialsList({ testimonials }) {
  return (
    <div>
      <h1 className="font-anon font-bold py-8 xl:py-12 text-center text-2xl lg:text-4xl">
        Testimonials
      </h1>
      <div className="flex gap-8 lg:gap-14 overflow-y-hidden overflow-scroll mx-14 lg:mx-10 xl:mx-28 snap-mandatory snap-x  scrollbar-thin scrollbar-thumb-[#3B558F] scrollbar-track-blue-300 ">
        {testimonials.map((testimonial) => (
          <TestimonialCard testimonial={testimonial} key={testimonial.id} />
        ))}
      </div>
    </div>
  );
}
