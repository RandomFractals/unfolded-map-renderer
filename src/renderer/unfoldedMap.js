import {
  UnfoldedMap
} from '@unfolded/map-sdk';

import * as config from './config';

// map settings
const mapTheme = 'light_streets'; // default map theme

/**
 * Creates new map instance.
 * @param {*} geoData GeoJSON data to display on the map.
 * @param {*} mapContainer Map view container.
 * @returns map instance to display.
 */
export function createMap(geoData, mapContainer) {
  let map;
  try {
    console.log('unfolded.map:createMap(): creating map ...');
    map = new UnfoldedMap({
      embed: false,
      appendToDocument: false,
      height: config.mapHeight,
      onLoad: () => {
        map.addDataset({
          uuid: 'geojson data',
          label: 'Geo Data',
          data: JSON.stringify(geoData)
        });
        console.log('unfolded.map:createMap(): map loaded!');
      }
    });
  }
  catch (error) {
    console.error('unfolded.map:createMap(): Error:\n', error);
  }
  map.render(mapContainer);
  return map;
}
