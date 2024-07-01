import React from "react";

function Message() {
  return (
    <div className="flex flex-col items-center justify-center py-4 gap-4" id="contact">
      <div>
        <h1 className="font-bold text-3xl text-center">
          Have Question In Mind? <br />
          Let Us Help You
        </h1>
      </div>
      <div className="flex border rounded-full w-96 px-3 py-3 h-16 justify-between">
        <input type="email" placeholder="yourmail@gmail.com"/>
        <button className="bg-[#FE9E0D] text-white rounded-full py-2 px-4 font-semibold">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Message;
