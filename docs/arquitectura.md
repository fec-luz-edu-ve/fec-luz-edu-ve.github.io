# Arquitectura

Astro 5 en modo estático, TypeScript estricto y CSS con variables. Rutas pre-renderizadas; seis páginas de licenciatura generadas desde `degrees`. Componentes Layout, PageIntro y Calendar reutilizables. Sin JavaScript de cliente: el menú móvil utiliza details/summary nativos.

Documentos preservados byte a byte en public. Fotografía web WebP derivada del original; emblemas sin modificaciones. Se usa una pila tipográfica local con Inter/Source Sans 3 y respaldo del sistema, sin dependencia de fuentes externas.

El calendario de portada filtra fechas vencidas durante cada compilación. Para mantenerlo actualizado es necesario recompilar; el calendario completo del período conserva su contexto histórico. La zona de fechas de los documentos es Venezuela; se evita el desplazamiento de día al formatear fechas civiles.

CI en PR y rama de trabajo: npm ci, build y check. Despliegue manual desde main. Sin DNS ni dominio definitivo.
