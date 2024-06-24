"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Combulsionando",
    description: "Inspirada tras ver furiosa, decide hacer su interpretación de una combulsión.",
    image: "/images/projects/1.png",
    tag: ["Todo", "Tu"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Oh Dios",
    description: "Tras comer una gomiFruta y sentada, tiene una revelación, ¿qué vio?",
    image: "/images/projects/2.png",
    tag: ["Todo", "Tu"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Guapo",
    description: "Un pendejo que perdió su cartera y anda deprimido",
    image: "/images/projects/3.png",
    tag: ["Todo", "Otros"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Fiesta",
    description: "Puede que no tomes, pero no hace falta, los buenos momentos están ahí aún sin alcohol, haces de ellos algo especial.",
    image: "/images/projects/4.png",
    tag: ["Todo", "Otros"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Infantil",
    description: "Es curioso, preguntar ¿qué somos?, experiencias, personalidades, ideas, creencias. Al final, nunca somos, estamos siendo, espero que aún creciendo, no dejes de jugar.",
    image: "/images/projects/5.png",
    tag: ["Todo", "Tu"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Tirando facha.",
    description: "Buen estilo, un vrgo de ropa, no sé de donde sacas tanta, pero con cada una, la combinas increíble.",
    image: "/images/projects/6.png",
    tag: ["Todo", "Tu"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Todo");
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
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Momentos
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Todo"
          isSelected={tag === "Todo"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Tu"
          isSelected={tag === "Tu"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Otros"
          isSelected={tag === "Otros"}
        />
      </div>
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
