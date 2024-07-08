import React from "react";
import foodDelivery from "../assets/portfolio/FoodDelivery.png";
import cineai from "../assets/portfolio/CineAI.png"
import currencyConverter from "../assets/portfolio/currency-Converter.png"
import rockpaperscissor from "../assets/portfolio/rps.png"


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: foodDelivery,
      demo: "https://flavorflow.onrender.com/",
      code: "https://github.com/shubhujais15/FlavorFlow",
    },
    {
      id: 2,
      src: cineai,
      demo: "https://cineai-15.web.app/",
      code: "https://github.com/shubhujais15/CineAI",
    },
    {
      id: 3,
      src: currencyConverter,
      demo: "https://shubhujais15.github.io/Currency_Converter/", // Replace with your actual demo link
      code: "https://github.com/shubhujais15/Currency_Converter", // Replace with your actual code link
    },
    {
      id: 4,
      src: rockpaperscissor,
      demo: "https://shubhujais15.github.io/Rock_Paper_Scissor/", // Replace with your actual demo link
      code: "https://github.com/shubhujais15/Rock_Paper_Scissor", // Replace with your actual code link
    }
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center"
                >
                  Demo
                </a>
                <a
                  href={code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
