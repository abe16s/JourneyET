import React from "react";
export default function Tabs({tabname,section,padding}){
  return(
    <>
    <div className={`flex items-center space-x-4 mb-12 ${padding ? "pt-10":"" } `}>
      <div class="flex-grow border border-gray-300"></div>
      <span class="text-black text-2xl font-extrabold font-sans">{tabname}</span>
      <div class="flex-grow border-t border-gray-300"></div>
    </div>
    <div className={`overflow-auto flex items-center gap-3  justify-around w-full h-full mb-10  ${padding ? 'pb-10':''}`}>
      {section}
    </div>
    </>
  );
}