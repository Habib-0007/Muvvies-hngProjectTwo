import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Loader from "./Loader";
import MovieDetailsContent from "./MovieDetailsContent";

const MovieDetails = () => {
   const { id } = useParams();

   const IMG_PATH = "https://image.tmdb.org/t/p/original";

   const {
      data: details,
      error,
      isPending,
   } = useFetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=3fd2be6f0c70a2a598f084ddfb75487c&language=en-US`
   );

   return (
      <div
         className={`${
            isPending
               ? "flex justify-center items-center w-screen h-screen"
               : "block w-full h-full"
         }`}
      >
         {isPending && (
            <div>
               <Loader />
            </div>
         )}
         {error && <div> {error} </div>}
         {details && <MovieDetailsContent details={details} IMG_PATH={IMG_PATH} />}
      </div>
   );
};

export default MovieDetails;
