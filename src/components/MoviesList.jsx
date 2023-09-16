import Card from "./Card";
import SearchCard from "./SearchCard";
import Header from "./Header";
//import Footer from "./Footer";

let MoviesList = ({ data, title, searchText, setText }) => {
   const IMG_PATH = "https://image.tmdb.org/t/p/original";
   data = data.slice(0, 10);

   return (
      <section>
         <Header searchText={searchText} setText={setText} />
         <div className="p-5 md:p-10">
            <div className="flex justify-between items-center">
               <h1 className="text-xl md:text-3xl py-5 font-extrabold">
                  {title}
               </h1>
               <button className="text-xl md:text-3xl py-5 font-bold">
                  See More
               </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 place-content-center content-center gap-x-5 md:gap-x-10 gap-y-10">
               {data.map((eachData) => (
                 <div key={eachData.id}>
                 
                  <Card eachData={eachData} IMG_PATH={IMG_PATH} />
                 </div>
                 
               ))}
            </div>
            {/* <Footer /> */}
         </div>
      </section>
   );
};

export default MoviesList;
