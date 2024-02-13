import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState("false");
  const [formSubmitted, setFormSubmitted] = useState(false);
  useEffect(() => {
    setSuccess(false);
  }, []);

  const serviceId = "service_tf4fz5e";
  const templateId = "template_e39xq6o";
  const apiKey = "Ukt44gaahould7x-y";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    validate({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    if (Object.keys(errors).length === 0) {
      emailjs.send(serviceId, templateId, formData, apiKey).then(
        (response) => {
          console.log("Correo electrónico enviado con éxito", response);
        },
        (error) => {
          console.error("Error al enviar el correo electrónico", error);
          toast.error("Hubo un error al enviar el mensaje.");
        }
      );
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      toast.success("¡Mensaje enviado exitosamente!");
      setSuccess(true);
    }
  };
  const validate = (registro) => {
    let errors = {};
    if (!registro.name) {
      errors.name = "Llenar con su nombre";
    }
    if (!registro.email) {
      errors.email = "Debes ingresar un email.";
    }
    if (!registro.message) {
      errors.message = "Incluye un mensaje en tu contacto.";
    }
    if (registro.email) {
      const emailRegex =
        /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
      if (!emailRegex.test(registro.email)) {
        errors.email = "El email ingresado no es válido";
      }
    }
    setErrors(errors);
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
              {formSubmitted && errors.name && (
                <span className="text-red-500 text-left">{errors.name}</span>
              )}
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
              {formSubmitted && errors.email && (
                <span className="text-red-500">{errors.email}</span>
              )}
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
            {formSubmitted && errors.message && (
                <span className="text-red-500 text-left">{errors.message}</span>
              )}
          </div>
          <div className="flex justify-end relative">
            <button
              className="border-2 border-cyan-400 text-cyan-400 font-poppins-400 py-2 px-4 font-barlow-500 text-lg w-full md:w-1/5 rounded-md transform transition-transform hover:scale-105 hover:bg-cyan-400 hover:text-white"
              type="submit"
              style={{ padding: "8px" }}
            >
              {success ? "Enviado" : "Enviar"}
            </button>
          </div>
        </div>
        <ToastContainer />
      </form>
    </div>
  );
};

export default ContactForm;
