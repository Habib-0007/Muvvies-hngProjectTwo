import Overview from "./Overview";
import Other from "./Other";
import { useState } from "react";

let MovieDetailsRight = ({ details, IMG_PATH }) => {
   let [videoKey, setVideoKey] = useState(null);
   fetch(
      `https://api.themoviedb.org/3/movie/${details.id}/videos?api_key=3fd2be6f0c70a2a598f084ddfb75487c`
   )
      .then((res) => res.json())
      .then((res) => {
         setVideoKey(res.results[0].key);
      });

   let videoURL = "http://www.youtube.com/embed/" + videoKey;

   let genres = details.genres;
   return (
      <section className="p-5">
         <div className="w-auto h-auto mx-auto">
            <iframe
               className="object-cover w-full h-96 rounded-xl"
               src={videoURL}
               title="movie trailer"
               frameBorder="0"
               
               allowFullScreen
            ></iframe>

            <div className="flex justify-between items-center flex-col md:flex-row mt-3 gap-5">
               <div className="flex justify-start items-center gap-2 flex-wrap w-full md:w-8/12">
                  <h1 className="text-2xl" data-testid="movie-title">
                     {details.original_title}
                  </h1>
                  <p className="flex justify-center items-center text-center my-auto bg-black w-2 h-2 rounded-full"></p>
                  <p className="py-3 text-xl" data-testid="movie-release-date">
                     {new Date(details.release_date).toISOString()}
                  </p>
                  <p className="flex justify-center items-center text-center my-auto bg-black w-2 h-2 rounded-full"></p>
                  <p className="text-xl">{details.original_language}</p>
                  <p className="flex justify-center items-center text-center my-auto bg-black w-2 h-2 rounded-full"></p>
                  <p className="text-xl" data-testid="movie-runtime">
                     {details.runtime} min
                  </p>
                  {genres.map((genre) => (
                     <div key={genre.id}>
                        <h1 className="text-red-500 border-2 border-red-500 px-5 py-2 rounded-3xl">
                           {genre.name}
                        </h1>
                     </div>
                  ))}
               </div>
               <div className="flex justify-start md:justify-center items-center gap-2 w-full md:w-4/12">
                  <img src="/Favorite.svg" alt="Favorite" />
                  <p>{details.vote_average}</p>|
                  <p>{`${details.vote_count}K`}</p>
               </div>
            </div>
         </div>
         <section className="flex justify-between items-start flex-col md:flex-row">
            <div className="md:w-8/12 w-full flex justify-start items-center flex-col mt-5">
               <Overview details={details} />
            </div>
            <div className="md:w-4/12 w-full flex justify-start items-center flex-col mx-auto text-center mt-5">
               <Other details={details} />
            </div>
         </section>
      </section>
   );
};

export default MovieDetailsRight;
