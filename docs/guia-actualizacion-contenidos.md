# Actualización de contenidos

1. Registrar fuente institucional, responsable de verificación y fecha.
2. Editar `src/data/portal.ts` para programas, documentos, contactos o agenda; fechas ISO YYYY-MM-DD y período explícito. Mantener Pregrado separado de Postgrado.
3. Para noticias usar `src/content/noticias.json`: objetos con `slug`, `title`, `date`, `summary`, `category`, `source`, `body`; opcionales `image` e `imageAlt`. Categorías: Académica, Investigación, Extensión, Secretaría Docente, Eventos y Comunicados. Fechas reales; nunca estimar la publicación.
4. Guardar originales en `public/documentos/`; usar enlaces codificados para nombres con espacios. No sobrescribir una versión histórica sin documentarlo.
5. Actualizar pendientes y fuentes. Evitar contactos personales, datos bancarios no confirmados y nombres de autoridades sin vigencia acreditada.
6. Ejecutar npm ci, npm run build y npm run check. Revisar escritorio, móvil, foco y navegación mediante Tab/Enter/Espacio. Abrir PR.
7. Publicar solo tras autorización. Recompilar para actualizar la selección de próximas fechas de portada.

No introducir HTML sin sanitización ni renderizar contenido externo sin revisión. Los textos de noticias se muestran como texto plano.
