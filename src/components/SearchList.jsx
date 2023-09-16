import SearchCard from "./SearchCard";
import Footer from "./Footer";

let SearchList = ({ searchres, searchText, setText, title, handlePage }) => {
   const IMG_PATH = "https://image.tmdb.org/t/p/original";

   return (
      <div className="p-5 md:p-10">
         <div className="flex justify-between items-center">
            <h1 className="text-xl md:text-3xl py-5 font-extrabold">{title}</h1>
            <button
               className="text-xl md:text-3xl py-5 font-bold"
               onClick={() => handlePage()}
            >
               See More
            </button>
         </div>
         <div className="grid grid-cols-2 md:grid-cols-3 place-content-center content-center gap-x-5 md:gap-x-10 gap-y-10">
            {searchres.map((eachSearchres) => (
               <div key={eachSearchres.id}>
                  <SearchCard
                     eachSearchres={eachSearchres}
                     IMG_PATH={IMG_PATH}
                  />
               </div>
            ))}
         </div>
         <Footer />
      </div>
   );
};

export default SearchList;
