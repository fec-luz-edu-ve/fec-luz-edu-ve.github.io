// Fuente primaria: Catálogo UDESA V1, páginas 2–11. Descripciones adaptadas fielmente.
// Categorías editoriales del portal; no constituyen una clasificación oficial de UDESA.
export const catalogoPDF = '/documentos/extension/catalogo-udesa-v1.pdf';
export const portalUDESA = 'https://sites.google.com/fec.luz.edu.ve/udesa/inicio';
export const categoriasUDESA = ["Inteligencia artificial", "Programación", "Análisis de datos", "Ofimática y productividad"] as const;
export interface CursoUDESA {
  slug: string;
  titulo: string;
  descripcion: string;
  categoria: typeof categoriasUDESA[number];
  horasAcademicas: number;
  certificado: boolean;
  paginaCatalogo: number;
  imagen?: string;
  estado: 'catalogo' | 'inscripcion-abierta' | 'proximamente';
}
export const cursosUDESA: CursoUDESA[] = [
  {
    "slug": "fluidez-ia-prompts",
    "titulo": "Fluidez en Inteligencia Artificial e Ingeniería de Prompts",
    "descripcion": "Taller introductorio para entender el panorama actual de la IA, la tecnología subyacente, sus capacidades y limitaciones, y dominar la IA para generar soluciones de valor precisas, creativas y éticas.",
    "categoria": "Inteligencia artificial",
    "horasAcademicas": 6,
    "certificado": true,
    "paginaCatalogo": 2,
    "estado": "catalogo"
  },
  {
    "slug": "fundamentos-excel-sheets",
    "titulo": "Fundamentos de Excel / Google Sheets",
    "descripcion": "Curso de nivel inicial para el manejo correcto de información en hojas de cálculo. Pasa del registro desordenado a una estructura de datos funcional y confiable.",
    "categoria": "Ofimática y productividad",
    "horasAcademicas": 16,
    "certificado": true,
    "paginaCatalogo": 3,
    "estado": "catalogo"
  },
  {
    "slug": "presentaciones-efectivas",
    "titulo": "Presentaciones Efectivas con PowerPoint / Google Slides",
    "descripcion": "Transforma ideas y datos complejos en presentaciones claras, persuasivas y profesionales.",
    "categoria": "Ofimática y productividad",
    "horasAcademicas": 16,
    "certificado": true,
    "paginaCatalogo": 4,
    "estado": "catalogo"
  },
  {
    "slug": "gestion-datos-excel-sheets",
    "titulo": "Gestión de Datos con Excel / Google Sheets",
    "descripcion": "Nivel intermedio-avanzado para crear hojas de cálculo robustas. Automatiza reportes y gestiona datos para la toma de decisiones.",
    "categoria": "Análisis de datos",
    "horasAcademicas": 20,
    "certificado": true,
    "paginaCatalogo": 5,
    "estado": "catalogo"
  },
  {
    "slug": "fundamentos-python",
    "titulo": "Fundamentos de Programación con Python",
    "descripcion": "Introducción al lenguaje de programación más versátil en la actualidad. Desarrolla el pensamiento lógico y las bases para especializaciones tecnológicas futuras.",
    "categoria": "Programación",
    "horasAcademicas": 32,
    "certificado": true,
    "paginaCatalogo": 6,
    "estado": "catalogo"
  },
  {
    "slug": "python-ninos",
    "titulo": "Fundamentos de Programación con Python para Niños",
    "descripcion": "Programa lúdico que introduce a los niños en el mundo de la creación tecnológica. Utiliza Python para desarrollar el pensamiento computacional mediante proyectos divertidos y aplicables.",
    "categoria": "Programación",
    "horasAcademicas": 32,
    "certificado": true,
    "paginaCatalogo": 7,
    "estado": "catalogo"
  },
  {
    "slug": "videojuegos-odin-raylib",
    "titulo": "Desarrollo de Videojuegos con Odin y Raylib",
    "descripcion": "Crea un videojuego de plataforma 2D eficiente y sin usar un motor de juegos.",
    "categoria": "Programación",
    "horasAcademicas": 30,
    "certificado": true,
    "paginaCatalogo": 8,
    "estado": "catalogo"
  },
  {
    "slug": "sql-analisis-datos",
    "titulo": "SQL — Pilar del Análisis de Datos",
    "descripcion": "Aprende el lenguaje estándar para la gestión de bases de datos. Esencial para cualquier profesional que necesite extraer y manipular información relacionada con sistemas de computación.",
    "categoria": "Análisis de datos",
    "horasAcademicas": 32,
    "certificado": true,
    "paginaCatalogo": 9,
    "estado": "catalogo"
  },
  {
    "slug": "python-analisis-datos",
    "titulo": "Python — Pilar del Análisis de Datos",
    "descripcion": "Avanza en el uso del lenguaje de programación líder en la automatización y ciencia de datos. Esencial para procesar grandes volúmenes de información para análisis de datos o machine learning.",
    "categoria": "Análisis de datos",
    "horasAcademicas": 32,
    "certificado": true,
    "paginaCatalogo": 10,
    "estado": "catalogo"
  },
  {
    "slug": "software-asistido-ia",
    "titulo": "Desarrollo de Software Asistido con IA",
    "descripcion": "Aprende a desarrollar software en la era de la inteligencia artificial. Descubre técnicas y herramientas indispensables para ser productivo y aportar valor profesional con ética y seguridad.",
    "categoria": "Inteligencia artificial",
    "horasAcademicas": 32,
    "certificado": true,
    "paginaCatalogo": 11,
    "estado": "catalogo"
  }
];
