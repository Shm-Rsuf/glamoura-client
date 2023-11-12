import Link from "next/link";

const Header = () => {
  return (
    <header className="h-20 flex items-center">
      <nav className="container flex justify-between items-center">
      <Link href="/jh" className="left uppercase font-semibold">
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
      <button className="right">Sign in</button>
    </nav>
    </header>
    
  );
};

export default Header;
