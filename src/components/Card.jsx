import { Link } from "react-router-dom";
import { useState } from "react";

let Card = ({ eachData, IMG_PATH }) => {
   let [favorColor, setFavorColor] = useState("");
   let handleFavorite = () => {
      if (setFavorColor == "") {
         setFavorColor("bg-red-500");
      } else {
         setFavorColor("");
      }
   };
   return (
      <Link to={`/movies/${eachData.id}`}>
         <div
            className="flex justify-center items-start flex-col"
            data-testid="movie-card"
         >
            <div className="w-full h-full relative">
               <img
                  src={IMG_PATH + eachData.poster_path}
                  alt={eachData.original_title}
                  className="object-cover w-auto h-auto"
                  data-testid="movie-poster"
               />
               <img
                  src="Favorite.svg"
                  alt="Favorite"
                  className={`absolute right-3 top-3 ${favorColor} rounded-full p-2`}
                  onClick={handleFavorite}
               />
            </div>
            <h2
               className="pt-3 text-lg md:text-2xl font-bold"
               data-testid="movie-title"
            >
               {eachData.original_title}
            </h2>
            <div className="my-1 flex justify-start items-center">
               <img src="imdb.svg" alt="imdb" />
               <p className="px-2"> {`${eachData.vote_average}/10`} </p>
            </div>
            <p
               data-testid="movie-release-date"
               className="pt-1 text-lg md:text-xl"
            >
               {eachData.release_date}
            </p>
         </div>
      </Link> 
   );
};

export default Card;
