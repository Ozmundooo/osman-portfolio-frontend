import Link from "next/link";
import { slide as Menu } from "react-burger-menu";

function Sidebar() {
  return (
    <>
      <Menu right>
        <Link href="/work" className="font-['Poppins'] font-bold text-lg">
          Work
        </Link>
        <Link href="/blog" className="font-['Poppins'] font-bold text-lg">
          Blog
        </Link>
        <Link href="/" className="font-['Poppins'] font-bold text-lg">
          Contact
        </Link>
      </Menu>
    </>
  );
}

export default Sidebar;
