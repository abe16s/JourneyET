import EachExperience from "./EachExperience"
export default function Experience(){
  return(
    <>
    <div class="flex items-center space-x-4 mb-12">
      <div class="flex-grow border border-gray-300"></div>
      <span class="text-black text-2xl font-extrabold font-sans">Experience</span>
      <div class="flex-grow border-t border-gray-300"></div>
    </div>
    <div className="flex items-center justify-around w-full h-full">
      <EachExperience/>
      <EachExperience/>
      <EachExperience/>
    </div>
    </>
  );
};