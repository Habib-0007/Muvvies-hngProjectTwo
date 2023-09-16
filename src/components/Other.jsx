let Other = ({ details }) => {
   let companies = details.production_companies;
   const IMG_PATH = "https://image.tmdb.org/t/p/original";
   return (
      <section className="flex justify-start items-center flex-col">
         <button className="py-2 px-4 bg-red-500 text-white flex justify-center items-center rounded-lg mx-auto">
            <img src="/Two Tickets.svg" alt="Two Tickets" />
            <p className="ml-3 text-xl">See Showtimes</p>
         </button>
         <button className="py-2 px-4 bg-red-100 text-black flex justify-start items-center rounded-lg border-2 border-red-500 mt-3 mx-auto">
            <img src="/List.svg" alt="List" />
            <p className="ml-3 text-md">More watch options</p>
         </button>
         <div className="mt-3 flex justify-start items-center flex-wrap">
            {companies.map((company) => (
               <p key={company.id} className="text-red-500">
                  <img
                     className={company.logo_path != null ? "block" : "hidden"}
                     src={`${IMG_PATH}${company.logo_path}`}
                     alt="Production companies"
                  />
               </p>
            ))}
         </div>
      </section>
   );
};

export default Other;
