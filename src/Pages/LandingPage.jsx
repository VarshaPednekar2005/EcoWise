import React, { useState } from "react";
import Banner from "../Components/Banner";
import StatsView from "../Components/StatsView";
import Footer from "../Components/Footer";
import Products from "../Components/Products";
import Blogs from "../Components/Blogs";
import Navbar from "../Components/Navbar";
import FAQ from "../Components/FAQ";
import Testimonial from "../Components/Testimonial";
import Preloader from "../Components/Preloader"; 

function LandingPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div>
      {/* {!isLoaded && <Preloader setIsLoaded={setIsLoaded} />} */}
     
      {(
        <>
          <Navbar />
          <Banner />
          <StatsView />
          <Products />
          <Blogs />
          {/* <Testimonial/> */}
          {/* <FAQ /> */}
          <Footer />
        </>
      )}
    </div>
  );
}

export default LandingPage;
