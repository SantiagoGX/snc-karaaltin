# Tema WordPress – Dr. Karaaltin (React SPA)

Este tema hace que **toda la web** sea la aplicación React que está en este repo. WordPress solo sirve el HTML y los assets; la interfaz, rutas e i18n son la app.

## Estructura

```
dr-karaaltin-theme/
├── style.css       # Cabecera del tema (obligatoria en WP)
├── functions.php   # Reglas de reescritura y configuración
├── index.php       # Sirve index.html de la app con URLs corregidas
├── README.md
└── app/            # Aquí va la build (generada por npm run build:theme)
    ├── index.html
    └── assets/
```

La carpeta `app/` **no** viene en el repo; se crea al ejecutar `build:theme`.

## Cómo usar

### 1. Generar la build y copiarla al tema

En la raíz del proyecto (donde está `package.json`):

```bash
npm run build:theme
```

Esto hace `npm run build` y luego copia el contenido de `dist/` a `wordpress-theme/dr-karaaltin-theme/app/`.

### 2. Formulario de contacto en WordPress

Para que el formulario envíe a WordPress, antes del build crea `.env.production` con:

```env
VITE_CONTACT_FORM_URL=https://tudominio.com/wp-json/dr-karaaltin/v1/contact
```

Y en WordPress instala y activa el plugin **Dr. Karaaltin - Contact Form API** (está en `wordpress-plugin/dr-karaaltin-contact-form/`).

### 3. Subir el tema a WordPress

1. Comprime la carpeta **`dr-karaaltin-theme`** (incluyendo `app/` si ya hiciste `build:theme`) en un ZIP.
2. En WordPress: **Apariencia → Temas → Añadir nuevo → Subir tema** y sube el ZIP.
3. **Activar** el tema.

### 4. Permalinks

Tras activar el tema, ve a **Ajustes → Enlaces permanentes** y pulsa **Guardar cambios** (aunque no cambies nada). Así se aplican las reglas de reescritura y rutas como `/about`, `/procedures`, etc. mostrarán la app.

## Comportamiento

- Cualquier URL del sitio (salvo `wp-admin`, `wp-json`, etc.) sirve el mismo `index.html` de la app.
- El router de React (react-router) usa la barra de direcciones y muestra la página correspondiente.
- Los recursos (JS, CSS, imágenes) se cargan desde `wp-content/themes/dr-karaaltin-theme/app/`.

## Si la app no aparece

- Comprueba que exista `wordpress-theme/dr-karaaltin-theme/app/index.html` (ejecuta `npm run build:theme` y vuelve a subir el tema).
- Asegúrate de haber guardado los enlaces permanentes después de activar el tema.
