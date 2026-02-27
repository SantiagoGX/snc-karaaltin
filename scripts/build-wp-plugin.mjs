import fs from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();

const viteDistDir = path.join(repoRoot, "dist");
const pluginDir = path.join(repoRoot, "wordpress-plugin", "dr-karaaltin-app");
const pluginDistDir = path.join(pluginDir, "dist");

function copyDirRecursive(srcDir, destDir) {
  fs.mkdirSync(destDir, { recursive: true });
  for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);
    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else if (entry.isFile()) {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

if (!fs.existsSync(viteDistDir)) {
  console.error(`Missing Vite build output: ${viteDistDir}`);
  console.error("Run `npm run build:wp` first.");
  process.exit(1);
}

if (!fs.existsSync(pluginDir)) {
  console.error(`Missing plugin directory: ${pluginDir}`);
  process.exit(1);
}

fs.rmSync(pluginDistDir, { recursive: true, force: true });
copyDirRecursive(viteDistDir, pluginDistDir);

console.log(`Copied ${viteDistDir} -> ${pluginDistDir}`);
