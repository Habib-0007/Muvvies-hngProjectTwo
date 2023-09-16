let Overview = ({ details }) => {
   let companies = details.production_companies;
   let countries = details.production_countries;
   return (
      <section>
         <p data-testid="movie-overview"> {details.overview} </p>
         <div className="flex justify-start items-start flex-col">
            <div className="mt-3 flex justify-start items-center flex-wrap">
               <p>Production Companies:</p>
               {companies.map((company) => (
                  <p key={company.id} className="text-red-500">
                     &nbsp; {company.name},
                  </p>
               ))}
            </div>
            <div className="mt-3 flex justify-start items-center flex-wrap">
               <p>Production Countries:</p>
               {countries.map((country) => (
                  <p key={country.iso_3166_1} className="text-red-500">
                     &nbsp; {country.name},
                  </p>
               ))}
            </div>
         </div>
      </section>
   );
};

export default Overview;
