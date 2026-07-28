const knowledgeBase = require("../data/knowledgeBase");

let indice = null;

const sinAcentos = (texto) =>
  texto.normalize("NFD").replace(/[̀-ͯ]/g, "");

const tokenizar = (texto) =>
  sinAcentos(texto.toLowerCase())
    .replace(/[^a-z0-9ñ\s]/g, " ")
    .split(/\s+/)
    .filter((t) => t.length > 2);

const construirIndice = () => {
  if (indice) return indice;

  const documentos = knowledgeBase.map((chunk) => {
    const texto = [chunk.fragmento, ...(chunk.tags || [])].join(" ");
    const tokens = tokenizar(texto);
    const tf = {};
    for (const token of tokens) {
      tf[token] = (tf[token] || 0) + 1;
    }
    return { ...chunk, tokens, tf };
  });

  const df = {};
  for (const doc of documentos) {
    for (const token of new Set(doc.tokens)) {
      df[token] = (df[token] || 0) + 1;
    }
  }

  const N = documentos.length;
  const idf = {};
  for (const token in df) {
    idf[token] = Math.log((N + 1) / (df[token] + 0.5)) + 1;
  }

  indice = { documentos, idf };
  return indice;
};

const puntuar = (queryTokens, doc, idf) => {
  let score = 0;
  for (const token of queryTokens) {
    const tf = doc.tf[token] || 0;
    if (tf === 0) continue;
    score += tf * (idf[token] || 0);
  }
  return score;
};

const buscar = (pregunta, k = 3) => {
  const { documentos, idf } = construirIndice();
  const queryTokens = tokenizar(pregunta);

  const resultados = documentos
    .map((doc) => ({
      documento: doc.documento,
      fragmento: doc.fragmento,
      similitud: puntuar(queryTokens, doc, idf),
    }))
    .filter((r) => r.similitud > 0)
    .sort((a, b) => b.similitud - a.similitud)
    .slice(0, k);

  if (resultados.length === 0) return [];

  const max = resultados[0].similitud;
  return resultados.map((r) => ({
    ...r,
    similitud: max > 0 ? Math.round((r.similitud / max) * 1000) / 1000 : 0,
  }));
};

module.exports = { buscar };
