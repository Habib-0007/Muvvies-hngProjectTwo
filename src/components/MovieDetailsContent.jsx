import MovieDetailsLeft from "./MovieDetailsLeft";
import MovieDetailsRight from "./MovieDetailsRight";

let MovieDetailsContent = ({ details, IMG_PATH }) => {
   return (
      <section className="w-full md:h-screen md:items-stretch flex justify-center items-center">
         <section className="flex md:items-stretch justify-start items-start flex-col md:flex-row gap-4 md:h-screen">
            <div className="w-full md:w-3/12">
               <MovieDetailsLeft details={details} IMG_PATH={IMG_PATH} />
            </div>
            <div className="w-full md:w-9/12">
               <MovieDetailsRight details={details} IMG_PATH={IMG_PATH} />
            </div>
         </section>
      </section>
   );
};

export default MovieDetailsContent;
