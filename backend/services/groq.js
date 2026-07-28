const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";
const GROQ_MODEL = process.env.GROQ_MODEL || "llama-3.1-8b-instant";

class GroqQuotaError extends Error {}

const generar = async (prompt) => {
  const res = await fetch(GROQ_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
    },
    body: JSON.stringify({
      model: GROQ_MODEL,
      messages: [{ role: "user", content: prompt }],
      temperature: 0.3,
      max_tokens: 500,
    }),
  });

  if (res.status === 429) {
    throw new GroqQuotaError("Límite de la API de Groq alcanzado");
  }

  if (!res.ok) {
    throw new Error(`Groq respondió ${res.status}: ${await res.text()}`);
  }

  const data = await res.json();
  return data.choices[0].message.content;
};

module.exports = { generar, GroqQuotaError };
