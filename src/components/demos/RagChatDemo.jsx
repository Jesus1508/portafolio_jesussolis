import { useState } from "react";
import { FiSend } from "react-icons/fi";

const knowledgeBase = [
  {
    keywords: ["rag", "retrieval", "que es rag", "qué es rag"],
    answer:
      "RAG (Retrieval-Augmented Generation) combina un motor de búsqueda semántica con un modelo de lenguaje: primero recupera los fragmentos más relevantes de la base de conocimiento y luego el LLM genera una respuesta usando únicamente ese contexto, citando de dónde salió cada dato.",
    sources: ["docs/politica-vacaciones.md", "docs/onboarding.md"],
  },
  {
    keywords: ["stack", "tecnologias", "tecnologías", "con que se hizo", "ollama", "api key", "keys"],
    answer:
      "El proyecto real corre 100% en local con Ollama: un modelo dedicado genera los embeddings y otro genera las respuestas, sin depender de OpenAI, Cohere ni ninguna API de pago. Backend en Node.js/Express y frontend en React.",
    sources: ["docs/stack-tecnico.md"],
  },
  {
    keywords: ["vacaciones", "dias", "días"],
    answer:
      "Según la base de conocimiento indexada: 15 días hábiles de vacaciones al año, con 6 días proporcionales antes de cumplir el año, solicitando con 10 días de anticipación.",
    sources: ["docs/politica-vacaciones.md"],
  },
  {
    keywords: ["soporte", "ticket", "ti", "falla"],
    answer:
      "Los tickets marcados como 'crítico' se atienden en un máximo de 2 horas hábiles; el resto, en un máximo de 24 horas.",
    sources: ["docs/soporte-ti.md"],
  },
  {
    keywords: ["fuentes", "similitud", "embeddings", "vector"],
    answer:
      "Cada respuesta viene acompañada de las fuentes recuperadas por similitud coseno: el documento de origen, el fragmento exacto y el porcentaje de similitud con la pregunta.",
    sources: ["docs/arquitectura.md"],
  },
];

const defaultAnswer = {
  answer:
    "No tengo una fuente indexada para esa pregunta en esta demo, pero el proyecto real reconoce explícitamente cuando la base de conocimiento no tiene la respuesta, en vez de inventarla.",
  sources: [],
};

const findAnswer = (question) => {
  const normalized = question.toLowerCase();
  const match = knowledgeBase.find((entry) =>
    entry.keywords.some((keyword) => normalized.includes(keyword))
  );
  return match ?? defaultAnswer;
};

const RagChatDemo = () => {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hola, soy una demo de RAG Assistant. Pregúntame sobre RAG, el stack técnico, WebSockets o autenticación.",
      sources: [],
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    const question = input.trim();
    if (!question) return;

    const { answer, sources } = findAnswer(question);

    setMessages((prev) => [
      ...prev,
      { role: "user", text: question, sources: [] },
      { role: "assistant", text: answer, sources },
    ]);
    setInput("");
  };

  return (
    <div>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-5">
        Simulación cliente de un asistente RAG: recupera respuestas de una base de conocimiento local y muestra las "fuentes" consultadas. Sin API keys reales.
      </p>

      <div className="flex flex-col gap-3 max-h-72 overflow-y-auto mb-4 pr-1">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`max-w-[85%] rounded-lg px-4 py-2 text-sm ${
              msg.role === "user"
                ? "self-end bg-blue-600 text-white"
                : "self-start bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200"
            }`}
          >
            <p>{msg.text}</p>
            {msg.sources.length > 0 && (
              <p className="mt-2 text-xs opacity-70">
                Fuentes: {msg.sources.join(", ")}
              </p>
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleSend} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ej: ¿Qué es RAG?"
          className="flex-1 p-2 border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100 rounded focus:outline-blue-500 text-sm"
        />
        <button
          type="submit"
          aria-label="Enviar"
          className="bg-blue-600 hover:bg-blue-700 text-white px-3 rounded transition"
        >
          <FiSend />
        </button>
      </form>
    </div>
  );
};

export default RagChatDemo;
