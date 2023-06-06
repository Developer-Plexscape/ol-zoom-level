# Welcome to ol-zoom-level 👋
[![Twitter: plexearth](https://img.shields.io/twitter/follow/plexearth.svg?style=social)](https://twitter.com/plexearth)

> OpenLayers zoom level library. Adds a zoom level view on an OpenLayers map that displays the current zoom level.

<img src="https://github.com/Developer-Plexscape/ol-zoom-level/blob/master/preview.png?raw=true" alt="Preview" />

## Install

```sh
npm install ol-zoom-level
```

## Usage

To use ol-zoom-level, first you need to load OpenLayers JavaScript library along with its corresponsing CSS.

```sh
<script src="https://openlayers.org/en/v4.6.5/build/ol.js"></script>
<link rel="stylesheet" href="https://openlayers.org/en/v4.6.5/css/ol.css" type="text/css">
```

Then, load the ol-zoom-level library from `node_modules`

```sh
<script src="./node_modules/ol-zoom-level/build.js"></script>
```

Finally, in your existing OpenLayers application, add `ol-zoom-level` HTML element and pass the OpenLayers `map` object as a property.

```sh
const zoomLevel = document.createElement('ol-zoom-level');

// map is the OpenLayers map object
zoomLevel.map = map;

document.body.appendChild(zoomLevel);
```

Please note that if you are creating the zoom level control synchronously with the creation of the map, you may need to introduce a timeout so that the map has enough time to instantiate.

## Author

👤 **Plexscape**

* Twitter: [@plexearth](https://twitter.com/plexearth)
* Github: [@Developer-Plexscape](https://github.com/Developer-Plexscape)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/Developer-Plexscape/ol-zoom-level/issues).
