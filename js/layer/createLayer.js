import VectorTileSource from 'ol/source/VectorTile';
import VectorTileLayer from 'ol/layer/VectorTile';
import Projection from 'ol/proj/Projection';
import MVT from 'ol/format/MVT';
import olms, { applyStyle } from "ol-mapbox-style";

//fonction qui permet de créer des couches
export function createLayer(layerUrl, layerStyleurl = null, layerName) {
    let newLayer =  new VectorTileLayer({
      source: new VectorTileSource({
        format: new MVT(),
        url: layerUrl
      }),
      declutter: true,
      projection: new Projection({code:"EPSG:3857"}),
      visible: true,
      renderMode: "vector",
      srcName: layerName,
      styleUrl: layerStyleurl
    });

  
    return newLayer;
    }