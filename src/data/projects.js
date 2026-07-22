const projects = [
  {
    id: 1,
    title: "Gestor de Tareas Kanban",
    description:
      "Tablero Kanban interactivo con drag & drop, inspirado en el gestor de tareas ágiles que desarrollé con Vue.js, Node.js y MongoDB en proyectos anteriores. Prueba la demo funcional hecha en React.",
    tech: ["React", "Drag & Drop", "Vue.js", "Node.js", "MongoDB"],
    repo: "https://github.com/Jesus1508/proyecto-kanban",
    demo: "kanban",
  },
  {
    id: 2,
    title: "RAG Assistant",
    description:
      "Asistente conversacional con Retrieval-Augmented Generation, basado en el sistema que integré en Aseguratec con React, Node.js, Angular y Cohere/OpenAI. Esta demo simula la búsqueda semántica y muestra las fuentes recuperadas.",
    tech: ["React", "RAG", "OpenAI", "Cohere", "LangChain"],
    repo: null,
    demo: "rag",
  },
  {
    id: 3,
    title: "Sistema de Gestión para Escuelas de Taekwondo",
    description:
      "Plataforma multi-sucursal para administrar alumnos, instructores, asistencias, graduaciones y pagos, con dashboard de estadísticas. Backend con Node.js, Express y MongoDB; frontend con React y Tailwind. Prueba la demo del dashboard con datos de ejemplo.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Recharts", "JWT"],
    repo: "https://github.com/JesusDevSolis/mdk_frontend",
    repoBackend: "https://github.com/JesusDevSolis/mdk_backend",
    demo: "dashboard",
  },
  {
    id: 4,
    title: "The Family Store — E-commerce",
    description:
      "Tienda en línea completa de moda y belleza con panel administrativo: catálogo con categorías, tallas y promociones, carrito con reserva de stock en tiempo real, envío a domicilio opcional, reseñas moderadas y notificaciones de ventas nuevas para el admin. Backend con Node.js/Express/MongoDB y Cloudinary; frontend con React y Tailwind. Prueba la demo con datos de ejemplo.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind", "Cloudinary", "JWT"],
    repo: "https://github.com/Jesus1508/the-family-store-frontend",
    repoBackend: "https://github.com/Jesus1508/the-family-store-backend",
    demo: "familystore",
  },
];

export default projects;
