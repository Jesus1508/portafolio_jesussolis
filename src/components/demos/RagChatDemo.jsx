import { useState } from "react";
import { FiSend } from "react-icons/fi";

const knowledgeBase = [
  {
    keywords: ["rag", "retrieval", "que es rag", "qué es rag"],
    answer:
      "RAG (Retrieval-Augmented Generation) combina un motor de búsqueda semántica con un modelo de lenguaje: primero recupera los documentos más relevantes y luego el LLM genera una respuesta usando ese contexto.",
    sources: ["docs/rag-overview.md", "docs/arquitectura.md"],
  },
  {
    keywords: ["stack", "tecnologias", "tecnologías", "con que se hizo"],
    answer:
      "Este asistente está construido con React y Node.js en el frontend/orquestación, Angular en el portal de agencias, y modelos de Cohere/OpenAI para la generación de respuestas.",
    sources: ["docs/stack-tecnico.md"],
  },
  {
    keywords: ["websockets", "tiempo real", "reverb", "socket"],
    answer:
      "La comunicación en tiempo real se resuelve con Laravel Reverb y Redis para pub/sub, permitiendo mensajería instantánea entre canales de Telegram/WhatsApp y el panel web.",
    sources: ["docs/websockets.md", "docs/infraestructura.md"],
  },
  {
    keywords: ["oauth", "autenticacion", "autenticación", "seguridad"],
    answer:
      "El acceso se protege con OAuth 2.0 y JWT, con registro automático de bots y webhooks firmados para validar el origen de cada integración.",
    sources: ["docs/seguridad.md"],
  },
];

const defaultAnswer = {
  answer:
    "No tengo una fuente indexada para esa pregunta en esta demo, pero en un sistema RAG real, este mensaje activaría una nueva búsqueda semántica sobre la base vectorial.",
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
