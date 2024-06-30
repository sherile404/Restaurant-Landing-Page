import React from "react";

function Work() {
  const workData = [
    {
      icon: "/fork.png",
      name: "Pick Meals",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam quam odio tempora omnis excepturi iusto exercitationem porro quasi hic, minima enim ut distinct",
    },
    {
      icon: "/choose.png",
      name: "Choose How Often",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam quam odio tempora omnis excepturi iusto exercitationem porro quasi hic",
    },
    {
      icon: "/delivery.png",
      name: "Deliveries",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam quam odio tempora omnis.",
    },
  ];

  return (
    <div className="flex flex-col gap-16 h-screen items-center justify-center px-8">
      <div className="text-center">
        <h2 className="text-[#FE9E0D] text-xl font-medium">Work</h2>
        <h1 className="font-bold text-3xl py-3">How It Works</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam quam <br />
          odio tempora omnis excepturi iusto exercitationem porro quasi hic,<br />
          minima enim ut distinctio iure sint ratione id sed cumque ipsum!
        </p>
      </div>
      <div className="flex px-20 gap-10">
        {
        workData.map( (work) => (
            <div key={work} className="flex flex-col w-72 border px-6 py-6 shadow-md items-center">
                <img src={work.icon} alt={work.name} className="h-12 w-10" />
                <h3 className="font-bold text-xl py-4 text-center">{work.name}</h3>
                <p className="text-center">{work.description}</p>
            </div>
        ))
    }
      </div>
    </div>
  );
}

export default Work;
