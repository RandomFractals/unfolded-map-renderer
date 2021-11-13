# unfolded-map-renderer

[![Apache-2.0 License](https://img.shields.io/badge/license-Apache2-brightgreen.svg)](http://opensource.org/licenses/Apache-2.0)
<a href='https://ko-fi.com/dataPixy' target='_blank' title='support: https://ko-fi.com/dataPixy'>
  <img height='24' style='border:0px;height:20px;' src='https://az743702.vo.msecnd.net/cdn/kofi3.png?v=2' alt='https://ko-fi.com/dataPixy' />
</a>

<h1 align="center">
  <img width="64" height="64" src="docs/images/notebook.png" />
  <img width="64" height="64" src="docs/images/plus.png" />
  <img width="64" height="64" src="resources/icons/map.png" />
  <img width="64" height="64" src="docs/images/equals.png" />
  <img width="64" height="64" src="docs/images/heart.png" /> 
  <br />
  Unfolded Map 🗺️ Notebook 📓 Renderer for VSCode
</h1>

See [Geo Data Viewer](https://github.com/RandomFractals/geo-data-viewer) 🗺️ vscode extension for advanced [Geo Data Analytics](https://marketplace.visualstudio.com/items?itemName=RandomFractalsInc.geo-data-viewer) with [kepler.gl](https://kepler.gl/)

## Unfolded Map 🗺️ Renderer

Unfolded Map 🗺️ Notebook 📓 Renderer uses [Unfolded Map SDK](https://docs.unfolded.ai/map-sdk/javascript-map-sdk) JavaScript library for interactive preview of Geo datasets loaded in [VSCode Notebooks](https://code.visualstudio.com/api/extension-guides/notebook) 📚

![Unfolded Map 🗺️ Notebook 📓 Renderer](https://github.com/RandomFractals/unfolded-map-renderer/blob/main/docs/images/unfolded-map-notebook-renderer.png?raw=true 
 "Unfolded Map 🗺️ Notebook 📓 Renderer")

# Features

- View Location data from `CSV`, `XML`, `JSON`, and [`GeoJSON`](https://www.rfc-editor.org/rfc/rfc7946.html) Notebook 📓 cell ⌗ data output on the [Unfolded Studio](https://kepler.gl) map 🗺️
- View `JSON`, `CSV`, and `XML` data without Geo Location information in `JSON` format in a scrollable text container with [`code pre-wrap`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code) for a quick copy/paste to other places:

![Unfolded Map 🗺️ Renderer Text Output](https://github.com/RandomFractals/unfolded-map-renderer/blob/main/docs/images/unfolded-map-text-output.png?raw=true 
 "Unfolded Map 🗺️ Renderer Text Output")

# Supported Data Formats

Unfolded Map 🗺️ Notebook 📓 Renderer supports loading Location data from the following output formats:

| Data Mime Type | Location Data | Geo Location Processing Description |
| --- | --- | --- |
| `application/geo+json` | [Point](https://www.rfc-editor.org/rfc/rfc7946.html#section-3.1.2) | `GeoJSON` Location `Point` coordinates are displayed using [Unfolded Map 🗺️ SDK](https://docs.unfolded.ai/map-sdk/javascript-map-sdk) JavaScript library. See our [unfoldedMap.js](https://github.com/RandomFractals/unfolded-map-renderer/blob/main/src/renderer/unfoldedMap.js) for more info about that setup. |
| `application/json` | Objects that contain geo location property pairs ending with: `latitude`/`longitude`, `lat/lng`, or `lat/lng`| Flat `JSON` data objects and arrays are processed by our custom [`GeoConverter`](https://github.com/RandomFractals/unfolded-map-renderer/blob/main/src/renderer/geoConverter.ts) to extract Location information and covert loaded dataset to `GeoJSON` for display on the map. |
| `text/csv` | `CSV` data with column names in the 1st header row and columns ending with: `latitude`/`longitude`, `lat/lng`, or `lat/lng` | `CSV` data is parsed with [d3-dsv](https://github.com/d3/d3-dsv) JavaScript library and converted to flat `JSON` data array and then to `GeoJSON` with our [`GeoConverter`](https://github.com/RandomFractals/unfolded-map-renderer/blob/main/src/renderer/geoConverter.ts) to display locations on the map. |
| `application/xml` or `text/xml` | `XML` data with root node children that contain attributes ending with: `latitude`/`longitude`, `lat/lng`, or `lat/lng` | `XML` data is parsed with [fast-xml-parser](https://github.com/NaturalIntelligence/fast-xml-parser) to load it into `JSON` data objects array and then processed with our [`GeoConverter`](https://github.com/RandomFractals/unfolded-map-renderer/blob/main/src/renderer/geoConverter.ts) to display locations on the map. `XML` data support is very alpha and experimental at this point, and might be removed later. |
| `application/vnd.code.notebook.stdout` or `text/plain` | Location data as `string` in `CSV`, `XML`, `JSON` or `GeoJSON` data format as described above | Text data typically comes from display and [`console.log()`](https://developer.mozilla.org/en-US/docs/Web/API/console/log) instructions in vscode notebooks. We try to parse text as `JSON` with [`JSON.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse), as `CSV` with [d3-dsv.csvParse()](https://github.com/d3/d3-dsv#csvParse), and as `XML` with [fast-xml-parser](https://github.com/NaturalIntelligence/fast-xml-parser). If those parse methods fail, or provided notebook cell text output contains no location data we can extract, we display text output in a custom scrollable text container with [`code pre-wrap`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code) for a quick copy/paste to other places. Otherwise, loaded data is converted to `GeoJSON` with our [`GeoConverter`](https://github.com/RandomFractals/unfolded-map-renderer/blob/main/src/renderer/geoConverter.ts) for locations display on the map. |

# 🗺️ Examples

Install and use [Data Table 🈸 for Notebooks 📚](https://marketplace.visualstudio.com/items?itemName=RandomFractalsInc.vscode-data-table)  built-in [Notebook 📓 Examples](https://github.com/RandomFractals/vscode-data-table#-examples) to view Unfolded Map 🗺️ with provided sample [Geo datasets](https://github.com/RandomFractals/vscode-data-table/tree/main/data). You can access built-in Data Table 🈸 Notebook 📓 Examples via `Data Table: Notebook Examples` command from `View -> Command Palette...`

![Data Table 🈸 Notebook Examples](https://github.com/RandomFractals/keplergl-notebook-renderer/blob/main/docs/images/data-table-notebook-examples.png?raw=true 
 "Data Table 🈸 Notebook Examples")

### REST Book Example

1. Install [REST Book](https://marketplace.visualstudio.com/items?itemName=tanhakabir.rest-book) 📓 vscode extension

2. Load [World Cities](https://github.com/RandomFractals/unfolded-map-renderer/blob/main/notebooks/world-cities.restbook) REST Book 📓

3. Run All cells ⌗

4. Click on `...` in the gutter of `GET` data output and change it to KeplerGL Map 🗺️ renderer:

![World Cities REST Book 📓](https://github.com/RandomFractals/unfolded-map-renderer/blob/main/docs/images/unfolded-map-notebook-renderer.png?raw=true 
 "World Cities REST Book 📓")

# Recommended Extensions

Recommended extensions for working with Interactive Notebooks 📚 data 🈸 charts 📈 and geo 🗺️ data formats in [VSCode](https://code.visualstudio.com/):

| Extension | Description |
| --- | --- |
| [REST Book](https://marketplace.visualstudio.com/items?itemName=tanhakabir.rest-book) | Notebook extension for running REST queries |
| [TypeScript Notebooks](https://marketplace.visualstudio.com/items?itemName=donjayamanne.typescript-notebook) | TypeScript with [Jupyter](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter) Notebooks 📚 |
| [.NET Interactive Notebooks](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.dotnet-interactive-vscode) | .NET Interactive [Jupyter](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter) Notebooks 📚 |
| [Pyolite](https://marketplace.visualstudio.com/items?itemName=joyceerhl.vscode-pyolite) 🐍 | [Pyodide](https://pyodide.org) 🐍 kernel for [JupyterLite](https://github.com/jtpio/jupyterlite) Notebooks 📚 |
| [Observable JS](https://marketplace.visualstudio.com/items?itemName=GordonSmith.observable-js) | Observable JS compiler with [Observable](https://observablehq.com/@observablehq/observable-for-jupyter-users?collection=@observablehq/observable-for-jupyter-users) `js` and `md` code outline and previews. |
| [JS Notebook 📓 Inspector 🕵️](https://marketplace.visualstudio.com/items?itemName=RandomFractalsInc.js-notebook-inspector) | Provides Interactive Preview of [Observable JS Notebooks](https://observablehq.com/documentation#notebook-fundamentals) 📚, Notebook 📓 nodes ⎇ & cells ⌗ source code |
| [Data Preivew 🈸](https://marketplace.visualstudio.com/items?itemName=RandomFractalsInc.vscode-data-preview) | Data Preview 🈸 extension for importing 📤 viewing 🔎 slicing 🔪 dicing 🎲 charting 📊 & exporting 📥 large JSON array/config, YAML, Apache Arrow, Avro & Excel data files |
| [Geo Data Viewer 🗺️](https://marketplace.visualstudio.com/items?itemName=RandomFractalsInc.geo-data-viewer) | [kepler.gl](https://kepler.gl) Geo Data Analytics tool to gen. some snazzy 🗺️s  w/0 `Py` 🐍 `pyWidgets` ⚙️ `pandas` 🐼 or `react` ⚛️ |
| [Vega Viewer 📈](https://marketplace.visualstudio.com/items?itemName=RandomFractalsInc.vscode-vega-viewer) | Provides Interactive Preview of Vega & Vega-Lite maps 🗺️ & graphs 📈 |
| [DeltaXML XPath Notebook 📓](https://marketplace.visualstudio.com/items?itemName=deltaxml.xpath-notebook) | XPath 3.1 Notebook for Visual Studio Code |
| [GeoJSON Snippets](https://marketplace.visualstudio.com/items?itemName=analytic-signal.snippets-geojson) | Create geospatial objects using GeoJSON snippets |
| [Data Table 🈸](https://marketplace.visualstudio.com/items?itemName=RandomFractalsInc.vscode-data-table)| Data Table 🈸 for Notebook 📓 cell ⌗ data outputs |

# Dev Log

See [#UnfoldedMapRenderer 🗺️ tag on Twitter](https://twitter.com/hashtag/UnfoldedMapRenderer?src=hashtag_click&f=live) for the latest and greatest updates on this vscode extension and what's in store next.

# Dev Build

```bash
$ git clone https://github.com/RandomFractals/unfolded-map-renderer
$ cd unfolded-map-renderer
$ npm install
$ npm run compile
$ code .
```
`F5` to launch Unfolded Map 🗺️ Renderer extension vscode debug session.

||

```bash
unfolded-map-renderer>vsce package
```
to generate `VSIX` Unfolded Map 🗺️ Renderer extension package with [vsce](https://code.visualstudio.com/api/working-with-extensions/publishing-extension#vsce) from our latest for local dev install in vscode.

# Contributions

Any and all test, code or feedback contributions are welcome. 

Open an [issue](https://github.com/RandomFractals/unfolded-map-renderer/issues) or create a pull request to make this Unfolded Map 🗺️ Renderer vscode extension work better for all.

# Backers

<a href='https://ko-fi.com/dataPixy' target='_blank'>
  <img height='36' style='border:0px;height:36px;' border='0'
    src='https://az743702.vo.msecnd.net/cdn/kofi3.png?v=2' 
    alt='support me on ko-fi.com' />
</a>
