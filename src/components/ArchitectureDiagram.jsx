import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";
import { useTheme } from "../context/ThemeContext";

let contador = 0;

const ArchitectureDiagram = ({ chart }) => {
  const contenedorRef = useRef(null);
  const { theme } = useTheme();
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelado = false;
    setError(null);

    mermaid.initialize({
      startOnLoad: false,
      theme: theme === "dark" ? "dark" : "default",
      securityLevel: "strict",
    });

    const id = `mermaid-diagram-${contador++}`;

    mermaid
      .render(id, chart)
      .then(({ svg }) => {
        if (!cancelado && contenedorRef.current) {
          contenedorRef.current.innerHTML = svg;
        }
      })
      .catch((err) => {
        if (!cancelado) setError(err.message);
      });

    return () => {
      cancelado = true;
    };
  }, [chart, theme]);

  if (error) {
    return (
      <p className="text-sm text-red-500">
        No se pudo renderizar el diagrama de arquitectura.
      </p>
    );
  }

  return <div ref={contenedorRef} className="flex justify-center overflow-x-auto" />;
};

export default ArchitectureDiagram;
