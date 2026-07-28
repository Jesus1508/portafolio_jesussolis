const projects = [
  {
    id: 1,
    title: "Gestor de Tareas Kanban",
    description:
      "Tablero Kanban interactivo con drag & drop, inspirado en el gestor de tareas ágiles que desarrollé con Vue.js, Node.js y MongoDB en proyectos anteriores. Prueba la demo funcional hecha en React.",
    tech: ["React", "Drag & Drop", "Vue.js", "Node.js", "MongoDB"],
    repo: "https://github.com/Jesus1508/gestor_tareas",
    demo: "kanban",
    architecture: `flowchart LR
  U["Usuario"] --> FE["Frontend Vue 3 + Pinia"]
  FE -- "REST + JWT" --> API["Backend Node.js / Express"]
  API --> DB[("MongoDB")]
  API -- "reordenamiento fraccional" --> FE`,
  },
  {
    id: 2,
    title: "RAG Assistant",
    description:
      "Asistente conversacional con Retrieval-Augmented Generation, inspirado en el sistema que integré en Aseguratec con React, Node.js, Angular y Cohere/OpenAI. Esta versión corre 100% en local con Ollama (embeddings y generación), sin depender de ninguna API de pago. Backend con Node.js y Express; frontend con React y Tailwind. Prueba la demo simulando la búsqueda semántica y las fuentes recuperadas.",
    tech: ["React", "Node.js", "Express", "Ollama", "RAG"],
    repo: "https://github.com/Jesus1508/RAG_Assistant",
    demo: "rag",
    architecture: `flowchart LR
  U["Usuario"] --> FE["Frontend React"]
  FE --> API["Backend Node.js / Express"]
  API --> EMB["Ollama: embeddings"]
  API --> GEN["Ollama: generación"]
  EMB --> VS[("vectorstore.json\\n(similitud coseno)")]
  VS --> API
  GEN --> API`,
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
    architecture: `flowchart LR
  U["Usuario"] --> FE["Frontend React + Tailwind + Recharts"]
  FE -- "REST + JWT" --> API["Backend Node.js / Express"]
  API --> DB[("MongoDB\\nalumnos, pagos, asistencias")]
  API -- "estadísticas" --> FE`,
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
    architecture: `flowchart LR
  U["Usuario"] --> FE["Frontend React + Tailwind"]
  FE -- "REST + JWT" --> API["Backend Node.js / Express"]
  API --> DB[("MongoDB\\nproductos, pedidos, reseñas")]
  API --> CLD["Cloudinary\\n(imágenes)"]
  API -- "reserva de stock" --> FE`,
  },
  {
    id: 5,
    title: "Chat de Soporte en Tiempo Real",
    description:
      "Panel de soporte omnicanal (web, Telegram, WhatsApp) con mensajería en tiempo real, inspirado en el sistema de integración conversacional que desarrollé en Previ SRL con Laravel, WebSockets y Redis. Backend con Laravel Reverb y cola en Redis; frontend con Vue 3 e Inertia. Prueba la demo simulando un mensaje entrante.",
    tech: ["Laravel", "Reverb", "WebSockets", "Redis", "Vue.js", "Inertia"],
    repo: "https://github.com/Jesus1508/Laravel_Reverb",
    demo: "chat",
    architecture: `flowchart LR
  CH["Telegram / WhatsApp / Web"] -- "webhook" --> API["Backend Laravel"]
  API -- "cola" --> REDIS[("Redis")]
  REDIS --> REV["Laravel Reverb\\n(WebSockets)"]
  REV -- "broadcast" --> FE["Frontend Vue 3 + Inertia"]
  U["Agente de soporte"] --> FE`,
  },
  {
    id: 6,
    title: "Panel Administrativo Institucional",
    description:
      "Portal institucional con páginas dinámicas, noticias y recursos descargables, inspirado en los sitios institucionales que desarrollé en CONABIO con Angular, PHP y MySQL. Backend con Node.js, Express y MySQL; frontend con Angular. Prueba la demo publicando/despublicando contenido.",
    tech: ["Angular", "Node.js", "Express", "MySQL", "Tailwind", "JWT"],
    repo: "https://github.com/Jesus1508/panel_administrativo",
    demo: "cms",
    architecture: `flowchart LR
  U["Usuario / Editor"] --> FE["Frontend Angular"]
  FE -- "REST + JWT" --> API["Backend Node.js / Express + Sequelize"]
  API --> DB[("MySQL\\npáginas, noticias, recursos")]`,
  },
];

export default projects;
