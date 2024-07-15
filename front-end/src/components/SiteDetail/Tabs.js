import React from "react";
export default function Tabs({tabname,section}){
  return(
    <>
    <div class="flex items-center space-x-4 mb-12">
      <div class="flex-grow border border-gray-300"></div>
      <span class="text-black text-2xl font-extrabold font-sans">{tabname}</span>
      <div class="flex-grow border-t border-gray-300"></div>
    </div>
    <div className="flex items-center justify-around w-full h-full mb-10">
      {section}
    </div>
    </>
  );
}