import { useState } from "react";

const initialColumns = {
  todo: {
    title: "Por hacer",
    cardIds: ["1", "2"],
  },
  inProgress: {
    title: "En progreso",
    cardIds: ["3"],
  },
  done: {
    title: "Hecho",
    cardIds: ["4"],
  },
};

const initialCards = {
  1: { id: "1", text: "Diseñar wireframes del dashboard" },
  2: { id: "2", text: "Definir modelos de la API" },
  3: { id: "3", text: "Implementar autenticación JWT" },
  4: { id: "4", text: "Configurar CI/CD con GitHub Actions" },
};

const KanbanDemo = () => {
  const [columns, setColumns] = useState(initialColumns);
  const [cards] = useState(initialCards);
  const [dragCardId, setDragCardId] = useState(null);

  const handleDrop = (columnId) => {
    if (!dragCardId) return;

    setColumns((prev) => {
      const next = {};
      for (const key of Object.keys(prev)) {
        next[key] = {
          ...prev[key],
          cardIds: prev[key].cardIds.filter((id) => id !== dragCardId),
        };
      }
      next[columnId] = {
        ...next[columnId],
        cardIds: [...next[columnId].cardIds, dragCardId],
      };
      return next;
    });
    setDragCardId(null);
  };

  return (
    <div>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-5">
        Arrastra las tarjetas entre columnas — tablero Kanban funcional hecho con React y drag &amp; drop nativo (sin librerías externas).
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {Object.entries(columns).map(([columnId, column]) => (
          <div
            key={columnId}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop(columnId)}
            className="bg-slate-100 dark:bg-slate-700 rounded-lg p-3 min-h-[220px]"
          >
            <h4 className="text-sm font-semibold text-slate-600 dark:text-slate-200 mb-3">
              {column.title}{" "}
              <span className="text-slate-400 dark:text-slate-400">
                ({column.cardIds.length})
              </span>
            </h4>
            <div className="flex flex-col gap-2">
              {column.cardIds.map((cardId) => (
                <div
                  key={cardId}
                  draggable
                  onDragStart={() => setDragCardId(cardId)}
                  className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-md p-3 text-sm text-slate-700 dark:text-slate-200 shadow-sm cursor-grab active:cursor-grabbing"
                >
                  {cards[cardId].text}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KanbanDemo;
