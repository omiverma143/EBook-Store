import { Link } from "react-router-dom";
import logo from "../../assets/e-book.svg";
import { useEffect, useState } from "react";
import { Search } from "../Sections/Search";

export const Header = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [showSearchInput, setShowSearchInput] = useState(false)

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  useEffect(() => {
    darkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    <header>
      <nav className="bg-white dark:bg-gray-900">
        <div className="border-b border-slate-200 dark:border-b dark:border-b-slate-800 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">
          <Link to="/" className="flex items-center">
            <img src={logo} className="mr-3 h-10" alt="E-Book Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              E-Book
            </span>
          </Link>
          <div className="flex items-center relative">
            <span
              onClick={handleDarkMode}
              className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-gear-wide-connected"
            ></span>
            <span onClick={()=>setShowSearchInput(!showSearchInput)} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search"></span>
            <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
              <span className="text-2xl bi bi-cart-fill relative">
                <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">
                  0
                </span>
              </span>
            </Link>
            <span className="bi bi-person-circle cursor-pointer text-2xl text-gray-700 dark:text-white"></span>
          </div>
        </div>
            { showSearchInput && (<Search setShowSearchInput={setShowSearchInput}/>)}
      </nav>
    </header>
  );
};
