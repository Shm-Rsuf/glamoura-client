import Link from "next/link";
import Button from "./ui/Button";

const Header = () => {
  return (
    <header className="h-20 flex items-center">
      <nav className="container flex justify-between items-center">
      <Link href="/" className="left uppercase font-semibold">
        <span className="text-red">gla</span>
        <span className="text-purple">mo</span>
        <span className="text-blue">ura</span>
      </Link>
      <div className="middle">
        <ul className="flex justify-center items-center gap-4">
          <li className="cursor-pointer duration-300 f">Link 1</li>
          <li className="cursor-pointer duration-300 f">Link 2</li>
          <li className="cursor-pointer duration-300 f">Link 3</li>
        </ul>
      </div>
      <Button className="right">Sign in</Button>
    </nav>
    </header>
    
  );
};

export default Header;
