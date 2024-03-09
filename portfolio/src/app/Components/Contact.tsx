import React from "react";

function Contact() {
  return (
    <div className="bg-[#252524] font-sans">
      <section id="contact" className="relative">
        <form
          name="contact"
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-Black sm:text-4xl text-3xl mb-1 font-medium title-font text-white">
            ¡Contrátame!
          </h2>
          <p className="leading-relaxed mb-5 text-white">
            Para mas información contactame!
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-700">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-[#333332] rounded border border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-[#333332] rounded border border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-[#333332]  rounded border border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">
            Enviar
          </button>
        </form>
      </section >
    </div>
  );
}

export default Contact;