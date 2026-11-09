# Incorporación del catálogo académico UDESA


## Catálogo UDESA V1 · incorporación 2026-11-08

Fuente primaria: PDF «00-Catálogo UDESA-v1.pdf», 14 páginas, facilitado por la responsable del portal. Copia original sin modificaciones: `public/documentos/extension/catalogo-udesa-v1.pdf`. Datos: `src/data/cursos-udesa.ts`; página: `/extension/udesa/`.

| Página | Curso | Horas académicas | Área editorial |
|---|---|---:|---|
| 2 | Fluidez en Inteligencia Artificial e Ingeniería de Prompts | 6 | Inteligencia artificial |
| 3 | Fundamentos de Excel / Google Sheets | 16 | Ofimática y productividad |
| 4 | Presentaciones Efectivas con PowerPoint / Google Slides | 16 | Ofimática y productividad |
| 5 | Gestión de Datos con Excel / Google Sheets | 20 | Análisis de datos |
| 6 | Fundamentos de Programación con Python | 32 | Programación |
| 7 | Fundamentos de Programación con Python para Niños | 32 | Programación |
| 8 | Desarrollo de Videojuegos con Odin y Raylib | 30 | Programación |
| 9 | SQL — Pilar del Análisis de Datos | 32 | Análisis de datos |
| 10 | Python — Pilar del Análisis de Datos | 32 | Análisis de datos |
| 11 | Desarrollo de Software Asistido con IA | 32 | Inteligencia artificial |

Las descripciones son adaptaciones fieles de las páginas indicadas. La página 12 presenta certificados de aprobación o asistencia; la 13, formación online e in-company; la 14 documenta `udesa@fec.luz.edu.ve` y https://sites.google.com/fec.luz.edu.ve/udesa/inicio. Las modalidades y certificación son información general, sin asignación automática a cada curso.

Las cuatro áreas son una decisión editorial de organización digital, no una clasificación oficial de UDESA. Todos los cursos tienen estado `catalogo`. No se publican fechas, costos, docentes, requisitos ni disponibilidad de inscripción no documentados. Las fichas usan details/summary nativos; los filtros y búsqueda sin dependencias mejoran progresivamente la consulta. El catálogo completo permanece accesible sin JavaScript. No se reutilizan páginas completas como imágenes decorativas.

Pendiente de actualización por UDESA: precios, fechas, instructores, disponibilidad, condiciones de certificación y modalidad específica por curso. La oferta publicada no constituye anuncio de inscripción abierta.

## Integración con PR #2

El catálogo se integra en `feat/decanato-normativa-revistas-2026` conservando la historia de `feat/udesa-catalogo-v1`. La combinación no presenta conflictos. Se preservan los cambios de Decanato, Postgrado, normativa, seis revistas y emblemas transparentes. No se fusiona a main ni se despliega.

Validación del conjunto integrado: npm ci correcto; build de 18 páginas; check con 0 errores, advertencias o sugerencias y 524 referencias locales válidas. Revisión del HTML generado: 10 cursos UDESA, 9 coordinaciones de Postgrado, 6 fichas de revistas y recursos transparentes conservados. Las limitaciones de revisión visual en navegador documentadas en el PR #2 continúan pendientes.
