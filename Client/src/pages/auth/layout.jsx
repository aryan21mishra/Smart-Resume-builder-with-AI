import React from "react";
import AuthImage from "../../assets/auth/kamran-abdullayev-nGYTbtuDjAI-unsplash.jpg";
import Image from "../../components/common/Image";
import Logo from "../../components/common/logo";
import { Typewriter } from "react-simple-typewriter";
import BackgroundGradientDesign from "../../components/common/BackgroundGradientDesign";

const AuthLayout = ({ children }) => {
  return (
    <div className="w-full h-screen bg-[#000000]">
      {/* Main section */}
      <div className="flex justify-between  h-full">
        <div className="w-3/5 h-full relative overflow-hidden max-md:hidden">
          {/* background image */}
          <div className="absolute -top-10 left-[225px] w-full pointer-events-none blur-xl ">
            <BackgroundGradientDesign />
          </div>

          <div className="w-full h-full absolute top-0 py-4 px-5 flex flex-col justify-items-normal  ">
            <div className="w-full">
              <Logo />
            </div>
            <div className="w-full h-full flex flex-col items-center justify-center ">
              <div className="w-full mt-10 gap-3 h-full flex flex-col  justify-center">
                <div className="flex  items-center gap-2">
                  <div className="w-8 h-0.5 bg-white" />
                  <p className="md:text-sm lg:text-base uppercase font-montserratExtraBold text-white">
                    AI-Powered Career Tool
                  </p>
                </div>
                <div className="text-white lg:text-4xl md:text-2xl font-montserratBold">
                  Build resumes that {""}
                  <span className="text-[#e8b86d]">
                    <Typewriter
                      words={["actually"]}
                      loop={0}
                      cursor
                      cursorStyle=" "
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={2000}
                    />
                  </span>{" "}
                  <div>get you hired.</div>
                </div>
                <div className="text-gray-300 text-sm font-montserratMedium lg:max-w-2/3 md:max-w-4/5">
                  <Typewriter
                    words={[
                      "Craft compelling, ATS-optimized resumes with real-time AI feedback. Get personalized suggestions, keyword analysis, and industry-specific insights in seconds.",
                    ]}
                    loop={1}
                    cursor
                    cursorStyle="|"
                    typeSpeed={40}
                    delaySpeed={1000}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* left section */}
        <div className="max-md:w-full h-full md:w-2/5 py-4 px-15">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
