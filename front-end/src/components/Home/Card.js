"use client"
import { useRouter } from "next/navigation";
import "./section.css";

const Card = ({ title, description, price, image }) => {
    const router = useRouter();

    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white flex flex-col pb-6 justify-between">
        <img className="w-full" src={image} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
          {/* <p className="text-gray-900 font-bold">{price}</p> */}
        </div>
        <div className="text-center"><button className="gold-bg font-bold py-1 px-4 rounded-2xl w-max" onClick={() => router.push("/sitedetail")}>Explore</button></div>
      </div>
    );
  };
  
  export default Card;
  