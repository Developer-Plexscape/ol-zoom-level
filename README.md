# Welcome to ol-zoom-level 👋
![Version](https://img.shields.io/badge/version-1.0.4-blue.svg?cacheSeconds=2592000)
[![Twitter: plexearth](https://img.shields.io/twitter/follow/plexearth.svg?style=social)](https://twitter.com/plexearth)

> OpenLayers zoom level library. Adds a zoom level view on an OpenLayers map that displays the current zoom level.

## Install

```sh
npm install ol-zoom-level
```

## Usage

To use ol-zoom-level, first you need to load OpenLayers javascript library along with its corresponsing CSS.

```sh
<script src="https://openlayers.org/en/v4.6.5/build/ol.js"></script>
<link rel="stylesheet" href="https://openlayers.org/en/v4.6.5/css/ol.css" type="text/css">
```

Then, load the respective version of ol-zoom-level library (either ES5 or ES2015)

```sh
<script src="./node_modules/ol-zoom-level/build-es5.js"></script>
<script src="./node_modules/ol-zoom-level/build-es2015.js"></script>
```

Finally, in your existing OpenLayers application, add ol-zoom-level HTML element and pass the OpenLayers map object as a property.

```sh
const zoomLevel = document.createElement('ol-zoom-level');

// map is the OpenLayers map object
zoomLevel.map = map;

document.body.appendChild(zoomLevel);
```

Please note that if you are creating the zoom level control synchronously with the creation of the map, you may need to introduce a timeout so that the map has enough time to instantiate.

## Run tests

```sh
npm test
```

## Author

👤 **Plexscape**

* Twitter: [@plexearth](https://twitter.com/plexearth)
* Github: [@Developer-Plexscape](https://github.com/Developer-Plexscape)

## Known Limitations

Please check browser compatibility for custom elements as described in Angular official documentation [here](https://angular.io/guide/elements#browser-support-for-custom-elements)
