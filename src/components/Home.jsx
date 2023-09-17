import useFetch from "./useFetch";
import MoviesList from "./MoviesList";
import SearchList from "./SearchList";
import { useState } from "react";

let Home = () => {
   const [searchText, setSearchText] = useState("");

   let setText = () => {
      setSearchText(event.target.value);
   };

   const { data, isPending, error } = useFetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1"
   );

   const {
      data: search,
      isPending: isLoading,
      error: err,
   } = useFetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchText}&include_adult=false&language=en-US&page=1&api_key=3fd2be6f0c70a2a598f084ddfb75487c`
   );

   return (
      <div>
         <div>
            {isPending && <div>Loading...</div>}
            {data && (
               <MoviesList
                  data={data.results}
                  title="Featured Movie"
                  searchText={searchText}
                  setText={setText}
               />
            )}
            {error && <div> {error} </div>}
         </div>
         <div>
            {isLoading && <div> Loading... </div>}
            {search && (
               <SearchList
                  searchres={search.results}
                  title="Search results"
                  searchText={searchText}
                  setText={setText}
               />
            )}
            {err && <div> {err} </div>}
         </div>
      </div>
   );
};

export default Home;
