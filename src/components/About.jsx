import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl italic mt-12">
          Hello! I'm Shubham Jaiswal, a dedicated and passionate web developer
          currently pursuing B.E. in Artificial Intelligence & Machine Learning
          at JSS Academy Of Technical Education, Bengaluru. I thrive in creating
          dynamic and responsive web applications.
        </p>

        <br />
        <h3 className="font-bold text-2xl text-yellow-50">
          Professional Experience
        </h3>
        <br />
        <p className="text-xl italic">
          I have also gained valuable experience during my one-month internship
          at CodSoft IT Services. During this period, I contributed to front-end
          development projects, including creating a portfolio website, a to-do
          list application, and a calculator. This internship provided me with
          practical insights into web development practices and the ability to
          deliver tasks within deadlines.
        </p>
        <br />
        <h3 className="font-bold text-2xl text-yellow-50">Extra-Curricular Activity</h3>
        <br />
        <p className="text-xl italic">
          I actively participate in coding competitions and was a part of the
          CODE FIESTA organized by SJB Institute Of Technology, Bangalore, where
          I further honed my problem-solving skills and ability in my project.
        </p>
      </div>
    </div>
  );
};

export default About;
