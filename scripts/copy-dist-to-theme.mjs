import fs from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();
const distDir = path.join(repoRoot, "dist");
const themeAppDir = path.join(repoRoot, "wordpress-theme", "dr-karaaltin-theme", "app");

function copyDirRecursive(srcDir, destDir) {
  if (!fs.existsSync(srcDir)) {
    console.error(`No existe: ${srcDir}. Ejecuta primero: npm run build`);
    process.exit(1);
  }
  fs.mkdirSync(destDir, { recursive: true });
  for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);
    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

fs.rmSync(themeAppDir, { recursive: true, force: true });
copyDirRecursive(distDir, themeAppDir);
console.log(`Build copiada a: wordpress-theme/dr-karaaltin-theme/app/`);
