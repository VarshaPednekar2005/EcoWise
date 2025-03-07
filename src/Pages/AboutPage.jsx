import React from "react";
import Header from "../Components/Navbar";
import Footer from "../Components/Footer";
import AboutIntro from "../Components/About-Us/AboutIntro";
import Services from "../Components/About-Us/Services";
import darshan from "../assets/darshan.png";

function AboutPage() {
  return (
    <>
      <div>
        <Header />
        <AboutIntro />
        <Services />
        <div
          className="py-6 sm:py-8 lg:py-12  md:px-28"
          style={{ background: "#E2F5D2" }}
        >
          <div className="flex flex-col text-center w-full mb-20">
            <h1
              className="text-2xl text-center text-4xl my-text font-fira-sans font-semibold md:text-center mb-4"
              style={{ color: "black" }}
            >
              OUR TEAM
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-black px-4 ">
              Want to learn more about the team behind this website?connect with
              us on social media! We're always happy to hear from you and value
              your feedback.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-16">
            <div className="space-y-4">
              <div href="#" target="_blank" className="space-y-4">
                <img
                  src={darshan}
                  className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
                />

                <h3 className="font-medium text-black text-2xl text-center">
                  Divya Chaudhari
                </h3>
              </div>
            </div>

            <div className="space-y-4">
              <div href="#" target="_blank" className="space-y-4">
                <img
                  src={darshan}
                  alt="Your Alt Text"
                  className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
                />

                <h3 className="font-medium text-black text-2xl text-center">
                  Sachi Mali
                </h3>
              </div>

            </div>
            <div className="space-y-4">
              <div href="#" target="_blank" className="space-y-4">
                <img
                  src={darshan}
                  alt="Your Alt Text"
                  className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
                />

                <h3 className="font-medium text-black text-2xl text-center">
                  Varsha Pednekar
                </h3>
              </div>
            </div>
            <div className="space-y-4">
              <div href="#" target="_blank" className="space-y-4">
                <img
                  src={darshan}
                  alt="Your Alt Text"
                  className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
                />

                <h3 className="font-medium text-black text-2xl text-center">
                  Aditya Kargutkar
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default AboutPage;
