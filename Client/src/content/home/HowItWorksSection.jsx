import {
  RiAi,
  RiArrowRightLongLine,
  RiBarChart2Fill,
  RiFileCloudLine,
  RiFileTextLine,
} from "@remixicon/react";
import Logo from "../../components/common/Logo";

export default function HowItWorksSection() {
  return (
    <section className="py-10">
      <div className=" mx-auto px-10">
        <div>
          <div className="text-5xl font-montserratExtraBold text-center text-white flex items-center justify-center gap-2 ">
            How <RiAi size={48} color="white" /> Resume Works
          </div>
          <p className="text-base font-montserratExtraLight text-white text-center mt-2">
            Our AI-powered platform makes it easy to optimize your resume for
            any job in just three simple steps.
          </p>
        </div>

        <div className="flex items-center gap-8 mt-12">
          {[
            {
              icon: <RiFileCloudLine size={40} color="white" />,
              heading: "Build or Upload",
              paragraph: "Create a new resume or upload your existing one.",
            },
            {
              icon: <RiFileTextLine size={40} color="white" />,
              heading: "Add Job Description",
              paragraph: "Paste the job description you are applying for.",
            },
            {
              icon: <RiBarChart2Fill size={40} color="white" />,
              heading: "Get ATS Score",
              paragraph: "Get your ATS score, match analysis and suggestions.",
            },
          ].map((item, index) => (
            <>
              <div
                key={index}
                className="p-6 border rounded-xl border-white relative flex items-end gap-7">
                <div className="text-xl font-bold bg-indigo-600 rounded-full w-7 h-7 flex items-center justify-center absolute top-4 left-4">
                  {index + 1}
                </div>
                <div>{item.icon}</div>
                <div>
                  <h3 className="font-montserratSemiBold text-xl text-white">
                    {item.heading}
                  </h3>
                  <p className="mt-2 text-sm font-montserratMedium text-white/60">
                    {item.paragraph}
                  </p>
                </div>
              </div>
              {index < 2 && <RiArrowRightLongLine color="white" size={40} />}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
