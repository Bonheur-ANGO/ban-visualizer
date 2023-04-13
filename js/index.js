import Map from 'ol/Map.js';
import Vector from 'ol/layer';
import TileLayer from 'ol/layer/Tile.js';
import Feature from 'ol/Feature';
import VectorTileLayer from 'ol/layer/VectorTile';
import View from 'ol/View.js';
import {Style} from 'ol/style';
import { fromLonLat } from 'ol/proj';
import { createLayer } from './layer/createLayer';
import { styleLayer } from './layer/styleLayer';
import Icon from 'ol/style/Icon';


//fichier de style PLAN IGN
let standard = 'https://wxs.ign.fr/static/vectorTiles/styles/PLAN.IGN/essentiels/standard.json';

//fond de carte
let plan_ign = createLayer('https://wxs.ign.fr/essentiels/geoportail/tms/1.0.0/PLAN.IGN/{z}/{x}/{y}.pbf', standard, 'plan_ign');


//tableau de couches
let layers = [plan_ign];


//création de la carte
var map = new Map({
  layers: layers,
  target: 'map',
  view: new View({
    maxZoom: 25,
    center: fromLonLat([1.8883335, 46.603354]),
    zoom: 5
  })
});

styleLayer(map.getLayers().array_)

let styles = {
  Point: new Style({
    image: new Icon({
      anchor: [0.5, 1],
      src: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-64.png',
    }),
  }),
};


function viewFeatureAndCenterMap(feature) {
  //map.handleMapBrowserEvent(transform(fromLonLat(coordinates), 'EPSG:4326', 'EPSG:3857'))

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
  let newVectorLayer = new VectorTileLayer({
    source: [element]
  })

  return newVectorLayer
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
            //console.log(element);
            viewFeatureAndCenterMap(element)
            ul.innerHTML = ""
            input.innerHTML = ""

            
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
          console.log(data);
          displayProposition(data)
        })
      }
    }).catch((error) => {
      return "Aucune adresse"
    })
    })
  
}


getFeaturesAndAutocomplete()
