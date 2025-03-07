import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/logo.jpg'

export default function AboutIntro() {
  return (
    <>
      <section className="relative bg-[url(https://plus.unsplash.com/premium_photo-1727730047398-49766e915c1d?q=80&w=1512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat h-50">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-1 h-3/6">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 mx-auto py-">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full ">
              <img className="rounded-full w-full h-full mix-blend-darken " src={Logo} alt="" srcset="" />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl text-gray-300 ">Who are we?</h2>

              <p className="mt-4 text-gray-200 md:text-justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium suscipit distinctio laborum fugit? Tempore illo facere minima magnam blanditiis, vitae asperiores.
                <br /> Vero eius repellendus minima soluta earum quisquam voluptatem quas eum! Unde inventore, commodi cum nobis reiciendis, explicabo maiores sit vitae voluptatum fuga ex nemo! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                <br /> Corrupti dolore aspernatur quos facere laborum perferendis accusamus aperiam aliquam repellendus obcaecati. Ratione, repellendus consequuntur. 
              </p>

              <Link
                to="/signup"
                className="mt-8 inline-block rounded bg-blue-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
