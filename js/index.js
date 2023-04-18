import Map from 'ol/Map.js';
import GeoJSON from 'ol/format/GeoJSON';
import VectorTileSource from 'ol/source/VectorTile';
import Vector, { VectorTile } from 'ol/layer';
import TileLayer from 'ol/layer/Tile.js';
import Feature from 'ol/Feature';
import VectorTileLayer from 'ol/layer/VectorTile';
import View from 'ol/View.js';
import {Circle, Fill, Stroke, Style} from 'ol/style';
import { fromLonLat } from 'ol/proj';
import { createLayer } from './layer/createLayer';
import { styleLayer } from './layer/styleLayer';
import Icon from 'ol/style/Icon';
import MVT from 'ol/format/MVT';
import WFS from 'ol/format/WFS';
import { createXYZ } from "ol/tilegrid"
import Papa from 'papaparse';
import pako from 'pako';


//fichier de style PLAN IGN
let standard = 'https://wxs.ign.fr/static/vectorTiles/styles/PLAN.IGN/essentiels/standard.json';

//fond de carte
let plan_ign = createLayer('https://wxs.ign.fr/essentiels/geoportail/tms/1.0.0/PLAN.IGN/{z}/{x}/{y}.pbf', standard, 'plan_ign', new MVT());




/*let vectorTileSource = new VectorTileSource({
  url: 'https://plateforme.adresse.data.gouv.fr/tiles/ban/{z}/{x}/{y}.pbf',
  format: new MVT(),
  tileGrid: createXYZ({
    minZoom: 1,
    maxZoom: 1
  })
});

let vectorTileLayer = new VectorTile({
  source: vectorTileSource,
  declutter: true,

  visible: true,
  style: function(feature) {
    if (feature.get('type') === 'housenumber') {
      return new Style({
        image: new Circle({
          radius: 5,
          fill: new Fill({
            color: 'red'
          }),
          stroke: new Stroke({
            color: 'black',
            width: 1
          })
        })
      });
    }
  }
});*/

//tableau de couches
let layers = [plan_ign];


//création de la carte
var map = new Map({
  layers: layers,
  target: 'map',
  view: new View({
    maxZoom: 25,
    center: fromLonLat([1.8883335, 46.603354]),
    zoom: 5  })
});

styleLayer(map.getLayers().array_)


//style couche ban
/*var style = new Style({
  image: new Circle({
      radius: 5,
      fill: new Fill({
          color: 'blue'
      }),
      stroke: new Stroke({
          color: 'white',
          width: 1
      })
  }),
  stroke: new Stroke({
      color: 'blue',
      width: 2
  }),
  fill: new Fill({
      color: 'rgba(0, 0, 255, 0.1)'
  })
});
let coucheWFS = createLayer('https://wxs.ign.fr/adresse/geoportail/wfs?service=WFS&version=2.0.0&request=GetCapabilities&typeName=adresse&outputFormat=application/json', null, 'BAN', new WFS(), style)
*/



//console.log(map.getLayers().array_);

/*let styles = {
  Point: new Style({
    image: new Icon({
      anchor: [0.5, 1],
      src: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-64.png',
    }),
  }),
};*/


function viewFeatureAndCenterMap(feature) {

  let view = map.getView()

  view.animate({
    center: fromLonLat(feature.geometry.coordinates),
    zoom: 13,
    duration: 500
  })
  
}

const input = document.getElementById("adress")
const proposition = document.getElementById("proposition");
let ul = document.getElementById('proposition-container');

function createMarker(element) {
  /*let newVectorLayer = new VectorTileLayer({
    source: [element]
  })*/

  return element
}





function displayProposition(response) {
  if (Object.keys(response.features).length > 0) {
      proposition.style.display = "block";
      
      
      ul.innerHTML = ""
      
      response.features.forEach( (element) => {
          let li = document.createElement('li');
          let ligneAdresse = document.createElement('span');
          let infosAdresse = document.createTextNode(element.properties.postcode + ' ' + element.properties.city);
          ligneAdresse.innerHTML = element.properties.name;
          //li.onclick = function () { propositionAdresse(element); };
          li.appendChild(ligneAdresse);
          li.appendChild(infosAdresse);
          ul.appendChild(li);

          li.addEventListener('click', () => {
            
            viewFeatureAndCenterMap(element)
            ul.innerHTML = ""
            input.innerHTML = ""

            /*let layer = new VectorTileLayer({
              source
            })*/
            //map.addLayer(newVectorLayer)
            //console.log(feature);
          })

      });
  } else {
      proposition.style.display = "none";
  }
}

function getFeaturesAndAutocomplete() {
  input.addEventListener('input', () =>{
    fetch(`https://api-adresse.data.gouv.fr/search/?q=${input.value}&autocomplete=1`)
    .then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          //console.log(data);
          displayProposition(data)
        })
      }
    }).catch((error) => {
      return "Aucune adresse"
    })
    })
  
}

let xhr = new XMLHttpRequest()

xhr.open("GET", "../adresses-01.csv.gz")
xhr.responseType = "arraybuffer"

xhr.onload = function() {
  
  if (this.status === 200) {
    // Décompresser le fichier gzip
    const csvData = pako.inflate(new Uint8Array(this.response), { to: 'string' });
    console.log(csv
      );    // Traiter les données CSV
    Papa.parse(csvData, {
      delimiter: ',',
      header: true,
      complete: function(results) {
        //console.log(results.data);
      }
    });
  }
};
xhr.send();

//getFeaturesAndAutocomplete()


