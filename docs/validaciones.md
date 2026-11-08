# Validaciones · Fase 1

8 de noviembre de 2026.

- `npm ci`: instalación reproducible correcta, lockfile incluido.
- `npm run build`: 16 páginas estáticas generadas.
- `npm run check`: 0 errores, 0 advertencias, 0 sugerencias de Astro; 428 referencias locales válidas; idioma español y alt presentes.
- Integridad SHA-256: 12 archivos originales iguales byte a byte a los recursos aportados. WebP adicional optimizado.
- Contraste calculado WCAG: azul principal/blanco 11,14:1; azul secundario/fondo claro 5,67:1; texto secundario/fondo claro 5,79:1; texto principal/blanco 12,95:1. Dorado reservado a acentos decorativos.
- Revisión estática: menú nativo details/summary, foco visible, salto al contenido, estructura semántica, consultas responsive a 900 y 650 px, reduced-motion. Sin scripts de cliente.
- Web del Estudiante respondió en verificación externa. Portal del Boletín devolvió error de conexión a base de datos; Enl@ce y Maestría TIC no pudieron comprobarse mediante el servicio de consulta. No se concluye que estén permanentemente fuera de servicio. Los restantes enlaces externos requieren revisión manual.
- La infraestructura de vista previa agotó su tiempo de arranque en dos intentos, aunque Astro informó estar listo. No se realizó auditoría visual en navegador, prueba interactiva de teclado, consola ni verificación real en dispositivos. Pendientes antes de afirmar conformidad WCAG completa.
- GitHub Pages preparado con activación manual; no activado. Dominio y DNS sin configurar. Repositorio de Computación sin cambios.

El filtro de agenda se evalúa en cada build. El workflow manual deberá ejecutarse de nuevo para actualizar la portada cuando transcurran fechas.
