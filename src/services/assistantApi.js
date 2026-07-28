const API_URL = import.meta.env.VITE_ASSISTANT_API_URL || "http://localhost:4100";

export const askAssistant = async (pregunta) => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 50000);

  try {
    const res = await fetch(`${API_URL}/api/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pregunta }),
      signal: controller.signal,
    });

    const data = await res.json();
    if (!res.ok || !data.success) {
      throw new Error(data.message || "No se pudo obtener respuesta del asistente");
    }
    return data.data;
  } finally {
    clearTimeout(timeout);
  }
};
