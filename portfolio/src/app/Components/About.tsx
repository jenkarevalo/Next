import React from "react";

const About = () => {
  return (
    <div className=" flex flex-col items-center pt-4 h-screen w-screen bg-[#252524]">
      <h2 className="font-semibold text-[40px] text-white font-sans">PERFIL</h2>
      <div className="flex flex-col items-center justify-center w-screen mt-1.5 pt-2 pb-0 bg-[#252524] p-10 font-sans">
        <p className="text-white">
          <span>Hola, yo soy Katherine Arevalo.</span> Profesional en Ingeniería Ambiental,
          especialista en seguridad y salud en el trabajo. Me gusta la tecnología, cuento
          con 1 año de experiencia en manejo de herramientas orientadas al trabajo, en
          proyectos de tecnología bajo metodologías ágiles, además tengo conocimientos en
          Docker, Gitlab, GitHub, Oracle VirtualBox, Base de Datos, mongoDB, DBeaver,
          Apache NetBeans, manejo de tecnologías Java, Visual Studio Code, Idea Intellij,
          StarUML, Nodejs, Loopback, Angular, Bootstrap, Materialize.
          <br/>
          Conocimientos en lenguajes de programación como JavaScript, Java, C#.
          <br/>
          Sistemas operativos como Linux Ubuntu, RedHat 8.4, Windows.
          <br/>
          Cuento con competencias en Trabajo en equipo, actitud de servicio, comunicación
          asertiva, capacidad de análisis, planificación y organización, siendo dinámica
          e innovadora, con disposición a la formación continua.
        </p>
      </div>
    </div>
  );
};

export default About;