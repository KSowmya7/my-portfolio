"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Bike Page",
    description: "Shows different bike models, can subscribe to Newsletter",
    image: "/images/projects/bikepage.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "E Guru Project",
    description: "Online Education website",
    image: "/images/projects/eguru.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Hospital Website",
    description: "Can book an appointment,can view review and pricing details",
    image: "/images/projects/Hospital.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "NFT page",
    description: "Uses different color themes",
    image: "/images/projects/NFTpage.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "To-Do List",
    description: "Can add a new task, can delete it,mark task completion",
    image: "/images/projects/Todolist.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Travel Website",
    description: "Responsive website includes different packages and images",
    image: "/images/projects/Travel.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-teal-500  mt-4 mb-8 md:mb-12 lg:text-5xl sm:text-2xl">
        My  
        <span className="text-pink-500">  Projects</span>
        
      </h2>
      
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;