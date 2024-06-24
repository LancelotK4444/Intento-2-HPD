"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Tocar ukelele</li>
        <li>Saber mucho de SpiderMan</li>
        <li>Jugar bien Fortnite o Valo, eso dice ella</li>
        <li>Dar respuestas profundas</li>
        <li>Ser la favorita de los profes</li>
        <li>Correr muy cabrón</li>
        <li>Sentido de la moda</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>We're not gonna take it</li>
        <li>7 years</li>
        <li>Fuma</li>
        <li>La magia</li>
        <li>My LiE (Zolik)</li>
        <li>30/90</li>
        <li>Downtown(Anya Taylor Joy)</li>
        <li>Niño</li>
        <li>Hide (SpiderMan) Chance ya la conoces, pero alch para deprimirse me gusta un chingo</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Ser buena amiga</li>
        <li>Comprensiva</li>
        <li>Saber escuchar</li>
        <li>Ganas de vivir</li>
        <li>Amable</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre ti(SpiderMan)</h2>
          <p className="text-base lg:text-lg">
           No sabemos que pasar, ¿cuáles son los planes? Terminar la escuela, encontrar un trabajo, ganar dinero 
           y comprar cosas, ¿eso es todo, la vida no es algo más? Aunque la vida no sea como la creímos algún día 
           cuando eramos más pequeños, siempre hay un Spiderman que diga Magali que te puede dar consolaciones como
           un no sé o ta bien.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Habilidades{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Música{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Cualidades{" "}
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
