import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

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
    <section id="contacto" className="bg-gray-100 py-16 px-6 md:px-24">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-yellow-400 inline-block">
          Contáctame
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          ¿Tienes un proyecto en mente o deseas colaborar? Envíame un mensaje.
        </p>

        <form ref={form} onSubmit={sendEmail} className="grid gap-6 text-left">
          <input
            type="text"
            name="from_name"
            placeholder="Tu nombre"
            required
            className="w-full p-3 rounded border border-gray-300"
          />
          <input
            type="email"
            name="from_email"
            placeholder="Tu correo electrónico"
            required
            className="w-full p-3 rounded border border-gray-300"
          />
          <textarea
            name="message"
            placeholder="Tu mensaje"
            rows="5"
            required
            className="w-full p-3 rounded border border-gray-300"
          ></textarea>
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-6 rounded shadow-md transition duration-300"
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
    </section>
  );
};

export default Contact;
