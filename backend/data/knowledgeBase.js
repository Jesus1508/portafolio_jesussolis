const knowledgeBase = [
  {
    id: "perfil-bio",
    documento: "perfil/bio",
    fragmento:
      "Jesús Solís Martínez es Desarrollador FullStack freelance con más de 8 años de experiencia creando soluciones web modernas, eficientes y escalables. Se especializa en proyectos completos con React, Angular, Vue.js y Node.js en el frontend, y Laravel y Python en el backend, con despliegues en la nube (Azure y GCP), CI/CD y arquitectura limpia. Recientemente ha ampliado su enfoque hacia la integración de asistentes de IA conversacional (RAG, OpenAI, Cohere), combinando su experiencia fullstack con soluciones de búsqueda semántica y automatización.",
    tags: ["perfil", "bio", "sobre mi", "quien es", "resumen", "freelance"],
  },
  {
    id: "perfil-empresas",
    documento: "perfil/empresas",
    fragmento:
      "Jesús ha colaborado con las empresas Aseguratec, Previ SRL, OTISA S.A., CONABIO y Fundación Nemi A.C.",
    tags: ["empresas", "clientes", "colaboraciones", "donde ha trabajado"],
  },
  {
    id: "experiencia-aseguratec",
    documento: "experiencia/aseguratec",
    fragmento:
      "Aseguratec — Fullstack Developer / AI Assistant Integrator (Abril 2025 – Actualidad, remoto). Desarrollo e integración del sistema RAG Assistant con React, Node.js, Angular y Cohere/OpenAI. Implementación de contexto conversacional, búsqueda semántica y renderizado enriquecido en Docusaurus. Diseño de componentes UI/UX interactivos con modo oscuro y animaciones con Framer Motion. Integración entre frontend AngularJS (portal de agencias) y backend Laravel/Node.js. Optimización de rendimiento, escalabilidad y mantenimiento de arquitectura modular.",
    tags: ["aseguratec", "rag", "ia", "inteligencia artificial", "cohere", "openai", "docusaurus", "angular"],
  },
  {
    id: "experiencia-previ",
    documento: "experiencia/previ-srl",
    fragmento:
      "Previ SRL — BackEnd / Integrador de Sistemas (Marzo 2025 – Octubre 2025, remoto). Integración de sistema conversacional entre Bitrix24 y el chatbot Ánima con Laravel. Implementación de OAuth 2.0, registro automático de bots y Webhooks para Telegram/WhatsApp. Infraestructura con Redis, Laravel Reverb, Supervisor y Nginx para WebSockets en tiempo real. Desarrollo de API RESTful modular para sesiones, mensajes y flujos. Despliegue y monitoreo en múltiples servidores con seguridad y documentación completa.",
    tags: ["previ", "laravel", "reverb", "websockets", "tiempo real", "redis", "bitrix24", "oauth", "telegram", "whatsapp"],
  },
  {
    id: "experiencia-otisa",
    documento: "experiencia/otisa",
    fragmento:
      "OTISA S.A. — Desarrollador FullStack (2017 – 2024, Chiapas). Desarrollo de aplicaciones con Laravel, Vue.js, React, Node.js y SQL Server. Rediseño de interfaces y mejora de accesibilidad y rendimiento. Integración de APIs RESTful internas y externas.",
    tags: ["otisa", "sql server", "vue", "laravel"],
  },
  {
    id: "experiencia-conabio",
    documento: "experiencia/conabio",
    fragmento:
      "CONABIO — Desarrollador FullStack (2010 – 2017, remoto). Desarrollo de sitios institucionales usando Angular, PHP, MySQL. Diseño de base de datos y gestión completa del ciclo de desarrollo.",
    tags: ["conabio", "institucional", "gobierno", "mysql", "php"],
  },
  {
    id: "experiencia-nemi",
    documento: "experiencia/fundacion-nemi",
    fragmento:
      "Fundación Nemi A.C. — Consultor Tecnológico (2013, México). Capacitación tecnológica a docentes. Soporte técnico y metodológico en tecnología educativa. Elaboración de reportes de impacto.",
    tags: ["nemi", "consultoria", "educacion", "docentes"],
  },
  {
    id: "habilidades-frontend",
    documento: "habilidades/frontend",
    fragmento:
      "Habilidades de frontend: HTML, CSS, JavaScript, TypeScript, Vue.js, React, Angular, Figma, Vitest.",
    tags: ["frontend", "react", "vue", "angular", "typescript", "javascript"],
  },
  {
    id: "habilidades-backend",
    documento: "habilidades/backend",
    fragmento:
      "Habilidades de backend: PHP, Laravel, Symfony, Node.js, Java, Python, JWT / OAuth2, WebSockets (Reverb/Socket.io).",
    tags: ["backend", "node", "laravel", "symfony", "php", "java", "python", "jwt", "oauth"],
  },
  {
    id: "habilidades-bd",
    documento: "habilidades/bases-de-datos",
    fragmento:
      "Bases de datos: MySQL, SQL Server, MongoDB, Redis. MongoDB es una base de datos NoSQL orientada a documentos.",
    tags: ["mysql", "sql server", "mongodb", "nosql", "redis", "base de datos", "documental"],
  },
  {
    id: "habilidades-devops",
    documento: "habilidades/devops-cloud",
    fragmento:
      "DevOps / Cloud: Git, Docker, Jenkins, GitHub Actions, GitLab CI, Azure, GCP (Google Cloud Platform), WordPress.",
    tags: ["devops", "docker", "cloud", "azure", "gcp", "google cloud", "ci/cd", "jenkins"],
  },
  {
    id: "habilidades-ia",
    documento: "habilidades/ia-llms",
    fragmento:
      "IA / LLMs: OpenAI, Cohere, Claude, LangChain, RAG (Retrieval-Augmented Generation), bases de datos vectoriales.",
    tags: ["ia", "inteligencia artificial", "llm", "rag", "openai", "cohere", "claude", "langchain", "vectorial"],
  },
  {
    id: "habilidades-metodologias",
    documento: "habilidades/metodologias",
    fragmento:
      "Metodologías: SCRUM, principios SOLID, Clean Architecture, microservicios, UI/UX.",
    tags: ["scrum", "solid", "clean architecture", "microservicios", "metodologia", "agil"],
  },
  {
    id: "proyecto-kanban",
    documento: "proyectos/gestor-de-tareas-kanban",
    fragmento:
      "Gestor de Tareas Kanban: tablero Kanban interactivo con drag & drop. Backend con Node.js y MongoDB, frontend Vue.js con una demo también hecha en React. Repositorio: https://github.com/Jesus1508/gestor_tareas",
    tags: ["kanban", "tareas", "drag and drop", "vue"],
  },
  {
    id: "proyecto-rag",
    documento: "proyectos/rag-assistant",
    fragmento:
      "RAG Assistant: asistente conversacional con Retrieval-Augmented Generation, inspirado en el sistema integrado en Aseguratec. Esta versión corre 100% en local con Ollama (embeddings y generación), sin depender de ninguna API de pago. Backend con Node.js y Express, frontend con React y Tailwind. Repositorio: https://github.com/Jesus1508/RAG_Assistant",
    tags: ["rag", "ollama", "asistente", "ia", "chatbot"],
  },
  {
    id: "proyecto-taekwondo",
    documento: "proyectos/taekwondo-dashboard",
    fragmento:
      "Sistema de Gestión para Escuelas de Taekwondo: plataforma multi-sucursal para administrar alumnos, instructores, asistencias, graduaciones y pagos, con dashboard de estadísticas. Backend con Node.js, Express y MongoDB, frontend con React, Tailwind y Recharts. Repositorio frontend: https://github.com/JesusDevSolis/mdk_frontend — backend: https://github.com/JesusDevSolis/mdk_backend",
    tags: ["taekwondo", "dashboard", "recharts", "graficas", "escuela"],
  },
  {
    id: "proyecto-familystore",
    documento: "proyectos/the-family-store",
    fragmento:
      "The Family Store — E-commerce: tienda en línea completa de moda y belleza con panel administrativo, catálogo con categorías y tallas, carrito con reserva de stock en tiempo real, envío a domicilio, reseñas moderadas. Backend con Node.js, Express, MongoDB y Cloudinary, frontend con React y Tailwind. Repositorio frontend: https://github.com/Jesus1508/the-family-store-frontend — backend: https://github.com/Jesus1508/the-family-store-backend",
    tags: ["ecommerce", "tienda", "carrito", "cloudinary"],
  },
  {
    id: "proyecto-chat",
    documento: "proyectos/chat-soporte-tiempo-real",
    fragmento:
      "Chat de Soporte en Tiempo Real: panel de soporte omnicanal (web, Telegram, WhatsApp) con mensajería en tiempo real, inspirado en el sistema de Previ SRL. Backend con Laravel Reverb y cola en Redis, frontend con Vue 3 e Inertia. Repositorio: https://github.com/Jesus1508/Laravel_Reverb",
    tags: ["chat", "soporte", "reverb", "websockets", "tiempo real"],
  },
  {
    id: "proyecto-panel",
    documento: "proyectos/panel-administrativo-institucional",
    fragmento:
      "Panel Administrativo Institucional: portal institucional con páginas dinámicas, noticias y recursos descargables, inspirado en los sitios de CONABIO. Backend con Node.js, Express y MySQL, frontend con Angular. Repositorio: https://github.com/Jesus1508/panel_administrativo",
    tags: ["panel", "cms", "institucional", "angular", "mysql"],
  },
  {
    id: "certificados",
    documento: "perfil/certificados",
    fragmento:
      "Certificados de Jesús Solís Martínez: Vue.js; Git + GitHub; Scrum Master y Product Owner; Principios SOLID y CleanCode; Ultimate Docker (guía de cero hasta despliegues); Universidad n8n — Master en Automatización con Agentes IA.",
    tags: ["certificados", "cursos", "n8n", "docker", "scrum", "solid"],
  },
  {
    id: "perfil-por-que-contratarlo",
    documento: "perfil/por-que-contratarlo",
    fragmento:
      "Lo que distingue a Jesús de otros perfiles similares es que no se limita a escribir código: tiene amplia experiencia resolviendo problemas de negocio de principio a fin. Empezó especializándose en frontend y backend por separado, y con los años evolucionó a un rol Fullstack real, llevando integraciones completas desde cero hasta el despliegue en producción. Procura siempre entregar trabajo mantenible, documentado y preparado para poder expandirse o migrarse a futuro, no soluciones desechables.",
    tags: ["por que contratarlo", "diferenciador", "valor agregado", "fortaleza principal", "contratar", "por que elegirlo"],
  },
  {
    id: "perfil-fortalezas-debilidades",
    documento: "perfil/fortalezas-y-debilidades",
    fragmento:
      "Entre sus principales fortalezas, Jesús destaca: su capacidad para entender y depurar sistemas complejos gracias al paso por distintos cargos y empresas, proponiendo soluciones de fondo y no solo parches; una alta adaptabilidad para aprender tecnologías nuevas o heredadas y ponerse productivo con ellas en poco tiempo; y su gusto por trabajar en equipos con comunicación clara, código mantenible y revisión de código como práctica constante. Como área de oportunidad, reconoce abiertamente que su inglés conversacional es su punto más débil: lee documentación técnica y se comunica bien por escrito, pero la conversación fluida en inglés es algo en lo que sigue trabajando.",
    tags: ["fortalezas", "debilidades", "ingles", "adaptabilidad", "trabajo en equipo", "revision de codigo", "areas de oportunidad"],
  },
  {
    id: "perfil-reto-profesional",
    documento: "perfil/reto-profesional-destacado",
    fragmento:
      "Uno de los retos más grandes que ha enfrentado fue el desarrollo de un sistema de campañas automatizadas por SMS con IA, una tecnología relativamente nueva y compleja que además requiere APIs de pago para un uso serio. El principal desafío fue coordinar correctamente el flujo de mensajes para evitar respuestas duplicadas o entregas cruzadas entre usuarios, además de elegir bien las tecnologías para integrar todo el sistema. Lo resolvió con un análisis completo del flujo, control de estados, validaciones, telemetría y mecanismos anti-duplicidad, documentando todo para futuras mejoras o resolución de bugs. El resultado fue un flujo mucho más estable, con una tasa de errores considerablemente menor y mejor experiencia para los usuarios finales de las campañas.",
    tags: ["reto", "desafio", "problema resuelto", "sms", "campañas automatizadas", "automatizacion", "logro profesional"],
  },
  {
    id: "perfil-modalidad-disponibilidad",
    documento: "perfil/modalidad-y-disponibilidad",
    fragmento:
      "Jesús busca actualmente trabajar remoto, en modalidad 100% remota, ya que considera que le permite rendir mejor. Su disponibilidad es tanto para proyectos freelance como para una posición de tiempo completo. En caso de ser contratado, su tiempo de incorporación estimado es de una a dos semanas.",
    tags: ["remoto", "trabajo remoto", "modalidad", "freelance", "tiempo completo", "disponibilidad", "incorporacion", "cuando puede empezar"],
  },
  {
    id: "perfil-expectativa-salarial",
    documento: "perfil/expectativa-salarial",
    fragmento:
      "Sobre su expectativa salarial, Jesús maneja como referencia un rango cercano a los 1,200 USD mensuales, aunque queda abierto a conversarlo según el alcance, la duración y las condiciones específicas de cada proyecto o posición.",
    tags: ["salario", "sueldo", "expectativa salarial", "pretension salarial", "compensacion", "cuanto cobra", "tarifa"],
  },
  {
    id: "perfil-organizacion-actualizacion",
    documento: "perfil/organizacion-y-actualizacion",
    fragmento:
      "Para manejar varios proyectos o tareas con fechas límite ajustadas, Jesús prioriza y divide el trabajo en partes más pequeñas para resolverlas de forma más eficiente, cuidando el tiempo asignado a cada tarea. En cuanto a mantenerse actualizado, combina cursos, lectura y documentación técnica con investigación por su cuenta, y le gusta poner en práctica tecnologías nuevas en proyectos personales antes de aplicarlas en el trabajo.",
    tags: ["organizacion", "prioridades", "deadlines", "capacitacion", "actualizacion", "cursos", "aprendizaje continuo"],
  },
  {
    id: "perfil-liderazgo-proyeccion",
    documento: "perfil/liderazgo-y-proyeccion",
    fragmento:
      "Aunque no ha ocupado un puesto formal de liderazgo, Jesús ya ha liderado equipos de manera informal en varios de sus proyectos. Ve esto como su siguiente paso natural: formalizar un rol de liderazgo técnico y, a mediano plazo, le gustaría estar liderando uno o varios equipos de desarrollo.",
    tags: ["liderazgo", "lider de equipo", "team lead", "proyeccion profesional", "futuro profesional", "carrera"],
  },
  {
    id: "perfil-logro-mas-orgulloso",
    documento: "perfil/logro-mas-orgulloso",
    fragmento:
      "El logro del que Jesús se siente más orgulloso es el sistema de gestión que desarrolló para escuelas de Taekwondo. No es un proyecto de práctica: es un sistema real que usan escuelas de verdad para administrar alumnos, instructores, asistencias, graduaciones y pagos en varias sucursales, con un dashboard de estadísticas. Lo que más lo llena es verlo funcionando con datos reales, resolviendo un problema operativo de principio a fin, además de ser un proyecto reciente que construyó con tecnologías nuevas para él.",
    tags: ["logro", "orgulloso", "taekwondo", "proyecto real", "produccion", "dashboard", "mayor logro"],
  },
  {
    id: "perfil-fullstack-varias-empresas",
    documento: "perfil/por-que-fullstack-en-varias-empresas",
    fragmento:
      "Jesús prefiere trabajar como Fullstack en distintas empresas porque eso lo expone constantemente a problemas y stacks diferentes de punta a punta, en vez de quedarse resolviendo un solo tipo de problema. Antes tuvo su propia empresa de desarrollo, así que está acostumbrado a manejar varios proyectos a la vez y a adaptarse rápido. Aun así, está abierto a un puesto fijo de tiempo completo si el proyecto y el equipo valen la pena.",
    tags: ["freelance", "fullstack", "por que freelance", "varias empresas", "empleo fijo", "adaptabilidad"],
  },
  {
    id: "perfil-que-proyectos-motivan",
    documento: "perfil/que-proyectos-lo-motivan",
    fragmento:
      "A Jesús lo motivan los proyectos donde tiene que aprender algo que todavía no domina del todo. Por eso ha armado proyectos completos específicamente para cubrir huecos que sentía en su experiencia, como un chat en tiempo real con Laravel Reverb y Redis, o un panel administrativo con Angular y MySQL, no porque un cliente se lo pidiera, sino para tener esa experiencia real antes de que se la pidieran en una entrevista.",
    tags: ["motivacion", "aprendizaje", "proyectos personales", "reverb", "angular", "cubrir huecos", "que le apasiona"],
  },
  {
    id: "perfil-manejo-desacuerdos",
    documento: "perfil/manejo-de-desacuerdos-tecnicos",
    fragmento:
      "Cuando hay un desacuerdo técnico en el equipo, Jesús prefiere llevar la conversación a algo concreto: pros y contras, impacto en mantenibilidad, y si aplica, una prueba rápida, en vez de discutir solo en teoría. Al final le importa más que el equipo quede alineado y el código sea mantenible, antes que tener él la razón.",
    tags: ["conflicto", "desacuerdo tecnico", "trabajo en equipo", "code review", "mantenibilidad", "manejo de conflictos"],
  },
  {
    id: "contacto",
    documento: "perfil/contacto",
    fragmento:
      "Para contactar a Jesús Solís Martínez, puedes usar el formulario de contacto en la sección 'Contáctame' de este portafolio, o escribirle directamente a iscjesus1508@gmail.com.",
    tags: ["contacto", "email", "correo", "contratar"],
  },
];

module.exports = knowledgeBase;
