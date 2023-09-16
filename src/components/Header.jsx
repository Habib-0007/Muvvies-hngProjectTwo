import { useState } from "react";
import HeaderMovieContent from "./HeaderMovieContent";

let Header = ({ searchText, setText }) => {
   return (
      <header className="bg-d-image w-full bg-cover bg-no-repeat text-white">
         <nav className="p-5 flex justify-between items-center flex-wrap">
            <div>
               <img src="/Logo.svg" alt="movie-logo" />
            </div>

            <div className="flex justify-center items-center">
               <button className="bg-transparent-text-xl text-bold px-3 py-2">
                  Sign In
               </button>
               <img src="/Menu.svg" alt="menu-bar" />
            </div>
         </nav>
         <div className="relative mx-3">
            <input
               className="bg-transparent w-full p-2 text-xl border-2 border-white rounded-lg outline-none placeholder:text-white"
               type="text"
               placeholder="What do you want to watch?"
               value={searchText}
               onChange={(event) => {
                  setText();
               }}
            />
            <img
               src="/Search.svg"
               alt="search-icon"
               className="absolute top-4 right-3 text-xl"
            />
         </div>

         <HeaderMovieContent />
      </header>
   );
};

export default Header;
