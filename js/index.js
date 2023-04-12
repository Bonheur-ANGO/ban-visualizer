import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
  ],
  view: new View({
    center: [46.603354,1.8883335],
    zoom: 2
  }),
});

const input = document.getElementById("adress")


function displayProposition() {
  input.addEventListener('input', () =>{
    let features = getFeatures()
    if (features !== null) {
      console.log(features);
    }
  })
  
}

async function getFeatures() {
  const response = await fetch(`https://api-adresse.data.gouv.fr/search/?q=${input.value}&autocomplete=1`);
  const jsonData = await response.json();
  return jsonData
}

displayProposition()



/*var requestURL = 'https://api-adresse.data.gouv.fr/search/?q=';
    var select = document.getElementById("selection");
    window.onload = function() {
        document.getElementById("adress").addEventListener("input", autocompleteAdresse, false);
    };



    function displaySelection(response) {
        if (Object.keys(response.features).length > 0) {
            select.style.display = "block";
            select.removeChild(select.firstChild);
            var ul = document.createElement('ul');
            select.appendChild(ul);
            response.features.forEach(function (element) {
                var li = document.createElement('li');
                var ligneAdresse = document.createElement('span');
                var infosAdresse = document.createTextNode(element.properties.postcode + ' ' + element.properties.city);
                ligneAdresse.innerHTML = element.properties.name;
                li.onclick = function () { selectAdresse(element); };
                li.appendChild(ligneAdresse);
                li.appendChild(infosAdresse);
                ul.appendChild(li);
            });
        } else {
            select.style.display = "none";
        }
    }


    function autocompleteAdresse() {
        var inputValue = document.getElementById("adresse").value;
        if (inputValue) {
            fetch(setQuery(inputValue))
                .then(function (response) {
                    response.json().then(function (data) {
                        displaySelection(data);
                    });
                });
        } else {
            select.style.display = "none";
        }
    };


    function selectAdresse(element) {
        document.getElementById("adresse").value = element.properties.name + "\r\n" + element.properties.postcode + " " + element.properties.city;
        select.style.display = "none";
        document.getElementById("resAdresse").value = element.properties.name;
        document.getElementById("CP").value = element.properties.postcode;
        document.getElementById("Ville").value = element.properties.city;
    }

    function setQuery(value) {
        return requestURL + value + "?type=housenumber&autocomplete=1";
    }*/