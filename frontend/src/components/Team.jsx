import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";

const Team = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const teamMembers = [
    {
      name: "Vishal",
      description:
        "The one who started it all. It takes a lot of guts to create a start up and he's the one with all of it. Meet the CEO. Yes, he's got loads of patience and humility. But on that once-in-a-blue-moon day when he breathes fire, no one dares to tread his territory. He's a master manager and rightfully at the helm of affairs at Internehala.",
      img: assets.vishal,
      bgColor: "bg-yellow-200",
    },
    {
      name: "Aakash",
      description:
        "The one with the poker face. He can crack a hilarious joke with the straightest face and an equally lame joke with a hilariously delighted face. Sarcasm runs in his blood. Don't take our word for that, talk to him and you will know (we will gladly pass you his number, just ask).",
      img: assets.aakash,
      bgColor: "bg-blue-100",
    },
    {
      name: "Gaurav",
      description:
        "The one with the humility. The monk in the team; he probably goes into a trance once he sets his earphones in and starts coding. The only times he comes out of it is when either the CEO calls him or he needs to check the latest football news.",
      img: assets.gaurav,
      bgColor: "bg-green-100",
    },
    {
      name: "Daksh",
      description:
        "The one with the impeccable taste. His whole world revolves around traffic. During mornings and evenings, he battles the fierce traffic on roads. In between he strives to increase the 'traffic' on Internehala. This towering Bong is the gourmet expert in the team and worships the Beatles and Pink Floyd.",
      img: assets.daksh,
      bgColor: "bg-purple-100",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:px-6 md:py-12 font-sans">
      <h1
        className={`text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6 transition-all duration-500 ease-out ${
          animate ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
        }`}
      >
        Meet the team
      </h1>

      <hr
        className={`my-8 border-gray-300 transition-all duration-700 ease-out ${
          animate ? "opacity-100" : "opacity-0"
        }`}
      />

      {teamMembers.map((member, index) => (
        <React.Fragment key={index}>
          <div
            className={`flex flex-col md:flex-row gap-6 mb-10 transition-all duration-500 ease-out delay-${
              index * 100
            } ${
              animate ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="md:w-1/4 flex justify-center md:justify-start">
              <div
                className={`w-36 h-36 md:w-44 md:h-44 rounded-full bg-yellow-200 flex items-center justify-center border-4 border-blue-100 shadow-md overflow-hidden`}
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-3/4">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {member.name}
              </h2>
              <p className="text-gray-700">{member.description}</p>
            </div>
          </div>

          {index < teamMembers.length - 1 && (
            <hr
              className={`my-8 border-gray-300 transition-all duration-700 ease-out delay-${
                (index + 1) * 100
              } ${animate ? "opacity-100" : "opacity-0"}`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Team;
