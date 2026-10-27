# Visores y enlaces verificados

Verificación: 27 de octubre de 2026. Se consultó GitHub Pages de cada repositorio y se abrió el sitio publicado con Chromium. Los seis sitios devolvieron HTTP 200 y mostraron su dashboard. El inventario describe el contenido publicado, no versiones locales de trabajo.

| Visor | Tema | Descripción | Período | Sitio confirmado | Repositorio |
|---|---|---|---|---|---|
| Anuario de Salud Ñuble | Anuario e indicadores | Demografía, natalidad, defunciones por CIE-10, AVPP, vacunación, egresos hospitalarios y discapacidad en las comunas de Ñuble. Vacunación: 2021–2025 · Egresos: 2022–2025. | 2019–2025 · RND: septiembre 2026 | [Abrir](https://davidcarterc86-debug.github.io/anuario-nuble-2026/) | [GitHub](https://github.com/davidcarterc86-debug/anuario-nuble-2026) |
| Visor SRP Ñuble | Inmunizaciones | Registros de inmunización SRP por fecha, comuna, establecimiento, dosis y características de la población. Registros de inmunización; no personas únicas ni cobertura. | 2019–2026 · sin datos de 2022 | [Abrir](https://davidcarterc86-debug.github.io/visor-srp-nuble/) | [GitHub](https://github.com/davidcarterc86-debug/visor-srp-nuble) |
| Visor Neumo23 Ñuble | Campañas especiales | Seguimiento de registros de vacunación Neumo23 en la nómina de personas nacidas en 1961, con análisis por comuna y establecimiento. Avance sobre la nómina; no cobertura poblacional. | 2026 · corte al 27 de octubre | [Abrir](https://davidcarterc86-debug.github.io/visor-neumo23-2026-nuble/) | [GitHub](https://github.com/davidcarterc86-debug/visor-neumo23-2026-nuble) |
| Mortalidad cardiovascular | Mortalidad | Defunciones y tasas ajustadas por edad de las enfermedades del sistema circulatorio, por región, provincia y comuna. 2024 y 2025: información provisional según el visor. | 2019–2025 | [Abrir](https://davidcarterc86-debug.github.io/visor-cardio-nuble-2026/) | [GitHub](https://github.com/davidcarterc86-debug/visor-cardio-nuble-2026) |
| Mortalidad por cáncer | Mortalidad | Defunciones por neoplasias y tasas ajustadas, con consulta por patología, territorio, sexo y grupo de edad. 2024 y 2025: años preliminares según el visor. | 2019–2025 | [Abrir](https://davidcarterc86-debug.github.io/visor-cancer-nuble/) | [GitHub](https://github.com/davidcarterc86-debug/visor-cancer-nuble) |
| Discapacidad · Registro Nacional | Discapacidad | Personas inscritas en el RND por comuna, sexo, edad, movilidad reducida y categorías de evaluación. Personas inscritas en el registro; no estimación de prevalencia. | Corte: septiembre de 2026 | [Abrir](https://davidcarterc86-debug.github.io/DISCAPACIDAD_NUBLE_2026/) | [GitHub](https://github.com/davidcarterc86-debug/DISCAPACIDAD_NUBLE_2026) |

## Precisiones

- Anuario: indicadores principales 2019–2025; vacunación 2021–2025; egresos 2022–2025; RND con corte septiembre 2026.
- SRP: años publicados 2019, 2020, 2021, 2023, 2024, 2025 y 2026; la ausencia de 2022 no equivale a ausencia de vacunación. El sitio muestra actualización al 27-10-2026.
- Neumo23: año 2026, corte visible al 27-10-2026; avance de registros sobre la nómina, no cobertura poblacional.
- Cardiovascular y cáncer: 2019–2025; se conserva la advertencia de información provisional/preliminar de 2024 y 2025 que presenta cada visor.
- Discapacidad: inscripción en el RND, no prevalencia poblacional. Es el dashboard independiente, también disponible dentro del Anuario.

## Exclusiones

`promocion-salud-nuble` no se incluye: no se confirmó un sitio publicado. La consulta de GitHub Pages respondió HTTP 404 y no se dispone de otro enlace confirmado. Tampoco se incluyen variantes locales, carpetas de trabajo, endpoints privados ni enlaces deducidos.

## Referencia y alcance

Maqueta leída: `D:/PORTAL/Portal_Visores_Nuble_mockup.html`. Se conservaron su estructura visual, colores, tipografía del sistema, encabezado, barra lateral y tarjetas. El buscador reconoce tildes y combina términos; los filtros se sincronizan con la navegación lateral. Los temas pueden superponerse: Anuario también aparece en mortalidad, inmunizaciones y discapacidad.

Todos los archivos creados pertenecen a `D:/DASHBOARDS/PORTAL`. No se modificaron repositorios ni dashboards existentes. Este portal todavía no se ha publicado.
