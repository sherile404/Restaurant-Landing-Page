import React from "react";

function Testimonial() {
  return (
    <div className="items-center justify-center px-20 py-16 h-screen">
      <div className="text-center">
        <h2 className="text-[#FE9E0D] font-medium text-xl">Testimonial</h2>
        <h1 className="text-3xl font-bold py-3">What They Are Saying</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Velit
          eligendi ad repudiandae tempora ea maiores. <br /> Odit aperiam
          commodi labore quisquam nihil.
        </p>
      </div>
      <div className="flex flex-col border shadow-md w-2/4 h-72 rounded-xl mt-8 mx-auto px-6 gap-6 items-center justify-center">
        <img src="/john-doe.png" alt="john" className="w-20 h-20" />
        <p className="text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
          Exercitationem, facilis. Expedita deleniti nisi veniam.
        </p>
        <h1 className="text-xl font-bold text-center">John Doe</h1>
      </div>
    </div>
  );
}

export default Testimonial;
