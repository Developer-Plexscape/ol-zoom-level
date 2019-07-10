#!/bin/bash

# build using Angular CLI
ng build --prod

# create the publish directory
rm -rf dist/publish
mkdir dist/publish

# package the dist directory in a single bundle
cat dist/ol-zoom-level/{runtime-es5,polyfills-es5,main-es5}.js > dist/publish/build-es5.js
cat dist/ol-zoom-level/{runtime-es2015,polyfills-es2015,main-es2015}.js > dist/publish/build-es2015.js

# copy assets to the publish folder
cp package-build.json dist/publish/package.json
cp README.md dist/publish/README.md
cp preview.png dist/publish/preview.png
