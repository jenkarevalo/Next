import React, { useEffect, useState } from "react";
import projectImage from "../../Assest/project.jpg";

const Projects = () => {
  const projects = [
    {
      name: "Hospitalizacion en casa",
      description:
        "Esta pagina web fue diseñada con el fin de poder implementarla en un Hospital o centro de salud. Se realizo de forma educativa, pero con las especificaciones de una pagina real. Se uso principalmente .Net core, C#, SQL Server, SQL Server Management, Azure Data Studio, Bootstrap.",
      projectsImageSrc: projectImage,
      githubLink: "https://github.com/jenkarevalo/HospitalEnCasa-G76",
      //deployLink: "https://github.com/jenkarevalo/HospitalEnCasa-G76",
    },
    {
      name: "Mascota Feliz",
      description:
        "Esta pagina meb ser realizo con el proposito de ser implementada en una Veterinaria. Se realizo de forma educativa, pero con las especificaciones de una pagina real. Se uso principalmente Node js, JavaScript, MongoDB, Loopback, Materialize.",
      projectsImageSrc: projectImage,
      githubLinkFrontend: "https://github.com/jenkarevalo/Mascota-Feliz-Frontend-MisionTIC",
      githubLinkBackend: "https://github.com/jenkarevalo/Mascota-Feliz-Backend-MiniTIC",
      //deployLink: "https://github.com/jenkarevalo/Mascota-Feliz-Frontend-MisionTIC",
    },
    {
      name: "Propiedades Horizontales",
      description:
        "Esta pagina meb ser realizo con el proposito de ser implementada para conjuntos residenciales o propiedades horizontales. Se realizo de forma educativa, pero con las especificaciones de una pagina real. Se uso principalmente Node js, JavaScript, MongoDB, Loopback, Materialize.",
      projectsImageSrc: projectImage,
      githubLinkFrontend: "https://github.com/jenkarevalo/PropiedadesHorizontalesFrontend",
      githubLinkBackend: "https://github.com/jenkarevalo/PropiedadesHorizontales",
      //deployLink: "https://github.com/JustoMateos21/ecommerce-shoes-copia",
    },
  ];

  return (
    <div className=" w-screen flex items-center flex-col bg-[#2B2B29] font-sans">
      <h2 className="font-semibold text-[40px] text-white font-sans">PROJECTOS</h2>
      <div className="gap-4 mt-10 grid grid-cols-3 md:grid-cols-1 ">
        {projects.map((p) => (
          <div className="relative w-[500px] h-[300px]  border-red-100 border-spacing-1 border p-2 bg-slate-500 ">
            <img className="object-cover " src={p.projectsImageSrc.src} alt="" />
            <span className="flex flex-col  p-4 absolute  backdrop-blur hover:backdrop-blur-[20px]  inset-0 items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="text-Black">{p.description}</p>
              <div className="flex text-white">
                <a className="ml-4" href={p.githubLink}>Github</a>
                <a className="ml-4"  href={p.githubLinkFrontend}>Github-Forntend</a>
                <a className="ml-4"  href={p.githubLinkBackend}>Github-Backend</a>
              </div>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;