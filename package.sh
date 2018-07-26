#!/bin/bash

# build using Angular CLI
ng build --prod

# create the publish directory
rm -rf dist/publish
mkdir dist/publish

# package the dist directory in a single bundle
cat dist/ol-zoom-level/{runtime,polyfills,scripts,main}.js > dist/publish/build.js

# copy assets to the publish folder
cp package-build.json dist/publish/package.json
cp README.md dist/publish/README.md
cp preview.png dist/publish/preview.png
