import React from "react";

function About() {
  return (
    <div className="flex items-center gap-10 h-screen justify-center mx-auto max-w-6xl py-4 px-8">
      <div className="w-1/3">
        <img src="about.png" className="w-full h-full" alt="about" />
      </div>
      <div className="w-2/3">
        <h2 className="text-[#FE9E0D] font-medium">About</h2>
        <h1 className="font-bold text-4xl">
          Food Is An Important <br />
          Part Of A Balanced <br />
          Diet
        </h1><br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          illo ex obcaecati nam. Repellat, sit iure vel sapiente suscipit
          repudiandae mollitia, quas voluptates culpa minus, beatae a
          voluptatibus! Iste, temporibus!
        </p><br />
        <button className="text-white rounded-full bg-[#FE9E0D] py-2 px-4">Learn More</button>
      </div>
    </div>
  );
}

export default About;
