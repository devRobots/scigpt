# Generador de Artículos Científicos con IA

Este proyecto utiliza Next.js y TypeScript para crear una aplicación web capaz de generar artículos científicos. La inteligencia artificial, potenciada por Llama3, realiza scrapping de bases de datos de recursos científicos para encontrar los artículos más relevantes según un tema especificado por el usuario. Posteriormente, genera un paper completo que incluye marco teórico, abstract, referencias, y más.

## Características

- **Búsqueda Inteligente:** Capacidad de buscar en múltiples bases de datos científicas para encontrar artículos relevantes.
- **Generación Automática:** Utiliza Llama3 para leer y comprender los artículos, y luego genera un nuevo artículo científico basado en la información recopilada.
- **Personalización:** Permite a los usuarios especificar el tema de interés para generar artículos personalizados.
- **Exportación:** Los usuarios pueden exportar los artículos generados en formatos comunes como PDF o DOCX.

## Tecnologías Utilizadas

- **Next.js:** Para el framework de desarrollo web.
- **TypeScript:** Para añadir tipado estático al código, mejorando la mantenibilidad y el desarrollo.
- **Llama3:** Para potenciar la inteligencia artificial detrás de la generación de artículos.
- **Puppeteer o Cheerio:** Para el scrapping de bases de datos científicas.

## Cómo Empezar

Para ejecutar este proyecto en tu entorno local, sigue estos pasos:

1. Clona el repositorio:

```bash	
git clone https://github.com/tu-usuario/tu-repositorio.git
```

2. Instala las dependencias:

```bash
npm install
```

3. Ejecuta el proyecto:
    
```bash
npm run dev
```