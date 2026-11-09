# Decanato, revistas y normativa · PR #2

Revisión: 8 de noviembre de 2026 (Venezuela).

## Estado y alcance

Se continuó el PR #2 existente y su rama `feat/decanato-normativa-revistas-2026`, desde e64df13af2c922212d0ccd846f4109ce8db6fbac. Se conservaron los recursos ya incorporados, los emblemas, la paleta, las ocho entradas principales y los accesos transversales a Normativa. No se intervino la organización de Computación.

## Decisiones editoriales

- Ocho bloques en Decanato con índice de navegación local; jerarquía semántica y diseño adaptable.
- Instalación formal 9-7-1973 atribuida a reseña conmemorativa de 2017; acta primaria pendiente.
- Propósito identificado como síntesis editorial, sin sustituir misión o visión oficiales.
- José Ortega en ficha documental: referencias 2025–2026, con advertencia explícita sobre continuidad y nombramiento. Preparada para ampliar con datos y fotografía autorizados; sin imagen ficticia.
- Consejo de Facultad explicado solo en el marco del artículo 50 de Ley de Universidades. No se publican composición o atribuciones particulares sin reglamento FEC.
- Consejo Académico Docente: mención histórica de Secretaría, sin equipararlo al Consejo de Facultad ni confirmar naturaleza y funcionamiento actual.
- Seis áreas departamentales preliminares; nombres oficiales pendientes. Ciencias Humanas vinculada a Antropología. Computación enlaza a su organización. Directorios de consejos se mantendrán en páginas departamentales.
- No se encontró un portal oficial verificable de autoridades rectorales; enlace pendiente, sin usar fichas editoriales como sustituto ni reproducir nombres.

## Publicaciones y normativa

Seis fichas con adscripción y estado diferenciados. Ciencia, Opción, Anartia, Enl@ce y Divulgaciones vinculadas a FEC con las precisiones documentales; Boletín CIB identificado con Humanidades y Educación y conservado como recurso universitario. No se etiqueta automáticamente ninguna como activa.

Divulgaciones: creada en 1993, arbitrada, edición digital desde 2016; volumen conjunto 2022–2023 publicado el 10-6-2024 como referencia histórica, sin afirmar que sea el más reciente.

Normativa prioriza Gacetas LUZ y referencias oficiales de Secretaría; Ley de Universidades enlaza transcripción UC, etiquetada sin certificación de texto consolidado. RERE histórico no se convierte en instrucciones actuales. Copia no oficial en Scribd conservada solo en documentación.

Ver docs/fuentes.md y docs/normativa-inventario.md para URLs, procedencia y límites. No hay datos de contacto personales nuevos ni autoridades rectorales copiadas.

## Validación

- npm ci: correcto, sin cambios de dependencias.
- npm run build: 17 páginas.
- npm run check: 0 errores, 0 advertencias, 0 sugerencias; 482 referencias locales válidas; idioma y alt presentes.
- Análisis del HTML generado en Decanato, Investigación y Normativa: IDs únicos, anclas locales válidas, un h1 por página y ocho enlaces principales. Seis fichas de revista y accesos a Normativa desde Decanato y Secretaría comprobados; pie compartido conservado.
- Revisión estática responsive: índice lateral pasa a dos columnas móviles a 650 px; áreas departamentales se apilan, ancho de contenido flexible y enlaces largos ajustables. Foco visible y menú móvil nativo heredados.
- Revisión visual, móvil y teclado interactivo no realizada: sites-preview agotó el tiempo de arranque aunque Astro informó estar listo en 219 ms. Sin URL de vista previa disponible. No se afirma auditoría WCAG completa ni ausencia de errores de consola en navegador.
- Enlaces externos: acceso recuperado de Secretaría LUZ, Gacetas, Opción, Enl@ce y Ley UC. Otros portales con contenido editorial indexado, pero acceso directo restringido o timeout; no se declara comprobación completa.
- GitHub Actions: consultar el resultado asociado al commit final del PR.

No fusionar, no desplegar, no modificar DNS.
