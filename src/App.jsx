import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
   return (
      <main>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/movies/:id" element={<MovieDetails />} />
            </Routes>
         </BrowserRouter>
      </main>
   );
}

export default App;
