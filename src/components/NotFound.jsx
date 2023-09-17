import { Link } from "react-router-dom";

let NotFound = () => {
   return (
      <div
         className="w-full h-full flex justify-center items center flex-col
      p-5"
      >
         <h1 className="text-2xl ">Oooooopppppssssss..... 🤦‍♀️</h1>
         <strong className="block text-6xl text-red-500 my-1">404 Page</strong>
         <p className="text-xl">
            Go to
            <Link to="/">
               <a className="text-red-500 underline"> homepage </a>
            </Link>
         </p>
      </div>
   );
};

export default NotFound;
