import React from "react";
import { FaStar, FaYoutube } from "react-icons/fa";
import HeroImg from "../../assets/dora-hero.png";
import HeroImg2 from "../../assets/dora.png";
import HeroBottom from "./HeroBottom";
import { IoClose } from "react-icons/io5";

const Hero = () => {
  const [isPlay, setIsPlay] = React.useState(false);
  const handlePlay = () => {
    setIsPlay(!isPlay);
  };
  return (
    <>
      <div className=" min-h-[700px] center relative ">
        <div className="container mt-12 sm:mt-0 pb-20 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0 relative z-10">
            {/* text content */}
            <div className="space-y-3 md:space-y-7 flex flex-col justify-center text-center sm:text-left px-10 sm:px-0  ">
              <div data-aos="fade-up">
                <h1 className="text-4xl sm:text-4xl md:text-6xl font-bold">
                  Watch Now in
                </h1>
                <h1 className="text-6xl font-bold text-primary">3D</h1>
              </div>
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-gray-500 text-sm font-semibold"
              >
                The first full story in the Doraemon series was published in
                January 1970
              </p>
              <div
                data-aos="fade-up"
                data-aos-delay="400"
                className="mx-auto sm:mx-0"
              >
                <button
                  onClick={handlePlay}
                  className="primary-btn center gap-2"
                >
                  Play on
                  <span>
                    <FaYoutube className="text-2xl" />
                  </span>
                </button>
              </div>
            </div>

            {/* image section*/}
            <div data-aos="zoom-in" className="relative">
              <img
                src={HeroImg}
                alt=""
                className="w-[180px] sm:w-[240px] lg:w-[340px] mx-auto relative z-50"
              />
              <div className="absloute z-0 bottom-0 left-0 w-[260px] mx-auto h-[20px] blur-2xl bg-black"></div>
            </div>

            {/* review section*/}
            <div
              data-aos="slide-left"
              className="sm:pl-16 md:pl-24 flex justify-center sm:justify-end "
            >
              <div className="flex items-center justify-end">
                <div className="space-y-4">
                  <img
                    src={HeroImg2}
                    alt=""
                    className="w-full h-[100px] object-cover rounded-xl shadow-md hover:scale-110 duration-200"
                  />
                  <p className="text-sm text-gray-400 flex items-center gap-2">
                    4.7{" "}
                    <span>
                      <FaStar className="text-primary" />
                    </span>
                  </p>
                  <p className="text-sm text-gray-400">
                    Bandai Figuartszero Doraemont
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* bottom section */}
        <HeroBottom />
      </div>
      {/* Video Play section */}
      {isPlay && (
        <div className="absolute z-[99999] top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm">
          <div className="center h-full">
            <div className="bg-white m-3 p-5 rounded-lg shadow-md w-full sm:w-[500px]">
              <div className="pb-3 flex justify-between">
                <h1 className="sm:text-xl font-bold ">
                  Subscribe our TCJ youtube channel
                </h1>
                <IoClose
                  className="text-3xl cursor-pointer hover:scale-110 duration-200"
                  onClick={handlePlay}
                />
              </div>
              <iframe
                width="100%"
                height="260"
                src="https://www.youtube.com/embed/i9e9Xz4OHig?si=rZ_k0qUIcjUIPUH_"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;