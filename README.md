# ol-zoom-level

OpenLayers zoom level library. Adds a zoom level view on an OpenLayers map that displays the current zoom level.

![Preview](preview.png)

## Demo

You can test a fully functional working live demo [here](https://codepen.io/bampakoa/full/gKBKMB/).

## Installation

You can install ol-zoom-level using npm:

`npm install ol-zoom-level --save`

## Usage

To use ol-zoom-level, first you need to load OpenLayers javascript library along with its corresponsing CSS.

```
  <script src="https://openlayers.org/en/v4.6.5/build/ol.js"></script>
  <link rel="stylesheet" href="https://openlayers.org/en/v4.6.5/css/ol.css" type="text/css">
```
Then, load the ol-zoom-level library from `node_modules`

`<script src="./node_modules/ol-zoom-level/build.js"></script>`

Finally, in your existing OpenLayers application, add ol-zoom-level HTML element and pass the OpenLayers map object as a property. Here's a simple example:

```
const zoomLevel = document.createElement('ol-zoom-level');

// map is the OpenLayers map object
zoomLevel.map = map;

document.body.appendChild(zoomLevel);
```

> Please note that if you are creating the zoom level control synchronously with the creation of the map, you may need to introduce a timeout so that the map has enough time to instantiate.

Known Limitations
-----------------

Please check browser compatibility for custom elements as described in Angular official documentation [here](https://angular.io/guide/elements#browser-support-for-custom-elements)

