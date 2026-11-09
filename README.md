# Facultad Experimental de Ciencias · Universidad del Zulia

## Catálogo digital UDESA

Se incorpora el catálogo V1 facilitado por la responsable del portal (2026-11-08): diez cursos, PDF original y contacto institucional. Inventario, procedencia, duraciones, categorías editoriales y pendientes en [Catálogo UDESA V1](docs/catalogo-udesa-v1.md).


Portal institucional estático FEC-LUZ, Fase 1 para revisión. Astro, TypeScript y CSS; sin bases de datos ni servicios de pago.

## Contenido

Inicio y ocho secciones: Decanato, Pregrado, Postgrado, Investigación, Extensión, Secretaría Docente, Actualidad y Contacto. Incluye seis licenciaturas, nueve programas de Postgrado, mallas originales, formularios II-2026 y enlaces editoriales.

## Desarrollo

Node.js 22 y npm. Ejecutar desde la raíz:

```sh
npm ci
npm run dev
```

Validación reproducible:

```sh
npm run build
npm run check
```

`check` requiere el build: valida tipos Astro, referencias locales, idioma y presencia de textos alternativos. `npm run preview` sirve la compilación.

## Organización

- `src/pages/`: rutas; `layouts/` y `components/`: estructura compartida.
- `src/data/portal.ts`: navegación, programas, calendario, publicaciones y documentos.
- `src/content/`: noticias verificadas; `src/styles/`: identidad y responsive.
- `public/`: emblemas, fotografía y documentos originales.
- `docs/`: inventario, arquitectura, fuentes, pendientes y guía editorial.
- `.github/workflows/`: CI y publicación manual a Pages.

## Publicación

La CI comprueba los Pull Requests. El workflow de Pages es exclusivamente manual y requiere `main`. Después de revisar y autorizar la integración, configurar Pages con GitHub Actions y ejecutar el workflow. No se ha activado Pages, configurado DNS ni añadido CNAME. Destino previsto: https://fec-luz-edu-ve.github.io/.

## Accesibilidad y actualización

Objetivo WCAG 2.2 AA: HTML semántico, navegación con teclado, salto al contenido, foco visible, menú móvil nativo, contraste y movimiento reducido. La conformidad completa requiere auditoría adicional.

Las fuentes primarias son los recursos institucionales aportados; consulte [fuentes](docs/fuentes.md). No publicar noticias, autoridades, contactos personales ni vigencias sin verificación. La paleta fue aprobada para este proyecto; no se atribuye a un manual institucional. El Departamento de Computación no forma parte de esta intervención.

Consulte [pendientes](docs/pendientes-validacion.md) y [guía de contenidos](docs/guia-actualizacion-contenidos.md).
