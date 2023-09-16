let Footer = () => {
   return (
      <footer className="mt-10">
         <section className="flex justify-between items-center w-48 mx-auto mt-10">
            <a href="#">
               <img src="facebook.svg" alt="facebook" />
            </a>
            <a href="#">
               <img src="instagram.svg" alt="instagram" />
            </a>
            <a href="#">
               <img src="twitter.svg" alt="twitter" />
            </a>
            <a href="#">
               <img src="youtube.svg" alt="youtube" />
            </a>
         </section>
         <p className="text-center mt-5 text-xl">
            &copy; 2023 Muvvies by Habib Adebayo
         </p>
      </footer>
   );
};

export default Footer;
