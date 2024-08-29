"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2" >
        <li>06/2016 - 03/2018</li>
        <p>Application Development Analyst - Accenture</p>
        <li>01/2024 - 02/2024</li>
        <p>Full Stack Web Developer Intern - BWS</p>
      </ul>
    ),
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2" >
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Tailwind CSS</li>
        <li>Next JS</li>
        <li>React JS</li>
        <li>Git</li>
      </ul>
    ),
  },

  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>2016</li>
        <p>B.Tech | EEE | GNITS</p>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>05/2023 - 23/2024</li>
        <p>Full Stack Web Development - PW Skills</p>
        <li>01/2024 - 02/2024</li>
        <p>Full Stack Web Developer Intern - BWS</p>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("experience");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <h2 className="text-4xl font-bold text-teal-500 mb-2 sm: text-3xl  sm: mt-10 lg:text-5xl text-center">
        About <span className="text-pink-500">Me</span>
      </h2>
      <div className="md:grid md:grid-cols-2 gap-8 py-8 xl:gap-16 sm:py-16 xl:px-16">
        <div className="md:mt-0 flex flex-col h-full">
          <p className="text-justify lg:text-lg leading-relaxed">
            I'm Sowmya, a passionate front-end developer with about 2 years of experience in the IT industry. My journey in web development began with a solid foundation in full-stack web development, which I acquired through a certification from PW Skills. To further enhance my skills, I embarked on a 2-month internship in Full Stack Web Development at Business Web Solutions, where I gained hands-on experience in building various projects. I've specialized in front-end development, leveraging technologies such as HTML, CSS, JavaScript, Tailwind CSS, React Js, Next Js, and Git. I am passionate about using my skills to create engaging and user-friendly web experiences. I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with others to create amazing applications.
          </p>
        </div>
        <div className="mt-8 md:mt-0 ">
          <div className="flex flex-row justify-start ">
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;