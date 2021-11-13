
// rendered map hight
export const mapHeight = 480;

// map config template
export const mapConfigTemplate: any = {
  "config": {
    "mapState": {
      "bearing": 0,
      "dragRotate": false,
      "isSplit": false,
      "latitude": 10.5117765,
      "longitude": 34.269600000000004,
      "pitch": 0,
      "zoom": 2
    },
    "mapStyle": {
      "mapStyles": {},
      "styleType": "muted_night",
      "threeDBuildingColor": [
        9.665468314072013,
        17.18305478057247,
        31.1442867897876
      ],
      "topLayerGroups": {},
      "visibleLayerGroups": {
        "border": true,
        "building": true,
        "label": true,
        "land": true,
        "road": true,
        "water": true
      }
    },
    "visState": {
      "animationConfig": {
        "currentTime": null,
        "speed": 1
      },
      "filters": [],
      "interactionConfig": {
        "brush": {
          "enabled": false,
          "size": 0.5
        },
        "coordinate": {
          "enabled": false
        },
        "tooltip": {
          "enabled": true,
          "fieldsToShow": {}
        }
      },
      "layerBlending": "normal",
      "layers": [],
      "splitMaps": []
    }
  },
  "version": "v1"
};

export const mapboxToken: string = 'pk.eyJ1IjoiZGF0YXBpeHkiLCJhIjoiY2s1Mm10bHB1MThnbDNrdGVmemptd3J5eSJ9.xewq9dOWQLemerED1-qPXQ';

/**
 * Creates default map styles for the map.
 * @param {*} mapboxToken Mapbox token to use.
 * @returns 
 */
export function createMapStyles(mapboxToken: string) {
  const defaultLayerGroups: [] = [];
  return [
    {
      id: 'dark_streets',
      label: 'Dark Streets',
      url: 'mapbox://styles/mapbox/dark-v10',
      icon: `https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/-87.623177,41.881832,9.19,0,0/400x300?access_token=${mapboxToken}&logo=false&attribution=false`,
      layerGroups: defaultLayerGroups
    },
    {
      id: 'light_streets',
      label: 'Light Streets',
      url: 'mapbox://styles/mapbox/light-v10',
      icon: `https://api.mapbox.com/styles/v1/mapbox/light-v10/static/-87.623177,41.881832,9.19,0,0/400x300?access_token=${mapboxToken}&logo=false&attribution=false`,
      layerGroups: defaultLayerGroups
    },
    /* { // note: looks same as outdoors
      id: 'streets',
      label: 'Streets',
      url: 'mapbox://styles/mapbox/streets-v10',
      icon: `https://api.mapbox.com/styles/v1/mapbox/streets-v10/static/-87.623177,41.881832,9.19,0,0/400x300?access_token=${mapboxToken}&logo=false&attribution=false`,
      layerGroups: defaultLayerGroups
    }, */
    {
      id: 'outdoors',
      label: 'Outdoors',
      url: 'mapbox://styles/mapbox/outdoors-v10',
      icon: `https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/static/-87.623177,41.881832,9.19,0,0/400x300?access_token=${mapboxToken}&logo=false&attribution=false`,
      layerGroups: defaultLayerGroups
    },
    {
      id: 'satellite',
      label: 'Satellite',
      url: 'mapbox://styles/mapbox/satellite-v9',
      icon: `https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/-87.623177,41.881832,9.19,0,0/400x300?access_token=${mapboxToken}&logo=false&attribution=false`,
      layerGroups: defaultLayerGroups
    }
  ];
}
