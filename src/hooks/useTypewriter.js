import { useEffect, useState } from "react";

const useTypewriter = (frases, { velocidad = 60, pausa = 1800 } = {}) => {
  const [indiceFrase, setIndiceFrase] = useState(0);
  const [texto, setTexto] = useState("");
  const [borrando, setBorrando] = useState(false);

  useEffect(() => {
    const fraseActual = frases[indiceFrase % frases.length];

    if (!borrando && texto === fraseActual) {
      const timeout = setTimeout(() => setBorrando(true), pausa);
      return () => clearTimeout(timeout);
    }

    if (borrando && texto === "") {
      setBorrando(false);
      setIndiceFrase((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(
      () => {
        setTexto((prev) =>
          borrando ? fraseActual.slice(0, prev.length - 1) : fraseActual.slice(0, prev.length + 1)
        );
      },
      borrando ? velocidad / 2 : velocidad
    );

    return () => clearTimeout(timeout);
  }, [texto, borrando, indiceFrase, frases, velocidad, pausa]);

  return texto;
};

export default useTypewriter;
