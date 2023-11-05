# Challenge Onesta 🚀

Construir una pequeña API en TypeScript, usando SQLite que permita agregar:

- Frutas y sus distintos tipos de Variedades
- Cosechas
- Agricultores y sus distintos Campos
- Clientes

⚡️ También debe incluir una ruta que al enviarle un CSV lo lea y cargue su data dentro de la DDBB.

- El mail debe ser único dentro de los agricultores.
- El mail debe ser único dentro de los clientes.
- La combinación Nombre Ubicación de los campos debe ser única.
- El nombre de la fruta debe ser única.
- La combinación fruta variedad debe ser única.

Se valorará:

- Orden de código
- Orden de commits
- Validaciones de schema
- Separación de concerns
- Manejo de errores

## Cómo y porqué tomé las decisiones que tomé ⚒️

Para construir esta API decidí usar un framework como NestJS que permite moduralizar y escalar la aplicación, al mismo tiempo que disponemos de inyección de dependencias, decoradores y metadata. Adicionalmente implementé Clean Architecture (Domain-Drive Design específicamente) con la idea de que esta aplicación pueda escalar y volverse aún más compleja y centrada en el dominio. Ambas herramientas combinadas nos ayudan a modelar una aplicación sólida y robusta enfocada en el dominio que, según entiendo, es lo que esta API necesitaría en un futuro.-