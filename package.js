const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

const publishDir = path.join('dist', 'publish');

exec('npm run build', () => {
  // create the publish directory
  fs.rmSync(publishDir, { recursive: true, force: true });
  fs.mkdirSync(publishDir);

  // package the dist directory in a single bundle
  packageBundle();

  // copy assets to the publish folder
  fs.copyFileSync('package-build.json', path.join(publishDir, 'package.json'));
  fs.copyFileSync('README.md', path.join(publishDir, 'README.md'));
});

function packageBundle() {
  const outDir = path.join('dist', 'ol-zoom-level');
  const runtime = fs.readdirSync(outDir).find(fn => fn.startsWith('runtime'));
  const polyfills = fs.readdirSync(outDir).find(fn => fn.startsWith('polyfills'));
  const main = fs.readdirSync(outDir).find(fn => fn.startsWith('main'));

  const outFile = path.join(publishDir, 'build.js');
  fs.appendFileSync(outFile, fs.readFileSync(path.join(outDir, runtime)));
  fs.appendFileSync(outFile, fs.readFileSync(path.join(outDir, polyfills)));
  fs.appendFileSync(outFile, fs.readFileSync(path.join(outDir, main)));
}
