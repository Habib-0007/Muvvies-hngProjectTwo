import { Link } from "react-router-dom";

let SearchCard = ({ eachSearchres, IMG_PATH }) => {
   return (
    
         <Link to={`/movies/${eachSearchres.id}`}>
            <div
               className="flex justify-center items-start flex-col"
               data-testid="movie-card"
            >
               <div className="w-full h-full relative">
                  <img
                     src={IMG_PATH + eachSearchres.poster_path}
                     alt={eachSearchres.original_title}
                     className="object-cover w-auto h-auto"
                     data-testid="movie-poster"
                  />
                  <img
                     src="Favorite.svg"
                     alt="Favorite"
                     className="absolute right-3 top-3"
                  />
               </div>
               <h2
                  className="pt-3 text-lg md:text-2xl font-bold"
                  data-testid="movie-title"
               >
                  {eachSearchres.original_title}
               </h2>
               <div className="my-1 flex justify-start items-center">
                  <img src="imdb.svg" alt="imdb" />
                  <p className="px-2"> {`${eachSearchres.vote_average}/10`} </p>
               </div>
               <p
                  data-testid="movie-release-date"
                  className="pt-1 text-lg md:text-xl"
               >
                  {eachSearchres.release_date}
               </p>
            </div>
         </Link>
      
   );
};
export default SearchCard;
