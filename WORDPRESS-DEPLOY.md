# Subir la app a WordPress y dejar el formulario de contacto funcional

## Lo más rápido (resumen)

1. **Build** de la app con la URL de WordPress para el formulario.
2. **Subir** la carpeta `dist/` a tu servidor (subdominio o carpeta).
3. **Instalar** el plugin en WordPress y configurar el enlace en el menú.

---

## Paso 1: Build para producción

En la raíz del proyecto:

```bash
npm run build
```

Para que el **formulario envíe a WordPress**, define la URL del endpoint antes del build. En la raíz del proyecto crea o edita `.env.production`:

```env
# Reemplaza por la URL real de tu WordPress
VITE_CONTACT_FORM_URL=https://tudominio.com/wp-json/dr-karaaltin/v1/contact
```

Luego vuelve a ejecutar:

```bash
npm run build
```

Si **no** defines `VITE_CONTACT_FORM_URL`, el formulario seguirá usando Supabase (necesitas `VITE_SUPABASE_URL` y `VITE_SUPABASE_PUBLISHABLE_KEY` en `.env.production`).

---

## Paso 2: Subir la app al servidor

- Se genera la carpeta **`dist/`** con todo el sitio estático (HTML, JS, CSS).

**Opción A – Subdominio (recomendado)**  
Ejemplo: `app.tudominio.com`

1. En tu hosting crea el subdominio (o el dominio que vaya a usar la app).
2. Por FTP/cPanel sube **todo el contenido** de `dist/` a la raíz de ese subdominio (no la carpeta `dist`, sino lo que hay dentro: `index.html`, `assets/`, etc.).

**Opción B – Subcarpeta del mismo dominio**  
Ejemplo: `tudominio.com/app/`

1. Crea una carpeta, por ejemplo `app`, en la raíz del sitio (junto a `wp-admin`, `wp-content`).
2. Sube el contenido de `dist/` dentro de `app/`.
3. Para que las rutas funcionen en `/app/`, hay que construir con base `/app/`. Crea o edita `.env.production`:

   ```env
   VITE_APP_BASENAME=/app/
   VITE_CONTACT_FORM_URL=https://tudominio.com/wp-json/dr-karaaltin/v1/contact
   ```

   En el proyecto, el `base` de Vite está en `vite.config.ts`; si usas subcarpeta, configúralo ahí como `base: '/app/'` y vuelve a hacer `npm run build`, luego sube de nuevo el contenido de `dist/` a la carpeta `app/`.

---

## Paso 3: Formulario de contacto en WordPress

### 3.1 Instalar el plugin en WordPress

1. En tu PC, la carpeta del plugin está en:  
   `wordpress-plugin/dr-karaaltin-contact-form/`
2. Comprímela en un ZIP (debe contener el archivo `dr-karaaltin-contact-form.php` y cualquier otro que haya dentro).
3. En WordPress: **Plugins → Añadir nuevo → Subir plugin** y sube el ZIP.
4. **Activar** el plugin.

### 3.2 Qué hace el plugin

- Crea el endpoint:  
  `https://tudominio.com/wp-json/dr-karaaltin/v1/contact`
- Acepta **POST** con JSON (nombre, apellido, email, teléfono, altura, peso, área de interés, mensaje).
- Envía un correo con esos datos al **email del administrador** de WordPress (Ajustes → General).

### 3.3 Probar el endpoint

Desde la consola del navegador o con curl:

```bash
curl -X POST https://tudominio.com/wp-json/dr-karaaltin/v1/contact \
  -H "Content-Type: application/json" \
  -d '{"firstName":"Test","lastName":"User","email":"test@example.com","phone":"","concerns":"Mensaje de prueba"}'
```

Debe responder `{"success":true}` y llegar un correo al admin de WordPress.

---

## Paso 4: Enlazar desde WordPress

- En **Apariencia → Menús** (o donde gestiones el menú), añade un enlace personalizado:
  - **URL:** la de tu app (ej. `https://app.tudominio.com` o `https://tudominio.com/app/`).
  - **Texto:** por ejemplo "Solicitar consulta" o "App".
- Guarda el menú.

---

## Resumen de URLs

| Qué              | URL |
|------------------|-----|
| App (donde subiste `dist/`) | `https://app.tudominio.com` o `https://tudominio.com/app/` |
| Endpoint del formulario     | `https://tudominio.com/wp-json/dr-karaaltin/v1/contact` |

El formulario de la app ya está preparado: si construyes con `VITE_CONTACT_FORM_URL` apuntando a esa URL, los envíos irán a WordPress y el correo llegará al admin.
