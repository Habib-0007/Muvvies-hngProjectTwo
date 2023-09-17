import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";
import NotFound from "./components/NotFound";

function App() {
   return (
      <main>
         <BrowserRouter>
            <Routes>
               <Route exact path="/" element={<Home />} />
               <Route path="/movies/:id" element={<MovieDetails />} />
               <Route path="*" element={<NotFound />} />
            </Routes>
         </BrowserRouter>
      </main>
   );
}

export default App;
