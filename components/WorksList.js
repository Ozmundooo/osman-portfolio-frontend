import Link from "next/link";
import WorkCard from "./WorkCard";

export default function WorksList({ works }) {
  return (
    <div>
      <h1 className="font-anon font-bold py-8 xl:py-12 text-center text-2xl lg:text-4xl">
        Projects
      </h1>
      <div className="grid grid-cols-1 place-items-center gap-4 md:grid-cols-2 lg:grid-cols-3">
        {works.map((work) => (
          <WorkCard work={work} key={work.id} />
        ))}
      </div>
    </div>
  );
}
