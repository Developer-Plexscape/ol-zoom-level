const { exec } = require('child_process');
const { appendFileSync, copyFileSync, mkdirSync, readFileSync, readdirSync, rmSync } = require('fs');
const { join } = require('path');

const publishDir = join('dist', 'publish');

exec('npm run build', () => {
  // create the publish directory
  rmSync(publishDir, {
    recursive: true,
    force: true
  });
  mkdirSync(publishDir);

  // package the output directory in a single bundle
  packageBundle();

  // copy assets to the publish folder
  copyFileSync('package-build.json', join(publishDir, 'package.json'));
  copyFileSync('README.md', join(publishDir, 'README.md'));
});

function packageBundle() {
  const outDir = join('dist', 'ol-zoom-level');
  const outFiles = readdirSync(outDir).filter(file => file.match('main|polyfills|runtime'));
  const bundle = join(publishDir, 'build.js');
  outFiles.forEach(file => appendFileSync(bundle, readFileSync(join(outDir, file))));
}
