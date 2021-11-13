import {
  UnfoldedMap,
  setViewState
} from '@unfolded/map-sdk';
//const mapSdk = require('@unfolded/map-sdk');

import * as config from './config';

// map settings
const mapTheme = 'light_streets'; // default map theme

/**
 * Creates new map instance.
 * @param {*} geoData GeoJSON data to display on the map.
 * @param {*} mapContainer Map view container.
 * @returns map html fragment to add to the cell output display.
 */
export function createMap(geoData, mapContainer) {
  let unfoldedMap = {};
  try {
    // create unfolded map instance
    console.log('unfolded.map:createMap(): creating map ...');
    const unfoldedMap = new UnfoldedMap({
      embed: true,
      appendToDocument: false,
      height: 600,
      onLoad: () => {
        console.log('unfolded.map:createMap(): map loaded!');
      }
    });
  }
  catch (error) {
    console.error('unfolded.map:createMap(): Error:\n', error);
  }

  return unfoldedMap;
}
