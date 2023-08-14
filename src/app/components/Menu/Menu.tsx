"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

export default function Menu() {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleClick = () => {
    setisMenuOpen(!isMenuOpen);
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
    console.log(searchValue)
  };

  const handleSearch = (searchInput) => {
    console.log(searchInput)
  }

  return (
    <nav className="bg-white dark:bg-neutral-950  fixed w-full z-20 top-0 left-0 border-b dark:border-gray-400">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Flowbite Logo" width={70} height={50} />
        </Link>
        <div className="flex md:order-2">
          <button
            onClick={handleClick}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Abrir Menu principal</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between ${
            isMenuOpen ? "" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col items-center text-center p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-transparent md:dark:bg-transparent dark:border-gray-700">
            <li>
              <Link href="#">
                <p
                  className="block py-2 pl-3 pr-4 text-zinc-50 bg-transparent rounded md:bg-transparent md:text-zinc-50 md:p-0 md:text-zinc-50"
                  aria-current="page"
                >
                  Catálogo
                </p>
              </Link>
            </li>
            <li>
              <a
                href="https://www.instagram.com/vinylrecordroom/"
                target="_blank"
              >
                <Image
                  src="https://openmoji.org/data/color/svg/E043.svg"
                  alt="Instagram"
                  width={25}
                  height={20}
                />
              </a>
            </li>
            <li className="flex items-center justify-center w-full">
              <input
                className="max-w-xs w-10/12 p-1 bg-transparent border-2 border-white rounded-lg text-zinc-50 placeholder-white"
                placeholder="Buscar..."
                type="search"
                value={searchValue}
                onChange={handleSearchChange}
              />
              <BsSearch onClick={handleSearch(searchValue)} className="fill-white ms-3 hover:fill-fuchsia-800 hover:cursor-pointer" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
