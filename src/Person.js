import React from "react";
export default function Person({props}) {
   
  return (
    <div className='flex my-5'>
      <div>
        <img src={props.image} className="  w-20 h-20 rounded-full shadow align-middle border-none border-gray-100"  />
      </div>
      <div className="flex flex-col justify-center align-middle p-4">
        <div className=" text-slate-100"> {props.name}</div>
        <div className="font-normal text-lightgray text-slate-300"> {props.age} years old</div>
      </div>
    </div>
  );
}
