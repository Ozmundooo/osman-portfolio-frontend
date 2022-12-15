import React from "react";

export default function ContactForm() {
  return (
    <div className="lg:justify-center lg:align-middle lg:flex ">
      <form
        className="flex flex-col p-10 align-middle lg:w-1/2 text-white "
        action="https://formsubmit.co/3c8f384c1e2a90d32c6b3162ed57a095 "
        method="POST"
      >
        <h2 className="font-anon font-bold py-8 xl:py-12 text-center text-2xl lg:text-4xl">
          Contact
        </h2>
        <label className="font-anon  lg:text-lg">Name:</label>
        <input
          className=" font-['Poppins'] text-black border border-white p-1.5"
          type="text"
          name="name"
          required
        />
        <br></br>
        <label className="font-anon  lg:text-lg ">Email:</label>
        <input
          className=" font-['Poppins'] text-black border border-white p-1.5"
          type="email mx-auto"
          name="email"
          required
        />
        <br></br>
        <label className="font-anon  lg:text-lg">Message:</label>
        <textarea
          name="message"
          arows="5"
          className=" font-['Poppins'] text-black  border border-white p-1.5 "
        />
        <br></br>
        <button
          className="my-4 p-5 bg-white text-center rounded-sm  font-anon  text-black font-bold text-2xl hover:shadow-2xl border border-black w-1/2  mx-auto"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
}
