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

## Ampliación: Postgrado y contactos institucionales

Se incorpora el directorio de nueve coordinadores según aviso II-2026 con tabla semántica, encabezados de fila/columna y contenedor desplazable por teclado en móvil. Correos faltantes aparecen como «Por incorporar». Se añaden los cinco correos facilitados por la responsable del portal; se conservan admisión TIC y Secretaría de Postgrado como canales documentados distintos. CIENCIA separa contacto editorial de recepción de artículos. Contacto y Secretaría Docente reutilizan los datos compartidos. No se publican otros correos personales del aviso. Continúa dentro del PR #2, sin merge ni despliegue.

Validación de la ampliación: build de 17 páginas; check con 0 errores, advertencias o sugerencias; 484 referencias locales. HTML generado: 9 filas de coordinación, 6 correos de programa pendientes, 5 nuevos enlaces mailto comprobados en Contacto y canales de CIENCIA diferenciados. Revisión visual interactiva sigue pendiente por la limitación de preview ya documentada.

## Adaptación técnica de emblemas

Con autorización explícita de la responsable del portal se retira el fondo exterior de los originales mediante máscara de píxeles neutros conectados al borde. No se usan las variantes generativas de prueba. Se preservan colores RGB y detalles de las áreas retenidas; las regiones blancas interiores cerradas se mantienen. El escudo LUZ elimina el patrón cuadriculado exterior y recorta el lienzo transparente, sin redimensionar el dibujo. FEC elimina el fondo exterior claro del JPEG y se exporta a PNG RGBA. Los originales permanecen intactos. Cabecera y favicon usan los PNG derivados, con proporciones conservadas y tamaño de cabecera adaptado.

Verificación: canales alfa con píxeles transparentes y opacos; revisión sobre fondo de contraste; textos y geometría originales conservados. La nota general de vigencia de la página de Pregrado también fue retirada por solicitud de la responsable. Continúa sin merge ni despliegue.
