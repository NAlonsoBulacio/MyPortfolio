import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const serviceId = "service_d3be1jm";
  const templateId = "template_s5qu5dh";
  const apiKey = "2MjSYyOi2hn-e8l4w";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(serviceId, templateId, formData, apiKey).then(
      (response) => {
        console.log("Correo electrónico enviado con éxito", response);
        // Puedes mostrar un mensaje de éxito o redirigir al usuario a una página de confirmación.
      },
      (error) => {
        console.error("Error al enviar el correo electrónico", error);
        // Puedes mostrar un mensaje de error al usuario.
      }
    );
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="justify-center items-center">
        <div className="">
          <h1 className="text-4xl text-white font-poppins-400">
            Let's Contact <span className="text-cyan-400">.</span>
          </h1>
        </div>
        <div className="w-full max-w-6xl py-4 font-roboto-300">
          <div className="">
            <div className="w-full mb-4">
              <label
                htmlFor="name"
                className="block mb-2 text-left font-bold text-cyan-400 font-poppins-300"
              >
                ¿Cuál es tu nombre y apellido?
              </label>
              <input
                className="w-full bg-gray-200 rounded-md"
                style={{ padding: "16px" }}
                placeholder="Ingresá tu nombre y apellido"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="w-full mb-4">
              <label
                htmlFor="email"
                className="block mb-2 text-left font-bold text-cyan-400 font-poppins-300"
              >
                Correo Electrónico:
              </label>
              <input
                className="w-full bg-gray-200 rounded-md"
                style={{ padding: "16px" }}
                placeholder="Ingresá tu Correo Electrónico"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="subject"
              className="block mb-2 text-left font-bold text-cyan-400 font-poppins-300"
            >
              Asunto
            </label>
            <input
              className="w-full bg-gray-200 rounded-md"
              style={{ padding: "16px" }}
              placeholder="Ingresá el asunto del mensaje"
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="message"
              className="block mb-2 text-left font-bold text-cyan-400 font-poppins-300"
            >
              Mensaje
            </label>
            <textarea
              className="w-full bg-gray-200 rounded-md"
              style={{ padding: "16px" }}
              placeholder="Ingresá tu mensaje"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-end relative">
            <button
              className="border-2 border-cyan-400 text-cyan-400 font-poppins-400 py-2 px-4 font-barlow-500 text-lg w-full md:w-1/5 rounded-md transform transition-transform hover:scale-105 hover:bg-cyan-400 hover:text-white"
              type="submit"
              style={{ padding: "8px" }}
            >
              Enviar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
