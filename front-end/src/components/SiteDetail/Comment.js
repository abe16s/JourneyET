export default function Review(){
  return(
  <div className='ml-10'>
    <h4 className="font-bold text-2xl">Share your experience</h4>
    <textarea rows={5} cols={60} placeholder="Enter your experience here..." className="border-2 border-black rounded-md p-2 block mt-4 max-w-full"/>
    <button className="bg-yellow-200 font-bold py-1 px-5 mt-3 rounded-xl w-max">Post</button>
  </div>
  );
};
