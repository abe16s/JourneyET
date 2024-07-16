"use client"

import { useState } from 'react';
export default function Review(){
  const [reviewStar, setReviewStar] = useState(0);
  return(
  <div className='ml-10'>
    <h4 className="font-bold text-2xl">Leave a review</h4>
    <div className="flex gap-2 my-5">
        <i className={`fa-star ${reviewStar >= 1 ? 'fa-solid': "fa-regular"}`} onClick={() => {setReviewStar(1)}}></i>
        <i className={`fa-star ${reviewStar >= 2 ? 'fa-solid': "fa-regular"}`} onClick={() => {setReviewStar(2)}}></i>
        <i className={`fa-star ${reviewStar >= 3 ? 'fa-solid': "fa-regular"}`} onClick={() => {setReviewStar(3)}}></i>
        <i className={`fa-star ${reviewStar >= 4 ? 'fa-solid': "fa-regular"}`} onClick={() => {setReviewStar(4)}}></i>
        <i className={`fa-star ${reviewStar >= 5 ? 'fa-solid': "fa-regular"}`} onClick={() => {setReviewStar(5)}}></i>
    </div>
    <textarea rows={5} cols={60} placeholder="Enter your comments here..." className="border-2 border-black rounded-md p-2 block"/>
    <button className="bg-yellow-200 font-bold py-1 px-5 mt-3 rounded-xl w-max">Post</button>
  </div>
  );
};
