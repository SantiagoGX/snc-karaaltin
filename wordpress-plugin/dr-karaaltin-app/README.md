# Dr Karaaltin App (WordPress plugin)

This plugin serves the React app with **clean URLs** at the site root:

- `/`
- `/about`
- `/contact`
- etc.

## Build + copy into the plugin

From the repo root:

```bash
npm i
npm run build:wp-plugin
```

This will copy `dist/` into `wordpress-plugin/dr-karaaltin-app/dist/`.

## Install in WordPress

1. Zip the folder `wordpress-plugin/dr-karaaltin-app/` (so the zip root contains `dr-karaaltin-app.php`).
2. In WP Admin: Plugins → Add New → Upload Plugin → upload the zip → Activate.
3. Visit `https://YOUR_DOMAIN/`.
