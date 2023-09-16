let HeaderMovieContent = () => {
   return (
      <div className="text-white px-5 py-20 text-center md:text-left flex justify-center mx-auto md:mx-0 md:me-auto md:justify-start items-center w-50">
         <div>
            <h1 className="text-7xl font-extrabold">The Super Mario Bros</h1>
            <div className="flex my-5">
               <div className="flex justify-center md:justify-start items-center">
                  <img src="/imdb.svg" alt="imdb-icon" />
                  <p className="ml-3 text-lg"> 7.1/10 </p>
               </div>
               <div className="flex justify-start items-center ml-6">
                  <img src="/tomato.svg" alt="tomato-icon" />
                  <p className="ml-3 text-lg"> 59% </p>
               </div>
            </div>
            <p className="text-2xl">
               While working underground to fix a water main, Brooklyn
               plumbers—and brothers—Mario and Luigi are transported down a
               mysterious pipe and wander into a magical new world. But when the
               brothers are separated, Mario embarks on an epic quest to find
               Luigi
            </p>
            <button className="px-4 py-2 bg-red-500 text-white flex justify-center items-center mt-3 mx-auto md:mx-0">
               <img src="Play.svg" alt="play" />
               <span className="pl-1">Watch trailer</span>
            </button>
         </div>
      </div>
   );
};

export default HeaderMovieContent;
