import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <section className="bg-black text-white">{children}</section>
      <Footer />
    </>
  );
}
