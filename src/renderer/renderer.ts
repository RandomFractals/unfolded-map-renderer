import type {
  RendererContext, 
  OutputItem
} from 'vscode-notebook-renderer';

import {OutputLoader} from './outputLoader';

// import renderer and map styles
import './styles/styles.css';
import './styles/mapbox-gl.css';
import './styles/uber-fonts.css';

// import map helper
const unfoldedMap = require('./unfoldedMap.js');

/**
 * Notebook cell output render info.
 */
 interface IRenderInfo {
  container: HTMLElement;
  mimeType: string;
  value: OutputItem;
  context: RendererContext<unknown>;
}

/**
 * Renders notebook cell output.
 * @param output Notebook cell output info to render.
 */
 export function render(output: IRenderInfo) {
  console.log(`unfolded.map:data:mimeType: ${output.mimeType}`);
  const outputLoader: OutputLoader = new OutputLoader(output.value, output.mimeType);
  let data: any = outputLoader.getData();
  if (data.features && data.features.length > 0) {  // has geometry features to display
    // create unfolded map and add it to notebook cell output display
    let mapContainer: HTMLDivElement = document.createElement('div');
    mapContainer.className = 'map-container';
    mapContainer = output.container.appendChild(mapContainer);
    try {
      // try to load geo data into unfolded map
      const map = unfoldedMap.createMap(data, mapContainer);
      mapContainer.appendChild(map.iframe);
    }
    catch(error: any) {
      console.error('unfolded.map:data: GeoJSON parse error:\n', error);
      showTextData(data, output);
    }
  }
  else {
    showTextData(data, output);
  }
}

if (module.hot) {
  module.hot.addDisposeHandler(() => {
    // cleanup or stash any state on renderer dispose
  });
}

/**
 * Displays text data.
 */
function showTextData(data: any, output: IRenderInfo): void {
  // create text output display nodes
  const pre = document.createElement('pre');
  pre.className = 'text-output';
  const code = document.createElement('code');
  if (typeof data !== 'string') {
    // stringify json data
    code.textContent = JSON.stringify(data, null, 2);
  }
  else {
    // show cell output text
    code.textContent = output.value.text();
  }
  pre.appendChild(code);
  output.container.appendChild(pre);
}
