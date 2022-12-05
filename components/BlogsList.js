import Link from "next/link";
import BlogCard from "./BlogCard";

export default function WorksList({ blogs }) {
  return (
    <div>
      <h1 className="font-anon font-bold py-8 xl:py-12 text-center text-2xl lg:text-4xl">
        Blogs
      </h1>
      <div className="grid grid-cols-1 place-items-center gap-4 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <BlogCard blog={blog} key={blog.id} />
        ))}
      </div>
    </div>
  );
}
