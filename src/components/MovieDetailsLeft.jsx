import { useState } from "react";

let MovieDetailsLeft = ({ details, IMG_PATH }) => {
   const [nav, setNav] = useState("hidden");

   return (
      <section className="flex justify-between items-start flex-col box-shad h-auto w-full">
         <h1 className="text-2xl p-5 flex justify-between items-center w-full">
            <img src="/Logo2.svg" alt="Logo" />
            <img
               src="/Menu.svg"
               alt="Menu"
               className="block md:hidden"
               onClick={() => {
                  nav == "hidden" ? setNav("block") : setNav("hidden");
               }}
            />
         </h1>
         <div className={`${nav} md:block`}>
            <button className="w-full outline-none bg-transparent text-left flex justify-stretch items-center text-2xl p-5 pr-5 mt-8 hover:text-red-500 hover:border-r-4 hover:border-r-red-500">
               <img src="/Home.svg" alt="home-icon" className="mr-3" />
               Home
            </button>
            <button className="w-full outline-none bg-transparent text-center flex justify-stretch items-center text-2xl p-5 pr-5 mt-8 hover:text-red-500 hover:border-r-4 hover:border-r-red-500">
               <img
                  src="/Movie Projector.svg"
                  alt="movie-icon"
                  className="mr-3"
               />
               Movies
            </button>
            <button className="w-full outline-none bg-transparent text-center flex justify-stretch items-center text-2xl p-5 pr-5 mt-8 hover:text-red-500 hover:border-r-4 hover:border-r-red-500">
               <img src="/TV Show.svg" alt="Tv-show-icon" className="mr-3" />
               TV Series
            </button>
            <button className="w-full outline-none bg-transparent text-center flex justify-stretch items-center text-2xl p-5 pr-5 mt-8 hover:text-red-500 hover:border-r-4 hover:border-r-red-500">
               <img src="/Calendar.svg" alt="Tickets-icon" className="mr-3" />
               Upcoming
            </button>
            <div className="bg-red-100 pt-10 pb-3 px-4 mt-20 mx-3 rounded-2xl">
               <h1 className="text-2xl text-left">
                  Play movie quizzes and earn free tickets
               </h1>
               <p className="mt-3 text-xl text-left">
                  50K people are playing now
               </p>
               <button className="bg-red-200 px-3 py-1 rounded-xl block mx-auto mt-4 text-red-400 text-xl font-bold">
                  Start Playing
               </button>
            </div>
            <button className="w-full outline-none bg-transparent text-center flex justify-stretch items-center text-2xl p-5 pr-5 mt-8 hover:text-red-500 hover:border-r-4 hover:border-r-red-500">
               <img src="/Logout.svg" alt="Logout" className="mr-3" />
               Log Out
            </button>
         </div>
      </section>
   );
};

export default MovieDetailsLeft;
