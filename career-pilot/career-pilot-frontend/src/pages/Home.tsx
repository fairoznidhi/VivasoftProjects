import GradientButton from "@/components/button/GradientButton";
import { useNavigate } from "react-router-dom";

const data = [
  {
    name: "uploadResumeFrame",
    title: "Upload your resume in seconds",
    description:
      "Quickly upload your latest resume to let our AI understand your skills, experience, and career goals. It helps us personalize your job search journey from the very start ",
  },
  {
    name: "jobDiscoverFrame",
    title: "Discover jobs that fit you best",
    description:
      "Our AI analyzes your resume to hand-pick job opportunities that match your profile. Save time and focus on roles where you're most likely to succeed",
  },
  {
    name: "jobInterviewFrame",
    title: "Practice interviews for your dream job",
    description:
      "Get ready with AI-driven mock interviews based on the jobs you’re targeting. Receive instant feedback and boost your confidence before the real thing",
  },
];
const Home = () => {
    const navigate=useNavigate();
  return (
    <section className=" flex flex-col justify-center items-center pb-[233px]">
      <h1 className="max-w-[600px] text-navyBlue text-center font-tiktok  text-2xl lg:text-[40px] font-semibold leading-[1.4] mx-2 mb-10">
        Crush your next interview⚡<br></br> train smarter with AI on your side
      </h1>
      <div className="grid  grid-cols-1 md:grid-cols-3 lg:gap-x-8 mb-10">
        {" "}
        {data.map((item) => {
          return (
            <div className="bg-white m-2 mx-4 lg:m-0 p-4 flex flex-col gap-y-3 rounded-[16px] shadow-card border shadow-nav  ">
              <img src={`/images/home/${item.name}.svg`} className="mb-1"></img>
              <h1 className="text-navyBlue font-tiktok text-lg font-semibold leading-[160%]">
                {item.title}
              </h1>
              <p className="text-neutral-700 text-base font-tiktok font-normal leading-[1.6]">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
      <GradientButton text="Start practicing now" onClick={()=>navigate('/upload-resume')}/>
    </section>           
  );
};

export default Home;
