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
      <h1 className="max-w-[600px] text-navyBlue text-center font-tiktok text-[40px] font-semibold leading-[1.4] mb-10">
        Crush your next interview⚡<br></br> train smarter with AI on your side
      </h1>
      <div className="grid grid-cols-3 gap-x-8 mb-10 ">
        {" "}
        {data.map((item) => {
          return (
            <div className="bg-white p-4 flex flex-col gap-y-3 rounded-[16px] shadow-card border shadow-nav  ">
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
      <div className="px-6 py-2 rounded-[50px] bg-white shadow-custom font-tiktok text-lg font-semibold leading-[1.6] hover:bg-gray-50 transition-transform duration-200 ease-in-out text-navyBlue cursor-pointer" onClick={()=>navigate('/upload-resume')}>Start practicing now</div>
    </section>           
  );
};

export default Home;
