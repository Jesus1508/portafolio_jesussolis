import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_8vxmq3a", "template_8xg37m6", form.current, "eZ9RAwE1gQaSuw_2a")
      .then(
        () => {
          setMessageSent(true);
          form.current.reset();
        },
        (error) => {
          console.error("Error al enviar", error.text);
        }
      );
  };

  return (
    <motion.section
      id="contacto"
      className="bg-slate-50 py-20 px-6 md:px-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 text-center">
        <h2 className="text-3xl font-bold text-blue-700 border-b-4 border-orange-400 inline-block mb-6">
          Contáctame
        </h2>
        <p className="text-lg text-slate-600 mb-8">
          ¿Tienes un proyecto en mente o deseas colaborar? Envíame un mensaje.
        </p>

        <form ref={form} onSubmit={sendEmail} className="grid gap-4 text-left">
          <input
            type="text"
            name="from_name"
            placeholder="Tu nombre"
            required
            className="p-3 border border-slate-300 rounded focus:outline-blue-500"
          />
          <input
            type="email"
            name="from_email"
            placeholder="Tu correo electrónico"
            required
            className="p-3 border border-slate-300 rounded focus:outline-blue-500"
          />
          <textarea
            name="message"
            placeholder="Tu mensaje"
            rows="5"
            required
            className="p-3 border border-slate-300 rounded focus:outline-blue-500"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Enviar mensaje
          </button>
        </form>

        {messageSent && (
          <p className="mt-6 text-green-600 font-medium">
            ✅ ¡Mensaje enviado con éxito!
          </p>
        )}
      </div>
    </motion.section>

  );
};

export default Contact;
