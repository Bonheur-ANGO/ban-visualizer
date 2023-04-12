// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"jy52z":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "ee62429a5d9dacde";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1Z4Rq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _mapJs = require("ol/Map.js");
var _mapJsDefault = parcelHelpers.interopDefault(_mapJs);
var _osm = require("ol/source/OSM");
var _osmDefault = parcelHelpers.interopDefault(_osm);
var _tileJs = require("ol/layer/Tile.js");
var _tileJsDefault = parcelHelpers.interopDefault(_tileJs);
var _viewJs = require("ol/View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
const map = new (0, _mapJsDefault.default)({
    target: "map",
    layers: [
        new (0, _tileJsDefault.default)({
            source: new (0, _osmDefault.default)()
        })
    ],
    view: new (0, _viewJsDefault.default)({
        center: [
            46.603354,
            1.8883335
        ],
        zoom: 2
    })
});
const input = document.getElementById("adress");
function displayProposition() {
    input.addEventListener("input", ()=>{
        let features = getFeatures();
        if (features !== null) console.log(features);
    });
}
async function getFeatures() {
    const response = await fetch(`https://api-adresse.data.gouv.fr/search/?q=${input.value}&autocomplete=1`);
    const jsonData = await response.json();
    return jsonData;
}
displayProposition() /*var requestURL = 'https://api-adresse.data.gouv.fr/search/?q=';
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
    }*/ ;

},{"ol/Map.js":"14YFC","ol/layer/Tile.js":"3ytzs","ol/View.js":"8xbkS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","ol/source/OSM":"dmxOv"}],"14YFC":[function(require,module,exports) {
/**
 * @module ol/Map
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _objectJs = require("./Object.js");
var _objectJsDefault = parcelHelpers.interopDefault(_objectJs);
var _collectionJs = require("./Collection.js");
var _collectionJsDefault = parcelHelpers.interopDefault(_collectionJs);
var _collectionEventTypeJs = require("./CollectionEventType.js");
var _collectionEventTypeJsDefault = parcelHelpers.interopDefault(_collectionEventTypeJs);
var _compositeJs = require("./renderer/Composite.js");
var _compositeJsDefault = parcelHelpers.interopDefault(_compositeJs);
var _eventTypeJs = require("./events/EventType.js");
var _eventTypeJsDefault = parcelHelpers.interopDefault(_eventTypeJs);
var _layerJs = require("./layer/Layer.js");
var _layerJsDefault = parcelHelpers.interopDefault(_layerJs);
var _groupJs = require("./layer/Group.js");
var _groupJsDefault = parcelHelpers.interopDefault(_groupJs);
var _mapBrowserEventJs = require("./MapBrowserEvent.js");
var _mapBrowserEventJsDefault = parcelHelpers.interopDefault(_mapBrowserEventJs);
var _mapBrowserEventHandlerJs = require("./MapBrowserEventHandler.js");
var _mapBrowserEventHandlerJsDefault = parcelHelpers.interopDefault(_mapBrowserEventHandlerJs);
var _mapBrowserEventTypeJs = require("./MapBrowserEventType.js");
var _mapBrowserEventTypeJsDefault = parcelHelpers.interopDefault(_mapBrowserEventTypeJs);
var _mapEventJs = require("./MapEvent.js");
var _mapEventJsDefault = parcelHelpers.interopDefault(_mapEventJs);
var _mapEventTypeJs = require("./MapEventType.js");
var _mapEventTypeJsDefault = parcelHelpers.interopDefault(_mapEventTypeJs);
var _mapPropertyJs = require("./MapProperty.js");
var _mapPropertyJsDefault = parcelHelpers.interopDefault(_mapPropertyJs);
var _objectEventTypeJs = require("./ObjectEventType.js");
var _objectEventTypeJsDefault = parcelHelpers.interopDefault(_objectEventTypeJs);
var _eventTypeJs1 = require("./pointer/EventType.js");
var _eventTypeJsDefault1 = parcelHelpers.interopDefault(_eventTypeJs1);
var _eventTypeJs2 = require("./render/EventType.js");
var _eventTypeJsDefault2 = parcelHelpers.interopDefault(_eventTypeJs2);
var _tileQueueJs = require("./TileQueue.js");
var _tileQueueJsDefault = parcelHelpers.interopDefault(_tileQueueJs);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _viewHintJs = require("./ViewHint.js");
var _viewHintJsDefault = parcelHelpers.interopDefault(_viewHintJs);
var _hasJs = require("./has.js");
var _functionsJs = require("./functions.js");
var _transformJs = require("./transform.js");
var _assertsJs = require("./asserts.js");
var _extentJs = require("./extent.js");
var _defaultsJs = require("./control/defaults.js");
var _defaultsJs1 = require("./interaction/defaults.js");
var _arrayJs = require("./array.js");
var _projJs = require("./proj.js");
var _utilJs = require("./util.js");
var _sizeJs = require("./size.js");
var _eventsJs = require("./events.js");
var _domJs = require("./dom.js");
var _consoleJs = require("./console.js");
/**
 * State of the current frame. Only `pixelRatio`, `time` and `viewState` should
 * be used in applications.
 * @typedef {Object} FrameState
 * @property {number} pixelRatio The pixel ratio of the frame.
 * @property {number} time The time when rendering of the frame was requested.
 * @property {import("./View.js").State} viewState The state of the current view.
 * @property {boolean} animate Animate.
 * @property {import("./transform.js").Transform} coordinateToPixelTransform CoordinateToPixelTransform.
 * @property {import("rbush").default} declutterTree DeclutterTree.
 * @property {null|import("./extent.js").Extent} extent Extent.
 * @property {import("./extent.js").Extent} [nextExtent] Next extent during an animation series.
 * @property {number} index Index.
 * @property {Array<import("./layer/Layer.js").State>} layerStatesArray LayerStatesArray.
 * @property {number} layerIndex LayerIndex.
 * @property {import("./transform.js").Transform} pixelToCoordinateTransform PixelToCoordinateTransform.
 * @property {Array<PostRenderFunction>} postRenderFunctions PostRenderFunctions.
 * @property {import("./size.js").Size} size Size.
 * @property {TileQueue} tileQueue TileQueue.
 * @property {!Object<string, Object<string, boolean>>} usedTiles UsedTiles.
 * @property {Array<number>} viewHints ViewHints.
 * @property {!Object<string, Object<string, boolean>>} wantedTiles WantedTiles.
 * @property {string} mapId The id of the map.
 * @property {Object<string, boolean>} renderTargets Identifiers of previously rendered elements.
 */ /**
 * @typedef {function(Map, ?FrameState): any} PostRenderFunction
 */ /**
 * @typedef {Object} AtPixelOptions
 * @property {undefined|function(import("./layer/Layer.js").default<import("./source/Source").default>): boolean} [layerFilter] Layer filter
 * function. The filter function will receive one argument, the
 * {@link module:ol/layer/Layer~Layer layer-candidate} and it should return a boolean value.
 * Only layers which are visible and for which this function returns `true`
 * will be tested for features. By default, all visible layers will be tested.
 * @property {number} [hitTolerance=0] Hit-detection tolerance in css pixels. Pixels
 * inside the radius around the given position will be checked for features.
 * @property {boolean} [checkWrapped=true] Check-Wrapped Will check for wrapped geometries inside the range of
 *   +/- 1 world width. Works only if a projection is used that can be wrapped.
 */ /**
 * @typedef {Object} MapOptionsInternal
 * @property {Collection<import("./control/Control.js").default>} [controls] Controls.
 * @property {Collection<import("./interaction/Interaction.js").default>} [interactions] Interactions.
 * @property {HTMLElement|Document} keyboardEventTarget KeyboardEventTarget.
 * @property {Collection<import("./Overlay.js").default>} overlays Overlays.
 * @property {Object<string, *>} values Values.
 */ /**
 * @typedef {import("./ObjectEventType").Types|'change:layergroup'|'change:size'|'change:target'|'change:view'} MapObjectEventTypes
 */ /***
 * @template Return
 * @typedef {import("./Observable").OnSignature<import("./Observable").EventTypes, import("./events/Event.js").default, Return> &
 *    import("./Observable").OnSignature<MapObjectEventTypes, import("./Object").ObjectEvent, Return> &
 *    import("./Observable").OnSignature<import("./MapBrowserEventType").Types, import("./MapBrowserEvent").default, Return> &
 *    import("./Observable").OnSignature<import("./MapEventType").Types, import("./MapEvent").default, Return> &
 *    import("./Observable").OnSignature<import("./render/EventType").MapRenderEventTypes, import("./render/Event").default, Return> &
 *    import("./Observable").CombinedOnSignature<import("./Observable").EventTypes|MapObjectEventTypes|
 *      import("./MapBrowserEventType").Types|import("./MapEventType").Types|
 *      import("./render/EventType").MapRenderEventTypes, Return>} MapEventHandler
 */ /**
 * Object literal with config options for the map.
 * @typedef {Object} MapOptions
 * @property {Collection<import("./control/Control.js").default>|Array<import("./control/Control.js").default>} [controls]
 * Controls initially added to the map. If not specified,
 * {@link module:ol/control/defaults.defaults} is used.
 * @property {number} [pixelRatio=window.devicePixelRatio] The ratio between
 * physical pixels and device-independent pixels (dips) on the device.
 * @property {Collection<import("./interaction/Interaction.js").default>|Array<import("./interaction/Interaction.js").default>} [interactions]
 * Interactions that are initially added to the map. If not specified,
 * {@link module:ol/interaction/defaults.defaults} is used.
 * @property {HTMLElement|Document|string} [keyboardEventTarget] The element to
 * listen to keyboard events on. This determines when the `KeyboardPan` and
 * `KeyboardZoom` interactions trigger. For example, if this option is set to
 * `document` the keyboard interactions will always trigger. If this option is
 * not specified, the element the library listens to keyboard events on is the
 * map target (i.e. the user-provided div for the map). If this is not
 * `document`, the target element needs to be focused for key events to be
 * emitted, requiring that the target element has a `tabindex` attribute.
 * @property {Array<import("./layer/Base.js").default>|Collection<import("./layer/Base.js").default>|LayerGroup} [layers]
 * Layers. If this is not defined, a map with no layers will be rendered. Note
 * that layers are rendered in the order supplied, so if you want, for example,
 * a vector layer to appear on top of a tile layer, it must come after the tile
 * layer.
 * @property {number} [maxTilesLoading=16] Maximum number tiles to load
 * simultaneously.
 * @property {number} [moveTolerance=1] The minimum distance in pixels the
 * cursor must move to be detected as a map move event instead of a click.
 * Increasing this value can make it easier to click on the map.
 * @property {Collection<import("./Overlay.js").default>|Array<import("./Overlay.js").default>} [overlays]
 * Overlays initially added to the map. By default, no overlays are added.
 * @property {HTMLElement|string} [target] The container for the map, either the
 * element itself or the `id` of the element. If not specified at construction
 * time, {@link module:ol/Map~Map#setTarget} must be called for the map to be
 * rendered. If passed by element, the container can be in a secondary document.
 * **Note:** CSS `transform` support for the target element is limited to `scale`.
 * @property {View|Promise<import("./View.js").ViewOptions>} [view] The map's view.  No layer sources will be
 * fetched unless this is specified at construction time or through
 * {@link module:ol/Map~Map#setView}.
 */ /**
 * @param {import("./layer/Base.js").default} layer Layer.
 */ function removeLayerMapProperty(layer) {
    if (layer instanceof (0, _layerJsDefault.default)) {
        layer.setMapInternal(null);
        return;
    }
    if (layer instanceof (0, _groupJsDefault.default)) layer.getLayers().forEach(removeLayerMapProperty);
}
/**
 * @param {import("./layer/Base.js").default} layer Layer.
 * @param {Map} map Map.
 */ function setLayerMapProperty(layer, map) {
    if (layer instanceof (0, _layerJsDefault.default)) {
        layer.setMapInternal(map);
        return;
    }
    if (layer instanceof (0, _groupJsDefault.default)) {
        const layers = layer.getLayers().getArray();
        for(let i = 0, ii = layers.length; i < ii; ++i)setLayerMapProperty(layers[i], map);
    }
}
/**
 * @classdesc
 * The map is the core component of OpenLayers. For a map to render, a view,
 * one or more layers, and a target container are needed:
 *
 *     import Map from 'ol/Map.js';
 *     import View from 'ol/View.js';
 *     import TileLayer from 'ol/layer/Tile.js';
 *     import OSM from 'ol/source/OSM.js';
 *
 *     const map = new Map({
 *       view: new View({
 *         center: [0, 0],
 *         zoom: 1,
 *       }),
 *       layers: [
 *         new TileLayer({
 *           source: new OSM(),
 *         }),
 *       ],
 *       target: 'map',
 *     });
 *
 * The above snippet creates a map using a {@link module:ol/layer/Tile~TileLayer} to
 * display {@link module:ol/source/OSM~OSM} OSM data and render it to a DOM
 * element with the id `map`.
 *
 * The constructor places a viewport container (with CSS class name
 * `ol-viewport`) in the target element (see `getViewport()`), and then two
 * further elements within the viewport: one with CSS class name
 * `ol-overlaycontainer-stopevent` for controls and some overlays, and one with
 * CSS class name `ol-overlaycontainer` for other overlays (see the `stopEvent`
 * option of {@link module:ol/Overlay~Overlay} for the difference). The map
 * itself is placed in a further element within the viewport.
 *
 * Layers are stored as a {@link module:ol/Collection~Collection} in
 * layerGroups. A top-level group is provided by the library. This is what is
 * accessed by `getLayerGroup` and `setLayerGroup`. Layers entered in the
 * options are added to this group, and `addLayer` and `removeLayer` change the
 * layer collection in the group. `getLayers` is a convenience function for
 * `getLayerGroup().getLayers()`. Note that {@link module:ol/layer/Group~LayerGroup}
 * is a subclass of {@link module:ol/layer/Base~BaseLayer}, so layers entered in the
 * options or added with `addLayer` can be groups, which can contain further
 * groups, and so on.
 *
 * @fires import("./MapBrowserEvent.js").MapBrowserEvent
 * @fires import("./MapEvent.js").MapEvent
 * @fires import("./render/Event.js").default#precompose
 * @fires import("./render/Event.js").default#postcompose
 * @fires import("./render/Event.js").default#rendercomplete
 * @api
 */ class Map extends (0, _objectJsDefault.default) {
    /**
   * @param {MapOptions} [options] Map options.
   */ constructor(options){
        super();
        options = options || {};
        /***
     * @type {MapEventHandler<import("./events").EventsKey>}
     */ this.on;
        /***
     * @type {MapEventHandler<import("./events").EventsKey>}
     */ this.once;
        /***
     * @type {MapEventHandler<void>}
     */ this.un;
        const optionsInternal = createOptionsInternal(options);
        /**
     * @private
     * @type {boolean|undefined}
     */ this.renderComplete_;
        /**
     * @private
     * @type {boolean}
     */ this.loaded_ = true;
        /** @private */ this.boundHandleBrowserEvent_ = this.handleBrowserEvent.bind(this);
        /**
     * @type {number}
     * @private
     */ this.maxTilesLoading_ = options.maxTilesLoading !== undefined ? options.maxTilesLoading : 16;
        /**
     * @private
     * @type {number}
     */ this.pixelRatio_ = options.pixelRatio !== undefined ? options.pixelRatio : (0, _hasJs.DEVICE_PIXEL_RATIO);
        /**
     * @private
     * @type {*}
     */ this.postRenderTimeoutHandle_;
        /**
     * @private
     * @type {number|undefined}
     */ this.animationDelayKey_;
        /**
     * @private
     */ this.animationDelay_ = this.animationDelay_.bind(this);
        /**
     * @private
     * @type {import("./transform.js").Transform}
     */ this.coordinateToPixelTransform_ = (0, _transformJs.create)();
        /**
     * @private
     * @type {import("./transform.js").Transform}
     */ this.pixelToCoordinateTransform_ = (0, _transformJs.create)();
        /**
     * @private
     * @type {number}
     */ this.frameIndex_ = 0;
        /**
     * @private
     * @type {?FrameState}
     */ this.frameState_ = null;
        /**
     * The extent at the previous 'moveend' event.
     * @private
     * @type {import("./extent.js").Extent}
     */ this.previousExtent_ = null;
        /**
     * @private
     * @type {?import("./events.js").EventsKey}
     */ this.viewPropertyListenerKey_ = null;
        /**
     * @private
     * @type {?import("./events.js").EventsKey}
     */ this.viewChangeListenerKey_ = null;
        /**
     * @private
     * @type {?Array<import("./events.js").EventsKey>}
     */ this.layerGroupPropertyListenerKeys_ = null;
        /**
     * @private
     * @type {!HTMLElement}
     */ this.viewport_ = document.createElement("div");
        this.viewport_.className = "ol-viewport" + ("ontouchstart" in window ? " ol-touch" : "");
        this.viewport_.style.position = "relative";
        this.viewport_.style.overflow = "hidden";
        this.viewport_.style.width = "100%";
        this.viewport_.style.height = "100%";
        /**
     * @private
     * @type {!HTMLElement}
     */ this.overlayContainer_ = document.createElement("div");
        this.overlayContainer_.style.position = "absolute";
        this.overlayContainer_.style.zIndex = "0";
        this.overlayContainer_.style.width = "100%";
        this.overlayContainer_.style.height = "100%";
        this.overlayContainer_.style.pointerEvents = "none";
        this.overlayContainer_.className = "ol-overlaycontainer";
        this.viewport_.appendChild(this.overlayContainer_);
        /**
     * @private
     * @type {!HTMLElement}
     */ this.overlayContainerStopEvent_ = document.createElement("div");
        this.overlayContainerStopEvent_.style.position = "absolute";
        this.overlayContainerStopEvent_.style.zIndex = "0";
        this.overlayContainerStopEvent_.style.width = "100%";
        this.overlayContainerStopEvent_.style.height = "100%";
        this.overlayContainerStopEvent_.style.pointerEvents = "none";
        this.overlayContainerStopEvent_.className = "ol-overlaycontainer-stopevent";
        this.viewport_.appendChild(this.overlayContainerStopEvent_);
        /**
     * @private
     * @type {MapBrowserEventHandler}
     */ this.mapBrowserEventHandler_ = null;
        /**
     * @private
     * @type {number}
     */ this.moveTolerance_ = options.moveTolerance;
        /**
     * @private
     * @type {HTMLElement|Document}
     */ this.keyboardEventTarget_ = optionsInternal.keyboardEventTarget;
        /**
     * @private
     * @type {?Array<import("./events.js").EventsKey>}
     */ this.targetChangeHandlerKeys_ = null;
        /**
     * @private
     * @type {HTMLElement|null}
     */ this.targetElement_ = null;
        /**
     * @type {ResizeObserver}
     */ this.resizeObserver_ = new ResizeObserver(()=>this.updateSize());
        /**
     * @type {Collection<import("./control/Control.js").default>}
     * @protected
     */ this.controls = optionsInternal.controls || (0, _defaultsJs.defaults)();
        /**
     * @type {Collection<import("./interaction/Interaction.js").default>}
     * @protected
     */ this.interactions = optionsInternal.interactions || (0, _defaultsJs1.defaults)({
            onFocusOnly: true
        });
        /**
     * @type {Collection<import("./Overlay.js").default>}
     * @private
     */ this.overlays_ = optionsInternal.overlays;
        /**
     * A lookup of overlays by id.
     * @private
     * @type {Object<string, import("./Overlay.js").default>}
     */ this.overlayIdIndex_ = {};
        /**
     * @type {import("./renderer/Map.js").default|null}
     * @private
     */ this.renderer_ = null;
        /**
     * @private
     * @type {!Array<PostRenderFunction>}
     */ this.postRenderFunctions_ = [];
        /**
     * @private
     * @type {TileQueue}
     */ this.tileQueue_ = new (0, _tileQueueJsDefault.default)(this.getTilePriority.bind(this), this.handleTileChange_.bind(this));
        this.addChangeListener((0, _mapPropertyJsDefault.default).LAYERGROUP, this.handleLayerGroupChanged_);
        this.addChangeListener((0, _mapPropertyJsDefault.default).VIEW, this.handleViewChanged_);
        this.addChangeListener((0, _mapPropertyJsDefault.default).SIZE, this.handleSizeChanged_);
        this.addChangeListener((0, _mapPropertyJsDefault.default).TARGET, this.handleTargetChanged_);
        // setProperties will trigger the rendering of the map if the map
        // is "defined" already.
        this.setProperties(optionsInternal.values);
        const map = this;
        if (options.view && !(options.view instanceof (0, _viewJsDefault.default))) options.view.then(function(viewOptions) {
            map.setView(new (0, _viewJsDefault.default)(viewOptions));
        });
        this.controls.addEventListener((0, _collectionEventTypeJsDefault.default).ADD, /**
       * @param {import("./Collection.js").CollectionEvent<import("./control/Control.js").default>} event CollectionEvent
       */ (event)=>{
            event.element.setMap(this);
        });
        this.controls.addEventListener((0, _collectionEventTypeJsDefault.default).REMOVE, /**
       * @param {import("./Collection.js").CollectionEvent<import("./control/Control.js").default>} event CollectionEvent.
       */ (event)=>{
            event.element.setMap(null);
        });
        this.interactions.addEventListener((0, _collectionEventTypeJsDefault.default).ADD, /**
       * @param {import("./Collection.js").CollectionEvent<import("./interaction/Interaction.js").default>} event CollectionEvent.
       */ (event)=>{
            event.element.setMap(this);
        });
        this.interactions.addEventListener((0, _collectionEventTypeJsDefault.default).REMOVE, /**
       * @param {import("./Collection.js").CollectionEvent<import("./interaction/Interaction.js").default>} event CollectionEvent.
       */ (event)=>{
            event.element.setMap(null);
        });
        this.overlays_.addEventListener((0, _collectionEventTypeJsDefault.default).ADD, /**
       * @param {import("./Collection.js").CollectionEvent<import("./Overlay.js").default>} event CollectionEvent.
       */ (event)=>{
            this.addOverlayInternal_(event.element);
        });
        this.overlays_.addEventListener((0, _collectionEventTypeJsDefault.default).REMOVE, /**
       * @param {import("./Collection.js").CollectionEvent<import("./Overlay.js").default>} event CollectionEvent.
       */ (event)=>{
            const id = event.element.getId();
            if (id !== undefined) delete this.overlayIdIndex_[id.toString()];
            event.element.setMap(null);
        });
        this.controls.forEach(/**
       * @param {import("./control/Control.js").default} control Control.
       */ (control)=>{
            control.setMap(this);
        });
        this.interactions.forEach(/**
       * @param {import("./interaction/Interaction.js").default} interaction Interaction.
       */ (interaction)=>{
            interaction.setMap(this);
        });
        this.overlays_.forEach(this.addOverlayInternal_.bind(this));
    }
    /**
   * Add the given control to the map.
   * @param {import("./control/Control.js").default} control Control.
   * @api
   */ addControl(control) {
        this.getControls().push(control);
    }
    /**
   * Add the given interaction to the map. If you want to add an interaction
   * at another point of the collection use `getInteractions()` and the methods
   * available on {@link module:ol/Collection~Collection}. This can be used to
   * stop the event propagation from the handleEvent function. The interactions
   * get to handle the events in the reverse order of this collection.
   * @param {import("./interaction/Interaction.js").default} interaction Interaction to add.
   * @api
   */ addInteraction(interaction) {
        this.getInteractions().push(interaction);
    }
    /**
   * Adds the given layer to the top of this map. If you want to add a layer
   * elsewhere in the stack, use `getLayers()` and the methods available on
   * {@link module:ol/Collection~Collection}.
   * @param {import("./layer/Base.js").default} layer Layer.
   * @api
   */ addLayer(layer) {
        const layers = this.getLayerGroup().getLayers();
        layers.push(layer);
    }
    /**
   * @param {import("./layer/Group.js").GroupEvent} event The layer add event.
   * @private
   */ handleLayerAdd_(event) {
        setLayerMapProperty(event.layer, this);
    }
    /**
   * Add the given overlay to the map.
   * @param {import("./Overlay.js").default} overlay Overlay.
   * @api
   */ addOverlay(overlay) {
        this.getOverlays().push(overlay);
    }
    /**
   * This deals with map's overlay collection changes.
   * @param {import("./Overlay.js").default} overlay Overlay.
   * @private
   */ addOverlayInternal_(overlay) {
        const id = overlay.getId();
        if (id !== undefined) this.overlayIdIndex_[id.toString()] = overlay;
        overlay.setMap(this);
    }
    /**
   *
   * Clean up.
   */ disposeInternal() {
        this.controls.clear();
        this.interactions.clear();
        this.overlays_.clear();
        this.resizeObserver_.disconnect();
        this.setTarget(null);
        super.disposeInternal();
    }
    /**
   * Detect features that intersect a pixel on the viewport, and execute a
   * callback with each intersecting feature. Layers included in the detection can
   * be configured through the `layerFilter` option in `options`.
   * @param {import("./pixel.js").Pixel} pixel Pixel.
   * @param {function(import("./Feature.js").FeatureLike, import("./layer/Layer.js").default<import("./source/Source").default>, import("./geom/SimpleGeometry.js").default): T} callback Feature callback. The callback will be
   *     called with two arguments. The first argument is one
   *     {@link module:ol/Feature~Feature feature} or
   *     {@link module:ol/render/Feature~RenderFeature render feature} at the pixel, the second is
   *     the {@link module:ol/layer/Layer~Layer layer} of the feature and will be null for
   *     unmanaged layers. To stop detection, callback functions can return a
   *     truthy value.
   * @param {AtPixelOptions} [options] Optional options.
   * @return {T|undefined} Callback result, i.e. the return value of last
   * callback execution, or the first truthy callback return value.
   * @template T
   * @api
   */ forEachFeatureAtPixel(pixel, callback, options) {
        if (!this.frameState_ || !this.renderer_) return;
        const coordinate = this.getCoordinateFromPixelInternal(pixel);
        options = options !== undefined ? options : {};
        const hitTolerance = options.hitTolerance !== undefined ? options.hitTolerance : 0;
        const layerFilter = options.layerFilter !== undefined ? options.layerFilter : (0, _functionsJs.TRUE);
        const checkWrapped = options.checkWrapped !== false;
        return this.renderer_.forEachFeatureAtCoordinate(coordinate, this.frameState_, hitTolerance, checkWrapped, callback, null, layerFilter, null);
    }
    /**
   * Get all features that intersect a pixel on the viewport.
   * @param {import("./pixel.js").Pixel} pixel Pixel.
   * @param {AtPixelOptions} [options] Optional options.
   * @return {Array<import("./Feature.js").FeatureLike>} The detected features or
   * an empty array if none were found.
   * @api
   */ getFeaturesAtPixel(pixel, options) {
        const features = [];
        this.forEachFeatureAtPixel(pixel, function(feature) {
            features.push(feature);
        }, options);
        return features;
    }
    /**
   * Get all layers from all layer groups.
   * @return {Array<import("./layer/Layer.js").default>} Layers.
   * @api
   */ getAllLayers() {
        const layers = [];
        function addLayersFrom(layerGroup) {
            layerGroup.forEach(function(layer) {
                if (layer instanceof (0, _groupJsDefault.default)) addLayersFrom(layer.getLayers());
                else layers.push(layer);
            });
        }
        addLayersFrom(this.getLayers());
        return layers;
    }
    /**
   * Detect if features intersect a pixel on the viewport. Layers included in the
   * detection can be configured through the `layerFilter` option.
   * @param {import("./pixel.js").Pixel} pixel Pixel.
   * @param {AtPixelOptions} [options] Optional options.
   * @return {boolean} Is there a feature at the given pixel?
   * @api
   */ hasFeatureAtPixel(pixel, options) {
        if (!this.frameState_ || !this.renderer_) return false;
        const coordinate = this.getCoordinateFromPixelInternal(pixel);
        options = options !== undefined ? options : {};
        const layerFilter = options.layerFilter !== undefined ? options.layerFilter : (0, _functionsJs.TRUE);
        const hitTolerance = options.hitTolerance !== undefined ? options.hitTolerance : 0;
        const checkWrapped = options.checkWrapped !== false;
        return this.renderer_.hasFeatureAtCoordinate(coordinate, this.frameState_, hitTolerance, checkWrapped, layerFilter, null);
    }
    /**
   * Returns the coordinate in user projection for a browser event.
   * @param {MouseEvent} event Event.
   * @return {import("./coordinate.js").Coordinate} Coordinate.
   * @api
   */ getEventCoordinate(event) {
        return this.getCoordinateFromPixel(this.getEventPixel(event));
    }
    /**
   * Returns the coordinate in view projection for a browser event.
   * @param {MouseEvent} event Event.
   * @return {import("./coordinate.js").Coordinate} Coordinate.
   */ getEventCoordinateInternal(event) {
        return this.getCoordinateFromPixelInternal(this.getEventPixel(event));
    }
    /**
   * Returns the map pixel position for a browser event relative to the viewport.
   * @param {UIEvent|{clientX: number, clientY: number}} event Event.
   * @return {import("./pixel.js").Pixel} Pixel.
   * @api
   */ getEventPixel(event) {
        const viewport = this.viewport_;
        const viewportPosition = viewport.getBoundingClientRect();
        const viewportSize = this.getSize();
        const scaleX = viewportPosition.width / viewportSize[0];
        const scaleY = viewportPosition.height / viewportSize[1];
        const eventPosition = //FIXME Are we really calling this with a TouchEvent anywhere?
        "changedTouches" in event ? /** @type {TouchEvent} */ event.changedTouches[0] : /** @type {MouseEvent} */ event;
        return [
            (eventPosition.clientX - viewportPosition.left) / scaleX,
            (eventPosition.clientY - viewportPosition.top) / scaleY
        ];
    }
    /**
   * Get the target in which this map is rendered.
   * Note that this returns what is entered as an option or in setTarget:
   * if that was an element, it returns an element; if a string, it returns that.
   * @return {HTMLElement|string|undefined} The Element or id of the Element that the
   *     map is rendered in.
   * @observable
   * @api
   */ getTarget() {
        return /** @type {HTMLElement|string|undefined} */ this.get((0, _mapPropertyJsDefault.default).TARGET);
    }
    /**
   * Get the DOM element into which this map is rendered. In contrast to
   * `getTarget` this method always return an `Element`, or `null` if the
   * map has no target.
   * @return {HTMLElement} The element that the map is rendered in.
   * @api
   */ getTargetElement() {
        return this.targetElement_;
    }
    /**
   * Get the coordinate for a given pixel.  This returns a coordinate in the
   * user projection.
   * @param {import("./pixel.js").Pixel} pixel Pixel position in the map viewport.
   * @return {import("./coordinate.js").Coordinate} The coordinate for the pixel position.
   * @api
   */ getCoordinateFromPixel(pixel) {
        return (0, _projJs.toUserCoordinate)(this.getCoordinateFromPixelInternal(pixel), this.getView().getProjection());
    }
    /**
   * Get the coordinate for a given pixel.  This returns a coordinate in the
   * map view projection.
   * @param {import("./pixel.js").Pixel} pixel Pixel position in the map viewport.
   * @return {import("./coordinate.js").Coordinate} The coordinate for the pixel position.
   */ getCoordinateFromPixelInternal(pixel) {
        const frameState = this.frameState_;
        if (!frameState) return null;
        return (0, _transformJs.apply)(frameState.pixelToCoordinateTransform, pixel.slice());
    }
    /**
   * Get the map controls. Modifying this collection changes the controls
   * associated with the map.
   * @return {Collection<import("./control/Control.js").default>} Controls.
   * @api
   */ getControls() {
        return this.controls;
    }
    /**
   * Get the map overlays. Modifying this collection changes the overlays
   * associated with the map.
   * @return {Collection<import("./Overlay.js").default>} Overlays.
   * @api
   */ getOverlays() {
        return this.overlays_;
    }
    /**
   * Get an overlay by its identifier (the value returned by overlay.getId()).
   * Note that the index treats string and numeric identifiers as the same. So
   * `map.getOverlayById(2)` will return an overlay with id `'2'` or `2`.
   * @param {string|number} id Overlay identifier.
   * @return {import("./Overlay.js").default} Overlay.
   * @api
   */ getOverlayById(id) {
        const overlay = this.overlayIdIndex_[id.toString()];
        return overlay !== undefined ? overlay : null;
    }
    /**
   * Get the map interactions. Modifying this collection changes the interactions
   * associated with the map.
   *
   * Interactions are used for e.g. pan, zoom and rotate.
   * @return {Collection<import("./interaction/Interaction.js").default>} Interactions.
   * @api
   */ getInteractions() {
        return this.interactions;
    }
    /**
   * Get the layergroup associated with this map.
   * @return {LayerGroup} A layer group containing the layers in this map.
   * @observable
   * @api
   */ getLayerGroup() {
        return /** @type {LayerGroup} */ this.get((0, _mapPropertyJsDefault.default).LAYERGROUP);
    }
    /**
   * Clear any existing layers and add layers to the map.
   * @param {Array<import("./layer/Base.js").default>|Collection<import("./layer/Base.js").default>} layers The layers to be added to the map.
   * @api
   */ setLayers(layers) {
        const group = this.getLayerGroup();
        if (layers instanceof (0, _collectionJsDefault.default)) {
            group.setLayers(layers);
            return;
        }
        const collection = group.getLayers();
        collection.clear();
        collection.extend(layers);
    }
    /**
   * Get the collection of layers associated with this map.
   * @return {!Collection<import("./layer/Base.js").default>} Layers.
   * @api
   */ getLayers() {
        const layers = this.getLayerGroup().getLayers();
        return layers;
    }
    /**
   * @return {boolean} Layers have sources that are still loading.
   */ getLoadingOrNotReady() {
        const layerStatesArray = this.getLayerGroup().getLayerStatesArray();
        for(let i = 0, ii = layerStatesArray.length; i < ii; ++i){
            const state = layerStatesArray[i];
            if (!state.visible) continue;
            const renderer = state.layer.getRenderer();
            if (renderer && !renderer.ready) return true;
            const source = state.layer.getSource();
            if (source && source.loading) return true;
        }
        return false;
    }
    /**
   * Get the pixel for a coordinate.  This takes a coordinate in the user
   * projection and returns the corresponding pixel.
   * @param {import("./coordinate.js").Coordinate} coordinate A map coordinate.
   * @return {import("./pixel.js").Pixel} A pixel position in the map viewport.
   * @api
   */ getPixelFromCoordinate(coordinate) {
        const viewCoordinate = (0, _projJs.fromUserCoordinate)(coordinate, this.getView().getProjection());
        return this.getPixelFromCoordinateInternal(viewCoordinate);
    }
    /**
   * Get the pixel for a coordinate.  This takes a coordinate in the map view
   * projection and returns the corresponding pixel.
   * @param {import("./coordinate.js").Coordinate} coordinate A map coordinate.
   * @return {import("./pixel.js").Pixel} A pixel position in the map viewport.
   */ getPixelFromCoordinateInternal(coordinate) {
        const frameState = this.frameState_;
        if (!frameState) return null;
        return (0, _transformJs.apply)(frameState.coordinateToPixelTransform, coordinate.slice(0, 2));
    }
    /**
   * Get the map renderer.
   * @return {import("./renderer/Map.js").default|null} Renderer
   */ getRenderer() {
        return this.renderer_;
    }
    /**
   * Get the size of this map.
   * @return {import("./size.js").Size|undefined} The size in pixels of the map in the DOM.
   * @observable
   * @api
   */ getSize() {
        return /** @type {import("./size.js").Size|undefined} */ this.get((0, _mapPropertyJsDefault.default).SIZE);
    }
    /**
   * Get the view associated with this map. A view manages properties such as
   * center and resolution.
   * @return {View} The view that controls this map.
   * @observable
   * @api
   */ getView() {
        return /** @type {View} */ this.get((0, _mapPropertyJsDefault.default).VIEW);
    }
    /**
   * Get the element that serves as the map viewport.
   * @return {HTMLElement} Viewport.
   * @api
   */ getViewport() {
        return this.viewport_;
    }
    /**
   * Get the element that serves as the container for overlays.  Elements added to
   * this container will let mousedown and touchstart events through to the map,
   * so clicks and gestures on an overlay will trigger {@link module:ol/MapBrowserEvent~MapBrowserEvent}
   * events.
   * @return {!HTMLElement} The map's overlay container.
   */ getOverlayContainer() {
        return this.overlayContainer_;
    }
    /**
   * Get the element that serves as a container for overlays that don't allow
   * event propagation. Elements added to this container won't let mousedown and
   * touchstart events through to the map, so clicks and gestures on an overlay
   * don't trigger any {@link module:ol/MapBrowserEvent~MapBrowserEvent}.
   * @return {!HTMLElement} The map's overlay container that stops events.
   */ getOverlayContainerStopEvent() {
        return this.overlayContainerStopEvent_;
    }
    /**
   * @return {!Document} The document where the map is displayed.
   */ getOwnerDocument() {
        const targetElement = this.getTargetElement();
        return targetElement ? targetElement.ownerDocument : document;
    }
    /**
   * @param {import("./Tile.js").default} tile Tile.
   * @param {string} tileSourceKey Tile source key.
   * @param {import("./coordinate.js").Coordinate} tileCenter Tile center.
   * @param {number} tileResolution Tile resolution.
   * @return {number} Tile priority.
   */ getTilePriority(tile, tileSourceKey, tileCenter, tileResolution) {
        return (0, _tileQueueJs.getTilePriority)(this.frameState_, tile, tileSourceKey, tileCenter, tileResolution);
    }
    /**
   * @param {UIEvent} browserEvent Browser event.
   * @param {string} [type] Type.
   */ handleBrowserEvent(browserEvent, type) {
        type = type || browserEvent.type;
        const mapBrowserEvent = new (0, _mapBrowserEventJsDefault.default)(type, this, browserEvent);
        this.handleMapBrowserEvent(mapBrowserEvent);
    }
    /**
   * @param {MapBrowserEvent} mapBrowserEvent The event to handle.
   */ handleMapBrowserEvent(mapBrowserEvent) {
        if (!this.frameState_) // With no view defined, we cannot translate pixels into geographical
        // coordinates so interactions cannot be used.
        return;
        const originalEvent = /** @type {PointerEvent} */ mapBrowserEvent.originalEvent;
        const eventType = originalEvent.type;
        if (eventType === (0, _eventTypeJsDefault1.default).POINTERDOWN || eventType === (0, _eventTypeJsDefault.default).WHEEL || eventType === (0, _eventTypeJsDefault.default).KEYDOWN) {
            const doc = this.getOwnerDocument();
            const rootNode = this.viewport_.getRootNode ? this.viewport_.getRootNode() : doc;
            const target = /** @type {Node} */ originalEvent.target;
            if (// Abort if the target is a child of the container for elements whose events are not meant
            // to be handled by map interactions.
            this.overlayContainerStopEvent_.contains(target) || // Abort if the event target is a child of the container that is no longer in the page.
            // It's possible for the target to no longer be in the page if it has been removed in an
            // event listener, this might happen in a Control that recreates it's content based on
            // user interaction either manually or via a render in something like https://reactjs.org/
            !(rootNode === doc ? doc.documentElement : rootNode).contains(target)) return;
        }
        mapBrowserEvent.frameState = this.frameState_;
        if (this.dispatchEvent(mapBrowserEvent) !== false) {
            const interactionsArray = this.getInteractions().getArray().slice();
            for(let i = interactionsArray.length - 1; i >= 0; i--){
                const interaction = interactionsArray[i];
                if (interaction.getMap() !== this || !interaction.getActive() || !this.getTargetElement()) continue;
                const cont = interaction.handleEvent(mapBrowserEvent);
                if (!cont || mapBrowserEvent.propagationStopped) break;
            }
        }
    }
    /**
   * @protected
   */ handlePostRender() {
        const frameState = this.frameState_;
        // Manage the tile queue
        // Image loads are expensive and a limited resource, so try to use them
        // efficiently:
        // * When the view is static we allow a large number of parallel tile loads
        //   to complete the frame as quickly as possible.
        // * When animating or interacting, image loads can cause janks, so we reduce
        //   the maximum number of loads per frame and limit the number of parallel
        //   tile loads to remain reactive to view changes and to reduce the chance of
        //   loading tiles that will quickly disappear from view.
        const tileQueue = this.tileQueue_;
        if (!tileQueue.isEmpty()) {
            let maxTotalLoading = this.maxTilesLoading_;
            let maxNewLoads = maxTotalLoading;
            if (frameState) {
                const hints = frameState.viewHints;
                if (hints[(0, _viewHintJsDefault.default).ANIMATING] || hints[(0, _viewHintJsDefault.default).INTERACTING]) {
                    const lowOnFrameBudget = Date.now() - frameState.time > 8;
                    maxTotalLoading = lowOnFrameBudget ? 0 : 8;
                    maxNewLoads = lowOnFrameBudget ? 0 : 2;
                }
            }
            if (tileQueue.getTilesLoading() < maxTotalLoading) {
                tileQueue.reprioritize(); // FIXME only call if view has changed
                tileQueue.loadMoreTiles(maxTotalLoading, maxNewLoads);
            }
        }
        if (frameState && this.renderer_ && !frameState.animate) {
            if (this.renderComplete_ === true) {
                if (this.hasListener((0, _eventTypeJsDefault2.default).RENDERCOMPLETE)) this.renderer_.dispatchRenderEvent((0, _eventTypeJsDefault2.default).RENDERCOMPLETE, frameState);
                if (this.loaded_ === false) {
                    this.loaded_ = true;
                    this.dispatchEvent(new (0, _mapEventJsDefault.default)((0, _mapEventTypeJsDefault.default).LOADEND, this, frameState));
                }
            } else if (this.loaded_ === true) {
                this.loaded_ = false;
                this.dispatchEvent(new (0, _mapEventJsDefault.default)((0, _mapEventTypeJsDefault.default).LOADSTART, this, frameState));
            }
        }
        const postRenderFunctions = this.postRenderFunctions_;
        for(let i = 0, ii = postRenderFunctions.length; i < ii; ++i)postRenderFunctions[i](this, frameState);
        postRenderFunctions.length = 0;
    }
    /**
   * @private
   */ handleSizeChanged_() {
        if (this.getView() && !this.getView().getAnimating()) this.getView().resolveConstraints(0);
        this.render();
    }
    /**
   * @private
   */ handleTargetChanged_() {
        if (this.mapBrowserEventHandler_) {
            for(let i = 0, ii = this.targetChangeHandlerKeys_.length; i < ii; ++i)(0, _eventsJs.unlistenByKey)(this.targetChangeHandlerKeys_[i]);
            this.targetChangeHandlerKeys_ = null;
            this.viewport_.removeEventListener((0, _eventTypeJsDefault.default).CONTEXTMENU, this.boundHandleBrowserEvent_);
            this.viewport_.removeEventListener((0, _eventTypeJsDefault.default).WHEEL, this.boundHandleBrowserEvent_);
            this.mapBrowserEventHandler_.dispose();
            this.mapBrowserEventHandler_ = null;
            (0, _domJs.removeNode)(this.viewport_);
        }
        if (this.targetElement_) {
            this.resizeObserver_.unobserve(this.targetElement_);
            const rootNode = this.targetElement_.getRootNode();
            if (rootNode instanceof ShadowRoot) this.resizeObserver_.unobserve(rootNode.host);
        }
        // target may be undefined, null, a string or an Element.
        // If it's a string we convert it to an Element before proceeding.
        // If it's not now an Element we remove the viewport from the DOM.
        // If it's an Element we append the viewport element to it.
        const target = this.getTarget();
        const targetElement = typeof target === "string" ? document.getElementById(target) : target;
        this.targetElement_ = targetElement;
        if (!targetElement) {
            if (this.renderer_) {
                clearTimeout(this.postRenderTimeoutHandle_);
                this.postRenderTimeoutHandle_ = undefined;
                this.postRenderFunctions_.length = 0;
                this.renderer_.dispose();
                this.renderer_ = null;
            }
            if (this.animationDelayKey_) {
                cancelAnimationFrame(this.animationDelayKey_);
                this.animationDelayKey_ = undefined;
            }
        } else {
            targetElement.appendChild(this.viewport_);
            if (!this.renderer_) this.renderer_ = new (0, _compositeJsDefault.default)(this);
            this.mapBrowserEventHandler_ = new (0, _mapBrowserEventHandlerJsDefault.default)(this, this.moveTolerance_);
            for(const key in 0, _mapBrowserEventTypeJsDefault.default)this.mapBrowserEventHandler_.addEventListener((0, _mapBrowserEventTypeJsDefault.default)[key], this.handleMapBrowserEvent.bind(this));
            this.viewport_.addEventListener((0, _eventTypeJsDefault.default).CONTEXTMENU, this.boundHandleBrowserEvent_, false);
            this.viewport_.addEventListener((0, _eventTypeJsDefault.default).WHEEL, this.boundHandleBrowserEvent_, (0, _hasJs.PASSIVE_EVENT_LISTENERS) ? {
                passive: false
            } : false);
            const keyboardEventTarget = !this.keyboardEventTarget_ ? targetElement : this.keyboardEventTarget_;
            this.targetChangeHandlerKeys_ = [
                (0, _eventsJs.listen)(keyboardEventTarget, (0, _eventTypeJsDefault.default).KEYDOWN, this.handleBrowserEvent, this),
                (0, _eventsJs.listen)(keyboardEventTarget, (0, _eventTypeJsDefault.default).KEYPRESS, this.handleBrowserEvent, this)
            ];
            const rootNode = targetElement.getRootNode();
            if (rootNode instanceof ShadowRoot) this.resizeObserver_.observe(rootNode.host);
            this.resizeObserver_.observe(targetElement);
        }
        this.updateSize();
    // updateSize calls setSize, so no need to call this.render
    // ourselves here.
    }
    /**
   * @private
   */ handleTileChange_() {
        this.render();
    }
    /**
   * @private
   */ handleViewPropertyChanged_() {
        this.render();
    }
    /**
   * @private
   */ handleViewChanged_() {
        if (this.viewPropertyListenerKey_) {
            (0, _eventsJs.unlistenByKey)(this.viewPropertyListenerKey_);
            this.viewPropertyListenerKey_ = null;
        }
        if (this.viewChangeListenerKey_) {
            (0, _eventsJs.unlistenByKey)(this.viewChangeListenerKey_);
            this.viewChangeListenerKey_ = null;
        }
        const view = this.getView();
        if (view) {
            this.updateViewportSize_();
            this.viewPropertyListenerKey_ = (0, _eventsJs.listen)(view, (0, _objectEventTypeJsDefault.default).PROPERTYCHANGE, this.handleViewPropertyChanged_, this);
            this.viewChangeListenerKey_ = (0, _eventsJs.listen)(view, (0, _eventTypeJsDefault.default).CHANGE, this.handleViewPropertyChanged_, this);
            view.resolveConstraints(0);
        }
        this.render();
    }
    /**
   * @private
   */ handleLayerGroupChanged_() {
        if (this.layerGroupPropertyListenerKeys_) {
            this.layerGroupPropertyListenerKeys_.forEach((0, _eventsJs.unlistenByKey));
            this.layerGroupPropertyListenerKeys_ = null;
        }
        const layerGroup = this.getLayerGroup();
        if (layerGroup) {
            this.handleLayerAdd_(new (0, _groupJs.GroupEvent)("addlayer", layerGroup));
            this.layerGroupPropertyListenerKeys_ = [
                (0, _eventsJs.listen)(layerGroup, (0, _objectEventTypeJsDefault.default).PROPERTYCHANGE, this.render, this),
                (0, _eventsJs.listen)(layerGroup, (0, _eventTypeJsDefault.default).CHANGE, this.render, this),
                (0, _eventsJs.listen)(layerGroup, "addlayer", this.handleLayerAdd_, this),
                (0, _eventsJs.listen)(layerGroup, "removelayer", this.handleLayerRemove_, this)
            ];
        }
        this.render();
    }
    /**
   * @return {boolean} Is rendered.
   */ isRendered() {
        return !!this.frameState_;
    }
    /**
   * @private
   */ animationDelay_() {
        this.animationDelayKey_ = undefined;
        this.renderFrame_(Date.now());
    }
    /**
   * Requests an immediate render in a synchronous manner.
   * @api
   */ renderSync() {
        if (this.animationDelayKey_) cancelAnimationFrame(this.animationDelayKey_);
        this.animationDelay_();
    }
    /**
   * Redraws all text after new fonts have loaded
   */ redrawText() {
        const layerStates = this.getLayerGroup().getLayerStatesArray();
        for(let i = 0, ii = layerStates.length; i < ii; ++i){
            const layer = layerStates[i].layer;
            if (layer.hasRenderer()) layer.getRenderer().handleFontsChanged();
        }
    }
    /**
   * Request a map rendering (at the next animation frame).
   * @api
   */ render() {
        if (this.renderer_ && this.animationDelayKey_ === undefined) this.animationDelayKey_ = requestAnimationFrame(this.animationDelay_);
    }
    /**
   * Remove the given control from the map.
   * @param {import("./control/Control.js").default} control Control.
   * @return {import("./control/Control.js").default|undefined} The removed control (or undefined
   *     if the control was not found).
   * @api
   */ removeControl(control) {
        return this.getControls().remove(control);
    }
    /**
   * Remove the given interaction from the map.
   * @param {import("./interaction/Interaction.js").default} interaction Interaction to remove.
   * @return {import("./interaction/Interaction.js").default|undefined} The removed interaction (or
   *     undefined if the interaction was not found).
   * @api
   */ removeInteraction(interaction) {
        return this.getInteractions().remove(interaction);
    }
    /**
   * Removes the given layer from the map.
   * @param {import("./layer/Base.js").default} layer Layer.
   * @return {import("./layer/Base.js").default|undefined} The removed layer (or undefined if the
   *     layer was not found).
   * @api
   */ removeLayer(layer) {
        const layers = this.getLayerGroup().getLayers();
        return layers.remove(layer);
    }
    /**
   * @param {import("./layer/Group.js").GroupEvent} event The layer remove event.
   * @private
   */ handleLayerRemove_(event) {
        removeLayerMapProperty(event.layer);
    }
    /**
   * Remove the given overlay from the map.
   * @param {import("./Overlay.js").default} overlay Overlay.
   * @return {import("./Overlay.js").default|undefined} The removed overlay (or undefined
   *     if the overlay was not found).
   * @api
   */ removeOverlay(overlay) {
        return this.getOverlays().remove(overlay);
    }
    /**
   * @param {number} time Time.
   * @private
   */ renderFrame_(time) {
        const size = this.getSize();
        const view = this.getView();
        const previousFrameState = this.frameState_;
        /** @type {?FrameState} */ let frameState = null;
        if (size !== undefined && (0, _sizeJs.hasArea)(size) && view && view.isDef()) {
            const viewHints = view.getHints(this.frameState_ ? this.frameState_.viewHints : undefined);
            const viewState = view.getState();
            frameState = {
                animate: false,
                coordinateToPixelTransform: this.coordinateToPixelTransform_,
                declutterTree: null,
                extent: (0, _extentJs.getForViewAndSize)(viewState.center, viewState.resolution, viewState.rotation, size),
                index: this.frameIndex_++,
                layerIndex: 0,
                layerStatesArray: this.getLayerGroup().getLayerStatesArray(),
                pixelRatio: this.pixelRatio_,
                pixelToCoordinateTransform: this.pixelToCoordinateTransform_,
                postRenderFunctions: [],
                size: size,
                tileQueue: this.tileQueue_,
                time: time,
                usedTiles: {},
                viewState: viewState,
                viewHints: viewHints,
                wantedTiles: {},
                mapId: (0, _utilJs.getUid)(this),
                renderTargets: {}
            };
            if (viewState.nextCenter && viewState.nextResolution) {
                const rotation = isNaN(viewState.nextRotation) ? viewState.rotation : viewState.nextRotation;
                frameState.nextExtent = (0, _extentJs.getForViewAndSize)(viewState.nextCenter, viewState.nextResolution, rotation, size);
            }
        }
        this.frameState_ = frameState;
        this.renderer_.renderFrame(frameState);
        if (frameState) {
            if (frameState.animate) this.render();
            Array.prototype.push.apply(this.postRenderFunctions_, frameState.postRenderFunctions);
            if (previousFrameState) {
                const moveStart = !this.previousExtent_ || !(0, _extentJs.isEmpty)(this.previousExtent_) && !(0, _extentJs.equals)(frameState.extent, this.previousExtent_);
                if (moveStart) {
                    this.dispatchEvent(new (0, _mapEventJsDefault.default)((0, _mapEventTypeJsDefault.default).MOVESTART, this, previousFrameState));
                    this.previousExtent_ = (0, _extentJs.createOrUpdateEmpty)(this.previousExtent_);
                }
            }
            const idle = this.previousExtent_ && !frameState.viewHints[(0, _viewHintJsDefault.default).ANIMATING] && !frameState.viewHints[(0, _viewHintJsDefault.default).INTERACTING] && !(0, _extentJs.equals)(frameState.extent, this.previousExtent_);
            if (idle) {
                this.dispatchEvent(new (0, _mapEventJsDefault.default)((0, _mapEventTypeJsDefault.default).MOVEEND, this, frameState));
                (0, _extentJs.clone)(frameState.extent, this.previousExtent_);
            }
        }
        this.dispatchEvent(new (0, _mapEventJsDefault.default)((0, _mapEventTypeJsDefault.default).POSTRENDER, this, frameState));
        this.renderComplete_ = this.hasListener((0, _mapEventTypeJsDefault.default).LOADSTART) || this.hasListener((0, _mapEventTypeJsDefault.default).LOADEND) || this.hasListener((0, _eventTypeJsDefault2.default).RENDERCOMPLETE) ? !this.tileQueue_.getTilesLoading() && !this.tileQueue_.getCount() && !this.getLoadingOrNotReady() : undefined;
        if (!this.postRenderTimeoutHandle_) this.postRenderTimeoutHandle_ = setTimeout(()=>{
            this.postRenderTimeoutHandle_ = undefined;
            this.handlePostRender();
        }, 0);
    }
    /**
   * Sets the layergroup of this map.
   * @param {LayerGroup} layerGroup A layer group containing the layers in this map.
   * @observable
   * @api
   */ setLayerGroup(layerGroup) {
        const oldLayerGroup = this.getLayerGroup();
        if (oldLayerGroup) this.handleLayerRemove_(new (0, _groupJs.GroupEvent)("removelayer", oldLayerGroup));
        this.set((0, _mapPropertyJsDefault.default).LAYERGROUP, layerGroup);
    }
    /**
   * Set the size of this map.
   * @param {import("./size.js").Size|undefined} size The size in pixels of the map in the DOM.
   * @observable
   * @api
   */ setSize(size) {
        this.set((0, _mapPropertyJsDefault.default).SIZE, size);
    }
    /**
   * Set the target element to render this map into.
   * @param {HTMLElement|string} [target] The Element or id of the Element
   *     that the map is rendered in.
   * @observable
   * @api
   */ setTarget(target) {
        this.set((0, _mapPropertyJsDefault.default).TARGET, target);
    }
    /**
   * Set the view for this map.
   * @param {View|Promise<import("./View.js").ViewOptions>} view The view that controls this map.
   * It is also possible to pass a promise that resolves to options for constructing a view.  This
   * alternative allows view properties to be resolved by sources or other components that load
   * view-related metadata.
   * @observable
   * @api
   */ setView(view) {
        if (!view || view instanceof (0, _viewJsDefault.default)) {
            this.set((0, _mapPropertyJsDefault.default).VIEW, view);
            return;
        }
        this.set((0, _mapPropertyJsDefault.default).VIEW, new (0, _viewJsDefault.default)());
        const map = this;
        view.then(function(viewOptions) {
            map.setView(new (0, _viewJsDefault.default)(viewOptions));
        });
    }
    /**
   * Force a recalculation of the map viewport size.  This should be called when
   * third-party code changes the size of the map viewport.
   * @api
   */ updateSize() {
        const targetElement = this.getTargetElement();
        let size = undefined;
        if (targetElement) {
            const computedStyle = getComputedStyle(targetElement);
            const width = targetElement.offsetWidth - parseFloat(computedStyle["borderLeftWidth"]) - parseFloat(computedStyle["paddingLeft"]) - parseFloat(computedStyle["paddingRight"]) - parseFloat(computedStyle["borderRightWidth"]);
            const height = targetElement.offsetHeight - parseFloat(computedStyle["borderTopWidth"]) - parseFloat(computedStyle["paddingTop"]) - parseFloat(computedStyle["paddingBottom"]) - parseFloat(computedStyle["borderBottomWidth"]);
            if (!isNaN(width) && !isNaN(height)) {
                size = [
                    width,
                    height
                ];
                if (!(0, _sizeJs.hasArea)(size) && !!(targetElement.offsetWidth || targetElement.offsetHeight || targetElement.getClientRects().length)) (0, _consoleJs.warn)("No map visible because the map container's width or height are 0.");
            }
        }
        const oldSize = this.getSize();
        if (size && (!oldSize || !(0, _arrayJs.equals)(size, oldSize))) {
            this.setSize(size);
            this.updateViewportSize_();
        }
    }
    /**
   * Recomputes the viewport size and save it on the view object (if any)
   * @private
   */ updateViewportSize_() {
        const view = this.getView();
        if (view) {
            let size = undefined;
            const computedStyle = getComputedStyle(this.viewport_);
            if (computedStyle.width && computedStyle.height) size = [
                parseInt(computedStyle.width, 10),
                parseInt(computedStyle.height, 10)
            ];
            view.setViewportSize(size);
        }
    }
}
/**
 * @param {MapOptions} options Map options.
 * @return {MapOptionsInternal} Internal map options.
 */ function createOptionsInternal(options) {
    /**
   * @type {HTMLElement|Document}
   */ let keyboardEventTarget = null;
    if (options.keyboardEventTarget !== undefined) keyboardEventTarget = typeof options.keyboardEventTarget === "string" ? document.getElementById(options.keyboardEventTarget) : options.keyboardEventTarget;
    /**
   * @type {Object<string, *>}
   */ const values = {};
    const layerGroup = options.layers && typeof /** @type {?} */ options.layers.getLayers === "function" ? /** @type {LayerGroup} */ options.layers : new (0, _groupJsDefault.default)({
        layers: /** @type {Collection<import("./layer/Base.js").default>|Array<import("./layer/Base.js").default>} */ options.layers
    });
    values[(0, _mapPropertyJsDefault.default).LAYERGROUP] = layerGroup;
    values[(0, _mapPropertyJsDefault.default).TARGET] = options.target;
    values[(0, _mapPropertyJsDefault.default).VIEW] = options.view instanceof (0, _viewJsDefault.default) ? options.view : new (0, _viewJsDefault.default)();
    /** @type {Collection<import("./control/Control.js").default>} */ let controls;
    if (options.controls !== undefined) {
        if (Array.isArray(options.controls)) controls = new (0, _collectionJsDefault.default)(options.controls.slice());
        else {
            (0, _assertsJs.assert)(typeof /** @type {?} */ options.controls.getArray === "function", 47); // Expected `controls` to be an array or an `import("./Collection.js").Collection`
            controls = options.controls;
        }
    }
    /** @type {Collection<import("./interaction/Interaction").default>} */ let interactions;
    if (options.interactions !== undefined) {
        if (Array.isArray(options.interactions)) interactions = new (0, _collectionJsDefault.default)(options.interactions.slice());
        else {
            (0, _assertsJs.assert)(typeof /** @type {?} */ options.interactions.getArray === "function", 48); // Expected `interactions` to be an array or an `import("./Collection.js").Collection`
            interactions = options.interactions;
        }
    }
    /** @type {Collection<import("./Overlay.js").default>} */ let overlays;
    if (options.overlays !== undefined) {
        if (Array.isArray(options.overlays)) overlays = new (0, _collectionJsDefault.default)(options.overlays.slice());
        else {
            (0, _assertsJs.assert)(typeof /** @type {?} */ options.overlays.getArray === "function", 49); // Expected `overlays` to be an array or an `import("./Collection.js").Collection`
            overlays = options.overlays;
        }
    } else overlays = new (0, _collectionJsDefault.default)();
    return {
        controls: controls,
        interactions: interactions,
        keyboardEventTarget: keyboardEventTarget,
        overlays: overlays,
        values: values
    };
}
exports.default = Map;

},{"./Object.js":"1zG8z","./Collection.js":"gReoh","./CollectionEventType.js":"82Ksf","./renderer/Composite.js":"fRfJ1","./events/EventType.js":"hrQJ6","./layer/Layer.js":"8J9Kf","./layer/Group.js":"h4ZNC","./MapBrowserEvent.js":"32Can","./MapBrowserEventHandler.js":"b2FtY","./MapBrowserEventType.js":"fB9ae","./MapEvent.js":"1APU6","./MapEventType.js":"1cFF9","./MapProperty.js":"jMfsr","./ObjectEventType.js":"f2U6i","./pointer/EventType.js":"cVfVH","./render/EventType.js":"5G9JA","./TileQueue.js":"iKkF5","./View.js":"8xbkS","./ViewHint.js":"6THmF","./has.js":"6BDNi","./functions.js":"iqv8I","./transform.js":"1BqUf","./asserts.js":"e4TiF","./extent.js":"6YrVc","./control/defaults.js":"kVrDf","./interaction/defaults.js":"1L9Hg","./array.js":"1Fbic","./proj.js":"SznqC","./util.js":"pLBjQ","./size.js":"lKEPe","./events.js":"dcspA","./dom.js":"84QzQ","./console.js":"25bqN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1zG8z":[function(require,module,exports) {
/**
 * @module ol/Object
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @classdesc
 * Events emitted by {@link module:ol/Object~BaseObject} instances are instances of this type.
 */ parcelHelpers.export(exports, "ObjectEvent", ()=>ObjectEvent);
var _eventJs = require("./events/Event.js");
var _eventJsDefault = parcelHelpers.interopDefault(_eventJs);
var _objectEventTypeJs = require("./ObjectEventType.js");
var _objectEventTypeJsDefault = parcelHelpers.interopDefault(_objectEventTypeJs);
var _observableJs = require("./Observable.js");
var _observableJsDefault = parcelHelpers.interopDefault(_observableJs);
var _utilJs = require("./util.js");
var _objJs = require("./obj.js");
class ObjectEvent extends (0, _eventJsDefault.default) {
    /**
   * @param {string} type The event type.
   * @param {string} key The property name.
   * @param {*} oldValue The old value for `key`.
   */ constructor(type, key, oldValue){
        super(type);
        /**
     * The name of the property whose value is changing.
     * @type {string}
     * @api
     */ this.key = key;
        /**
     * The old value. To get the new value use `e.target.get(e.key)` where
     * `e` is the event object.
     * @type {*}
     * @api
     */ this.oldValue = oldValue;
    }
}
/***
 * @template Return
 * @typedef {import("./Observable").OnSignature<import("./Observable").EventTypes, import("./events/Event.js").default, Return> &
 *    import("./Observable").OnSignature<import("./ObjectEventType").Types, ObjectEvent, Return> &
 *    import("./Observable").CombinedOnSignature<import("./Observable").EventTypes|import("./ObjectEventType").Types, Return>} ObjectOnSignature
 */ /**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * Most non-trivial classes inherit from this.
 *
 * This extends {@link module:ol/Observable~Observable} with observable
 * properties, where each property is observable as well as the object as a
 * whole.
 *
 * Classes that inherit from this have pre-defined properties, to which you can
 * add your owns. The pre-defined properties are listed in this documentation as
 * 'Observable Properties', and have their own accessors; for example,
 * {@link module:ol/Map~Map} has a `target` property, accessed with
 * `getTarget()` and changed with `setTarget()`. Not all properties are however
 * settable. There are also general-purpose accessors `get()` and `set()`. For
 * example, `get('target')` is equivalent to `getTarget()`.
 *
 * The `set` accessors trigger a change event, and you can monitor this by
 * registering a listener. For example, {@link module:ol/View~View} has a
 * `center` property, so `view.on('change:center', function(evt) {...});` would
 * call the function whenever the value of the center property changes. Within
 * the function, `evt.target` would be the view, so `evt.target.getCenter()`
 * would return the new center.
 *
 * You can add your own observable properties with
 * `object.set('prop', 'value')`, and retrieve that with `object.get('prop')`.
 * You can listen for changes on that property value with
 * `object.on('change:prop', listener)`. You can get a list of all
 * properties with {@link module:ol/Object~BaseObject#getProperties}.
 *
 * Note that the observable properties are separate from standard JS properties.
 * You can, for example, give your map object a title with
 * `map.title='New title'` and with `map.set('title', 'Another title')`. The
 * first will be a `hasOwnProperty`; the second will appear in
 * `getProperties()`. Only the second is observable.
 *
 * Properties can be deleted by using the unset method. E.g.
 * object.unset('foo').
 *
 * @fires ObjectEvent
 * @api
 */ class BaseObject extends (0, _observableJsDefault.default) {
    /**
   * @param {Object<string, *>} [values] An object with key-value pairs.
   */ constructor(values){
        super();
        /***
     * @type {ObjectOnSignature<import("./events").EventsKey>}
     */ this.on;
        /***
     * @type {ObjectOnSignature<import("./events").EventsKey>}
     */ this.once;
        /***
     * @type {ObjectOnSignature<void>}
     */ this.un;
        // Call {@link module:ol/util.getUid} to ensure that the order of objects' ids is
        // the same as the order in which they were created.  This also helps to
        // ensure that object properties are always added in the same order, which
        // helps many JavaScript engines generate faster code.
        (0, _utilJs.getUid)(this);
        /**
     * @private
     * @type {Object<string, *>}
     */ this.values_ = null;
        if (values !== undefined) this.setProperties(values);
    }
    /**
   * Gets a value.
   * @param {string} key Key name.
   * @return {*} Value.
   * @api
   */ get(key) {
        let value;
        if (this.values_ && this.values_.hasOwnProperty(key)) value = this.values_[key];
        return value;
    }
    /**
   * Get a list of object property names.
   * @return {Array<string>} List of property names.
   * @api
   */ getKeys() {
        return this.values_ && Object.keys(this.values_) || [];
    }
    /**
   * Get an object of all property names and values.
   * @return {Object<string, *>} Object.
   * @api
   */ getProperties() {
        return this.values_ && Object.assign({}, this.values_) || {};
    }
    /**
   * @return {boolean} The object has properties.
   */ hasProperties() {
        return !!this.values_;
    }
    /**
   * @param {string} key Key name.
   * @param {*} oldValue Old value.
   */ notify(key, oldValue) {
        let eventType;
        eventType = `change:${key}`;
        if (this.hasListener(eventType)) this.dispatchEvent(new ObjectEvent(eventType, key, oldValue));
        eventType = (0, _objectEventTypeJsDefault.default).PROPERTYCHANGE;
        if (this.hasListener(eventType)) this.dispatchEvent(new ObjectEvent(eventType, key, oldValue));
    }
    /**
   * @param {string} key Key name.
   * @param {import("./events.js").Listener} listener Listener.
   */ addChangeListener(key, listener) {
        this.addEventListener(`change:${key}`, listener);
    }
    /**
   * @param {string} key Key name.
   * @param {import("./events.js").Listener} listener Listener.
   */ removeChangeListener(key, listener) {
        this.removeEventListener(`change:${key}`, listener);
    }
    /**
   * Sets a value.
   * @param {string} key Key name.
   * @param {*} value Value.
   * @param {boolean} [silent] Update without triggering an event.
   * @api
   */ set(key, value, silent) {
        const values = this.values_ || (this.values_ = {});
        if (silent) values[key] = value;
        else {
            const oldValue = values[key];
            values[key] = value;
            if (oldValue !== value) this.notify(key, oldValue);
        }
    }
    /**
   * Sets a collection of key-value pairs.  Note that this changes any existing
   * properties and adds new ones (it does not remove any existing properties).
   * @param {Object<string, *>} values Values.
   * @param {boolean} [silent] Update without triggering an event.
   * @api
   */ setProperties(values, silent) {
        for(const key in values)this.set(key, values[key], silent);
    }
    /**
   * Apply any properties from another object without triggering events.
   * @param {BaseObject} source The source object.
   * @protected
   */ applyProperties(source) {
        if (!source.values_) return;
        Object.assign(this.values_ || (this.values_ = {}), source.values_);
    }
    /**
   * Unsets a property.
   * @param {string} key Key name.
   * @param {boolean} [silent] Unset without triggering an event.
   * @api
   */ unset(key, silent) {
        if (this.values_ && key in this.values_) {
            const oldValue = this.values_[key];
            delete this.values_[key];
            if ((0, _objJs.isEmpty)(this.values_)) this.values_ = null;
            if (!silent) this.notify(key, oldValue);
        }
    }
}
exports.default = BaseObject;

},{"./events/Event.js":"hwXQP","./ObjectEventType.js":"f2U6i","./Observable.js":"cQ2uI","./util.js":"pLBjQ","./obj.js":"3ssAG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hwXQP":[function(require,module,exports) {
/**
 * @module ol/events/Event
 */ /**
 * @classdesc
 * Stripped down implementation of the W3C DOM Level 2 Event interface.
 * See https://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-interface.
 *
 * This implementation only provides `type` and `target` properties, and
 * `stopPropagation` and `preventDefault` methods. It is meant as base class
 * for higher level events defined in the library, and works with
 * {@link module:ol/events/Target~Target}.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @param {Event|import("./Event.js").default} evt Event
 */ parcelHelpers.export(exports, "stopPropagation", ()=>stopPropagation);
/**
 * @param {Event|import("./Event.js").default} evt Event
 */ parcelHelpers.export(exports, "preventDefault", ()=>preventDefault);
class BaseEvent {
    /**
   * @param {string} type Type.
   */ constructor(type){
        /**
     * @type {boolean}
     */ this.propagationStopped;
        /**
     * @type {boolean}
     */ this.defaultPrevented;
        /**
     * The event type.
     * @type {string}
     * @api
     */ this.type = type;
        /**
     * The event target.
     * @type {Object}
     * @api
     */ this.target = null;
    }
    /**
   * Prevent default. This means that no emulated `click`, `singleclick` or `doubleclick` events
   * will be fired.
   * @api
   */ preventDefault() {
        this.defaultPrevented = true;
    }
    /**
   * Stop event propagation.
   * @api
   */ stopPropagation() {
        this.propagationStopped = true;
    }
}
function stopPropagation(evt) {
    evt.stopPropagation();
}
function preventDefault(evt) {
    evt.preventDefault();
}
exports.default = BaseEvent;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"f2U6i":[function(require,module,exports) {
/**
 * @module ol/ObjectEventType
 */ /**
 * @enum {string}
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    /**
   * Triggered when a property is changed.
   * @event module:ol/Object.ObjectEvent#propertychange
   * @api
   */ PROPERTYCHANGE: "propertychange"
}; /**
 * @typedef {'propertychange'} Types
 */ 

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cQ2uI":[function(require,module,exports) {
/**
 * @module ol/Observable
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Removes an event listener using the key returned by `on()` or `once()`.
 * @param {import("./events.js").EventsKey|Array<import("./events.js").EventsKey>} key The key returned by `on()`
 *     or `once()` (or an array of keys).
 * @api
 */ parcelHelpers.export(exports, "unByKey", ()=>unByKey);
var _targetJs = require("./events/Target.js");
var _targetJsDefault = parcelHelpers.interopDefault(_targetJs);
var _eventTypeJs = require("./events/EventType.js");
var _eventTypeJsDefault = parcelHelpers.interopDefault(_eventTypeJs);
var _eventsJs = require("./events.js");
/***
 * @template {string} Type
 * @template {Event|import("./events/Event.js").default} EventClass
 * @template Return
 * @typedef {(type: Type, listener: (event: EventClass) => ?) => Return} OnSignature
 */ /***
 * @template {string} Type
 * @template Return
 * @typedef {(type: Type[], listener: (event: Event|import("./events/Event").default) => ?) => Return extends void ? void : Return[]} CombinedOnSignature
 */ /**
 * @typedef {'change'|'error'} EventTypes
 */ /***
 * @template Return
 * @typedef {OnSignature<EventTypes, import("./events/Event.js").default, Return> & CombinedOnSignature<EventTypes, Return>} ObservableOnSignature
 */ /**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * An event target providing convenient methods for listener registration
 * and unregistration. A generic `change` event is always available through
 * {@link module:ol/Observable~Observable#changed}.
 *
 * @fires import("./events/Event.js").default
 * @api
 */ class Observable extends (0, _targetJsDefault.default) {
    constructor(){
        super();
        this.on = /** @type {ObservableOnSignature<import("./events").EventsKey>} */ this.onInternal;
        this.once = /** @type {ObservableOnSignature<import("./events").EventsKey>} */ this.onceInternal;
        this.un = /** @type {ObservableOnSignature<void>} */ this.unInternal;
        /**
     * @private
     * @type {number}
     */ this.revision_ = 0;
    }
    /**
   * Increases the revision counter and dispatches a 'change' event.
   * @api
   */ changed() {
        ++this.revision_;
        this.dispatchEvent((0, _eventTypeJsDefault.default).CHANGE);
    }
    /**
   * Get the version number for this object.  Each time the object is modified,
   * its version number will be incremented.
   * @return {number} Revision.
   * @api
   */ getRevision() {
        return this.revision_;
    }
    /**
   * @param {string|Array<string>} type Type.
   * @param {function((Event|import("./events/Event").default)): ?} listener Listener.
   * @return {import("./events.js").EventsKey|Array<import("./events.js").EventsKey>} Event key.
   * @protected
   */ onInternal(type, listener) {
        if (Array.isArray(type)) {
            const len = type.length;
            const keys = new Array(len);
            for(let i = 0; i < len; ++i)keys[i] = (0, _eventsJs.listen)(this, type[i], listener);
            return keys;
        }
        return (0, _eventsJs.listen)(this, /** @type {string} */ type, listener);
    }
    /**
   * @param {string|Array<string>} type Type.
   * @param {function((Event|import("./events/Event").default)): ?} listener Listener.
   * @return {import("./events.js").EventsKey|Array<import("./events.js").EventsKey>} Event key.
   * @protected
   */ onceInternal(type, listener) {
        let key;
        if (Array.isArray(type)) {
            const len = type.length;
            key = new Array(len);
            for(let i = 0; i < len; ++i)key[i] = (0, _eventsJs.listenOnce)(this, type[i], listener);
        } else key = (0, _eventsJs.listenOnce)(this, /** @type {string} */ type, listener);
        /** @type {Object} */ listener.ol_key = key;
        return key;
    }
    /**
   * Unlisten for a certain type of event.
   * @param {string|Array<string>} type Type.
   * @param {function((Event|import("./events/Event").default)): ?} listener Listener.
   * @protected
   */ unInternal(type, listener) {
        const key = /** @type {Object} */ listener.ol_key;
        if (key) unByKey(key);
        else if (Array.isArray(type)) for(let i = 0, ii = type.length; i < ii; ++i)this.removeEventListener(type[i], listener);
        else this.removeEventListener(type, listener);
    }
}
/**
 * Listen for a certain type of event.
 * @function
 * @param {string|Array<string>} type The event type or array of event types.
 * @param {function((Event|import("./events/Event").default)): ?} listener The listener function.
 * @return {import("./events.js").EventsKey|Array<import("./events.js").EventsKey>} Unique key for the listener. If
 *     called with an array of event types as the first argument, the return
 *     will be an array of keys.
 * @api
 */ Observable.prototype.on;
/**
 * Listen once for a certain type of event.
 * @function
 * @param {string|Array<string>} type The event type or array of event types.
 * @param {function((Event|import("./events/Event").default)): ?} listener The listener function.
 * @return {import("./events.js").EventsKey|Array<import("./events.js").EventsKey>} Unique key for the listener. If
 *     called with an array of event types as the first argument, the return
 *     will be an array of keys.
 * @api
 */ Observable.prototype.once;
/**
 * Unlisten for a certain type of event.
 * @function
 * @param {string|Array<string>} type The event type or array of event types.
 * @param {function((Event|import("./events/Event").default)): ?} listener The listener function.
 * @api
 */ Observable.prototype.un;
function unByKey(key) {
    if (Array.isArray(key)) for(let i = 0, ii = key.length; i < ii; ++i)(0, _eventsJs.unlistenByKey)(key[i]);
    else (0, _eventsJs.unlistenByKey)(/** @type {import("./events.js").EventsKey} */ key);
}
exports.default = Observable;

},{"./events/Target.js":"7T5Yi","./events/EventType.js":"hrQJ6","./events.js":"dcspA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7T5Yi":[function(require,module,exports) {
/**
 * @module ol/events/Target
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _disposableJs = require("../Disposable.js");
var _disposableJsDefault = parcelHelpers.interopDefault(_disposableJs);
var _eventJs = require("./Event.js");
var _eventJsDefault = parcelHelpers.interopDefault(_eventJs);
var _functionsJs = require("../functions.js");
var _objJs = require("../obj.js");
/**
 * @typedef {EventTarget|Target} EventTargetLike
 */ /**
 * @classdesc
 * A simplified implementation of the W3C DOM Level 2 EventTarget interface.
 * See https://www.w3.org/TR/2000/REC-DOM-Level-2-Events-20001113/events.html#Events-EventTarget.
 *
 * There are two important simplifications compared to the specification:
 *
 * 1. The handling of `useCapture` in `addEventListener` and
 *    `removeEventListener`. There is no real capture model.
 * 2. The handling of `stopPropagation` and `preventDefault` on `dispatchEvent`.
 *    There is no event target hierarchy. When a listener calls
 *    `stopPropagation` or `preventDefault` on an event object, it means that no
 *    more listeners after this one will be called. Same as when the listener
 *    returns false.
 */ class Target extends (0, _disposableJsDefault.default) {
    /**
   * @param {*} [target] Default event target for dispatched events.
   */ constructor(target){
        super();
        /**
     * @private
     * @type {*}
     */ this.eventTarget_ = target;
        /**
     * @private
     * @type {Object<string, number>}
     */ this.pendingRemovals_ = null;
        /**
     * @private
     * @type {Object<string, number>}
     */ this.dispatching_ = null;
        /**
     * @private
     * @type {Object<string, Array<import("../events.js").Listener>>}
     */ this.listeners_ = null;
    }
    /**
   * @param {string} type Type.
   * @param {import("../events.js").Listener} listener Listener.
   */ addEventListener(type, listener) {
        if (!type || !listener) return;
        const listeners = this.listeners_ || (this.listeners_ = {});
        const listenersForType = listeners[type] || (listeners[type] = []);
        if (!listenersForType.includes(listener)) listenersForType.push(listener);
    }
    /**
   * Dispatches an event and calls all listeners listening for events
   * of this type. The event parameter can either be a string or an
   * Object with a `type` property.
   *
   * @param {import("./Event.js").default|string} event Event object.
   * @return {boolean|undefined} `false` if anyone called preventDefault on the
   *     event object or if any of the listeners returned false.
   * @api
   */ dispatchEvent(event) {
        const isString = typeof event === "string";
        const type = isString ? event : event.type;
        const listeners = this.listeners_ && this.listeners_[type];
        if (!listeners) return;
        const evt = isString ? new (0, _eventJsDefault.default)(event) : /** @type {Event} */ event;
        if (!evt.target) evt.target = this.eventTarget_ || this;
        const dispatching = this.dispatching_ || (this.dispatching_ = {});
        const pendingRemovals = this.pendingRemovals_ || (this.pendingRemovals_ = {});
        if (!(type in dispatching)) {
            dispatching[type] = 0;
            pendingRemovals[type] = 0;
        }
        ++dispatching[type];
        let propagate;
        for(let i = 0, ii = listeners.length; i < ii; ++i){
            if ("handleEvent" in listeners[i]) propagate = /** @type {import("../events.js").ListenerObject} */ listeners[i].handleEvent(evt);
            else propagate = /** @type {import("../events.js").ListenerFunction} */ listeners[i].call(this, evt);
            if (propagate === false || evt.propagationStopped) {
                propagate = false;
                break;
            }
        }
        if (--dispatching[type] === 0) {
            let pr = pendingRemovals[type];
            delete pendingRemovals[type];
            while(pr--)this.removeEventListener(type, (0, _functionsJs.VOID));
            delete dispatching[type];
        }
        return propagate;
    }
    /**
   * Clean up.
   */ disposeInternal() {
        this.listeners_ && (0, _objJs.clear)(this.listeners_);
    }
    /**
   * Get the listeners for a specified event type. Listeners are returned in the
   * order that they will be called in.
   *
   * @param {string} type Type.
   * @return {Array<import("../events.js").Listener>|undefined} Listeners.
   */ getListeners(type) {
        return this.listeners_ && this.listeners_[type] || undefined;
    }
    /**
   * @param {string} [type] Type. If not provided,
   *     `true` will be returned if this event target has any listeners.
   * @return {boolean} Has listeners.
   */ hasListener(type) {
        if (!this.listeners_) return false;
        return type ? type in this.listeners_ : Object.keys(this.listeners_).length > 0;
    }
    /**
   * @param {string} type Type.
   * @param {import("../events.js").Listener} listener Listener.
   */ removeEventListener(type, listener) {
        const listeners = this.listeners_ && this.listeners_[type];
        if (listeners) {
            const index = listeners.indexOf(listener);
            if (index !== -1) {
                if (this.pendingRemovals_ && type in this.pendingRemovals_) {
                    // make listener a no-op, and remove later in #dispatchEvent()
                    listeners[index] = (0, _functionsJs.VOID);
                    ++this.pendingRemovals_[type];
                } else {
                    listeners.splice(index, 1);
                    if (listeners.length === 0) delete this.listeners_[type];
                }
            }
        }
    }
}
exports.default = Target;

},{"../Disposable.js":"c0oTM","./Event.js":"hwXQP","../functions.js":"iqv8I","../obj.js":"3ssAG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c0oTM":[function(require,module,exports) {
/**
 * @module ol/Disposable
 */ /**
 * @classdesc
 * Objects that need to clean up after themselves.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Disposable {
    constructor(){
        /**
     * The object has already been disposed.
     * @type {boolean}
     * @protected
     */ this.disposed = false;
    }
    /**
   * Clean up.
   */ dispose() {
        if (!this.disposed) {
            this.disposed = true;
            this.disposeInternal();
        }
    }
    /**
   * Extension point for disposable objects.
   * @protected
   */ disposeInternal() {}
}
exports.default = Disposable;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iqv8I":[function(require,module,exports) {
/**
 * @module ol/functions
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Always returns true.
 * @return {boolean} true.
 */ parcelHelpers.export(exports, "TRUE", ()=>TRUE);
/**
 * Always returns false.
 * @return {boolean} false.
 */ parcelHelpers.export(exports, "FALSE", ()=>FALSE);
/**
 * A reusable function, used e.g. as a default for callbacks.
 *
 * @return {void} Nothing.
 */ parcelHelpers.export(exports, "VOID", ()=>VOID);
/**
 * Wrap a function in another function that remembers the last return.  If the
 * returned function is called twice in a row with the same arguments and the same
 * this object, it will return the value from the first call in the second call.
 *
 * @param {function(...any): ReturnType} fn The function to memoize.
 * @return {function(...any): ReturnType} The memoized function.
 * @template ReturnType
 */ parcelHelpers.export(exports, "memoizeOne", ()=>memoizeOne);
/**
 * @template T
 * @param {function(): (T | Promise<T>)} getter A function that returns a value or a promise for a value.
 * @return {Promise<T>} A promise for the value.
 */ parcelHelpers.export(exports, "toPromise", ()=>toPromise);
var _arrayJs = require("./array.js");
function TRUE() {
    return true;
}
function FALSE() {
    return false;
}
function VOID() {}
function memoizeOne(fn) {
    let called = false;
    /** @type {ReturnType} */ let lastResult;
    /** @type {Array<any>} */ let lastArgs;
    let lastThis;
    return function() {
        const nextArgs = Array.prototype.slice.call(arguments);
        if (!called || this !== lastThis || !(0, _arrayJs.equals)(nextArgs, lastArgs)) {
            called = true;
            lastThis = this;
            lastArgs = nextArgs;
            lastResult = fn.apply(this, arguments);
        }
        return lastResult;
    };
}
function toPromise(getter) {
    function promiseGetter() {
        let value;
        try {
            value = getter();
        } catch (err) {
            return Promise.reject(err);
        }
        if (value instanceof Promise) return value;
        return Promise.resolve(value);
    }
    return promiseGetter();
}

},{"./array.js":"1Fbic","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Fbic":[function(require,module,exports) {
/**
 * @module ol/array
 */ /**
 * Performs a binary search on the provided sorted list and returns the index of the item if found. If it can't be found it'll return -1.
 * https://github.com/darkskyapp/binary-search
 *
 * @param {Array<*>} haystack Items to search through.
 * @param {*} needle The item to look for.
 * @param {Function} [comparator] Comparator function.
 * @return {number} The index of the item if found, -1 if not.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "binarySearch", ()=>binarySearch);
/**
 * Compare function sorting arrays in ascending order.  Safe to use for numeric values.
 * @param {*} a The first object to be compared.
 * @param {*} b The second object to be compared.
 * @return {number} A negative number, zero, or a positive number as the first
 *     argument is less than, equal to, or greater than the second.
 */ parcelHelpers.export(exports, "ascending", ()=>ascending);
/**
 * {@link module:ol/tilegrid/TileGrid~TileGrid#getZForResolution} can use a function
 * of this type to determine which nearest resolution to use.
 *
 * This function takes a `{number}` representing a value between two array entries,
 * a `{number}` representing the value of the nearest higher entry and
 * a `{number}` representing the value of the nearest lower entry
 * as arguments and returns a `{number}`. If a negative number or zero is returned
 * the lower value will be used, if a positive number is returned the higher value
 * will be used.
 * @typedef {function(number, number, number): number} NearestDirectionFunction
 * @api
 */ /**
 * @param {Array<number>} arr Array in descending order.
 * @param {number} target Target.
 * @param {number|NearestDirectionFunction} direction
 *    0 means return the nearest,
 *    > 0 means return the largest nearest,
 *    < 0 means return the smallest nearest.
 * @return {number} Index.
 */ parcelHelpers.export(exports, "linearFindNearest", ()=>linearFindNearest);
/**
 * @param {Array<*>} arr Array.
 * @param {number} begin Begin index.
 * @param {number} end End index.
 */ parcelHelpers.export(exports, "reverseSubArray", ()=>reverseSubArray);
/**
 * @param {Array<VALUE>} arr The array to modify.
 * @param {!Array<VALUE>|VALUE} data The elements or arrays of elements to add to arr.
 * @template VALUE
 */ parcelHelpers.export(exports, "extend", ()=>extend);
/**
 * @param {Array<VALUE>} arr The array to modify.
 * @param {VALUE} obj The element to remove.
 * @template VALUE
 * @return {boolean} If the element was removed.
 */ parcelHelpers.export(exports, "remove", ()=>remove);
/**
 * @param {Array|Uint8ClampedArray} arr1 The first array to compare.
 * @param {Array|Uint8ClampedArray} arr2 The second array to compare.
 * @return {boolean} Whether the two arrays are equal.
 */ parcelHelpers.export(exports, "equals", ()=>equals);
/**
 * Sort the passed array such that the relative order of equal elements is preserved.
 * See https://en.wikipedia.org/wiki/Sorting_algorithm#Stability for details.
 * @param {Array<*>} arr The array to sort (modifies original).
 * @param {!function(*, *): number} compareFnc Comparison function.
 * @api
 */ parcelHelpers.export(exports, "stableSort", ()=>stableSort);
/**
 * @param {Array<*>} arr The array to test.
 * @param {Function} [func] Comparison function.
 * @param {boolean} [strict] Strictly sorted (default false).
 * @return {boolean} Return index.
 */ parcelHelpers.export(exports, "isSorted", ()=>isSorted);
function binarySearch(haystack, needle, comparator) {
    let mid, cmp;
    comparator = comparator || ascending;
    let low = 0;
    let high = haystack.length;
    let found = false;
    while(low < high){
        /* Note that "(low + high) >>> 1" may overflow, and results in a typecast
     * to double (which gives the wrong results). */ mid = low + (high - low >> 1);
        cmp = +comparator(haystack[mid], needle);
        if (cmp < 0.0) /* Too low. */ low = mid + 1;
        else {
            /* Key found or too high */ high = mid;
            found = !cmp;
        }
    }
    /* Key not found. */ return found ? low : ~low;
}
function ascending(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
}
function linearFindNearest(arr, target, direction) {
    const n = arr.length;
    if (arr[0] <= target) return 0;
    else if (target <= arr[n - 1]) return n - 1;
    let i;
    if (direction > 0) for(i = 1; i < n; ++i){
        if (arr[i] < target) return i - 1;
    }
    else if (direction < 0) for(i = 1; i < n; ++i){
        if (arr[i] <= target) return i;
    }
    else for(i = 1; i < n; ++i){
        if (arr[i] == target) return i;
        else if (arr[i] < target) {
            if (typeof direction === "function") {
                if (direction(target, arr[i - 1], arr[i]) > 0) return i - 1;
                return i;
            } else if (arr[i - 1] - target < target - arr[i]) return i - 1;
            return i;
        }
    }
    return n - 1;
}
function reverseSubArray(arr, begin, end) {
    while(begin < end){
        const tmp = arr[begin];
        arr[begin] = arr[end];
        arr[end] = tmp;
        ++begin;
        --end;
    }
}
function extend(arr, data) {
    const extension = Array.isArray(data) ? data : [
        data
    ];
    const length = extension.length;
    for(let i = 0; i < length; i++)arr[arr.length] = extension[i];
}
function remove(arr, obj) {
    const i = arr.indexOf(obj);
    const found = i > -1;
    if (found) arr.splice(i, 1);
    return found;
}
function equals(arr1, arr2) {
    const len1 = arr1.length;
    if (len1 !== arr2.length) return false;
    for(let i = 0; i < len1; i++){
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}
function stableSort(arr, compareFnc) {
    const length = arr.length;
    const tmp = Array(arr.length);
    let i;
    for(i = 0; i < length; i++)tmp[i] = {
        index: i,
        value: arr[i]
    };
    tmp.sort(function(a, b) {
        return compareFnc(a.value, b.value) || a.index - b.index;
    });
    for(i = 0; i < arr.length; i++)arr[i] = tmp[i].value;
}
function isSorted(arr, func, strict) {
    const compare = func || ascending;
    return arr.every(function(currentVal, index) {
        if (index === 0) return true;
        const res = compare(arr[index - 1], currentVal);
        return !(res > 0 || strict && res === 0);
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3ssAG":[function(require,module,exports) {
/**
 * @module ol/obj
 */ /**
 * Removes all properties from an object.
 * @param {Object} object The object to clear.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "clear", ()=>clear);
/**
 * Determine if an object has any properties.
 * @param {Object} object The object to check.
 * @return {boolean} The object is empty.
 */ parcelHelpers.export(exports, "isEmpty", ()=>isEmpty);
function clear(object) {
    for(const property in object)delete object[property];
}
function isEmpty(object) {
    let property;
    for(property in object)return false;
    return !property;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hrQJ6":[function(require,module,exports) {
/**
 * @module ol/events/EventType
 */ /**
 * @enum {string}
 * @const
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    /**
   * Generic change event. Triggered when the revision counter is increased.
   * @event module:ol/events/Event~BaseEvent#change
   * @api
   */ CHANGE: "change",
    /**
   * Generic error event. Triggered when an error occurs.
   * @event module:ol/events/Event~BaseEvent#error
   * @api
   */ ERROR: "error",
    BLUR: "blur",
    CLEAR: "clear",
    CONTEXTMENU: "contextmenu",
    CLICK: "click",
    DBLCLICK: "dblclick",
    DRAGENTER: "dragenter",
    DRAGOVER: "dragover",
    DROP: "drop",
    FOCUS: "focus",
    KEYDOWN: "keydown",
    KEYPRESS: "keypress",
    LOAD: "load",
    RESIZE: "resize",
    TOUCHMOVE: "touchmove",
    WHEEL: "wheel"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dcspA":[function(require,module,exports) {
/**
 * @module ol/events
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Key to use with {@link module:ol/Observable.unByKey}.
 * @typedef {Object} EventsKey
 * @property {ListenerFunction} listener Listener.
 * @property {import("./events/Target.js").EventTargetLike} target Target.
 * @property {string} type Type.
 * @api
 */ /**
 * Listener function. This function is called with an event object as argument.
 * When the function returns `false`, event propagation will stop.
 *
 * @typedef {function((Event|import("./events/Event.js").default)): (void|boolean)} ListenerFunction
 * @api
 */ /**
 * @typedef {Object} ListenerObject
 * @property {ListenerFunction} handleEvent HandleEvent listener function.
 */ /**
 * @typedef {ListenerFunction|ListenerObject} Listener
 */ /**
 * Registers an event listener on an event target. Inspired by
 * https://google.github.io/closure-library/api/source/closure/goog/events/events.js.src.html
 *
 * This function efficiently binds a `listener` to a `this` object, and returns
 * a key for use with {@link module:ol/events.unlistenByKey}.
 *
 * @param {import("./events/Target.js").EventTargetLike} target Event target.
 * @param {string} type Event type.
 * @param {ListenerFunction} listener Listener.
 * @param {Object} [thisArg] Object referenced by the `this` keyword in the
 *     listener. Default is the `target`.
 * @param {boolean} [once] If true, add the listener as one-off listener.
 * @return {EventsKey} Unique key for the listener.
 */ parcelHelpers.export(exports, "listen", ()=>listen);
/**
 * Registers a one-off event listener on an event target. Inspired by
 * https://google.github.io/closure-library/api/source/closure/goog/events/events.js.src.html
 *
 * This function efficiently binds a `listener` as self-unregistering listener
 * to a `this` object, and returns a key for use with
 * {@link module:ol/events.unlistenByKey} in case the listener needs to be
 * unregistered before it is called.
 *
 * When {@link module:ol/events.listen} is called with the same arguments after this
 * function, the self-unregistering listener will be turned into a permanent
 * listener.
 *
 * @param {import("./events/Target.js").EventTargetLike} target Event target.
 * @param {string} type Event type.
 * @param {ListenerFunction} listener Listener.
 * @param {Object} [thisArg] Object referenced by the `this` keyword in the
 *     listener. Default is the `target`.
 * @return {EventsKey} Key for unlistenByKey.
 */ parcelHelpers.export(exports, "listenOnce", ()=>listenOnce);
/**
 * Unregisters event listeners on an event target. Inspired by
 * https://google.github.io/closure-library/api/source/closure/goog/events/events.js.src.html
 *
 * The argument passed to this function is the key returned from
 * {@link module:ol/events.listen} or {@link module:ol/events.listenOnce}.
 *
 * @param {EventsKey} key The key.
 */ parcelHelpers.export(exports, "unlistenByKey", ()=>unlistenByKey);
var _objJs = require("./obj.js");
function listen(target, type, listener, thisArg, once) {
    if (thisArg && thisArg !== target) listener = listener.bind(thisArg);
    if (once) {
        const originalListener = listener;
        listener = function() {
            target.removeEventListener(type, listener);
            originalListener.apply(this, arguments);
        };
    }
    const eventsKey = {
        target: target,
        type: type,
        listener: listener
    };
    target.addEventListener(type, listener);
    return eventsKey;
}
function listenOnce(target, type, listener, thisArg) {
    return listen(target, type, listener, thisArg, true);
}
function unlistenByKey(key) {
    if (key && key.target) {
        key.target.removeEventListener(key.type, key.listener);
        (0, _objJs.clear)(key);
    }
}

},{"./obj.js":"3ssAG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"pLBjQ":[function(require,module,exports) {
/**
 * @module ol/util
 */ /**
 * @return {never} Any return.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "abstract", ()=>abstract);
/**
 * Gets a unique ID for an object. This mutates the object so that further calls
 * with the same object as a parameter returns the same value. Unique IDs are generated
 * as a strictly increasing sequence. Adapted from goog.getUid.
 *
 * @param {Object} obj The object to get the unique ID for.
 * @return {string} The unique ID for the object.
 * @api
 */ parcelHelpers.export(exports, "getUid", ()=>getUid);
parcelHelpers.export(exports, "VERSION", ()=>VERSION);
function abstract() {
    throw new Error("Unimplemented abstract method.");
}
/**
 * Counter for getUid.
 * @type {number}
 * @private
 */ let uidCounter_ = 0;
function getUid(obj) {
    return obj.ol_uid || (obj.ol_uid = String(++uidCounter_));
}
const VERSION = "7.3.0";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gReoh":[function(require,module,exports) {
/**
 * @module ol/Collection
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @classdesc
 * Events emitted by {@link module:ol/Collection~Collection} instances are instances of this
 * type.
 * @template T
 */ parcelHelpers.export(exports, "CollectionEvent", ()=>CollectionEvent);
var _assertionErrorJs = require("./AssertionError.js");
var _assertionErrorJsDefault = parcelHelpers.interopDefault(_assertionErrorJs);
var _objectJs = require("./Object.js");
var _objectJsDefault = parcelHelpers.interopDefault(_objectJs);
var _collectionEventTypeJs = require("./CollectionEventType.js");
var _collectionEventTypeJsDefault = parcelHelpers.interopDefault(_collectionEventTypeJs);
var _eventJs = require("./events/Event.js");
var _eventJsDefault = parcelHelpers.interopDefault(_eventJs);
/**
 * @enum {string}
 * @private
 */ const Property = {
    LENGTH: "length"
};
class CollectionEvent extends (0, _eventJsDefault.default) {
    /**
   * @param {import("./CollectionEventType.js").default} type Type.
   * @param {T} element Element.
   * @param {number} index The index of the added or removed element.
   */ constructor(type, element, index){
        super(type);
        /**
     * The element that is added to or removed from the collection.
     * @type {T}
     * @api
     */ this.element = element;
        /**
     * The index of the added or removed element.
     * @type {number}
     * @api
     */ this.index = index;
    }
}
/***
 * @template T
 * @template Return
 * @typedef {import("./Observable").OnSignature<import("./Observable").EventTypes, import("./events/Event.js").default, Return> &
 *   import("./Observable").OnSignature<import("./ObjectEventType").Types|'change:length', import("./Object").ObjectEvent, Return> &
 *   import("./Observable").OnSignature<'add'|'remove', CollectionEvent<T>, Return> &
 *   import("./Observable").CombinedOnSignature<import("./Observable").EventTypes|import("./ObjectEventType").Types|
 *     'change:length'|'add'|'remove',Return>} CollectionOnSignature
 */ /**
 * @typedef {Object} Options
 * @property {boolean} [unique=false] Disallow the same item from being added to
 * the collection twice.
 */ /**
 * @classdesc
 * An expanded version of standard JS Array, adding convenience methods for
 * manipulation. Add and remove changes to the Collection trigger a Collection
 * event. Note that this does not cover changes to the objects _within_ the
 * Collection; they trigger events on the appropriate object, not on the
 * Collection as a whole.
 *
 * @fires CollectionEvent
 *
 * @template T
 * @api
 */ class Collection extends (0, _objectJsDefault.default) {
    /**
   * @param {Array<T>} [array] Array.
   * @param {Options} [options] Collection options.
   */ constructor(array, options){
        super();
        /***
     * @type {CollectionOnSignature<T, import("./events").EventsKey>}
     */ this.on;
        /***
     * @type {CollectionOnSignature<T, import("./events").EventsKey>}
     */ this.once;
        /***
     * @type {CollectionOnSignature<T, void>}
     */ this.un;
        options = options || {};
        /**
     * @private
     * @type {boolean}
     */ this.unique_ = !!options.unique;
        /**
     * @private
     * @type {!Array<T>}
     */ this.array_ = array ? array : [];
        if (this.unique_) for(let i = 0, ii = this.array_.length; i < ii; ++i)this.assertUnique_(this.array_[i], i);
        this.updateLength_();
    }
    /**
   * Remove all elements from the collection.
   * @api
   */ clear() {
        while(this.getLength() > 0)this.pop();
    }
    /**
   * Add elements to the collection.  This pushes each item in the provided array
   * to the end of the collection.
   * @param {!Array<T>} arr Array.
   * @return {Collection<T>} This collection.
   * @api
   */ extend(arr) {
        for(let i = 0, ii = arr.length; i < ii; ++i)this.push(arr[i]);
        return this;
    }
    /**
   * Iterate over each element, calling the provided callback.
   * @param {function(T, number, Array<T>): *} f The function to call
   *     for every element. This function takes 3 arguments (the element, the
   *     index and the array). The return value is ignored.
   * @api
   */ forEach(f) {
        const array = this.array_;
        for(let i = 0, ii = array.length; i < ii; ++i)f(array[i], i, array);
    }
    /**
   * Get a reference to the underlying Array object. Warning: if the array
   * is mutated, no events will be dispatched by the collection, and the
   * collection's "length" property won't be in sync with the actual length
   * of the array.
   * @return {!Array<T>} Array.
   * @api
   */ getArray() {
        return this.array_;
    }
    /**
   * Get the element at the provided index.
   * @param {number} index Index.
   * @return {T} Element.
   * @api
   */ item(index) {
        return this.array_[index];
    }
    /**
   * Get the length of this collection.
   * @return {number} The length of the array.
   * @observable
   * @api
   */ getLength() {
        return this.get(Property.LENGTH);
    }
    /**
   * Insert an element at the provided index.
   * @param {number} index Index.
   * @param {T} elem Element.
   * @api
   */ insertAt(index, elem) {
        if (index < 0 || index > this.getLength()) throw new Error("Index out of bounds: " + index);
        if (this.unique_) this.assertUnique_(elem);
        this.array_.splice(index, 0, elem);
        this.updateLength_();
        this.dispatchEvent(new CollectionEvent((0, _collectionEventTypeJsDefault.default).ADD, elem, index));
    }
    /**
   * Remove the last element of the collection and return it.
   * Return `undefined` if the collection is empty.
   * @return {T|undefined} Element.
   * @api
   */ pop() {
        return this.removeAt(this.getLength() - 1);
    }
    /**
   * Insert the provided element at the end of the collection.
   * @param {T} elem Element.
   * @return {number} New length of the collection.
   * @api
   */ push(elem) {
        if (this.unique_) this.assertUnique_(elem);
        const n = this.getLength();
        this.insertAt(n, elem);
        return this.getLength();
    }
    /**
   * Remove the first occurrence of an element from the collection.
   * @param {T} elem Element.
   * @return {T|undefined} The removed element or undefined if none found.
   * @api
   */ remove(elem) {
        const arr = this.array_;
        for(let i = 0, ii = arr.length; i < ii; ++i){
            if (arr[i] === elem) return this.removeAt(i);
        }
        return undefined;
    }
    /**
   * Remove the element at the provided index and return it.
   * Return `undefined` if the collection does not contain this index.
   * @param {number} index Index.
   * @return {T|undefined} Value.
   * @api
   */ removeAt(index) {
        if (index < 0 || index >= this.getLength()) return undefined;
        const prev = this.array_[index];
        this.array_.splice(index, 1);
        this.updateLength_();
        this.dispatchEvent(/** @type {CollectionEvent<T>} */ new CollectionEvent((0, _collectionEventTypeJsDefault.default).REMOVE, prev, index));
        return prev;
    }
    /**
   * Set the element at the provided index.
   * @param {number} index Index.
   * @param {T} elem Element.
   * @api
   */ setAt(index, elem) {
        const n = this.getLength();
        if (index >= n) {
            this.insertAt(index, elem);
            return;
        }
        if (index < 0) throw new Error("Index out of bounds: " + index);
        if (this.unique_) this.assertUnique_(elem, index);
        const prev = this.array_[index];
        this.array_[index] = elem;
        this.dispatchEvent(/** @type {CollectionEvent<T>} */ new CollectionEvent((0, _collectionEventTypeJsDefault.default).REMOVE, prev, index));
        this.dispatchEvent(/** @type {CollectionEvent<T>} */ new CollectionEvent((0, _collectionEventTypeJsDefault.default).ADD, elem, index));
    }
    /**
   * @private
   */ updateLength_() {
        this.set(Property.LENGTH, this.array_.length);
    }
    /**
   * @private
   * @param {T} elem Element.
   * @param {number} [except] Optional index to ignore.
   */ assertUnique_(elem, except) {
        for(let i = 0, ii = this.array_.length; i < ii; ++i){
            if (this.array_[i] === elem && i !== except) throw new (0, _assertionErrorJsDefault.default)(58);
        }
    }
}
exports.default = Collection;

},{"./AssertionError.js":"1MBbN","./Object.js":"1zG8z","./CollectionEventType.js":"82Ksf","./events/Event.js":"hwXQP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1MBbN":[function(require,module,exports) {
/**
 * @module ol/AssertionError
 */ /** @type {Object<number, string>} */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const messages = {
    1: "The view center is not defined",
    2: "The view resolution is not defined",
    3: "The view rotation is not defined",
    4: "`image` and `src` cannot be provided at the same time",
    5: "`imgSize` must be set when `image` is provided",
    7: "`format` must be set when `url` is set",
    8: "Unknown `serverType` configured",
    9: "`url` must be configured or set using `#setUrl()`",
    10: "The default `geometryFunction` can only handle `Point` geometries",
    11: "`options.featureTypes` must be an Array",
    12: "`options.geometryName` must also be provided when `options.bbox` is set",
    13: "Invalid corner",
    14: "Invalid color",
    15: "Tried to get a value for a key that does not exist in the cache",
    16: "Tried to set a value for a key that is used already",
    17: "`resolutions` must be sorted in descending order",
    18: "Either `origin` or `origins` must be configured, never both",
    19: "Number of `tileSizes` and `resolutions` must be equal",
    20: "Number of `origins` and `resolutions` must be equal",
    22: "Either `tileSize` or `tileSizes` must be configured, never both",
    24: "Invalid extent or geometry provided as `geometry`",
    25: "Cannot fit empty extent provided as `geometry`",
    26: "Features must have an id set",
    27: "Features must have an id set",
    28: '`renderMode` must be `"hybrid"` or `"vector"`',
    30: "The passed `feature` was already added to the source",
    31: "Tried to enqueue an `element` that was already added to the queue",
    32: "Transformation matrix cannot be inverted",
    33: "Invalid units",
    34: "Invalid geometry layout",
    36: "Unknown SRS type",
    37: "Unknown geometry type found",
    38: "`styleMapValue` has an unknown type",
    39: "Unknown geometry type",
    40: "Expected `feature` to have a geometry",
    41: "Expected an `ol/style/Style` or an array of `ol/style/Style.js`",
    42: "Question unknown, the answer is 42",
    43: "Expected `layers` to be an array or a `Collection`",
    47: "Expected `controls` to be an array or an `ol/Collection`",
    48: "Expected `interactions` to be an array or an `ol/Collection`",
    49: "Expected `overlays` to be an array or an `ol/Collection`",
    50: "`options.featureTypes` should be an Array",
    51: "Either `url` or `tileJSON` options must be provided",
    52: "Unknown `serverType` configured",
    53: "Unknown `tierSizeCalculation` configured",
    55: "The {-y} placeholder requires a tile grid with extent",
    56: "mapBrowserEvent must originate from a pointer event",
    57: "At least 2 conditions are required",
    59: "Invalid command found in the PBF",
    60: "Missing or invalid `size`",
    61: "Cannot determine IIIF Image API version from provided image information JSON",
    62: "A `WebGLArrayBuffer` must either be of type `ELEMENT_ARRAY_BUFFER` or `ARRAY_BUFFER`",
    64: "Layer opacity must be a number",
    66: "`forEachFeatureAtCoordinate` cannot be used on a WebGL layer if the hit detection logic has not been enabled. This is done by providing adequate shaders using the `hitVertexShader` and `hitFragmentShader` properties of `WebGLPointsLayerRenderer`",
    67: "A layer can only be added to the map once. Use either `layer.setMap()` or `map.addLayer()`, not both",
    68: "A VectorTile source can only be rendered if it has a projection compatible with the view projection",
    69: "`width` or `height` cannot be provided together with `scale`"
};
/**
 * Error object thrown when an assertion failed. This is an ECMA-262 Error,
 * extended with a `code` property.
 * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error.
 */ class AssertionError extends Error {
    /**
   * @param {number} code Error code.
   */ constructor(code){
        const message = messages[code];
        super(message);
        /**
     * Error code. The meaning of the code can be found on
     * https://openlayers.org/en/latest/doc/errors/ (replace `latest` with
     * the version found in the OpenLayers script's header comment if a version
     * other than the latest is used).
     * @type {number}
     * @deprecated ol/AssertionError and error codes will be removed in v8.0
     * @api
     */ this.code = code;
        /**
     * @type {string}
     */ this.name = "AssertionError";
        // Re-assign message, see https://github.com/Rich-Harris/buble/issues/40
        this.message = message;
    }
}
exports.default = AssertionError;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"82Ksf":[function(require,module,exports) {
/**
 * @module ol/CollectionEventType
 */ /**
 * @enum {string}
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    /**
   * Triggered when an item is added to the collection.
   * @event module:ol/Collection.CollectionEvent#add
   * @api
   */ ADD: "add",
    /**
   * Triggered when an item is removed from the collection.
   * @event module:ol/Collection.CollectionEvent#remove
   * @api
   */ REMOVE: "remove"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fRfJ1":[function(require,module,exports) {
/**
 * @module ol/renderer/Composite
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _mapJs = require("./Map.js");
var _mapJsDefault = parcelHelpers.interopDefault(_mapJs);
var _objectEventTypeJs = require("../ObjectEventType.js");
var _objectEventTypeJsDefault = parcelHelpers.interopDefault(_objectEventTypeJs);
var _eventJs = require("../render/Event.js");
var _eventJsDefault = parcelHelpers.interopDefault(_eventJs);
var _eventTypeJs = require("../render/EventType.js");
var _eventTypeJsDefault = parcelHelpers.interopDefault(_eventTypeJs);
var _cssJs = require("../css.js");
var _canvasJs = require("../render/canvas.js");
var _layerJs = require("../layer/Layer.js");
var _eventsJs = require("../events.js");
var _domJs = require("../dom.js");
/**
 * @classdesc
 * Canvas map renderer.
 * @api
 */ class CompositeMapRenderer extends (0, _mapJsDefault.default) {
    /**
   * @param {import("../Map.js").default} map Map.
   */ constructor(map){
        super(map);
        /**
     * @type {import("../events.js").EventsKey}
     */ this.fontChangeListenerKey_ = (0, _eventsJs.listen)((0, _canvasJs.checkedFonts), (0, _objectEventTypeJsDefault.default).PROPERTYCHANGE, map.redrawText.bind(map));
        /**
     * @private
     * @type {HTMLDivElement}
     */ this.element_ = document.createElement("div");
        const style = this.element_.style;
        style.position = "absolute";
        style.width = "100%";
        style.height = "100%";
        style.zIndex = "0";
        this.element_.className = (0, _cssJs.CLASS_UNSELECTABLE) + " ol-layers";
        const container = map.getViewport();
        container.insertBefore(this.element_, container.firstChild || null);
        /**
     * @private
     * @type {Array<HTMLElement>}
     */ this.children_ = [];
        /**
     * @private
     * @type {boolean}
     */ this.renderedVisible_ = true;
    }
    /**
   * @param {import("../render/EventType.js").default} type Event type.
   * @param {import("../Map.js").FrameState} frameState Frame state.
   */ dispatchRenderEvent(type, frameState) {
        const map = this.getMap();
        if (map.hasListener(type)) {
            const event = new (0, _eventJsDefault.default)(type, undefined, frameState);
            map.dispatchEvent(event);
        }
    }
    disposeInternal() {
        (0, _eventsJs.unlistenByKey)(this.fontChangeListenerKey_);
        this.element_.parentNode.removeChild(this.element_);
        super.disposeInternal();
    }
    /**
   * Render.
   * @param {?import("../Map.js").FrameState} frameState Frame state.
   */ renderFrame(frameState) {
        if (!frameState) {
            if (this.renderedVisible_) {
                this.element_.style.display = "none";
                this.renderedVisible_ = false;
            }
            return;
        }
        this.calculateMatrices2D(frameState);
        this.dispatchRenderEvent((0, _eventTypeJsDefault.default).PRECOMPOSE, frameState);
        const layerStatesArray = frameState.layerStatesArray.sort(function(a, b) {
            return a.zIndex - b.zIndex;
        });
        const viewState = frameState.viewState;
        this.children_.length = 0;
        /**
     * @type {Array<import("../layer/BaseVector.js").default>}
     */ const declutterLayers = [];
        let previousElement = null;
        for(let i = 0, ii = layerStatesArray.length; i < ii; ++i){
            const layerState = layerStatesArray[i];
            frameState.layerIndex = i;
            const layer = layerState.layer;
            const sourceState = layer.getSourceState();
            if (!(0, _layerJs.inView)(layerState, viewState) || sourceState != "ready" && sourceState != "undefined") {
                layer.unrender();
                continue;
            }
            const element = layer.render(frameState, previousElement);
            if (!element) continue;
            if (element !== previousElement) {
                this.children_.push(element);
                previousElement = element;
            }
            if ("getDeclutter" in layer) declutterLayers.push(/** @type {import("../layer/BaseVector.js").default} */ layer);
        }
        for(let i = declutterLayers.length - 1; i >= 0; --i)declutterLayers[i].renderDeclutter(frameState);
        (0, _domJs.replaceChildren)(this.element_, this.children_);
        this.dispatchRenderEvent((0, _eventTypeJsDefault.default).POSTCOMPOSE, frameState);
        if (!this.renderedVisible_) {
            this.element_.style.display = "";
            this.renderedVisible_ = true;
        }
        this.scheduleExpireIconCache(frameState);
    }
}
exports.default = CompositeMapRenderer;

},{"./Map.js":"5iRLs","../ObjectEventType.js":"f2U6i","../render/Event.js":"bpzid","../render/EventType.js":"5G9JA","../css.js":"lDlNi","../render/canvas.js":"e85iQ","../layer/Layer.js":"8J9Kf","../events.js":"dcspA","../dom.js":"84QzQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5iRLs":[function(require,module,exports) {
/**
 * @module ol/renderer/Map
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _disposableJs = require("../Disposable.js");
var _disposableJsDefault = parcelHelpers.interopDefault(_disposableJs);
var _functionsJs = require("../functions.js");
var _utilJs = require("../util.js");
var _transformJs = require("../transform.js");
var _extentJs = require("../extent.js");
var _iconImageCacheJs = require("../style/IconImageCache.js");
var _layerJs = require("../layer/Layer.js");
var _coordinateJs = require("../coordinate.js");
/**
 * @typedef HitMatch
 * @property {import("../Feature.js").FeatureLike} feature Feature.
 * @property {import("../layer/Layer.js").default} layer Layer.
 * @property {import("../geom/SimpleGeometry.js").default} geometry Geometry.
 * @property {number} distanceSq Squared distance.
 * @property {import("./vector.js").FeatureCallback<T>} callback Callback.
 * @template T
 */ /**
 * @abstract
 */ class MapRenderer extends (0, _disposableJsDefault.default) {
    /**
   * @param {import("../Map.js").default} map Map.
   */ constructor(map){
        super();
        /**
     * @private
     * @type {import("../Map.js").default}
     */ this.map_ = map;
    }
    /**
   * @abstract
   * @param {import("../render/EventType.js").default} type Event type.
   * @param {import("../Map.js").FrameState} frameState Frame state.
   */ dispatchRenderEvent(type, frameState) {
        (0, _utilJs.abstract)();
    }
    /**
   * @param {import("../Map.js").FrameState} frameState FrameState.
   * @protected
   */ calculateMatrices2D(frameState) {
        const viewState = frameState.viewState;
        const coordinateToPixelTransform = frameState.coordinateToPixelTransform;
        const pixelToCoordinateTransform = frameState.pixelToCoordinateTransform;
        (0, _transformJs.compose)(coordinateToPixelTransform, frameState.size[0] / 2, frameState.size[1] / 2, 1 / viewState.resolution, -1 / viewState.resolution, -viewState.rotation, -viewState.center[0], -viewState.center[1]);
        (0, _transformJs.makeInverse)(pixelToCoordinateTransform, coordinateToPixelTransform);
    }
    /**
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @param {import("../Map.js").FrameState} frameState FrameState.
   * @param {number} hitTolerance Hit tolerance in pixels.
   * @param {boolean} checkWrapped Check for wrapped geometries.
   * @param {import("./vector.js").FeatureCallback<T>} callback Feature callback.
   * @param {S} thisArg Value to use as `this` when executing `callback`.
   * @param {function(this: U, import("../layer/Layer.js").default): boolean} layerFilter Layer filter
   *     function, only layers which are visible and for which this function
   *     returns `true` will be tested for features.  By default, all visible
   *     layers will be tested.
   * @param {U} thisArg2 Value to use as `this` when executing `layerFilter`.
   * @return {T|undefined} Callback result.
   * @template S,T,U
   */ forEachFeatureAtCoordinate(coordinate, frameState, hitTolerance, checkWrapped, callback, thisArg, layerFilter, thisArg2) {
        let result;
        const viewState = frameState.viewState;
        /**
     * @param {boolean} managed Managed layer.
     * @param {import("../Feature.js").FeatureLike} feature Feature.
     * @param {import("../layer/Layer.js").default} layer Layer.
     * @param {import("../geom/Geometry.js").default} geometry Geometry.
     * @return {T|undefined} Callback result.
     */ function forEachFeatureAtCoordinate(managed, feature, layer, geometry) {
            return callback.call(thisArg, feature, managed ? layer : null, geometry);
        }
        const projection = viewState.projection;
        const translatedCoordinate = (0, _coordinateJs.wrapX)(coordinate.slice(), projection);
        const offsets = [
            [
                0,
                0
            ]
        ];
        if (projection.canWrapX() && checkWrapped) {
            const projectionExtent = projection.getExtent();
            const worldWidth = (0, _extentJs.getWidth)(projectionExtent);
            offsets.push([
                -worldWidth,
                0
            ], [
                worldWidth,
                0
            ]);
        }
        const layerStates = frameState.layerStatesArray;
        const numLayers = layerStates.length;
        const matches = /** @type {Array<HitMatch<T>>} */ [];
        const tmpCoord = [];
        for(let i = 0; i < offsets.length; i++)for(let j = numLayers - 1; j >= 0; --j){
            const layerState = layerStates[j];
            const layer = layerState.layer;
            if (layer.hasRenderer() && (0, _layerJs.inView)(layerState, viewState) && layerFilter.call(thisArg2, layer)) {
                const layerRenderer = layer.getRenderer();
                const source = layer.getSource();
                if (layerRenderer && source) {
                    const coordinates = source.getWrapX() ? translatedCoordinate : coordinate;
                    const callback = forEachFeatureAtCoordinate.bind(null, layerState.managed);
                    tmpCoord[0] = coordinates[0] + offsets[i][0];
                    tmpCoord[1] = coordinates[1] + offsets[i][1];
                    result = layerRenderer.forEachFeatureAtCoordinate(tmpCoord, frameState, hitTolerance, callback, matches);
                }
                if (result) return result;
            }
        }
        if (matches.length === 0) return undefined;
        const order = 1 / matches.length;
        matches.forEach((m, i)=>m.distanceSq += i * order);
        matches.sort((a, b)=>a.distanceSq - b.distanceSq);
        matches.some((m)=>{
            return result = m.callback(m.feature, m.layer, m.geometry);
        });
        return result;
    }
    /**
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @param {import("../Map.js").FrameState} frameState FrameState.
   * @param {number} hitTolerance Hit tolerance in pixels.
   * @param {boolean} checkWrapped Check for wrapped geometries.
   * @param {function(this: U, import("../layer/Layer.js").default): boolean} layerFilter Layer filter
   *     function, only layers which are visible and for which this function
   *     returns `true` will be tested for features.  By default, all visible
   *     layers will be tested.
   * @param {U} thisArg Value to use as `this` when executing `layerFilter`.
   * @return {boolean} Is there a feature at the given coordinate?
   * @template U
   */ hasFeatureAtCoordinate(coordinate, frameState, hitTolerance, checkWrapped, layerFilter, thisArg) {
        const hasFeature = this.forEachFeatureAtCoordinate(coordinate, frameState, hitTolerance, checkWrapped, (0, _functionsJs.TRUE), this, layerFilter, thisArg);
        return hasFeature !== undefined;
    }
    /**
   * @return {import("../Map.js").default} Map.
   */ getMap() {
        return this.map_;
    }
    /**
   * Render.
   * @abstract
   * @param {?import("../Map.js").FrameState} frameState Frame state.
   */ renderFrame(frameState) {
        (0, _utilJs.abstract)();
    }
    /**
   * @param {import("../Map.js").FrameState} frameState Frame state.
   * @protected
   */ scheduleExpireIconCache(frameState) {
        if ((0, _iconImageCacheJs.shared).canExpireCache()) frameState.postRenderFunctions.push(expireIconCache);
    }
}
/**
 * @param {import("../Map.js").default} map Map.
 * @param {import("../Map.js").FrameState} frameState Frame state.
 */ function expireIconCache(map, frameState) {
    (0, _iconImageCacheJs.shared).expire();
}
exports.default = MapRenderer;

},{"../Disposable.js":"c0oTM","../functions.js":"iqv8I","../util.js":"pLBjQ","../transform.js":"1BqUf","../extent.js":"6YrVc","../style/IconImageCache.js":"2uEpE","../layer/Layer.js":"8J9Kf","../coordinate.js":"85Vu7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1BqUf":[function(require,module,exports) {
/**
 * @module ol/transform
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Create an identity transform.
 * @return {!Transform} Identity transform.
 */ parcelHelpers.export(exports, "create", ()=>create);
/**
 * Resets the given transform to an identity transform.
 * @param {!Transform} transform Transform.
 * @return {!Transform} Transform.
 */ parcelHelpers.export(exports, "reset", ()=>reset);
/**
 * Multiply the underlying matrices of two transforms and return the result in
 * the first transform.
 * @param {!Transform} transform1 Transform parameters of matrix 1.
 * @param {!Transform} transform2 Transform parameters of matrix 2.
 * @return {!Transform} transform1 multiplied with transform2.
 */ parcelHelpers.export(exports, "multiply", ()=>multiply);
/**
 * Set the transform components a-f on a given transform.
 * @param {!Transform} transform Transform.
 * @param {number} a The a component of the transform.
 * @param {number} b The b component of the transform.
 * @param {number} c The c component of the transform.
 * @param {number} d The d component of the transform.
 * @param {number} e The e component of the transform.
 * @param {number} f The f component of the transform.
 * @return {!Transform} Matrix with transform applied.
 */ parcelHelpers.export(exports, "set", ()=>set);
/**
 * Set transform on one matrix from another matrix.
 * @param {!Transform} transform1 Matrix to set transform to.
 * @param {!Transform} transform2 Matrix to set transform from.
 * @return {!Transform} transform1 with transform from transform2 applied.
 */ parcelHelpers.export(exports, "setFromArray", ()=>setFromArray);
/**
 * Transforms the given coordinate with the given transform returning the
 * resulting, transformed coordinate. The coordinate will be modified in-place.
 *
 * @param {Transform} transform The transformation.
 * @param {import("./coordinate.js").Coordinate|import("./pixel.js").Pixel} coordinate The coordinate to transform.
 * @return {import("./coordinate.js").Coordinate|import("./pixel.js").Pixel} return coordinate so that operations can be
 *     chained together.
 */ parcelHelpers.export(exports, "apply", ()=>apply);
/**
 * Applies rotation to the given transform.
 * @param {!Transform} transform Transform.
 * @param {number} angle Angle in radians.
 * @return {!Transform} The rotated transform.
 */ parcelHelpers.export(exports, "rotate", ()=>rotate);
/**
 * Applies scale to a given transform.
 * @param {!Transform} transform Transform.
 * @param {number} x Scale factor x.
 * @param {number} y Scale factor y.
 * @return {!Transform} The scaled transform.
 */ parcelHelpers.export(exports, "scale", ()=>scale);
/**
 * Creates a scale transform.
 * @param {!Transform} target Transform to overwrite.
 * @param {number} x Scale factor x.
 * @param {number} y Scale factor y.
 * @return {!Transform} The scale transform.
 */ parcelHelpers.export(exports, "makeScale", ()=>makeScale);
/**
 * Applies translation to the given transform.
 * @param {!Transform} transform Transform.
 * @param {number} dx Translation x.
 * @param {number} dy Translation y.
 * @return {!Transform} The translated transform.
 */ parcelHelpers.export(exports, "translate", ()=>translate);
/**
 * Creates a composite transform given an initial translation, scale, rotation, and
 * final translation (in that order only, not commutative).
 * @param {!Transform} transform The transform (will be modified in place).
 * @param {number} dx1 Initial translation x.
 * @param {number} dy1 Initial translation y.
 * @param {number} sx Scale factor x.
 * @param {number} sy Scale factor y.
 * @param {number} angle Rotation (in counter-clockwise radians).
 * @param {number} dx2 Final translation x.
 * @param {number} dy2 Final translation y.
 * @return {!Transform} The composite transform.
 */ parcelHelpers.export(exports, "compose", ()=>compose);
/**
 * Creates a composite transform given an initial translation, scale, rotation, and
 * final translation (in that order only, not commutative). The resulting transform
 * string can be applied as `transform` property of an HTMLElement's style.
 * @param {number} dx1 Initial translation x.
 * @param {number} dy1 Initial translation y.
 * @param {number} sx Scale factor x.
 * @param {number} sy Scale factor y.
 * @param {number} angle Rotation (in counter-clockwise radians).
 * @param {number} dx2 Final translation x.
 * @param {number} dy2 Final translation y.
 * @return {string} The composite css transform.
 * @api
 */ parcelHelpers.export(exports, "composeCssTransform", ()=>composeCssTransform);
/**
 * Invert the given transform.
 * @param {!Transform} source The source transform to invert.
 * @return {!Transform} The inverted (source) transform.
 */ parcelHelpers.export(exports, "invert", ()=>invert);
/**
 * Invert the given transform.
 * @param {!Transform} target Transform to be set as the inverse of
 *     the source transform.
 * @param {!Transform} source The source transform to invert.
 * @return {!Transform} The inverted (target) transform.
 */ parcelHelpers.export(exports, "makeInverse", ()=>makeInverse);
/**
 * Returns the determinant of the given matrix.
 * @param {!Transform} mat Matrix.
 * @return {number} Determinant.
 */ parcelHelpers.export(exports, "determinant", ()=>determinant);
/**
 * A rounded string version of the transform.  This can be used
 * for CSS transforms.
 * @param {!Transform} mat Matrix.
 * @return {string} The transform as a string.
 */ parcelHelpers.export(exports, "toString", ()=>toString);
var _hasJs = require("./has.js");
var _assertsJs = require("./asserts.js");
/**
 * An array representing an affine 2d transformation for use with
 * {@link module:ol/transform} functions. The array has 6 elements.
 * @typedef {!Array<number>} Transform
 * @api
 */ /**
 * Collection of affine 2d transformation functions. The functions work on an
 * array of 6 elements. The element order is compatible with the [SVGMatrix
 * interface](https://developer.mozilla.org/en-US/docs/Web/API/SVGMatrix) and is
 * a subset (elements a to f) of a 3×3 matrix:
 * ```
 * [ a c e ]
 * [ b d f ]
 * [ 0 0 1 ]
 * ```
 */ /**
 * @private
 * @type {Transform}
 */ const tmp_ = new Array(6);
function create() {
    return [
        1,
        0,
        0,
        1,
        0,
        0
    ];
}
function reset(transform) {
    return set(transform, 1, 0, 0, 1, 0, 0);
}
function multiply(transform1, transform2) {
    const a1 = transform1[0];
    const b1 = transform1[1];
    const c1 = transform1[2];
    const d1 = transform1[3];
    const e1 = transform1[4];
    const f1 = transform1[5];
    const a2 = transform2[0];
    const b2 = transform2[1];
    const c2 = transform2[2];
    const d2 = transform2[3];
    const e2 = transform2[4];
    const f2 = transform2[5];
    transform1[0] = a1 * a2 + c1 * b2;
    transform1[1] = b1 * a2 + d1 * b2;
    transform1[2] = a1 * c2 + c1 * d2;
    transform1[3] = b1 * c2 + d1 * d2;
    transform1[4] = a1 * e2 + c1 * f2 + e1;
    transform1[5] = b1 * e2 + d1 * f2 + f1;
    return transform1;
}
function set(transform, a, b, c, d, e, f) {
    transform[0] = a;
    transform[1] = b;
    transform[2] = c;
    transform[3] = d;
    transform[4] = e;
    transform[5] = f;
    return transform;
}
function setFromArray(transform1, transform2) {
    transform1[0] = transform2[0];
    transform1[1] = transform2[1];
    transform1[2] = transform2[2];
    transform1[3] = transform2[3];
    transform1[4] = transform2[4];
    transform1[5] = transform2[5];
    return transform1;
}
function apply(transform, coordinate) {
    const x = coordinate[0];
    const y = coordinate[1];
    coordinate[0] = transform[0] * x + transform[2] * y + transform[4];
    coordinate[1] = transform[1] * x + transform[3] * y + transform[5];
    return coordinate;
}
function rotate(transform, angle) {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    return multiply(transform, set(tmp_, cos, sin, -sin, cos, 0, 0));
}
function scale(transform, x, y) {
    return multiply(transform, set(tmp_, x, 0, 0, y, 0, 0));
}
function makeScale(target, x, y) {
    return set(target, x, 0, 0, y, 0, 0);
}
function translate(transform, dx, dy) {
    return multiply(transform, set(tmp_, 1, 0, 0, 1, dx, dy));
}
function compose(transform, dx1, dy1, sx, sy, angle, dx2, dy2) {
    const sin = Math.sin(angle);
    const cos = Math.cos(angle);
    transform[0] = sx * cos;
    transform[1] = sy * sin;
    transform[2] = -sx * sin;
    transform[3] = sy * cos;
    transform[4] = dx2 * sx * cos - dy2 * sx * sin + dx1;
    transform[5] = dx2 * sy * sin + dy2 * sy * cos + dy1;
    return transform;
}
function composeCssTransform(dx1, dy1, sx, sy, angle, dx2, dy2) {
    return toString(compose(create(), dx1, dy1, sx, sy, angle, dx2, dy2));
}
function invert(source) {
    return makeInverse(source, source);
}
function makeInverse(target, source) {
    const det = determinant(source);
    (0, _assertsJs.assert)(det !== 0, 32); // Transformation matrix cannot be inverted
    const a = source[0];
    const b = source[1];
    const c = source[2];
    const d = source[3];
    const e = source[4];
    const f = source[5];
    target[0] = d / det;
    target[1] = -b / det;
    target[2] = -c / det;
    target[3] = a / det;
    target[4] = (c * f - d * e) / det;
    target[5] = -(a * f - b * e) / det;
    return target;
}
function determinant(mat) {
    return mat[0] * mat[3] - mat[1] * mat[2];
}
/**
 * @type {HTMLElement}
 * @private
 */ let transformStringDiv;
function toString(mat) {
    const transformString = "matrix(" + mat.join(", ") + ")";
    if (0, _hasJs.WORKER_OFFSCREEN_CANVAS) return transformString;
    const node = transformStringDiv || (transformStringDiv = document.createElement("div"));
    node.style.transform = transformString;
    return node.style.transform;
}

},{"./has.js":"6BDNi","./asserts.js":"e4TiF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6BDNi":[function(require,module,exports) {
/**
 * @module ol/has
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FIREFOX", ()=>FIREFOX);
parcelHelpers.export(exports, "SAFARI", ()=>SAFARI);
parcelHelpers.export(exports, "SAFARI_BUG_237906", ()=>SAFARI_BUG_237906);
parcelHelpers.export(exports, "WEBKIT", ()=>WEBKIT);
parcelHelpers.export(exports, "MAC", ()=>MAC);
parcelHelpers.export(exports, "DEVICE_PIXEL_RATIO", ()=>DEVICE_PIXEL_RATIO);
parcelHelpers.export(exports, "WORKER_OFFSCREEN_CANVAS", ()=>WORKER_OFFSCREEN_CANVAS);
parcelHelpers.export(exports, "IMAGE_DECODE", ()=>IMAGE_DECODE);
parcelHelpers.export(exports, "PASSIVE_EVENT_LISTENERS", ()=>PASSIVE_EVENT_LISTENERS);
const ua = typeof navigator !== "undefined" && typeof navigator.userAgent !== "undefined" ? navigator.userAgent.toLowerCase() : "";
const FIREFOX = ua.includes("firefox");
const SAFARI = ua.includes("safari") && !ua.includes("chrom");
const SAFARI_BUG_237906 = SAFARI && (ua.includes("version/15.4") || /cpu (os|iphone os) 15_4 like mac os x/.test(ua));
const WEBKIT = ua.includes("webkit") && !ua.includes("edge");
const MAC = ua.includes("macintosh");
const DEVICE_PIXEL_RATIO = typeof devicePixelRatio !== "undefined" ? devicePixelRatio : 1;
const WORKER_OFFSCREEN_CANVAS = typeof WorkerGlobalScope !== "undefined" && typeof OffscreenCanvas !== "undefined" && self instanceof WorkerGlobalScope; //eslint-disable-line
const IMAGE_DECODE = typeof Image !== "undefined" && Image.prototype.decode;
const PASSIVE_EVENT_LISTENERS = function() {
    let passive = false;
    try {
        const options = Object.defineProperty({}, "passive", {
            get: function() {
                passive = true;
            }
        });
        window.addEventListener("_", null, options);
        window.removeEventListener("_", null, options);
    } catch (error) {
    // passive not supported
    }
    return passive;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e4TiF":[function(require,module,exports) {
/**
 * @module ol/asserts
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @param {*} assertion Assertion we expected to be truthy.
 * @param {number} errorCode Error code.
 */ parcelHelpers.export(exports, "assert", ()=>assert);
var _assertionErrorJs = require("./AssertionError.js");
var _assertionErrorJsDefault = parcelHelpers.interopDefault(_assertionErrorJs);
function assert(assertion, errorCode) {
    if (!assertion) throw new (0, _assertionErrorJsDefault.default)(errorCode);
}

},{"./AssertionError.js":"1MBbN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6YrVc":[function(require,module,exports) {
/**
 * @module ol/extent
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * An array of numbers representing an extent: `[minx, miny, maxx, maxy]`.
 * @typedef {Array<number>} Extent
 * @api
 */ /**
 * Extent corner.
 * @typedef {'bottom-left' | 'bottom-right' | 'top-left' | 'top-right'} Corner
 */ /**
 * Build an extent that includes all given coordinates.
 *
 * @param {Array<import("./coordinate.js").Coordinate>} coordinates Coordinates.
 * @return {Extent} Bounding extent.
 * @api
 */ parcelHelpers.export(exports, "boundingExtent", ()=>boundingExtent);
/**
 * Return extent increased by the provided value.
 * @param {Extent} extent Extent.
 * @param {number} value The amount by which the extent should be buffered.
 * @param {Extent} [dest] Extent.
 * @return {Extent} Extent.
 * @api
 */ parcelHelpers.export(exports, "buffer", ()=>buffer);
/**
 * Creates a clone of an extent.
 *
 * @param {Extent} extent Extent to clone.
 * @param {Extent} [dest] Extent.
 * @return {Extent} The clone.
 */ parcelHelpers.export(exports, "clone", ()=>clone);
/**
 * @param {Extent} extent Extent.
 * @param {number} x X.
 * @param {number} y Y.
 * @return {number} Closest squared distance.
 */ parcelHelpers.export(exports, "closestSquaredDistanceXY", ()=>closestSquaredDistanceXY);
/**
 * Check if the passed coordinate is contained or on the edge of the extent.
 *
 * @param {Extent} extent Extent.
 * @param {import("./coordinate.js").Coordinate} coordinate Coordinate.
 * @return {boolean} The coordinate is contained in the extent.
 * @api
 */ parcelHelpers.export(exports, "containsCoordinate", ()=>containsCoordinate);
/**
 * Check if one extent contains another.
 *
 * An extent is deemed contained if it lies completely within the other extent,
 * including if they share one or more edges.
 *
 * @param {Extent} extent1 Extent 1.
 * @param {Extent} extent2 Extent 2.
 * @return {boolean} The second extent is contained by or on the edge of the
 *     first.
 * @api
 */ parcelHelpers.export(exports, "containsExtent", ()=>containsExtent);
/**
 * Check if the passed coordinate is contained or on the edge of the extent.
 *
 * @param {Extent} extent Extent.
 * @param {number} x X coordinate.
 * @param {number} y Y coordinate.
 * @return {boolean} The x, y values are contained in the extent.
 * @api
 */ parcelHelpers.export(exports, "containsXY", ()=>containsXY);
/**
 * Get the relationship between a coordinate and extent.
 * @param {Extent} extent The extent.
 * @param {import("./coordinate.js").Coordinate} coordinate The coordinate.
 * @return {import("./extent/Relationship.js").default} The relationship (bitwise compare with
 *     import("./extent/Relationship.js").Relationship).
 */ parcelHelpers.export(exports, "coordinateRelationship", ()=>coordinateRelationship);
/**
 * Create an empty extent.
 * @return {Extent} Empty extent.
 * @api
 */ parcelHelpers.export(exports, "createEmpty", ()=>createEmpty);
/**
 * Create a new extent or update the provided extent.
 * @param {number} minX Minimum X.
 * @param {number} minY Minimum Y.
 * @param {number} maxX Maximum X.
 * @param {number} maxY Maximum Y.
 * @param {Extent} [dest] Destination extent.
 * @return {Extent} Extent.
 */ parcelHelpers.export(exports, "createOrUpdate", ()=>createOrUpdate);
/**
 * Create a new empty extent or make the provided one empty.
 * @param {Extent} [dest] Extent.
 * @return {Extent} Extent.
 */ parcelHelpers.export(exports, "createOrUpdateEmpty", ()=>createOrUpdateEmpty);
/**
 * @param {import("./coordinate.js").Coordinate} coordinate Coordinate.
 * @param {Extent} [dest] Extent.
 * @return {Extent} Extent.
 */ parcelHelpers.export(exports, "createOrUpdateFromCoordinate", ()=>createOrUpdateFromCoordinate);
/**
 * @param {Array<import("./coordinate.js").Coordinate>} coordinates Coordinates.
 * @param {Extent} [dest] Extent.
 * @return {Extent} Extent.
 */ parcelHelpers.export(exports, "createOrUpdateFromCoordinates", ()=>createOrUpdateFromCoordinates);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {Extent} [dest] Extent.
 * @return {Extent} Extent.
 */ parcelHelpers.export(exports, "createOrUpdateFromFlatCoordinates", ()=>createOrUpdateFromFlatCoordinates);
/**
 * @param {Array<Array<import("./coordinate.js").Coordinate>>} rings Rings.
 * @param {Extent} [dest] Extent.
 * @return {Extent} Extent.
 */ parcelHelpers.export(exports, "createOrUpdateFromRings", ()=>createOrUpdateFromRings);
/**
 * Determine if two extents are equivalent.
 * @param {Extent} extent1 Extent 1.
 * @param {Extent} extent2 Extent 2.
 * @return {boolean} The two extents are equivalent.
 * @api
 */ parcelHelpers.export(exports, "equals", ()=>equals);
/**
 * Determine if two extents are approximately equivalent.
 * @param {Extent} extent1 Extent 1.
 * @param {Extent} extent2 Extent 2.
 * @param {number} tolerance Tolerance in extent coordinate units.
 * @return {boolean} The two extents differ by less than the tolerance.
 */ parcelHelpers.export(exports, "approximatelyEquals", ()=>approximatelyEquals);
/**
 * Modify an extent to include another extent.
 * @param {Extent} extent1 The extent to be modified.
 * @param {Extent} extent2 The extent that will be included in the first.
 * @return {Extent} A reference to the first (extended) extent.
 * @api
 */ parcelHelpers.export(exports, "extend", ()=>extend);
/**
 * @param {Extent} extent Extent.
 * @param {import("./coordinate.js").Coordinate} coordinate Coordinate.
 */ parcelHelpers.export(exports, "extendCoordinate", ()=>extendCoordinate);
/**
 * @param {Extent} extent Extent.
 * @param {Array<import("./coordinate.js").Coordinate>} coordinates Coordinates.
 * @return {Extent} Extent.
 */ parcelHelpers.export(exports, "extendCoordinates", ()=>extendCoordinates);
/**
 * @param {Extent} extent Extent.
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @return {Extent} Extent.
 */ parcelHelpers.export(exports, "extendFlatCoordinates", ()=>extendFlatCoordinates);
/**
 * @param {Extent} extent Extent.
 * @param {Array<Array<import("./coordinate.js").Coordinate>>} rings Rings.
 * @return {Extent} Extent.
 */ parcelHelpers.export(exports, "extendRings", ()=>extendRings);
/**
 * @param {Extent} extent Extent.
 * @param {number} x X.
 * @param {number} y Y.
 */ parcelHelpers.export(exports, "extendXY", ()=>extendXY);
/**
 * This function calls `callback` for each corner of the extent. If the
 * callback returns a truthy value the function returns that value
 * immediately. Otherwise the function returns `false`.
 * @param {Extent} extent Extent.
 * @param {function(import("./coordinate.js").Coordinate): S} callback Callback.
 * @return {S|boolean} Value.
 * @template S
 */ parcelHelpers.export(exports, "forEachCorner", ()=>forEachCorner);
/**
 * Get the size of an extent.
 * @param {Extent} extent Extent.
 * @return {number} Area.
 * @api
 */ parcelHelpers.export(exports, "getArea", ()=>getArea);
/**
 * Get the bottom left coordinate of an extent.
 * @param {Extent} extent Extent.
 * @return {import("./coordinate.js").Coordinate} Bottom left coordinate.
 * @api
 */ parcelHelpers.export(exports, "getBottomLeft", ()=>getBottomLeft);
/**
 * Get the bottom right coordinate of an extent.
 * @param {Extent} extent Extent.
 * @return {import("./coordinate.js").Coordinate} Bottom right coordinate.
 * @api
 */ parcelHelpers.export(exports, "getBottomRight", ()=>getBottomRight);
/**
 * Get the center coordinate of an extent.
 * @param {Extent} extent Extent.
 * @return {import("./coordinate.js").Coordinate} Center.
 * @api
 */ parcelHelpers.export(exports, "getCenter", ()=>getCenter);
/**
 * Get a corner coordinate of an extent.
 * @param {Extent} extent Extent.
 * @param {Corner} corner Corner.
 * @return {import("./coordinate.js").Coordinate} Corner coordinate.
 */ parcelHelpers.export(exports, "getCorner", ()=>getCorner);
/**
 * @param {Extent} extent1 Extent 1.
 * @param {Extent} extent2 Extent 2.
 * @return {number} Enlarged area.
 */ parcelHelpers.export(exports, "getEnlargedArea", ()=>getEnlargedArea);
/**
 * @param {import("./coordinate.js").Coordinate} center Center.
 * @param {number} resolution Resolution.
 * @param {number} rotation Rotation.
 * @param {import("./size.js").Size} size Size.
 * @param {Extent} [dest] Destination extent.
 * @return {Extent} Extent.
 */ parcelHelpers.export(exports, "getForViewAndSize", ()=>getForViewAndSize);
/**
 * @param {import("./coordinate.js").Coordinate} center Center.
 * @param {number} resolution Resolution.
 * @param {number} rotation Rotation.
 * @param {import("./size.js").Size} size Size.
 * @return {Array<number>} Linear ring representing the viewport.
 */ parcelHelpers.export(exports, "getRotatedViewport", ()=>getRotatedViewport);
/**
 * Get the height of an extent.
 * @param {Extent} extent Extent.
 * @return {number} Height.
 * @api
 */ parcelHelpers.export(exports, "getHeight", ()=>getHeight);
/**
 * @param {Extent} extent1 Extent 1.
 * @param {Extent} extent2 Extent 2.
 * @return {number} Intersection area.
 */ parcelHelpers.export(exports, "getIntersectionArea", ()=>getIntersectionArea);
/**
 * Get the intersection of two extents.
 * @param {Extent} extent1 Extent 1.
 * @param {Extent} extent2 Extent 2.
 * @param {Extent} [dest] Optional extent to populate with intersection.
 * @return {Extent} Intersecting extent.
 * @api
 */ parcelHelpers.export(exports, "getIntersection", ()=>getIntersection);
/**
 * @param {Extent} extent Extent.
 * @return {number} Margin.
 */ parcelHelpers.export(exports, "getMargin", ()=>getMargin);
/**
 * Get the size (width, height) of an extent.
 * @param {Extent} extent The extent.
 * @return {import("./size.js").Size} The extent size.
 * @api
 */ parcelHelpers.export(exports, "getSize", ()=>getSize);
/**
 * Get the top left coordinate of an extent.
 * @param {Extent} extent Extent.
 * @return {import("./coordinate.js").Coordinate} Top left coordinate.
 * @api
 */ parcelHelpers.export(exports, "getTopLeft", ()=>getTopLeft);
/**
 * Get the top right coordinate of an extent.
 * @param {Extent} extent Extent.
 * @return {import("./coordinate.js").Coordinate} Top right coordinate.
 * @api
 */ parcelHelpers.export(exports, "getTopRight", ()=>getTopRight);
/**
 * Get the width of an extent.
 * @param {Extent} extent Extent.
 * @return {number} Width.
 * @api
 */ parcelHelpers.export(exports, "getWidth", ()=>getWidth);
/**
 * Determine if one extent intersects another.
 * @param {Extent} extent1 Extent 1.
 * @param {Extent} extent2 Extent.
 * @return {boolean} The two extents intersect.
 * @api
 */ parcelHelpers.export(exports, "intersects", ()=>intersects);
/**
 * Determine if an extent is empty.
 * @param {Extent} extent Extent.
 * @return {boolean} Is empty.
 * @api
 */ parcelHelpers.export(exports, "isEmpty", ()=>isEmpty);
/**
 * @param {Extent} extent Extent.
 * @param {Extent} [dest] Extent.
 * @return {Extent} Extent.
 */ parcelHelpers.export(exports, "returnOrUpdate", ()=>returnOrUpdate);
/**
 * @param {Extent} extent Extent.
 * @param {number} value Value.
 */ parcelHelpers.export(exports, "scaleFromCenter", ()=>scaleFromCenter);
/**
 * Determine if the segment between two coordinates intersects (crosses,
 * touches, or is contained by) the provided extent.
 * @param {Extent} extent The extent.
 * @param {import("./coordinate.js").Coordinate} start Segment start coordinate.
 * @param {import("./coordinate.js").Coordinate} end Segment end coordinate.
 * @return {boolean} The segment intersects the extent.
 */ parcelHelpers.export(exports, "intersectsSegment", ()=>intersectsSegment);
/**
 * Apply a transform function to the extent.
 * @param {Extent} extent Extent.
 * @param {import("./proj.js").TransformFunction} transformFn Transform function.
 * Called with `[minX, minY, maxX, maxY]` extent coordinates.
 * @param {Extent} [dest] Destination extent.
 * @param {number} [stops] Number of stops per side used for the transform.
 * By default only the corners are used.
 * @return {Extent} Extent.
 * @api
 */ parcelHelpers.export(exports, "applyTransform", ()=>applyTransform);
/**
 * Modifies the provided extent in-place to be within the real world
 * extent.
 *
 * @param {Extent} extent Extent.
 * @param {import("./proj/Projection.js").default} projection Projection
 * @return {Extent} The extent within the real world extent.
 */ parcelHelpers.export(exports, "wrapX", ()=>wrapX);
/**
 * Fits the extent to the real world
 *
 * If the extent does not cross the anti meridian, this will return the extent in an array
 * If the extent crosses the anti meridian, the extent will be sliced, so each part fits within the
 * real world
 *
 *
 * @param {Extent} extent Extent.
 * @param {import("./proj/Projection.js").default} projection Projection
 * @return {Array<Extent>} The extent within the real world extent.
 */ parcelHelpers.export(exports, "wrapAndSliceX", ()=>wrapAndSliceX);
var _relationshipJs = require("./extent/Relationship.js");
var _relationshipJsDefault = parcelHelpers.interopDefault(_relationshipJs);
var _assertsJs = require("./asserts.js");
function boundingExtent(coordinates) {
    const extent = createEmpty();
    for(let i = 0, ii = coordinates.length; i < ii; ++i)extendCoordinate(extent, coordinates[i]);
    return extent;
}
/**
 * @param {Array<number>} xs Xs.
 * @param {Array<number>} ys Ys.
 * @param {Extent} [dest] Destination extent.
 * @private
 * @return {Extent} Extent.
 */ function _boundingExtentXYs(xs, ys, dest) {
    const minX = Math.min.apply(null, xs);
    const minY = Math.min.apply(null, ys);
    const maxX = Math.max.apply(null, xs);
    const maxY = Math.max.apply(null, ys);
    return createOrUpdate(minX, minY, maxX, maxY, dest);
}
function buffer(extent, value, dest) {
    if (dest) {
        dest[0] = extent[0] - value;
        dest[1] = extent[1] - value;
        dest[2] = extent[2] + value;
        dest[3] = extent[3] + value;
        return dest;
    }
    return [
        extent[0] - value,
        extent[1] - value,
        extent[2] + value,
        extent[3] + value
    ];
}
function clone(extent, dest) {
    if (dest) {
        dest[0] = extent[0];
        dest[1] = extent[1];
        dest[2] = extent[2];
        dest[3] = extent[3];
        return dest;
    }
    return extent.slice();
}
function closestSquaredDistanceXY(extent, x, y) {
    let dx, dy;
    if (x < extent[0]) dx = extent[0] - x;
    else if (extent[2] < x) dx = x - extent[2];
    else dx = 0;
    if (y < extent[1]) dy = extent[1] - y;
    else if (extent[3] < y) dy = y - extent[3];
    else dy = 0;
    return dx * dx + dy * dy;
}
function containsCoordinate(extent, coordinate) {
    return containsXY(extent, coordinate[0], coordinate[1]);
}
function containsExtent(extent1, extent2) {
    return extent1[0] <= extent2[0] && extent2[2] <= extent1[2] && extent1[1] <= extent2[1] && extent2[3] <= extent1[3];
}
function containsXY(extent, x, y) {
    return extent[0] <= x && x <= extent[2] && extent[1] <= y && y <= extent[3];
}
function coordinateRelationship(extent, coordinate) {
    const minX = extent[0];
    const minY = extent[1];
    const maxX = extent[2];
    const maxY = extent[3];
    const x = coordinate[0];
    const y = coordinate[1];
    let relationship = (0, _relationshipJsDefault.default).UNKNOWN;
    if (x < minX) relationship = relationship | (0, _relationshipJsDefault.default).LEFT;
    else if (x > maxX) relationship = relationship | (0, _relationshipJsDefault.default).RIGHT;
    if (y < minY) relationship = relationship | (0, _relationshipJsDefault.default).BELOW;
    else if (y > maxY) relationship = relationship | (0, _relationshipJsDefault.default).ABOVE;
    if (relationship === (0, _relationshipJsDefault.default).UNKNOWN) relationship = (0, _relationshipJsDefault.default).INTERSECTING;
    return relationship;
}
function createEmpty() {
    return [
        Infinity,
        Infinity,
        -Infinity,
        -Infinity
    ];
}
function createOrUpdate(minX, minY, maxX, maxY, dest) {
    if (dest) {
        dest[0] = minX;
        dest[1] = minY;
        dest[2] = maxX;
        dest[3] = maxY;
        return dest;
    }
    return [
        minX,
        minY,
        maxX,
        maxY
    ];
}
function createOrUpdateEmpty(dest) {
    return createOrUpdate(Infinity, Infinity, -Infinity, -Infinity, dest);
}
function createOrUpdateFromCoordinate(coordinate, dest) {
    const x = coordinate[0];
    const y = coordinate[1];
    return createOrUpdate(x, y, x, y, dest);
}
function createOrUpdateFromCoordinates(coordinates, dest) {
    const extent = createOrUpdateEmpty(dest);
    return extendCoordinates(extent, coordinates);
}
function createOrUpdateFromFlatCoordinates(flatCoordinates, offset, end, stride, dest) {
    const extent = createOrUpdateEmpty(dest);
    return extendFlatCoordinates(extent, flatCoordinates, offset, end, stride);
}
function createOrUpdateFromRings(rings, dest) {
    const extent = createOrUpdateEmpty(dest);
    return extendRings(extent, rings);
}
function equals(extent1, extent2) {
    return extent1[0] == extent2[0] && extent1[2] == extent2[2] && extent1[1] == extent2[1] && extent1[3] == extent2[3];
}
function approximatelyEquals(extent1, extent2, tolerance) {
    return Math.abs(extent1[0] - extent2[0]) < tolerance && Math.abs(extent1[2] - extent2[2]) < tolerance && Math.abs(extent1[1] - extent2[1]) < tolerance && Math.abs(extent1[3] - extent2[3]) < tolerance;
}
function extend(extent1, extent2) {
    if (extent2[0] < extent1[0]) extent1[0] = extent2[0];
    if (extent2[2] > extent1[2]) extent1[2] = extent2[2];
    if (extent2[1] < extent1[1]) extent1[1] = extent2[1];
    if (extent2[3] > extent1[3]) extent1[3] = extent2[3];
    return extent1;
}
function extendCoordinate(extent, coordinate) {
    if (coordinate[0] < extent[0]) extent[0] = coordinate[0];
    if (coordinate[0] > extent[2]) extent[2] = coordinate[0];
    if (coordinate[1] < extent[1]) extent[1] = coordinate[1];
    if (coordinate[1] > extent[3]) extent[3] = coordinate[1];
}
function extendCoordinates(extent, coordinates) {
    for(let i = 0, ii = coordinates.length; i < ii; ++i)extendCoordinate(extent, coordinates[i]);
    return extent;
}
function extendFlatCoordinates(extent, flatCoordinates, offset, end, stride) {
    for(; offset < end; offset += stride)extendXY(extent, flatCoordinates[offset], flatCoordinates[offset + 1]);
    return extent;
}
function extendRings(extent, rings) {
    for(let i = 0, ii = rings.length; i < ii; ++i)extendCoordinates(extent, rings[i]);
    return extent;
}
function extendXY(extent, x, y) {
    extent[0] = Math.min(extent[0], x);
    extent[1] = Math.min(extent[1], y);
    extent[2] = Math.max(extent[2], x);
    extent[3] = Math.max(extent[3], y);
}
function forEachCorner(extent, callback) {
    let val;
    val = callback(getBottomLeft(extent));
    if (val) return val;
    val = callback(getBottomRight(extent));
    if (val) return val;
    val = callback(getTopRight(extent));
    if (val) return val;
    val = callback(getTopLeft(extent));
    if (val) return val;
    return false;
}
function getArea(extent) {
    let area = 0;
    if (!isEmpty(extent)) area = getWidth(extent) * getHeight(extent);
    return area;
}
function getBottomLeft(extent) {
    return [
        extent[0],
        extent[1]
    ];
}
function getBottomRight(extent) {
    return [
        extent[2],
        extent[1]
    ];
}
function getCenter(extent) {
    return [
        (extent[0] + extent[2]) / 2,
        (extent[1] + extent[3]) / 2
    ];
}
function getCorner(extent, corner) {
    let coordinate;
    if (corner === "bottom-left") coordinate = getBottomLeft(extent);
    else if (corner === "bottom-right") coordinate = getBottomRight(extent);
    else if (corner === "top-left") coordinate = getTopLeft(extent);
    else if (corner === "top-right") coordinate = getTopRight(extent);
    else (0, _assertsJs.assert)(false, 13); // Invalid corner
    return coordinate;
}
function getEnlargedArea(extent1, extent2) {
    const minX = Math.min(extent1[0], extent2[0]);
    const minY = Math.min(extent1[1], extent2[1]);
    const maxX = Math.max(extent1[2], extent2[2]);
    const maxY = Math.max(extent1[3], extent2[3]);
    return (maxX - minX) * (maxY - minY);
}
function getForViewAndSize(center, resolution, rotation, size, dest) {
    const [x0, y0, x1, y1, x2, y2, x3, y3] = getRotatedViewport(center, resolution, rotation, size);
    return createOrUpdate(Math.min(x0, x1, x2, x3), Math.min(y0, y1, y2, y3), Math.max(x0, x1, x2, x3), Math.max(y0, y1, y2, y3), dest);
}
function getRotatedViewport(center, resolution, rotation, size) {
    const dx = resolution * size[0] / 2;
    const dy = resolution * size[1] / 2;
    const cosRotation = Math.cos(rotation);
    const sinRotation = Math.sin(rotation);
    const xCos = dx * cosRotation;
    const xSin = dx * sinRotation;
    const yCos = dy * cosRotation;
    const ySin = dy * sinRotation;
    const x = center[0];
    const y = center[1];
    return [
        x - xCos + ySin,
        y - xSin - yCos,
        x - xCos - ySin,
        y - xSin + yCos,
        x + xCos - ySin,
        y + xSin + yCos,
        x + xCos + ySin,
        y + xSin - yCos,
        x - xCos + ySin,
        y - xSin - yCos
    ];
}
function getHeight(extent) {
    return extent[3] - extent[1];
}
function getIntersectionArea(extent1, extent2) {
    const intersection = getIntersection(extent1, extent2);
    return getArea(intersection);
}
function getIntersection(extent1, extent2, dest) {
    const intersection = dest ? dest : createEmpty();
    if (intersects(extent1, extent2)) {
        if (extent1[0] > extent2[0]) intersection[0] = extent1[0];
        else intersection[0] = extent2[0];
        if (extent1[1] > extent2[1]) intersection[1] = extent1[1];
        else intersection[1] = extent2[1];
        if (extent1[2] < extent2[2]) intersection[2] = extent1[2];
        else intersection[2] = extent2[2];
        if (extent1[3] < extent2[3]) intersection[3] = extent1[3];
        else intersection[3] = extent2[3];
    } else createOrUpdateEmpty(intersection);
    return intersection;
}
function getMargin(extent) {
    return getWidth(extent) + getHeight(extent);
}
function getSize(extent) {
    return [
        extent[2] - extent[0],
        extent[3] - extent[1]
    ];
}
function getTopLeft(extent) {
    return [
        extent[0],
        extent[3]
    ];
}
function getTopRight(extent) {
    return [
        extent[2],
        extent[3]
    ];
}
function getWidth(extent) {
    return extent[2] - extent[0];
}
function intersects(extent1, extent2) {
    return extent1[0] <= extent2[2] && extent1[2] >= extent2[0] && extent1[1] <= extent2[3] && extent1[3] >= extent2[1];
}
function isEmpty(extent) {
    return extent[2] < extent[0] || extent[3] < extent[1];
}
function returnOrUpdate(extent, dest) {
    if (dest) {
        dest[0] = extent[0];
        dest[1] = extent[1];
        dest[2] = extent[2];
        dest[3] = extent[3];
        return dest;
    }
    return extent;
}
function scaleFromCenter(extent, value) {
    const deltaX = (extent[2] - extent[0]) / 2 * (value - 1);
    const deltaY = (extent[3] - extent[1]) / 2 * (value - 1);
    extent[0] -= deltaX;
    extent[2] += deltaX;
    extent[1] -= deltaY;
    extent[3] += deltaY;
}
function intersectsSegment(extent, start, end) {
    let intersects = false;
    const startRel = coordinateRelationship(extent, start);
    const endRel = coordinateRelationship(extent, end);
    if (startRel === (0, _relationshipJsDefault.default).INTERSECTING || endRel === (0, _relationshipJsDefault.default).INTERSECTING) intersects = true;
    else {
        const minX = extent[0];
        const minY = extent[1];
        const maxX = extent[2];
        const maxY = extent[3];
        const startX = start[0];
        const startY = start[1];
        const endX = end[0];
        const endY = end[1];
        const slope = (endY - startY) / (endX - startX);
        let x, y;
        if (!!(endRel & (0, _relationshipJsDefault.default).ABOVE) && !(startRel & (0, _relationshipJsDefault.default).ABOVE)) {
            // potentially intersects top
            x = endX - (endY - maxY) / slope;
            intersects = x >= minX && x <= maxX;
        }
        if (!intersects && !!(endRel & (0, _relationshipJsDefault.default).RIGHT) && !(startRel & (0, _relationshipJsDefault.default).RIGHT)) {
            // potentially intersects right
            y = endY - (endX - maxX) * slope;
            intersects = y >= minY && y <= maxY;
        }
        if (!intersects && !!(endRel & (0, _relationshipJsDefault.default).BELOW) && !(startRel & (0, _relationshipJsDefault.default).BELOW)) {
            // potentially intersects bottom
            x = endX - (endY - minY) / slope;
            intersects = x >= minX && x <= maxX;
        }
        if (!intersects && !!(endRel & (0, _relationshipJsDefault.default).LEFT) && !(startRel & (0, _relationshipJsDefault.default).LEFT)) {
            // potentially intersects left
            y = endY - (endX - minX) * slope;
            intersects = y >= minY && y <= maxY;
        }
    }
    return intersects;
}
function applyTransform(extent, transformFn, dest, stops) {
    let coordinates = [];
    if (stops > 1) {
        const width = extent[2] - extent[0];
        const height = extent[3] - extent[1];
        for(let i = 0; i < stops; ++i)coordinates.push(extent[0] + width * i / stops, extent[1], extent[2], extent[1] + height * i / stops, extent[2] - width * i / stops, extent[3], extent[0], extent[3] - height * i / stops);
    } else coordinates = [
        extent[0],
        extent[1],
        extent[2],
        extent[1],
        extent[2],
        extent[3],
        extent[0],
        extent[3]
    ];
    transformFn(coordinates, coordinates, 2);
    const xs = [];
    const ys = [];
    for(let i = 0, l = coordinates.length; i < l; i += 2){
        xs.push(coordinates[i]);
        ys.push(coordinates[i + 1]);
    }
    return _boundingExtentXYs(xs, ys, dest);
}
function wrapX(extent, projection) {
    const projectionExtent = projection.getExtent();
    const center = getCenter(extent);
    if (projection.canWrapX() && (center[0] < projectionExtent[0] || center[0] >= projectionExtent[2])) {
        const worldWidth = getWidth(projectionExtent);
        const worldsAway = Math.floor((center[0] - projectionExtent[0]) / worldWidth);
        const offset = worldsAway * worldWidth;
        extent[0] -= offset;
        extent[2] -= offset;
    }
    return extent;
}
function wrapAndSliceX(extent, projection) {
    if (projection.canWrapX()) {
        const projectionExtent = projection.getExtent();
        if (!isFinite(extent[0]) || !isFinite(extent[2])) return [
            [
                projectionExtent[0],
                extent[1],
                projectionExtent[2],
                extent[3]
            ]
        ];
        wrapX(extent, projection);
        const worldWidth = getWidth(projectionExtent);
        if (getWidth(extent) > worldWidth) // the extent wraps around on itself
        return [
            [
                projectionExtent[0],
                extent[1],
                projectionExtent[2],
                extent[3]
            ]
        ];
        else if (extent[0] < projectionExtent[0]) // the extent crosses the anti meridian, so it needs to be sliced
        return [
            [
                extent[0] + worldWidth,
                extent[1],
                projectionExtent[2],
                extent[3]
            ],
            [
                projectionExtent[0],
                extent[1],
                extent[2],
                extent[3]
            ]
        ];
        else if (extent[2] > projectionExtent[2]) // the extent crosses the anti meridian, so it needs to be sliced
        return [
            [
                extent[0],
                extent[1],
                projectionExtent[2],
                extent[3]
            ],
            [
                projectionExtent[0],
                extent[1],
                extent[2] - worldWidth,
                extent[3]
            ]
        ];
    }
    return [
        extent
    ];
}

},{"./extent/Relationship.js":"9q0e7","./asserts.js":"e4TiF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9q0e7":[function(require,module,exports) {
/**
 * @module ol/extent/Relationship
 */ /**
 * Relationship to an extent.
 * @enum {number}
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    UNKNOWN: 0,
    INTERSECTING: 1,
    ABOVE: 2,
    RIGHT: 4,
    BELOW: 8,
    LEFT: 16
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2uEpE":[function(require,module,exports) {
/**
 * @module ol/style/IconImageCache
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "shared", ()=>shared);
var _colorJs = require("../color.js");
/**
 * @classdesc
 * Singleton class. Available through {@link module:ol/style/IconImageCache.shared}.
 */ class IconImageCache {
    constructor(){
        /**
     * @type {!Object<string, import("./IconImage.js").default>}
     * @private
     */ this.cache_ = {};
        /**
     * @type {number}
     * @private
     */ this.cacheSize_ = 0;
        /**
     * @type {number}
     * @private
     */ this.maxCacheSize_ = 32;
    }
    /**
   * FIXME empty description for jsdoc
   */ clear() {
        this.cache_ = {};
        this.cacheSize_ = 0;
    }
    /**
   * @return {boolean} Can expire cache.
   */ canExpireCache() {
        return this.cacheSize_ > this.maxCacheSize_;
    }
    /**
   * FIXME empty description for jsdoc
   */ expire() {
        if (this.canExpireCache()) {
            let i = 0;
            for(const key in this.cache_){
                const iconImage = this.cache_[key];
                if ((i++ & 3) === 0 && !iconImage.hasListener()) {
                    delete this.cache_[key];
                    --this.cacheSize_;
                }
            }
        }
    }
    /**
   * @param {string} src Src.
   * @param {?string} crossOrigin Cross origin.
   * @param {import("../color.js").Color} color Color.
   * @return {import("./IconImage.js").default} Icon image.
   */ get(src, crossOrigin, color) {
        const key = getKey(src, crossOrigin, color);
        return key in this.cache_ ? this.cache_[key] : null;
    }
    /**
   * @param {string} src Src.
   * @param {?string} crossOrigin Cross origin.
   * @param {import("../color.js").Color} color Color.
   * @param {import("./IconImage.js").default} iconImage Icon image.
   */ set(src, crossOrigin, color, iconImage) {
        const key = getKey(src, crossOrigin, color);
        this.cache_[key] = iconImage;
        ++this.cacheSize_;
    }
    /**
   * Set the cache size of the icon cache. Default is `32`. Change this value when
   * your map uses more than 32 different icon images and you are not caching icon
   * styles on the application level.
   * @param {number} maxCacheSize Cache max size.
   * @api
   */ setSize(maxCacheSize) {
        this.maxCacheSize_ = maxCacheSize;
        this.expire();
    }
}
/**
 * @param {string} src Src.
 * @param {?string} crossOrigin Cross origin.
 * @param {import("../color.js").Color} color Color.
 * @return {string} Cache key.
 */ function getKey(src, crossOrigin, color) {
    const colorString = color ? (0, _colorJs.asString)(color) : "null";
    return crossOrigin + ":" + src + ":" + colorString;
}
exports.default = IconImageCache;
const shared = new IconImageCache();

},{"../color.js":"4tahz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4tahz":[function(require,module,exports) {
/**
 * @module ol/color
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Return the color as an rgba string.
 * @param {Color|string} color Color.
 * @return {string} Rgba string.
 * @api
 */ parcelHelpers.export(exports, "asString", ()=>asString);
parcelHelpers.export(exports, "fromString", ()=>fromString);
/**
 * Return the color as an array. This function maintains a cache of calculated
 * arrays which means the result should not be modified.
 * @param {Color|string} color Color.
 * @return {Color} Color.
 * @api
 */ parcelHelpers.export(exports, "asArray", ()=>asArray);
/**
 * TODO this function is only used in the test, we probably shouldn't export it
 * @param {Color} color Color.
 * @return {Color} Clamped color.
 */ parcelHelpers.export(exports, "normalize", ()=>normalize);
/**
 * @param {Color} color Color.
 * @return {string} String.
 */ parcelHelpers.export(exports, "toString", ()=>toString);
/**
 * @param {string} s String.
 * @return {boolean} Whether the string is actually a valid color
 */ parcelHelpers.export(exports, "isStringColor", ()=>isStringColor);
var _assertsJs = require("./asserts.js");
var _mathJs = require("./math.js");
/**
 * A color represented as a short array [red, green, blue, alpha].
 * red, green, and blue should be integers in the range 0..255 inclusive.
 * alpha should be a float in the range 0..1 inclusive. If no alpha value is
 * given then `1` will be used.
 * @typedef {Array<number>} Color
 * @api
 */ /**
 * This RegExp matches # followed by 3, 4, 6, or 8 hex digits.
 * @const
 * @type {RegExp}
 * @private
 */ const HEX_COLOR_RE_ = /^#([a-f0-9]{3}|[a-f0-9]{4}(?:[a-f0-9]{2}){0,2})$/i;
/**
 * Regular expression for matching potential named color style strings.
 * @const
 * @type {RegExp}
 * @private
 */ const NAMED_COLOR_RE_ = /^([a-z]*)$|^hsla?\(.*\)$/i;
function asString(color) {
    if (typeof color === "string") return color;
    return toString(color);
}
/**
 * Return named color as an rgba string.
 * @param {string} color Named color.
 * @return {string} Rgb string.
 */ function fromNamed(color) {
    const el = document.createElement("div");
    el.style.color = color;
    if (el.style.color !== "") {
        document.body.appendChild(el);
        const rgb = getComputedStyle(el).color;
        document.body.removeChild(el);
        return rgb;
    }
    return "";
}
const fromString = function() {
    // We maintain a small cache of parsed strings.  To provide cheap LRU-like
    // semantics, whenever the cache grows too large we simply delete an
    // arbitrary 25% of the entries.
    /**
   * @const
   * @type {number}
   */ const MAX_CACHE_SIZE = 1024;
    /**
   * @type {Object<string, Color>}
   */ const cache = {};
    /**
   * @type {number}
   */ let cacheSize = 0;
    return(/**
     * @param {string} s String.
     * @return {Color} Color.
     */ function(s) {
        let color;
        if (cache.hasOwnProperty(s)) color = cache[s];
        else {
            if (cacheSize >= MAX_CACHE_SIZE) {
                let i = 0;
                for(const key in cache)if ((i++ & 3) === 0) {
                    delete cache[key];
                    --cacheSize;
                }
            }
            color = fromStringInternal_(s);
            cache[s] = color;
            ++cacheSize;
        }
        return color;
    });
}();
function asArray(color) {
    if (Array.isArray(color)) return color;
    return fromString(color);
}
/**
 * @param {string} s String.
 * @private
 * @return {Color} Color.
 */ function fromStringInternal_(s) {
    let r, g, b, a, color;
    if (NAMED_COLOR_RE_.exec(s)) s = fromNamed(s);
    if (HEX_COLOR_RE_.exec(s)) {
        // hex
        const n = s.length - 1; // number of hex digits
        let d; // number of digits per channel
        if (n <= 4) d = 1;
        else d = 2;
        const hasAlpha = n === 4 || n === 8;
        r = parseInt(s.substr(1 + 0 * d, d), 16);
        g = parseInt(s.substr(1 + 1 * d, d), 16);
        b = parseInt(s.substr(1 + 2 * d, d), 16);
        if (hasAlpha) a = parseInt(s.substr(1 + 3 * d, d), 16);
        else a = 255;
        if (d == 1) {
            r = (r << 4) + r;
            g = (g << 4) + g;
            b = (b << 4) + b;
            if (hasAlpha) a = (a << 4) + a;
        }
        color = [
            r,
            g,
            b,
            a / 255
        ];
    } else if (s.startsWith("rgba(")) {
        // rgba()
        color = s.slice(5, -1).split(",").map(Number);
        normalize(color);
    } else if (s.startsWith("rgb(")) {
        // rgb()
        color = s.slice(4, -1).split(",").map(Number);
        color.push(1);
        normalize(color);
    } else (0, _assertsJs.assert)(false, 14); // Invalid color
    return color;
}
function normalize(color) {
    color[0] = (0, _mathJs.clamp)(color[0] + 0.5 | 0, 0, 255);
    color[1] = (0, _mathJs.clamp)(color[1] + 0.5 | 0, 0, 255);
    color[2] = (0, _mathJs.clamp)(color[2] + 0.5 | 0, 0, 255);
    color[3] = (0, _mathJs.clamp)(color[3], 0, 1);
    return color;
}
function toString(color) {
    let r = color[0];
    if (r != (r | 0)) r = r + 0.5 | 0;
    let g = color[1];
    if (g != (g | 0)) g = g + 0.5 | 0;
    let b = color[2];
    if (b != (b | 0)) b = b + 0.5 | 0;
    const a = color[3] === undefined ? 1 : Math.round(color[3] * 100) / 100;
    return "rgba(" + r + "," + g + "," + b + "," + a + ")";
}
function isStringColor(s) {
    if (NAMED_COLOR_RE_.test(s)) s = fromNamed(s);
    return HEX_COLOR_RE_.test(s) || s.startsWith("rgba(") || s.startsWith("rgb(");
}

},{"./asserts.js":"e4TiF","./math.js":"5jEFr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5jEFr":[function(require,module,exports) {
/**
 * @module ol/math
 */ /**
 * Takes a number and clamps it to within the provided bounds.
 * @param {number} value The input number.
 * @param {number} min The minimum value to return.
 * @param {number} max The maximum value to return.
 * @return {number} The input number if it is within bounds, or the nearest
 *     number within the bounds.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "clamp", ()=>clamp);
/**
 * Returns the square of the closest distance between the point (x, y) and the
 * line segment (x1, y1) to (x2, y2).
 * @param {number} x X.
 * @param {number} y Y.
 * @param {number} x1 X1.
 * @param {number} y1 Y1.
 * @param {number} x2 X2.
 * @param {number} y2 Y2.
 * @return {number} Squared distance.
 */ parcelHelpers.export(exports, "squaredSegmentDistance", ()=>squaredSegmentDistance);
/**
 * Returns the square of the distance between the points (x1, y1) and (x2, y2).
 * @param {number} x1 X1.
 * @param {number} y1 Y1.
 * @param {number} x2 X2.
 * @param {number} y2 Y2.
 * @return {number} Squared distance.
 */ parcelHelpers.export(exports, "squaredDistance", ()=>squaredDistance);
/**
 * Solves system of linear equations using Gaussian elimination method.
 *
 * @param {Array<Array<number>>} mat Augmented matrix (n x n + 1 column)
 *                                     in row-major order.
 * @return {Array<number>} The resulting vector.
 */ parcelHelpers.export(exports, "solveLinearSystem", ()=>solveLinearSystem);
/**
 * Converts radians to to degrees.
 *
 * @param {number} angleInRadians Angle in radians.
 * @return {number} Angle in degrees.
 */ parcelHelpers.export(exports, "toDegrees", ()=>toDegrees);
/**
 * Converts degrees to radians.
 *
 * @param {number} angleInDegrees Angle in degrees.
 * @return {number} Angle in radians.
 */ parcelHelpers.export(exports, "toRadians", ()=>toRadians);
/**
 * Returns the modulo of a / b, depending on the sign of b.
 *
 * @param {number} a Dividend.
 * @param {number} b Divisor.
 * @return {number} Modulo.
 */ parcelHelpers.export(exports, "modulo", ()=>modulo);
/**
 * Calculates the linearly interpolated value of x between a and b.
 *
 * @param {number} a Number
 * @param {number} b Number
 * @param {number} x Value to be interpolated.
 * @return {number} Interpolated value.
 */ parcelHelpers.export(exports, "lerp", ()=>lerp);
/**
 * Returns a number with a limited number of decimal digits.
 * @param {number} n The input number.
 * @param {number} decimals The maximum number of decimal digits.
 * @return {number} The input number with a limited number of decimal digits.
 */ parcelHelpers.export(exports, "toFixed", ()=>toFixed);
/**
 * Rounds a number to the nearest integer value considering only the given number
 * of decimal digits (with rounding on the final digit).
 * @param {number} n The input number.
 * @param {number} decimals The maximum number of decimal digits.
 * @return {number} The nearest integer.
 */ parcelHelpers.export(exports, "round", ()=>round);
/**
 * Rounds a number to the next smaller integer considering only the given number
 * of decimal digits (with rounding on the final digit).
 * @param {number} n The input number.
 * @param {number} decimals The maximum number of decimal digits.
 * @return {number} The next smaller integer.
 */ parcelHelpers.export(exports, "floor", ()=>floor);
/**
 * Rounds a number to the next bigger integer considering only the given number
 * of decimal digits (with rounding on the final digit).
 * @param {number} n The input number.
 * @param {number} decimals The maximum number of decimal digits.
 * @return {number} The next bigger integer.
 */ parcelHelpers.export(exports, "ceil", ()=>ceil);
function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
function squaredSegmentDistance(x, y, x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    if (dx !== 0 || dy !== 0) {
        const t = ((x - x1) * dx + (y - y1) * dy) / (dx * dx + dy * dy);
        if (t > 1) {
            x1 = x2;
            y1 = y2;
        } else if (t > 0) {
            x1 += dx * t;
            y1 += dy * t;
        }
    }
    return squaredDistance(x, y, x1, y1);
}
function squaredDistance(x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    return dx * dx + dy * dy;
}
function solveLinearSystem(mat) {
    const n = mat.length;
    for(let i = 0; i < n; i++){
        // Find max in the i-th column (ignoring i - 1 first rows)
        let maxRow = i;
        let maxEl = Math.abs(mat[i][i]);
        for(let r = i + 1; r < n; r++){
            const absValue = Math.abs(mat[r][i]);
            if (absValue > maxEl) {
                maxEl = absValue;
                maxRow = r;
            }
        }
        if (maxEl === 0) return null; // matrix is singular
        // Swap max row with i-th (current) row
        const tmp = mat[maxRow];
        mat[maxRow] = mat[i];
        mat[i] = tmp;
        // Subtract the i-th row to make all the remaining rows 0 in the i-th column
        for(let j = i + 1; j < n; j++){
            const coef = -mat[j][i] / mat[i][i];
            for(let k = i; k < n + 1; k++)if (i == k) mat[j][k] = 0;
            else mat[j][k] += coef * mat[i][k];
        }
    }
    // Solve Ax=b for upper triangular matrix A (mat)
    const x = new Array(n);
    for(let l = n - 1; l >= 0; l--){
        x[l] = mat[l][n] / mat[l][l];
        for(let m = l - 1; m >= 0; m--)mat[m][n] -= mat[m][l] * x[l];
    }
    return x;
}
function toDegrees(angleInRadians) {
    return angleInRadians * 180 / Math.PI;
}
function toRadians(angleInDegrees) {
    return angleInDegrees * Math.PI / 180;
}
function modulo(a, b) {
    const r = a % b;
    return r * b < 0 ? r + b : r;
}
function lerp(a, b, x) {
    return a + x * (b - a);
}
function toFixed(n, decimals) {
    const factor = Math.pow(10, decimals);
    return Math.round(n * factor) / factor;
}
function round(n, decimals) {
    return Math.round(toFixed(n, decimals));
}
function floor(n, decimals) {
    return Math.floor(toFixed(n, decimals));
}
function ceil(n, decimals) {
    return Math.ceil(toFixed(n, decimals));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8J9Kf":[function(require,module,exports) {
/**
 * @module ol/layer/Layer
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Return `true` if the layer is visible and if the provided view state
 * has resolution and zoom levels that are in range of the layer's min/max.
 * @param {State} layerState Layer state.
 * @param {import("../View.js").State} viewState View state.
 * @return {boolean} The layer is visible at the given view state.
 */ parcelHelpers.export(exports, "inView", ()=>inView);
var _baseJs = require("./Base.js");
var _baseJsDefault = parcelHelpers.interopDefault(_baseJs);
var _eventTypeJs = require("../events/EventType.js");
var _eventTypeJsDefault = parcelHelpers.interopDefault(_eventTypeJs);
var _propertyJs = require("./Property.js");
var _propertyJsDefault = parcelHelpers.interopDefault(_propertyJs);
var _eventTypeJs1 = require("../render/EventType.js");
var _eventTypeJsDefault1 = parcelHelpers.interopDefault(_eventTypeJs1);
var _viewJs = require("../View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _assertsJs = require("../asserts.js");
var _extentJs = require("../extent.js");
var _eventsJs = require("../events.js");
/**
 * @typedef {function(import("../Map.js").FrameState):HTMLElement} RenderFunction
 */ /**
 * @typedef {'sourceready'|'change:source'} LayerEventType
 */ /***
 * @template Return
 * @typedef {import("../Observable").OnSignature<import("../Observable").EventTypes, import("../events/Event.js").default, Return> &
 *   import("../Observable").OnSignature<import("./Base").BaseLayerObjectEventTypes|
 *     LayerEventType, import("../Object").ObjectEvent, Return> &
 *   import("../Observable").OnSignature<import("../render/EventType").LayerRenderEventTypes, import("../render/Event").default, Return> &
 *   import("../Observable").CombinedOnSignature<import("../Observable").EventTypes|import("./Base").BaseLayerObjectEventTypes|LayerEventType|
 *     import("../render/EventType").LayerRenderEventTypes, Return>} LayerOnSignature
 */ /**
 * @template {import("../source/Source.js").default} [SourceType=import("../source/Source.js").default]
 * @typedef {Object} Options
 * @property {string} [className='ol-layer'] A CSS class name to set to the layer element.
 * @property {number} [opacity=1] Opacity (0, 1).
 * @property {boolean} [visible=true] Visibility.
 * @property {import("../extent.js").Extent} [extent] The bounding extent for layer rendering.  The layer will not be
 * rendered outside of this extent.
 * @property {number} [zIndex] The z-index for layer rendering.  At rendering time, the layers
 * will be ordered, first by Z-index and then by position. When `undefined`, a `zIndex` of 0 is assumed
 * for layers that are added to the map's `layers` collection, or `Infinity` when the layer's `setMap()`
 * method was used.
 * @property {number} [minResolution] The minimum resolution (inclusive) at which this layer will be
 * visible.
 * @property {number} [maxResolution] The maximum resolution (exclusive) below which this layer will
 * be visible.
 * @property {number} [minZoom] The minimum view zoom level (exclusive) above which this layer will be
 * visible.
 * @property {number} [maxZoom] The maximum view zoom level (inclusive) at which this layer will
 * be visible.
 * @property {SourceType} [source] Source for this layer.  If not provided to the constructor,
 * the source can be set by calling {@link module:ol/layer/Layer~Layer#setSource layer.setSource(source)} after
 * construction.
 * @property {import("../Map.js").default|null} [map] Map.
 * @property {RenderFunction} [render] Render function. Takes the frame state as input and is expected to return an
 * HTML element. Will overwrite the default rendering for the layer.
 * @property {Object<string, *>} [properties] Arbitrary observable properties. Can be accessed with `#get()` and `#set()`.
 */ /**
 * @typedef {Object} State
 * @property {import("./Layer.js").default} layer Layer.
 * @property {number} opacity Opacity, the value is rounded to two digits to appear after the decimal point.
 * @property {boolean} visible Visible.
 * @property {boolean} managed Managed.
 * @property {import("../extent.js").Extent} [extent] Extent.
 * @property {number} zIndex ZIndex.
 * @property {number} maxResolution Maximum resolution.
 * @property {number} minResolution Minimum resolution.
 * @property {number} minZoom Minimum zoom.
 * @property {number} maxZoom Maximum zoom.
 */ /**
 * @classdesc
 * Base class from which all layer types are derived. This should only be instantiated
 * in the case where a custom layer is added to the map with a custom `render` function.
 * Such a function can be specified in the `options` object, and is expected to return an HTML element.
 *
 * A visual representation of raster or vector map data.
 * Layers group together those properties that pertain to how the data is to be
 * displayed, irrespective of the source of that data.
 *
 * Layers are usually added to a map with [map.addLayer()]{@link import("../Map.js").default#addLayer}.
 * Components like {@link module:ol/interaction/Draw~Draw} use unmanaged layers
 * internally. These unmanaged layers are associated with the map using
 * [layer.setMap()]{@link module:ol/layer/Layer~Layer#setMap} instead.
 *
 * A generic `change` event is fired when the state of the source changes.
 * A `sourceready` event is fired when the layer's source is ready.
 *
 * @fires import("../render/Event.js").RenderEvent#prerender
 * @fires import("../render/Event.js").RenderEvent#postrender
 * @fires import("../events/Event.js").BaseEvent#sourceready
 *
 * @template {import("../source/Source.js").default} [SourceType=import("../source/Source.js").default]
 * @template {import("../renderer/Layer.js").default} [RendererType=import("../renderer/Layer.js").default]
 * @api
 */ class Layer extends (0, _baseJsDefault.default) {
    /**
   * @param {Options<SourceType>} options Layer options.
   */ constructor(options){
        const baseOptions = Object.assign({}, options);
        delete baseOptions.source;
        super(baseOptions);
        /***
     * @type {LayerOnSignature<import("../events").EventsKey>}
     */ this.on;
        /***
     * @type {LayerOnSignature<import("../events").EventsKey>}
     */ this.once;
        /***
     * @type {LayerOnSignature<void>}
     */ this.un;
        /**
     * @private
     * @type {?import("../events.js").EventsKey}
     */ this.mapPrecomposeKey_ = null;
        /**
     * @private
     * @type {?import("../events.js").EventsKey}
     */ this.mapRenderKey_ = null;
        /**
     * @private
     * @type {?import("../events.js").EventsKey}
     */ this.sourceChangeKey_ = null;
        /**
     * @private
     * @type {RendererType}
     */ this.renderer_ = null;
        /**
     * @private
     * @type {boolean}
     */ this.sourceReady_ = false;
        /**
     * @protected
     * @type {boolean}
     */ this.rendered = false;
        // Overwrite default render method with a custom one
        if (options.render) this.render = options.render;
        if (options.map) this.setMap(options.map);
        this.addChangeListener((0, _propertyJsDefault.default).SOURCE, this.handleSourcePropertyChange_);
        const source = options.source ? /** @type {SourceType} */ options.source : null;
        this.setSource(source);
    }
    /**
   * @param {Array<import("./Layer.js").default>} [array] Array of layers (to be modified in place).
   * @return {Array<import("./Layer.js").default>} Array of layers.
   */ getLayersArray(array) {
        array = array ? array : [];
        array.push(this);
        return array;
    }
    /**
   * @param {Array<import("./Layer.js").State>} [states] Optional list of layer states (to be modified in place).
   * @return {Array<import("./Layer.js").State>} List of layer states.
   */ getLayerStatesArray(states) {
        states = states ? states : [];
        states.push(this.getLayerState());
        return states;
    }
    /**
   * Get the layer source.
   * @return {SourceType|null} The layer source (or `null` if not yet set).
   * @observable
   * @api
   */ getSource() {
        return /** @type {SourceType} */ this.get((0, _propertyJsDefault.default).SOURCE) || null;
    }
    /**
   * @return {SourceType|null} The source being rendered.
   */ getRenderSource() {
        return this.getSource();
    }
    /**
   * @return {import("../source/Source.js").State} Source state.
   */ getSourceState() {
        const source = this.getSource();
        return !source ? "undefined" : source.getState();
    }
    /**
   * @private
   */ handleSourceChange_() {
        this.changed();
        if (this.sourceReady_ || this.getSource().getState() !== "ready") return;
        this.sourceReady_ = true;
        this.dispatchEvent("sourceready");
    }
    /**
   * @private
   */ handleSourcePropertyChange_() {
        if (this.sourceChangeKey_) {
            (0, _eventsJs.unlistenByKey)(this.sourceChangeKey_);
            this.sourceChangeKey_ = null;
        }
        this.sourceReady_ = false;
        const source = this.getSource();
        if (source) {
            this.sourceChangeKey_ = (0, _eventsJs.listen)(source, (0, _eventTypeJsDefault.default).CHANGE, this.handleSourceChange_, this);
            if (source.getState() === "ready") {
                this.sourceReady_ = true;
                setTimeout(()=>{
                    this.dispatchEvent("sourceready");
                }, 0);
            }
        }
        this.changed();
    }
    /**
   * @param {import("../pixel").Pixel} pixel Pixel.
   * @return {Promise<Array<import("../Feature").FeatureLike>>} Promise that resolves with
   * an array of features.
   */ getFeatures(pixel) {
        if (!this.renderer_) return Promise.resolve([]);
        return this.renderer_.getFeatures(pixel);
    }
    /**
   * @param {import("../pixel").Pixel} pixel Pixel.
   * @return {Uint8ClampedArray|Uint8Array|Float32Array|DataView|null} Pixel data.
   */ getData(pixel) {
        if (!this.renderer_ || !this.rendered) return null;
        return this.renderer_.getData(pixel);
    }
    /**
   * The layer is visible in the given view, i.e. within its min/max resolution or zoom and
   * extent, and `getVisible()` is `true`.
   * @param {View|import("../View.js").ViewStateAndExtent} view View or {@link import("../Map.js").FrameState}.
   * @return {boolean} The layer is visible in the current view.
   * @api
   */ isVisible(view) {
        let frameState;
        if (view instanceof (0, _viewJsDefault.default)) frameState = {
            viewState: view.getState(),
            extent: view.calculateExtent()
        };
        else frameState = view;
        const layerExtent = this.getExtent();
        return this.getVisible() && inView(this.getLayerState(), frameState.viewState) && (!layerExtent || (0, _extentJs.intersects)(layerExtent, frameState.extent));
    }
    /**
   * Get the attributions of the source of this layer for the given view.
   * @param {View|import("../View.js").ViewStateAndExtent} view View or  {@link import("../Map.js").FrameState}.
   * @return {Array<string>} Attributions for this layer at the given view.
   * @api
   */ getAttributions(view) {
        if (!this.isVisible(view)) return [];
        let getAttributions;
        const source = this.getSource();
        if (source) getAttributions = source.getAttributions();
        if (!getAttributions) return [];
        const frameState = view instanceof (0, _viewJsDefault.default) ? view.getViewStateAndExtent() : view;
        let attributions = getAttributions(frameState);
        if (!Array.isArray(attributions)) attributions = [
            attributions
        ];
        return attributions;
    }
    /**
   * In charge to manage the rendering of the layer. One layer type is
   * bounded with one layer renderer.
   * @param {?import("../Map.js").FrameState} frameState Frame state.
   * @param {HTMLElement} target Target which the renderer may (but need not) use
   * for rendering its content.
   * @return {HTMLElement} The rendered element.
   */ render(frameState, target) {
        const layerRenderer = this.getRenderer();
        if (layerRenderer.prepareFrame(frameState)) {
            this.rendered = true;
            return layerRenderer.renderFrame(frameState, target);
        }
    }
    /**
   * Called when a layer is not visible during a map render.
   */ unrender() {
        this.rendered = false;
    }
    /**
   * For use inside the library only.
   * @param {import("../Map.js").default|null} map Map.
   */ setMapInternal(map) {
        if (!map) this.unrender();
        this.set((0, _propertyJsDefault.default).MAP, map);
    }
    /**
   * For use inside the library only.
   * @return {import("../Map.js").default|null} Map.
   */ getMapInternal() {
        return this.get((0, _propertyJsDefault.default).MAP);
    }
    /**
   * Sets the layer to be rendered on top of other layers on a map. The map will
   * not manage this layer in its layers collection. This
   * is useful for temporary layers. To remove an unmanaged layer from the map,
   * use `#setMap(null)`.
   *
   * To add the layer to a map and have it managed by the map, use
   * {@link module:ol/Map~Map#addLayer} instead.
   * @param {import("../Map.js").default|null} map Map.
   * @api
   */ setMap(map) {
        if (this.mapPrecomposeKey_) {
            (0, _eventsJs.unlistenByKey)(this.mapPrecomposeKey_);
            this.mapPrecomposeKey_ = null;
        }
        if (!map) this.changed();
        if (this.mapRenderKey_) {
            (0, _eventsJs.unlistenByKey)(this.mapRenderKey_);
            this.mapRenderKey_ = null;
        }
        if (map) {
            this.mapPrecomposeKey_ = (0, _eventsJs.listen)(map, (0, _eventTypeJsDefault1.default).PRECOMPOSE, function(evt) {
                const renderEvent = /** @type {import("../render/Event.js").default} */ evt;
                const layerStatesArray = renderEvent.frameState.layerStatesArray;
                const layerState = this.getLayerState(false);
                // A layer can only be added to the map once. Use either `layer.setMap()` or `map.addLayer()`, not both.
                (0, _assertsJs.assert)(!layerStatesArray.some(function(arrayLayerState) {
                    return arrayLayerState.layer === layerState.layer;
                }), 67);
                layerStatesArray.push(layerState);
            }, this);
            this.mapRenderKey_ = (0, _eventsJs.listen)(this, (0, _eventTypeJsDefault.default).CHANGE, map.render, map);
            this.changed();
        }
    }
    /**
   * Set the layer source.
   * @param {SourceType|null} source The layer source.
   * @observable
   * @api
   */ setSource(source) {
        this.set((0, _propertyJsDefault.default).SOURCE, source);
    }
    /**
   * Get the renderer for this layer.
   * @return {RendererType|null} The layer renderer.
   */ getRenderer() {
        if (!this.renderer_) this.renderer_ = this.createRenderer();
        return this.renderer_;
    }
    /**
   * @return {boolean} The layer has a renderer.
   */ hasRenderer() {
        return !!this.renderer_;
    }
    /**
   * Create a renderer for this layer.
   * @return {RendererType} A layer renderer.
   * @protected
   */ createRenderer() {
        return null;
    }
    /**
   * Clean up.
   */ disposeInternal() {
        if (this.renderer_) {
            this.renderer_.dispose();
            delete this.renderer_;
        }
        this.setSource(null);
        super.disposeInternal();
    }
}
function inView(layerState, viewState) {
    if (!layerState.visible) return false;
    const resolution = viewState.resolution;
    if (resolution < layerState.minResolution || resolution >= layerState.maxResolution) return false;
    const zoom = viewState.zoom;
    return zoom > layerState.minZoom && zoom <= layerState.maxZoom;
}
exports.default = Layer;

},{"./Base.js":"ag0tc","../events/EventType.js":"hrQJ6","./Property.js":"kCuCK","../render/EventType.js":"5G9JA","../View.js":"8xbkS","../asserts.js":"e4TiF","../extent.js":"6YrVc","../events.js":"dcspA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ag0tc":[function(require,module,exports) {
/**
 * @module ol/layer/Base
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _objectJs = require("../Object.js");
var _objectJsDefault = parcelHelpers.interopDefault(_objectJs);
var _propertyJs = require("./Property.js");
var _propertyJsDefault = parcelHelpers.interopDefault(_propertyJs);
var _utilJs = require("../util.js");
var _assertsJs = require("../asserts.js");
var _mathJs = require("../math.js");
/**
 * A css color, or a function called with a view resolution returning a css color.
 *
 * @typedef {string|function(number):string} BackgroundColor
 * @api
 */ /**
 * @typedef {import("../ObjectEventType").Types|'change:extent'|'change:maxResolution'|'change:maxZoom'|
 *    'change:minResolution'|'change:minZoom'|'change:opacity'|'change:visible'|'change:zIndex'} BaseLayerObjectEventTypes
 */ /***
 * @template Return
 * @typedef {import("../Observable").OnSignature<import("../Observable").EventTypes, import("../events/Event.js").default, Return> &
 *   import("../Observable").OnSignature<BaseLayerObjectEventTypes, import("../Object").ObjectEvent, Return> &
 *   import("../Observable").CombinedOnSignature<import("../Observable").EventTypes|BaseLayerObjectEventTypes, Return>} BaseLayerOnSignature
 */ /**
 * @typedef {Object} Options
 * @property {string} [className='ol-layer'] A CSS class name to set to the layer element.
 * @property {number} [opacity=1] Opacity (0, 1).
 * @property {boolean} [visible=true] Visibility.
 * @property {import("../extent.js").Extent} [extent] The bounding extent for layer rendering.  The layer will not be
 * rendered outside of this extent.
 * @property {number} [zIndex] The z-index for layer rendering.  At rendering time, the layers
 * will be ordered, first by Z-index and then by position. When `undefined`, a `zIndex` of 0 is assumed
 * for layers that are added to the map's `layers` collection, or `Infinity` when the layer's `setMap()`
 * method was used.
 * @property {number} [minResolution] The minimum resolution (inclusive) at which this layer will be
 * visible.
 * @property {number} [maxResolution] The maximum resolution (exclusive) below which this layer will
 * be visible.
 * @property {number} [minZoom] The minimum view zoom level (exclusive) above which this layer will be
 * visible.
 * @property {number} [maxZoom] The maximum view zoom level (inclusive) at which this layer will
 * be visible.
 * @property {BackgroundColor} [background] Background color for the layer. If not specified, no background
 * will be rendered.
 * @property {Object<string, *>} [properties] Arbitrary observable properties. Can be accessed with `#get()` and `#set()`.
 */ /**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * Note that with {@link module:ol/layer/Base~BaseLayer} and all its subclasses, any property set in
 * the options is set as a {@link module:ol/Object~BaseObject} property on the layer object, so
 * is observable, and has get/set accessors.
 *
 * @api
 */ class BaseLayer extends (0, _objectJsDefault.default) {
    /**
   * @param {Options} options Layer options.
   */ constructor(options){
        super();
        /***
     * @type {BaseLayerOnSignature<import("../events").EventsKey>}
     */ this.on;
        /***
     * @type {BaseLayerOnSignature<import("../events").EventsKey>}
     */ this.once;
        /***
     * @type {BaseLayerOnSignature<void>}
     */ this.un;
        /**
     * @type {BackgroundColor|false}
     * @private
     */ this.background_ = options.background;
        /**
     * @type {Object<string, *>}
     */ const properties = Object.assign({}, options);
        if (typeof options.properties === "object") {
            delete properties.properties;
            Object.assign(properties, options.properties);
        }
        properties[(0, _propertyJsDefault.default).OPACITY] = options.opacity !== undefined ? options.opacity : 1;
        (0, _assertsJs.assert)(typeof properties[(0, _propertyJsDefault.default).OPACITY] === "number", 64); // Layer opacity must be a number
        properties[(0, _propertyJsDefault.default).VISIBLE] = options.visible !== undefined ? options.visible : true;
        properties[(0, _propertyJsDefault.default).Z_INDEX] = options.zIndex;
        properties[(0, _propertyJsDefault.default).MAX_RESOLUTION] = options.maxResolution !== undefined ? options.maxResolution : Infinity;
        properties[(0, _propertyJsDefault.default).MIN_RESOLUTION] = options.minResolution !== undefined ? options.minResolution : 0;
        properties[(0, _propertyJsDefault.default).MIN_ZOOM] = options.minZoom !== undefined ? options.minZoom : -Infinity;
        properties[(0, _propertyJsDefault.default).MAX_ZOOM] = options.maxZoom !== undefined ? options.maxZoom : Infinity;
        /**
     * @type {string}
     * @private
     */ this.className_ = properties.className !== undefined ? properties.className : "ol-layer";
        delete properties.className;
        this.setProperties(properties);
        /**
     * @type {import("./Layer.js").State}
     * @private
     */ this.state_ = null;
    }
    /**
   * Get the background for this layer.
   * @return {BackgroundColor|false} Layer background.
   */ getBackground() {
        return this.background_;
    }
    /**
   * @return {string} CSS class name.
   */ getClassName() {
        return this.className_;
    }
    /**
   * This method is not meant to be called by layers or layer renderers because the state
   * is incorrect if the layer is included in a layer group.
   *
   * @param {boolean} [managed] Layer is managed.
   * @return {import("./Layer.js").State} Layer state.
   */ getLayerState(managed) {
        /** @type {import("./Layer.js").State} */ const state = this.state_ || /** @type {?} */ {
            layer: this,
            managed: managed === undefined ? true : managed
        };
        const zIndex = this.getZIndex();
        state.opacity = (0, _mathJs.clamp)(Math.round(this.getOpacity() * 100) / 100, 0, 1);
        state.visible = this.getVisible();
        state.extent = this.getExtent();
        state.zIndex = zIndex === undefined && !state.managed ? Infinity : zIndex;
        state.maxResolution = this.getMaxResolution();
        state.minResolution = Math.max(this.getMinResolution(), 0);
        state.minZoom = this.getMinZoom();
        state.maxZoom = this.getMaxZoom();
        this.state_ = state;
        return state;
    }
    /**
   * @abstract
   * @param {Array<import("./Layer.js").default>} [array] Array of layers (to be
   *     modified in place).
   * @return {Array<import("./Layer.js").default>} Array of layers.
   */ getLayersArray(array) {
        return (0, _utilJs.abstract)();
    }
    /**
   * @abstract
   * @param {Array<import("./Layer.js").State>} [states] Optional list of layer
   *     states (to be modified in place).
   * @return {Array<import("./Layer.js").State>} List of layer states.
   */ getLayerStatesArray(states) {
        return (0, _utilJs.abstract)();
    }
    /**
   * Return the {@link module:ol/extent~Extent extent} of the layer or `undefined` if it
   * will be visible regardless of extent.
   * @return {import("../extent.js").Extent|undefined} The layer extent.
   * @observable
   * @api
   */ getExtent() {
        return /** @type {import("../extent.js").Extent|undefined} */ this.get((0, _propertyJsDefault.default).EXTENT);
    }
    /**
   * Return the maximum resolution of the layer.
   * @return {number} The maximum resolution of the layer.
   * @observable
   * @api
   */ getMaxResolution() {
        return /** @type {number} */ this.get((0, _propertyJsDefault.default).MAX_RESOLUTION);
    }
    /**
   * Return the minimum resolution of the layer.
   * @return {number} The minimum resolution of the layer.
   * @observable
   * @api
   */ getMinResolution() {
        return /** @type {number} */ this.get((0, _propertyJsDefault.default).MIN_RESOLUTION);
    }
    /**
   * Return the minimum zoom level of the layer.
   * @return {number} The minimum zoom level of the layer.
   * @observable
   * @api
   */ getMinZoom() {
        return /** @type {number} */ this.get((0, _propertyJsDefault.default).MIN_ZOOM);
    }
    /**
   * Return the maximum zoom level of the layer.
   * @return {number} The maximum zoom level of the layer.
   * @observable
   * @api
   */ getMaxZoom() {
        return /** @type {number} */ this.get((0, _propertyJsDefault.default).MAX_ZOOM);
    }
    /**
   * Return the opacity of the layer (between 0 and 1).
   * @return {number} The opacity of the layer.
   * @observable
   * @api
   */ getOpacity() {
        return /** @type {number} */ this.get((0, _propertyJsDefault.default).OPACITY);
    }
    /**
   * @abstract
   * @return {import("../source/Source.js").State} Source state.
   */ getSourceState() {
        return (0, _utilJs.abstract)();
    }
    /**
   * Return the visibility of the layer (`true` or `false`).
   * @return {boolean} The visibility of the layer.
   * @observable
   * @api
   */ getVisible() {
        return /** @type {boolean} */ this.get((0, _propertyJsDefault.default).VISIBLE);
    }
    /**
   * Return the Z-index of the layer, which is used to order layers before
   * rendering. The default Z-index is 0.
   * @return {number} The Z-index of the layer.
   * @observable
   * @api
   */ getZIndex() {
        return /** @type {number} */ this.get((0, _propertyJsDefault.default).Z_INDEX);
    }
    /**
   * Sets the background color.
   * @param {BackgroundColor} [background] Background color.
   */ setBackground(background) {
        this.background_ = background;
        this.changed();
    }
    /**
   * Set the extent at which the layer is visible.  If `undefined`, the layer
   * will be visible at all extents.
   * @param {import("../extent.js").Extent|undefined} extent The extent of the layer.
   * @observable
   * @api
   */ setExtent(extent) {
        this.set((0, _propertyJsDefault.default).EXTENT, extent);
    }
    /**
   * Set the maximum resolution at which the layer is visible.
   * @param {number} maxResolution The maximum resolution of the layer.
   * @observable
   * @api
   */ setMaxResolution(maxResolution) {
        this.set((0, _propertyJsDefault.default).MAX_RESOLUTION, maxResolution);
    }
    /**
   * Set the minimum resolution at which the layer is visible.
   * @param {number} minResolution The minimum resolution of the layer.
   * @observable
   * @api
   */ setMinResolution(minResolution) {
        this.set((0, _propertyJsDefault.default).MIN_RESOLUTION, minResolution);
    }
    /**
   * Set the maximum zoom (exclusive) at which the layer is visible.
   * Note that the zoom levels for layer visibility are based on the
   * view zoom level, which may be different from a tile source zoom level.
   * @param {number} maxZoom The maximum zoom of the layer.
   * @observable
   * @api
   */ setMaxZoom(maxZoom) {
        this.set((0, _propertyJsDefault.default).MAX_ZOOM, maxZoom);
    }
    /**
   * Set the minimum zoom (inclusive) at which the layer is visible.
   * Note that the zoom levels for layer visibility are based on the
   * view zoom level, which may be different from a tile source zoom level.
   * @param {number} minZoom The minimum zoom of the layer.
   * @observable
   * @api
   */ setMinZoom(minZoom) {
        this.set((0, _propertyJsDefault.default).MIN_ZOOM, minZoom);
    }
    /**
   * Set the opacity of the layer, allowed values range from 0 to 1.
   * @param {number} opacity The opacity of the layer.
   * @observable
   * @api
   */ setOpacity(opacity) {
        (0, _assertsJs.assert)(typeof opacity === "number", 64); // Layer opacity must be a number
        this.set((0, _propertyJsDefault.default).OPACITY, opacity);
    }
    /**
   * Set the visibility of the layer (`true` or `false`).
   * @param {boolean} visible The visibility of the layer.
   * @observable
   * @api
   */ setVisible(visible) {
        this.set((0, _propertyJsDefault.default).VISIBLE, visible);
    }
    /**
   * Set Z-index of the layer, which is used to order layers before rendering.
   * The default Z-index is 0.
   * @param {number} zindex The z-index of the layer.
   * @observable
   * @api
   */ setZIndex(zindex) {
        this.set((0, _propertyJsDefault.default).Z_INDEX, zindex);
    }
    /**
   * Clean up.
   */ disposeInternal() {
        if (this.state_) {
            this.state_.layer = null;
            this.state_ = null;
        }
        super.disposeInternal();
    }
}
exports.default = BaseLayer;

},{"../Object.js":"1zG8z","./Property.js":"kCuCK","../util.js":"pLBjQ","../asserts.js":"e4TiF","../math.js":"5jEFr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kCuCK":[function(require,module,exports) {
/**
 * @module ol/layer/Property
 */ /**
 * @enum {string}
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    OPACITY: "opacity",
    VISIBLE: "visible",
    EXTENT: "extent",
    Z_INDEX: "zIndex",
    MAX_RESOLUTION: "maxResolution",
    MIN_RESOLUTION: "minResolution",
    MAX_ZOOM: "maxZoom",
    MIN_ZOOM: "minZoom",
    SOURCE: "source",
    MAP: "map"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5G9JA":[function(require,module,exports) {
/**
 * @module ol/render/EventType
 */ /**
 * @enum {string}
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    /**
   * Triggered before a layer is rendered.
   * @event module:ol/render/Event~RenderEvent#prerender
   * @api
   */ PRERENDER: "prerender",
    /**
   * Triggered after a layer is rendered.
   * @event module:ol/render/Event~RenderEvent#postrender
   * @api
   */ POSTRENDER: "postrender",
    /**
   * Triggered before layers are composed.  When dispatched by the map, the event object will not have
   * a `context` set.  When dispatched by a layer, the event object will have a `context` set.  Only
   * WebGL layers currently dispatch this event.
   * @event module:ol/render/Event~RenderEvent#precompose
   * @api
   */ PRECOMPOSE: "precompose",
    /**
   * Triggered after layers are composed.  When dispatched by the map, the event object will not have
   * a `context` set.  When dispatched by a layer, the event object will have a `context` set.  Only
   * WebGL layers currently dispatch this event.
   * @event module:ol/render/Event~RenderEvent#postcompose
   * @api
   */ POSTCOMPOSE: "postcompose",
    /**
   * Triggered when rendering is complete, i.e. all sources and tiles have
   * finished loading for the current viewport, and all tiles are faded in.
   * The event object will not have a `context` set.
   * @event module:ol/render/Event~RenderEvent#rendercomplete
   * @api
   */ RENDERCOMPLETE: "rendercomplete"
}; /**
 * @typedef {'postrender'|'precompose'|'postcompose'|'rendercomplete'} MapRenderEventTypes
 */  /**
 * @typedef {'postrender'|'prerender'} LayerRenderEventTypes
 */ 

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8xbkS":[function(require,module,exports) {
/**
 * @module ol/View
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @param {ViewOptions} options View options.
 * @return {import("./centerconstraint.js").Type} The constraint.
 */ parcelHelpers.export(exports, "createCenterConstraint", ()=>createCenterConstraint);
/**
 * @param {ViewOptions} options View options.
 * @return {{constraint: import("./resolutionconstraint.js").Type, maxResolution: number,
 *     minResolution: number, minZoom: number, zoomFactor: number}} The constraint.
 */ parcelHelpers.export(exports, "createResolutionConstraint", ()=>createResolutionConstraint);
/**
 * @param {ViewOptions} options View options.
 * @return {import("./rotationconstraint.js").Type} Rotation constraint.
 */ parcelHelpers.export(exports, "createRotationConstraint", ()=>createRotationConstraint);
/**
 * Determine if an animation involves no view change.
 * @param {Animation} animation The animation.
 * @return {boolean} The animation involves no view change.
 */ parcelHelpers.export(exports, "isNoopAnimation", ()=>isNoopAnimation);
var _objectJs = require("./Object.js");
var _objectJsDefault = parcelHelpers.interopDefault(_objectJs);
var _viewHintJs = require("./ViewHint.js");
var _viewHintJsDefault = parcelHelpers.interopDefault(_viewHintJs);
var _viewPropertyJs = require("./ViewProperty.js");
var _viewPropertyJsDefault = parcelHelpers.interopDefault(_viewPropertyJs);
var _commonJs = require("./tilegrid/common.js");
var _projJs = require("./proj.js");
var _functionsJs = require("./functions.js");
var _coordinateJs = require("./coordinate.js");
var _assertsJs = require("./asserts.js");
var _centerconstraintJs = require("./centerconstraint.js");
var _mathJs = require("./math.js");
var _resolutionconstraintJs = require("./resolutionconstraint.js");
var _rotationconstraintJs = require("./rotationconstraint.js");
var _easingJs = require("./easing.js");
var _extentJs = require("./extent.js");
var _arrayJs = require("./array.js");
var _polygonJs = require("./geom/Polygon.js");
/**
 * An animation configuration
 *
 * @typedef {Object} Animation
 * @property {import("./coordinate.js").Coordinate} [sourceCenter] Source center.
 * @property {import("./coordinate.js").Coordinate} [targetCenter] Target center.
 * @property {number} [sourceResolution] Source resolution.
 * @property {number} [targetResolution] Target resolution.
 * @property {number} [sourceRotation] Source rotation.
 * @property {number} [targetRotation] Target rotation.
 * @property {import("./coordinate.js").Coordinate} [anchor] Anchor.
 * @property {number} start Start.
 * @property {number} duration Duration.
 * @property {boolean} complete Complete.
 * @property {function(number):number} easing Easing.
 * @property {function(boolean):void} callback Callback.
 */ /**
 * @typedef {Object} Constraints
 * @property {import("./centerconstraint.js").Type} center Center.
 * @property {import("./resolutionconstraint.js").Type} resolution Resolution.
 * @property {import("./rotationconstraint.js").Type} rotation Rotation.
 */ /**
 * @typedef {Object} FitOptions
 * @property {import("./size.js").Size} [size] The size in pixels of the box to fit
 * the extent into. Default is the current size of the first map in the DOM that
 * uses this view, or `[100, 100]` if no such map is found.
 * @property {!Array<number>} [padding=[0, 0, 0, 0]] Padding (in pixels) to be
 * cleared inside the view. Values in the array are top, right, bottom and left
 * padding.
 * @property {boolean} [nearest=false] If the view `constrainResolution` option is `true`,
 * get the nearest extent instead of the closest that actually fits the view.
 * @property {number} [minResolution=0] Minimum resolution that we zoom to.
 * @property {number} [maxZoom] Maximum zoom level that we zoom to. If
 * `minResolution` is given, this property is ignored.
 * @property {number} [duration] The duration of the animation in milliseconds.
 * By default, there is no animation to the target extent.
 * @property {function(number):number} [easing] The easing function used during
 * the animation (defaults to {@link module:ol/easing.inAndOut}).
 * The function will be called for each frame with a number representing a
 * fraction of the animation's duration.  The function should return a number
 * between 0 and 1 representing the progress toward the destination state.
 * @property {function(boolean):void} [callback] Function called when the view is in
 * its final position. The callback will be called with `true` if the animation
 * series completed on its own or `false` if it was cancelled.
 */ /**
 * @typedef {Object} ViewOptions
 * @property {import("./coordinate.js").Coordinate} [center] The initial center for
 * the view. If a user projection is not set, the coordinate system for the center is
 * specified with the `projection` option. Layer sources will not be fetched if this
 * is not set, but the center can be set later with {@link #setCenter}.
 * @property {boolean|number} [constrainRotation=true] Rotation constraint.
 * `false` means no constraint. `true` means no constraint, but snap to zero
 * near zero. A number constrains the rotation to that number of values. For
 * example, `4` will constrain the rotation to 0, 90, 180, and 270 degrees.
 * @property {boolean} [enableRotation=true] Enable rotation.
 * If `false`, a rotation constraint that always sets the rotation to zero is
 * used. The `constrainRotation` option has no effect if `enableRotation` is
 * `false`.
 * @property {import("./extent.js").Extent} [extent] The extent that constrains the
 * view, in other words, nothing outside of this extent can be visible on the map.
 * @property {boolean} [constrainOnlyCenter=false] If true, the extent
 * constraint will only apply to the view center and not the whole extent.
 * @property {boolean} [smoothExtentConstraint=true] If true, the extent
 * constraint will be applied smoothly, i.e. allow the view to go slightly outside
 * of the given `extent`.
 * @property {number} [maxResolution] The maximum resolution used to determine
 * the resolution constraint. It is used together with `minResolution` (or
 * `maxZoom`) and `zoomFactor`. If unspecified it is calculated in such a way
 * that the projection's validity extent fits in a 256x256 px tile. If the
 * projection is Spherical Mercator (the default) then `maxResolution` defaults
 * to `40075016.68557849 / 256 = 156543.03392804097`.
 * @property {number} [minResolution] The minimum resolution used to determine
 * the resolution constraint.  It is used together with `maxResolution` (or
 * `minZoom`) and `zoomFactor`.  If unspecified it is calculated assuming 29
 * zoom levels (with a factor of 2). If the projection is Spherical Mercator
 * (the default) then `minResolution` defaults to
 * `40075016.68557849 / 256 / Math.pow(2, 28) = 0.0005831682455839253`.
 * @property {number} [maxZoom=28] The maximum zoom level used to determine the
 * resolution constraint. It is used together with `minZoom` (or
 * `maxResolution`) and `zoomFactor`.  Note that if `minResolution` is also
 * provided, it is given precedence over `maxZoom`.
 * @property {number} [minZoom=0] The minimum zoom level used to determine the
 * resolution constraint. It is used together with `maxZoom` (or
 * `minResolution`) and `zoomFactor`.  Note that if `maxResolution` is also
 * provided, it is given precedence over `minZoom`.
 * @property {boolean} [multiWorld=false] If `false` the view is constrained so
 * only one world is visible, and you cannot pan off the edge.  If `true` the map
 * may show multiple worlds at low zoom levels.  Only used if the `projection` is
 * global.  Note that if `extent` is also provided it is given precedence.
 * @property {boolean} [constrainResolution=false] If true, the view will always
 * animate to the closest zoom level after an interaction; false means
 * intermediary zoom levels are allowed.
 * @property {boolean} [smoothResolutionConstraint=true] If true, the resolution
 * min/max values will be applied smoothly, i. e. allow the view to exceed slightly
 * the given resolution or zoom bounds.
 * @property {boolean} [showFullExtent=false] Allow the view to be zoomed out to
 * show the full configured extent. By default, when a view is configured with an
 * extent, users will not be able to zoom out so the viewport exceeds the extent in
 * either dimension. This means the full extent may not be visible if the viewport
 * is taller or wider than the aspect ratio of the configured extent. If
 * showFullExtent is true, the user will be able to zoom out so that the viewport
 * exceeds the height or width of the configured extent, but not both, allowing the
 * full extent to be shown.
 * @property {import("./proj.js").ProjectionLike} [projection='EPSG:3857'] The
 * projection. The default is Spherical Mercator.
 * @property {number} [resolution] The initial resolution for the view. The
 * units are `projection` units per pixel (e.g. meters per pixel). An
 * alternative to setting this is to set `zoom`. Layer sources will not be
 * fetched if neither this nor `zoom` are defined, but they can be set later
 * with {@link #setZoom} or {@link #setResolution}.
 * @property {Array<number>} [resolutions] Resolutions that determine the
 * zoom levels if specified. The index in the array corresponds to the zoom level,
 * therefore the resolution values have to be in descending order. It also constrains
 * the resolution by the minimum and maximum value. If set the `maxResolution`,
 * `minResolution`, `minZoom`, `maxZoom`, and `zoomFactor` options are ignored.
 * @property {number} [rotation=0] The initial rotation for the view in radians
 * (positive rotation clockwise, 0 means North).
 * @property {number} [zoom] Only used if `resolution` is not defined. Zoom
 * level used to calculate the initial resolution for the view.
 * @property {number} [zoomFactor=2] The zoom factor used to compute the
 * corresponding resolution.
 * @property {!Array<number>} [padding=[0, 0, 0, 0]] Padding (in css pixels).
 * If the map viewport is partially covered with other content (overlays) along
 * its edges, this setting allows to shift the center of the viewport away from
 * that content. The order of the values is top, right, bottom, left.
 */ /**
 * @typedef {Object} AnimationOptions
 * @property {import("./coordinate.js").Coordinate} [center] The center of the view at the end of
 * the animation.
 * @property {number} [zoom] The zoom level of the view at the end of the
 * animation. This takes precedence over `resolution`.
 * @property {number} [resolution] The resolution of the view at the end
 * of the animation.  If `zoom` is also provided, this option will be ignored.
 * @property {number} [rotation] The rotation of the view at the end of
 * the animation.
 * @property {import("./coordinate.js").Coordinate} [anchor] Optional anchor to remain fixed
 * during a rotation or resolution animation.
 * @property {number} [duration=1000] The duration of the animation in milliseconds.
 * @property {function(number):number} [easing] The easing function used
 * during the animation (defaults to {@link module:ol/easing.inAndOut}).
 * The function will be called for each frame with a number representing a
 * fraction of the animation's duration.  The function should return a number
 * between 0 and 1 representing the progress toward the destination state.
 */ /**
 * @typedef {Object} State
 * @property {import("./coordinate.js").Coordinate} center Center.
 * @property {import("./proj/Projection.js").default} projection Projection.
 * @property {number} resolution Resolution.
 * @property {import("./coordinate.js").Coordinate} [nextCenter] The next center during an animation series.
 * @property {number} [nextResolution] The next resolution during an animation series.
 * @property {number} [nextRotation] The next rotation during an animation series.
 * @property {number} rotation Rotation.
 * @property {number} zoom Zoom.
 */ /**
 * Like {@link import("./Map.js").FrameState}, but just `viewState` and `extent`.
 * @typedef {Object} ViewStateAndExtent
 * @property {State} viewState View state.
 * @property {import("./extent.js").Extent} extent Extent.
 */ /**
 * Default min zoom level for the map view.
 * @type {number}
 */ const DEFAULT_MIN_ZOOM = 0;
/**
 * @typedef {import("./ObjectEventType").Types|'change:center'|'change:resolution'|'change:rotation'} ViewObjectEventTypes
 */ /***
 * @template Return
 * @typedef {import("./Observable").OnSignature<import("./Observable").EventTypes, import("./events/Event.js").default, Return> &
 *   import("./Observable").OnSignature<ViewObjectEventTypes, import("./Object").ObjectEvent, Return> &
 *   import("./Observable").CombinedOnSignature<import("./Observable").EventTypes|ViewObjectEventTypes, Return>} ViewOnSignature
 */ /**
 * @classdesc
 * A View object represents a simple 2D view of the map.
 *
 * This is the object to act upon to change the center, resolution,
 * and rotation of the map.
 *
 * A View has a `projection`. The projection determines the
 * coordinate system of the center, and its units determine the units of the
 * resolution (projection units per pixel). The default projection is
 * Web Mercator (EPSG:3857).
 *
 * ### The view states
 *
 * A View is determined by three states: `center`, `resolution`,
 * and `rotation`. Each state has a corresponding getter and setter, e.g.
 * `getCenter` and `setCenter` for the `center` state.
 *
 * The `zoom` state is actually not saved on the view: all computations
 * internally use the `resolution` state. Still, the `setZoom` and `getZoom`
 * methods are available, as well as `getResolutionForZoom` and
 * `getZoomForResolution` to switch from one system to the other.
 *
 * ### The constraints
 *
 * `setCenter`, `setResolution` and `setRotation` can be used to change the
 * states of the view, but any constraint defined in the constructor will
 * be applied along the way.
 *
 * A View object can have a *resolution constraint*, a *rotation constraint*
 * and a *center constraint*.
 *
 * The *resolution constraint* typically restricts min/max values and
 * snaps to specific resolutions. It is determined by the following
 * options: `resolutions`, `maxResolution`, `maxZoom` and `zoomFactor`.
 * If `resolutions` is set, the other three options are ignored. See
 * documentation for each option for more information. By default, the view
 * only has a min/max restriction and allow intermediary zoom levels when
 * pinch-zooming for example.
 *
 * The *rotation constraint* snaps to specific angles. It is determined
 * by the following options: `enableRotation` and `constrainRotation`.
 * By default rotation is allowed and its value is snapped to zero when approaching the
 * horizontal.
 *
 * The *center constraint* is determined by the `extent` option. By
 * default the view center is not constrained at all.
 *
 * ### Changing the view state
 *
 * It is important to note that `setZoom`, `setResolution`, `setCenter` and
 * `setRotation` are subject to the above mentioned constraints. As such, it
 * may sometimes not be possible to know in advance the resulting state of the
 * View. For example, calling `setResolution(10)` does not guarantee that
 * `getResolution()` will return `10`.
 *
 * A consequence of this is that, when applying a delta on the view state, one
 * should use `adjustCenter`, `adjustRotation`, `adjustZoom` and `adjustResolution`
 * rather than the corresponding setters. This will let view do its internal
 * computations. Besides, the `adjust*` methods also take an `anchor`
 * argument which allows specifying an origin for the transformation.
 *
 * ### Interacting with the view
 *
 * View constraints are usually only applied when the view is *at rest*, meaning that
 * no interaction or animation is ongoing. As such, if the user puts the view in a
 * state that is not equivalent to a constrained one (e.g. rotating the view when
 * the snap angle is 0), an animation will be triggered at the interaction end to
 * put back the view to a stable state;
 *
 * @api
 */ class View extends (0, _objectJsDefault.default) {
    /**
   * @param {ViewOptions} [options] View options.
   */ constructor(options){
        super();
        /***
     * @type {ViewOnSignature<import("./events").EventsKey>}
     */ this.on;
        /***
     * @type {ViewOnSignature<import("./events").EventsKey>}
     */ this.once;
        /***
     * @type {ViewOnSignature<void>}
     */ this.un;
        options = Object.assign({}, options);
        /**
     * @private
     * @type {Array<number>}
     */ this.hints_ = [
            0,
            0
        ];
        /**
     * @private
     * @type {Array<Array<Animation>>}
     */ this.animations_ = [];
        /**
     * @private
     * @type {number|undefined}
     */ this.updateAnimationKey_;
        /**
     * @private
     * @const
     * @type {import("./proj/Projection.js").default}
     */ this.projection_ = (0, _projJs.createProjection)(options.projection, "EPSG:3857");
        /**
     * @private
     * @type {import("./size.js").Size}
     */ this.viewportSize_ = [
            100,
            100
        ];
        /**
     * @private
     * @type {import("./coordinate.js").Coordinate|undefined}
     */ this.targetCenter_ = null;
        /**
     * @private
     * @type {number|undefined}
     */ this.targetResolution_;
        /**
     * @private
     * @type {number|undefined}
     */ this.targetRotation_;
        /**
     * @private
     * @type {import("./coordinate.js").Coordinate}
     */ this.nextCenter_ = null;
        /**
     * @private
     * @type {number}
     */ this.nextResolution_;
        /**
     * @private
     * @type {number}
     */ this.nextRotation_;
        /**
     * @private
     * @type {import("./coordinate.js").Coordinate|undefined}
     */ this.cancelAnchor_ = undefined;
        if (options.projection) (0, _projJs.disableCoordinateWarning)();
        if (options.center) options.center = (0, _projJs.fromUserCoordinate)(options.center, this.projection_);
        if (options.extent) options.extent = (0, _projJs.fromUserExtent)(options.extent, this.projection_);
        this.applyOptions_(options);
    }
    /**
   * Set up the view with the given options.
   * @param {ViewOptions} options View options.
   */ applyOptions_(options) {
        const properties = Object.assign({}, options);
        for(const key in 0, _viewPropertyJsDefault.default)delete properties[key];
        this.setProperties(properties, true);
        const resolutionConstraintInfo = createResolutionConstraint(options);
        /**
     * @private
     * @type {number}
     */ this.maxResolution_ = resolutionConstraintInfo.maxResolution;
        /**
     * @private
     * @type {number}
     */ this.minResolution_ = resolutionConstraintInfo.minResolution;
        /**
     * @private
     * @type {number}
     */ this.zoomFactor_ = resolutionConstraintInfo.zoomFactor;
        /**
     * @private
     * @type {Array<number>|undefined}
     */ this.resolutions_ = options.resolutions;
        /**
     * @type {Array<number>|undefined}
     * @private
     */ this.padding_ = options.padding;
        /**
     * @private
     * @type {number}
     */ this.minZoom_ = resolutionConstraintInfo.minZoom;
        const centerConstraint = createCenterConstraint(options);
        const resolutionConstraint = resolutionConstraintInfo.constraint;
        const rotationConstraint = createRotationConstraint(options);
        /**
     * @private
     * @type {Constraints}
     */ this.constraints_ = {
            center: centerConstraint,
            resolution: resolutionConstraint,
            rotation: rotationConstraint
        };
        this.setRotation(options.rotation !== undefined ? options.rotation : 0);
        this.setCenterInternal(options.center !== undefined ? options.center : null);
        if (options.resolution !== undefined) this.setResolution(options.resolution);
        else if (options.zoom !== undefined) this.setZoom(options.zoom);
    }
    /**
   * Padding (in css pixels).
   * If the map viewport is partially covered with other content (overlays) along
   * its edges, this setting allows to shift the center of the viewport away from that
   * content. The order of the values in the array is top, right, bottom, left.
   * The default is no padding, which is equivalent to `[0, 0, 0, 0]`.
   * @type {Array<number>|undefined}
   * @api
   */ get padding() {
        return this.padding_;
    }
    set padding(padding) {
        let oldPadding = this.padding_;
        this.padding_ = padding;
        const center = this.getCenterInternal();
        if (center) {
            const newPadding = padding || [
                0,
                0,
                0,
                0
            ];
            oldPadding = oldPadding || [
                0,
                0,
                0,
                0
            ];
            const resolution = this.getResolution();
            const offsetX = resolution / 2 * (newPadding[3] - oldPadding[3] + oldPadding[1] - newPadding[1]);
            const offsetY = resolution / 2 * (newPadding[0] - oldPadding[0] + oldPadding[2] - newPadding[2]);
            this.setCenterInternal([
                center[0] + offsetX,
                center[1] - offsetY
            ]);
        }
    }
    /**
   * Get an updated version of the view options used to construct the view.  The
   * current resolution (or zoom), center, and rotation are applied to any stored
   * options.  The provided options can be used to apply new min/max zoom or
   * resolution limits.
   * @param {ViewOptions} newOptions New options to be applied.
   * @return {ViewOptions} New options updated with the current view state.
   */ getUpdatedOptions_(newOptions) {
        const options = this.getProperties();
        // preserve resolution (or zoom)
        if (options.resolution !== undefined) options.resolution = this.getResolution();
        else options.zoom = this.getZoom();
        // preserve center
        options.center = this.getCenterInternal();
        // preserve rotation
        options.rotation = this.getRotation();
        return Object.assign({}, options, newOptions);
    }
    /**
   * Animate the view.  The view's center, zoom (or resolution), and rotation
   * can be animated for smooth transitions between view states.  For example,
   * to animate the view to a new zoom level:
   *
   *     view.animate({zoom: view.getZoom() + 1});
   *
   * By default, the animation lasts one second and uses in-and-out easing.  You
   * can customize this behavior by including `duration` (in milliseconds) and
   * `easing` options (see {@link module:ol/easing}).
   *
   * To chain together multiple animations, call the method with multiple
   * animation objects.  For example, to first zoom and then pan:
   *
   *     view.animate({zoom: 10}, {center: [0, 0]});
   *
   * If you provide a function as the last argument to the animate method, it
   * will get called at the end of an animation series.  The callback will be
   * called with `true` if the animation series completed on its own or `false`
   * if it was cancelled.
   *
   * Animations are cancelled by user interactions (e.g. dragging the map) or by
   * calling `view.setCenter()`, `view.setResolution()`, or `view.setRotation()`
   * (or another method that calls one of these).
   *
   * @param {...(AnimationOptions|function(boolean): void)} var_args Animation
   *     options.  Multiple animations can be run in series by passing multiple
   *     options objects.  To run multiple animations in parallel, call the method
   *     multiple times.  An optional callback can be provided as a final
   *     argument.  The callback will be called with a boolean indicating whether
   *     the animation completed without being cancelled.
   * @api
   */ animate(var_args) {
        if (this.isDef() && !this.getAnimating()) this.resolveConstraints(0);
        const args = new Array(arguments.length);
        for(let i = 0; i < args.length; ++i){
            let options = arguments[i];
            if (options.center) {
                options = Object.assign({}, options);
                options.center = (0, _projJs.fromUserCoordinate)(options.center, this.getProjection());
            }
            if (options.anchor) {
                options = Object.assign({}, options);
                options.anchor = (0, _projJs.fromUserCoordinate)(options.anchor, this.getProjection());
            }
            args[i] = options;
        }
        this.animateInternal.apply(this, args);
    }
    /**
   * @param {...(AnimationOptions|function(boolean): void)} var_args Animation options.
   */ animateInternal(var_args) {
        let animationCount = arguments.length;
        let callback;
        if (animationCount > 1 && typeof arguments[animationCount - 1] === "function") {
            callback = arguments[animationCount - 1];
            --animationCount;
        }
        let i = 0;
        for(; i < animationCount && !this.isDef(); ++i){
            // if view properties are not yet set, shortcut to the final state
            const state = arguments[i];
            if (state.center) this.setCenterInternal(state.center);
            if (state.zoom !== undefined) this.setZoom(state.zoom);
            else if (state.resolution) this.setResolution(state.resolution);
            if (state.rotation !== undefined) this.setRotation(state.rotation);
        }
        if (i === animationCount) {
            if (callback) animationCallback(callback, true);
            return;
        }
        let start = Date.now();
        let center = this.targetCenter_.slice();
        let resolution = this.targetResolution_;
        let rotation = this.targetRotation_;
        const series = [];
        for(; i < animationCount; ++i){
            const options = /** @type {AnimationOptions} */ arguments[i];
            const animation = {
                start: start,
                complete: false,
                anchor: options.anchor,
                duration: options.duration !== undefined ? options.duration : 1000,
                easing: options.easing || (0, _easingJs.inAndOut),
                callback: callback
            };
            if (options.center) {
                animation.sourceCenter = center;
                animation.targetCenter = options.center.slice();
                center = animation.targetCenter;
            }
            if (options.zoom !== undefined) {
                animation.sourceResolution = resolution;
                animation.targetResolution = this.getResolutionForZoom(options.zoom);
                resolution = animation.targetResolution;
            } else if (options.resolution) {
                animation.sourceResolution = resolution;
                animation.targetResolution = options.resolution;
                resolution = animation.targetResolution;
            }
            if (options.rotation !== undefined) {
                animation.sourceRotation = rotation;
                const delta = (0, _mathJs.modulo)(options.rotation - rotation + Math.PI, 2 * Math.PI) - Math.PI;
                animation.targetRotation = rotation + delta;
                rotation = animation.targetRotation;
            }
            // check if animation is a no-op
            if (isNoopAnimation(animation)) animation.complete = true;
            else start += animation.duration;
            series.push(animation);
        }
        this.animations_.push(series);
        this.setHint((0, _viewHintJsDefault.default).ANIMATING, 1);
        this.updateAnimations_();
    }
    /**
   * Determine if the view is being animated.
   * @return {boolean} The view is being animated.
   * @api
   */ getAnimating() {
        return this.hints_[(0, _viewHintJsDefault.default).ANIMATING] > 0;
    }
    /**
   * Determine if the user is interacting with the view, such as panning or zooming.
   * @return {boolean} The view is being interacted with.
   * @api
   */ getInteracting() {
        return this.hints_[(0, _viewHintJsDefault.default).INTERACTING] > 0;
    }
    /**
   * Cancel any ongoing animations.
   * @api
   */ cancelAnimations() {
        this.setHint((0, _viewHintJsDefault.default).ANIMATING, -this.hints_[(0, _viewHintJsDefault.default).ANIMATING]);
        let anchor;
        for(let i = 0, ii = this.animations_.length; i < ii; ++i){
            const series = this.animations_[i];
            if (series[0].callback) animationCallback(series[0].callback, false);
            if (!anchor) for(let j = 0, jj = series.length; j < jj; ++j){
                const animation = series[j];
                if (!animation.complete) {
                    anchor = animation.anchor;
                    break;
                }
            }
        }
        this.animations_.length = 0;
        this.cancelAnchor_ = anchor;
        this.nextCenter_ = null;
        this.nextResolution_ = NaN;
        this.nextRotation_ = NaN;
    }
    /**
   * Update all animations.
   */ updateAnimations_() {
        if (this.updateAnimationKey_ !== undefined) {
            cancelAnimationFrame(this.updateAnimationKey_);
            this.updateAnimationKey_ = undefined;
        }
        if (!this.getAnimating()) return;
        const now = Date.now();
        let more = false;
        for(let i = this.animations_.length - 1; i >= 0; --i){
            const series = this.animations_[i];
            let seriesComplete = true;
            for(let j = 0, jj = series.length; j < jj; ++j){
                const animation = series[j];
                if (animation.complete) continue;
                const elapsed = now - animation.start;
                let fraction = animation.duration > 0 ? elapsed / animation.duration : 1;
                if (fraction >= 1) {
                    animation.complete = true;
                    fraction = 1;
                } else seriesComplete = false;
                const progress = animation.easing(fraction);
                if (animation.sourceCenter) {
                    const x0 = animation.sourceCenter[0];
                    const y0 = animation.sourceCenter[1];
                    const x1 = animation.targetCenter[0];
                    const y1 = animation.targetCenter[1];
                    this.nextCenter_ = animation.targetCenter;
                    const x = x0 + progress * (x1 - x0);
                    const y = y0 + progress * (y1 - y0);
                    this.targetCenter_ = [
                        x,
                        y
                    ];
                }
                if (animation.sourceResolution && animation.targetResolution) {
                    const resolution = progress === 1 ? animation.targetResolution : animation.sourceResolution + progress * (animation.targetResolution - animation.sourceResolution);
                    if (animation.anchor) {
                        const size = this.getViewportSize_(this.getRotation());
                        const constrainedResolution = this.constraints_.resolution(resolution, 0, size, true);
                        this.targetCenter_ = this.calculateCenterZoom(constrainedResolution, animation.anchor);
                    }
                    this.nextResolution_ = animation.targetResolution;
                    this.targetResolution_ = resolution;
                    this.applyTargetState_(true);
                }
                if (animation.sourceRotation !== undefined && animation.targetRotation !== undefined) {
                    const rotation = progress === 1 ? (0, _mathJs.modulo)(animation.targetRotation + Math.PI, 2 * Math.PI) - Math.PI : animation.sourceRotation + progress * (animation.targetRotation - animation.sourceRotation);
                    if (animation.anchor) {
                        const constrainedRotation = this.constraints_.rotation(rotation, true);
                        this.targetCenter_ = this.calculateCenterRotate(constrainedRotation, animation.anchor);
                    }
                    this.nextRotation_ = animation.targetRotation;
                    this.targetRotation_ = rotation;
                }
                this.applyTargetState_(true);
                more = true;
                if (!animation.complete) break;
            }
            if (seriesComplete) {
                this.animations_[i] = null;
                this.setHint((0, _viewHintJsDefault.default).ANIMATING, -1);
                this.nextCenter_ = null;
                this.nextResolution_ = NaN;
                this.nextRotation_ = NaN;
                const callback = series[0].callback;
                if (callback) animationCallback(callback, true);
            }
        }
        // prune completed series
        this.animations_ = this.animations_.filter(Boolean);
        if (more && this.updateAnimationKey_ === undefined) this.updateAnimationKey_ = requestAnimationFrame(this.updateAnimations_.bind(this));
    }
    /**
   * @param {number} rotation Target rotation.
   * @param {import("./coordinate.js").Coordinate} anchor Rotation anchor.
   * @return {import("./coordinate.js").Coordinate|undefined} Center for rotation and anchor.
   */ calculateCenterRotate(rotation, anchor) {
        let center;
        const currentCenter = this.getCenterInternal();
        if (currentCenter !== undefined) {
            center = [
                currentCenter[0] - anchor[0],
                currentCenter[1] - anchor[1]
            ];
            (0, _coordinateJs.rotate)(center, rotation - this.getRotation());
            (0, _coordinateJs.add)(center, anchor);
        }
        return center;
    }
    /**
   * @param {number} resolution Target resolution.
   * @param {import("./coordinate.js").Coordinate} anchor Zoom anchor.
   * @return {import("./coordinate.js").Coordinate|undefined} Center for resolution and anchor.
   */ calculateCenterZoom(resolution, anchor) {
        let center;
        const currentCenter = this.getCenterInternal();
        const currentResolution = this.getResolution();
        if (currentCenter !== undefined && currentResolution !== undefined) {
            const x = anchor[0] - resolution * (anchor[0] - currentCenter[0]) / currentResolution;
            const y = anchor[1] - resolution * (anchor[1] - currentCenter[1]) / currentResolution;
            center = [
                x,
                y
            ];
        }
        return center;
    }
    /**
   * Returns the current viewport size.
   * @private
   * @param {number} [rotation] Take into account the rotation of the viewport when giving the size
   * @return {import("./size.js").Size} Viewport size or `[100, 100]` when no viewport is found.
   */ getViewportSize_(rotation) {
        const size = this.viewportSize_;
        if (rotation) {
            const w = size[0];
            const h = size[1];
            return [
                Math.abs(w * Math.cos(rotation)) + Math.abs(h * Math.sin(rotation)),
                Math.abs(w * Math.sin(rotation)) + Math.abs(h * Math.cos(rotation))
            ];
        }
        return size;
    }
    /**
   * Stores the viewport size on the view. The viewport size is not read every time from the DOM
   * to avoid performance hit and layout reflow.
   * This should be done on map size change.
   * Note: the constraints are not resolved during an animation to avoid stopping it
   * @param {import("./size.js").Size} [size] Viewport size; if undefined, [100, 100] is assumed
   */ setViewportSize(size) {
        this.viewportSize_ = Array.isArray(size) ? size.slice() : [
            100,
            100
        ];
        if (!this.getAnimating()) this.resolveConstraints(0);
    }
    /**
   * Get the view center.
   * @return {import("./coordinate.js").Coordinate|undefined} The center of the view.
   * @observable
   * @api
   */ getCenter() {
        const center = this.getCenterInternal();
        if (!center) return center;
        return (0, _projJs.toUserCoordinate)(center, this.getProjection());
    }
    /**
   * Get the view center without transforming to user projection.
   * @return {import("./coordinate.js").Coordinate|undefined} The center of the view.
   */ getCenterInternal() {
        return /** @type {import("./coordinate.js").Coordinate|undefined} */ this.get((0, _viewPropertyJsDefault.default).CENTER);
    }
    /**
   * @return {Constraints} Constraints.
   */ getConstraints() {
        return this.constraints_;
    }
    /**
   * @return {boolean} Resolution constraint is set
   */ getConstrainResolution() {
        return this.get("constrainResolution");
    }
    /**
   * @param {Array<number>} [hints] Destination array.
   * @return {Array<number>} Hint.
   */ getHints(hints) {
        if (hints !== undefined) {
            hints[0] = this.hints_[0];
            hints[1] = this.hints_[1];
            return hints;
        }
        return this.hints_.slice();
    }
    /**
   * Calculate the extent for the current view state and the passed size.
   * The size is the pixel dimensions of the box into which the calculated extent
   * should fit. In most cases you want to get the extent of the entire map,
   * that is `map.getSize()`.
   * @param {import("./size.js").Size} [size] Box pixel size. If not provided, the size
   * of the map that uses this view will be used.
   * @return {import("./extent.js").Extent} Extent.
   * @api
   */ calculateExtent(size) {
        const extent = this.calculateExtentInternal(size);
        return (0, _projJs.toUserExtent)(extent, this.getProjection());
    }
    /**
   * @param {import("./size.js").Size} [size] Box pixel size. If not provided,
   * the map's last known viewport size will be used.
   * @return {import("./extent.js").Extent} Extent.
   */ calculateExtentInternal(size) {
        size = size || this.getViewportSizeMinusPadding_();
        const center = /** @type {!import("./coordinate.js").Coordinate} */ this.getCenterInternal();
        (0, _assertsJs.assert)(center, 1); // The view center is not defined
        const resolution = /** @type {!number} */ this.getResolution();
        (0, _assertsJs.assert)(resolution !== undefined, 2); // The view resolution is not defined
        const rotation = /** @type {!number} */ this.getRotation();
        (0, _assertsJs.assert)(rotation !== undefined, 3); // The view rotation is not defined
        return (0, _extentJs.getForViewAndSize)(center, resolution, rotation, size);
    }
    /**
   * Get the maximum resolution of the view.
   * @return {number} The maximum resolution of the view.
   * @api
   */ getMaxResolution() {
        return this.maxResolution_;
    }
    /**
   * Get the minimum resolution of the view.
   * @return {number} The minimum resolution of the view.
   * @api
   */ getMinResolution() {
        return this.minResolution_;
    }
    /**
   * Get the maximum zoom level for the view.
   * @return {number} The maximum zoom level.
   * @api
   */ getMaxZoom() {
        return /** @type {number} */ this.getZoomForResolution(this.minResolution_);
    }
    /**
   * Set a new maximum zoom level for the view.
   * @param {number} zoom The maximum zoom level.
   * @api
   */ setMaxZoom(zoom) {
        this.applyOptions_(this.getUpdatedOptions_({
            maxZoom: zoom
        }));
    }
    /**
   * Get the minimum zoom level for the view.
   * @return {number} The minimum zoom level.
   * @api
   */ getMinZoom() {
        return /** @type {number} */ this.getZoomForResolution(this.maxResolution_);
    }
    /**
   * Set a new minimum zoom level for the view.
   * @param {number} zoom The minimum zoom level.
   * @api
   */ setMinZoom(zoom) {
        this.applyOptions_(this.getUpdatedOptions_({
            minZoom: zoom
        }));
    }
    /**
   * Set whether the view should allow intermediary zoom levels.
   * @param {boolean} enabled Whether the resolution is constrained.
   * @api
   */ setConstrainResolution(enabled) {
        this.applyOptions_(this.getUpdatedOptions_({
            constrainResolution: enabled
        }));
    }
    /**
   * Get the view projection.
   * @return {import("./proj/Projection.js").default} The projection of the view.
   * @api
   */ getProjection() {
        return this.projection_;
    }
    /**
   * Get the view resolution.
   * @return {number|undefined} The resolution of the view.
   * @observable
   * @api
   */ getResolution() {
        return /** @type {number|undefined} */ this.get((0, _viewPropertyJsDefault.default).RESOLUTION);
    }
    /**
   * Get the resolutions for the view. This returns the array of resolutions
   * passed to the constructor of the View, or undefined if none were given.
   * @return {Array<number>|undefined} The resolutions of the view.
   * @api
   */ getResolutions() {
        return this.resolutions_;
    }
    /**
   * Get the resolution for a provided extent (in map units) and size (in pixels).
   * @param {import("./extent.js").Extent} extent Extent.
   * @param {import("./size.js").Size} [size] Box pixel size.
   * @return {number} The resolution at which the provided extent will render at
   *     the given size.
   * @api
   */ getResolutionForExtent(extent, size) {
        return this.getResolutionForExtentInternal((0, _projJs.fromUserExtent)(extent, this.getProjection()), size);
    }
    /**
   * Get the resolution for a provided extent (in map units) and size (in pixels).
   * @param {import("./extent.js").Extent} extent Extent.
   * @param {import("./size.js").Size} [size] Box pixel size.
   * @return {number} The resolution at which the provided extent will render at
   *     the given size.
   */ getResolutionForExtentInternal(extent, size) {
        size = size || this.getViewportSizeMinusPadding_();
        const xResolution = (0, _extentJs.getWidth)(extent) / size[0];
        const yResolution = (0, _extentJs.getHeight)(extent) / size[1];
        return Math.max(xResolution, yResolution);
    }
    /**
   * Return a function that returns a value between 0 and 1 for a
   * resolution. Exponential scaling is assumed.
   * @param {number} [power] Power.
   * @return {function(number): number} Resolution for value function.
   */ getResolutionForValueFunction(power) {
        power = power || 2;
        const maxResolution = this.getConstrainedResolution(this.maxResolution_);
        const minResolution = this.minResolution_;
        const max = Math.log(maxResolution / minResolution) / Math.log(power);
        return(/**
       * @param {number} value Value.
       * @return {number} Resolution.
       */ function(value) {
            const resolution = maxResolution / Math.pow(power, value * max);
            return resolution;
        });
    }
    /**
   * Get the view rotation.
   * @return {number} The rotation of the view in radians.
   * @observable
   * @api
   */ getRotation() {
        return /** @type {number} */ this.get((0, _viewPropertyJsDefault.default).ROTATION);
    }
    /**
   * Return a function that returns a resolution for a value between
   * 0 and 1. Exponential scaling is assumed.
   * @param {number} [power] Power.
   * @return {function(number): number} Value for resolution function.
   */ getValueForResolutionFunction(power) {
        const logPower = Math.log(power || 2);
        const maxResolution = this.getConstrainedResolution(this.maxResolution_);
        const minResolution = this.minResolution_;
        const max = Math.log(maxResolution / minResolution) / logPower;
        return(/**
       * @param {number} resolution Resolution.
       * @return {number} Value.
       */ function(resolution) {
            const value = Math.log(maxResolution / resolution) / logPower / max;
            return value;
        });
    }
    /**
   * Returns the size of the viewport minus padding.
   * @private
   * @param {number} [rotation] Take into account the rotation of the viewport when giving the size
   * @return {import("./size.js").Size} Viewport size reduced by the padding.
   */ getViewportSizeMinusPadding_(rotation) {
        let size = this.getViewportSize_(rotation);
        const padding = this.padding_;
        if (padding) size = [
            size[0] - padding[1] - padding[3],
            size[1] - padding[0] - padding[2]
        ];
        return size;
    }
    /**
   * @return {State} View state.
   */ getState() {
        const projection = this.getProjection();
        const resolution = this.getResolution();
        const rotation = this.getRotation();
        let center = /** @type {import("./coordinate.js").Coordinate} */ this.getCenterInternal();
        const padding = this.padding_;
        if (padding) {
            const reducedSize = this.getViewportSizeMinusPadding_();
            center = calculateCenterOn(center, this.getViewportSize_(), [
                reducedSize[0] / 2 + padding[3],
                reducedSize[1] / 2 + padding[0]
            ], resolution, rotation);
        }
        return {
            center: center.slice(0),
            projection: projection !== undefined ? projection : null,
            resolution: resolution,
            nextCenter: this.nextCenter_,
            nextResolution: this.nextResolution_,
            nextRotation: this.nextRotation_,
            rotation: rotation,
            zoom: this.getZoom()
        };
    }
    /**
   * @return {ViewStateAndExtent} Like `FrameState`, but just `viewState` and `extent`.
   */ getViewStateAndExtent() {
        return {
            viewState: this.getState(),
            extent: this.calculateExtent()
        };
    }
    /**
   * Get the current zoom level. This method may return non-integer zoom levels
   * if the view does not constrain the resolution, or if an interaction or
   * animation is underway.
   * @return {number|undefined} Zoom.
   * @api
   */ getZoom() {
        let zoom;
        const resolution = this.getResolution();
        if (resolution !== undefined) zoom = this.getZoomForResolution(resolution);
        return zoom;
    }
    /**
   * Get the zoom level for a resolution.
   * @param {number} resolution The resolution.
   * @return {number|undefined} The zoom level for the provided resolution.
   * @api
   */ getZoomForResolution(resolution) {
        let offset = this.minZoom_ || 0;
        let max, zoomFactor;
        if (this.resolutions_) {
            const nearest = (0, _arrayJs.linearFindNearest)(this.resolutions_, resolution, 1);
            offset = nearest;
            max = this.resolutions_[nearest];
            if (nearest == this.resolutions_.length - 1) zoomFactor = 2;
            else zoomFactor = max / this.resolutions_[nearest + 1];
        } else {
            max = this.maxResolution_;
            zoomFactor = this.zoomFactor_;
        }
        return offset + Math.log(max / resolution) / Math.log(zoomFactor);
    }
    /**
   * Get the resolution for a zoom level.
   * @param {number} zoom Zoom level.
   * @return {number} The view resolution for the provided zoom level.
   * @api
   */ getResolutionForZoom(zoom) {
        if (this.resolutions_) {
            if (this.resolutions_.length <= 1) return 0;
            const baseLevel = (0, _mathJs.clamp)(Math.floor(zoom), 0, this.resolutions_.length - 2);
            const zoomFactor = this.resolutions_[baseLevel] / this.resolutions_[baseLevel + 1];
            return this.resolutions_[baseLevel] / Math.pow(zoomFactor, (0, _mathJs.clamp)(zoom - baseLevel, 0, 1));
        }
        return this.maxResolution_ / Math.pow(this.zoomFactor_, zoom - this.minZoom_);
    }
    /**
   * Fit the given geometry or extent based on the given map size and border.
   * The size is pixel dimensions of the box to fit the extent into.
   * In most cases you will want to use the map size, that is `map.getSize()`.
   * Takes care of the map angle.
   * @param {import("./geom/SimpleGeometry.js").default|import("./extent.js").Extent} geometryOrExtent The geometry or
   *     extent to fit the view to.
   * @param {FitOptions} [options] Options.
   * @api
   */ fit(geometryOrExtent, options) {
        /** @type {import("./geom/SimpleGeometry.js").default} */ let geometry;
        (0, _assertsJs.assert)(Array.isArray(geometryOrExtent) || typeof /** @type {?} */ geometryOrExtent.getSimplifiedGeometry === "function", 24); // Invalid extent or geometry provided as `geometry`
        if (Array.isArray(geometryOrExtent)) {
            (0, _assertsJs.assert)(!(0, _extentJs.isEmpty)(geometryOrExtent), 25); // Cannot fit empty extent provided as `geometry`
            const extent = (0, _projJs.fromUserExtent)(geometryOrExtent, this.getProjection());
            geometry = (0, _polygonJs.fromExtent)(extent);
        } else if (geometryOrExtent.getType() === "Circle") {
            const extent = (0, _projJs.fromUserExtent)(geometryOrExtent.getExtent(), this.getProjection());
            geometry = (0, _polygonJs.fromExtent)(extent);
            geometry.rotate(this.getRotation(), (0, _extentJs.getCenter)(extent));
        } else {
            const userProjection = (0, _projJs.getUserProjection)();
            if (userProjection) geometry = /** @type {import("./geom/SimpleGeometry.js").default} */ geometryOrExtent.clone().transform(userProjection, this.getProjection());
            else geometry = geometryOrExtent;
        }
        this.fitInternal(geometry, options);
    }
    /**
   * Calculate rotated extent
   * @param {import("./geom/SimpleGeometry.js").default} geometry The geometry.
   * @return {import("./extent").Extent} The rotated extent for the geometry.
   */ rotatedExtentForGeometry(geometry) {
        const rotation = this.getRotation();
        const cosAngle = Math.cos(rotation);
        const sinAngle = Math.sin(-rotation);
        const coords = geometry.getFlatCoordinates();
        const stride = geometry.getStride();
        let minRotX = Infinity;
        let minRotY = Infinity;
        let maxRotX = -Infinity;
        let maxRotY = -Infinity;
        for(let i = 0, ii = coords.length; i < ii; i += stride){
            const rotX = coords[i] * cosAngle - coords[i + 1] * sinAngle;
            const rotY = coords[i] * sinAngle + coords[i + 1] * cosAngle;
            minRotX = Math.min(minRotX, rotX);
            minRotY = Math.min(minRotY, rotY);
            maxRotX = Math.max(maxRotX, rotX);
            maxRotY = Math.max(maxRotY, rotY);
        }
        return [
            minRotX,
            minRotY,
            maxRotX,
            maxRotY
        ];
    }
    /**
   * @param {import("./geom/SimpleGeometry.js").default} geometry The geometry.
   * @param {FitOptions} [options] Options.
   */ fitInternal(geometry, options) {
        options = options || {};
        let size = options.size;
        if (!size) size = this.getViewportSizeMinusPadding_();
        const padding = options.padding !== undefined ? options.padding : [
            0,
            0,
            0,
            0
        ];
        const nearest = options.nearest !== undefined ? options.nearest : false;
        let minResolution;
        if (options.minResolution !== undefined) minResolution = options.minResolution;
        else if (options.maxZoom !== undefined) minResolution = this.getResolutionForZoom(options.maxZoom);
        else minResolution = 0;
        const rotatedExtent = this.rotatedExtentForGeometry(geometry);
        // calculate resolution
        let resolution = this.getResolutionForExtentInternal(rotatedExtent, [
            size[0] - padding[1] - padding[3],
            size[1] - padding[0] - padding[2]
        ]);
        resolution = isNaN(resolution) ? minResolution : Math.max(resolution, minResolution);
        resolution = this.getConstrainedResolution(resolution, nearest ? 0 : 1);
        // calculate center
        const rotation = this.getRotation();
        const sinAngle = Math.sin(rotation);
        const cosAngle = Math.cos(rotation);
        const centerRot = (0, _extentJs.getCenter)(rotatedExtent);
        centerRot[0] += (padding[1] - padding[3]) / 2 * resolution;
        centerRot[1] += (padding[0] - padding[2]) / 2 * resolution;
        const centerX = centerRot[0] * cosAngle - centerRot[1] * sinAngle;
        const centerY = centerRot[1] * cosAngle + centerRot[0] * sinAngle;
        const center = this.getConstrainedCenter([
            centerX,
            centerY
        ], resolution);
        const callback = options.callback ? options.callback : (0, _functionsJs.VOID);
        if (options.duration !== undefined) this.animateInternal({
            resolution: resolution,
            center: center,
            duration: options.duration,
            easing: options.easing
        }, callback);
        else {
            this.targetResolution_ = resolution;
            this.targetCenter_ = center;
            this.applyTargetState_(false, true);
            animationCallback(callback, true);
        }
    }
    /**
   * Center on coordinate and view position.
   * @param {import("./coordinate.js").Coordinate} coordinate Coordinate.
   * @param {import("./size.js").Size} size Box pixel size.
   * @param {import("./pixel.js").Pixel} position Position on the view to center on.
   * @api
   */ centerOn(coordinate, size, position) {
        this.centerOnInternal((0, _projJs.fromUserCoordinate)(coordinate, this.getProjection()), size, position);
    }
    /**
   * @param {import("./coordinate.js").Coordinate} coordinate Coordinate.
   * @param {import("./size.js").Size} size Box pixel size.
   * @param {import("./pixel.js").Pixel} position Position on the view to center on.
   */ centerOnInternal(coordinate, size, position) {
        this.setCenterInternal(calculateCenterOn(coordinate, size, position, this.getResolution(), this.getRotation()));
    }
    /**
   * Calculates the shift between map and viewport center.
   * @param {import("./coordinate.js").Coordinate} center Center.
   * @param {number} resolution Resolution.
   * @param {number} rotation Rotation.
   * @param {import("./size.js").Size} size Size.
   * @return {Array<number>|undefined} Center shift.
   */ calculateCenterShift(center, resolution, rotation, size) {
        let centerShift;
        const padding = this.padding_;
        if (padding && center) {
            const reducedSize = this.getViewportSizeMinusPadding_(-rotation);
            const shiftedCenter = calculateCenterOn(center, size, [
                reducedSize[0] / 2 + padding[3],
                reducedSize[1] / 2 + padding[0]
            ], resolution, rotation);
            centerShift = [
                center[0] - shiftedCenter[0],
                center[1] - shiftedCenter[1]
            ];
        }
        return centerShift;
    }
    /**
   * @return {boolean} Is defined.
   */ isDef() {
        return !!this.getCenterInternal() && this.getResolution() !== undefined;
    }
    /**
   * Adds relative coordinates to the center of the view. Any extent constraint will apply.
   * @param {import("./coordinate.js").Coordinate} deltaCoordinates Relative value to add.
   * @api
   */ adjustCenter(deltaCoordinates) {
        const center = (0, _projJs.toUserCoordinate)(this.targetCenter_, this.getProjection());
        this.setCenter([
            center[0] + deltaCoordinates[0],
            center[1] + deltaCoordinates[1]
        ]);
    }
    /**
   * Adds relative coordinates to the center of the view. Any extent constraint will apply.
   * @param {import("./coordinate.js").Coordinate} deltaCoordinates Relative value to add.
   */ adjustCenterInternal(deltaCoordinates) {
        const center = this.targetCenter_;
        this.setCenterInternal([
            center[0] + deltaCoordinates[0],
            center[1] + deltaCoordinates[1]
        ]);
    }
    /**
   * Multiply the view resolution by a ratio, optionally using an anchor. Any resolution
   * constraint will apply.
   * @param {number} ratio The ratio to apply on the view resolution.
   * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
   * @api
   */ adjustResolution(ratio, anchor) {
        anchor = anchor && (0, _projJs.fromUserCoordinate)(anchor, this.getProjection());
        this.adjustResolutionInternal(ratio, anchor);
    }
    /**
   * Multiply the view resolution by a ratio, optionally using an anchor. Any resolution
   * constraint will apply.
   * @param {number} ratio The ratio to apply on the view resolution.
   * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
   */ adjustResolutionInternal(ratio, anchor) {
        const isMoving = this.getAnimating() || this.getInteracting();
        const size = this.getViewportSize_(this.getRotation());
        const newResolution = this.constraints_.resolution(this.targetResolution_ * ratio, 0, size, isMoving);
        if (anchor) this.targetCenter_ = this.calculateCenterZoom(newResolution, anchor);
        this.targetResolution_ *= ratio;
        this.applyTargetState_();
    }
    /**
   * Adds a value to the view zoom level, optionally using an anchor. Any resolution
   * constraint will apply.
   * @param {number} delta Relative value to add to the zoom level.
   * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
   * @api
   */ adjustZoom(delta, anchor) {
        this.adjustResolution(Math.pow(this.zoomFactor_, -delta), anchor);
    }
    /**
   * Adds a value to the view rotation, optionally using an anchor. Any rotation
   * constraint will apply.
   * @param {number} delta Relative value to add to the zoom rotation, in radians.
   * @param {import("./coordinate.js").Coordinate} [anchor] The rotation center.
   * @api
   */ adjustRotation(delta, anchor) {
        if (anchor) anchor = (0, _projJs.fromUserCoordinate)(anchor, this.getProjection());
        this.adjustRotationInternal(delta, anchor);
    }
    /**
   * @param {number} delta Relative value to add to the zoom rotation, in radians.
   * @param {import("./coordinate.js").Coordinate} [anchor] The rotation center.
   */ adjustRotationInternal(delta, anchor) {
        const isMoving = this.getAnimating() || this.getInteracting();
        const newRotation = this.constraints_.rotation(this.targetRotation_ + delta, isMoving);
        if (anchor) this.targetCenter_ = this.calculateCenterRotate(newRotation, anchor);
        this.targetRotation_ += delta;
        this.applyTargetState_();
    }
    /**
   * Set the center of the current view. Any extent constraint will apply.
   * @param {import("./coordinate.js").Coordinate|undefined} center The center of the view.
   * @observable
   * @api
   */ setCenter(center) {
        this.setCenterInternal(center ? (0, _projJs.fromUserCoordinate)(center, this.getProjection()) : center);
    }
    /**
   * Set the center using the view projection (not the user projection).
   * @param {import("./coordinate.js").Coordinate|undefined} center The center of the view.
   */ setCenterInternal(center) {
        this.targetCenter_ = center;
        this.applyTargetState_();
    }
    /**
   * @param {import("./ViewHint.js").default} hint Hint.
   * @param {number} delta Delta.
   * @return {number} New value.
   */ setHint(hint, delta) {
        this.hints_[hint] += delta;
        this.changed();
        return this.hints_[hint];
    }
    /**
   * Set the resolution for this view. Any resolution constraint will apply.
   * @param {number|undefined} resolution The resolution of the view.
   * @observable
   * @api
   */ setResolution(resolution) {
        this.targetResolution_ = resolution;
        this.applyTargetState_();
    }
    /**
   * Set the rotation for this view. Any rotation constraint will apply.
   * @param {number} rotation The rotation of the view in radians.
   * @observable
   * @api
   */ setRotation(rotation) {
        this.targetRotation_ = rotation;
        this.applyTargetState_();
    }
    /**
   * Zoom to a specific zoom level. Any resolution constrain will apply.
   * @param {number} zoom Zoom level.
   * @api
   */ setZoom(zoom) {
        this.setResolution(this.getResolutionForZoom(zoom));
    }
    /**
   * Recompute rotation/resolution/center based on target values.
   * Note: we have to compute rotation first, then resolution and center considering that
   * parameters can influence one another in case a view extent constraint is present.
   * @param {boolean} [doNotCancelAnims] Do not cancel animations.
   * @param {boolean} [forceMoving] Apply constraints as if the view is moving.
   * @private
   */ applyTargetState_(doNotCancelAnims, forceMoving) {
        const isMoving = this.getAnimating() || this.getInteracting() || forceMoving;
        // compute rotation
        const newRotation = this.constraints_.rotation(this.targetRotation_, isMoving);
        const size = this.getViewportSize_(newRotation);
        const newResolution = this.constraints_.resolution(this.targetResolution_, 0, size, isMoving);
        const newCenter = this.constraints_.center(this.targetCenter_, newResolution, size, isMoving, this.calculateCenterShift(this.targetCenter_, newResolution, newRotation, size));
        if (this.get((0, _viewPropertyJsDefault.default).ROTATION) !== newRotation) this.set((0, _viewPropertyJsDefault.default).ROTATION, newRotation);
        if (this.get((0, _viewPropertyJsDefault.default).RESOLUTION) !== newResolution) {
            this.set((0, _viewPropertyJsDefault.default).RESOLUTION, newResolution);
            this.set("zoom", this.getZoom(), true);
        }
        if (!newCenter || !this.get((0, _viewPropertyJsDefault.default).CENTER) || !(0, _coordinateJs.equals)(this.get((0, _viewPropertyJsDefault.default).CENTER), newCenter)) this.set((0, _viewPropertyJsDefault.default).CENTER, newCenter);
        if (this.getAnimating() && !doNotCancelAnims) this.cancelAnimations();
        this.cancelAnchor_ = undefined;
    }
    /**
   * If any constraints need to be applied, an animation will be triggered.
   * This is typically done on interaction end.
   * Note: calling this with a duration of 0 will apply the constrained values straight away,
   * without animation.
   * @param {number} [duration] The animation duration in ms.
   * @param {number} [resolutionDirection] Which direction to zoom.
   * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
   */ resolveConstraints(duration, resolutionDirection, anchor) {
        duration = duration !== undefined ? duration : 200;
        const direction = resolutionDirection || 0;
        const newRotation = this.constraints_.rotation(this.targetRotation_);
        const size = this.getViewportSize_(newRotation);
        const newResolution = this.constraints_.resolution(this.targetResolution_, direction, size);
        const newCenter = this.constraints_.center(this.targetCenter_, newResolution, size, false, this.calculateCenterShift(this.targetCenter_, newResolution, newRotation, size));
        if (duration === 0 && !this.cancelAnchor_) {
            this.targetResolution_ = newResolution;
            this.targetRotation_ = newRotation;
            this.targetCenter_ = newCenter;
            this.applyTargetState_();
            return;
        }
        anchor = anchor || (duration === 0 ? this.cancelAnchor_ : undefined);
        this.cancelAnchor_ = undefined;
        if (this.getResolution() !== newResolution || this.getRotation() !== newRotation || !this.getCenterInternal() || !(0, _coordinateJs.equals)(this.getCenterInternal(), newCenter)) {
            if (this.getAnimating()) this.cancelAnimations();
            this.animateInternal({
                rotation: newRotation,
                center: newCenter,
                resolution: newResolution,
                duration: duration,
                easing: (0, _easingJs.easeOut),
                anchor: anchor
            });
        }
    }
    /**
   * Notify the View that an interaction has started.
   * The view state will be resolved to a stable one if needed
   * (depending on its constraints).
   * @api
   */ beginInteraction() {
        this.resolveConstraints(0);
        this.setHint((0, _viewHintJsDefault.default).INTERACTING, 1);
    }
    /**
   * Notify the View that an interaction has ended. The view state will be resolved
   * to a stable one if needed (depending on its constraints).
   * @param {number} [duration] Animation duration in ms.
   * @param {number} [resolutionDirection] Which direction to zoom.
   * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
   * @api
   */ endInteraction(duration, resolutionDirection, anchor) {
        anchor = anchor && (0, _projJs.fromUserCoordinate)(anchor, this.getProjection());
        this.endInteractionInternal(duration, resolutionDirection, anchor);
    }
    /**
   * Notify the View that an interaction has ended. The view state will be resolved
   * to a stable one if needed (depending on its constraints).
   * @param {number} [duration] Animation duration in ms.
   * @param {number} [resolutionDirection] Which direction to zoom.
   * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
   */ endInteractionInternal(duration, resolutionDirection, anchor) {
        if (!this.getInteracting()) return;
        this.setHint((0, _viewHintJsDefault.default).INTERACTING, -1);
        this.resolveConstraints(duration, resolutionDirection, anchor);
    }
    /**
   * Get a valid position for the view center according to the current constraints.
   * @param {import("./coordinate.js").Coordinate|undefined} targetCenter Target center position.
   * @param {number} [targetResolution] Target resolution. If not supplied, the current one will be used.
   * This is useful to guess a valid center position at a different zoom level.
   * @return {import("./coordinate.js").Coordinate|undefined} Valid center position.
   */ getConstrainedCenter(targetCenter, targetResolution) {
        const size = this.getViewportSize_(this.getRotation());
        return this.constraints_.center(targetCenter, targetResolution || this.getResolution(), size);
    }
    /**
   * Get a valid zoom level according to the current view constraints.
   * @param {number|undefined} targetZoom Target zoom.
   * @param {number} [direction=0] Indicate which resolution should be used
   * by a renderer if the view resolution does not match any resolution of the tile source.
   * If 0, the nearest resolution will be used. If 1, the nearest lower resolution
   * will be used. If -1, the nearest higher resolution will be used.
   * @return {number|undefined} Valid zoom level.
   */ getConstrainedZoom(targetZoom, direction) {
        const targetRes = this.getResolutionForZoom(targetZoom);
        return this.getZoomForResolution(this.getConstrainedResolution(targetRes, direction));
    }
    /**
   * Get a valid resolution according to the current view constraints.
   * @param {number|undefined} targetResolution Target resolution.
   * @param {number} [direction=0] Indicate which resolution should be used
   * by a renderer if the view resolution does not match any resolution of the tile source.
   * If 0, the nearest resolution will be used. If 1, the nearest lower resolution
   * will be used. If -1, the nearest higher resolution will be used.
   * @return {number|undefined} Valid resolution.
   */ getConstrainedResolution(targetResolution, direction) {
        direction = direction || 0;
        const size = this.getViewportSize_(this.getRotation());
        return this.constraints_.resolution(targetResolution, direction, size);
    }
}
/**
 * @param {Function} callback Callback.
 * @param {*} returnValue Return value.
 */ function animationCallback(callback, returnValue) {
    setTimeout(function() {
        callback(returnValue);
    }, 0);
}
function createCenterConstraint(options) {
    if (options.extent !== undefined) {
        const smooth = options.smoothExtentConstraint !== undefined ? options.smoothExtentConstraint : true;
        return (0, _centerconstraintJs.createExtent)(options.extent, options.constrainOnlyCenter, smooth);
    }
    const projection = (0, _projJs.createProjection)(options.projection, "EPSG:3857");
    if (options.multiWorld !== true && projection.isGlobal()) {
        const extent = projection.getExtent().slice();
        extent[0] = -Infinity;
        extent[2] = Infinity;
        return (0, _centerconstraintJs.createExtent)(extent, false, false);
    }
    return 0, _centerconstraintJs.none;
}
function createResolutionConstraint(options) {
    let resolutionConstraint;
    let maxResolution;
    let minResolution;
    // TODO: move these to be ol constants
    // see https://github.com/openlayers/openlayers/issues/2076
    const defaultMaxZoom = 28;
    const defaultZoomFactor = 2;
    let minZoom = options.minZoom !== undefined ? options.minZoom : DEFAULT_MIN_ZOOM;
    let maxZoom = options.maxZoom !== undefined ? options.maxZoom : defaultMaxZoom;
    const zoomFactor = options.zoomFactor !== undefined ? options.zoomFactor : defaultZoomFactor;
    const multiWorld = options.multiWorld !== undefined ? options.multiWorld : false;
    const smooth = options.smoothResolutionConstraint !== undefined ? options.smoothResolutionConstraint : true;
    const showFullExtent = options.showFullExtent !== undefined ? options.showFullExtent : false;
    const projection = (0, _projJs.createProjection)(options.projection, "EPSG:3857");
    const projExtent = projection.getExtent();
    let constrainOnlyCenter = options.constrainOnlyCenter;
    let extent = options.extent;
    if (!multiWorld && !extent && projection.isGlobal()) {
        constrainOnlyCenter = false;
        extent = projExtent;
    }
    if (options.resolutions !== undefined) {
        const resolutions = options.resolutions;
        maxResolution = resolutions[minZoom];
        minResolution = resolutions[maxZoom] !== undefined ? resolutions[maxZoom] : resolutions[resolutions.length - 1];
        if (options.constrainResolution) resolutionConstraint = (0, _resolutionconstraintJs.createSnapToResolutions)(resolutions, smooth, !constrainOnlyCenter && extent, showFullExtent);
        else resolutionConstraint = (0, _resolutionconstraintJs.createMinMaxResolution)(maxResolution, minResolution, smooth, !constrainOnlyCenter && extent, showFullExtent);
    } else {
        // calculate the default min and max resolution
        const size = !projExtent ? 360 * (0, _projJs.METERS_PER_UNIT).degrees / projection.getMetersPerUnit() : Math.max((0, _extentJs.getWidth)(projExtent), (0, _extentJs.getHeight)(projExtent));
        const defaultMaxResolution = size / (0, _commonJs.DEFAULT_TILE_SIZE) / Math.pow(defaultZoomFactor, DEFAULT_MIN_ZOOM);
        const defaultMinResolution = defaultMaxResolution / Math.pow(defaultZoomFactor, defaultMaxZoom - DEFAULT_MIN_ZOOM);
        // user provided maxResolution takes precedence
        maxResolution = options.maxResolution;
        if (maxResolution !== undefined) minZoom = 0;
        else maxResolution = defaultMaxResolution / Math.pow(zoomFactor, minZoom);
        // user provided minResolution takes precedence
        minResolution = options.minResolution;
        if (minResolution === undefined) {
            if (options.maxZoom !== undefined) {
                if (options.maxResolution !== undefined) minResolution = maxResolution / Math.pow(zoomFactor, maxZoom);
                else minResolution = defaultMaxResolution / Math.pow(zoomFactor, maxZoom);
            } else minResolution = defaultMinResolution;
        }
        // given discrete zoom levels, minResolution may be different than provided
        maxZoom = minZoom + Math.floor(Math.log(maxResolution / minResolution) / Math.log(zoomFactor));
        minResolution = maxResolution / Math.pow(zoomFactor, maxZoom - minZoom);
        if (options.constrainResolution) resolutionConstraint = (0, _resolutionconstraintJs.createSnapToPower)(zoomFactor, maxResolution, minResolution, smooth, !constrainOnlyCenter && extent, showFullExtent);
        else resolutionConstraint = (0, _resolutionconstraintJs.createMinMaxResolution)(maxResolution, minResolution, smooth, !constrainOnlyCenter && extent, showFullExtent);
    }
    return {
        constraint: resolutionConstraint,
        maxResolution: maxResolution,
        minResolution: minResolution,
        minZoom: minZoom,
        zoomFactor: zoomFactor
    };
}
function createRotationConstraint(options) {
    const enableRotation = options.enableRotation !== undefined ? options.enableRotation : true;
    if (enableRotation) {
        const constrainRotation = options.constrainRotation;
        if (constrainRotation === undefined || constrainRotation === true) return (0, _rotationconstraintJs.createSnapToZero)();
        else if (constrainRotation === false) return 0, _rotationconstraintJs.none;
        else if (typeof constrainRotation === "number") return (0, _rotationconstraintJs.createSnapToN)(constrainRotation);
        return 0, _rotationconstraintJs.none;
    }
    return 0, _rotationconstraintJs.disable;
}
function isNoopAnimation(animation) {
    if (animation.sourceCenter && animation.targetCenter) {
        if (!(0, _coordinateJs.equals)(animation.sourceCenter, animation.targetCenter)) return false;
    }
    if (animation.sourceResolution !== animation.targetResolution) return false;
    if (animation.sourceRotation !== animation.targetRotation) return false;
    return true;
}
/**
 * @param {import("./coordinate.js").Coordinate} coordinate Coordinate.
 * @param {import("./size.js").Size} size Box pixel size.
 * @param {import("./pixel.js").Pixel} position Position on the view to center on.
 * @param {number} resolution Resolution.
 * @param {number} rotation Rotation.
 * @return {import("./coordinate.js").Coordinate} Shifted center.
 */ function calculateCenterOn(coordinate, size, position, resolution, rotation) {
    // calculate rotated position
    const cosAngle = Math.cos(-rotation);
    let sinAngle = Math.sin(-rotation);
    let rotX = coordinate[0] * cosAngle - coordinate[1] * sinAngle;
    let rotY = coordinate[1] * cosAngle + coordinate[0] * sinAngle;
    rotX += (size[0] / 2 - position[0]) * resolution;
    rotY += (position[1] - size[1] / 2) * resolution;
    // go back to original angle
    sinAngle = -sinAngle; // go back to original rotation
    const centerX = rotX * cosAngle - rotY * sinAngle;
    const centerY = rotY * cosAngle + rotX * sinAngle;
    return [
        centerX,
        centerY
    ];
}
exports.default = View;

},{"./Object.js":"1zG8z","./ViewHint.js":"6THmF","./ViewProperty.js":"lWCek","./tilegrid/common.js":"bxYGl","./proj.js":"SznqC","./functions.js":"iqv8I","./coordinate.js":"85Vu7","./asserts.js":"e4TiF","./centerconstraint.js":"g3NLx","./math.js":"5jEFr","./resolutionconstraint.js":"j8WKZ","./rotationconstraint.js":"hSWd8","./easing.js":"fYITA","./extent.js":"6YrVc","./array.js":"1Fbic","./geom/Polygon.js":"cJuQF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6THmF":[function(require,module,exports) {
/**
 * @module ol/ViewHint
 */ /**
 * @enum {number}
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    ANIMATING: 0,
    INTERACTING: 1
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lWCek":[function(require,module,exports) {
/**
 * @module ol/ViewProperty
 */ /**
 * @enum {string}
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    CENTER: "center",
    RESOLUTION: "resolution",
    ROTATION: "rotation"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bxYGl":[function(require,module,exports) {
/**
 * @module ol/tilegrid/common
 */ /**
 * Default maximum zoom for default tile grids.
 * @type {number}
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DEFAULT_MAX_ZOOM", ()=>DEFAULT_MAX_ZOOM);
parcelHelpers.export(exports, "DEFAULT_TILE_SIZE", ()=>DEFAULT_TILE_SIZE);
const DEFAULT_MAX_ZOOM = 42;
const DEFAULT_TILE_SIZE = 256;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"SznqC":[function(require,module,exports) {
/**
 * @module ol/proj
 */ /**
 * The ol/proj module stores:
 * * a list of {@link module:ol/proj/Projection~Projection}
 * objects, one for each projection supported by the application
 * * a list of transform functions needed to convert coordinates in one projection
 * into another.
 *
 * The static functions are the methods used to maintain these.
 * Each transform function can handle not only simple coordinate pairs, but also
 * large arrays of coordinates such as vector geometries.
 *
 * When loaded, the library adds projection objects for EPSG:4326 (WGS84
 * geographic coordinates) and EPSG:3857 (Web or Spherical Mercator, as used
 * for example by Bing Maps or OpenStreetMap), together with the relevant
 * transform functions.
 *
 * Additional transforms may be added by using the http://proj4js.org/
 * library (version 2.2 or later). You can use the full build supplied by
 * Proj4js, or create a custom build to support those projections you need; see
 * the Proj4js website for how to do this. You also need the Proj4js definitions
 * for the required projections. These definitions can be obtained from
 * https://epsg.io/, and are a JS function, so can be loaded in a script
 * tag (as in the examples) or pasted into your application.
 *
 * After all required projection definitions are added to proj4's registry (by
 * using `proj4.defs()`), simply call `register(proj4)` from the `ol/proj/proj4`
 * package. Existing transforms are not changed by this function. See
 * examples/wms-image-custom-proj for an example of this.
 *
 * Additional projection definitions can be registered with `proj4.defs()` any
 * time. Just make sure to call `register(proj4)` again; for example, with user-supplied data where you don't
 * know in advance what projections are needed, you can initially load minimal
 * support and then load whichever are requested.
 *
 * Note that Proj4js does not support projection extents. If you want to add
 * one for creating default tile grids, you can add it after the Projection
 * object has been created with `setExtent`, for example,
 * `get('EPSG:1234').setExtent(extent)`.
 *
 * In addition to Proj4js support, any transform functions can be added with
 * {@link module:ol/proj.addCoordinateTransforms}. To use this, you must first create
 * a {@link module:ol/proj/Projection~Projection} object for the new projection and add it with
 * {@link module:ol/proj.addProjection}. You can then add the forward and inverse
 * functions with {@link module:ol/proj.addCoordinateTransforms}. See
 * examples/wms-custom-proj for an example of this.
 *
 * Note that if no transforms are needed and you only need to define the
 * projection, just add a {@link module:ol/proj/Projection~Projection} with
 * {@link module:ol/proj.addProjection}. See examples/wms-no-proj for an example of
 * this.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * A projection as {@link module:ol/proj/Projection~Projection}, SRS identifier
 * string or undefined.
 * @typedef {Projection|string|undefined} ProjectionLike
 * @api
 */ /**
 * A transform function accepts an array of input coordinate values, an optional
 * output array, and an optional dimension (default should be 2).  The function
 * transforms the input coordinate values, populates the output array, and
 * returns the output array.
 *
 * @typedef {function(Array<number>, Array<number>=, number=): Array<number>} TransformFunction
 * @api
 */ parcelHelpers.export(exports, "METERS_PER_UNIT", ()=>(0, _unitsJs.METERS_PER_UNIT));
parcelHelpers.export(exports, "Projection", ()=>(0, _projectionJsDefault.default));
/**
 * @param {boolean} [disable = true] Disable console info about `useGeographic()`
 */ parcelHelpers.export(exports, "disableCoordinateWarning", ()=>disableCoordinateWarning);
/**
 * @param {Array<number>} input Input coordinate array.
 * @param {Array<number>} [output] Output array of coordinate values.
 * @return {Array<number>} Output coordinate array (new array, same coordinate
 *     values).
 */ parcelHelpers.export(exports, "cloneTransform", ()=>cloneTransform);
/**
 * @param {Array<number>} input Input coordinate array.
 * @param {Array<number>} [output] Output array of coordinate values.
 * @return {Array<number>} Input coordinate array (same array as input).
 */ parcelHelpers.export(exports, "identityTransform", ()=>identityTransform);
/**
 * Add a Projection object to the list of supported projections that can be
 * looked up by their code.
 *
 * @param {Projection} projection Projection instance.
 * @api
 */ parcelHelpers.export(exports, "addProjection", ()=>addProjection);
/**
 * @param {Array<Projection>} projections Projections.
 */ parcelHelpers.export(exports, "addProjections", ()=>addProjections);
/**
 * Fetches a Projection object for the code specified.
 *
 * @param {ProjectionLike} projectionLike Either a code string which is
 *     a combination of authority and identifier such as "EPSG:4326", or an
 *     existing projection object, or undefined.
 * @return {Projection|null} Projection object, or null if not in list.
 * @api
 */ parcelHelpers.export(exports, "get", ()=>get);
/**
 * Get the resolution of the point in degrees or distance units.
 * For projections with degrees as the unit this will simply return the
 * provided resolution. For other projections the point resolution is
 * by default estimated by transforming the `point` pixel to EPSG:4326,
 * measuring its width and height on the normal sphere,
 * and taking the average of the width and height.
 * A custom function can be provided for a specific projection, either
 * by setting the `getPointResolution` option in the
 * {@link module:ol/proj/Projection~Projection} constructor or by using
 * {@link module:ol/proj/Projection~Projection#setGetPointResolution} to change an existing
 * projection object.
 * @param {ProjectionLike} projection The projection.
 * @param {number} resolution Nominal resolution in projection units.
 * @param {import("./coordinate.js").Coordinate} point Point to find adjusted resolution at.
 * @param {import("./proj/Units.js").Units} [units] Units to get the point resolution in.
 * Default is the projection's units.
 * @return {number} Point resolution.
 * @api
 */ parcelHelpers.export(exports, "getPointResolution", ()=>getPointResolution);
/**
 * Registers transformation functions that don't alter coordinates. Those allow
 * to transform between projections with equal meaning.
 *
 * @param {Array<Projection>} projections Projections.
 * @api
 */ parcelHelpers.export(exports, "addEquivalentProjections", ()=>addEquivalentProjections);
/**
 * Registers transformation functions to convert coordinates in any projection
 * in projection1 to any projection in projection2.
 *
 * @param {Array<Projection>} projections1 Projections with equal
 *     meaning.
 * @param {Array<Projection>} projections2 Projections with equal
 *     meaning.
 * @param {TransformFunction} forwardTransform Transformation from any
 *   projection in projection1 to any projection in projection2.
 * @param {TransformFunction} inverseTransform Transform from any projection
 *   in projection2 to any projection in projection1..
 */ parcelHelpers.export(exports, "addEquivalentTransforms", ()=>addEquivalentTransforms);
/**
 * Clear all cached projections and transforms.
 */ parcelHelpers.export(exports, "clearAllProjections", ()=>clearAllProjections);
/**
 * @param {Projection|string|undefined} projection Projection.
 * @param {string} defaultCode Default code.
 * @return {Projection} Projection.
 */ parcelHelpers.export(exports, "createProjection", ()=>createProjection);
/**
 * Creates a {@link module:ol/proj~TransformFunction} from a simple 2D coordinate transform
 * function.
 * @param {function(import("./coordinate.js").Coordinate): import("./coordinate.js").Coordinate} coordTransform Coordinate
 *     transform.
 * @return {TransformFunction} Transform function.
 */ parcelHelpers.export(exports, "createTransformFromCoordinateTransform", ()=>createTransformFromCoordinateTransform);
/**
 * Registers coordinate transform functions to convert coordinates between the
 * source projection and the destination projection.
 * The forward and inverse functions convert coordinate pairs; this function
 * converts these into the functions used internally which also handle
 * extents and coordinate arrays.
 *
 * @param {ProjectionLike} source Source projection.
 * @param {ProjectionLike} destination Destination projection.
 * @param {function(import("./coordinate.js").Coordinate): import("./coordinate.js").Coordinate} forward The forward transform
 *     function (that is, from the source projection to the destination
 *     projection) that takes a {@link module:ol/coordinate~Coordinate} as argument and returns
 *     the transformed {@link module:ol/coordinate~Coordinate}.
 * @param {function(import("./coordinate.js").Coordinate): import("./coordinate.js").Coordinate} inverse The inverse transform
 *     function (that is, from the destination projection to the source
 *     projection) that takes a {@link module:ol/coordinate~Coordinate} as argument and returns
 *     the transformed {@link module:ol/coordinate~Coordinate}. If the transform function can only
 *     transform less dimensions than the input coordinate, it is supposeed to return a coordinate
 *     with only the length it can transform. The other dimensions will be taken unchanged from the
 *     source.
 * @api
 */ parcelHelpers.export(exports, "addCoordinateTransforms", ()=>addCoordinateTransforms);
/**
 * Transforms a coordinate from longitude/latitude to a different projection.
 * @param {import("./coordinate.js").Coordinate} coordinate Coordinate as longitude and latitude, i.e.
 *     an array with longitude as 1st and latitude as 2nd element.
 * @param {ProjectionLike} [projection] Target projection. The
 *     default is Web Mercator, i.e. 'EPSG:3857'.
 * @return {import("./coordinate.js").Coordinate} Coordinate projected to the target projection.
 * @api
 */ parcelHelpers.export(exports, "fromLonLat", ()=>fromLonLat);
/**
 * Transforms a coordinate to longitude/latitude.
 * @param {import("./coordinate.js").Coordinate} coordinate Projected coordinate.
 * @param {ProjectionLike} [projection] Projection of the coordinate.
 *     The default is Web Mercator, i.e. 'EPSG:3857'.
 * @return {import("./coordinate.js").Coordinate} Coordinate as longitude and latitude, i.e. an array
 *     with longitude as 1st and latitude as 2nd element.
 * @api
 */ parcelHelpers.export(exports, "toLonLat", ()=>toLonLat);
/**
 * Checks if two projections are the same, that is every coordinate in one
 * projection does represent the same geographic point as the same coordinate in
 * the other projection.
 *
 * @param {Projection} projection1 Projection 1.
 * @param {Projection} projection2 Projection 2.
 * @return {boolean} Equivalent.
 * @api
 */ parcelHelpers.export(exports, "equivalent", ()=>equivalent);
/**
 * Searches in the list of transform functions for the function for converting
 * coordinates from the source projection to the destination projection.
 *
 * @param {Projection} sourceProjection Source Projection object.
 * @param {Projection} destinationProjection Destination Projection
 *     object.
 * @return {TransformFunction} Transform function.
 */ parcelHelpers.export(exports, "getTransformFromProjections", ()=>getTransformFromProjections);
/**
 * Given the projection-like objects, searches for a transformation
 * function to convert a coordinates array from the source projection to the
 * destination projection.
 *
 * @param {ProjectionLike} source Source.
 * @param {ProjectionLike} destination Destination.
 * @return {TransformFunction} Transform function.
 * @api
 */ parcelHelpers.export(exports, "getTransform", ()=>getTransform);
/**
 * Transforms a coordinate from source projection to destination projection.
 * This returns a new coordinate (and does not modify the original).
 *
 * See {@link module:ol/proj.transformExtent} for extent transformation.
 * See the transform method of {@link module:ol/geom/Geometry~Geometry} and its
 * subclasses for geometry transforms.
 *
 * @param {import("./coordinate.js").Coordinate} coordinate Coordinate.
 * @param {ProjectionLike} source Source projection-like.
 * @param {ProjectionLike} destination Destination projection-like.
 * @return {import("./coordinate.js").Coordinate} Coordinate.
 * @api
 */ parcelHelpers.export(exports, "transform", ()=>transform);
/**
 * Transforms an extent from source projection to destination projection.  This
 * returns a new extent (and does not modify the original).
 *
 * @param {import("./extent.js").Extent} extent The extent to transform.
 * @param {ProjectionLike} source Source projection-like.
 * @param {ProjectionLike} destination Destination projection-like.
 * @param {number} [stops] Number of stops per side used for the transform.
 * By default only the corners are used.
 * @return {import("./extent.js").Extent} The transformed extent.
 * @api
 */ parcelHelpers.export(exports, "transformExtent", ()=>transformExtent);
/**
 * Transforms the given point to the destination projection.
 *
 * @param {import("./coordinate.js").Coordinate} point Point.
 * @param {Projection} sourceProjection Source projection.
 * @param {Projection} destinationProjection Destination projection.
 * @return {import("./coordinate.js").Coordinate} Point.
 */ parcelHelpers.export(exports, "transformWithProjections", ()=>transformWithProjections);
/**
 * Set the projection for coordinates supplied from and returned by API methods.
 * This includes all API methods except for those interacting with tile grids.
 * @param {ProjectionLike} projection The user projection.
 * @api
 */ parcelHelpers.export(exports, "setUserProjection", ()=>setUserProjection);
/**
 * Clear the user projection if set.
 * @api
 */ parcelHelpers.export(exports, "clearUserProjection", ()=>clearUserProjection);
/**
 * Get the projection for coordinates supplied from and returned by API methods.
 * Note that this method is not yet a part of the stable API.  Support for user
 * projections is not yet complete and should be considered experimental.
 * @return {Projection|null} The user projection (or null if not set).
 * @api
 */ parcelHelpers.export(exports, "getUserProjection", ()=>getUserProjection);
/**
 * Use geographic coordinates (WGS-84 datum) in API methods.  This includes all API
 * methods except for those interacting with tile grids.
 * @api
 */ parcelHelpers.export(exports, "useGeographic", ()=>useGeographic);
/**
 * Return a coordinate transformed into the user projection.  If no user projection
 * is set, the original coordinate is returned.
 * @param {Array<number>} coordinate Input coordinate.
 * @param {ProjectionLike} sourceProjection The input coordinate projection.
 * @return {Array<number>} The input coordinate in the user projection.
 */ parcelHelpers.export(exports, "toUserCoordinate", ()=>toUserCoordinate);
/**
 * Return a coordinate transformed from the user projection.  If no user projection
 * is set, the original coordinate is returned.
 * @param {Array<number>} coordinate Input coordinate.
 * @param {ProjectionLike} destProjection The destination projection.
 * @return {Array<number>} The input coordinate transformed.
 */ parcelHelpers.export(exports, "fromUserCoordinate", ()=>fromUserCoordinate);
/**
 * Return an extent transformed into the user projection.  If no user projection
 * is set, the original extent is returned.
 * @param {import("./extent.js").Extent} extent Input extent.
 * @param {ProjectionLike} sourceProjection The input extent projection.
 * @return {import("./extent.js").Extent} The input extent in the user projection.
 */ parcelHelpers.export(exports, "toUserExtent", ()=>toUserExtent);
/**
 * Return an extent transformed from the user projection.  If no user projection
 * is set, the original extent is returned.
 * @param {import("./extent.js").Extent} extent Input extent.
 * @param {ProjectionLike} destProjection The destination projection.
 * @return {import("./extent.js").Extent} The input extent transformed.
 */ parcelHelpers.export(exports, "fromUserExtent", ()=>fromUserExtent);
/**
 * Return the resolution in user projection units per pixel. If no user projection
 * is set, or source or user projection are missing units, the original resolution
 * is returned.
 * @param {number} resolution Resolution in input projection units per pixel.
 * @param {ProjectionLike} sourceProjection The input projection.
 * @return {number} Resolution in user projection units per pixel.
 */ parcelHelpers.export(exports, "toUserResolution", ()=>toUserResolution);
/**
 * Return the resolution in user projection units per pixel. If no user projection
 * is set, or source or user projection are missing units, the original resolution
 * is returned.
 * @param {number} resolution Resolution in user projection units per pixel.
 * @param {ProjectionLike} destProjection The destination projection.
 * @return {number} Resolution in destination projection units per pixel.
 */ parcelHelpers.export(exports, "fromUserResolution", ()=>fromUserResolution);
/**
 * Creates a safe coordinate transform function from a coordinate transform function.
 * "Safe" means that it can handle wrapping of x-coordinates for global projections,
 * and that coordinates exceeding the source projection validity extent's range will be
 * clamped to the validity range.
 * @param {Projection} sourceProj Source projection.
 * @param {Projection} destProj Destination projection.
 * @param {function(import("./coordinate.js").Coordinate): import("./coordinate.js").Coordinate} transform Transform function (source to destiation).
 * @return {function(import("./coordinate.js").Coordinate): import("./coordinate.js").Coordinate} Safe transform function (source to destiation).
 */ parcelHelpers.export(exports, "createSafeCoordinateTransform", ()=>createSafeCoordinateTransform);
/**
 * Add transforms to and from EPSG:4326 and EPSG:3857.  This function is called
 * by when this module is executed and should only need to be called again after
 * `clearAllProjections()` is called (e.g. in tests).
 */ parcelHelpers.export(exports, "addCommon", ()=>addCommon);
var _projectionJs = require("./proj/Projection.js");
var _projectionJsDefault = parcelHelpers.interopDefault(_projectionJs);
var _epsg3857Js = require("./proj/epsg3857.js");
var _epsg4326Js = require("./proj/epsg4326.js");
var _unitsJs = require("./proj/Units.js");
var _projectionsJs = require("./proj/projections.js");
var _transformsJs = require("./proj/transforms.js");
var _extentJs = require("./extent.js");
var _mathJs = require("./math.js");
var _coordinateJs = require("./coordinate.js");
var _sphereJs = require("./sphere.js");
var _consoleJs = require("./console.js");
let showCoordinateWarning = true;
function disableCoordinateWarning(disable) {
    const hide = disable === undefined ? true : disable;
    showCoordinateWarning = !hide;
}
function cloneTransform(input, output) {
    if (output !== undefined) {
        for(let i = 0, ii = input.length; i < ii; ++i)output[i] = input[i];
        output;
    } else output = input.slice();
    return output;
}
function identityTransform(input, output) {
    if (output !== undefined && input !== output) {
        for(let i = 0, ii = input.length; i < ii; ++i)output[i] = input[i];
        input = output;
    }
    return input;
}
function addProjection(projection) {
    (0, _projectionsJs.add)(projection.getCode(), projection);
    (0, _transformsJs.add)(projection, projection, cloneTransform);
}
function addProjections(projections) {
    projections.forEach(addProjection);
}
function get(projectionLike) {
    return typeof projectionLike === "string" ? (0, _projectionsJs.get)(/** @type {string} */ projectionLike) : /** @type {Projection} */ projectionLike || null;
}
function getPointResolution(projection, resolution, point, units) {
    projection = get(projection);
    let pointResolution;
    const getter = projection.getPointResolutionFunc();
    if (getter) {
        pointResolution = getter(resolution, point);
        if (units && units !== projection.getUnits()) {
            const metersPerUnit = projection.getMetersPerUnit();
            if (metersPerUnit) pointResolution = pointResolution * metersPerUnit / (0, _unitsJs.METERS_PER_UNIT)[units];
        }
    } else {
        const projUnits = projection.getUnits();
        if (projUnits == "degrees" && !units || units == "degrees") pointResolution = resolution;
        else {
            // Estimate point resolution by transforming the center pixel to EPSG:4326,
            // measuring its width and height on the normal sphere, and taking the
            // average of the width and height.
            const toEPSG4326 = getTransformFromProjections(projection, get("EPSG:4326"));
            if (toEPSG4326 === identityTransform && projUnits !== "degrees") // no transform is available
            pointResolution = resolution * projection.getMetersPerUnit();
            else {
                let vertices = [
                    point[0] - resolution / 2,
                    point[1],
                    point[0] + resolution / 2,
                    point[1],
                    point[0],
                    point[1] - resolution / 2,
                    point[0],
                    point[1] + resolution / 2
                ];
                vertices = toEPSG4326(vertices, vertices, 2);
                const width = (0, _sphereJs.getDistance)(vertices.slice(0, 2), vertices.slice(2, 4));
                const height = (0, _sphereJs.getDistance)(vertices.slice(4, 6), vertices.slice(6, 8));
                pointResolution = (width + height) / 2;
            }
            const metersPerUnit = units ? (0, _unitsJs.METERS_PER_UNIT)[units] : projection.getMetersPerUnit();
            if (metersPerUnit !== undefined) pointResolution /= metersPerUnit;
        }
    }
    return pointResolution;
}
function addEquivalentProjections(projections) {
    addProjections(projections);
    projections.forEach(function(source) {
        projections.forEach(function(destination) {
            if (source !== destination) (0, _transformsJs.add)(source, destination, cloneTransform);
        });
    });
}
function addEquivalentTransforms(projections1, projections2, forwardTransform, inverseTransform) {
    projections1.forEach(function(projection1) {
        projections2.forEach(function(projection2) {
            (0, _transformsJs.add)(projection1, projection2, forwardTransform);
            (0, _transformsJs.add)(projection2, projection1, inverseTransform);
        });
    });
}
function clearAllProjections() {
    (0, _projectionsJs.clear)();
    (0, _transformsJs.clear)();
}
function createProjection(projection, defaultCode) {
    if (!projection) return get(defaultCode);
    else if (typeof projection === "string") return get(projection);
    return /** @type {Projection} */ projection;
}
function createTransformFromCoordinateTransform(coordTransform) {
    return(/**
     * @param {Array<number>} input Input.
     * @param {Array<number>} [output] Output.
     * @param {number} [dimension] Dimension.
     * @return {Array<number>} Output.
     */ function(input, output, dimension) {
        const length = input.length;
        dimension = dimension !== undefined ? dimension : 2;
        output = output !== undefined ? output : new Array(length);
        for(let i = 0; i < length; i += dimension){
            const point = coordTransform(input.slice(i, i + dimension));
            const pointLength = point.length;
            for(let j = 0, jj = dimension; j < jj; ++j)output[i + j] = j >= pointLength ? input[i + j] : point[j];
        }
        return output;
    });
}
function addCoordinateTransforms(source, destination, forward, inverse) {
    const sourceProj = get(source);
    const destProj = get(destination);
    (0, _transformsJs.add)(sourceProj, destProj, createTransformFromCoordinateTransform(forward));
    (0, _transformsJs.add)(destProj, sourceProj, createTransformFromCoordinateTransform(inverse));
}
function fromLonLat(coordinate, projection) {
    disableCoordinateWarning();
    return transform(coordinate, "EPSG:4326", projection !== undefined ? projection : "EPSG:3857");
}
function toLonLat(coordinate, projection) {
    const lonLat = transform(coordinate, projection !== undefined ? projection : "EPSG:3857", "EPSG:4326");
    const lon = lonLat[0];
    if (lon < -180 || lon > 180) lonLat[0] = (0, _mathJs.modulo)(lon + 180, 360) - 180;
    return lonLat;
}
function equivalent(projection1, projection2) {
    if (projection1 === projection2) return true;
    const equalUnits = projection1.getUnits() === projection2.getUnits();
    if (projection1.getCode() === projection2.getCode()) return equalUnits;
    const transformFunc = getTransformFromProjections(projection1, projection2);
    return transformFunc === cloneTransform && equalUnits;
}
function getTransformFromProjections(sourceProjection, destinationProjection) {
    const sourceCode = sourceProjection.getCode();
    const destinationCode = destinationProjection.getCode();
    let transformFunc = (0, _transformsJs.get)(sourceCode, destinationCode);
    if (!transformFunc) transformFunc = identityTransform;
    return transformFunc;
}
function getTransform(source, destination) {
    const sourceProjection = get(source);
    const destinationProjection = get(destination);
    return getTransformFromProjections(sourceProjection, destinationProjection);
}
function transform(coordinate, source, destination) {
    const transformFunc = getTransform(source, destination);
    return transformFunc(coordinate, undefined, coordinate.length);
}
function transformExtent(extent, source, destination, stops) {
    const transformFunc = getTransform(source, destination);
    return (0, _extentJs.applyTransform)(extent, transformFunc, undefined, stops);
}
function transformWithProjections(point, sourceProjection, destinationProjection) {
    const transformFunc = getTransformFromProjections(sourceProjection, destinationProjection);
    return transformFunc(point);
}
/**
 * @type {Projection|null}
 */ let userProjection = null;
function setUserProjection(projection) {
    userProjection = get(projection);
}
function clearUserProjection() {
    userProjection = null;
}
function getUserProjection() {
    return userProjection;
}
function useGeographic() {
    setUserProjection("EPSG:4326");
}
function toUserCoordinate(coordinate, sourceProjection) {
    if (!userProjection) return coordinate;
    return transform(coordinate, sourceProjection, userProjection);
}
function fromUserCoordinate(coordinate, destProjection) {
    if (!userProjection) {
        if (showCoordinateWarning && !(0, _coordinateJs.equals)(coordinate, [
            0,
            0
        ]) && coordinate[0] >= -180 && coordinate[0] <= 180 && coordinate[1] >= -90 && coordinate[1] <= 90) {
            showCoordinateWarning = false;
            (0, _consoleJs.warn)("Call useGeographic() from ol/proj once to work with [longitude, latitude] coordinates.");
        }
        return coordinate;
    }
    return transform(coordinate, userProjection, destProjection);
}
function toUserExtent(extent, sourceProjection) {
    if (!userProjection) return extent;
    return transformExtent(extent, sourceProjection, userProjection);
}
function fromUserExtent(extent, destProjection) {
    if (!userProjection) return extent;
    return transformExtent(extent, userProjection, destProjection);
}
function toUserResolution(resolution, sourceProjection) {
    if (!userProjection) return resolution;
    const sourceUnits = get(sourceProjection).getUnits();
    const userUnits = userProjection.getUnits();
    return sourceUnits && userUnits ? resolution * (0, _unitsJs.METERS_PER_UNIT)[sourceUnits] / (0, _unitsJs.METERS_PER_UNIT)[userUnits] : resolution;
}
function fromUserResolution(resolution, destProjection) {
    if (!userProjection) return resolution;
    const sourceUnits = get(destProjection).getUnits();
    const userUnits = userProjection.getUnits();
    return sourceUnits && userUnits ? resolution * (0, _unitsJs.METERS_PER_UNIT)[userUnits] / (0, _unitsJs.METERS_PER_UNIT)[sourceUnits] : resolution;
}
function createSafeCoordinateTransform(sourceProj, destProj, transform) {
    return function(coord) {
        let transformed, worldsAway;
        if (sourceProj.canWrapX()) {
            const sourceExtent = sourceProj.getExtent();
            const sourceExtentWidth = (0, _extentJs.getWidth)(sourceExtent);
            coord = coord.slice(0);
            worldsAway = (0, _coordinateJs.getWorldsAway)(coord, sourceProj, sourceExtentWidth);
            if (worldsAway) // Move x to the real world
            coord[0] = coord[0] - worldsAway * sourceExtentWidth;
            coord[0] = (0, _mathJs.clamp)(coord[0], sourceExtent[0], sourceExtent[2]);
            coord[1] = (0, _mathJs.clamp)(coord[1], sourceExtent[1], sourceExtent[3]);
            transformed = transform(coord);
        } else transformed = transform(coord);
        if (worldsAway && destProj.canWrapX()) // Move transformed coordinate back to the offset world
        transformed[0] += worldsAway * (0, _extentJs.getWidth)(destProj.getExtent());
        return transformed;
    };
}
function addCommon() {
    // Add transformations that don't alter coordinates to convert within set of
    // projections with equal meaning.
    addEquivalentProjections((0, _epsg3857Js.PROJECTIONS));
    addEquivalentProjections((0, _epsg4326Js.PROJECTIONS));
    // Add transformations to convert EPSG:4326 like coordinates to EPSG:3857 like
    // coordinates and back.
    addEquivalentTransforms((0, _epsg4326Js.PROJECTIONS), (0, _epsg3857Js.PROJECTIONS), (0, _epsg3857Js.fromEPSG4326), (0, _epsg3857Js.toEPSG4326));
}
addCommon();

},{"./proj/Projection.js":"7HvLt","./proj/epsg3857.js":"3MTbx","./proj/epsg4326.js":"6Thur","./proj/Units.js":"gOgy6","./proj/projections.js":"9svUu","./proj/transforms.js":"gPHoN","./extent.js":"6YrVc","./math.js":"5jEFr","./coordinate.js":"85Vu7","./sphere.js":"eJjHw","./console.js":"25bqN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7HvLt":[function(require,module,exports) {
/**
 * @module ol/proj/Projection
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _unitsJs = require("./Units.js");
/**
 * @typedef {Object} Options
 * @property {string} code The SRS identifier code, e.g. `EPSG:4326`.
 * @property {import("./Units.js").Units} [units] Units. Required unless a
 * proj4 projection is defined for `code`.
 * @property {import("../extent.js").Extent} [extent] The validity extent for the SRS.
 * @property {string} [axisOrientation='enu'] The axis orientation as specified in Proj4.
 * @property {boolean} [global=false] Whether the projection is valid for the whole globe.
 * @property {number} [metersPerUnit] The meters per unit for the SRS.
 * If not provided, the `units` are used to get the meters per unit from the {@link METERS_PER_UNIT}
 * lookup table.
 * @property {import("../extent.js").Extent} [worldExtent] The world extent for the SRS.
 * @property {function(number, import("../coordinate.js").Coordinate):number} [getPointResolution]
 * Function to determine resolution at a point. The function is called with a
 * `number` view resolution and a {@link module:ol/coordinate~Coordinate} as arguments, and returns
 * the `number` resolution in projection units at the passed coordinate. If this is `undefined`,
 * the default {@link module:ol/proj.getPointResolution} function will be used.
 */ /**
 * @classdesc
 * Projection definition class. One of these is created for each projection
 * supported in the application and stored in the {@link module:ol/proj} namespace.
 * You can use these in applications, but this is not required, as API params
 * and options use {@link module:ol/proj~ProjectionLike} which means the simple string
 * code will suffice.
 *
 * You can use {@link module:ol/proj.get} to retrieve the object for a particular
 * projection.
 *
 * The library includes definitions for `EPSG:4326` and `EPSG:3857`, together
 * with the following aliases:
 * * `EPSG:4326`: CRS:84, urn:ogc:def:crs:EPSG:6.6:4326,
 *     urn:ogc:def:crs:OGC:1.3:CRS84, urn:ogc:def:crs:OGC:2:84,
 *     http://www.opengis.net/gml/srs/epsg.xml#4326,
 *     urn:x-ogc:def:crs:EPSG:4326
 * * `EPSG:3857`: EPSG:102100, EPSG:102113, EPSG:900913,
 *     urn:ogc:def:crs:EPSG:6.18:3:3857,
 *     http://www.opengis.net/gml/srs/epsg.xml#3857
 *
 * If you use [proj4js](https://github.com/proj4js/proj4js), aliases can
 * be added using `proj4.defs()`. After all required projection definitions are
 * added, call the {@link module:ol/proj/proj4.register} function.
 *
 * @api
 */ class Projection {
    /**
   * @param {Options} options Projection options.
   */ constructor(options){
        /**
     * @private
     * @type {string}
     */ this.code_ = options.code;
        /**
     * Units of projected coordinates. When set to `TILE_PIXELS`, a
     * `this.extent_` and `this.worldExtent_` must be configured properly for each
     * tile.
     * @private
     * @type {import("./Units.js").Units}
     */ this.units_ = /** @type {import("./Units.js").Units} */ options.units;
        /**
     * Validity extent of the projection in projected coordinates. For projections
     * with `TILE_PIXELS` units, this is the extent of the tile in
     * tile pixel space.
     * @private
     * @type {import("../extent.js").Extent}
     */ this.extent_ = options.extent !== undefined ? options.extent : null;
        /**
     * Extent of the world in EPSG:4326. For projections with
     * `TILE_PIXELS` units, this is the extent of the tile in
     * projected coordinate space.
     * @private
     * @type {import("../extent.js").Extent}
     */ this.worldExtent_ = options.worldExtent !== undefined ? options.worldExtent : null;
        /**
     * @private
     * @type {string}
     */ this.axisOrientation_ = options.axisOrientation !== undefined ? options.axisOrientation : "enu";
        /**
     * @private
     * @type {boolean}
     */ this.global_ = options.global !== undefined ? options.global : false;
        /**
     * @private
     * @type {boolean}
     */ this.canWrapX_ = !!(this.global_ && this.extent_);
        /**
     * @private
     * @type {function(number, import("../coordinate.js").Coordinate):number|undefined}
     */ this.getPointResolutionFunc_ = options.getPointResolution;
        /**
     * @private
     * @type {import("../tilegrid/TileGrid.js").default}
     */ this.defaultTileGrid_ = null;
        /**
     * @private
     * @type {number|undefined}
     */ this.metersPerUnit_ = options.metersPerUnit;
    }
    /**
   * @return {boolean} The projection is suitable for wrapping the x-axis
   */ canWrapX() {
        return this.canWrapX_;
    }
    /**
   * Get the code for this projection, e.g. 'EPSG:4326'.
   * @return {string} Code.
   * @api
   */ getCode() {
        return this.code_;
    }
    /**
   * Get the validity extent for this projection.
   * @return {import("../extent.js").Extent} Extent.
   * @api
   */ getExtent() {
        return this.extent_;
    }
    /**
   * Get the units of this projection.
   * @return {import("./Units.js").Units} Units.
   * @api
   */ getUnits() {
        return this.units_;
    }
    /**
   * Get the amount of meters per unit of this projection.  If the projection is
   * not configured with `metersPerUnit` or a units identifier, the return is
   * `undefined`.
   * @return {number|undefined} Meters.
   * @api
   */ getMetersPerUnit() {
        return this.metersPerUnit_ || (0, _unitsJs.METERS_PER_UNIT)[this.units_];
    }
    /**
   * Get the world extent for this projection.
   * @return {import("../extent.js").Extent} Extent.
   * @api
   */ getWorldExtent() {
        return this.worldExtent_;
    }
    /**
   * Get the axis orientation of this projection.
   * Example values are:
   * enu - the default easting, northing, elevation.
   * neu - northing, easting, up - useful for "lat/long" geographic coordinates,
   *     or south orientated transverse mercator.
   * wnu - westing, northing, up - some planetary coordinate systems have
   *     "west positive" coordinate systems
   * @return {string} Axis orientation.
   * @api
   */ getAxisOrientation() {
        return this.axisOrientation_;
    }
    /**
   * Is this projection a global projection which spans the whole world?
   * @return {boolean} Whether the projection is global.
   * @api
   */ isGlobal() {
        return this.global_;
    }
    /**
   * Set if the projection is a global projection which spans the whole world
   * @param {boolean} global Whether the projection is global.
   * @api
   */ setGlobal(global) {
        this.global_ = global;
        this.canWrapX_ = !!(global && this.extent_);
    }
    /**
   * @return {import("../tilegrid/TileGrid.js").default} The default tile grid.
   */ getDefaultTileGrid() {
        return this.defaultTileGrid_;
    }
    /**
   * @param {import("../tilegrid/TileGrid.js").default} tileGrid The default tile grid.
   */ setDefaultTileGrid(tileGrid) {
        this.defaultTileGrid_ = tileGrid;
    }
    /**
   * Set the validity extent for this projection.
   * @param {import("../extent.js").Extent} extent Extent.
   * @api
   */ setExtent(extent) {
        this.extent_ = extent;
        this.canWrapX_ = !!(this.global_ && extent);
    }
    /**
   * Set the world extent for this projection.
   * @param {import("../extent.js").Extent} worldExtent World extent
   *     [minlon, minlat, maxlon, maxlat].
   * @api
   */ setWorldExtent(worldExtent) {
        this.worldExtent_ = worldExtent;
    }
    /**
   * Set the getPointResolution function (see {@link module:ol/proj.getPointResolution}
   * for this projection.
   * @param {function(number, import("../coordinate.js").Coordinate):number} func Function
   * @api
   */ setGetPointResolution(func) {
        this.getPointResolutionFunc_ = func;
    }
    /**
   * Get the custom point resolution function for this projection (if set).
   * @return {function(number, import("../coordinate.js").Coordinate):number|undefined} The custom point
   * resolution function (if set).
   */ getPointResolutionFunc() {
        return this.getPointResolutionFunc_;
    }
}
exports.default = Projection;

},{"./Units.js":"gOgy6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gOgy6":[function(require,module,exports) {
/**
 * @module ol/proj/Units
 */ /**
 * @typedef {'radians' | 'degrees' | 'ft' | 'm' | 'pixels' | 'tile-pixels' | 'us-ft'} Units
 * Projection units.
 */ /**
 * See http://duff.ess.washington.edu/data/raster/drg/docs/geotiff.txt
 * @type {Object<number, Units>}
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @param {number} code Unit code.
 * @return {Units} Units.
 */ parcelHelpers.export(exports, "fromCode", ()=>fromCode);
parcelHelpers.export(exports, "METERS_PER_UNIT", ()=>METERS_PER_UNIT);
const unitByCode = {
    "9001": "m",
    "9002": "ft",
    "9003": "us-ft",
    "9101": "radians",
    "9102": "degrees"
};
function fromCode(code) {
    return unitByCode[code];
}
const METERS_PER_UNIT = {
    // use the radius of the Normal sphere
    "radians": 6370997 / (2 * Math.PI),
    "degrees": 2 * Math.PI * 6370997 / 360,
    "ft": 0.3048,
    "m": 1,
    "us-ft": 1200 / 3937
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3MTbx":[function(require,module,exports) {
/**
 * @module ol/proj/epsg3857
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RADIUS", ()=>RADIUS);
parcelHelpers.export(exports, "HALF_SIZE", ()=>HALF_SIZE);
parcelHelpers.export(exports, "EXTENT", ()=>EXTENT);
parcelHelpers.export(exports, "WORLD_EXTENT", ()=>WORLD_EXTENT);
parcelHelpers.export(exports, "MAX_SAFE_Y", ()=>MAX_SAFE_Y);
parcelHelpers.export(exports, "PROJECTIONS", ()=>PROJECTIONS);
/**
 * Transformation from EPSG:4326 to EPSG:3857.
 *
 * @param {Array<number>} input Input array of coordinate values.
 * @param {Array<number>} [output] Output array of coordinate values.
 * @param {number} [dimension] Dimension (default is `2`).
 * @return {Array<number>} Output array of coordinate values.
 */ parcelHelpers.export(exports, "fromEPSG4326", ()=>fromEPSG4326);
/**
 * Transformation from EPSG:3857 to EPSG:4326.
 *
 * @param {Array<number>} input Input array of coordinate values.
 * @param {Array<number>} [output] Output array of coordinate values.
 * @param {number} [dimension] Dimension (default is `2`).
 * @return {Array<number>} Output array of coordinate values.
 */ parcelHelpers.export(exports, "toEPSG4326", ()=>toEPSG4326);
var _projectionJs = require("./Projection.js");
var _projectionJsDefault = parcelHelpers.interopDefault(_projectionJs);
const RADIUS = 6378137;
const HALF_SIZE = Math.PI * RADIUS;
const EXTENT = [
    -HALF_SIZE,
    -HALF_SIZE,
    HALF_SIZE,
    HALF_SIZE
];
const WORLD_EXTENT = [
    -180,
    -85,
    180,
    85
];
const MAX_SAFE_Y = RADIUS * Math.log(Math.tan(Math.PI / 2));
/**
 * @classdesc
 * Projection object for web/spherical Mercator (EPSG:3857).
 */ class EPSG3857Projection extends (0, _projectionJsDefault.default) {
    /**
   * @param {string} code Code.
   */ constructor(code){
        super({
            code: code,
            units: "m",
            extent: EXTENT,
            global: true,
            worldExtent: WORLD_EXTENT,
            getPointResolution: function(resolution, point) {
                return resolution / Math.cosh(point[1] / RADIUS);
            }
        });
    }
}
const PROJECTIONS = [
    new EPSG3857Projection("EPSG:3857"),
    new EPSG3857Projection("EPSG:102100"),
    new EPSG3857Projection("EPSG:102113"),
    new EPSG3857Projection("EPSG:900913"),
    new EPSG3857Projection("http://www.opengis.net/def/crs/EPSG/0/3857"),
    new EPSG3857Projection("http://www.opengis.net/gml/srs/epsg.xml#3857")
];
function fromEPSG4326(input, output, dimension) {
    const length = input.length;
    dimension = dimension > 1 ? dimension : 2;
    if (output === undefined) {
        if (dimension > 2) // preserve values beyond second dimension
        output = input.slice();
        else output = new Array(length);
    }
    for(let i = 0; i < length; i += dimension){
        output[i] = HALF_SIZE * input[i] / 180;
        let y = RADIUS * Math.log(Math.tan(Math.PI * (+input[i + 1] + 90) / 360));
        if (y > MAX_SAFE_Y) y = MAX_SAFE_Y;
        else if (y < -MAX_SAFE_Y) y = -MAX_SAFE_Y;
        output[i + 1] = y;
    }
    return output;
}
function toEPSG4326(input, output, dimension) {
    const length = input.length;
    dimension = dimension > 1 ? dimension : 2;
    if (output === undefined) {
        if (dimension > 2) // preserve values beyond second dimension
        output = input.slice();
        else output = new Array(length);
    }
    for(let i = 0; i < length; i += dimension){
        output[i] = 180 * input[i] / HALF_SIZE;
        output[i + 1] = 360 * Math.atan(Math.exp(input[i + 1] / RADIUS)) / Math.PI - 90;
    }
    return output;
}

},{"./Projection.js":"7HvLt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6Thur":[function(require,module,exports) {
/**
 * @module ol/proj/epsg4326
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RADIUS", ()=>RADIUS);
parcelHelpers.export(exports, "EXTENT", ()=>EXTENT);
parcelHelpers.export(exports, "METERS_PER_UNIT", ()=>METERS_PER_UNIT);
parcelHelpers.export(exports, "PROJECTIONS", ()=>PROJECTIONS);
var _projectionJs = require("./Projection.js");
var _projectionJsDefault = parcelHelpers.interopDefault(_projectionJs);
const RADIUS = 6378137;
const EXTENT = [
    -180,
    -90,
    180,
    90
];
const METERS_PER_UNIT = Math.PI * RADIUS / 180;
/**
 * @classdesc
 * Projection object for WGS84 geographic coordinates (EPSG:4326).
 *
 * Note that OpenLayers does not strictly comply with the EPSG definition.
 * The EPSG registry defines 4326 as a CRS for Latitude,Longitude (y,x).
 * OpenLayers treats EPSG:4326 as a pseudo-projection, with x,y coordinates.
 */ class EPSG4326Projection extends (0, _projectionJsDefault.default) {
    /**
   * @param {string} code Code.
   * @param {string} [axisOrientation] Axis orientation.
   */ constructor(code, axisOrientation){
        super({
            code: code,
            units: "degrees",
            extent: EXTENT,
            axisOrientation: axisOrientation,
            global: true,
            metersPerUnit: METERS_PER_UNIT,
            worldExtent: EXTENT
        });
    }
}
const PROJECTIONS = [
    new EPSG4326Projection("CRS:84"),
    new EPSG4326Projection("EPSG:4326", "neu"),
    new EPSG4326Projection("urn:ogc:def:crs:OGC:1.3:CRS84"),
    new EPSG4326Projection("urn:ogc:def:crs:OGC:2:84"),
    new EPSG4326Projection("http://www.opengis.net/def/crs/OGC/1.3/CRS84"),
    new EPSG4326Projection("http://www.opengis.net/gml/srs/epsg.xml#4326", "neu"),
    new EPSG4326Projection("http://www.opengis.net/def/crs/EPSG/0/4326", "neu")
];

},{"./Projection.js":"7HvLt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9svUu":[function(require,module,exports) {
/**
 * @module ol/proj/projections
 */ /**
 * @type {Object<string, import("./Projection.js").default>}
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Clear the projections cache.
 */ parcelHelpers.export(exports, "clear", ()=>clear);
/**
 * Get a cached projection by code.
 * @param {string} code The code for the projection.
 * @return {import("./Projection.js").default} The projection (if cached).
 */ parcelHelpers.export(exports, "get", ()=>get);
/**
 * Add a projection to the cache.
 * @param {string} code The projection code.
 * @param {import("./Projection.js").default} projection The projection to cache.
 */ parcelHelpers.export(exports, "add", ()=>add);
let cache = {};
function clear() {
    cache = {};
}
function get(code) {
    return cache[code] || cache[code.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/, "EPSG:$3")] || null;
}
function add(code, projection) {
    cache[code] = projection;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gPHoN":[function(require,module,exports) {
/**
 * @module ol/proj/transforms
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Clear the transform cache.
 */ parcelHelpers.export(exports, "clear", ()=>clear);
/**
 * Registers a conversion function to convert coordinates from the source
 * projection to the destination projection.
 *
 * @param {import("./Projection.js").default} source Source.
 * @param {import("./Projection.js").default} destination Destination.
 * @param {import("../proj.js").TransformFunction} transformFn Transform.
 */ parcelHelpers.export(exports, "add", ()=>add);
/**
 * Unregisters the conversion function to convert coordinates from the source
 * projection to the destination projection.  This method is used to clean up
 * cached transforms during testing.
 *
 * @param {import("./Projection.js").default} source Source projection.
 * @param {import("./Projection.js").default} destination Destination projection.
 * @return {import("../proj.js").TransformFunction} transformFn The unregistered transform.
 */ parcelHelpers.export(exports, "remove", ()=>remove);
/**
 * Get a transform given a source code and a destination code.
 * @param {string} sourceCode The code for the source projection.
 * @param {string} destinationCode The code for the destination projection.
 * @return {import("../proj.js").TransformFunction|undefined} The transform function (if found).
 */ parcelHelpers.export(exports, "get", ()=>get);
var _objJs = require("../obj.js");
/**
 * @private
 * @type {!Object<string, Object<string, import("../proj.js").TransformFunction>>}
 */ let transforms = {};
function clear() {
    transforms = {};
}
function add(source, destination, transformFn) {
    const sourceCode = source.getCode();
    const destinationCode = destination.getCode();
    if (!(sourceCode in transforms)) transforms[sourceCode] = {};
    transforms[sourceCode][destinationCode] = transformFn;
}
function remove(source, destination) {
    const sourceCode = source.getCode();
    const destinationCode = destination.getCode();
    const transform = transforms[sourceCode][destinationCode];
    delete transforms[sourceCode][destinationCode];
    if ((0, _objJs.isEmpty)(transforms[sourceCode])) delete transforms[sourceCode];
    return transform;
}
function get(sourceCode, destinationCode) {
    let transform;
    if (sourceCode in transforms && destinationCode in transforms[sourceCode]) transform = transforms[sourceCode][destinationCode];
    return transform;
}

},{"../obj.js":"3ssAG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"85Vu7":[function(require,module,exports) {
/**
 * @module ol/coordinate
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * An array of numbers representing an xy coordinate. Example: `[16, 48]`.
 * @typedef {Array<number>} Coordinate
 * @api
 */ /**
 * A function that takes a {@link module:ol/coordinate~Coordinate} and
 * transforms it into a `{string}`.
 *
 * @typedef {function((Coordinate|undefined)): string} CoordinateFormat
 * @api
 */ /**
 * Add `delta` to `coordinate`. `coordinate` is modified in place and returned
 * by the function.
 *
 * Example:
 *
 *     import {add} from 'ol/coordinate.js';
 *
 *     const coord = [7.85, 47.983333];
 *     add(coord, [-2, 4]);
 *     // coord is now [5.85, 51.983333]
 *
 * @param {Coordinate} coordinate Coordinate.
 * @param {Coordinate} delta Delta.
 * @return {Coordinate} The input coordinate adjusted by
 * the given delta.
 * @api
 */ parcelHelpers.export(exports, "add", ()=>add);
/**
 * Calculates the point closest to the passed coordinate on the passed circle.
 *
 * @param {Coordinate} coordinate The coordinate.
 * @param {import("./geom/Circle.js").default} circle The circle.
 * @return {Coordinate} Closest point on the circumference.
 */ parcelHelpers.export(exports, "closestOnCircle", ()=>closestOnCircle);
/**
 * Calculates the point closest to the passed coordinate on the passed segment.
 * This is the foot of the perpendicular of the coordinate to the segment when
 * the foot is on the segment, or the closest segment coordinate when the foot
 * is outside the segment.
 *
 * @param {Coordinate} coordinate The coordinate.
 * @param {Array<Coordinate>} segment The two coordinates
 * of the segment.
 * @return {Coordinate} The foot of the perpendicular of
 * the coordinate to the segment.
 */ parcelHelpers.export(exports, "closestOnSegment", ()=>closestOnSegment);
/**
 * Returns a {@link module:ol/coordinate~CoordinateFormat} function that can be
 * used to format
 * a {Coordinate} to a string.
 *
 * Example without specifying the fractional digits:
 *
 *     import {createStringXY} from 'ol/coordinate.js';
 *
 *     const coord = [7.85, 47.983333];
 *     const stringifyFunc = createStringXY();
 *     const out = stringifyFunc(coord);
 *     // out is now '8, 48'
 *
 * Example with explicitly specifying 2 fractional digits:
 *
 *     import {createStringXY} from 'ol/coordinate.js';
 *
 *     const coord = [7.85, 47.983333];
 *     const stringifyFunc = createStringXY(2);
 *     const out = stringifyFunc(coord);
 *     // out is now '7.85, 47.98'
 *
 * @param {number} [fractionDigits] The number of digits to include
 *    after the decimal point. Default is `0`.
 * @return {CoordinateFormat} Coordinate format.
 * @api
 */ parcelHelpers.export(exports, "createStringXY", ()=>createStringXY);
/**
 * @param {string} hemispheres Hemispheres.
 * @param {number} degrees Degrees.
 * @param {number} [fractionDigits] The number of digits to include
 *    after the decimal point. Default is `0`.
 * @return {string} String.
 */ parcelHelpers.export(exports, "degreesToStringHDMS", ()=>degreesToStringHDMS);
/**
 * Transforms the given {@link module:ol/coordinate~Coordinate} to a string
 * using the given string template. The strings `{x}` and `{y}` in the template
 * will be replaced with the first and second coordinate values respectively.
 *
 * Example without specifying the fractional digits:
 *
 *     import {format} from 'ol/coordinate.js';
 *
 *     const coord = [7.85, 47.983333];
 *     const template = 'Coordinate is ({x}|{y}).';
 *     const out = format(coord, template);
 *     // out is now 'Coordinate is (8|48).'
 *
 * Example explicitly specifying the fractional digits:
 *
 *     import {format} from 'ol/coordinate.js';
 *
 *     const coord = [7.85, 47.983333];
 *     const template = 'Coordinate is ({x}|{y}).';
 *     const out = format(coord, template, 2);
 *     // out is now 'Coordinate is (7.85|47.98).'
 *
 * @param {Coordinate} coordinate Coordinate.
 * @param {string} template A template string with `{x}` and `{y}` placeholders
 *     that will be replaced by first and second coordinate values.
 * @param {number} [fractionDigits] The number of digits to include
 *    after the decimal point. Default is `0`.
 * @return {string} Formatted coordinate.
 * @api
 */ parcelHelpers.export(exports, "format", ()=>format);
/**
 * @param {Coordinate} coordinate1 First coordinate.
 * @param {Coordinate} coordinate2 Second coordinate.
 * @return {boolean} The two coordinates are equal.
 */ parcelHelpers.export(exports, "equals", ()=>equals);
/**
 * Rotate `coordinate` by `angle`. `coordinate` is modified in place and
 * returned by the function.
 *
 * Example:
 *
 *     import {rotate} from 'ol/coordinate.js';
 *
 *     const coord = [7.85, 47.983333];
 *     const rotateRadians = Math.PI / 2; // 90 degrees
 *     rotate(coord, rotateRadians);
 *     // coord is now [-47.983333, 7.85]
 *
 * @param {Coordinate} coordinate Coordinate.
 * @param {number} angle Angle in radian.
 * @return {Coordinate} Coordinate.
 * @api
 */ parcelHelpers.export(exports, "rotate", ()=>rotate);
/**
 * Scale `coordinate` by `scale`. `coordinate` is modified in place and returned
 * by the function.
 *
 * Example:
 *
 *     import {scale as scaleCoordinate} from 'ol/coordinate.js';
 *
 *     const coord = [7.85, 47.983333];
 *     const scale = 1.2;
 *     scaleCoordinate(coord, scale);
 *     // coord is now [9.42, 57.5799996]
 *
 * @param {Coordinate} coordinate Coordinate.
 * @param {number} scale Scale factor.
 * @return {Coordinate} Coordinate.
 */ parcelHelpers.export(exports, "scale", ()=>scale);
/**
 * @param {Coordinate} coord1 First coordinate.
 * @param {Coordinate} coord2 Second coordinate.
 * @return {number} Squared distance between coord1 and coord2.
 */ parcelHelpers.export(exports, "squaredDistance", ()=>squaredDistance);
/**
 * @param {Coordinate} coord1 First coordinate.
 * @param {Coordinate} coord2 Second coordinate.
 * @return {number} Distance between coord1 and coord2.
 */ parcelHelpers.export(exports, "distance", ()=>distance);
/**
 * Calculate the squared distance from a coordinate to a line segment.
 *
 * @param {Coordinate} coordinate Coordinate of the point.
 * @param {Array<Coordinate>} segment Line segment (2
 * coordinates).
 * @return {number} Squared distance from the point to the line segment.
 */ parcelHelpers.export(exports, "squaredDistanceToSegment", ()=>squaredDistanceToSegment);
/**
 * Format a geographic coordinate with the hemisphere, degrees, minutes, and
 * seconds.
 *
 * Example without specifying fractional digits:
 *
 *     import {toStringHDMS} from 'ol/coordinate.js';
 *
 *     const coord = [7.85, 47.983333];
 *     const out = toStringHDMS(coord);
 *     // out is now '47° 58′ 60″ N 7° 50′ 60″ E'
 *
 * Example explicitly specifying 1 fractional digit:
 *
 *     import {toStringHDMS} from 'ol/coordinate.js';
 *
 *     const coord = [7.85, 47.983333];
 *     const out = toStringHDMS(coord, 1);
 *     // out is now '47° 58′ 60.0″ N 7° 50′ 60.0″ E'
 *
 * @param {Coordinate} coordinate Coordinate.
 * @param {number} [fractionDigits] The number of digits to include
 *    after the decimal point. Default is `0`.
 * @return {string} Hemisphere, degrees, minutes and seconds.
 * @api
 */ parcelHelpers.export(exports, "toStringHDMS", ()=>toStringHDMS);
/**
 * Format a coordinate as a comma delimited string.
 *
 * Example without specifying fractional digits:
 *
 *     import {toStringXY} from 'ol/coordinate.js';
 *
 *     const coord = [7.85, 47.983333];
 *     const out = toStringXY(coord);
 *     // out is now '8, 48'
 *
 * Example explicitly specifying 1 fractional digit:
 *
 *     import {toStringXY} from 'ol/coordinate.js';
 *
 *     const coord = [7.85, 47.983333];
 *     const out = toStringXY(coord, 1);
 *     // out is now '7.8, 48.0'
 *
 * @param {Coordinate} coordinate Coordinate.
 * @param {number} [fractionDigits] The number of digits to include
 *    after the decimal point. Default is `0`.
 * @return {string} XY.
 * @api
 */ parcelHelpers.export(exports, "toStringXY", ()=>toStringXY);
/**
 * Modifies the provided coordinate in-place to be within the real world
 * extent. The lower projection extent boundary is inclusive, the upper one
 * exclusive.
 *
 * @param {Coordinate} coordinate Coordinate.
 * @param {import("./proj/Projection.js").default} projection Projection.
 * @return {Coordinate} The coordinate within the real world extent.
 */ parcelHelpers.export(exports, "wrapX", ()=>wrapX);
/**
 * @param {Coordinate} coordinate Coordinate.
 * @param {import("./proj/Projection.js").default} projection Projection.
 * @param {number} [sourceExtentWidth] Width of the source extent.
 * @return {number} Offset in world widths.
 */ parcelHelpers.export(exports, "getWorldsAway", ()=>getWorldsAway);
var _extentJs = require("./extent.js");
var _mathJs = require("./math.js");
var _stringJs = require("./string.js");
function add(coordinate, delta) {
    coordinate[0] += +delta[0];
    coordinate[1] += +delta[1];
    return coordinate;
}
function closestOnCircle(coordinate, circle) {
    const r = circle.getRadius();
    const center = circle.getCenter();
    const x0 = center[0];
    const y0 = center[1];
    const x1 = coordinate[0];
    const y1 = coordinate[1];
    let dx = x1 - x0;
    const dy = y1 - y0;
    if (dx === 0 && dy === 0) dx = 1;
    const d = Math.sqrt(dx * dx + dy * dy);
    const x = x0 + r * dx / d;
    const y = y0 + r * dy / d;
    return [
        x,
        y
    ];
}
function closestOnSegment(coordinate, segment) {
    const x0 = coordinate[0];
    const y0 = coordinate[1];
    const start = segment[0];
    const end = segment[1];
    const x1 = start[0];
    const y1 = start[1];
    const x2 = end[0];
    const y2 = end[1];
    const dx = x2 - x1;
    const dy = y2 - y1;
    const along = dx === 0 && dy === 0 ? 0 : (dx * (x0 - x1) + dy * (y0 - y1)) / (dx * dx + dy * dy || 0);
    let x, y;
    if (along <= 0) {
        x = x1;
        y = y1;
    } else if (along >= 1) {
        x = x2;
        y = y2;
    } else {
        x = x1 + along * dx;
        y = y1 + along * dy;
    }
    return [
        x,
        y
    ];
}
function createStringXY(fractionDigits) {
    return(/**
     * @param {Coordinate} coordinate Coordinate.
     * @return {string} String XY.
     */ function(coordinate) {
        return toStringXY(coordinate, fractionDigits);
    });
}
function degreesToStringHDMS(hemispheres, degrees, fractionDigits) {
    const normalizedDegrees = (0, _mathJs.modulo)(degrees + 180, 360) - 180;
    const x = Math.abs(3600 * normalizedDegrees);
    const decimals = fractionDigits || 0;
    let deg = Math.floor(x / 3600);
    let min = Math.floor((x - deg * 3600) / 60);
    let sec = (0, _mathJs.toFixed)(x - deg * 3600 - min * 60, decimals);
    if (sec >= 60) {
        sec = 0;
        min += 1;
    }
    if (min >= 60) {
        min = 0;
        deg += 1;
    }
    let hdms = deg + "\xb0";
    if (min !== 0 || sec !== 0) hdms += " " + (0, _stringJs.padNumber)(min, 2) + "′";
    if (sec !== 0) hdms += " " + (0, _stringJs.padNumber)(sec, 2, decimals) + "″";
    if (normalizedDegrees !== 0) hdms += " " + hemispheres.charAt(normalizedDegrees < 0 ? 1 : 0);
    return hdms;
}
function format(coordinate, template, fractionDigits) {
    if (coordinate) return template.replace("{x}", coordinate[0].toFixed(fractionDigits)).replace("{y}", coordinate[1].toFixed(fractionDigits));
    return "";
}
function equals(coordinate1, coordinate2) {
    let equals = true;
    for(let i = coordinate1.length - 1; i >= 0; --i)if (coordinate1[i] != coordinate2[i]) {
        equals = false;
        break;
    }
    return equals;
}
function rotate(coordinate, angle) {
    const cosAngle = Math.cos(angle);
    const sinAngle = Math.sin(angle);
    const x = coordinate[0] * cosAngle - coordinate[1] * sinAngle;
    const y = coordinate[1] * cosAngle + coordinate[0] * sinAngle;
    coordinate[0] = x;
    coordinate[1] = y;
    return coordinate;
}
function scale(coordinate, scale) {
    coordinate[0] *= scale;
    coordinate[1] *= scale;
    return coordinate;
}
function squaredDistance(coord1, coord2) {
    const dx = coord1[0] - coord2[0];
    const dy = coord1[1] - coord2[1];
    return dx * dx + dy * dy;
}
function distance(coord1, coord2) {
    return Math.sqrt(squaredDistance(coord1, coord2));
}
function squaredDistanceToSegment(coordinate, segment) {
    return squaredDistance(coordinate, closestOnSegment(coordinate, segment));
}
function toStringHDMS(coordinate, fractionDigits) {
    if (coordinate) return degreesToStringHDMS("NS", coordinate[1], fractionDigits) + " " + degreesToStringHDMS("EW", coordinate[0], fractionDigits);
    return "";
}
function toStringXY(coordinate, fractionDigits) {
    return format(coordinate, "{x}, {y}", fractionDigits);
}
function wrapX(coordinate, projection) {
    if (projection.canWrapX()) {
        const worldWidth = (0, _extentJs.getWidth)(projection.getExtent());
        const worldsAway = getWorldsAway(coordinate, projection, worldWidth);
        if (worldsAway) coordinate[0] -= worldsAway * worldWidth;
    }
    return coordinate;
}
function getWorldsAway(coordinate, projection, sourceExtentWidth) {
    const projectionExtent = projection.getExtent();
    let worldsAway = 0;
    if (projection.canWrapX() && (coordinate[0] < projectionExtent[0] || coordinate[0] > projectionExtent[2])) {
        sourceExtentWidth = sourceExtentWidth || (0, _extentJs.getWidth)(projectionExtent);
        worldsAway = Math.floor((coordinate[0] - projectionExtent[0]) / sourceExtentWidth);
    }
    return worldsAway;
}

},{"./extent.js":"6YrVc","./math.js":"5jEFr","./string.js":"fIYwS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fIYwS":[function(require,module,exports) {
/**
 * @module ol/string
 */ /**
 * @param {number} number Number to be formatted
 * @param {number} width The desired width
 * @param {number} [precision] Precision of the output string (i.e. number of decimal places)
 * @return {string} Formatted string
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "padNumber", ()=>padNumber);
/**
 * Adapted from https://github.com/omichelsen/compare-versions/blob/master/index.js
 * @param {string|number} v1 First version
 * @param {string|number} v2 Second version
 * @return {number} Value
 */ parcelHelpers.export(exports, "compareVersions", ()=>compareVersions);
function padNumber(number, width, precision) {
    const numberString = precision !== undefined ? number.toFixed(precision) : "" + number;
    let decimal = numberString.indexOf(".");
    decimal = decimal === -1 ? numberString.length : decimal;
    return decimal > width ? numberString : new Array(1 + width - decimal).join("0") + numberString;
}
function compareVersions(v1, v2) {
    const s1 = ("" + v1).split(".");
    const s2 = ("" + v2).split(".");
    for(let i = 0; i < Math.max(s1.length, s2.length); i++){
        const n1 = parseInt(s1[i] || "0", 10);
        const n2 = parseInt(s2[i] || "0", 10);
        if (n1 > n2) return 1;
        if (n2 > n1) return -1;
    }
    return 0;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eJjHw":[function(require,module,exports) {
/**
 * @module ol/sphere
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DEFAULT_RADIUS", ()=>DEFAULT_RADIUS);
/**
 * Get the great circle distance (in meters) between two geographic coordinates.
 * @param {Array} c1 Starting coordinate.
 * @param {Array} c2 Ending coordinate.
 * @param {number} [radius] The sphere radius to use.  Defaults to the Earth's
 *     mean radius using the WGS84 ellipsoid.
 * @return {number} The great circle distance between the points (in meters).
 * @api
 */ parcelHelpers.export(exports, "getDistance", ()=>getDistance);
/**
 * Get the spherical length of a geometry.  This length is the sum of the
 * great circle distances between coordinates.  For polygons, the length is
 * the sum of all rings.  For points, the length is zero.  For multi-part
 * geometries, the length is the sum of the length of each part.
 * @param {import("./geom/Geometry.js").default} geometry A geometry.
 * @param {SphereMetricOptions} [options] Options for the
 * length calculation.  By default, geometries are assumed to be in 'EPSG:3857'.
 * You can change this by providing a `projection` option.
 * @return {number} The spherical length (in meters).
 * @api
 */ parcelHelpers.export(exports, "getLength", ()=>getLength);
/**
 * Get the spherical area of a geometry.  This is the area (in meters) assuming
 * that polygon edges are segments of great circles on a sphere.
 * @param {import("./geom/Geometry.js").default} geometry A geometry.
 * @param {SphereMetricOptions} [options] Options for the area
 *     calculation.  By default, geometries are assumed to be in 'EPSG:3857'.
 *     You can change this by providing a `projection` option.
 * @return {number} The spherical area (in square meters).
 * @api
 */ parcelHelpers.export(exports, "getArea", ()=>getArea);
/**
 * Returns the coordinate at the given distance and bearing from `c1`.
 *
 * @param {import("./coordinate.js").Coordinate} c1 The origin point (`[lon, lat]` in degrees).
 * @param {number} distance The great-circle distance between the origin
 *     point and the target point.
 * @param {number} bearing The bearing (in radians).
 * @param {number} [radius] The sphere radius to use.  Defaults to the Earth's
 *     mean radius using the WGS84 ellipsoid.
 * @return {import("./coordinate.js").Coordinate} The target point.
 */ parcelHelpers.export(exports, "offset", ()=>offset);
var _mathJs = require("./math.js");
const DEFAULT_RADIUS = 6371008.8;
function getDistance(c1, c2, radius) {
    radius = radius || DEFAULT_RADIUS;
    const lat1 = (0, _mathJs.toRadians)(c1[1]);
    const lat2 = (0, _mathJs.toRadians)(c2[1]);
    const deltaLatBy2 = (lat2 - lat1) / 2;
    const deltaLonBy2 = (0, _mathJs.toRadians)(c2[0] - c1[0]) / 2;
    const a = Math.sin(deltaLatBy2) * Math.sin(deltaLatBy2) + Math.sin(deltaLonBy2) * Math.sin(deltaLonBy2) * Math.cos(lat1) * Math.cos(lat2);
    return 2 * radius * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}
/**
 * Get the cumulative great circle length of linestring coordinates (geographic).
 * @param {Array} coordinates Linestring coordinates.
 * @param {number} radius The sphere radius to use.
 * @return {number} The length (in meters).
 */ function getLengthInternal(coordinates, radius) {
    let length = 0;
    for(let i = 0, ii = coordinates.length; i < ii - 1; ++i)length += getDistance(coordinates[i], coordinates[i + 1], radius);
    return length;
}
function getLength(geometry, options) {
    options = options || {};
    const radius = options.radius || DEFAULT_RADIUS;
    const projection = options.projection || "EPSG:3857";
    const type = geometry.getType();
    if (type !== "GeometryCollection") geometry = geometry.clone().transform(projection, "EPSG:4326");
    let length = 0;
    let coordinates, coords, i, ii, j, jj;
    switch(type){
        case "Point":
        case "MultiPoint":
            break;
        case "LineString":
        case "LinearRing":
            coordinates = /** @type {import("./geom/SimpleGeometry.js").default} */ geometry.getCoordinates();
            length = getLengthInternal(coordinates, radius);
            break;
        case "MultiLineString":
        case "Polygon":
            coordinates = /** @type {import("./geom/SimpleGeometry.js").default} */ geometry.getCoordinates();
            for(i = 0, ii = coordinates.length; i < ii; ++i)length += getLengthInternal(coordinates[i], radius);
            break;
        case "MultiPolygon":
            coordinates = /** @type {import("./geom/SimpleGeometry.js").default} */ geometry.getCoordinates();
            for(i = 0, ii = coordinates.length; i < ii; ++i){
                coords = coordinates[i];
                for(j = 0, jj = coords.length; j < jj; ++j)length += getLengthInternal(coords[j], radius);
            }
            break;
        case "GeometryCollection":
            {
                const geometries = /** @type {import("./geom/GeometryCollection.js").default} */ geometry.getGeometries();
                for(i = 0, ii = geometries.length; i < ii; ++i)length += getLength(geometries[i], options);
                break;
            }
        default:
            throw new Error("Unsupported geometry type: " + type);
    }
    return length;
}
/**
 * Returns the spherical area for a list of coordinates.
 *
 * [Reference](https://trs.jpl.nasa.gov/handle/2014/40409)
 * Robert. G. Chamberlain and William H. Duquette, "Some Algorithms for
 * Polygons on a Sphere", JPL Publication 07-03, Jet Propulsion
 * Laboratory, Pasadena, CA, June 2007
 *
 * @param {Array<import("./coordinate.js").Coordinate>} coordinates List of coordinates of a linear
 * ring. If the ring is oriented clockwise, the area will be positive,
 * otherwise it will be negative.
 * @param {number} radius The sphere radius.
 * @return {number} Area (in square meters).
 */ function getAreaInternal(coordinates, radius) {
    let area = 0;
    const len = coordinates.length;
    let x1 = coordinates[len - 1][0];
    let y1 = coordinates[len - 1][1];
    for(let i = 0; i < len; i++){
        const x2 = coordinates[i][0];
        const y2 = coordinates[i][1];
        area += (0, _mathJs.toRadians)(x2 - x1) * (2 + Math.sin((0, _mathJs.toRadians)(y1)) + Math.sin((0, _mathJs.toRadians)(y2)));
        x1 = x2;
        y1 = y2;
    }
    return area * radius * radius / 2.0;
}
function getArea(geometry, options) {
    options = options || {};
    const radius = options.radius || DEFAULT_RADIUS;
    const projection = options.projection || "EPSG:3857";
    const type = geometry.getType();
    if (type !== "GeometryCollection") geometry = geometry.clone().transform(projection, "EPSG:4326");
    let area = 0;
    let coordinates, coords, i, ii, j, jj;
    switch(type){
        case "Point":
        case "MultiPoint":
        case "LineString":
        case "MultiLineString":
        case "LinearRing":
            break;
        case "Polygon":
            coordinates = /** @type {import("./geom/Polygon.js").default} */ geometry.getCoordinates();
            area = Math.abs(getAreaInternal(coordinates[0], radius));
            for(i = 1, ii = coordinates.length; i < ii; ++i)area -= Math.abs(getAreaInternal(coordinates[i], radius));
            break;
        case "MultiPolygon":
            coordinates = /** @type {import("./geom/SimpleGeometry.js").default} */ geometry.getCoordinates();
            for(i = 0, ii = coordinates.length; i < ii; ++i){
                coords = coordinates[i];
                area += Math.abs(getAreaInternal(coords[0], radius));
                for(j = 1, jj = coords.length; j < jj; ++j)area -= Math.abs(getAreaInternal(coords[j], radius));
            }
            break;
        case "GeometryCollection":
            {
                const geometries = /** @type {import("./geom/GeometryCollection.js").default} */ geometry.getGeometries();
                for(i = 0, ii = geometries.length; i < ii; ++i)area += getArea(geometries[i], options);
                break;
            }
        default:
            throw new Error("Unsupported geometry type: " + type);
    }
    return area;
}
function offset(c1, distance, bearing, radius) {
    radius = radius || DEFAULT_RADIUS;
    const lat1 = (0, _mathJs.toRadians)(c1[1]);
    const lon1 = (0, _mathJs.toRadians)(c1[0]);
    const dByR = distance / radius;
    const lat = Math.asin(Math.sin(lat1) * Math.cos(dByR) + Math.cos(lat1) * Math.sin(dByR) * Math.cos(bearing));
    const lon = lon1 + Math.atan2(Math.sin(bearing) * Math.sin(dByR) * Math.cos(lat1), Math.cos(dByR) - Math.sin(lat1) * Math.sin(lat));
    return [
        (0, _mathJs.toDegrees)(lon),
        (0, _mathJs.toDegrees)(lat)
    ];
}

},{"./math.js":"5jEFr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"25bqN":[function(require,module,exports) {
/**
 * @module ol/console
 */ /**
 * @typedef {'info'|'warn'|'error'|'none'} Level
 */ /**
 * @type {Object<Level, number>}
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Set the logging level.  By default, the level is set to 'info' and all
 * messages will be logged.  Set to 'warn' to only display warnings and errors.
 * Set to 'error' to only display errors.  Set to 'none' to silence all messages.
 *
 * @param {Level} l The new level.
 */ parcelHelpers.export(exports, "setLevel", ()=>setLevel);
parcelHelpers.export(exports, "log", ()=>log);
parcelHelpers.export(exports, "warn", ()=>warn);
parcelHelpers.export(exports, "error", ()=>error);
const levels = {
    info: 1,
    warn: 2,
    error: 3,
    none: 4
};
/**
 * @type {number}
 */ let level = levels.info;
function setLevel(l) {
    level = levels[l];
}
function log(...args) {
    if (level > levels.info) return;
    console.log(...args); // eslint-disable-line no-console
}
function warn(...args) {
    if (level > levels.warn) return;
    console.warn(...args); // eslint-disable-line no-console
}
function error(...args) {
    if (level > levels.error) return;
    console.error(...args); // eslint-disable-line no-console
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g3NLx":[function(require,module,exports) {
/**
 * @module ol/centerconstraint
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @typedef {function((import("./coordinate.js").Coordinate|undefined), number, import("./size.js").Size, boolean=, Array<number>=): (import("./coordinate.js").Coordinate|undefined)} Type
 */ /**
 * @param {import("./extent.js").Extent} extent Extent.
 * @param {boolean} onlyCenter If true, the constraint will only apply to the view center.
 * @param {boolean} smooth If true, the view will be able to go slightly out of the given extent
 * (only during interaction and animation).
 * @return {Type} The constraint.
 */ parcelHelpers.export(exports, "createExtent", ()=>createExtent);
/**
 * @param {import("./coordinate.js").Coordinate} [center] Center.
 * @return {import("./coordinate.js").Coordinate|undefined} Center.
 */ parcelHelpers.export(exports, "none", ()=>none);
var _mathJs = require("./math.js");
function createExtent(extent, onlyCenter, smooth) {
    return(/**
     * @param {import("./coordinate.js").Coordinate|undefined} center Center.
     * @param {number|undefined} resolution Resolution.
     * @param {import("./size.js").Size} size Viewport size; unused if `onlyCenter` was specified.
     * @param {boolean} [isMoving] True if an interaction or animation is in progress.
     * @param {Array<number>} [centerShift] Shift between map center and viewport center.
     * @return {import("./coordinate.js").Coordinate|undefined} Center.
     */ function(center, resolution, size, isMoving, centerShift) {
        if (!center) return undefined;
        if (!resolution && !onlyCenter) return center;
        const viewWidth = onlyCenter ? 0 : size[0] * resolution;
        const viewHeight = onlyCenter ? 0 : size[1] * resolution;
        const shiftX = centerShift ? centerShift[0] : 0;
        const shiftY = centerShift ? centerShift[1] : 0;
        let minX = extent[0] + viewWidth / 2 + shiftX;
        let maxX = extent[2] - viewWidth / 2 + shiftX;
        let minY = extent[1] + viewHeight / 2 + shiftY;
        let maxY = extent[3] - viewHeight / 2 + shiftY;
        // note: when zooming out of bounds, min and max values for x and y may
        // end up inverted (min > max); this has to be accounted for
        if (minX > maxX) {
            minX = (maxX + minX) / 2;
            maxX = minX;
        }
        if (minY > maxY) {
            minY = (maxY + minY) / 2;
            maxY = minY;
        }
        let x = (0, _mathJs.clamp)(center[0], minX, maxX);
        let y = (0, _mathJs.clamp)(center[1], minY, maxY);
        // during an interaction, allow some overscroll
        if (isMoving && smooth && resolution) {
            const ratio = 30 * resolution;
            x += -ratio * Math.log(1 + Math.max(0, minX - center[0]) / ratio) + ratio * Math.log(1 + Math.max(0, center[0] - maxX) / ratio);
            y += -ratio * Math.log(1 + Math.max(0, minY - center[1]) / ratio) + ratio * Math.log(1 + Math.max(0, center[1] - maxY) / ratio);
        }
        return [
            x,
            y
        ];
    });
}
function none(center) {
    return center;
}

},{"./math.js":"5jEFr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j8WKZ":[function(require,module,exports) {
/**
 * @module ol/resolutionconstraint
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @param {Array<number>} resolutions Resolutions.
 * @param {boolean} [smooth] If true, the view will be able to slightly exceed resolution limits. Default: true.
 * @param {import("./extent.js").Extent} [maxExtent] Maximum allowed extent.
 * @param {boolean} [showFullExtent] If true, allows us to show the full extent. Default: false.
 * @return {Type} Zoom function.
 */ parcelHelpers.export(exports, "createSnapToResolutions", ()=>createSnapToResolutions);
/**
 * @param {number} power Power.
 * @param {number} maxResolution Maximum resolution.
 * @param {number} [minResolution] Minimum resolution.
 * @param {boolean} [smooth] If true, the view will be able to slightly exceed resolution limits. Default: true.
 * @param {import("./extent.js").Extent} [maxExtent] Maximum allowed extent.
 * @param {boolean} [showFullExtent] If true, allows us to show the full extent. Default: false.
 * @return {Type} Zoom function.
 */ parcelHelpers.export(exports, "createSnapToPower", ()=>createSnapToPower);
/**
 * @param {number} maxResolution Max resolution.
 * @param {number} minResolution Min resolution.
 * @param {boolean} [smooth] If true, the view will be able to slightly exceed resolution limits. Default: true.
 * @param {import("./extent.js").Extent} [maxExtent] Maximum allowed extent.
 * @param {boolean} [showFullExtent] If true, allows us to show the full extent. Default: false.
 * @return {Type} Zoom function.
 */ parcelHelpers.export(exports, "createMinMaxResolution", ()=>createMinMaxResolution);
var _mathJs = require("./math.js");
var _extentJs = require("./extent.js");
var _arrayJs = require("./array.js");
/**
 * @typedef {function((number|undefined), number, import("./size.js").Size, boolean=): (number|undefined)} Type
 */ /**
 * Returns a modified resolution taking into account the viewport size and maximum
 * allowed extent.
 * @param {number} resolution Resolution
 * @param {import("./extent.js").Extent} maxExtent Maximum allowed extent.
 * @param {import("./size.js").Size} viewportSize Viewport size.
 * @param {boolean} showFullExtent Whether to show the full extent.
 * @return {number} Capped resolution.
 */ function getViewportClampedResolution(resolution, maxExtent, viewportSize, showFullExtent) {
    const xResolution = (0, _extentJs.getWidth)(maxExtent) / viewportSize[0];
    const yResolution = (0, _extentJs.getHeight)(maxExtent) / viewportSize[1];
    if (showFullExtent) return Math.min(resolution, Math.max(xResolution, yResolution));
    return Math.min(resolution, Math.min(xResolution, yResolution));
}
/**
 * Returns a modified resolution to be between maxResolution and minResolution while
 * still allowing the value to be slightly out of bounds.
 * Note: the computation is based on the logarithm function (ln):
 *  - at 1, ln(x) is 0
 *  - above 1, ln(x) keeps increasing but at a much slower pace than x
 * The final result is clamped to prevent getting too far away from bounds.
 * @param {number} resolution Resolution.
 * @param {number} maxResolution Max resolution.
 * @param {number} minResolution Min resolution.
 * @return {number} Smoothed resolution.
 */ function getSmoothClampedResolution(resolution, maxResolution, minResolution) {
    let result = Math.min(resolution, maxResolution);
    const ratio = 50;
    result *= Math.log(1 + ratio * Math.max(0, resolution / maxResolution - 1)) / ratio + 1;
    if (minResolution) {
        result = Math.max(result, minResolution);
        result /= Math.log(1 + ratio * Math.max(0, minResolution / resolution - 1)) / ratio + 1;
    }
    return (0, _mathJs.clamp)(result, minResolution / 2, maxResolution * 2);
}
function createSnapToResolutions(resolutions, smooth, maxExtent, showFullExtent) {
    smooth = smooth !== undefined ? smooth : true;
    return(/**
     * @param {number|undefined} resolution Resolution.
     * @param {number} direction Direction.
     * @param {import("./size.js").Size} size Viewport size.
     * @param {boolean} [isMoving] True if an interaction or animation is in progress.
     * @return {number|undefined} Resolution.
     */ function(resolution, direction, size, isMoving) {
        if (resolution !== undefined) {
            const maxResolution = resolutions[0];
            const minResolution = resolutions[resolutions.length - 1];
            const cappedMaxRes = maxExtent ? getViewportClampedResolution(maxResolution, maxExtent, size, showFullExtent) : maxResolution;
            // during interacting or animating, allow intermediary values
            if (isMoving) {
                if (!smooth) return (0, _mathJs.clamp)(resolution, minResolution, cappedMaxRes);
                return getSmoothClampedResolution(resolution, cappedMaxRes, minResolution);
            }
            const capped = Math.min(cappedMaxRes, resolution);
            const z = Math.floor((0, _arrayJs.linearFindNearest)(resolutions, capped, direction));
            if (resolutions[z] > cappedMaxRes && z < resolutions.length - 1) return resolutions[z + 1];
            return resolutions[z];
        }
        return undefined;
    });
}
function createSnapToPower(power, maxResolution, minResolution, smooth, maxExtent, showFullExtent) {
    smooth = smooth !== undefined ? smooth : true;
    minResolution = minResolution !== undefined ? minResolution : 0;
    return(/**
     * @param {number|undefined} resolution Resolution.
     * @param {number} direction Direction.
     * @param {import("./size.js").Size} size Viewport size.
     * @param {boolean} [isMoving] True if an interaction or animation is in progress.
     * @return {number|undefined} Resolution.
     */ function(resolution, direction, size, isMoving) {
        if (resolution !== undefined) {
            const cappedMaxRes = maxExtent ? getViewportClampedResolution(maxResolution, maxExtent, size, showFullExtent) : maxResolution;
            // during interacting or animating, allow intermediary values
            if (isMoving) {
                if (!smooth) return (0, _mathJs.clamp)(resolution, minResolution, cappedMaxRes);
                return getSmoothClampedResolution(resolution, cappedMaxRes, minResolution);
            }
            const tolerance = 1e-9;
            const minZoomLevel = Math.ceil(Math.log(maxResolution / cappedMaxRes) / Math.log(power) - tolerance);
            const offset = -direction * (0.5 - tolerance) + 0.5;
            const capped = Math.min(cappedMaxRes, resolution);
            const cappedZoomLevel = Math.floor(Math.log(maxResolution / capped) / Math.log(power) + offset);
            const zoomLevel = Math.max(minZoomLevel, cappedZoomLevel);
            const newResolution = maxResolution / Math.pow(power, zoomLevel);
            return (0, _mathJs.clamp)(newResolution, minResolution, cappedMaxRes);
        }
        return undefined;
    });
}
function createMinMaxResolution(maxResolution, minResolution, smooth, maxExtent, showFullExtent) {
    smooth = smooth !== undefined ? smooth : true;
    return(/**
     * @param {number|undefined} resolution Resolution.
     * @param {number} direction Direction.
     * @param {import("./size.js").Size} size Viewport size.
     * @param {boolean} [isMoving] True if an interaction or animation is in progress.
     * @return {number|undefined} Resolution.
     */ function(resolution, direction, size, isMoving) {
        if (resolution !== undefined) {
            const cappedMaxRes = maxExtent ? getViewportClampedResolution(maxResolution, maxExtent, size, showFullExtent) : maxResolution;
            if (!smooth || !isMoving) return (0, _mathJs.clamp)(resolution, minResolution, cappedMaxRes);
            return getSmoothClampedResolution(resolution, cappedMaxRes, minResolution);
        }
        return undefined;
    });
}

},{"./math.js":"5jEFr","./extent.js":"6YrVc","./array.js":"1Fbic","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hSWd8":[function(require,module,exports) {
/**
 * @module ol/rotationconstraint
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @typedef {function((number|undefined), boolean=): (number|undefined)} Type
 */ /**
 * @param {number|undefined} rotation Rotation.
 * @return {number|undefined} Rotation.
 */ parcelHelpers.export(exports, "disable", ()=>disable);
/**
 * @param {number|undefined} rotation Rotation.
 * @return {number|undefined} Rotation.
 */ parcelHelpers.export(exports, "none", ()=>none);
/**
 * @param {number} n N.
 * @return {Type} Rotation constraint.
 */ parcelHelpers.export(exports, "createSnapToN", ()=>createSnapToN);
/**
 * @param {number} [tolerance] Tolerance.
 * @return {Type} Rotation constraint.
 */ parcelHelpers.export(exports, "createSnapToZero", ()=>createSnapToZero);
var _mathJs = require("./math.js");
function disable(rotation) {
    if (rotation !== undefined) return 0;
    return undefined;
}
function none(rotation) {
    if (rotation !== undefined) return rotation;
    return undefined;
}
function createSnapToN(n) {
    const theta = 2 * Math.PI / n;
    return(/**
     * @param {number|undefined} rotation Rotation.
     * @param {boolean} [isMoving] True if an interaction or animation is in progress.
     * @return {number|undefined} Rotation.
     */ function(rotation, isMoving) {
        if (isMoving) return rotation;
        if (rotation !== undefined) {
            rotation = Math.floor(rotation / theta + 0.5) * theta;
            return rotation;
        }
        return undefined;
    });
}
function createSnapToZero(tolerance) {
    tolerance = tolerance || (0, _mathJs.toRadians)(5);
    return(/**
     * @param {number|undefined} rotation Rotation.
     * @param {boolean} [isMoving] True if an interaction or animation is in progress.
     * @return {number|undefined} Rotation.
     */ function(rotation, isMoving) {
        if (isMoving) return rotation;
        if (rotation !== undefined) {
            if (Math.abs(rotation) <= tolerance) return 0;
            return rotation;
        }
        return undefined;
    });
}

},{"./math.js":"5jEFr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fYITA":[function(require,module,exports) {
/**
 * @module ol/easing
 */ /**
 * Start slow and speed up.
 * @param {number} t Input between 0 and 1.
 * @return {number} Output between 0 and 1.
 * @api
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "easeIn", ()=>easeIn);
/**
 * Start fast and slow down.
 * @param {number} t Input between 0 and 1.
 * @return {number} Output between 0 and 1.
 * @api
 */ parcelHelpers.export(exports, "easeOut", ()=>easeOut);
/**
 * Start slow, speed up, and then slow down again.
 * @param {number} t Input between 0 and 1.
 * @return {number} Output between 0 and 1.
 * @api
 */ parcelHelpers.export(exports, "inAndOut", ()=>inAndOut);
/**
 * Maintain a constant speed over time.
 * @param {number} t Input between 0 and 1.
 * @return {number} Output between 0 and 1.
 * @api
 */ parcelHelpers.export(exports, "linear", ()=>linear);
/**
 * Start slow, speed up, and at the very end slow down again.  This has the
 * same general behavior as {@link module:ol/easing.inAndOut}, but the final
 * slowdown is delayed.
 * @param {number} t Input between 0 and 1.
 * @return {number} Output between 0 and 1.
 * @api
 */ parcelHelpers.export(exports, "upAndDown", ()=>upAndDown);
function easeIn(t) {
    return Math.pow(t, 3);
}
function easeOut(t) {
    return 1 - easeIn(1 - t);
}
function inAndOut(t) {
    return 3 * t * t - 2 * t * t * t;
}
function linear(t) {
    return t;
}
function upAndDown(t) {
    if (t < 0.5) return inAndOut(2 * t);
    return 1 - inAndOut(2 * (t - 0.5));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cJuQF":[function(require,module,exports) {
/**
 * @module ol/geom/Polygon
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Create an approximation of a circle on the surface of a sphere.
 * @param {import("../coordinate.js").Coordinate} center Center (`[lon, lat]` in degrees).
 * @param {number} radius The great-circle distance from the center to
 *     the polygon vertices in meters.
 * @param {number} [n] Optional number of vertices for the resulting
 *     polygon. Default is `32`.
 * @param {number} [sphereRadius] Optional radius for the sphere (defaults to
 *     the Earth's mean radius using the WGS84 ellipsoid).
 * @return {Polygon} The "circular" polygon.
 * @api
 */ parcelHelpers.export(exports, "circular", ()=>circular);
/**
 * Create a polygon from an extent. The layout used is `XY`.
 * @param {import("../extent.js").Extent} extent The extent.
 * @return {Polygon} The polygon.
 * @api
 */ parcelHelpers.export(exports, "fromExtent", ()=>fromExtent);
/**
 * Create a regular polygon from a circle.
 * @param {import("./Circle.js").default} circle Circle geometry.
 * @param {number} [sides] Number of sides of the polygon. Default is 32.
 * @param {number} [angle] Start angle for the first vertex of the polygon in
 *     counter-clockwise radians. 0 means East. Default is 0.
 * @return {Polygon} Polygon geometry.
 * @api
 */ parcelHelpers.export(exports, "fromCircle", ()=>fromCircle);
/**
 * Modify the coordinates of a polygon to make it a regular polygon.
 * @param {Polygon} polygon Polygon geometry.
 * @param {import("../coordinate.js").Coordinate} center Center of the regular polygon.
 * @param {number} radius Radius of the regular polygon.
 * @param {number} [angle] Start angle for the first vertex of the polygon in
 *     counter-clockwise radians. 0 means East. Default is 0.
 */ parcelHelpers.export(exports, "makeRegular", ()=>makeRegular);
var _linearRingJs = require("./LinearRing.js");
var _linearRingJsDefault = parcelHelpers.interopDefault(_linearRingJs);
var _pointJs = require("./Point.js");
var _pointJsDefault = parcelHelpers.interopDefault(_pointJs);
var _simpleGeometryJs = require("./SimpleGeometry.js");
var _simpleGeometryJsDefault = parcelHelpers.interopDefault(_simpleGeometryJs);
var _closestJs = require("./flat/closest.js");
var _extentJs = require("../extent.js");
var _deflateJs = require("./flat/deflate.js");
var _arrayJs = require("../array.js");
var _interiorpointJs = require("./flat/interiorpoint.js");
var _inflateJs = require("./flat/inflate.js");
var _intersectsextentJs = require("./flat/intersectsextent.js");
var _orientJs = require("./flat/orient.js");
var _areaJs = require("./flat/area.js");
var _containsJs = require("./flat/contains.js");
var _mathJs = require("../math.js");
var _simplifyJs = require("./flat/simplify.js");
var _sphereJs = require("../sphere.js");
/**
 * @classdesc
 * Polygon geometry.
 *
 * @api
 */ class Polygon extends (0, _simpleGeometryJsDefault.default) {
    /**
   * @param {!Array<Array<import("../coordinate.js").Coordinate>>|!Array<number>} coordinates
   *     Array of linear rings that define the polygon. The first linear ring of the
   *     array defines the outer-boundary or surface of the polygon. Each subsequent
   *     linear ring defines a hole in the surface of the polygon. A linear ring is
   *     an array of vertices' coordinates where the first coordinate and the last are
   *     equivalent. (For internal use, flat coordinates in combination with
   *     `layout` and `ends` are also accepted.)
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   * @param {Array<number>} [ends] Ends (for internal use with flat coordinates).
   */ constructor(coordinates, layout, ends){
        super();
        /**
     * @type {Array<number>}
     * @private
     */ this.ends_ = [];
        /**
     * @private
     * @type {number}
     */ this.flatInteriorPointRevision_ = -1;
        /**
     * @private
     * @type {import("../coordinate.js").Coordinate}
     */ this.flatInteriorPoint_ = null;
        /**
     * @private
     * @type {number}
     */ this.maxDelta_ = -1;
        /**
     * @private
     * @type {number}
     */ this.maxDeltaRevision_ = -1;
        /**
     * @private
     * @type {number}
     */ this.orientedRevision_ = -1;
        /**
     * @private
     * @type {Array<number>}
     */ this.orientedFlatCoordinates_ = null;
        if (layout !== undefined && ends) {
            this.setFlatCoordinates(layout, /** @type {Array<number>} */ coordinates);
            this.ends_ = ends;
        } else this.setCoordinates(/** @type {Array<Array<import("../coordinate.js").Coordinate>>} */ coordinates, layout);
    }
    /**
   * Append the passed linear ring to this polygon.
   * @param {LinearRing} linearRing Linear ring.
   * @api
   */ appendLinearRing(linearRing) {
        if (!this.flatCoordinates) this.flatCoordinates = linearRing.getFlatCoordinates().slice();
        else (0, _arrayJs.extend)(this.flatCoordinates, linearRing.getFlatCoordinates());
        this.ends_.push(this.flatCoordinates.length);
        this.changed();
    }
    /**
   * Make a complete copy of the geometry.
   * @return {!Polygon} Clone.
   * @api
   */ clone() {
        const polygon = new Polygon(this.flatCoordinates.slice(), this.layout, this.ends_.slice());
        polygon.applyProperties(this);
        return polygon;
    }
    /**
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   */ closestPointXY(x, y, closestPoint, minSquaredDistance) {
        if (minSquaredDistance < (0, _extentJs.closestSquaredDistanceXY)(this.getExtent(), x, y)) return minSquaredDistance;
        if (this.maxDeltaRevision_ != this.getRevision()) {
            this.maxDelta_ = Math.sqrt((0, _closestJs.arrayMaxSquaredDelta)(this.flatCoordinates, 0, this.ends_, this.stride, 0));
            this.maxDeltaRevision_ = this.getRevision();
        }
        return (0, _closestJs.assignClosestArrayPoint)(this.flatCoordinates, 0, this.ends_, this.stride, this.maxDelta_, true, x, y, closestPoint, minSquaredDistance);
    }
    /**
   * @param {number} x X.
   * @param {number} y Y.
   * @return {boolean} Contains (x, y).
   */ containsXY(x, y) {
        return (0, _containsJs.linearRingsContainsXY)(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride, x, y);
    }
    /**
   * Return the area of the polygon on projected plane.
   * @return {number} Area (on projected plane).
   * @api
   */ getArea() {
        return (0, _areaJs.linearRings)(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride);
    }
    /**
   * Get the coordinate array for this geometry.  This array has the structure
   * of a GeoJSON coordinate array for polygons.
   *
   * @param {boolean} [right] Orient coordinates according to the right-hand
   *     rule (counter-clockwise for exterior and clockwise for interior rings).
   *     If `false`, coordinates will be oriented according to the left-hand rule
   *     (clockwise for exterior and counter-clockwise for interior rings).
   *     By default, coordinate orientation will depend on how the geometry was
   *     constructed.
   * @return {Array<Array<import("../coordinate.js").Coordinate>>} Coordinates.
   * @api
   */ getCoordinates(right) {
        let flatCoordinates;
        if (right !== undefined) {
            flatCoordinates = this.getOrientedFlatCoordinates().slice();
            (0, _orientJs.orientLinearRings)(flatCoordinates, 0, this.ends_, this.stride, right);
        } else flatCoordinates = this.flatCoordinates;
        return (0, _inflateJs.inflateCoordinatesArray)(flatCoordinates, 0, this.ends_, this.stride);
    }
    /**
   * @return {Array<number>} Ends.
   */ getEnds() {
        return this.ends_;
    }
    /**
   * @return {Array<number>} Interior point.
   */ getFlatInteriorPoint() {
        if (this.flatInteriorPointRevision_ != this.getRevision()) {
            const flatCenter = (0, _extentJs.getCenter)(this.getExtent());
            this.flatInteriorPoint_ = (0, _interiorpointJs.getInteriorPointOfArray)(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride, flatCenter, 0);
            this.flatInteriorPointRevision_ = this.getRevision();
        }
        return this.flatInteriorPoint_;
    }
    /**
   * Return an interior point of the polygon.
   * @return {Point} Interior point as XYM coordinate, where M is the
   * length of the horizontal intersection that the point belongs to.
   * @api
   */ getInteriorPoint() {
        return new (0, _pointJsDefault.default)(this.getFlatInteriorPoint(), "XYM");
    }
    /**
   * Return the number of rings of the polygon,  this includes the exterior
   * ring and any interior rings.
   *
   * @return {number} Number of rings.
   * @api
   */ getLinearRingCount() {
        return this.ends_.length;
    }
    /**
   * Return the Nth linear ring of the polygon geometry. Return `null` if the
   * given index is out of range.
   * The exterior linear ring is available at index `0` and the interior rings
   * at index `1` and beyond.
   *
   * @param {number} index Index.
   * @return {LinearRing|null} Linear ring.
   * @api
   */ getLinearRing(index) {
        if (index < 0 || this.ends_.length <= index) return null;
        return new (0, _linearRingJsDefault.default)(this.flatCoordinates.slice(index === 0 ? 0 : this.ends_[index - 1], this.ends_[index]), this.layout);
    }
    /**
   * Return the linear rings of the polygon.
   * @return {Array<LinearRing>} Linear rings.
   * @api
   */ getLinearRings() {
        const layout = this.layout;
        const flatCoordinates = this.flatCoordinates;
        const ends = this.ends_;
        const linearRings = [];
        let offset = 0;
        for(let i = 0, ii = ends.length; i < ii; ++i){
            const end = ends[i];
            const linearRing = new (0, _linearRingJsDefault.default)(flatCoordinates.slice(offset, end), layout);
            linearRings.push(linearRing);
            offset = end;
        }
        return linearRings;
    }
    /**
   * @return {Array<number>} Oriented flat coordinates.
   */ getOrientedFlatCoordinates() {
        if (this.orientedRevision_ != this.getRevision()) {
            const flatCoordinates = this.flatCoordinates;
            if ((0, _orientJs.linearRingsAreOriented)(flatCoordinates, 0, this.ends_, this.stride)) this.orientedFlatCoordinates_ = flatCoordinates;
            else {
                this.orientedFlatCoordinates_ = flatCoordinates.slice();
                this.orientedFlatCoordinates_.length = (0, _orientJs.orientLinearRings)(this.orientedFlatCoordinates_, 0, this.ends_, this.stride);
            }
            this.orientedRevision_ = this.getRevision();
        }
        return this.orientedFlatCoordinates_;
    }
    /**
   * @param {number} squaredTolerance Squared tolerance.
   * @return {Polygon} Simplified Polygon.
   * @protected
   */ getSimplifiedGeometryInternal(squaredTolerance) {
        const simplifiedFlatCoordinates = [];
        const simplifiedEnds = [];
        simplifiedFlatCoordinates.length = (0, _simplifyJs.quantizeArray)(this.flatCoordinates, 0, this.ends_, this.stride, Math.sqrt(squaredTolerance), simplifiedFlatCoordinates, 0, simplifiedEnds);
        return new Polygon(simplifiedFlatCoordinates, "XY", simplifiedEnds);
    }
    /**
   * Get the type of this geometry.
   * @return {import("./Geometry.js").Type} Geometry type.
   * @api
   */ getType() {
        return "Polygon";
    }
    /**
   * Test if the geometry and the passed extent intersect.
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {boolean} `true` if the geometry and the extent intersect.
   * @api
   */ intersectsExtent(extent) {
        return (0, _intersectsextentJs.intersectsLinearRingArray)(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride, extent);
    }
    /**
   * Set the coordinates of the polygon.
   * @param {!Array<Array<import("../coordinate.js").Coordinate>>} coordinates Coordinates.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   * @api
   */ setCoordinates(coordinates, layout) {
        this.setLayout(layout, coordinates, 2);
        if (!this.flatCoordinates) this.flatCoordinates = [];
        const ends = (0, _deflateJs.deflateCoordinatesArray)(this.flatCoordinates, 0, coordinates, this.stride, this.ends_);
        this.flatCoordinates.length = ends.length === 0 ? 0 : ends[ends.length - 1];
        this.changed();
    }
}
exports.default = Polygon;
function circular(center, radius, n, sphereRadius) {
    n = n ? n : 32;
    /** @type {Array<number>} */ const flatCoordinates = [];
    for(let i = 0; i < n; ++i)(0, _arrayJs.extend)(flatCoordinates, (0, _sphereJs.offset)(center, radius, 2 * Math.PI * i / n, sphereRadius));
    flatCoordinates.push(flatCoordinates[0], flatCoordinates[1]);
    return new Polygon(flatCoordinates, "XY", [
        flatCoordinates.length
    ]);
}
function fromExtent(extent) {
    const minX = extent[0];
    const minY = extent[1];
    const maxX = extent[2];
    const maxY = extent[3];
    const flatCoordinates = [
        minX,
        minY,
        minX,
        maxY,
        maxX,
        maxY,
        maxX,
        minY,
        minX,
        minY
    ];
    return new Polygon(flatCoordinates, "XY", [
        flatCoordinates.length
    ]);
}
function fromCircle(circle, sides, angle) {
    sides = sides ? sides : 32;
    const stride = circle.getStride();
    const layout = circle.getLayout();
    const center = circle.getCenter();
    const arrayLength = stride * (sides + 1);
    const flatCoordinates = new Array(arrayLength);
    for(let i = 0; i < arrayLength; i += stride){
        flatCoordinates[i] = 0;
        flatCoordinates[i + 1] = 0;
        for(let j = 2; j < stride; j++)flatCoordinates[i + j] = center[j];
    }
    const ends = [
        flatCoordinates.length
    ];
    const polygon = new Polygon(flatCoordinates, layout, ends);
    makeRegular(polygon, center, circle.getRadius(), angle);
    return polygon;
}
function makeRegular(polygon, center, radius, angle) {
    const flatCoordinates = polygon.getFlatCoordinates();
    const stride = polygon.getStride();
    const sides = flatCoordinates.length / stride - 1;
    const startAngle = angle ? angle : 0;
    for(let i = 0; i <= sides; ++i){
        const offset = i * stride;
        const angle = startAngle + (0, _mathJs.modulo)(i, sides) * 2 * Math.PI / sides;
        flatCoordinates[offset] = center[0] + radius * Math.cos(angle);
        flatCoordinates[offset + 1] = center[1] + radius * Math.sin(angle);
    }
    polygon.changed();
}

},{"./LinearRing.js":"jg1hj","./Point.js":"hx2Ar","./SimpleGeometry.js":"hLwk3","./flat/closest.js":"fi6H5","../extent.js":"6YrVc","./flat/deflate.js":"3TE5l","../array.js":"1Fbic","./flat/interiorpoint.js":"59VP9","./flat/inflate.js":"4Rpju","./flat/intersectsextent.js":"7x08H","./flat/orient.js":"btd6s","./flat/area.js":"7fT8A","./flat/contains.js":"eArlN","../math.js":"5jEFr","./flat/simplify.js":"jsqc5","../sphere.js":"eJjHw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jg1hj":[function(require,module,exports) {
/**
 * @module ol/geom/LinearRing
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _simpleGeometryJs = require("./SimpleGeometry.js");
var _simpleGeometryJsDefault = parcelHelpers.interopDefault(_simpleGeometryJs);
var _closestJs = require("./flat/closest.js");
var _extentJs = require("../extent.js");
var _deflateJs = require("./flat/deflate.js");
var _simplifyJs = require("./flat/simplify.js");
var _inflateJs = require("./flat/inflate.js");
var _areaJs = require("./flat/area.js");
/**
 * @classdesc
 * Linear ring geometry. Only used as part of polygon; cannot be rendered
 * on its own.
 *
 * @api
 */ class LinearRing extends (0, _simpleGeometryJsDefault.default) {
    /**
   * @param {Array<import("../coordinate.js").Coordinate>|Array<number>} coordinates Coordinates.
   *     For internal use, flat coordinates in combination with `layout` are also accepted.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   */ constructor(coordinates, layout){
        super();
        /**
     * @private
     * @type {number}
     */ this.maxDelta_ = -1;
        /**
     * @private
     * @type {number}
     */ this.maxDeltaRevision_ = -1;
        if (layout !== undefined && !Array.isArray(coordinates[0])) this.setFlatCoordinates(layout, /** @type {Array<number>} */ coordinates);
        else this.setCoordinates(/** @type {Array<import("../coordinate.js").Coordinate>} */ coordinates, layout);
    }
    /**
   * Make a complete copy of the geometry.
   * @return {!LinearRing} Clone.
   * @api
   */ clone() {
        return new LinearRing(this.flatCoordinates.slice(), this.layout);
    }
    /**
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   */ closestPointXY(x, y, closestPoint, minSquaredDistance) {
        if (minSquaredDistance < (0, _extentJs.closestSquaredDistanceXY)(this.getExtent(), x, y)) return minSquaredDistance;
        if (this.maxDeltaRevision_ != this.getRevision()) {
            this.maxDelta_ = Math.sqrt((0, _closestJs.maxSquaredDelta)(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, 0));
            this.maxDeltaRevision_ = this.getRevision();
        }
        return (0, _closestJs.assignClosestPoint)(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, this.maxDelta_, true, x, y, closestPoint, minSquaredDistance);
    }
    /**
   * Return the area of the linear ring on projected plane.
   * @return {number} Area (on projected plane).
   * @api
   */ getArea() {
        return (0, _areaJs.linearRing)(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride);
    }
    /**
   * Return the coordinates of the linear ring.
   * @return {Array<import("../coordinate.js").Coordinate>} Coordinates.
   * @api
   */ getCoordinates() {
        return (0, _inflateJs.inflateCoordinates)(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride);
    }
    /**
   * @param {number} squaredTolerance Squared tolerance.
   * @return {LinearRing} Simplified LinearRing.
   * @protected
   */ getSimplifiedGeometryInternal(squaredTolerance) {
        const simplifiedFlatCoordinates = [];
        simplifiedFlatCoordinates.length = (0, _simplifyJs.douglasPeucker)(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, squaredTolerance, simplifiedFlatCoordinates, 0);
        return new LinearRing(simplifiedFlatCoordinates, "XY");
    }
    /**
   * Get the type of this geometry.
   * @return {import("./Geometry.js").Type} Geometry type.
   * @api
   */ getType() {
        return "LinearRing";
    }
    /**
   * Test if the geometry and the passed extent intersect.
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {boolean} `true` if the geometry and the extent intersect.
   * @api
   */ intersectsExtent(extent) {
        return false;
    }
    /**
   * Set the coordinates of the linear ring.
   * @param {!Array<import("../coordinate.js").Coordinate>} coordinates Coordinates.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   * @api
   */ setCoordinates(coordinates, layout) {
        this.setLayout(layout, coordinates, 1);
        if (!this.flatCoordinates) this.flatCoordinates = [];
        this.flatCoordinates.length = (0, _deflateJs.deflateCoordinates)(this.flatCoordinates, 0, coordinates, this.stride);
        this.changed();
    }
}
exports.default = LinearRing;

},{"./SimpleGeometry.js":"hLwk3","./flat/closest.js":"fi6H5","../extent.js":"6YrVc","./flat/deflate.js":"3TE5l","./flat/simplify.js":"jsqc5","./flat/inflate.js":"4Rpju","./flat/area.js":"7fT8A","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hLwk3":[function(require,module,exports) {
/**
 * @module ol/geom/SimpleGeometry
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @param {import("./Geometry.js").GeometryLayout} layout Layout.
 * @return {number} Stride.
 */ parcelHelpers.export(exports, "getStrideForLayout", ()=>getStrideForLayout);
/**
 * @param {SimpleGeometry} simpleGeometry Simple geometry.
 * @param {import("../transform.js").Transform} transform Transform.
 * @param {Array<number>} [dest] Destination.
 * @return {Array<number>} Transformed flat coordinates.
 */ parcelHelpers.export(exports, "transformGeom2D", ()=>transformGeom2D);
var _geometryJs = require("./Geometry.js");
var _geometryJsDefault = parcelHelpers.interopDefault(_geometryJs);
var _utilJs = require("../util.js");
var _extentJs = require("../extent.js");
var _transformJs = require("./flat/transform.js");
/**
 * @classdesc
 * Abstract base class; only used for creating subclasses; do not instantiate
 * in apps, as cannot be rendered.
 *
 * @abstract
 * @api
 */ class SimpleGeometry extends (0, _geometryJsDefault.default) {
    constructor(){
        super();
        /**
     * @protected
     * @type {import("./Geometry.js").GeometryLayout}
     */ this.layout = "XY";
        /**
     * @protected
     * @type {number}
     */ this.stride = 2;
        /**
     * @protected
     * @type {Array<number>}
     */ this.flatCoordinates = null;
    }
    /**
   * @param {import("../extent.js").Extent} extent Extent.
   * @protected
   * @return {import("../extent.js").Extent} extent Extent.
   */ computeExtent(extent) {
        return (0, _extentJs.createOrUpdateFromFlatCoordinates)(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, extent);
    }
    /**
   * @abstract
   * @return {Array<*> | null} Coordinates.
   */ getCoordinates() {
        return (0, _utilJs.abstract)();
    }
    /**
   * Return the first coordinate of the geometry.
   * @return {import("../coordinate.js").Coordinate} First coordinate.
   * @api
   */ getFirstCoordinate() {
        return this.flatCoordinates.slice(0, this.stride);
    }
    /**
   * @return {Array<number>} Flat coordinates.
   */ getFlatCoordinates() {
        return this.flatCoordinates;
    }
    /**
   * Return the last coordinate of the geometry.
   * @return {import("../coordinate.js").Coordinate} Last point.
   * @api
   */ getLastCoordinate() {
        return this.flatCoordinates.slice(this.flatCoordinates.length - this.stride);
    }
    /**
   * Return the {@link import("./Geometry.js").GeometryLayout layout} of the geometry.
   * @return {import("./Geometry.js").GeometryLayout} Layout.
   * @api
   */ getLayout() {
        return this.layout;
    }
    /**
   * Create a simplified version of this geometry using the Douglas Peucker algorithm.
   * @param {number} squaredTolerance Squared tolerance.
   * @return {SimpleGeometry} Simplified geometry.
   */ getSimplifiedGeometry(squaredTolerance) {
        if (this.simplifiedGeometryRevision !== this.getRevision()) {
            this.simplifiedGeometryMaxMinSquaredTolerance = 0;
            this.simplifiedGeometryRevision = this.getRevision();
        }
        // If squaredTolerance is negative or if we know that simplification will not
        // have any effect then just return this.
        if (squaredTolerance < 0 || this.simplifiedGeometryMaxMinSquaredTolerance !== 0 && squaredTolerance <= this.simplifiedGeometryMaxMinSquaredTolerance) return this;
        const simplifiedGeometry = this.getSimplifiedGeometryInternal(squaredTolerance);
        const simplifiedFlatCoordinates = simplifiedGeometry.getFlatCoordinates();
        if (simplifiedFlatCoordinates.length < this.flatCoordinates.length) return simplifiedGeometry;
        // Simplification did not actually remove any coordinates.  We now know
        // that any calls to getSimplifiedGeometry with a squaredTolerance less
        // than or equal to the current squaredTolerance will also not have any
        // effect.  This allows us to short circuit simplification (saving CPU
        // cycles) and prevents the cache of simplified geometries from filling
        // up with useless identical copies of this geometry (saving memory).
        this.simplifiedGeometryMaxMinSquaredTolerance = squaredTolerance;
        return this;
    }
    /**
   * @param {number} squaredTolerance Squared tolerance.
   * @return {SimpleGeometry} Simplified geometry.
   * @protected
   */ getSimplifiedGeometryInternal(squaredTolerance) {
        return this;
    }
    /**
   * @return {number} Stride.
   */ getStride() {
        return this.stride;
    }
    /**
   * @param {import("./Geometry.js").GeometryLayout} layout Layout.
   * @param {Array<number>} flatCoordinates Flat coordinates.
   */ setFlatCoordinates(layout, flatCoordinates) {
        this.stride = getStrideForLayout(layout);
        this.layout = layout;
        this.flatCoordinates = flatCoordinates;
    }
    /**
   * @abstract
   * @param {!Array<*>} coordinates Coordinates.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   */ setCoordinates(coordinates, layout) {
        (0, _utilJs.abstract)();
    }
    /**
   * @param {import("./Geometry.js").GeometryLayout|undefined} layout Layout.
   * @param {Array<*>} coordinates Coordinates.
   * @param {number} nesting Nesting.
   * @protected
   */ setLayout(layout, coordinates, nesting) {
        /** @type {number} */ let stride;
        if (layout) stride = getStrideForLayout(layout);
        else {
            for(let i = 0; i < nesting; ++i){
                if (coordinates.length === 0) {
                    this.layout = "XY";
                    this.stride = 2;
                    return;
                }
                coordinates = /** @type {Array} */ coordinates[0];
            }
            stride = coordinates.length;
            layout = getLayoutForStride(stride);
        }
        this.layout = layout;
        this.stride = stride;
    }
    /**
   * Apply a transform function to the coordinates of the geometry.
   * The geometry is modified in place.
   * If you do not want the geometry modified in place, first `clone()` it and
   * then use this function on the clone.
   * @param {import("../proj.js").TransformFunction} transformFn Transform function.
   * Called with a flat array of geometry coordinates.
   * @api
   */ applyTransform(transformFn) {
        if (this.flatCoordinates) {
            transformFn(this.flatCoordinates, this.flatCoordinates, this.stride);
            this.changed();
        }
    }
    /**
   * Rotate the geometry around a given coordinate. This modifies the geometry
   * coordinates in place.
   * @param {number} angle Rotation angle in counter-clockwise radians.
   * @param {import("../coordinate.js").Coordinate} anchor The rotation center.
   * @api
   */ rotate(angle, anchor) {
        const flatCoordinates = this.getFlatCoordinates();
        if (flatCoordinates) {
            const stride = this.getStride();
            (0, _transformJs.rotate)(flatCoordinates, 0, flatCoordinates.length, stride, angle, anchor, flatCoordinates);
            this.changed();
        }
    }
    /**
   * Scale the geometry (with an optional origin).  This modifies the geometry
   * coordinates in place.
   * @param {number} sx The scaling factor in the x-direction.
   * @param {number} [sy] The scaling factor in the y-direction (defaults to sx).
   * @param {import("../coordinate.js").Coordinate} [anchor] The scale origin (defaults to the center
   *     of the geometry extent).
   * @api
   */ scale(sx, sy, anchor) {
        if (sy === undefined) sy = sx;
        if (!anchor) anchor = (0, _extentJs.getCenter)(this.getExtent());
        const flatCoordinates = this.getFlatCoordinates();
        if (flatCoordinates) {
            const stride = this.getStride();
            (0, _transformJs.scale)(flatCoordinates, 0, flatCoordinates.length, stride, sx, sy, anchor, flatCoordinates);
            this.changed();
        }
    }
    /**
   * Translate the geometry.  This modifies the geometry coordinates in place.  If
   * instead you want a new geometry, first `clone()` this geometry.
   * @param {number} deltaX Delta X.
   * @param {number} deltaY Delta Y.
   * @api
   */ translate(deltaX, deltaY) {
        const flatCoordinates = this.getFlatCoordinates();
        if (flatCoordinates) {
            const stride = this.getStride();
            (0, _transformJs.translate)(flatCoordinates, 0, flatCoordinates.length, stride, deltaX, deltaY, flatCoordinates);
            this.changed();
        }
    }
}
/**
 * @param {number} stride Stride.
 * @return {import("./Geometry.js").GeometryLayout} layout Layout.
 */ function getLayoutForStride(stride) {
    let layout;
    if (stride == 2) layout = "XY";
    else if (stride == 3) layout = "XYZ";
    else if (stride == 4) layout = "XYZM";
    return /** @type {import("./Geometry.js").GeometryLayout} */ layout;
}
function getStrideForLayout(layout) {
    let stride;
    if (layout == "XY") stride = 2;
    else if (layout == "XYZ" || layout == "XYM") stride = 3;
    else if (layout == "XYZM") stride = 4;
    return /** @type {number} */ stride;
}
function transformGeom2D(simpleGeometry, transform, dest) {
    const flatCoordinates = simpleGeometry.getFlatCoordinates();
    if (!flatCoordinates) return null;
    const stride = simpleGeometry.getStride();
    return (0, _transformJs.transform2D)(flatCoordinates, 0, flatCoordinates.length, stride, transform, dest);
}
exports.default = SimpleGeometry;

},{"./Geometry.js":"4ya62","../util.js":"pLBjQ","../extent.js":"6YrVc","./flat/transform.js":"cDA2L","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4ya62":[function(require,module,exports) {
/**
 * @module ol/geom/Geometry
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _objectJs = require("../Object.js");
var _objectJsDefault = parcelHelpers.interopDefault(_objectJs);
var _utilJs = require("../util.js");
var _transformJs = require("../transform.js");
var _extentJs = require("../extent.js");
var _projJs = require("../proj.js");
var _functionsJs = require("../functions.js");
var _transformJs1 = require("./flat/transform.js");
/**
 * @typedef {'XY' | 'XYZ' | 'XYM' | 'XYZM'} GeometryLayout
 * The coordinate layout for geometries, indicating whether a 3rd or 4th z ('Z')
 * or measure ('M') coordinate is available.
 */ /**
 * @typedef {'Point' | 'LineString' | 'LinearRing' | 'Polygon' | 'MultiPoint' | 'MultiLineString' | 'MultiPolygon' | 'GeometryCollection' | 'Circle'} Type
 * The geometry type.  One of `'Point'`, `'LineString'`, `'LinearRing'`,
 * `'Polygon'`, `'MultiPoint'`, `'MultiLineString'`, `'MultiPolygon'`,
 * `'GeometryCollection'`, or `'Circle'`.
 */ /**
 * @type {import("../transform.js").Transform}
 */ const tmpTransform = (0, _transformJs.create)();
/**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * Base class for vector geometries.
 *
 * To get notified of changes to the geometry, register a listener for the
 * generic `change` event on your geometry instance.
 *
 * @abstract
 * @api
 */ class Geometry extends (0, _objectJsDefault.default) {
    constructor(){
        super();
        /**
     * @private
     * @type {import("../extent.js").Extent}
     */ this.extent_ = (0, _extentJs.createEmpty)();
        /**
     * @private
     * @type {number}
     */ this.extentRevision_ = -1;
        /**
     * @protected
     * @type {number}
     */ this.simplifiedGeometryMaxMinSquaredTolerance = 0;
        /**
     * @protected
     * @type {number}
     */ this.simplifiedGeometryRevision = 0;
        /**
     * Get a transformed and simplified version of the geometry.
     * @abstract
     * @param {number} revision The geometry revision.
     * @param {number} squaredTolerance Squared tolerance.
     * @param {import("../proj.js").TransformFunction} [transform] Optional transform function.
     * @return {Geometry} Simplified geometry.
     */ this.simplifyTransformedInternal = (0, _functionsJs.memoizeOne)(function(revision, squaredTolerance, transform) {
            if (!transform) return this.getSimplifiedGeometry(squaredTolerance);
            const clone = this.clone();
            clone.applyTransform(transform);
            return clone.getSimplifiedGeometry(squaredTolerance);
        });
    }
    /**
   * Get a transformed and simplified version of the geometry.
   * @abstract
   * @param {number} squaredTolerance Squared tolerance.
   * @param {import("../proj.js").TransformFunction} [transform] Optional transform function.
   * @return {Geometry} Simplified geometry.
   */ simplifyTransformed(squaredTolerance, transform) {
        return this.simplifyTransformedInternal(this.getRevision(), squaredTolerance, transform);
    }
    /**
   * Make a complete copy of the geometry.
   * @abstract
   * @return {!Geometry} Clone.
   */ clone() {
        return (0, _utilJs.abstract)();
    }
    /**
   * @abstract
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   */ closestPointXY(x, y, closestPoint, minSquaredDistance) {
        return (0, _utilJs.abstract)();
    }
    /**
   * @param {number} x X.
   * @param {number} y Y.
   * @return {boolean} Contains (x, y).
   */ containsXY(x, y) {
        const coord = this.getClosestPoint([
            x,
            y
        ]);
        return coord[0] === x && coord[1] === y;
    }
    /**
   * Return the closest point of the geometry to the passed point as
   * {@link module:ol/coordinate~Coordinate coordinate}.
   * @param {import("../coordinate.js").Coordinate} point Point.
   * @param {import("../coordinate.js").Coordinate} [closestPoint] Closest point.
   * @return {import("../coordinate.js").Coordinate} Closest point.
   * @api
   */ getClosestPoint(point, closestPoint) {
        closestPoint = closestPoint ? closestPoint : [
            NaN,
            NaN
        ];
        this.closestPointXY(point[0], point[1], closestPoint, Infinity);
        return closestPoint;
    }
    /**
   * Returns true if this geometry includes the specified coordinate. If the
   * coordinate is on the boundary of the geometry, returns false.
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @return {boolean} Contains coordinate.
   * @api
   */ intersectsCoordinate(coordinate) {
        return this.containsXY(coordinate[0], coordinate[1]);
    }
    /**
   * @abstract
   * @param {import("../extent.js").Extent} extent Extent.
   * @protected
   * @return {import("../extent.js").Extent} extent Extent.
   */ computeExtent(extent) {
        return (0, _utilJs.abstract)();
    }
    /**
   * Get the extent of the geometry.
   * @param {import("../extent.js").Extent} [extent] Extent.
   * @return {import("../extent.js").Extent} extent Extent.
   * @api
   */ getExtent(extent) {
        if (this.extentRevision_ != this.getRevision()) {
            const extent = this.computeExtent(this.extent_);
            if (isNaN(extent[0]) || isNaN(extent[1])) (0, _extentJs.createOrUpdateEmpty)(extent);
            this.extentRevision_ = this.getRevision();
        }
        return (0, _extentJs.returnOrUpdate)(this.extent_, extent);
    }
    /**
   * Rotate the geometry around a given coordinate. This modifies the geometry
   * coordinates in place.
   * @abstract
   * @param {number} angle Rotation angle in radians.
   * @param {import("../coordinate.js").Coordinate} anchor The rotation center.
   * @api
   */ rotate(angle, anchor) {
        (0, _utilJs.abstract)();
    }
    /**
   * Scale the geometry (with an optional origin).  This modifies the geometry
   * coordinates in place.
   * @abstract
   * @param {number} sx The scaling factor in the x-direction.
   * @param {number} [sy] The scaling factor in the y-direction (defaults to sx).
   * @param {import("../coordinate.js").Coordinate} [anchor] The scale origin (defaults to the center
   *     of the geometry extent).
   * @api
   */ scale(sx, sy, anchor) {
        (0, _utilJs.abstract)();
    }
    /**
   * Create a simplified version of this geometry.  For linestrings, this uses
   * the [Douglas Peucker](https://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm)
   * algorithm.  For polygons, a quantization-based
   * simplification is used to preserve topology.
   * @param {number} tolerance The tolerance distance for simplification.
   * @return {Geometry} A new, simplified version of the original geometry.
   * @api
   */ simplify(tolerance) {
        return this.getSimplifiedGeometry(tolerance * tolerance);
    }
    /**
   * Create a simplified version of this geometry using the Douglas Peucker
   * algorithm.
   * See https://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm.
   * @abstract
   * @param {number} squaredTolerance Squared tolerance.
   * @return {Geometry} Simplified geometry.
   */ getSimplifiedGeometry(squaredTolerance) {
        return (0, _utilJs.abstract)();
    }
    /**
   * Get the type of this geometry.
   * @abstract
   * @return {Type} Geometry type.
   */ getType() {
        return (0, _utilJs.abstract)();
    }
    /**
   * Apply a transform function to the coordinates of the geometry.
   * The geometry is modified in place.
   * If you do not want the geometry modified in place, first `clone()` it and
   * then use this function on the clone.
   * @abstract
   * @param {import("../proj.js").TransformFunction} transformFn Transform function.
   * Called with a flat array of geometry coordinates.
   */ applyTransform(transformFn) {
        (0, _utilJs.abstract)();
    }
    /**
   * Test if the geometry and the passed extent intersect.
   * @abstract
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {boolean} `true` if the geometry and the extent intersect.
   */ intersectsExtent(extent) {
        return (0, _utilJs.abstract)();
    }
    /**
   * Translate the geometry.  This modifies the geometry coordinates in place.  If
   * instead you want a new geometry, first `clone()` this geometry.
   * @abstract
   * @param {number} deltaX Delta X.
   * @param {number} deltaY Delta Y.
   * @api
   */ translate(deltaX, deltaY) {
        (0, _utilJs.abstract)();
    }
    /**
   * Transform each coordinate of the geometry from one coordinate reference
   * system to another. The geometry is modified in place.
   * For example, a line will be transformed to a line and a circle to a circle.
   * If you do not want the geometry modified in place, first `clone()` it and
   * then use this function on the clone.
   *
   * @param {import("../proj.js").ProjectionLike} source The current projection.  Can be a
   *     string identifier or a {@link module:ol/proj/Projection~Projection} object.
   * @param {import("../proj.js").ProjectionLike} destination The desired projection.  Can be a
   *     string identifier or a {@link module:ol/proj/Projection~Projection} object.
   * @return {Geometry} This geometry.  Note that original geometry is
   *     modified in place.
   * @api
   */ transform(source, destination) {
        /** @type {import("../proj/Projection.js").default} */ const sourceProj = (0, _projJs.get)(source);
        const transformFn = sourceProj.getUnits() == "tile-pixels" ? function(inCoordinates, outCoordinates, stride) {
            const pixelExtent = sourceProj.getExtent();
            const projectedExtent = sourceProj.getWorldExtent();
            const scale = (0, _extentJs.getHeight)(projectedExtent) / (0, _extentJs.getHeight)(pixelExtent);
            (0, _transformJs.compose)(tmpTransform, projectedExtent[0], projectedExtent[3], scale, -scale, 0, 0, 0);
            (0, _transformJs1.transform2D)(inCoordinates, 0, inCoordinates.length, stride, tmpTransform, outCoordinates);
            return (0, _projJs.getTransform)(sourceProj, destination)(inCoordinates, outCoordinates, stride);
        } : (0, _projJs.getTransform)(sourceProj, destination);
        this.applyTransform(transformFn);
        return this;
    }
}
exports.default = Geometry;

},{"../Object.js":"1zG8z","../util.js":"pLBjQ","../transform.js":"1BqUf","../extent.js":"6YrVc","../proj.js":"SznqC","../functions.js":"iqv8I","./flat/transform.js":"cDA2L","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cDA2L":[function(require,module,exports) {
/**
 * @module ol/geom/flat/transform
 */ /**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {import("../../transform.js").Transform} transform Transform.
 * @param {Array<number>} [dest] Destination.
 * @return {Array<number>} Transformed coordinates.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "transform2D", ()=>transform2D);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {number} angle Angle.
 * @param {Array<number>} anchor Rotation anchor point.
 * @param {Array<number>} [dest] Destination.
 * @return {Array<number>} Transformed coordinates.
 */ parcelHelpers.export(exports, "rotate", ()=>rotate);
/**
 * Scale the coordinates.
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {number} sx Scale factor in the x-direction.
 * @param {number} sy Scale factor in the y-direction.
 * @param {Array<number>} anchor Scale anchor point.
 * @param {Array<number>} [dest] Destination.
 * @return {Array<number>} Transformed coordinates.
 */ parcelHelpers.export(exports, "scale", ()=>scale);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {number} deltaX Delta X.
 * @param {number} deltaY Delta Y.
 * @param {Array<number>} [dest] Destination.
 * @return {Array<number>} Transformed coordinates.
 */ parcelHelpers.export(exports, "translate", ()=>translate);
function transform2D(flatCoordinates, offset, end, stride, transform, dest) {
    dest = dest ? dest : [];
    let i = 0;
    for(let j = offset; j < end; j += stride){
        const x = flatCoordinates[j];
        const y = flatCoordinates[j + 1];
        dest[i++] = transform[0] * x + transform[2] * y + transform[4];
        dest[i++] = transform[1] * x + transform[3] * y + transform[5];
    }
    if (dest && dest.length != i) dest.length = i;
    return dest;
}
function rotate(flatCoordinates, offset, end, stride, angle, anchor, dest) {
    dest = dest ? dest : [];
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    const anchorX = anchor[0];
    const anchorY = anchor[1];
    let i = 0;
    for(let j = offset; j < end; j += stride){
        const deltaX = flatCoordinates[j] - anchorX;
        const deltaY = flatCoordinates[j + 1] - anchorY;
        dest[i++] = anchorX + deltaX * cos - deltaY * sin;
        dest[i++] = anchorY + deltaX * sin + deltaY * cos;
        for(let k = j + 2; k < j + stride; ++k)dest[i++] = flatCoordinates[k];
    }
    if (dest && dest.length != i) dest.length = i;
    return dest;
}
function scale(flatCoordinates, offset, end, stride, sx, sy, anchor, dest) {
    dest = dest ? dest : [];
    const anchorX = anchor[0];
    const anchorY = anchor[1];
    let i = 0;
    for(let j = offset; j < end; j += stride){
        const deltaX = flatCoordinates[j] - anchorX;
        const deltaY = flatCoordinates[j + 1] - anchorY;
        dest[i++] = anchorX + sx * deltaX;
        dest[i++] = anchorY + sy * deltaY;
        for(let k = j + 2; k < j + stride; ++k)dest[i++] = flatCoordinates[k];
    }
    if (dest && dest.length != i) dest.length = i;
    return dest;
}
function translate(flatCoordinates, offset, end, stride, deltaX, deltaY, dest) {
    dest = dest ? dest : [];
    let i = 0;
    for(let j = offset; j < end; j += stride){
        dest[i++] = flatCoordinates[j] + deltaX;
        dest[i++] = flatCoordinates[j + 1] + deltaY;
        for(let k = j + 2; k < j + stride; ++k)dest[i++] = flatCoordinates[k];
    }
    if (dest && dest.length != i) dest.length = i;
    return dest;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fi6H5":[function(require,module,exports) {
/**
 * @module ol/geom/flat/closest
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Return the squared of the largest distance between any pair of consecutive
 * coordinates.
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {number} max Max squared delta.
 * @return {number} Max squared delta.
 */ parcelHelpers.export(exports, "maxSquaredDelta", ()=>maxSquaredDelta);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<number>} ends Ends.
 * @param {number} stride Stride.
 * @param {number} max Max squared delta.
 * @return {number} Max squared delta.
 */ parcelHelpers.export(exports, "arrayMaxSquaredDelta", ()=>arrayMaxSquaredDelta);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<Array<number>>} endss Endss.
 * @param {number} stride Stride.
 * @param {number} max Max squared delta.
 * @return {number} Max squared delta.
 */ parcelHelpers.export(exports, "multiArrayMaxSquaredDelta", ()=>multiArrayMaxSquaredDelta);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {number} maxDelta Max delta.
 * @param {boolean} isRing Is ring.
 * @param {number} x X.
 * @param {number} y Y.
 * @param {Array<number>} closestPoint Closest point.
 * @param {number} minSquaredDistance Minimum squared distance.
 * @param {Array<number>} [tmpPoint] Temporary point object.
 * @return {number} Minimum squared distance.
 */ parcelHelpers.export(exports, "assignClosestPoint", ()=>assignClosestPoint);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<number>} ends Ends.
 * @param {number} stride Stride.
 * @param {number} maxDelta Max delta.
 * @param {boolean} isRing Is ring.
 * @param {number} x X.
 * @param {number} y Y.
 * @param {Array<number>} closestPoint Closest point.
 * @param {number} minSquaredDistance Minimum squared distance.
 * @param {Array<number>} [tmpPoint] Temporary point object.
 * @return {number} Minimum squared distance.
 */ parcelHelpers.export(exports, "assignClosestArrayPoint", ()=>assignClosestArrayPoint);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<Array<number>>} endss Endss.
 * @param {number} stride Stride.
 * @param {number} maxDelta Max delta.
 * @param {boolean} isRing Is ring.
 * @param {number} x X.
 * @param {number} y Y.
 * @param {Array<number>} closestPoint Closest point.
 * @param {number} minSquaredDistance Minimum squared distance.
 * @param {Array<number>} [tmpPoint] Temporary point object.
 * @return {number} Minimum squared distance.
 */ parcelHelpers.export(exports, "assignClosestMultiArrayPoint", ()=>assignClosestMultiArrayPoint);
var _mathJs = require("../../math.js");
/**
 * Returns the point on the 2D line segment flatCoordinates[offset1] to
 * flatCoordinates[offset2] that is closest to the point (x, y).  Extra
 * dimensions are linearly interpolated.
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset1 Offset 1.
 * @param {number} offset2 Offset 2.
 * @param {number} stride Stride.
 * @param {number} x X.
 * @param {number} y Y.
 * @param {Array<number>} closestPoint Closest point.
 */ function assignClosest(flatCoordinates, offset1, offset2, stride, x, y, closestPoint) {
    const x1 = flatCoordinates[offset1];
    const y1 = flatCoordinates[offset1 + 1];
    const dx = flatCoordinates[offset2] - x1;
    const dy = flatCoordinates[offset2 + 1] - y1;
    let offset;
    if (dx === 0 && dy === 0) offset = offset1;
    else {
        const t = ((x - x1) * dx + (y - y1) * dy) / (dx * dx + dy * dy);
        if (t > 1) offset = offset2;
        else if (t > 0) {
            for(let i = 0; i < stride; ++i)closestPoint[i] = (0, _mathJs.lerp)(flatCoordinates[offset1 + i], flatCoordinates[offset2 + i], t);
            closestPoint.length = stride;
            return;
        } else offset = offset1;
    }
    for(let i = 0; i < stride; ++i)closestPoint[i] = flatCoordinates[offset + i];
    closestPoint.length = stride;
}
function maxSquaredDelta(flatCoordinates, offset, end, stride, max) {
    let x1 = flatCoordinates[offset];
    let y1 = flatCoordinates[offset + 1];
    for(offset += stride; offset < end; offset += stride){
        const x2 = flatCoordinates[offset];
        const y2 = flatCoordinates[offset + 1];
        const squaredDelta = (0, _mathJs.squaredDistance)(x1, y1, x2, y2);
        if (squaredDelta > max) max = squaredDelta;
        x1 = x2;
        y1 = y2;
    }
    return max;
}
function arrayMaxSquaredDelta(flatCoordinates, offset, ends, stride, max) {
    for(let i = 0, ii = ends.length; i < ii; ++i){
        const end = ends[i];
        max = maxSquaredDelta(flatCoordinates, offset, end, stride, max);
        offset = end;
    }
    return max;
}
function multiArrayMaxSquaredDelta(flatCoordinates, offset, endss, stride, max) {
    for(let i = 0, ii = endss.length; i < ii; ++i){
        const ends = endss[i];
        max = arrayMaxSquaredDelta(flatCoordinates, offset, ends, stride, max);
        offset = ends[ends.length - 1];
    }
    return max;
}
function assignClosestPoint(flatCoordinates, offset, end, stride, maxDelta, isRing, x, y, closestPoint, minSquaredDistance, tmpPoint) {
    if (offset == end) return minSquaredDistance;
    let i, squaredDistance;
    if (maxDelta === 0) {
        // All points are identical, so just test the first point.
        squaredDistance = (0, _mathJs.squaredDistance)(x, y, flatCoordinates[offset], flatCoordinates[offset + 1]);
        if (squaredDistance < minSquaredDistance) {
            for(i = 0; i < stride; ++i)closestPoint[i] = flatCoordinates[offset + i];
            closestPoint.length = stride;
            return squaredDistance;
        }
        return minSquaredDistance;
    }
    tmpPoint = tmpPoint ? tmpPoint : [
        NaN,
        NaN
    ];
    let index = offset + stride;
    while(index < end){
        assignClosest(flatCoordinates, index - stride, index, stride, x, y, tmpPoint);
        squaredDistance = (0, _mathJs.squaredDistance)(x, y, tmpPoint[0], tmpPoint[1]);
        if (squaredDistance < minSquaredDistance) {
            minSquaredDistance = squaredDistance;
            for(i = 0; i < stride; ++i)closestPoint[i] = tmpPoint[i];
            closestPoint.length = stride;
            index += stride;
        } else // Skip ahead multiple points, because we know that all the skipped
        // points cannot be any closer than the closest point we have found so
        // far.  We know this because we know how close the current point is, how
        // close the closest point we have found so far is, and the maximum
        // distance between consecutive points.  For example, if we're currently
        // at distance 10, the best we've found so far is 3, and that the maximum
        // distance between consecutive points is 2, then we'll need to skip at
        // least (10 - 3) / 2 == 3 (rounded down) points to have any chance of
        // finding a closer point.  We use Math.max(..., 1) to ensure that we
        // always advance at least one point, to avoid an infinite loop.
        index += stride * Math.max((Math.sqrt(squaredDistance) - Math.sqrt(minSquaredDistance)) / maxDelta | 0, 1);
    }
    if (isRing) {
        // Check the closing segment.
        assignClosest(flatCoordinates, end - stride, offset, stride, x, y, tmpPoint);
        squaredDistance = (0, _mathJs.squaredDistance)(x, y, tmpPoint[0], tmpPoint[1]);
        if (squaredDistance < minSquaredDistance) {
            minSquaredDistance = squaredDistance;
            for(i = 0; i < stride; ++i)closestPoint[i] = tmpPoint[i];
            closestPoint.length = stride;
        }
    }
    return minSquaredDistance;
}
function assignClosestArrayPoint(flatCoordinates, offset, ends, stride, maxDelta, isRing, x, y, closestPoint, minSquaredDistance, tmpPoint) {
    tmpPoint = tmpPoint ? tmpPoint : [
        NaN,
        NaN
    ];
    for(let i = 0, ii = ends.length; i < ii; ++i){
        const end = ends[i];
        minSquaredDistance = assignClosestPoint(flatCoordinates, offset, end, stride, maxDelta, isRing, x, y, closestPoint, minSquaredDistance, tmpPoint);
        offset = end;
    }
    return minSquaredDistance;
}
function assignClosestMultiArrayPoint(flatCoordinates, offset, endss, stride, maxDelta, isRing, x, y, closestPoint, minSquaredDistance, tmpPoint) {
    tmpPoint = tmpPoint ? tmpPoint : [
        NaN,
        NaN
    ];
    for(let i = 0, ii = endss.length; i < ii; ++i){
        const ends = endss[i];
        minSquaredDistance = assignClosestArrayPoint(flatCoordinates, offset, ends, stride, maxDelta, isRing, x, y, closestPoint, minSquaredDistance, tmpPoint);
        offset = ends[ends.length - 1];
    }
    return minSquaredDistance;
}

},{"../../math.js":"5jEFr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3TE5l":[function(require,module,exports) {
/**
 * @module ol/geom/flat/deflate
 */ /**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {import("../../coordinate.js").Coordinate} coordinate Coordinate.
 * @param {number} stride Stride.
 * @return {number} offset Offset.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "deflateCoordinate", ()=>deflateCoordinate);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<import("../../coordinate.js").Coordinate>} coordinates Coordinates.
 * @param {number} stride Stride.
 * @return {number} offset Offset.
 */ parcelHelpers.export(exports, "deflateCoordinates", ()=>deflateCoordinates);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<Array<import("../../coordinate.js").Coordinate>>} coordinatess Coordinatess.
 * @param {number} stride Stride.
 * @param {Array<number>} [ends] Ends.
 * @return {Array<number>} Ends.
 */ parcelHelpers.export(exports, "deflateCoordinatesArray", ()=>deflateCoordinatesArray);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<Array<Array<import("../../coordinate.js").Coordinate>>>} coordinatesss Coordinatesss.
 * @param {number} stride Stride.
 * @param {Array<Array<number>>} [endss] Endss.
 * @return {Array<Array<number>>} Endss.
 */ parcelHelpers.export(exports, "deflateMultiCoordinatesArray", ()=>deflateMultiCoordinatesArray);
function deflateCoordinate(flatCoordinates, offset, coordinate, stride) {
    for(let i = 0, ii = coordinate.length; i < ii; ++i)flatCoordinates[offset++] = coordinate[i];
    return offset;
}
function deflateCoordinates(flatCoordinates, offset, coordinates, stride) {
    for(let i = 0, ii = coordinates.length; i < ii; ++i){
        const coordinate = coordinates[i];
        for(let j = 0; j < stride; ++j)flatCoordinates[offset++] = coordinate[j];
    }
    return offset;
}
function deflateCoordinatesArray(flatCoordinates, offset, coordinatess, stride, ends) {
    ends = ends ? ends : [];
    let i = 0;
    for(let j = 0, jj = coordinatess.length; j < jj; ++j){
        const end = deflateCoordinates(flatCoordinates, offset, coordinatess[j], stride);
        ends[i++] = end;
        offset = end;
    }
    ends.length = i;
    return ends;
}
function deflateMultiCoordinatesArray(flatCoordinates, offset, coordinatesss, stride, endss) {
    endss = endss ? endss : [];
    let i = 0;
    for(let j = 0, jj = coordinatesss.length; j < jj; ++j){
        const ends = deflateCoordinatesArray(flatCoordinates, offset, coordinatesss[j], stride, endss[i]);
        if (ends.length === 0) ends[0] = offset;
        endss[i++] = ends;
        offset = ends[ends.length - 1];
    }
    endss.length = i;
    return endss;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jsqc5":[function(require,module,exports) {
/**
 * @module ol/geom/flat/simplify
 */ // Based on simplify-js https://github.com/mourner/simplify-js
// Copyright (c) 2012, Vladimir Agafonkin
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//    1. Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//
//    2. Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {number} squaredTolerance Squared tolerance.
 * @param {boolean} highQuality Highest quality.
 * @param {Array<number>} [simplifiedFlatCoordinates] Simplified flat
 *     coordinates.
 * @return {Array<number>} Simplified line string.
 */ parcelHelpers.export(exports, "simplifyLineString", ()=>simplifyLineString);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {number} squaredTolerance Squared tolerance.
 * @param {Array<number>} simplifiedFlatCoordinates Simplified flat
 *     coordinates.
 * @param {number} simplifiedOffset Simplified offset.
 * @return {number} Simplified offset.
 */ parcelHelpers.export(exports, "douglasPeucker", ()=>douglasPeucker);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<number>} ends Ends.
 * @param {number} stride Stride.
 * @param {number} squaredTolerance Squared tolerance.
 * @param {Array<number>} simplifiedFlatCoordinates Simplified flat
 *     coordinates.
 * @param {number} simplifiedOffset Simplified offset.
 * @param {Array<number>} simplifiedEnds Simplified ends.
 * @return {number} Simplified offset.
 */ parcelHelpers.export(exports, "douglasPeuckerArray", ()=>douglasPeuckerArray);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<Array<number>>} endss Endss.
 * @param {number} stride Stride.
 * @param {number} squaredTolerance Squared tolerance.
 * @param {Array<number>} simplifiedFlatCoordinates Simplified flat
 *     coordinates.
 * @param {number} simplifiedOffset Simplified offset.
 * @param {Array<Array<number>>} simplifiedEndss Simplified endss.
 * @return {number} Simplified offset.
 */ parcelHelpers.export(exports, "douglasPeuckerMultiArray", ()=>douglasPeuckerMultiArray);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {number} squaredTolerance Squared tolerance.
 * @param {Array<number>} simplifiedFlatCoordinates Simplified flat
 *     coordinates.
 * @param {number} simplifiedOffset Simplified offset.
 * @return {number} Simplified offset.
 */ parcelHelpers.export(exports, "radialDistance", ()=>radialDistance);
/**
 * @param {number} value Value.
 * @param {number} tolerance Tolerance.
 * @return {number} Rounded value.
 */ parcelHelpers.export(exports, "snap", ()=>snap);
/**
 * Simplifies a line string using an algorithm designed by Tim Schaub.
 * Coordinates are snapped to the nearest value in a virtual grid and
 * consecutive duplicate coordinates are discarded.  This effectively preserves
 * topology as the simplification of any subsection of a line string is
 * independent of the rest of the line string.  This means that, for examples,
 * the common edge between two polygons will be simplified to the same line
 * string independently in both polygons.  This implementation uses a single
 * pass over the coordinates and eliminates intermediate collinear points.
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {number} tolerance Tolerance.
 * @param {Array<number>} simplifiedFlatCoordinates Simplified flat
 *     coordinates.
 * @param {number} simplifiedOffset Simplified offset.
 * @return {number} Simplified offset.
 */ parcelHelpers.export(exports, "quantize", ()=>quantize);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<number>} ends Ends.
 * @param {number} stride Stride.
 * @param {number} tolerance Tolerance.
 * @param {Array<number>} simplifiedFlatCoordinates Simplified flat
 *     coordinates.
 * @param {number} simplifiedOffset Simplified offset.
 * @param {Array<number>} simplifiedEnds Simplified ends.
 * @return {number} Simplified offset.
 */ parcelHelpers.export(exports, "quantizeArray", ()=>quantizeArray);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<Array<number>>} endss Endss.
 * @param {number} stride Stride.
 * @param {number} tolerance Tolerance.
 * @param {Array<number>} simplifiedFlatCoordinates Simplified flat
 *     coordinates.
 * @param {number} simplifiedOffset Simplified offset.
 * @param {Array<Array<number>>} simplifiedEndss Simplified endss.
 * @return {number} Simplified offset.
 */ parcelHelpers.export(exports, "quantizeMultiArray", ()=>quantizeMultiArray);
var _mathJs = require("../../math.js");
function simplifyLineString(flatCoordinates, offset, end, stride, squaredTolerance, highQuality, simplifiedFlatCoordinates) {
    simplifiedFlatCoordinates = simplifiedFlatCoordinates !== undefined ? simplifiedFlatCoordinates : [];
    if (!highQuality) {
        end = radialDistance(flatCoordinates, offset, end, stride, squaredTolerance, simplifiedFlatCoordinates, 0);
        flatCoordinates = simplifiedFlatCoordinates;
        offset = 0;
        stride = 2;
    }
    simplifiedFlatCoordinates.length = douglasPeucker(flatCoordinates, offset, end, stride, squaredTolerance, simplifiedFlatCoordinates, 0);
    return simplifiedFlatCoordinates;
}
function douglasPeucker(flatCoordinates, offset, end, stride, squaredTolerance, simplifiedFlatCoordinates, simplifiedOffset) {
    const n = (end - offset) / stride;
    if (n < 3) {
        for(; offset < end; offset += stride){
            simplifiedFlatCoordinates[simplifiedOffset++] = flatCoordinates[offset];
            simplifiedFlatCoordinates[simplifiedOffset++] = flatCoordinates[offset + 1];
        }
        return simplifiedOffset;
    }
    /** @type {Array<number>} */ const markers = new Array(n);
    markers[0] = 1;
    markers[n - 1] = 1;
    /** @type {Array<number>} */ const stack = [
        offset,
        end - stride
    ];
    let index = 0;
    while(stack.length > 0){
        const last = stack.pop();
        const first = stack.pop();
        let maxSquaredDistance = 0;
        const x1 = flatCoordinates[first];
        const y1 = flatCoordinates[first + 1];
        const x2 = flatCoordinates[last];
        const y2 = flatCoordinates[last + 1];
        for(let i = first + stride; i < last; i += stride){
            const x = flatCoordinates[i];
            const y = flatCoordinates[i + 1];
            const squaredDistance = (0, _mathJs.squaredSegmentDistance)(x, y, x1, y1, x2, y2);
            if (squaredDistance > maxSquaredDistance) {
                index = i;
                maxSquaredDistance = squaredDistance;
            }
        }
        if (maxSquaredDistance > squaredTolerance) {
            markers[(index - offset) / stride] = 1;
            if (first + stride < index) stack.push(first, index);
            if (index + stride < last) stack.push(index, last);
        }
    }
    for(let i = 0; i < n; ++i)if (markers[i]) {
        simplifiedFlatCoordinates[simplifiedOffset++] = flatCoordinates[offset + i * stride];
        simplifiedFlatCoordinates[simplifiedOffset++] = flatCoordinates[offset + i * stride + 1];
    }
    return simplifiedOffset;
}
function douglasPeuckerArray(flatCoordinates, offset, ends, stride, squaredTolerance, simplifiedFlatCoordinates, simplifiedOffset, simplifiedEnds) {
    for(let i = 0, ii = ends.length; i < ii; ++i){
        const end = ends[i];
        simplifiedOffset = douglasPeucker(flatCoordinates, offset, end, stride, squaredTolerance, simplifiedFlatCoordinates, simplifiedOffset);
        simplifiedEnds.push(simplifiedOffset);
        offset = end;
    }
    return simplifiedOffset;
}
function douglasPeuckerMultiArray(flatCoordinates, offset, endss, stride, squaredTolerance, simplifiedFlatCoordinates, simplifiedOffset, simplifiedEndss) {
    for(let i = 0, ii = endss.length; i < ii; ++i){
        const ends = endss[i];
        const simplifiedEnds = [];
        simplifiedOffset = douglasPeuckerArray(flatCoordinates, offset, ends, stride, squaredTolerance, simplifiedFlatCoordinates, simplifiedOffset, simplifiedEnds);
        simplifiedEndss.push(simplifiedEnds);
        offset = ends[ends.length - 1];
    }
    return simplifiedOffset;
}
function radialDistance(flatCoordinates, offset, end, stride, squaredTolerance, simplifiedFlatCoordinates, simplifiedOffset) {
    if (end <= offset + stride) {
        // zero or one point, no simplification possible, so copy and return
        for(; offset < end; offset += stride){
            simplifiedFlatCoordinates[simplifiedOffset++] = flatCoordinates[offset];
            simplifiedFlatCoordinates[simplifiedOffset++] = flatCoordinates[offset + 1];
        }
        return simplifiedOffset;
    }
    let x1 = flatCoordinates[offset];
    let y1 = flatCoordinates[offset + 1];
    // copy first point
    simplifiedFlatCoordinates[simplifiedOffset++] = x1;
    simplifiedFlatCoordinates[simplifiedOffset++] = y1;
    let x2 = x1;
    let y2 = y1;
    for(offset += stride; offset < end; offset += stride){
        x2 = flatCoordinates[offset];
        y2 = flatCoordinates[offset + 1];
        if ((0, _mathJs.squaredDistance)(x1, y1, x2, y2) > squaredTolerance) {
            // copy point at offset
            simplifiedFlatCoordinates[simplifiedOffset++] = x2;
            simplifiedFlatCoordinates[simplifiedOffset++] = y2;
            x1 = x2;
            y1 = y2;
        }
    }
    if (x2 != x1 || y2 != y1) {
        // copy last point
        simplifiedFlatCoordinates[simplifiedOffset++] = x2;
        simplifiedFlatCoordinates[simplifiedOffset++] = y2;
    }
    return simplifiedOffset;
}
function snap(value, tolerance) {
    return tolerance * Math.round(value / tolerance);
}
function quantize(flatCoordinates, offset, end, stride, tolerance, simplifiedFlatCoordinates, simplifiedOffset) {
    // do nothing if the line is empty
    if (offset == end) return simplifiedOffset;
    // snap the first coordinate (P1)
    let x1 = snap(flatCoordinates[offset], tolerance);
    let y1 = snap(flatCoordinates[offset + 1], tolerance);
    offset += stride;
    // add the first coordinate to the output
    simplifiedFlatCoordinates[simplifiedOffset++] = x1;
    simplifiedFlatCoordinates[simplifiedOffset++] = y1;
    // find the next coordinate that does not snap to the same value as the first
    // coordinate (P2)
    let x2, y2;
    do {
        x2 = snap(flatCoordinates[offset], tolerance);
        y2 = snap(flatCoordinates[offset + 1], tolerance);
        offset += stride;
        if (offset == end) {
            // all coordinates snap to the same value, the line collapses to a point
            // push the last snapped value anyway to ensure that the output contains
            // at least two points
            // FIXME should we really return at least two points anyway?
            simplifiedFlatCoordinates[simplifiedOffset++] = x2;
            simplifiedFlatCoordinates[simplifiedOffset++] = y2;
            return simplifiedOffset;
        }
    }while (x2 == x1 && y2 == y1);
    while(offset < end){
        // snap the next coordinate (P3)
        const x3 = snap(flatCoordinates[offset], tolerance);
        const y3 = snap(flatCoordinates[offset + 1], tolerance);
        offset += stride;
        // skip P3 if it is equal to P2
        if (x3 == x2 && y3 == y2) continue;
        // calculate the delta between P1 and P2
        const dx1 = x2 - x1;
        const dy1 = y2 - y1;
        // calculate the delta between P3 and P1
        const dx2 = x3 - x1;
        const dy2 = y3 - y1;
        // if P1, P2, and P3 are colinear and P3 is further from P1 than P2 is from
        // P1 in the same direction then P2 is on the straight line between P1 and
        // P3
        if (dx1 * dy2 == dy1 * dx2 && (dx1 < 0 && dx2 < dx1 || dx1 == dx2 || dx1 > 0 && dx2 > dx1) && (dy1 < 0 && dy2 < dy1 || dy1 == dy2 || dy1 > 0 && dy2 > dy1)) {
            // discard P2 and set P2 = P3
            x2 = x3;
            y2 = y3;
            continue;
        }
        // either P1, P2, and P3 are not colinear, or they are colinear but P3 is
        // between P3 and P1 or on the opposite half of the line to P2.  add P2,
        // and continue with P1 = P2 and P2 = P3
        simplifiedFlatCoordinates[simplifiedOffset++] = x2;
        simplifiedFlatCoordinates[simplifiedOffset++] = y2;
        x1 = x2;
        y1 = y2;
        x2 = x3;
        y2 = y3;
    }
    // add the last point (P2)
    simplifiedFlatCoordinates[simplifiedOffset++] = x2;
    simplifiedFlatCoordinates[simplifiedOffset++] = y2;
    return simplifiedOffset;
}
function quantizeArray(flatCoordinates, offset, ends, stride, tolerance, simplifiedFlatCoordinates, simplifiedOffset, simplifiedEnds) {
    for(let i = 0, ii = ends.length; i < ii; ++i){
        const end = ends[i];
        simplifiedOffset = quantize(flatCoordinates, offset, end, stride, tolerance, simplifiedFlatCoordinates, simplifiedOffset);
        simplifiedEnds.push(simplifiedOffset);
        offset = end;
    }
    return simplifiedOffset;
}
function quantizeMultiArray(flatCoordinates, offset, endss, stride, tolerance, simplifiedFlatCoordinates, simplifiedOffset, simplifiedEndss) {
    for(let i = 0, ii = endss.length; i < ii; ++i){
        const ends = endss[i];
        const simplifiedEnds = [];
        simplifiedOffset = quantizeArray(flatCoordinates, offset, ends, stride, tolerance, simplifiedFlatCoordinates, simplifiedOffset, simplifiedEnds);
        simplifiedEndss.push(simplifiedEnds);
        offset = ends[ends.length - 1];
    }
    return simplifiedOffset;
}

},{"../../math.js":"5jEFr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Rpju":[function(require,module,exports) {
/**
 * @module ol/geom/flat/inflate
 */ /**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {Array<import("../../coordinate.js").Coordinate>} [coordinates] Coordinates.
 * @return {Array<import("../../coordinate.js").Coordinate>} Coordinates.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "inflateCoordinates", ()=>inflateCoordinates);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<number>} ends Ends.
 * @param {number} stride Stride.
 * @param {Array<Array<import("../../coordinate.js").Coordinate>>} [coordinatess] Coordinatess.
 * @return {Array<Array<import("../../coordinate.js").Coordinate>>} Coordinatess.
 */ parcelHelpers.export(exports, "inflateCoordinatesArray", ()=>inflateCoordinatesArray);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<Array<number>>} endss Endss.
 * @param {number} stride Stride.
 * @param {Array<Array<Array<import("../../coordinate.js").Coordinate>>>} [coordinatesss]
 *     Coordinatesss.
 * @return {Array<Array<Array<import("../../coordinate.js").Coordinate>>>} Coordinatesss.
 */ parcelHelpers.export(exports, "inflateMultiCoordinatesArray", ()=>inflateMultiCoordinatesArray);
function inflateCoordinates(flatCoordinates, offset, end, stride, coordinates) {
    coordinates = coordinates !== undefined ? coordinates : [];
    let i = 0;
    for(let j = offset; j < end; j += stride)coordinates[i++] = flatCoordinates.slice(j, j + stride);
    coordinates.length = i;
    return coordinates;
}
function inflateCoordinatesArray(flatCoordinates, offset, ends, stride, coordinatess) {
    coordinatess = coordinatess !== undefined ? coordinatess : [];
    let i = 0;
    for(let j = 0, jj = ends.length; j < jj; ++j){
        const end = ends[j];
        coordinatess[i++] = inflateCoordinates(flatCoordinates, offset, end, stride, coordinatess[i]);
        offset = end;
    }
    coordinatess.length = i;
    return coordinatess;
}
function inflateMultiCoordinatesArray(flatCoordinates, offset, endss, stride, coordinatesss) {
    coordinatesss = coordinatesss !== undefined ? coordinatesss : [];
    let i = 0;
    for(let j = 0, jj = endss.length; j < jj; ++j){
        const ends = endss[j];
        coordinatesss[i++] = ends.length === 1 && ends[0] === offset ? [] : inflateCoordinatesArray(flatCoordinates, offset, ends, stride, coordinatesss[i]);
        offset = ends[ends.length - 1];
    }
    coordinatesss.length = i;
    return coordinatesss;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7fT8A":[function(require,module,exports) {
/**
 * @module ol/geom/flat/area
 */ /**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @return {number} Area.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "linearRing", ()=>linearRing);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<number>} ends Ends.
 * @param {number} stride Stride.
 * @return {number} Area.
 */ parcelHelpers.export(exports, "linearRings", ()=>linearRings);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<Array<number>>} endss Endss.
 * @param {number} stride Stride.
 * @return {number} Area.
 */ parcelHelpers.export(exports, "linearRingss", ()=>linearRingss);
function linearRing(flatCoordinates, offset, end, stride) {
    let twiceArea = 0;
    let x1 = flatCoordinates[end - stride];
    let y1 = flatCoordinates[end - stride + 1];
    for(; offset < end; offset += stride){
        const x2 = flatCoordinates[offset];
        const y2 = flatCoordinates[offset + 1];
        twiceArea += y1 * x2 - x1 * y2;
        x1 = x2;
        y1 = y2;
    }
    return twiceArea / 2;
}
function linearRings(flatCoordinates, offset, ends, stride) {
    let area = 0;
    for(let i = 0, ii = ends.length; i < ii; ++i){
        const end = ends[i];
        area += linearRing(flatCoordinates, offset, end, stride);
        offset = end;
    }
    return area;
}
function linearRingss(flatCoordinates, offset, endss, stride) {
    let area = 0;
    for(let i = 0, ii = endss.length; i < ii; ++i){
        const ends = endss[i];
        area += linearRings(flatCoordinates, offset, ends, stride);
        offset = ends[ends.length - 1];
    }
    return area;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hx2Ar":[function(require,module,exports) {
/**
 * @module ol/geom/Point
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _simpleGeometryJs = require("./SimpleGeometry.js");
var _simpleGeometryJsDefault = parcelHelpers.interopDefault(_simpleGeometryJs);
var _extentJs = require("../extent.js");
var _deflateJs = require("./flat/deflate.js");
var _mathJs = require("../math.js");
/**
 * @classdesc
 * Point geometry.
 *
 * @api
 */ class Point extends (0, _simpleGeometryJsDefault.default) {
    /**
   * @param {import("../coordinate.js").Coordinate} coordinates Coordinates.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   */ constructor(coordinates, layout){
        super();
        this.setCoordinates(coordinates, layout);
    }
    /**
   * Make a complete copy of the geometry.
   * @return {!Point} Clone.
   * @api
   */ clone() {
        const point = new Point(this.flatCoordinates.slice(), this.layout);
        point.applyProperties(this);
        return point;
    }
    /**
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   */ closestPointXY(x, y, closestPoint, minSquaredDistance) {
        const flatCoordinates = this.flatCoordinates;
        const squaredDistance = (0, _mathJs.squaredDistance)(x, y, flatCoordinates[0], flatCoordinates[1]);
        if (squaredDistance < minSquaredDistance) {
            const stride = this.stride;
            for(let i = 0; i < stride; ++i)closestPoint[i] = flatCoordinates[i];
            closestPoint.length = stride;
            return squaredDistance;
        }
        return minSquaredDistance;
    }
    /**
   * Return the coordinate of the point.
   * @return {import("../coordinate.js").Coordinate} Coordinates.
   * @api
   */ getCoordinates() {
        return !this.flatCoordinates ? [] : this.flatCoordinates.slice();
    }
    /**
   * @param {import("../extent.js").Extent} extent Extent.
   * @protected
   * @return {import("../extent.js").Extent} extent Extent.
   */ computeExtent(extent) {
        return (0, _extentJs.createOrUpdateFromCoordinate)(this.flatCoordinates, extent);
    }
    /**
   * Get the type of this geometry.
   * @return {import("./Geometry.js").Type} Geometry type.
   * @api
   */ getType() {
        return "Point";
    }
    /**
   * Test if the geometry and the passed extent intersect.
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {boolean} `true` if the geometry and the extent intersect.
   * @api
   */ intersectsExtent(extent) {
        return (0, _extentJs.containsXY)(extent, this.flatCoordinates[0], this.flatCoordinates[1]);
    }
    /**
   * @param {!Array<*>} coordinates Coordinates.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   * @api
   */ setCoordinates(coordinates, layout) {
        this.setLayout(layout, coordinates, 0);
        if (!this.flatCoordinates) this.flatCoordinates = [];
        this.flatCoordinates.length = (0, _deflateJs.deflateCoordinate)(this.flatCoordinates, 0, coordinates, this.stride);
        this.changed();
    }
}
exports.default = Point;

},{"./SimpleGeometry.js":"hLwk3","../extent.js":"6YrVc","./flat/deflate.js":"3TE5l","../math.js":"5jEFr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"59VP9":[function(require,module,exports) {
/**
 * @module ol/geom/flat/interiorpoint
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Calculates a point that is likely to lie in the interior of the linear rings.
 * Inspired by JTS's com.vividsolutions.jts.geom.Geometry#getInteriorPoint.
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<number>} ends Ends.
 * @param {number} stride Stride.
 * @param {Array<number>} flatCenters Flat centers.
 * @param {number} flatCentersOffset Flat center offset.
 * @param {Array<number>} [dest] Destination.
 * @return {Array<number>} Destination point as XYM coordinate, where M is the
 * length of the horizontal intersection that the point belongs to.
 */ parcelHelpers.export(exports, "getInteriorPointOfArray", ()=>getInteriorPointOfArray);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<Array<number>>} endss Endss.
 * @param {number} stride Stride.
 * @param {Array<number>} flatCenters Flat centers.
 * @return {Array<number>} Interior points as XYM coordinates, where M is the
 * length of the horizontal intersection that the point belongs to.
 */ parcelHelpers.export(exports, "getInteriorPointsOfMultiArray", ()=>getInteriorPointsOfMultiArray);
var _arrayJs = require("../../array.js");
var _containsJs = require("./contains.js");
function getInteriorPointOfArray(flatCoordinates, offset, ends, stride, flatCenters, flatCentersOffset, dest) {
    let i, ii, x, x1, x2, y1, y2;
    const y = flatCenters[flatCentersOffset + 1];
    /** @type {Array<number>} */ const intersections = [];
    // Calculate intersections with the horizontal line
    for(let r = 0, rr = ends.length; r < rr; ++r){
        const end = ends[r];
        x1 = flatCoordinates[end - stride];
        y1 = flatCoordinates[end - stride + 1];
        for(i = offset; i < end; i += stride){
            x2 = flatCoordinates[i];
            y2 = flatCoordinates[i + 1];
            if (y <= y1 && y2 <= y || y1 <= y && y <= y2) {
                x = (y - y1) / (y2 - y1) * (x2 - x1) + x1;
                intersections.push(x);
            }
            x1 = x2;
            y1 = y2;
        }
    }
    // Find the longest segment of the horizontal line that has its center point
    // inside the linear ring.
    let pointX = NaN;
    let maxSegmentLength = -Infinity;
    intersections.sort((0, _arrayJs.ascending));
    x1 = intersections[0];
    for(i = 1, ii = intersections.length; i < ii; ++i){
        x2 = intersections[i];
        const segmentLength = Math.abs(x2 - x1);
        if (segmentLength > maxSegmentLength) {
            x = (x1 + x2) / 2;
            if ((0, _containsJs.linearRingsContainsXY)(flatCoordinates, offset, ends, stride, x, y)) {
                pointX = x;
                maxSegmentLength = segmentLength;
            }
        }
        x1 = x2;
    }
    if (isNaN(pointX)) // There is no horizontal line that has its center point inside the linear
    // ring.  Use the center of the the linear ring's extent.
    pointX = flatCenters[flatCentersOffset];
    if (dest) {
        dest.push(pointX, y, maxSegmentLength);
        return dest;
    }
    return [
        pointX,
        y,
        maxSegmentLength
    ];
}
function getInteriorPointsOfMultiArray(flatCoordinates, offset, endss, stride, flatCenters) {
    let interiorPoints = [];
    for(let i = 0, ii = endss.length; i < ii; ++i){
        const ends = endss[i];
        interiorPoints = getInteriorPointOfArray(flatCoordinates, offset, ends, stride, flatCenters, 2 * i, interiorPoints);
        offset = ends[ends.length - 1];
    }
    return interiorPoints;
}

},{"../../array.js":"1Fbic","./contains.js":"eArlN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eArlN":[function(require,module,exports) {
/**
 * @module ol/geom/flat/contains
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {import("../../extent.js").Extent} extent Extent.
 * @return {boolean} Contains extent.
 */ parcelHelpers.export(exports, "linearRingContainsExtent", ()=>linearRingContainsExtent);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {number} x X.
 * @param {number} y Y.
 * @return {boolean} Contains (x, y).
 */ parcelHelpers.export(exports, "linearRingContainsXY", ()=>linearRingContainsXY);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<number>} ends Ends.
 * @param {number} stride Stride.
 * @param {number} x X.
 * @param {number} y Y.
 * @return {boolean} Contains (x, y).
 */ parcelHelpers.export(exports, "linearRingsContainsXY", ()=>linearRingsContainsXY);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<Array<number>>} endss Endss.
 * @param {number} stride Stride.
 * @param {number} x X.
 * @param {number} y Y.
 * @return {boolean} Contains (x, y).
 */ parcelHelpers.export(exports, "linearRingssContainsXY", ()=>linearRingssContainsXY);
var _extentJs = require("../../extent.js");
function linearRingContainsExtent(flatCoordinates, offset, end, stride, extent) {
    const outside = (0, _extentJs.forEachCorner)(extent, /**
     * @param {import("../../coordinate.js").Coordinate} coordinate Coordinate.
     * @return {boolean} Contains (x, y).
     */ function(coordinate) {
        return !linearRingContainsXY(flatCoordinates, offset, end, stride, coordinate[0], coordinate[1]);
    });
    return !outside;
}
function linearRingContainsXY(flatCoordinates, offset, end, stride, x, y) {
    // https://geomalgorithms.com/a03-_inclusion.html
    // Copyright 2000 softSurfer, 2012 Dan Sunday
    // This code may be freely used and modified for any purpose
    // providing that this copyright notice is included with it.
    // SoftSurfer makes no warranty for this code, and cannot be held
    // liable for any real or imagined damage resulting from its use.
    // Users of this code must verify correctness for their application.
    let wn = 0;
    let x1 = flatCoordinates[end - stride];
    let y1 = flatCoordinates[end - stride + 1];
    for(; offset < end; offset += stride){
        const x2 = flatCoordinates[offset];
        const y2 = flatCoordinates[offset + 1];
        if (y1 <= y) {
            if (y2 > y && (x2 - x1) * (y - y1) - (x - x1) * (y2 - y1) > 0) wn++;
        } else if (y2 <= y && (x2 - x1) * (y - y1) - (x - x1) * (y2 - y1) < 0) wn--;
        x1 = x2;
        y1 = y2;
    }
    return wn !== 0;
}
function linearRingsContainsXY(flatCoordinates, offset, ends, stride, x, y) {
    if (ends.length === 0) return false;
    if (!linearRingContainsXY(flatCoordinates, offset, ends[0], stride, x, y)) return false;
    for(let i = 1, ii = ends.length; i < ii; ++i){
        if (linearRingContainsXY(flatCoordinates, ends[i - 1], ends[i], stride, x, y)) return false;
    }
    return true;
}
function linearRingssContainsXY(flatCoordinates, offset, endss, stride, x, y) {
    if (endss.length === 0) return false;
    for(let i = 0, ii = endss.length; i < ii; ++i){
        const ends = endss[i];
        if (linearRingsContainsXY(flatCoordinates, offset, ends, stride, x, y)) return true;
        offset = ends[ends.length - 1];
    }
    return false;
}

},{"../../extent.js":"6YrVc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7x08H":[function(require,module,exports) {
/**
 * @module ol/geom/flat/intersectsextent
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {import("../../extent.js").Extent} extent Extent.
 * @return {boolean} True if the geometry and the extent intersect.
 */ parcelHelpers.export(exports, "intersectsLineString", ()=>intersectsLineString);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<number>} ends Ends.
 * @param {number} stride Stride.
 * @param {import("../../extent.js").Extent} extent Extent.
 * @return {boolean} True if the geometry and the extent intersect.
 */ parcelHelpers.export(exports, "intersectsLineStringArray", ()=>intersectsLineStringArray);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {import("../../extent.js").Extent} extent Extent.
 * @return {boolean} True if the geometry and the extent intersect.
 */ parcelHelpers.export(exports, "intersectsLinearRing", ()=>intersectsLinearRing);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<number>} ends Ends.
 * @param {number} stride Stride.
 * @param {import("../../extent.js").Extent} extent Extent.
 * @return {boolean} True if the geometry and the extent intersect.
 */ parcelHelpers.export(exports, "intersectsLinearRingArray", ()=>intersectsLinearRingArray);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<Array<number>>} endss Endss.
 * @param {number} stride Stride.
 * @param {import("../../extent.js").Extent} extent Extent.
 * @return {boolean} True if the geometry and the extent intersect.
 */ parcelHelpers.export(exports, "intersectsLinearRingMultiArray", ()=>intersectsLinearRingMultiArray);
var _extentJs = require("../../extent.js");
var _segmentsJs = require("./segments.js");
var _containsJs = require("./contains.js");
function intersectsLineString(flatCoordinates, offset, end, stride, extent) {
    const coordinatesExtent = (0, _extentJs.extendFlatCoordinates)((0, _extentJs.createEmpty)(), flatCoordinates, offset, end, stride);
    if (!(0, _extentJs.intersects)(extent, coordinatesExtent)) return false;
    if ((0, _extentJs.containsExtent)(extent, coordinatesExtent)) return true;
    if (coordinatesExtent[0] >= extent[0] && coordinatesExtent[2] <= extent[2]) return true;
    if (coordinatesExtent[1] >= extent[1] && coordinatesExtent[3] <= extent[3]) return true;
    return (0, _segmentsJs.forEach)(flatCoordinates, offset, end, stride, /**
     * @param {import("../../coordinate.js").Coordinate} point1 Start point.
     * @param {import("../../coordinate.js").Coordinate} point2 End point.
     * @return {boolean} `true` if the segment and the extent intersect,
     *     `false` otherwise.
     */ function(point1, point2) {
        return (0, _extentJs.intersectsSegment)(extent, point1, point2);
    });
}
function intersectsLineStringArray(flatCoordinates, offset, ends, stride, extent) {
    for(let i = 0, ii = ends.length; i < ii; ++i){
        if (intersectsLineString(flatCoordinates, offset, ends[i], stride, extent)) return true;
        offset = ends[i];
    }
    return false;
}
function intersectsLinearRing(flatCoordinates, offset, end, stride, extent) {
    if (intersectsLineString(flatCoordinates, offset, end, stride, extent)) return true;
    if ((0, _containsJs.linearRingContainsXY)(flatCoordinates, offset, end, stride, extent[0], extent[1])) return true;
    if ((0, _containsJs.linearRingContainsXY)(flatCoordinates, offset, end, stride, extent[0], extent[3])) return true;
    if ((0, _containsJs.linearRingContainsXY)(flatCoordinates, offset, end, stride, extent[2], extent[1])) return true;
    if ((0, _containsJs.linearRingContainsXY)(flatCoordinates, offset, end, stride, extent[2], extent[3])) return true;
    return false;
}
function intersectsLinearRingArray(flatCoordinates, offset, ends, stride, extent) {
    if (!intersectsLinearRing(flatCoordinates, offset, ends[0], stride, extent)) return false;
    if (ends.length === 1) return true;
    for(let i = 1, ii = ends.length; i < ii; ++i)if ((0, _containsJs.linearRingContainsExtent)(flatCoordinates, ends[i - 1], ends[i], stride, extent)) {
        if (!intersectsLineString(flatCoordinates, ends[i - 1], ends[i], stride, extent)) return false;
    }
    return true;
}
function intersectsLinearRingMultiArray(flatCoordinates, offset, endss, stride, extent) {
    for(let i = 0, ii = endss.length; i < ii; ++i){
        const ends = endss[i];
        if (intersectsLinearRingArray(flatCoordinates, offset, ends, stride, extent)) return true;
        offset = ends[ends.length - 1];
    }
    return false;
}

},{"../../extent.js":"6YrVc","./segments.js":"e7gWa","./contains.js":"eArlN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e7gWa":[function(require,module,exports) {
/**
 * @module ol/geom/flat/segments
 */ /**
 * This function calls `callback` for each segment of the flat coordinates
 * array. If the callback returns a truthy value the function returns that
 * value immediately. Otherwise the function returns `false`.
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {function(import("../../coordinate.js").Coordinate, import("../../coordinate.js").Coordinate): T} callback Function
 *     called for each segment.
 * @return {T|boolean} Value.
 * @template T
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "forEach", ()=>forEach);
function forEach(flatCoordinates, offset, end, stride, callback) {
    let ret;
    offset += stride;
    for(; offset < end; offset += stride){
        ret = callback(flatCoordinates.slice(offset - stride, offset), flatCoordinates.slice(offset, offset + stride));
        if (ret) return ret;
    }
    return false;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"btd6s":[function(require,module,exports) {
/**
 * @module ol/geom/flat/orient
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Is the linear ring oriented clockwise in a coordinate system with a bottom-left
 * coordinate origin? For a coordinate system with a top-left coordinate origin,
 * the ring's orientation is clockwise when this function returns false.
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @return {boolean} Is clockwise.
 */ parcelHelpers.export(exports, "linearRingIsClockwise", ()=>linearRingIsClockwise);
/**
 * Determines if linear rings are oriented.  By default, left-hand orientation
 * is tested (first ring must be clockwise, remaining rings counter-clockwise).
 * To test for right-hand orientation, use the `right` argument.
 *
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<number>} ends Array of end indexes.
 * @param {number} stride Stride.
 * @param {boolean} [right] Test for right-hand orientation
 *     (counter-clockwise exterior ring and clockwise interior rings).
 * @return {boolean} Rings are correctly oriented.
 */ parcelHelpers.export(exports, "linearRingsAreOriented", ()=>linearRingsAreOriented);
/**
 * Determines if linear rings are oriented.  By default, left-hand orientation
 * is tested (first ring must be clockwise, remaining rings counter-clockwise).
 * To test for right-hand orientation, use the `right` argument.
 *
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<Array<number>>} endss Array of array of end indexes.
 * @param {number} stride Stride.
 * @param {boolean} [right] Test for right-hand orientation
 *     (counter-clockwise exterior ring and clockwise interior rings).
 * @return {boolean} Rings are correctly oriented.
 */ parcelHelpers.export(exports, "linearRingssAreOriented", ()=>linearRingssAreOriented);
/**
 * Orient coordinates in a flat array of linear rings.  By default, rings
 * are oriented following the left-hand rule (clockwise for exterior and
 * counter-clockwise for interior rings).  To orient according to the
 * right-hand rule, use the `right` argument.
 *
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<number>} ends Ends.
 * @param {number} stride Stride.
 * @param {boolean} [right] Follow the right-hand rule for orientation.
 * @return {number} End.
 */ parcelHelpers.export(exports, "orientLinearRings", ()=>orientLinearRings);
/**
 * Orient coordinates in a flat array of linear rings.  By default, rings
 * are oriented following the left-hand rule (clockwise for exterior and
 * counter-clockwise for interior rings).  To orient according to the
 * right-hand rule, use the `right` argument.
 *
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<Array<number>>} endss Array of array of end indexes.
 * @param {number} stride Stride.
 * @param {boolean} [right] Follow the right-hand rule for orientation.
 * @return {number} End.
 */ parcelHelpers.export(exports, "orientLinearRingsArray", ()=>orientLinearRingsArray);
/**
 * Return a two-dimensional endss
 * @param {Array<number>} flatCoordinates Flat coordinates
 * @param {Array<number>} ends Linear ring end indexes
 * @return {Array<Array<number>>} Two dimensional endss array that can
 * be used to contruct a MultiPolygon
 */ parcelHelpers.export(exports, "inflateEnds", ()=>inflateEnds);
var _reverseJs = require("./reverse.js");
function linearRingIsClockwise(flatCoordinates, offset, end, stride) {
    // https://stackoverflow.com/q/1165647/clockwise-method#1165943
    // https://github.com/OSGeo/gdal/blob/master/gdal/ogr/ogrlinearring.cpp
    let edge = 0;
    let x1 = flatCoordinates[end - stride];
    let y1 = flatCoordinates[end - stride + 1];
    for(; offset < end; offset += stride){
        const x2 = flatCoordinates[offset];
        const y2 = flatCoordinates[offset + 1];
        edge += (x2 - x1) * (y2 + y1);
        x1 = x2;
        y1 = y2;
    }
    return edge === 0 ? undefined : edge > 0;
}
function linearRingsAreOriented(flatCoordinates, offset, ends, stride, right) {
    right = right !== undefined ? right : false;
    for(let i = 0, ii = ends.length; i < ii; ++i){
        const end = ends[i];
        const isClockwise = linearRingIsClockwise(flatCoordinates, offset, end, stride);
        if (i === 0) {
            if (right && isClockwise || !right && !isClockwise) return false;
        } else {
            if (right && !isClockwise || !right && isClockwise) return false;
        }
        offset = end;
    }
    return true;
}
function linearRingssAreOriented(flatCoordinates, offset, endss, stride, right) {
    for(let i = 0, ii = endss.length; i < ii; ++i){
        const ends = endss[i];
        if (!linearRingsAreOriented(flatCoordinates, offset, ends, stride, right)) return false;
        if (ends.length) offset = ends[ends.length - 1];
    }
    return true;
}
function orientLinearRings(flatCoordinates, offset, ends, stride, right) {
    right = right !== undefined ? right : false;
    for(let i = 0, ii = ends.length; i < ii; ++i){
        const end = ends[i];
        const isClockwise = linearRingIsClockwise(flatCoordinates, offset, end, stride);
        const reverse = i === 0 ? right && isClockwise || !right && !isClockwise : right && !isClockwise || !right && isClockwise;
        if (reverse) (0, _reverseJs.coordinates)(flatCoordinates, offset, end, stride);
        offset = end;
    }
    return offset;
}
function orientLinearRingsArray(flatCoordinates, offset, endss, stride, right) {
    for(let i = 0, ii = endss.length; i < ii; ++i)offset = orientLinearRings(flatCoordinates, offset, endss[i], stride, right);
    return offset;
}
function inflateEnds(flatCoordinates, ends) {
    const endss = [];
    let offset = 0;
    let prevEndIndex = 0;
    for(let i = 0, ii = ends.length; i < ii; ++i){
        const end = ends[i];
        // classifies an array of rings into polygons with outer rings and holes
        if (!linearRingIsClockwise(flatCoordinates, offset, end, 2)) endss.push(ends.slice(prevEndIndex, i + 1));
        else {
            if (endss.length === 0) continue;
            endss[endss.length - 1].push(ends[prevEndIndex]);
        }
        prevEndIndex = i + 1;
        offset = end;
    }
    return endss;
}

},{"./reverse.js":"hksTe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hksTe":[function(require,module,exports) {
/**
 * @module ol/geom/flat/reverse
 */ /**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "coordinates", ()=>coordinates);
function coordinates(flatCoordinates, offset, end, stride) {
    while(offset < end - stride){
        for(let i = 0; i < stride; ++i){
            const tmp = flatCoordinates[offset + i];
            flatCoordinates[offset + i] = flatCoordinates[end - stride + i];
            flatCoordinates[end - stride + i] = tmp;
        }
        offset += stride;
        end -= stride;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bpzid":[function(require,module,exports) {
/**
 * @module ol/render/Event
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _eventJs = require("../events/Event.js");
var _eventJsDefault = parcelHelpers.interopDefault(_eventJs);
class RenderEvent extends (0, _eventJsDefault.default) {
    /**
   * @param {import("./EventType.js").default} type Type.
   * @param {import("../transform.js").Transform} [inversePixelTransform] Transform for
   *     CSS pixels to rendered pixels.
   * @param {import("../Map.js").FrameState} [frameState] Frame state.
   * @param {?(CanvasRenderingContext2D|WebGLRenderingContext)} [context] Context.
   */ constructor(type, inversePixelTransform, frameState, context){
        super(type);
        /**
     * Transform from CSS pixels (relative to the top-left corner of the map viewport)
     * to rendered pixels on this event's `context`. Only available when a Canvas renderer is used, null otherwise.
     * @type {import("../transform.js").Transform|undefined}
     * @api
     */ this.inversePixelTransform = inversePixelTransform;
        /**
     * An object representing the current render frame state.
     * @type {import("../Map.js").FrameState|undefined}
     * @api
     */ this.frameState = frameState;
        /**
     * Canvas context. Not available when the event is dispatched by the map. For Canvas 2D layers,
     * the context will be the 2D rendering context.  For WebGL layers, the context will be the WebGL
     * context.
     * @type {CanvasRenderingContext2D|WebGLRenderingContext|undefined}
     * @api
     */ this.context = context;
    }
}
exports.default = RenderEvent;

},{"../events/Event.js":"hwXQP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lDlNi":[function(require,module,exports) {
/**
 * @module ol/css
 */ /**
 * @typedef {Object} FontParameters
 * @property {string} style Style.
 * @property {string} variant Variant.
 * @property {string} weight Weight.
 * @property {string} size Size.
 * @property {string} lineHeight LineHeight.
 * @property {string} family Family.
 * @property {Array<string>} families Families.
 */ /**
 * The CSS class for hidden feature.
 *
 * @const
 * @type {string}
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CLASS_HIDDEN", ()=>CLASS_HIDDEN);
parcelHelpers.export(exports, "CLASS_SELECTABLE", ()=>CLASS_SELECTABLE);
parcelHelpers.export(exports, "CLASS_UNSELECTABLE", ()=>CLASS_UNSELECTABLE);
parcelHelpers.export(exports, "CLASS_UNSUPPORTED", ()=>CLASS_UNSUPPORTED);
parcelHelpers.export(exports, "CLASS_CONTROL", ()=>CLASS_CONTROL);
parcelHelpers.export(exports, "CLASS_COLLAPSED", ()=>CLASS_COLLAPSED);
parcelHelpers.export(exports, "getFontParameters", ()=>getFontParameters);
const CLASS_HIDDEN = "ol-hidden";
const CLASS_SELECTABLE = "ol-selectable";
const CLASS_UNSELECTABLE = "ol-unselectable";
const CLASS_UNSUPPORTED = "ol-unsupported";
const CLASS_CONTROL = "ol-control";
const CLASS_COLLAPSED = "ol-collapsed";
/**
 * From https://stackoverflow.com/questions/10135697/regex-to-parse-any-css-font
 * @type {RegExp}
 */ const fontRegEx = new RegExp([
    "^\\s*(?=(?:(?:[-a-z]+\\s*){0,2}(italic|oblique))?)",
    "(?=(?:(?:[-a-z]+\\s*){0,2}(small-caps))?)",
    "(?=(?:(?:[-a-z]+\\s*){0,2}(bold(?:er)?|lighter|[1-9]00 ))?)",
    "(?:(?:normal|\\1|\\2|\\3)\\s*){0,3}((?:xx?-)?",
    "(?:small|large)|medium|smaller|larger|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx]))",
    "(?:\\s*\\/\\s*(normal|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx])?))",
    "?\\s*([-,\\\"\\'\\sa-z]+?)\\s*$"
].join(""), "i");
const fontRegExMatchIndex = [
    "style",
    "variant",
    "weight",
    "size",
    "lineHeight",
    "family"
];
const getFontParameters = function(fontSpec) {
    const match = fontSpec.match(fontRegEx);
    if (!match) return null;
    const style = /** @type {FontParameters} */ {
        lineHeight: "normal",
        size: "1.2em",
        style: "normal",
        weight: "normal",
        variant: "normal"
    };
    for(let i = 0, ii = fontRegExMatchIndex.length; i < ii; ++i){
        const value = match[i + 1];
        if (value !== undefined) style[fontRegExMatchIndex[i]] = value;
    }
    style.families = style.family.split(/,\s?/);
    return style;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e85iQ":[function(require,module,exports) {
/**
 * @module ol/render/canvas
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultFont", ()=>defaultFont);
parcelHelpers.export(exports, "defaultFillStyle", ()=>defaultFillStyle);
parcelHelpers.export(exports, "defaultLineCap", ()=>defaultLineCap);
parcelHelpers.export(exports, "defaultLineDash", ()=>defaultLineDash);
parcelHelpers.export(exports, "defaultLineDashOffset", ()=>defaultLineDashOffset);
parcelHelpers.export(exports, "defaultLineJoin", ()=>defaultLineJoin);
parcelHelpers.export(exports, "defaultMiterLimit", ()=>defaultMiterLimit);
parcelHelpers.export(exports, "defaultStrokeStyle", ()=>defaultStrokeStyle);
parcelHelpers.export(exports, "defaultTextAlign", ()=>defaultTextAlign);
parcelHelpers.export(exports, "defaultTextBaseline", ()=>defaultTextBaseline);
parcelHelpers.export(exports, "defaultPadding", ()=>defaultPadding);
parcelHelpers.export(exports, "defaultLineWidth", ()=>defaultLineWidth);
parcelHelpers.export(exports, "checkedFonts", ()=>checkedFonts);
parcelHelpers.export(exports, "textHeights", ()=>textHeights);
parcelHelpers.export(exports, "registerFont", ()=>registerFont);
parcelHelpers.export(exports, "measureTextHeight", ()=>measureTextHeight);
/**
 * @param {string} font Font.
 * @param {string} text Text.
 * @return {number} Width.
 */ parcelHelpers.export(exports, "measureTextWidth", ()=>measureTextWidth);
/**
 * Measure text width using a cache.
 * @param {string} font The font.
 * @param {string} text The text to measure.
 * @param {Object<string, number>} cache A lookup of cached widths by text.
 * @return {number} The text width.
 */ parcelHelpers.export(exports, "measureAndCacheTextWidth", ()=>measureAndCacheTextWidth);
/**
 * @param {TextState} baseStyle Base style.
 * @param {Array<string>} chunks Text chunks to measure.
 * @return {{width: number, height: number, widths: Array<number>, heights: Array<number>, lineWidths: Array<number>}}} Text metrics.
 */ parcelHelpers.export(exports, "getTextDimensions", ()=>getTextDimensions);
/**
 * @param {CanvasRenderingContext2D} context Context.
 * @param {number} rotation Rotation.
 * @param {number} offsetX X offset.
 * @param {number} offsetY Y offset.
 */ parcelHelpers.export(exports, "rotateAtOffset", ()=>rotateAtOffset);
/**
 * @param {CanvasRenderingContext2D} context Context.
 * @param {import("../transform.js").Transform|null} transform Transform.
 * @param {number} opacity Opacity.
 * @param {Label|HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} labelOrImage Label.
 * @param {number} originX Origin X.
 * @param {number} originY Origin Y.
 * @param {number} w Width.
 * @param {number} h Height.
 * @param {number} x X.
 * @param {number} y Y.
 * @param {import("../size.js").Size} scale Scale.
 */ parcelHelpers.export(exports, "drawImageOrLabel", ()=>drawImageOrLabel);
var _objectJs = require("../Object.js");
var _objectJsDefault = parcelHelpers.interopDefault(_objectJs);
var _hasJs = require("../has.js");
var _objJs = require("../obj.js");
var _domJs = require("../dom.js");
var _cssJs = require("../css.js");
const defaultFont = "10px sans-serif";
const defaultFillStyle = "#000";
const defaultLineCap = "round";
const defaultLineDash = [];
const defaultLineDashOffset = 0;
const defaultLineJoin = "round";
const defaultMiterLimit = 10;
const defaultStrokeStyle = "#000";
const defaultTextAlign = "center";
const defaultTextBaseline = "middle";
const defaultPadding = [
    0,
    0,
    0,
    0
];
const defaultLineWidth = 1;
const checkedFonts = new (0, _objectJsDefault.default)();
/**
 * @type {CanvasRenderingContext2D}
 */ let measureContext = null;
/**
 * @type {string}
 */ let measureFont;
const textHeights = {};
const registerFont = function() {
    const retries = 100;
    const size = "32px ";
    const referenceFonts = [
        "monospace",
        "serif"
    ];
    const len = referenceFonts.length;
    const text = "wmytzilWMYTZIL@#/&?$%10";
    let interval, referenceWidth;
    /**
   * @param {string} fontStyle Css font-style
   * @param {string} fontWeight Css font-weight
   * @param {*} fontFamily Css font-family
   * @return {boolean} Font with style and weight is available
   */ function isAvailable(fontStyle, fontWeight, fontFamily) {
        let available = true;
        for(let i = 0; i < len; ++i){
            const referenceFont = referenceFonts[i];
            referenceWidth = measureTextWidth(fontStyle + " " + fontWeight + " " + size + referenceFont, text);
            if (fontFamily != referenceFont) {
                const width = measureTextWidth(fontStyle + " " + fontWeight + " " + size + fontFamily + "," + referenceFont, text);
                // If width and referenceWidth are the same, then the fallback was used
                // instead of the font we wanted, so the font is not available.
                available = available && width != referenceWidth;
            }
        }
        if (available) return true;
        return false;
    }
    function check() {
        let done = true;
        const fonts = checkedFonts.getKeys();
        for(let i = 0, ii = fonts.length; i < ii; ++i){
            const font = fonts[i];
            if (checkedFonts.get(font) < retries) {
                if (isAvailable.apply(this, font.split("\n"))) {
                    (0, _objJs.clear)(textHeights);
                    // Make sure that loaded fonts are picked up by Safari
                    measureContext = null;
                    measureFont = undefined;
                    checkedFonts.set(font, retries);
                } else {
                    checkedFonts.set(font, checkedFonts.get(font) + 1, true);
                    done = false;
                }
            }
        }
        if (done) {
            clearInterval(interval);
            interval = undefined;
        }
    }
    return function(fontSpec) {
        const font = (0, _cssJs.getFontParameters)(fontSpec);
        if (!font) return;
        const families = font.families;
        for(let i = 0, ii = families.length; i < ii; ++i){
            const family = families[i];
            const key = font.style + "\n" + font.weight + "\n" + family;
            if (checkedFonts.get(key) === undefined) {
                checkedFonts.set(key, retries, true);
                if (!isAvailable(font.style, font.weight, family)) {
                    checkedFonts.set(key, 0, true);
                    if (interval === undefined) interval = setInterval(check, 32);
                }
            }
        }
    };
}();
const measureTextHeight = function() {
    /**
   * @type {HTMLDivElement}
   */ let measureElement;
    return function(fontSpec) {
        let height = textHeights[fontSpec];
        if (height == undefined) {
            if (0, _hasJs.WORKER_OFFSCREEN_CANVAS) {
                const font = (0, _cssJs.getFontParameters)(fontSpec);
                const metrics = measureText(fontSpec, "Žg");
                const lineHeight = isNaN(Number(font.lineHeight)) ? 1.2 : Number(font.lineHeight);
                height = lineHeight * (metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent);
            } else {
                if (!measureElement) {
                    measureElement = document.createElement("div");
                    measureElement.innerHTML = "M";
                    measureElement.style.minHeight = "0";
                    measureElement.style.maxHeight = "none";
                    measureElement.style.height = "auto";
                    measureElement.style.padding = "0";
                    measureElement.style.border = "none";
                    measureElement.style.position = "absolute";
                    measureElement.style.display = "block";
                    measureElement.style.left = "-99999px";
                }
                measureElement.style.font = fontSpec;
                document.body.appendChild(measureElement);
                height = measureElement.offsetHeight;
                document.body.removeChild(measureElement);
            }
            textHeights[fontSpec] = height;
        }
        return height;
    };
}();
/**
 * @param {string} font Font.
 * @param {string} text Text.
 * @return {TextMetrics} Text metrics.
 */ function measureText(font, text) {
    if (!measureContext) measureContext = (0, _domJs.createCanvasContext2D)(1, 1);
    if (font != measureFont) {
        measureContext.font = font;
        measureFont = measureContext.font;
    }
    return measureContext.measureText(text);
}
function measureTextWidth(font, text) {
    return measureText(font, text).width;
}
function measureAndCacheTextWidth(font, text, cache) {
    if (text in cache) return cache[text];
    const width = text.split("\n").reduce((prev, curr)=>Math.max(prev, measureTextWidth(font, curr)), 0);
    cache[text] = width;
    return width;
}
function getTextDimensions(baseStyle, chunks) {
    const widths = [];
    const heights = [];
    const lineWidths = [];
    let width = 0;
    let lineWidth = 0;
    let height = 0;
    let lineHeight = 0;
    for(let i = 0, ii = chunks.length; i <= ii; i += 2){
        const text = chunks[i];
        if (text === "\n" || i === ii) {
            width = Math.max(width, lineWidth);
            lineWidths.push(lineWidth);
            lineWidth = 0;
            height += lineHeight;
            continue;
        }
        const font = chunks[i + 1] || baseStyle.font;
        const currentWidth = measureTextWidth(font, text);
        widths.push(currentWidth);
        lineWidth += currentWidth;
        const currentHeight = measureTextHeight(font);
        heights.push(currentHeight);
        lineHeight = Math.max(lineHeight, currentHeight);
    }
    return {
        width,
        height,
        widths,
        heights,
        lineWidths
    };
}
function rotateAtOffset(context, rotation, offsetX, offsetY) {
    if (rotation !== 0) {
        context.translate(offsetX, offsetY);
        context.rotate(rotation);
        context.translate(-offsetX, -offsetY);
    }
}
function drawImageOrLabel(context, transform, opacity, labelOrImage, originX, originY, w, h, x, y, scale) {
    context.save();
    if (opacity !== 1) context.globalAlpha *= opacity;
    if (transform) context.setTransform.apply(context, transform);
    if (/** @type {*} */ labelOrImage.contextInstructions) {
        // label
        context.translate(x, y);
        context.scale(scale[0], scale[1]);
        executeLabelInstructions(/** @type {Label} */ labelOrImage, context);
    } else if (scale[0] < 0 || scale[1] < 0) {
        // flipped image
        context.translate(x, y);
        context.scale(scale[0], scale[1]);
        context.drawImage(/** @type {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} */ labelOrImage, originX, originY, w, h, 0, 0, w, h);
    } else // if image not flipped translate and scale can be avoided
    context.drawImage(/** @type {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} */ labelOrImage, originX, originY, w, h, x, y, w * scale[0], h * scale[1]);
    context.restore();
}
/**
 * @param {Label} label Label.
 * @param {CanvasRenderingContext2D} context Context.
 */ function executeLabelInstructions(label, context) {
    const contextInstructions = label.contextInstructions;
    for(let i = 0, ii = contextInstructions.length; i < ii; i += 2)if (Array.isArray(contextInstructions[i + 1])) context[contextInstructions[i]].apply(context, contextInstructions[i + 1]);
    else context[contextInstructions[i]] = contextInstructions[i + 1];
}

},{"../Object.js":"1zG8z","../has.js":"6BDNi","../obj.js":"3ssAG","../dom.js":"84QzQ","../css.js":"lDlNi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"84QzQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @module ol/dom
 */ //FIXME Move this function to the canvas module
/**
 * Create an html canvas element and returns its 2d context.
 * @param {number} [width] Canvas width.
 * @param {number} [height] Canvas height.
 * @param {Array<HTMLCanvasElement>} [canvasPool] Canvas pool to take existing canvas from.
 * @param {CanvasRenderingContext2DSettings} [settings] CanvasRenderingContext2DSettings
 * @return {CanvasRenderingContext2D} The context.
 */ parcelHelpers.export(exports, "createCanvasContext2D", ()=>createCanvasContext2D);
/**
 * Releases canvas memory to avoid exceeding memory limits in Safari.
 * See https://pqina.nl/blog/total-canvas-memory-use-exceeds-the-maximum-limit/
 * @param {CanvasRenderingContext2D} context Context.
 */ parcelHelpers.export(exports, "releaseCanvas", ()=>releaseCanvas);
/**
 * Get the current computed width for the given element including margin,
 * padding and border.
 * Equivalent to jQuery's `$(el).outerWidth(true)`.
 * @param {!HTMLElement} element Element.
 * @return {number} The width.
 */ parcelHelpers.export(exports, "outerWidth", ()=>outerWidth);
/**
 * Get the current computed height for the given element including margin,
 * padding and border.
 * Equivalent to jQuery's `$(el).outerHeight(true)`.
 * @param {!HTMLElement} element Element.
 * @return {number} The height.
 */ parcelHelpers.export(exports, "outerHeight", ()=>outerHeight);
/**
 * @param {Node} newNode Node to replace old node
 * @param {Node} oldNode The node to be replaced
 */ parcelHelpers.export(exports, "replaceNode", ()=>replaceNode);
/**
 * @param {Node} node The node to remove.
 * @return {Node|null} The node that was removed or null.
 */ parcelHelpers.export(exports, "removeNode", ()=>removeNode);
/**
 * @param {Node} node The node to remove the children from.
 */ parcelHelpers.export(exports, "removeChildren", ()=>removeChildren);
/**
 * Transform the children of a parent node so they match the
 * provided list of children.  This function aims to efficiently
 * remove, add, and reorder child nodes while maintaining a simple
 * implementation (it is not guaranteed to minimize DOM operations).
 * @param {Node} node The parent node whose children need reworking.
 * @param {Array<Node>} children The desired children.
 */ parcelHelpers.export(exports, "replaceChildren", ()=>replaceChildren);
var _hasJs = require("./has.js");
function createCanvasContext2D(width, height, canvasPool, settings) {
    /** @type {HTMLCanvasElement|OffscreenCanvas} */ let canvas;
    if (canvasPool && canvasPool.length) canvas = canvasPool.shift();
    else if (0, _hasJs.WORKER_OFFSCREEN_CANVAS) canvas = new OffscreenCanvas(width || 300, height || 300);
    else canvas = document.createElement("canvas");
    if (width) canvas.width = width;
    if (height) canvas.height = height;
    //FIXME Allow OffscreenCanvasRenderingContext2D as return type
    return /** @type {CanvasRenderingContext2D} */ canvas.getContext("2d", settings);
}
function releaseCanvas(context) {
    const canvas = context.canvas;
    canvas.width = 1;
    canvas.height = 1;
    context.clearRect(0, 0, 1, 1);
}
function outerWidth(element) {
    let width = element.offsetWidth;
    const style = getComputedStyle(element);
    width += parseInt(style.marginLeft, 10) + parseInt(style.marginRight, 10);
    return width;
}
function outerHeight(element) {
    let height = element.offsetHeight;
    const style = getComputedStyle(element);
    height += parseInt(style.marginTop, 10) + parseInt(style.marginBottom, 10);
    return height;
}
function replaceNode(newNode, oldNode) {
    const parent = oldNode.parentNode;
    if (parent) parent.replaceChild(newNode, oldNode);
}
function removeNode(node) {
    return node && node.parentNode ? node.parentNode.removeChild(node) : null;
}
function removeChildren(node) {
    while(node.lastChild)node.removeChild(node.lastChild);
}
function replaceChildren(node, children) {
    const oldChildren = node.childNodes;
    for(let i = 0;; ++i){
        const oldChild = oldChildren[i];
        const newChild = children[i];
        // check if our work is done
        if (!oldChild && !newChild) break;
        // check if children match
        if (oldChild === newChild) continue;
        // check if a new child needs to be added
        if (!oldChild) {
            node.appendChild(newChild);
            continue;
        }
        // check if an old child needs to be removed
        if (!newChild) {
            node.removeChild(oldChild);
            --i;
            continue;
        }
        // reorder
        node.insertBefore(newChild, oldChild);
    }
}

},{"./has.js":"6BDNi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h4ZNC":[function(require,module,exports) {
/**
 * @module ol/layer/Group
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @typedef {'addlayer'|'removelayer'} EventType
 */ /**
 * @classdesc
 * A layer group triggers 'addlayer' and 'removelayer' events when layers are added to or removed from
 * the group or one of its child groups.  When a layer group is added to or removed from another layer group,
 * a single event will be triggered (instead of one per layer in the group added or removed).
 */ parcelHelpers.export(exports, "GroupEvent", ()=>GroupEvent);
var _baseJs = require("./Base.js");
var _baseJsDefault = parcelHelpers.interopDefault(_baseJs);
var _collectionJs = require("../Collection.js");
var _collectionJsDefault = parcelHelpers.interopDefault(_collectionJs);
var _collectionEventTypeJs = require("../CollectionEventType.js");
var _collectionEventTypeJsDefault = parcelHelpers.interopDefault(_collectionEventTypeJs);
var _eventJs = require("../events/Event.js");
var _eventJsDefault = parcelHelpers.interopDefault(_eventJs);
var _eventTypeJs = require("../events/EventType.js");
var _eventTypeJsDefault = parcelHelpers.interopDefault(_eventTypeJs);
var _objectEventTypeJs = require("../ObjectEventType.js");
var _objectEventTypeJsDefault = parcelHelpers.interopDefault(_objectEventTypeJs);
var _assertsJs = require("../asserts.js");
var _objJs = require("../obj.js");
var _extentJs = require("../extent.js");
var _utilJs = require("../util.js");
var _eventsJs = require("../events.js");
class GroupEvent extends (0, _eventJsDefault.default) {
    /**
   * @param {EventType} type The event type.
   * @param {BaseLayer} layer The layer.
   */ constructor(type, layer){
        super(type);
        /**
     * The added or removed layer.
     * @type {BaseLayer}
     * @api
     */ this.layer = layer;
    }
}
/***
 * @template Return
 * @typedef {import("../Observable").OnSignature<import("../Observable").EventTypes, import("../events/Event.js").default, Return> &
 *   import("../Observable").OnSignature<import("./Base").BaseLayerObjectEventTypes|
 *     'change:layers', import("../Object").ObjectEvent, Return> &
 *   import("../Observable").CombinedOnSignature<import("../Observable").EventTypes|import("./Base").BaseLayerObjectEventTypes|'change:layers', Return>} GroupOnSignature
 */ /**
 * @typedef {Object} Options
 * @property {number} [opacity=1] Opacity (0, 1).
 * @property {boolean} [visible=true] Visibility.
 * @property {import("../extent.js").Extent} [extent] The bounding extent for layer rendering.  The layer will not be
 * rendered outside of this extent.
 * @property {number} [zIndex] The z-index for layer rendering.  At rendering time, the layers
 * will be ordered, first by Z-index and then by position. When `undefined`, a `zIndex` of 0 is assumed
 * for layers that are added to the map's `layers` collection, or `Infinity` when the layer's `setMap()`
 * method was used.
 * @property {number} [minResolution] The minimum resolution (inclusive) at which this layer will be
 * visible.
 * @property {number} [maxResolution] The maximum resolution (exclusive) below which this layer will
 * be visible.
 * @property {number} [minZoom] The minimum view zoom level (exclusive) above which this layer will be
 * visible.
 * @property {number} [maxZoom] The maximum view zoom level (inclusive) at which this layer will
 * be visible.
 * @property {Array<import("./Base.js").default>|Collection<import("./Base.js").default>} [layers] Child layers.
 * @property {Object<string, *>} [properties] Arbitrary observable properties. Can be accessed with `#get()` and `#set()`.
 */ /**
 * @enum {string}
 * @private
 */ const Property = {
    LAYERS: "layers"
};
/**
 * @classdesc
 * A {@link module:ol/Collection~Collection} of layers that are handled together.
 *
 * A generic `change` event is triggered when the group/Collection changes.
 *
 * @api
 */ class LayerGroup extends (0, _baseJsDefault.default) {
    /**
   * @param {Options} [options] Layer options.
   */ constructor(options){
        options = options || {};
        const baseOptions = /** @type {Options} */ Object.assign({}, options);
        delete baseOptions.layers;
        let layers = options.layers;
        super(baseOptions);
        /***
     * @type {GroupOnSignature<import("../events").EventsKey>}
     */ this.on;
        /***
     * @type {GroupOnSignature<import("../events").EventsKey>}
     */ this.once;
        /***
     * @type {GroupOnSignature<void>}
     */ this.un;
        /**
     * @private
     * @type {Array<import("../events.js").EventsKey>}
     */ this.layersListenerKeys_ = [];
        /**
     * @private
     * @type {Object<string, Array<import("../events.js").EventsKey>>}
     */ this.listenerKeys_ = {};
        this.addChangeListener(Property.LAYERS, this.handleLayersChanged_);
        if (layers) {
            if (Array.isArray(layers)) layers = new (0, _collectionJsDefault.default)(layers.slice(), {
                unique: true
            });
            else (0, _assertsJs.assert)(typeof /** @type {?} */ layers.getArray === "function", 43); // Expected `layers` to be an array or a `Collection`
        } else layers = new (0, _collectionJsDefault.default)(undefined, {
            unique: true
        });
        this.setLayers(layers);
    }
    /**
   * @private
   */ handleLayerChange_() {
        this.changed();
    }
    /**
   * @private
   */ handleLayersChanged_() {
        this.layersListenerKeys_.forEach((0, _eventsJs.unlistenByKey));
        this.layersListenerKeys_.length = 0;
        const layers = this.getLayers();
        this.layersListenerKeys_.push((0, _eventsJs.listen)(layers, (0, _collectionEventTypeJsDefault.default).ADD, this.handleLayersAdd_, this), (0, _eventsJs.listen)(layers, (0, _collectionEventTypeJsDefault.default).REMOVE, this.handleLayersRemove_, this));
        for(const id in this.listenerKeys_)this.listenerKeys_[id].forEach((0, _eventsJs.unlistenByKey));
        (0, _objJs.clear)(this.listenerKeys_);
        const layersArray = layers.getArray();
        for(let i = 0, ii = layersArray.length; i < ii; i++){
            const layer = layersArray[i];
            this.registerLayerListeners_(layer);
            this.dispatchEvent(new GroupEvent("addlayer", layer));
        }
        this.changed();
    }
    /**
   * @param {BaseLayer} layer The layer.
   */ registerLayerListeners_(layer) {
        const listenerKeys = [
            (0, _eventsJs.listen)(layer, (0, _objectEventTypeJsDefault.default).PROPERTYCHANGE, this.handleLayerChange_, this),
            (0, _eventsJs.listen)(layer, (0, _eventTypeJsDefault.default).CHANGE, this.handleLayerChange_, this)
        ];
        if (layer instanceof LayerGroup) listenerKeys.push((0, _eventsJs.listen)(layer, "addlayer", this.handleLayerGroupAdd_, this), (0, _eventsJs.listen)(layer, "removelayer", this.handleLayerGroupRemove_, this));
        this.listenerKeys_[(0, _utilJs.getUid)(layer)] = listenerKeys;
    }
    /**
   * @param {GroupEvent} event The layer group event.
   */ handleLayerGroupAdd_(event) {
        this.dispatchEvent(new GroupEvent("addlayer", event.layer));
    }
    /**
   * @param {GroupEvent} event The layer group event.
   */ handleLayerGroupRemove_(event) {
        this.dispatchEvent(new GroupEvent("removelayer", event.layer));
    }
    /**
   * @param {import("../Collection.js").CollectionEvent<import("./Base.js").default>} collectionEvent CollectionEvent.
   * @private
   */ handleLayersAdd_(collectionEvent) {
        const layer = collectionEvent.element;
        this.registerLayerListeners_(layer);
        this.dispatchEvent(new GroupEvent("addlayer", layer));
        this.changed();
    }
    /**
   * @param {import("../Collection.js").CollectionEvent<import("./Base.js").default>} collectionEvent CollectionEvent.
   * @private
   */ handleLayersRemove_(collectionEvent) {
        const layer = collectionEvent.element;
        const key = (0, _utilJs.getUid)(layer);
        this.listenerKeys_[key].forEach((0, _eventsJs.unlistenByKey));
        delete this.listenerKeys_[key];
        this.dispatchEvent(new GroupEvent("removelayer", layer));
        this.changed();
    }
    /**
   * Returns the {@link module:ol/Collection~Collection collection} of {@link module:ol/layer/Layer~Layer layers}
   * in this group.
   * @return {!Collection<import("./Base.js").default>} Collection of
   *   {@link module:ol/layer/Base~BaseLayer layers} that are part of this group.
   * @observable
   * @api
   */ getLayers() {
        return /** @type {!Collection<import("./Base.js").default>} */ this.get(Property.LAYERS);
    }
    /**
   * Set the {@link module:ol/Collection~Collection collection} of {@link module:ol/layer/Layer~Layer layers}
   * in this group.
   * @param {!Collection<import("./Base.js").default>} layers Collection of
   *   {@link module:ol/layer/Base~BaseLayer layers} that are part of this group.
   * @observable
   * @api
   */ setLayers(layers) {
        const collection = this.getLayers();
        if (collection) {
            const currentLayers = collection.getArray();
            for(let i = 0, ii = currentLayers.length; i < ii; ++i)this.dispatchEvent(new GroupEvent("removelayer", currentLayers[i]));
        }
        this.set(Property.LAYERS, layers);
    }
    /**
   * @param {Array<import("./Layer.js").default>} [array] Array of layers (to be modified in place).
   * @return {Array<import("./Layer.js").default>} Array of layers.
   */ getLayersArray(array) {
        array = array !== undefined ? array : [];
        this.getLayers().forEach(function(layer) {
            layer.getLayersArray(array);
        });
        return array;
    }
    /**
   * Get the layer states list and use this groups z-index as the default
   * for all layers in this and nested groups, if it is unset at this point.
   * If dest is not provided and this group's z-index is undefined
   * 0 is used a the default z-index.
   * @param {Array<import("./Layer.js").State>} [dest] Optional list
   * of layer states (to be modified in place).
   * @return {Array<import("./Layer.js").State>} List of layer states.
   */ getLayerStatesArray(dest) {
        const states = dest !== undefined ? dest : [];
        const pos = states.length;
        this.getLayers().forEach(function(layer) {
            layer.getLayerStatesArray(states);
        });
        const ownLayerState = this.getLayerState();
        let defaultZIndex = ownLayerState.zIndex;
        if (!dest && ownLayerState.zIndex === undefined) defaultZIndex = 0;
        for(let i = pos, ii = states.length; i < ii; i++){
            const layerState = states[i];
            layerState.opacity *= ownLayerState.opacity;
            layerState.visible = layerState.visible && ownLayerState.visible;
            layerState.maxResolution = Math.min(layerState.maxResolution, ownLayerState.maxResolution);
            layerState.minResolution = Math.max(layerState.minResolution, ownLayerState.minResolution);
            layerState.minZoom = Math.max(layerState.minZoom, ownLayerState.minZoom);
            layerState.maxZoom = Math.min(layerState.maxZoom, ownLayerState.maxZoom);
            if (ownLayerState.extent !== undefined) {
                if (layerState.extent !== undefined) layerState.extent = (0, _extentJs.getIntersection)(layerState.extent, ownLayerState.extent);
                else layerState.extent = ownLayerState.extent;
            }
            if (layerState.zIndex === undefined) layerState.zIndex = defaultZIndex;
        }
        return states;
    }
    /**
   * @return {import("../source/Source.js").State} Source state.
   */ getSourceState() {
        return "ready";
    }
}
exports.default = LayerGroup;

},{"./Base.js":"ag0tc","../Collection.js":"gReoh","../CollectionEventType.js":"82Ksf","../events/Event.js":"hwXQP","../events/EventType.js":"hrQJ6","../ObjectEventType.js":"f2U6i","../asserts.js":"e4TiF","../obj.js":"3ssAG","../extent.js":"6YrVc","../util.js":"pLBjQ","../events.js":"dcspA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"32Can":[function(require,module,exports) {
/**
 * @module ol/MapBrowserEvent
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _mapEventJs = require("./MapEvent.js");
var _mapEventJsDefault = parcelHelpers.interopDefault(_mapEventJs);
/**
 * @classdesc
 * Events emitted as map browser events are instances of this type.
 * See {@link module:ol/Map~Map} for which events trigger a map browser event.
 * @template {UIEvent} EVENT
 */ class MapBrowserEvent extends (0, _mapEventJsDefault.default) {
    /**
   * @param {string} type Event type.
   * @param {import("./Map.js").default} map Map.
   * @param {EVENT} originalEvent Original event.
   * @param {boolean} [dragging] Is the map currently being dragged?
   * @param {import("./Map.js").FrameState} [frameState] Frame state.
   * @param {Array<PointerEvent>} [activePointers] Active pointers.
   */ constructor(type, map, originalEvent, dragging, frameState, activePointers){
        super(type, map, frameState);
        /**
     * The original browser event.
     * @const
     * @type {EVENT}
     * @api
     */ this.originalEvent = originalEvent;
        /**
     * The map pixel relative to the viewport corresponding to the original browser event.
     * @type {?import("./pixel.js").Pixel}
     */ this.pixel_ = null;
        /**
     * The coordinate in the user projection corresponding to the original browser event.
     * @type {?import("./coordinate.js").Coordinate}
     */ this.coordinate_ = null;
        /**
     * Indicates if the map is currently being dragged. Only set for
     * `POINTERDRAG` and `POINTERMOVE` events. Default is `false`.
     *
     * @type {boolean}
     * @api
     */ this.dragging = dragging !== undefined ? dragging : false;
        /**
     * @type {Array<PointerEvent>|undefined}
     */ this.activePointers = activePointers;
    }
    /**
   * The map pixel relative to the viewport corresponding to the original event.
   * @type {import("./pixel.js").Pixel}
   * @api
   */ get pixel() {
        if (!this.pixel_) this.pixel_ = this.map.getEventPixel(this.originalEvent);
        return this.pixel_;
    }
    set pixel(pixel) {
        this.pixel_ = pixel;
    }
    /**
   * The coordinate corresponding to the original browser event.  This will be in the user
   * projection if one is set.  Otherwise it will be in the view projection.
   * @type {import("./coordinate.js").Coordinate}
   * @api
   */ get coordinate() {
        if (!this.coordinate_) this.coordinate_ = this.map.getCoordinateFromPixel(this.pixel);
        return this.coordinate_;
    }
    set coordinate(coordinate) {
        this.coordinate_ = coordinate;
    }
    /**
   * Prevents the default browser action.
   * See https://developer.mozilla.org/en-US/docs/Web/API/event.preventDefault.
   * @api
   */ preventDefault() {
        super.preventDefault();
        if ("preventDefault" in this.originalEvent) /** @type {UIEvent} */ this.originalEvent.preventDefault();
    }
    /**
   * Prevents further propagation of the current event.
   * See https://developer.mozilla.org/en-US/docs/Web/API/event.stopPropagation.
   * @api
   */ stopPropagation() {
        super.stopPropagation();
        if ("stopPropagation" in this.originalEvent) /** @type {UIEvent} */ this.originalEvent.stopPropagation();
    }
}
exports.default = MapBrowserEvent;

},{"./MapEvent.js":"1APU6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1APU6":[function(require,module,exports) {
/**
 * @module ol/MapEvent
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _eventJs = require("./events/Event.js");
var _eventJsDefault = parcelHelpers.interopDefault(_eventJs);
/**
 * @classdesc
 * Events emitted as map events are instances of this type.
 * See {@link module:ol/Map~Map} for which events trigger a map event.
 */ class MapEvent extends (0, _eventJsDefault.default) {
    /**
   * @param {string} type Event type.
   * @param {import("./Map.js").default} map Map.
   * @param {?import("./Map.js").FrameState} [frameState] Frame state.
   */ constructor(type, map, frameState){
        super(type);
        /**
     * The map where the event occurred.
     * @type {import("./Map.js").default}
     * @api
     */ this.map = map;
        /**
     * The frame state at the time of the event.
     * @type {?import("./Map.js").FrameState}
     * @api
     */ this.frameState = frameState !== undefined ? frameState : null;
    }
}
exports.default = MapEvent;

},{"./events/Event.js":"hwXQP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b2FtY":[function(require,module,exports) {
/**
 * @module ol/MapBrowserEventHandler
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _eventTypeJs = require("./events/EventType.js");
var _eventTypeJsDefault = parcelHelpers.interopDefault(_eventTypeJs);
var _mapBrowserEventJs = require("./MapBrowserEvent.js");
var _mapBrowserEventJsDefault = parcelHelpers.interopDefault(_mapBrowserEventJs);
var _mapBrowserEventTypeJs = require("./MapBrowserEventType.js");
var _mapBrowserEventTypeJsDefault = parcelHelpers.interopDefault(_mapBrowserEventTypeJs);
var _eventTypeJs1 = require("./pointer/EventType.js");
var _eventTypeJsDefault1 = parcelHelpers.interopDefault(_eventTypeJs1);
var _targetJs = require("./events/Target.js");
var _targetJsDefault = parcelHelpers.interopDefault(_targetJs);
var _hasJs = require("./has.js");
var _eventsJs = require("./events.js");
class MapBrowserEventHandler extends (0, _targetJsDefault.default) {
    /**
   * @param {import("./Map.js").default} map The map with the viewport to listen to events on.
   * @param {number} [moveTolerance] The minimal distance the pointer must travel to trigger a move.
   */ constructor(map, moveTolerance){
        super(map);
        /**
     * This is the element that we will listen to the real events on.
     * @type {import("./Map.js").default}
     * @private
     */ this.map_ = map;
        /**
     * @type {any}
     * @private
     */ this.clickTimeoutId_;
        /**
     * Emulate dblclick and singleclick. Will be true when only one pointer is active.
     * @type {boolean}
     */ this.emulateClicks_ = false;
        /**
     * @type {boolean}
     * @private
     */ this.dragging_ = false;
        /**
     * @type {!Array<import("./events.js").EventsKey>}
     * @private
     */ this.dragListenerKeys_ = [];
        /**
     * @type {number}
     * @private
     */ this.moveTolerance_ = moveTolerance === undefined ? 1 : moveTolerance;
        /**
     * The most recent "down" type event (or null if none have occurred).
     * Set on pointerdown.
     * @type {PointerEvent|null}
     * @private
     */ this.down_ = null;
        const element = this.map_.getViewport();
        /**
     * @type {Array<PointerEvent>}
     * @private
     */ this.activePointers_ = [];
        /**
     * @type {!Object<number, Event>}
     * @private
     */ this.trackedTouches_ = {};
        this.element_ = element;
        /**
     * @type {?import("./events.js").EventsKey}
     * @private
     */ this.pointerdownListenerKey_ = (0, _eventsJs.listen)(element, (0, _eventTypeJsDefault1.default).POINTERDOWN, this.handlePointerDown_, this);
        /**
     * @type {PointerEvent}
     * @private
     */ this.originalPointerMoveEvent_;
        /**
     * @type {?import("./events.js").EventsKey}
     * @private
     */ this.relayedListenerKey_ = (0, _eventsJs.listen)(element, (0, _eventTypeJsDefault1.default).POINTERMOVE, this.relayMoveEvent_, this);
        /**
     * @private
     */ this.boundHandleTouchMove_ = this.handleTouchMove_.bind(this);
        this.element_.addEventListener((0, _eventTypeJsDefault.default).TOUCHMOVE, this.boundHandleTouchMove_, (0, _hasJs.PASSIVE_EVENT_LISTENERS) ? {
            passive: false
        } : false);
    }
    /**
   * @param {PointerEvent} pointerEvent Pointer
   * event.
   * @private
   */ emulateClick_(pointerEvent) {
        let newEvent = new (0, _mapBrowserEventJsDefault.default)((0, _mapBrowserEventTypeJsDefault.default).CLICK, this.map_, pointerEvent);
        this.dispatchEvent(newEvent);
        if (this.clickTimeoutId_ !== undefined) {
            // double-click
            clearTimeout(this.clickTimeoutId_);
            this.clickTimeoutId_ = undefined;
            newEvent = new (0, _mapBrowserEventJsDefault.default)((0, _mapBrowserEventTypeJsDefault.default).DBLCLICK, this.map_, pointerEvent);
            this.dispatchEvent(newEvent);
        } else // click
        this.clickTimeoutId_ = setTimeout(()=>{
            this.clickTimeoutId_ = undefined;
            const newEvent = new (0, _mapBrowserEventJsDefault.default)((0, _mapBrowserEventTypeJsDefault.default).SINGLECLICK, this.map_, pointerEvent);
            this.dispatchEvent(newEvent);
        }, 250);
    }
    /**
   * Keeps track on how many pointers are currently active.
   *
   * @param {PointerEvent} pointerEvent Pointer
   * event.
   * @private
   */ updateActivePointers_(pointerEvent) {
        const event = pointerEvent;
        const id = event.pointerId;
        if (event.type == (0, _mapBrowserEventTypeJsDefault.default).POINTERUP || event.type == (0, _mapBrowserEventTypeJsDefault.default).POINTERCANCEL) {
            delete this.trackedTouches_[id];
            for(const pointerId in this.trackedTouches_)if (this.trackedTouches_[pointerId].target !== event.target) {
                // Some platforms assign a new pointerId when the target changes.
                // If this happens, delete one tracked pointer. If there is more
                // than one tracked pointer for the old target, it will be cleared
                // by subsequent POINTERUP events from other pointers.
                delete this.trackedTouches_[pointerId];
                break;
            }
        } else if (event.type == (0, _mapBrowserEventTypeJsDefault.default).POINTERDOWN || event.type == (0, _mapBrowserEventTypeJsDefault.default).POINTERMOVE) this.trackedTouches_[id] = event;
        this.activePointers_ = Object.values(this.trackedTouches_);
    }
    /**
   * @param {PointerEvent} pointerEvent Pointer
   * event.
   * @private
   */ handlePointerUp_(pointerEvent) {
        this.updateActivePointers_(pointerEvent);
        const newEvent = new (0, _mapBrowserEventJsDefault.default)((0, _mapBrowserEventTypeJsDefault.default).POINTERUP, this.map_, pointerEvent, undefined, undefined, this.activePointers_);
        this.dispatchEvent(newEvent);
        // We emulate click events on left mouse button click, touch contact, and pen
        // contact. isMouseActionButton returns true in these cases (evt.button is set
        // to 0).
        // See http://www.w3.org/TR/pointerevents/#button-states
        // We only fire click, singleclick, and doubleclick if nobody has called
        // event.preventDefault().
        if (this.emulateClicks_ && !newEvent.defaultPrevented && !this.dragging_ && this.isMouseActionButton_(pointerEvent)) this.emulateClick_(this.down_);
        if (this.activePointers_.length === 0) {
            this.dragListenerKeys_.forEach((0, _eventsJs.unlistenByKey));
            this.dragListenerKeys_.length = 0;
            this.dragging_ = false;
            this.down_ = null;
        }
    }
    /**
   * @param {PointerEvent} pointerEvent Pointer
   * event.
   * @return {boolean} If the left mouse button was pressed.
   * @private
   */ isMouseActionButton_(pointerEvent) {
        return pointerEvent.button === 0;
    }
    /**
   * @param {PointerEvent} pointerEvent Pointer
   * event.
   * @private
   */ handlePointerDown_(pointerEvent) {
        this.emulateClicks_ = this.activePointers_.length === 0;
        this.updateActivePointers_(pointerEvent);
        const newEvent = new (0, _mapBrowserEventJsDefault.default)((0, _mapBrowserEventTypeJsDefault.default).POINTERDOWN, this.map_, pointerEvent, undefined, undefined, this.activePointers_);
        this.dispatchEvent(newEvent);
        this.down_ = new PointerEvent(pointerEvent.type, pointerEvent);
        Object.defineProperty(this.down_, "target", {
            writable: false,
            value: pointerEvent.target
        });
        if (this.dragListenerKeys_.length === 0) {
            const doc = this.map_.getOwnerDocument();
            this.dragListenerKeys_.push((0, _eventsJs.listen)(doc, (0, _mapBrowserEventTypeJsDefault.default).POINTERMOVE, this.handlePointerMove_, this), (0, _eventsJs.listen)(doc, (0, _mapBrowserEventTypeJsDefault.default).POINTERUP, this.handlePointerUp_, this), /* Note that the listener for `pointercancel is set up on
         * `pointerEventHandler_` and not `documentPointerEventHandler_` like
         * the `pointerup` and `pointermove` listeners.
         *
         * The reason for this is the following: `TouchSource.vacuumTouches_()`
         * issues `pointercancel` events, when there was no `touchend` for a
         * `touchstart`. Now, let's say a first `touchstart` is registered on
         * `pointerEventHandler_`. The `documentPointerEventHandler_` is set up.
         * But `documentPointerEventHandler_` doesn't know about the first
         * `touchstart`. If there is no `touchend` for the `touchstart`, we can
         * only receive a `touchcancel` from `pointerEventHandler_`, because it is
         * only registered there.
         */ (0, _eventsJs.listen)(this.element_, (0, _mapBrowserEventTypeJsDefault.default).POINTERCANCEL, this.handlePointerUp_, this));
            if (this.element_.getRootNode && this.element_.getRootNode() !== doc) this.dragListenerKeys_.push((0, _eventsJs.listen)(this.element_.getRootNode(), (0, _mapBrowserEventTypeJsDefault.default).POINTERUP, this.handlePointerUp_, this));
        }
    }
    /**
   * @param {PointerEvent} pointerEvent Pointer
   * event.
   * @private
   */ handlePointerMove_(pointerEvent) {
        // Between pointerdown and pointerup, pointermove events are triggered.
        // To avoid a 'false' touchmove event to be dispatched, we test if the pointer
        // moved a significant distance.
        if (this.isMoving_(pointerEvent)) {
            this.updateActivePointers_(pointerEvent);
            this.dragging_ = true;
            const newEvent = new (0, _mapBrowserEventJsDefault.default)((0, _mapBrowserEventTypeJsDefault.default).POINTERDRAG, this.map_, pointerEvent, this.dragging_, undefined, this.activePointers_);
            this.dispatchEvent(newEvent);
        }
    }
    /**
   * Wrap and relay a pointermove event.
   * @param {PointerEvent} pointerEvent Pointer
   * event.
   * @private
   */ relayMoveEvent_(pointerEvent) {
        this.originalPointerMoveEvent_ = pointerEvent;
        const dragging = !!(this.down_ && this.isMoving_(pointerEvent));
        this.dispatchEvent(new (0, _mapBrowserEventJsDefault.default)((0, _mapBrowserEventTypeJsDefault.default).POINTERMOVE, this.map_, pointerEvent, dragging));
    }
    /**
   * Flexible handling of a `touch-action: none` css equivalent: because calling
   * `preventDefault()` on a `pointermove` event does not stop native page scrolling
   * and zooming, we also listen for `touchmove` and call `preventDefault()` on it
   * when an interaction (currently `DragPan` handles the event.
   * @param {TouchEvent} event Event.
   * @private
   */ handleTouchMove_(event) {
        // Due to https://github.com/mpizenberg/elm-pep/issues/2, `this.originalPointerMoveEvent_`
        // may not be initialized yet when we get here on a platform without native pointer events.
        const originalEvent = this.originalPointerMoveEvent_;
        if ((!originalEvent || originalEvent.defaultPrevented) && (typeof event.cancelable !== "boolean" || event.cancelable === true)) event.preventDefault();
    }
    /**
   * @param {PointerEvent} pointerEvent Pointer
   * event.
   * @return {boolean} Is moving.
   * @private
   */ isMoving_(pointerEvent) {
        return this.dragging_ || Math.abs(pointerEvent.clientX - this.down_.clientX) > this.moveTolerance_ || Math.abs(pointerEvent.clientY - this.down_.clientY) > this.moveTolerance_;
    }
    /**
   * Clean up.
   */ disposeInternal() {
        if (this.relayedListenerKey_) {
            (0, _eventsJs.unlistenByKey)(this.relayedListenerKey_);
            this.relayedListenerKey_ = null;
        }
        this.element_.removeEventListener((0, _eventTypeJsDefault.default).TOUCHMOVE, this.boundHandleTouchMove_);
        if (this.pointerdownListenerKey_) {
            (0, _eventsJs.unlistenByKey)(this.pointerdownListenerKey_);
            this.pointerdownListenerKey_ = null;
        }
        this.dragListenerKeys_.forEach((0, _eventsJs.unlistenByKey));
        this.dragListenerKeys_.length = 0;
        this.element_ = null;
        super.disposeInternal();
    }
}
exports.default = MapBrowserEventHandler;

},{"./events/EventType.js":"hrQJ6","./MapBrowserEvent.js":"32Can","./MapBrowserEventType.js":"fB9ae","./pointer/EventType.js":"cVfVH","./events/Target.js":"7T5Yi","./has.js":"6BDNi","./events.js":"dcspA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fB9ae":[function(require,module,exports) {
/**
 * @module ol/MapBrowserEventType
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _eventTypeJs = require("./events/EventType.js");
var _eventTypeJsDefault = parcelHelpers.interopDefault(_eventTypeJs);
/**
 * Constants for event names.
 * @enum {string}
 */ exports.default = {
    /**
   * A true single click with no dragging and no double click. Note that this
   * event is delayed by 250 ms to ensure that it is not a double click.
   * @event module:ol/MapBrowserEvent~MapBrowserEvent#singleclick
   * @api
   */ SINGLECLICK: "singleclick",
    /**
   * A click with no dragging. A double click will fire two of this.
   * @event module:ol/MapBrowserEvent~MapBrowserEvent#click
   * @api
   */ CLICK: (0, _eventTypeJsDefault.default).CLICK,
    /**
   * A true double click, with no dragging.
   * @event module:ol/MapBrowserEvent~MapBrowserEvent#dblclick
   * @api
   */ DBLCLICK: (0, _eventTypeJsDefault.default).DBLCLICK,
    /**
   * Triggered when a pointer is dragged.
   * @event module:ol/MapBrowserEvent~MapBrowserEvent#pointerdrag
   * @api
   */ POINTERDRAG: "pointerdrag",
    /**
   * Triggered when a pointer is moved. Note that on touch devices this is
   * triggered when the map is panned, so is not the same as mousemove.
   * @event module:ol/MapBrowserEvent~MapBrowserEvent#pointermove
   * @api
   */ POINTERMOVE: "pointermove",
    POINTERDOWN: "pointerdown",
    POINTERUP: "pointerup",
    POINTEROVER: "pointerover",
    POINTEROUT: "pointerout",
    POINTERENTER: "pointerenter",
    POINTERLEAVE: "pointerleave",
    POINTERCANCEL: "pointercancel"
}; /***
 * @typedef {'singleclick'|'click'|'dblclick'|'pointerdrag'|'pointermove'} Types
 */ 

},{"./events/EventType.js":"hrQJ6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cVfVH":[function(require,module,exports) {
/**
 * @module ol/pointer/EventType
 */ /**
 * Constants for event names.
 * @enum {string}
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    POINTERMOVE: "pointermove",
    POINTERDOWN: "pointerdown",
    POINTERUP: "pointerup",
    POINTEROVER: "pointerover",
    POINTEROUT: "pointerout",
    POINTERENTER: "pointerenter",
    POINTERLEAVE: "pointerleave",
    POINTERCANCEL: "pointercancel"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1cFF9":[function(require,module,exports) {
/**
 * @module ol/MapEventType
 */ /**
 * @enum {string}
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    /**
   * Triggered after a map frame is rendered.
   * @event module:ol/MapEvent~MapEvent#postrender
   * @api
   */ POSTRENDER: "postrender",
    /**
   * Triggered when the map starts moving.
   * @event module:ol/MapEvent~MapEvent#movestart
   * @api
   */ MOVESTART: "movestart",
    /**
   * Triggered after the map is moved.
   * @event module:ol/MapEvent~MapEvent#moveend
   * @api
   */ MOVEEND: "moveend",
    /**
   * Triggered when loading of additional map data (tiles, images, features) starts.
   * @event module:ol/MapEvent~MapEvent#loadstart
   * @api
   */ LOADSTART: "loadstart",
    /**
   * Triggered when loading of additional map data has completed.
   * @event module:ol/MapEvent~MapEvent#loadend
   * @api
   */ LOADEND: "loadend"
}; /***
 * @typedef {'postrender'|'movestart'|'moveend'|'loadstart'|'loadend'} Types
 */ 

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jMfsr":[function(require,module,exports) {
/**
 * @module ol/MapProperty
 */ /**
 * @enum {string}
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    LAYERGROUP: "layergroup",
    SIZE: "size",
    TARGET: "target",
    VIEW: "view"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iKkF5":[function(require,module,exports) {
/**
 * @module ol/TileQueue
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @param {import('./Map.js').FrameState} frameState Frame state.
 * @param {import("./Tile.js").default} tile Tile.
 * @param {string} tileSourceKey Tile source key.
 * @param {import("./coordinate.js").Coordinate} tileCenter Tile center.
 * @param {number} tileResolution Tile resolution.
 * @return {number} Tile priority.
 */ parcelHelpers.export(exports, "getTilePriority", ()=>getTilePriority);
var _eventTypeJs = require("./events/EventType.js");
var _eventTypeJsDefault = parcelHelpers.interopDefault(_eventTypeJs);
var _priorityQueueJs = require("./structs/PriorityQueue.js");
var _priorityQueueJsDefault = parcelHelpers.interopDefault(_priorityQueueJs);
var _tileStateJs = require("./TileState.js");
var _tileStateJsDefault = parcelHelpers.interopDefault(_tileStateJs);
/**
 * @typedef {function(import("./Tile.js").default, string, import("./coordinate.js").Coordinate, number): number} PriorityFunction
 */ class TileQueue extends (0, _priorityQueueJsDefault.default) {
    /**
   * @param {PriorityFunction} tilePriorityFunction Tile priority function.
   * @param {function(): ?} tileChangeCallback Function called on each tile change event.
   */ constructor(tilePriorityFunction, tileChangeCallback){
        super(/**
       * @param {Array} element Element.
       * @return {number} Priority.
       */ function(element) {
            return tilePriorityFunction.apply(null, element);
        }, /**
       * @param {Array} element Element.
       * @return {string} Key.
       */ function(element) {
            return /** @type {import("./Tile.js").default} */ element[0].getKey();
        });
        /** @private */ this.boundHandleTileChange_ = this.handleTileChange.bind(this);
        /**
     * @private
     * @type {function(): ?}
     */ this.tileChangeCallback_ = tileChangeCallback;
        /**
     * @private
     * @type {number}
     */ this.tilesLoading_ = 0;
        /**
     * @private
     * @type {!Object<string,boolean>}
     */ this.tilesLoadingKeys_ = {};
    }
    /**
   * @param {Array} element Element.
   * @return {boolean} The element was added to the queue.
   */ enqueue(element) {
        const added = super.enqueue(element);
        if (added) {
            const tile = element[0];
            tile.addEventListener((0, _eventTypeJsDefault.default).CHANGE, this.boundHandleTileChange_);
        }
        return added;
    }
    /**
   * @return {number} Number of tiles loading.
   */ getTilesLoading() {
        return this.tilesLoading_;
    }
    /**
   * @param {import("./events/Event.js").default} event Event.
   * @protected
   */ handleTileChange(event) {
        const tile = /** @type {import("./Tile.js").default} */ event.target;
        const state = tile.getState();
        if (state === (0, _tileStateJsDefault.default).LOADED || state === (0, _tileStateJsDefault.default).ERROR || state === (0, _tileStateJsDefault.default).EMPTY) {
            if (state !== (0, _tileStateJsDefault.default).ERROR) tile.removeEventListener((0, _eventTypeJsDefault.default).CHANGE, this.boundHandleTileChange_);
            const tileKey = tile.getKey();
            if (tileKey in this.tilesLoadingKeys_) {
                delete this.tilesLoadingKeys_[tileKey];
                --this.tilesLoading_;
            }
            this.tileChangeCallback_();
        }
    }
    /**
   * @param {number} maxTotalLoading Maximum number tiles to load simultaneously.
   * @param {number} maxNewLoads Maximum number of new tiles to load.
   */ loadMoreTiles(maxTotalLoading, maxNewLoads) {
        let newLoads = 0;
        let state, tile, tileKey;
        while(this.tilesLoading_ < maxTotalLoading && newLoads < maxNewLoads && this.getCount() > 0){
            tile = /** @type {import("./Tile.js").default} */ this.dequeue()[0];
            tileKey = tile.getKey();
            state = tile.getState();
            if (state === (0, _tileStateJsDefault.default).IDLE && !(tileKey in this.tilesLoadingKeys_)) {
                this.tilesLoadingKeys_[tileKey] = true;
                ++this.tilesLoading_;
                ++newLoads;
                tile.load();
            }
        }
    }
}
exports.default = TileQueue;
function getTilePriority(frameState, tile, tileSourceKey, tileCenter, tileResolution) {
    // Filter out tiles at higher zoom levels than the current zoom level, or that
    // are outside the visible extent.
    if (!frameState || !(tileSourceKey in frameState.wantedTiles)) return 0, _priorityQueueJs.DROP;
    if (!frameState.wantedTiles[tileSourceKey][tile.getKey()]) return 0, _priorityQueueJs.DROP;
    // Prioritize the highest zoom level tiles closest to the focus.
    // Tiles at higher zoom levels are prioritized using Math.log(tileResolution).
    // Within a zoom level, tiles are prioritized by the distance in pixels between
    // the center of the tile and the center of the viewport.  The factor of 65536
    // means that the prioritization should behave as desired for tiles up to
    // 65536 * Math.log(2) = 45426 pixels from the focus.
    const center = frameState.viewState.center;
    const deltaX = tileCenter[0] - center[0];
    const deltaY = tileCenter[1] - center[1];
    return 65536 * Math.log(tileResolution) + Math.sqrt(deltaX * deltaX + deltaY * deltaY) / tileResolution;
}

},{"./events/EventType.js":"hrQJ6","./structs/PriorityQueue.js":"jDGXE","./TileState.js":"2fodI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jDGXE":[function(require,module,exports) {
/**
 * @module ol/structs/PriorityQueue
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DROP", ()=>DROP);
var _assertsJs = require("../asserts.js");
var _objJs = require("../obj.js");
const DROP = Infinity;
/**
 * @classdesc
 * Priority queue.
 *
 * The implementation is inspired from the Closure Library's Heap class and
 * Python's heapq module.
 *
 * See https://github.com/google/closure-library/blob/master/closure/goog/structs/heap.js
 * and https://hg.python.org/cpython/file/2.7/Lib/heapq.py.
 *
 * @template T
 */ class PriorityQueue {
    /**
   * @param {function(T): number} priorityFunction Priority function.
   * @param {function(T): string} keyFunction Key function.
   */ constructor(priorityFunction, keyFunction){
        /**
     * @type {function(T): number}
     * @private
     */ this.priorityFunction_ = priorityFunction;
        /**
     * @type {function(T): string}
     * @private
     */ this.keyFunction_ = keyFunction;
        /**
     * @type {Array<T>}
     * @private
     */ this.elements_ = [];
        /**
     * @type {Array<number>}
     * @private
     */ this.priorities_ = [];
        /**
     * @type {!Object<string, boolean>}
     * @private
     */ this.queuedElements_ = {};
    }
    /**
   * FIXME empty description for jsdoc
   */ clear() {
        this.elements_.length = 0;
        this.priorities_.length = 0;
        (0, _objJs.clear)(this.queuedElements_);
    }
    /**
   * Remove and return the highest-priority element. O(log N).
   * @return {T} Element.
   */ dequeue() {
        const elements = this.elements_;
        const priorities = this.priorities_;
        const element = elements[0];
        if (elements.length == 1) {
            elements.length = 0;
            priorities.length = 0;
        } else {
            elements[0] = elements.pop();
            priorities[0] = priorities.pop();
            this.siftUp_(0);
        }
        const elementKey = this.keyFunction_(element);
        delete this.queuedElements_[elementKey];
        return element;
    }
    /**
   * Enqueue an element. O(log N).
   * @param {T} element Element.
   * @return {boolean} The element was added to the queue.
   */ enqueue(element) {
        (0, _assertsJs.assert)(!(this.keyFunction_(element) in this.queuedElements_), 31); // Tried to enqueue an `element` that was already added to the queue
        const priority = this.priorityFunction_(element);
        if (priority != DROP) {
            this.elements_.push(element);
            this.priorities_.push(priority);
            this.queuedElements_[this.keyFunction_(element)] = true;
            this.siftDown_(0, this.elements_.length - 1);
            return true;
        }
        return false;
    }
    /**
   * @return {number} Count.
   */ getCount() {
        return this.elements_.length;
    }
    /**
   * Gets the index of the left child of the node at the given index.
   * @param {number} index The index of the node to get the left child for.
   * @return {number} The index of the left child.
   * @private
   */ getLeftChildIndex_(index) {
        return index * 2 + 1;
    }
    /**
   * Gets the index of the right child of the node at the given index.
   * @param {number} index The index of the node to get the right child for.
   * @return {number} The index of the right child.
   * @private
   */ getRightChildIndex_(index) {
        return index * 2 + 2;
    }
    /**
   * Gets the index of the parent of the node at the given index.
   * @param {number} index The index of the node to get the parent for.
   * @return {number} The index of the parent.
   * @private
   */ getParentIndex_(index) {
        return index - 1 >> 1;
    }
    /**
   * Make this a heap. O(N).
   * @private
   */ heapify_() {
        let i;
        for(i = (this.elements_.length >> 1) - 1; i >= 0; i--)this.siftUp_(i);
    }
    /**
   * @return {boolean} Is empty.
   */ isEmpty() {
        return this.elements_.length === 0;
    }
    /**
   * @param {string} key Key.
   * @return {boolean} Is key queued.
   */ isKeyQueued(key) {
        return key in this.queuedElements_;
    }
    /**
   * @param {T} element Element.
   * @return {boolean} Is queued.
   */ isQueued(element) {
        return this.isKeyQueued(this.keyFunction_(element));
    }
    /**
   * @param {number} index The index of the node to move down.
   * @private
   */ siftUp_(index) {
        const elements = this.elements_;
        const priorities = this.priorities_;
        const count = elements.length;
        const element = elements[index];
        const priority = priorities[index];
        const startIndex = index;
        while(index < count >> 1){
            const lIndex = this.getLeftChildIndex_(index);
            const rIndex = this.getRightChildIndex_(index);
            const smallerChildIndex = rIndex < count && priorities[rIndex] < priorities[lIndex] ? rIndex : lIndex;
            elements[index] = elements[smallerChildIndex];
            priorities[index] = priorities[smallerChildIndex];
            index = smallerChildIndex;
        }
        elements[index] = element;
        priorities[index] = priority;
        this.siftDown_(startIndex, index);
    }
    /**
   * @param {number} startIndex The index of the root.
   * @param {number} index The index of the node to move up.
   * @private
   */ siftDown_(startIndex, index) {
        const elements = this.elements_;
        const priorities = this.priorities_;
        const element = elements[index];
        const priority = priorities[index];
        while(index > startIndex){
            const parentIndex = this.getParentIndex_(index);
            if (priorities[parentIndex] > priority) {
                elements[index] = elements[parentIndex];
                priorities[index] = priorities[parentIndex];
                index = parentIndex;
            } else break;
        }
        elements[index] = element;
        priorities[index] = priority;
    }
    /**
   * FIXME empty description for jsdoc
   */ reprioritize() {
        const priorityFunction = this.priorityFunction_;
        const elements = this.elements_;
        const priorities = this.priorities_;
        let index = 0;
        const n = elements.length;
        let element, i, priority;
        for(i = 0; i < n; ++i){
            element = elements[i];
            priority = priorityFunction(element);
            if (priority == DROP) delete this.queuedElements_[this.keyFunction_(element)];
            else {
                priorities[index] = priority;
                elements[index++] = element;
            }
        }
        elements.length = index;
        priorities.length = index;
        this.heapify_();
    }
}
exports.default = PriorityQueue;

},{"../asserts.js":"e4TiF","../obj.js":"3ssAG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2fodI":[function(require,module,exports) {
/**
 * @module ol/TileState
 */ /**
 * @enum {number}
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    IDLE: 0,
    LOADING: 1,
    LOADED: 2,
    /**
   * Indicates that tile loading failed
   * @type {number}
   */ ERROR: 3,
    EMPTY: 4
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kVrDf":[function(require,module,exports) {
/**
 * @module ol/control/defaults
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @typedef {Object} DefaultsOptions
 * @property {boolean} [attribution=true] Include
 * {@link module:ol/control/Attribution~Attribution}.
 * @property {import("./Attribution.js").Options} [attributionOptions]
 * Options for {@link module:ol/control/Attribution~Attribution}.
 * @property {boolean} [rotate=true] Include
 * {@link module:ol/control/Rotate~Rotate}.
 * @property {import("./Rotate.js").Options} [rotateOptions] Options
 * for {@link module:ol/control/Rotate~Rotate}.
 * @property {boolean} [zoom] Include {@link module:ol/control/Zoom~Zoom}.
 * @property {import("./Zoom.js").Options} [zoomOptions] Options for
 * {@link module:ol/control/Zoom~Zoom}.
 */ /**
 * Set of controls included in maps by default. Unless configured otherwise,
 * this returns a collection containing an instance of each of the following
 * controls:
 * * {@link module:ol/control/Zoom~Zoom}
 * * {@link module:ol/control/Rotate~Rotate}
 * * {@link module:ol/control/Attribution~Attribution}
 *
 * @param {DefaultsOptions} [options] Options for the default controls.
 * @return {Collection<import("./Control.js").default>} A collection of controls
 * to be used with the {@link module:ol/Map~Map} constructor's `controls` option.
 * @api
 */ parcelHelpers.export(exports, "defaults", ()=>defaults);
var _attributionJs = require("./Attribution.js");
var _attributionJsDefault = parcelHelpers.interopDefault(_attributionJs);
var _collectionJs = require("../Collection.js");
var _collectionJsDefault = parcelHelpers.interopDefault(_collectionJs);
var _rotateJs = require("./Rotate.js");
var _rotateJsDefault = parcelHelpers.interopDefault(_rotateJs);
var _zoomJs = require("./Zoom.js");
var _zoomJsDefault = parcelHelpers.interopDefault(_zoomJs);
function defaults(options) {
    options = options ? options : {};
    /** @type {Collection<import("./Control.js").default>} */ const controls = new (0, _collectionJsDefault.default)();
    const zoomControl = options.zoom !== undefined ? options.zoom : true;
    if (zoomControl) controls.push(new (0, _zoomJsDefault.default)(options.zoomOptions));
    const rotateControl = options.rotate !== undefined ? options.rotate : true;
    if (rotateControl) controls.push(new (0, _rotateJsDefault.default)(options.rotateOptions));
    const attributionControl = options.attribution !== undefined ? options.attribution : true;
    if (attributionControl) controls.push(new (0, _attributionJsDefault.default)(options.attributionOptions));
    return controls;
}

},{"./Attribution.js":"34CRm","../Collection.js":"gReoh","./Rotate.js":"h01dD","./Zoom.js":"956F8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"34CRm":[function(require,module,exports) {
/**
 * @module ol/control/Attribution
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _controlJs = require("./Control.js");
var _controlJsDefault = parcelHelpers.interopDefault(_controlJs);
var _eventTypeJs = require("../events/EventType.js");
var _eventTypeJsDefault = parcelHelpers.interopDefault(_eventTypeJs);
var _cssJs = require("../css.js");
var _arrayJs = require("../array.js");
var _domJs = require("../dom.js");
/**
 * @typedef {Object} Options
 * @property {string} [className='ol-attribution'] CSS class name.
 * @property {HTMLElement|string} [target] Specify a target if you
 * want the control to be rendered outside of the map's
 * viewport.
 * @property {boolean} [collapsible] Specify if attributions can
 * be collapsed. If not specified, sources control this behavior with their
 * `attributionsCollapsible` setting.
 * @property {boolean} [collapsed=true] Specify if attributions should
 * be collapsed at startup.
 * @property {string} [tipLabel='Attributions'] Text label to use for the button tip.
 * @property {string|HTMLElement} [label='i'] Text label to use for the
 * collapsed attributions button.
 * Instead of text, also an element (e.g. a `span` element) can be used.
 * @property {string} [expandClassName=className + '-expand'] CSS class name for the
 * collapsed attributions button.
 * @property {string|HTMLElement} [collapseLabel='›'] Text label to use
 * for the expanded attributions button.
 * Instead of text, also an element (e.g. a `span` element) can be used.
 * @property {string} [collapseClassName=className + '-collapse'] CSS class name for the
 * expanded attributions button.
 * @property {function(import("../MapEvent.js").default):void} [render] Function called when
 * the control should be re-rendered. This is called in a `requestAnimationFrame`
 * callback.
 */ /**
 * @classdesc
 * Control to show all the attributions associated with the layer sources
 * in the map. This control is one of the default controls included in maps.
 * By default it will show in the bottom right portion of the map, but this can
 * be changed by using a css selector for `.ol-attribution`.
 *
 * @api
 */ class Attribution extends (0, _controlJsDefault.default) {
    /**
   * @param {Options} [options] Attribution options.
   */ constructor(options){
        options = options ? options : {};
        super({
            element: document.createElement("div"),
            render: options.render,
            target: options.target
        });
        /**
     * @private
     * @type {HTMLElement}
     */ this.ulElement_ = document.createElement("ul");
        /**
     * @private
     * @type {boolean}
     */ this.collapsed_ = options.collapsed !== undefined ? options.collapsed : true;
        /**
     * @private
     * @type {boolean}
     */ this.userCollapsed_ = this.collapsed_;
        /**
     * @private
     * @type {boolean}
     */ this.overrideCollapsible_ = options.collapsible !== undefined;
        /**
     * @private
     * @type {boolean}
     */ this.collapsible_ = options.collapsible !== undefined ? options.collapsible : true;
        if (!this.collapsible_) this.collapsed_ = false;
        const className = options.className !== undefined ? options.className : "ol-attribution";
        const tipLabel = options.tipLabel !== undefined ? options.tipLabel : "Attributions";
        const expandClassName = options.expandClassName !== undefined ? options.expandClassName : className + "-expand";
        const collapseLabel = options.collapseLabel !== undefined ? options.collapseLabel : "›";
        const collapseClassName = options.collapseClassName !== undefined ? options.collapseClassName : className + "-collapse";
        if (typeof collapseLabel === "string") {
            /**
       * @private
       * @type {HTMLElement}
       */ this.collapseLabel_ = document.createElement("span");
            this.collapseLabel_.textContent = collapseLabel;
            this.collapseLabel_.className = collapseClassName;
        } else this.collapseLabel_ = collapseLabel;
        const label = options.label !== undefined ? options.label : "i";
        if (typeof label === "string") {
            /**
       * @private
       * @type {HTMLElement}
       */ this.label_ = document.createElement("span");
            this.label_.textContent = label;
            this.label_.className = expandClassName;
        } else this.label_ = label;
        const activeLabel = this.collapsible_ && !this.collapsed_ ? this.collapseLabel_ : this.label_;
        /**
     * @private
     * @type {HTMLElement}
     */ this.toggleButton_ = document.createElement("button");
        this.toggleButton_.setAttribute("type", "button");
        this.toggleButton_.setAttribute("aria-expanded", String(!this.collapsed_));
        this.toggleButton_.title = tipLabel;
        this.toggleButton_.appendChild(activeLabel);
        this.toggleButton_.addEventListener((0, _eventTypeJsDefault.default).CLICK, this.handleClick_.bind(this), false);
        const cssClasses = className + " " + (0, _cssJs.CLASS_UNSELECTABLE) + " " + (0, _cssJs.CLASS_CONTROL) + (this.collapsed_ && this.collapsible_ ? " " + (0, _cssJs.CLASS_COLLAPSED) : "") + (this.collapsible_ ? "" : " ol-uncollapsible");
        const element = this.element;
        element.className = cssClasses;
        element.appendChild(this.toggleButton_);
        element.appendChild(this.ulElement_);
        /**
     * A list of currently rendered resolutions.
     * @type {Array<string>}
     * @private
     */ this.renderedAttributions_ = [];
        /**
     * @private
     * @type {boolean}
     */ this.renderedVisible_ = true;
    }
    /**
   * Collect a list of visible attributions and set the collapsible state.
   * @param {import("../Map.js").FrameState} frameState Frame state.
   * @return {Array<string>} Attributions.
   * @private
   */ collectSourceAttributions_(frameState) {
        const visibleAttributions = Array.from(new Set(this.getMap().getAllLayers().flatMap((layer)=>layer.getAttributions(frameState))));
        const collapsible = !this.getMap().getAllLayers().some((layer)=>layer.getSource() && layer.getSource().getAttributionsCollapsible() === false);
        if (!this.overrideCollapsible_) this.setCollapsible(collapsible);
        return visibleAttributions;
    }
    /**
   * @private
   * @param {?import("../Map.js").FrameState} frameState Frame state.
   */ updateElement_(frameState) {
        if (!frameState) {
            if (this.renderedVisible_) {
                this.element.style.display = "none";
                this.renderedVisible_ = false;
            }
            return;
        }
        const attributions = this.collectSourceAttributions_(frameState);
        const visible = attributions.length > 0;
        if (this.renderedVisible_ != visible) {
            this.element.style.display = visible ? "" : "none";
            this.renderedVisible_ = visible;
        }
        if ((0, _arrayJs.equals)(attributions, this.renderedAttributions_)) return;
        (0, _domJs.removeChildren)(this.ulElement_);
        // append the attributions
        for(let i = 0, ii = attributions.length; i < ii; ++i){
            const element = document.createElement("li");
            element.innerHTML = attributions[i];
            this.ulElement_.appendChild(element);
        }
        this.renderedAttributions_ = attributions;
    }
    /**
   * @param {MouseEvent} event The event to handle
   * @private
   */ handleClick_(event) {
        event.preventDefault();
        this.handleToggle_();
        this.userCollapsed_ = this.collapsed_;
    }
    /**
   * @private
   */ handleToggle_() {
        this.element.classList.toggle((0, _cssJs.CLASS_COLLAPSED));
        if (this.collapsed_) (0, _domJs.replaceNode)(this.collapseLabel_, this.label_);
        else (0, _domJs.replaceNode)(this.label_, this.collapseLabel_);
        this.collapsed_ = !this.collapsed_;
        this.toggleButton_.setAttribute("aria-expanded", String(!this.collapsed_));
    }
    /**
   * Return `true` if the attribution is collapsible, `false` otherwise.
   * @return {boolean} True if the widget is collapsible.
   * @api
   */ getCollapsible() {
        return this.collapsible_;
    }
    /**
   * Set whether the attribution should be collapsible.
   * @param {boolean} collapsible True if the widget is collapsible.
   * @api
   */ setCollapsible(collapsible) {
        if (this.collapsible_ === collapsible) return;
        this.collapsible_ = collapsible;
        this.element.classList.toggle("ol-uncollapsible");
        if (this.userCollapsed_) this.handleToggle_();
    }
    /**
   * Collapse or expand the attribution according to the passed parameter. Will
   * not do anything if the attribution isn't collapsible or if the current
   * collapsed state is already the one requested.
   * @param {boolean} collapsed True if the widget is collapsed.
   * @api
   */ setCollapsed(collapsed) {
        this.userCollapsed_ = collapsed;
        if (!this.collapsible_ || this.collapsed_ === collapsed) return;
        this.handleToggle_();
    }
    /**
   * Return `true` when the attribution is currently collapsed or `false`
   * otherwise.
   * @return {boolean} True if the widget is collapsed.
   * @api
   */ getCollapsed() {
        return this.collapsed_;
    }
    /**
   * Update the attribution element.
   * @param {import("../MapEvent.js").default} mapEvent Map event.
   * @override
   */ render(mapEvent) {
        this.updateElement_(mapEvent.frameState);
    }
}
exports.default = Attribution;

},{"./Control.js":"a2mnq","../events/EventType.js":"hrQJ6","../css.js":"lDlNi","../array.js":"1Fbic","../dom.js":"84QzQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a2mnq":[function(require,module,exports) {
/**
 * @module ol/control/Control
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _objectJs = require("../Object.js");
var _objectJsDefault = parcelHelpers.interopDefault(_objectJs);
var _mapEventTypeJs = require("../MapEventType.js");
var _mapEventTypeJsDefault = parcelHelpers.interopDefault(_mapEventTypeJs);
var _functionsJs = require("../functions.js");
var _eventsJs = require("../events.js");
var _domJs = require("../dom.js");
/**
 * @typedef {Object} Options
 * @property {HTMLElement} [element] The element is the control's
 * container element. This only needs to be specified if you're developing
 * a custom control.
 * @property {function(import("../MapEvent.js").default):void} [render] Function called when
 * the control should be re-rendered. This is called in a `requestAnimationFrame`
 * callback.
 * @property {HTMLElement|string} [target] Specify a target if you want
 * the control to be rendered outside of the map's viewport.
 */ /**
 * @classdesc
 * A control is a visible widget with a DOM element in a fixed position on the
 * screen. They can involve user input (buttons), or be informational only;
 * the position is determined using CSS. By default these are placed in the
 * container with CSS class name `ol-overlaycontainer-stopevent`, but can use
 * any outside DOM element.
 *
 * This is the base class for controls. You can use it for simple custom
 * controls by creating the element with listeners, creating an instance:
 * ```js
 * const myControl = new Control({element: myElement});
 * ```
 * and then adding this to the map.
 *
 * The main advantage of having this as a control rather than a simple separate
 * DOM element is that preventing propagation is handled for you. Controls
 * will also be objects in a {@link module:ol/Collection~Collection}, so you can use their methods.
 *
 * You can also extend this base for your own control class. See
 * examples/custom-controls for an example of how to do this.
 *
 * @api
 */ class Control extends (0, _objectJsDefault.default) {
    /**
   * @param {Options} options Control options.
   */ constructor(options){
        super();
        const element = options.element;
        if (element && !options.target && !element.style.pointerEvents) element.style.pointerEvents = "auto";
        /**
     * @protected
     * @type {HTMLElement}
     */ this.element = element ? element : null;
        /**
     * @private
     * @type {HTMLElement}
     */ this.target_ = null;
        /**
     * @private
     * @type {import("../Map.js").default|null}
     */ this.map_ = null;
        /**
     * @protected
     * @type {!Array<import("../events.js").EventsKey>}
     */ this.listenerKeys = [];
        if (options.render) this.render = options.render;
        if (options.target) this.setTarget(options.target);
    }
    /**
   * Clean up.
   */ disposeInternal() {
        (0, _domJs.removeNode)(this.element);
        super.disposeInternal();
    }
    /**
   * Get the map associated with this control.
   * @return {import("../Map.js").default|null} Map.
   * @api
   */ getMap() {
        return this.map_;
    }
    /**
   * Remove the control from its current map and attach it to the new map.
   * Pass `null` to just remove the control from the current map.
   * Subclasses may set up event handlers to get notified about changes to
   * the map here.
   * @param {import("../Map.js").default|null} map Map.
   * @api
   */ setMap(map) {
        if (this.map_) (0, _domJs.removeNode)(this.element);
        for(let i = 0, ii = this.listenerKeys.length; i < ii; ++i)(0, _eventsJs.unlistenByKey)(this.listenerKeys[i]);
        this.listenerKeys.length = 0;
        this.map_ = map;
        if (map) {
            const target = this.target_ ? this.target_ : map.getOverlayContainerStopEvent();
            target.appendChild(this.element);
            if (this.render !== (0, _functionsJs.VOID)) this.listenerKeys.push((0, _eventsJs.listen)(map, (0, _mapEventTypeJsDefault.default).POSTRENDER, this.render, this));
            map.render();
        }
    }
    /**
   * Renders the control.
   * @param {import("../MapEvent.js").default} mapEvent Map event.
   * @api
   */ render(mapEvent) {}
    /**
   * This function is used to set a target element for the control. It has no
   * effect if it is called after the control has been added to the map (i.e.
   * after `setMap` is called on the control). If no `target` is set in the
   * options passed to the control constructor and if `setTarget` is not called
   * then the control is added to the map's overlay container.
   * @param {HTMLElement|string} target Target.
   * @api
   */ setTarget(target) {
        this.target_ = typeof target === "string" ? document.getElementById(target) : target;
    }
}
exports.default = Control;

},{"../Object.js":"1zG8z","../MapEventType.js":"1cFF9","../functions.js":"iqv8I","../events.js":"dcspA","../dom.js":"84QzQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h01dD":[function(require,module,exports) {
/**
 * @module ol/control/Rotate
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _controlJs = require("./Control.js");
var _controlJsDefault = parcelHelpers.interopDefault(_controlJs);
var _eventTypeJs = require("../events/EventType.js");
var _eventTypeJsDefault = parcelHelpers.interopDefault(_eventTypeJs);
var _cssJs = require("../css.js");
var _easingJs = require("../easing.js");
/**
 * @typedef {Object} Options
 * @property {string} [className='ol-rotate'] CSS class name.
 * @property {string|HTMLElement} [label='⇧'] Text label to use for the rotate button.
 * Instead of text, also an element (e.g. a `span` element) can be used.
 * @property {string} [tipLabel='Reset rotation'] Text label to use for the rotate tip.
 * @property {string} [compassClassName='ol-compass'] CSS class name for the compass.
 * @property {number} [duration=250] Animation duration in milliseconds.
 * @property {boolean} [autoHide=true] Hide the control when rotation is 0.
 * @property {function(import("../MapEvent.js").default):void} [render] Function called when the control should
 * be re-rendered. This is called in a `requestAnimationFrame` callback.
 * @property {function():void} [resetNorth] Function called when the control is clicked.
 * This will override the default `resetNorth`.
 * @property {HTMLElement|string} [target] Specify a target if you want the control to be
 * rendered outside of the map's viewport.
 */ /**
 * @classdesc
 * A button control to reset rotation to 0.
 * To style this control use css selector `.ol-rotate`. A `.ol-hidden` css
 * selector is added to the button when the rotation is 0.
 *
 * @api
 */ class Rotate extends (0, _controlJsDefault.default) {
    /**
   * @param {Options} [options] Rotate options.
   */ constructor(options){
        options = options ? options : {};
        super({
            element: document.createElement("div"),
            render: options.render,
            target: options.target
        });
        const className = options.className !== undefined ? options.className : "ol-rotate";
        const label = options.label !== undefined ? options.label : "⇧";
        const compassClassName = options.compassClassName !== undefined ? options.compassClassName : "ol-compass";
        /**
     * @type {HTMLElement}
     * @private
     */ this.label_ = null;
        if (typeof label === "string") {
            this.label_ = document.createElement("span");
            this.label_.className = compassClassName;
            this.label_.textContent = label;
        } else {
            this.label_ = label;
            this.label_.classList.add(compassClassName);
        }
        const tipLabel = options.tipLabel ? options.tipLabel : "Reset rotation";
        const button = document.createElement("button");
        button.className = className + "-reset";
        button.setAttribute("type", "button");
        button.title = tipLabel;
        button.appendChild(this.label_);
        button.addEventListener((0, _eventTypeJsDefault.default).CLICK, this.handleClick_.bind(this), false);
        const cssClasses = className + " " + (0, _cssJs.CLASS_UNSELECTABLE) + " " + (0, _cssJs.CLASS_CONTROL);
        const element = this.element;
        element.className = cssClasses;
        element.appendChild(button);
        this.callResetNorth_ = options.resetNorth ? options.resetNorth : undefined;
        /**
     * @type {number}
     * @private
     */ this.duration_ = options.duration !== undefined ? options.duration : 250;
        /**
     * @type {boolean}
     * @private
     */ this.autoHide_ = options.autoHide !== undefined ? options.autoHide : true;
        /**
     * @private
     * @type {number|undefined}
     */ this.rotation_ = undefined;
        if (this.autoHide_) this.element.classList.add((0, _cssJs.CLASS_HIDDEN));
    }
    /**
   * @param {MouseEvent} event The event to handle
   * @private
   */ handleClick_(event) {
        event.preventDefault();
        if (this.callResetNorth_ !== undefined) this.callResetNorth_();
        else this.resetNorth_();
    }
    /**
   * @private
   */ resetNorth_() {
        const map = this.getMap();
        const view = map.getView();
        if (!view) // the map does not have a view, so we can't act
        // upon it
        return;
        const rotation = view.getRotation();
        if (rotation !== undefined) {
            if (this.duration_ > 0 && rotation % (2 * Math.PI) !== 0) view.animate({
                rotation: 0,
                duration: this.duration_,
                easing: (0, _easingJs.easeOut)
            });
            else view.setRotation(0);
        }
    }
    /**
   * Update the rotate control element.
   * @param {import("../MapEvent.js").default} mapEvent Map event.
   * @override
   */ render(mapEvent) {
        const frameState = mapEvent.frameState;
        if (!frameState) return;
        const rotation = frameState.viewState.rotation;
        if (rotation != this.rotation_) {
            const transform = "rotate(" + rotation + "rad)";
            if (this.autoHide_) {
                const contains = this.element.classList.contains((0, _cssJs.CLASS_HIDDEN));
                if (!contains && rotation === 0) this.element.classList.add((0, _cssJs.CLASS_HIDDEN));
                else if (contains && rotation !== 0) this.element.classList.remove((0, _cssJs.CLASS_HIDDEN));
            }
            this.label_.style.transform = transform;
        }
        this.rotation_ = rotation;
    }
}
exports.default = Rotate;

},{"./Control.js":"a2mnq","../events/EventType.js":"hrQJ6","../css.js":"lDlNi","../easing.js":"fYITA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"956F8":[function(require,module,exports) {
/**
 * @module ol/control/Zoom
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _controlJs = require("./Control.js");
var _controlJsDefault = parcelHelpers.interopDefault(_controlJs);
var _eventTypeJs = require("../events/EventType.js");
var _eventTypeJsDefault = parcelHelpers.interopDefault(_eventTypeJs);
var _cssJs = require("../css.js");
var _easingJs = require("../easing.js");
/**
 * @typedef {Object} Options
 * @property {number} [duration=250] Animation duration in milliseconds.
 * @property {string} [className='ol-zoom'] CSS class name.
 * @property {string} [zoomInClassName=className + '-in'] CSS class name for the zoom-in button.
 * @property {string} [zoomOutClassName=className + '-out'] CSS class name for the zoom-out button.
 * @property {string|HTMLElement} [zoomInLabel='+'] Text label to use for the zoom-in
 * button. Instead of text, also an element (e.g. a `span` element) can be used.
 * @property {string|HTMLElement} [zoomOutLabel='–'] Text label to use for the zoom-out button.
 * Instead of text, also an element (e.g. a `span` element) can be used.
 * @property {string} [zoomInTipLabel='Zoom in'] Text label to use for the button tip.
 * @property {string} [zoomOutTipLabel='Zoom out'] Text label to use for the button tip.
 * @property {number} [delta=1] The zoom delta applied on each click.
 * @property {HTMLElement|string} [target] Specify a target if you want the control to be
 * rendered outside of the map's viewport.
 */ /**
 * @classdesc
 * A control with 2 buttons, one for zoom in and one for zoom out.
 * This control is one of the default controls of a map. To style this control
 * use css selectors `.ol-zoom-in` and `.ol-zoom-out`.
 *
 * @api
 */ class Zoom extends (0, _controlJsDefault.default) {
    /**
   * @param {Options} [options] Zoom options.
   */ constructor(options){
        options = options ? options : {};
        super({
            element: document.createElement("div"),
            target: options.target
        });
        const className = options.className !== undefined ? options.className : "ol-zoom";
        const delta = options.delta !== undefined ? options.delta : 1;
        const zoomInClassName = options.zoomInClassName !== undefined ? options.zoomInClassName : className + "-in";
        const zoomOutClassName = options.zoomOutClassName !== undefined ? options.zoomOutClassName : className + "-out";
        const zoomInLabel = options.zoomInLabel !== undefined ? options.zoomInLabel : "+";
        const zoomOutLabel = options.zoomOutLabel !== undefined ? options.zoomOutLabel : "–";
        const zoomInTipLabel = options.zoomInTipLabel !== undefined ? options.zoomInTipLabel : "Zoom in";
        const zoomOutTipLabel = options.zoomOutTipLabel !== undefined ? options.zoomOutTipLabel : "Zoom out";
        const inElement = document.createElement("button");
        inElement.className = zoomInClassName;
        inElement.setAttribute("type", "button");
        inElement.title = zoomInTipLabel;
        inElement.appendChild(typeof zoomInLabel === "string" ? document.createTextNode(zoomInLabel) : zoomInLabel);
        inElement.addEventListener((0, _eventTypeJsDefault.default).CLICK, this.handleClick_.bind(this, delta), false);
        const outElement = document.createElement("button");
        outElement.className = zoomOutClassName;
        outElement.setAttribute("type", "button");
        outElement.title = zoomOutTipLabel;
        outElement.appendChild(typeof zoomOutLabel === "string" ? document.createTextNode(zoomOutLabel) : zoomOutLabel);
        outElement.addEventListener((0, _eventTypeJsDefault.default).CLICK, this.handleClick_.bind(this, -delta), false);
        const cssClasses = className + " " + (0, _cssJs.CLASS_UNSELECTABLE) + " " + (0, _cssJs.CLASS_CONTROL);
        const element = this.element;
        element.className = cssClasses;
        element.appendChild(inElement);
        element.appendChild(outElement);
        /**
     * @type {number}
     * @private
     */ this.duration_ = options.duration !== undefined ? options.duration : 250;
    }
    /**
   * @param {number} delta Zoom delta.
   * @param {MouseEvent} event The event to handle
   * @private
   */ handleClick_(delta, event) {
        event.preventDefault();
        this.zoomByDelta_(delta);
    }
    /**
   * @param {number} delta Zoom delta.
   * @private
   */ zoomByDelta_(delta) {
        const map = this.getMap();
        const view = map.getView();
        if (!view) // the map does not have a view, so we can't act
        // upon it
        return;
        const currentZoom = view.getZoom();
        if (currentZoom !== undefined) {
            const newZoom = view.getConstrainedZoom(currentZoom + delta);
            if (this.duration_ > 0) {
                if (view.getAnimating()) view.cancelAnimations();
                view.animate({
                    zoom: newZoom,
                    duration: this.duration_,
                    easing: (0, _easingJs.easeOut)
                });
            } else view.setZoom(newZoom);
        }
    }
}
exports.default = Zoom;

},{"./Control.js":"a2mnq","../events/EventType.js":"hrQJ6","../css.js":"lDlNi","../easing.js":"fYITA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1L9Hg":[function(require,module,exports) {
/**
 * @module ol/interaction/defaults
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @typedef {Object} DefaultsOptions
 * @property {boolean} [altShiftDragRotate=true] Whether Alt-Shift-drag rotate is
 * desired.
 * @property {boolean} [onFocusOnly=false] Interact only when the map has the
 * focus. This affects the `MouseWheelZoom` and `DragPan` interactions and is
 * useful when page scroll is desired for maps that do not have the browser's
 * focus.
 * @property {boolean} [doubleClickZoom=true] Whether double click zoom is
 * desired.
 * @property {boolean} [keyboard=true] Whether keyboard interaction is desired.
 * @property {boolean} [mouseWheelZoom=true] Whether mousewheel zoom is desired.
 * @property {boolean} [shiftDragZoom=true] Whether Shift-drag zoom is desired.
 * @property {boolean} [dragPan=true] Whether drag pan is desired.
 * @property {boolean} [pinchRotate=true] Whether pinch rotate is desired.
 * @property {boolean} [pinchZoom=true] Whether pinch zoom is desired.
 * @property {number} [zoomDelta] Zoom level delta when using keyboard or double click zoom.
 * @property {number} [zoomDuration] Duration of the zoom animation in
 * milliseconds.
 */ /**
 * Set of interactions included in maps by default. Specific interactions can be
 * excluded by setting the appropriate option to false in the constructor
 * options, but the order of the interactions is fixed.  If you want to specify
 * a different order for interactions, you will need to create your own
 * {@link module:ol/interaction/Interaction~Interaction} instances and insert
 * them into a {@link module:ol/Collection~Collection} in the order you want
 * before creating your {@link module:ol/Map~Map} instance. Changing the order can
 * be of interest if the event propagation needs to be stopped at a point.
 * The default set of interactions, in sequence, is:
 * * {@link module:ol/interaction/DragRotate~DragRotate}
 * * {@link module:ol/interaction/DoubleClickZoom~DoubleClickZoom}
 * * {@link module:ol/interaction/DragPan~DragPan}
 * * {@link module:ol/interaction/PinchRotate~PinchRotate}
 * * {@link module:ol/interaction/PinchZoom~PinchZoom}
 * * {@link module:ol/interaction/KeyboardPan~KeyboardPan}
 * * {@link module:ol/interaction/KeyboardZoom~KeyboardZoom}
 * * {@link module:ol/interaction/MouseWheelZoom~MouseWheelZoom}
 * * {@link module:ol/interaction/DragZoom~DragZoom}
 *
 * @param {DefaultsOptions} [options] Defaults options.
 * @return {Collection<import("./Interaction.js").default>}
 * A collection of interactions to be used with the {@link module:ol/Map~Map}
 * constructor's `interactions` option.
 * @api
 */ parcelHelpers.export(exports, "defaults", ()=>defaults);
var _collectionJs = require("../Collection.js");
var _collectionJsDefault = parcelHelpers.interopDefault(_collectionJs);
var _doubleClickZoomJs = require("./DoubleClickZoom.js");
var _doubleClickZoomJsDefault = parcelHelpers.interopDefault(_doubleClickZoomJs);
var _dragPanJs = require("./DragPan.js");
var _dragPanJsDefault = parcelHelpers.interopDefault(_dragPanJs);
var _dragRotateJs = require("./DragRotate.js");
var _dragRotateJsDefault = parcelHelpers.interopDefault(_dragRotateJs);
var _dragZoomJs = require("./DragZoom.js");
var _dragZoomJsDefault = parcelHelpers.interopDefault(_dragZoomJs);
var _keyboardPanJs = require("./KeyboardPan.js");
var _keyboardPanJsDefault = parcelHelpers.interopDefault(_keyboardPanJs);
var _keyboardZoomJs = require("./KeyboardZoom.js");
var _keyboardZoomJsDefault = parcelHelpers.interopDefault(_keyboardZoomJs);
var _kineticJs = require("../Kinetic.js");
var _kineticJsDefault = parcelHelpers.interopDefault(_kineticJs);
var _mouseWheelZoomJs = require("./MouseWheelZoom.js");
var _mouseWheelZoomJsDefault = parcelHelpers.interopDefault(_mouseWheelZoomJs);
var _pinchRotateJs = require("./PinchRotate.js");
var _pinchRotateJsDefault = parcelHelpers.interopDefault(_pinchRotateJs);
var _pinchZoomJs = require("./PinchZoom.js");
var _pinchZoomJsDefault = parcelHelpers.interopDefault(_pinchZoomJs);
function defaults(options) {
    options = options ? options : {};
    /** @type {Collection<import("./Interaction.js").default>} */ const interactions = new (0, _collectionJsDefault.default)();
    const kinetic = new (0, _kineticJsDefault.default)(-0.005, 0.05, 100);
    const altShiftDragRotate = options.altShiftDragRotate !== undefined ? options.altShiftDragRotate : true;
    if (altShiftDragRotate) interactions.push(new (0, _dragRotateJsDefault.default)());
    const doubleClickZoom = options.doubleClickZoom !== undefined ? options.doubleClickZoom : true;
    if (doubleClickZoom) interactions.push(new (0, _doubleClickZoomJsDefault.default)({
        delta: options.zoomDelta,
        duration: options.zoomDuration
    }));
    const dragPan = options.dragPan !== undefined ? options.dragPan : true;
    if (dragPan) interactions.push(new (0, _dragPanJsDefault.default)({
        onFocusOnly: options.onFocusOnly,
        kinetic: kinetic
    }));
    const pinchRotate = options.pinchRotate !== undefined ? options.pinchRotate : true;
    if (pinchRotate) interactions.push(new (0, _pinchRotateJsDefault.default)());
    const pinchZoom = options.pinchZoom !== undefined ? options.pinchZoom : true;
    if (pinchZoom) interactions.push(new (0, _pinchZoomJsDefault.default)({
        duration: options.zoomDuration
    }));
    const keyboard = options.keyboard !== undefined ? options.keyboard : true;
    if (keyboard) {
        interactions.push(new (0, _keyboardPanJsDefault.default)());
        interactions.push(new (0, _keyboardZoomJsDefault.default)({
            delta: options.zoomDelta,
            duration: options.zoomDuration
        }));
    }
    const mouseWheelZoom = options.mouseWheelZoom !== undefined ? options.mouseWheelZoom : true;
    if (mouseWheelZoom) interactions.push(new (0, _mouseWheelZoomJsDefault.default)({
        onFocusOnly: options.onFocusOnly,
        duration: options.zoomDuration
    }));
    const shiftDragZoom = options.shiftDragZoom !== undefined ? options.shiftDragZoom : true;
    if (shiftDragZoom) interactions.push(new (0, _dragZoomJsDefault.default)({
        duration: options.zoomDuration
    }));
    return interactions;
}

},{"../Collection.js":"gReoh","./DoubleClickZoom.js":"kVR84","./DragPan.js":"4zDnZ","./DragRotate.js":"83edZ","./DragZoom.js":"8xtsQ","./KeyboardPan.js":"49Q4F","./KeyboardZoom.js":"4RjL4","../Kinetic.js":"aWbSH","./MouseWheelZoom.js":"gKXuR","./PinchRotate.js":"5f8eF","./PinchZoom.js":"5RZxv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kVR84":[function(require,module,exports) {
/**
 * @module ol/interaction/DoubleClickZoom
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _interactionJs = require("./Interaction.js");
var _interactionJsDefault = parcelHelpers.interopDefault(_interactionJs);
var _mapBrowserEventTypeJs = require("../MapBrowserEventType.js");
var _mapBrowserEventTypeJsDefault = parcelHelpers.interopDefault(_mapBrowserEventTypeJs);
/**
 * @typedef {Object} Options
 * @property {number} [duration=250] Animation duration in milliseconds.
 * @property {number} [delta=1] The zoom delta applied on each double click.
 */ /**
 * @classdesc
 * Allows the user to zoom by double-clicking on the map.
 * @api
 */ class DoubleClickZoom extends (0, _interactionJsDefault.default) {
    /**
   * @param {Options} [options] Options.
   */ constructor(options){
        super();
        options = options ? options : {};
        /**
     * @private
     * @type {number}
     */ this.delta_ = options.delta ? options.delta : 1;
        /**
     * @private
     * @type {number}
     */ this.duration_ = options.duration !== undefined ? options.duration : 250;
    }
    /**
   * Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event} (if it was a
   * doubleclick) and eventually zooms the map.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
   * @return {boolean} `false` to stop event propagation.
   */ handleEvent(mapBrowserEvent) {
        let stopEvent = false;
        if (mapBrowserEvent.type == (0, _mapBrowserEventTypeJsDefault.default).DBLCLICK) {
            const browserEvent = /** @type {MouseEvent} */ mapBrowserEvent.originalEvent;
            const map = mapBrowserEvent.map;
            const anchor = mapBrowserEvent.coordinate;
            const delta = browserEvent.shiftKey ? -this.delta_ : this.delta_;
            const view = map.getView();
            (0, _interactionJs.zoomByDelta)(view, delta, anchor, this.duration_);
            browserEvent.preventDefault();
            stopEvent = true;
        }
        return !stopEvent;
    }
}
exports.default = DoubleClickZoom;

},{"./Interaction.js":"g1FUs","../MapBrowserEventType.js":"fB9ae","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g1FUs":[function(require,module,exports) {
/**
 * @module ol/interaction/Interaction
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @param {import("../View.js").default} view View.
 * @param {import("../coordinate.js").Coordinate} delta Delta.
 * @param {number} [duration] Duration.
 */ parcelHelpers.export(exports, "pan", ()=>pan);
/**
 * @param {import("../View.js").default} view View.
 * @param {number} delta Delta from previous zoom level.
 * @param {import("../coordinate.js").Coordinate} [anchor] Anchor coordinate in the user projection.
 * @param {number} [duration] Duration.
 */ parcelHelpers.export(exports, "zoomByDelta", ()=>zoomByDelta);
var _objectJs = require("../Object.js");
var _objectJsDefault = parcelHelpers.interopDefault(_objectJs);
var _propertyJs = require("./Property.js");
var _propertyJsDefault = parcelHelpers.interopDefault(_propertyJs);
var _easingJs = require("../easing.js");
/***
 * @template Return
 * @typedef {import("../Observable").OnSignature<import("../Observable").EventTypes, import("../events/Event.js").default, Return> &
 *   import("../Observable").OnSignature<import("../ObjectEventType").Types|
 *     'change:active', import("../Object").ObjectEvent, Return> &
 *   import("../Observable").CombinedOnSignature<import("../Observable").EventTypes|import("../ObjectEventType").Types|
 *     'change:active', Return>} InteractionOnSignature
 */ /**
 * Object literal with config options for interactions.
 * @typedef {Object} InteractionOptions
 * @property {function(import("../MapBrowserEvent.js").default):boolean} handleEvent
 * Method called by the map to notify the interaction that a browser event was
 * dispatched to the map. If the function returns a falsy value, propagation of
 * the event to other interactions in the map's interactions chain will be
 * prevented (this includes functions with no explicit return). The interactions
 * are traversed in reverse order of the interactions collection of the map.
 */ /**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * User actions that change the state of the map. Some are similar to controls,
 * but are not associated with a DOM element.
 * For example, {@link module:ol/interaction/KeyboardZoom~KeyboardZoom} is
 * functionally the same as {@link module:ol/control/Zoom~Zoom}, but triggered
 * by a keyboard event not a button element event.
 * Although interactions do not have a DOM element, some of them do render
 * vectors and so are visible on the screen.
 * @api
 */ class Interaction extends (0, _objectJsDefault.default) {
    /**
   * @param {InteractionOptions} [options] Options.
   */ constructor(options){
        super();
        /***
     * @type {InteractionOnSignature<import("../events").EventsKey>}
     */ this.on;
        /***
     * @type {InteractionOnSignature<import("../events").EventsKey>}
     */ this.once;
        /***
     * @type {InteractionOnSignature<void>}
     */ this.un;
        if (options && options.handleEvent) this.handleEvent = options.handleEvent;
        /**
     * @private
     * @type {import("../Map.js").default|null}
     */ this.map_ = null;
        this.setActive(true);
    }
    /**
   * Return whether the interaction is currently active.
   * @return {boolean} `true` if the interaction is active, `false` otherwise.
   * @observable
   * @api
   */ getActive() {
        return /** @type {boolean} */ this.get((0, _propertyJsDefault.default).ACTIVE);
    }
    /**
   * Get the map associated with this interaction.
   * @return {import("../Map.js").default|null} Map.
   * @api
   */ getMap() {
        return this.map_;
    }
    /**
   * Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event}.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
   * @return {boolean} `false` to stop event propagation.
   * @api
   */ handleEvent(mapBrowserEvent) {
        return true;
    }
    /**
   * Activate or deactivate the interaction.
   * @param {boolean} active Active.
   * @observable
   * @api
   */ setActive(active) {
        this.set((0, _propertyJsDefault.default).ACTIVE, active);
    }
    /**
   * Remove the interaction from its current map and attach it to the new map.
   * Subclasses may set up event handlers to get notified about changes to
   * the map here.
   * @param {import("../Map.js").default|null} map Map.
   */ setMap(map) {
        this.map_ = map;
    }
}
function pan(view, delta, duration) {
    const currentCenter = view.getCenterInternal();
    if (currentCenter) {
        const center = [
            currentCenter[0] + delta[0],
            currentCenter[1] + delta[1]
        ];
        view.animateInternal({
            duration: duration !== undefined ? duration : 250,
            easing: (0, _easingJs.linear),
            center: view.getConstrainedCenter(center)
        });
    }
}
function zoomByDelta(view, delta, anchor, duration) {
    const currentZoom = view.getZoom();
    if (currentZoom === undefined) return;
    const newZoom = view.getConstrainedZoom(currentZoom + delta);
    const newResolution = view.getResolutionForZoom(newZoom);
    if (view.getAnimating()) view.cancelAnimations();
    view.animate({
        resolution: newResolution,
        anchor: anchor,
        duration: duration !== undefined ? duration : 250,
        easing: (0, _easingJs.easeOut)
    });
}
exports.default = Interaction;

},{"../Object.js":"1zG8z","./Property.js":"lHt12","../easing.js":"fYITA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lHt12":[function(require,module,exports) {
/**
 * @module ol/interaction/Property
 */ /**
 * @enum {string}
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    ACTIVE: "active"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4zDnZ":[function(require,module,exports) {
/**
 * @module ol/interaction/DragPan
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _pointerJs = require("./Pointer.js");
var _pointerJsDefault = parcelHelpers.interopDefault(_pointerJs);
var _functionsJs = require("../functions.js");
var _conditionJs = require("../events/condition.js");
var _easingJs = require("../easing.js");
var _coordinateJs = require("../coordinate.js");
/**
 * @typedef {Object} Options
 * @property {import("../events/condition.js").Condition} [condition] A function that takes an {@link module:ol/MapBrowserEvent~MapBrowserEvent} and returns a boolean
 * to indicate whether that event should be handled.
 * Default is {@link module:ol/events/condition.noModifierKeys} and {@link module:ol/events/condition.primaryAction}.
 * @property {boolean} [onFocusOnly=false] When the map's target has a `tabindex` attribute set,
 * the interaction will only handle events when the map has the focus.
 * @property {import("../Kinetic.js").default} [kinetic] Kinetic inertia to apply to the pan.
 */ /**
 * @classdesc
 * Allows the user to pan the map by dragging the map.
 * @api
 */ class DragPan extends (0, _pointerJsDefault.default) {
    /**
   * @param {Options} [options] Options.
   */ constructor(options){
        super({
            stopDown: (0, _functionsJs.FALSE)
        });
        options = options ? options : {};
        /**
     * @private
     * @type {import("../Kinetic.js").default|undefined}
     */ this.kinetic_ = options.kinetic;
        /**
     * @type {import("../pixel.js").Pixel}
     */ this.lastCentroid = null;
        /**
     * @type {number}
     */ this.lastPointersCount_;
        /**
     * @type {boolean}
     */ this.panning_ = false;
        const condition = options.condition ? options.condition : (0, _conditionJs.all)((0, _conditionJs.noModifierKeys), (0, _conditionJs.primaryAction));
        /**
     * @private
     * @type {import("../events/condition.js").Condition}
     */ this.condition_ = options.onFocusOnly ? (0, _conditionJs.all)((0, _conditionJs.focusWithTabindex), condition) : condition;
        /**
     * @private
     * @type {boolean}
     */ this.noKinetic_ = false;
    }
    /**
   * Handle pointer drag events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   */ handleDragEvent(mapBrowserEvent) {
        const map = mapBrowserEvent.map;
        if (!this.panning_) {
            this.panning_ = true;
            map.getView().beginInteraction();
        }
        const targetPointers = this.targetPointers;
        const centroid = map.getEventPixel((0, _pointerJs.centroid)(targetPointers));
        if (targetPointers.length == this.lastPointersCount_) {
            if (this.kinetic_) this.kinetic_.update(centroid[0], centroid[1]);
            if (this.lastCentroid) {
                const delta = [
                    this.lastCentroid[0] - centroid[0],
                    centroid[1] - this.lastCentroid[1]
                ];
                const map = mapBrowserEvent.map;
                const view = map.getView();
                (0, _coordinateJs.scale)(delta, view.getResolution());
                (0, _coordinateJs.rotate)(delta, view.getRotation());
                view.adjustCenterInternal(delta);
            }
        } else if (this.kinetic_) // reset so we don't overestimate the kinetic energy after
        // after one finger down, tiny drag, second finger down
        this.kinetic_.begin();
        this.lastCentroid = centroid;
        this.lastPointersCount_ = targetPointers.length;
        mapBrowserEvent.originalEvent.preventDefault();
    }
    /**
   * Handle pointer up events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   */ handleUpEvent(mapBrowserEvent) {
        const map = mapBrowserEvent.map;
        const view = map.getView();
        if (this.targetPointers.length === 0) {
            if (!this.noKinetic_ && this.kinetic_ && this.kinetic_.end()) {
                const distance = this.kinetic_.getDistance();
                const angle = this.kinetic_.getAngle();
                const center = view.getCenterInternal();
                const centerpx = map.getPixelFromCoordinateInternal(center);
                const dest = map.getCoordinateFromPixelInternal([
                    centerpx[0] - distance * Math.cos(angle),
                    centerpx[1] - distance * Math.sin(angle)
                ]);
                view.animateInternal({
                    center: view.getConstrainedCenter(dest),
                    duration: 500,
                    easing: (0, _easingJs.easeOut)
                });
            }
            if (this.panning_) {
                this.panning_ = false;
                view.endInteraction();
            }
            return false;
        }
        if (this.kinetic_) // reset so we don't overestimate the kinetic energy after
        // after one finger up, tiny drag, second finger up
        this.kinetic_.begin();
        this.lastCentroid = null;
        return true;
    }
    /**
   * Handle pointer down events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   */ handleDownEvent(mapBrowserEvent) {
        if (this.targetPointers.length > 0 && this.condition_(mapBrowserEvent)) {
            const map = mapBrowserEvent.map;
            const view = map.getView();
            this.lastCentroid = null;
            // stop any current animation
            if (view.getAnimating()) view.cancelAnimations();
            if (this.kinetic_) this.kinetic_.begin();
            // No kinetic as soon as more than one pointer on the screen is
            // detected. This is to prevent nasty pans after pinch.
            this.noKinetic_ = this.targetPointers.length > 1;
            return true;
        }
        return false;
    }
}
exports.default = DragPan;

},{"./Pointer.js":"1GIxf","../functions.js":"iqv8I","../events/condition.js":"iQTYY","../easing.js":"fYITA","../coordinate.js":"85Vu7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1GIxf":[function(require,module,exports) {
/**
 * @module ol/interaction/Pointer
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @param {Array<PointerEvent>} pointerEvents List of events.
 * @return {{clientX: number, clientY: number}} Centroid pixel.
 */ parcelHelpers.export(exports, "centroid", ()=>centroid);
var _interactionJs = require("./Interaction.js");
var _interactionJsDefault = parcelHelpers.interopDefault(_interactionJs);
var _mapBrowserEventTypeJs = require("../MapBrowserEventType.js");
var _mapBrowserEventTypeJsDefault = parcelHelpers.interopDefault(_mapBrowserEventTypeJs);
/**
 * @typedef {Object} Options
 * @property {function(import("../MapBrowserEvent.js").default):boolean} [handleDownEvent]
 * Function handling "down" events. If the function returns `true` then a drag
 * sequence is started.
 * @property {function(import("../MapBrowserEvent.js").default):void} [handleDragEvent]
 * Function handling "drag" events. This function is called on "move" events
 * during a drag sequence.
 * @property {function(import("../MapBrowserEvent.js").default):boolean} [handleEvent]
 * Method called by the map to notify the interaction that a browser event was
 * dispatched to the map. The function may return `false` to prevent the
 * propagation of the event to other interactions in the map's interactions
 * chain.
 * @property {function(import("../MapBrowserEvent.js").default):void} [handleMoveEvent]
 * Function handling "move" events. This function is called on "move" events.
 * This functions is also called during a drag sequence, so during a drag
 * sequence both the `handleDragEvent` function and this function are called.
 * If `handleDownEvent` is defined and it returns true this function will not
 * be called during a drag sequence.
 * @property {function(import("../MapBrowserEvent.js").default):boolean} [handleUpEvent]
 *  Function handling "up" events. If the function returns `false` then the
 * current drag sequence is stopped.
 * @property {function(boolean):boolean} [stopDown]
 * Should the down event be propagated to other interactions, or should be
 * stopped?
 */ /**
 * @classdesc
 * Base class that calls user-defined functions on `down`, `move` and `up`
 * events. This class also manages "drag sequences".
 *
 * When the `handleDownEvent` user function returns `true` a drag sequence is
 * started. During a drag sequence the `handleDragEvent` user function is
 * called on `move` events. The drag sequence ends when the `handleUpEvent`
 * user function is called and returns `false`.
 * @api
 */ class PointerInteraction extends (0, _interactionJsDefault.default) {
    /**
   * @param {Options} [options] Options.
   */ constructor(options){
        options = options ? options : {};
        super(/** @type {import("./Interaction.js").InteractionOptions} */ options);
        if (options.handleDownEvent) this.handleDownEvent = options.handleDownEvent;
        if (options.handleDragEvent) this.handleDragEvent = options.handleDragEvent;
        if (options.handleMoveEvent) this.handleMoveEvent = options.handleMoveEvent;
        if (options.handleUpEvent) this.handleUpEvent = options.handleUpEvent;
        if (options.stopDown) this.stopDown = options.stopDown;
        /**
     * @type {boolean}
     * @protected
     */ this.handlingDownUpSequence = false;
        /**
     * @type {Array<PointerEvent>}
     * @protected
     */ this.targetPointers = [];
    }
    /**
   * Returns the current number of pointers involved in the interaction,
   * e.g. `2` when two fingers are used.
   * @return {number} The number of pointers.
   * @api
   */ getPointerCount() {
        return this.targetPointers.length;
    }
    /**
   * Handle pointer down events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   * @protected
   */ handleDownEvent(mapBrowserEvent) {
        return false;
    }
    /**
   * Handle pointer drag events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @protected
   */ handleDragEvent(mapBrowserEvent) {}
    /**
   * Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event} and may call into
   * other functions, if event sequences like e.g. 'drag' or 'down-up' etc. are
   * detected.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
   * @return {boolean} `false` to stop event propagation.
   * @api
   */ handleEvent(mapBrowserEvent) {
        if (!mapBrowserEvent.originalEvent) return true;
        let stopEvent = false;
        this.updateTrackedPointers_(mapBrowserEvent);
        if (this.handlingDownUpSequence) {
            if (mapBrowserEvent.type == (0, _mapBrowserEventTypeJsDefault.default).POINTERDRAG) {
                this.handleDragEvent(mapBrowserEvent);
                // prevent page scrolling during dragging
                mapBrowserEvent.originalEvent.preventDefault();
            } else if (mapBrowserEvent.type == (0, _mapBrowserEventTypeJsDefault.default).POINTERUP) {
                const handledUp = this.handleUpEvent(mapBrowserEvent);
                this.handlingDownUpSequence = handledUp && this.targetPointers.length > 0;
            }
        } else {
            if (mapBrowserEvent.type == (0, _mapBrowserEventTypeJsDefault.default).POINTERDOWN) {
                const handled = this.handleDownEvent(mapBrowserEvent);
                this.handlingDownUpSequence = handled;
                stopEvent = this.stopDown(handled);
            } else if (mapBrowserEvent.type == (0, _mapBrowserEventTypeJsDefault.default).POINTERMOVE) this.handleMoveEvent(mapBrowserEvent);
        }
        return !stopEvent;
    }
    /**
   * Handle pointer move events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @protected
   */ handleMoveEvent(mapBrowserEvent) {}
    /**
   * Handle pointer up events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   * @protected
   */ handleUpEvent(mapBrowserEvent) {
        return false;
    }
    /**
   * This function is used to determine if "down" events should be propagated
   * to other interactions or should be stopped.
   * @param {boolean} handled Was the event handled by the interaction?
   * @return {boolean} Should the `down` event be stopped?
   */ stopDown(handled) {
        return handled;
    }
    /**
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @private
   */ updateTrackedPointers_(mapBrowserEvent) {
        if (mapBrowserEvent.activePointers) this.targetPointers = mapBrowserEvent.activePointers;
    }
}
function centroid(pointerEvents) {
    const length = pointerEvents.length;
    let clientX = 0;
    let clientY = 0;
    for(let i = 0; i < length; i++){
        clientX += pointerEvents[i].clientX;
        clientY += pointerEvents[i].clientY;
    }
    return {
        clientX: clientX / length,
        clientY: clientY / length
    };
}
exports.default = PointerInteraction;

},{"./Interaction.js":"g1FUs","../MapBrowserEventType.js":"fB9ae","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iQTYY":[function(require,module,exports) {
/**
 * @module ol/events/condition
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * A function that takes an {@link module:ol/MapBrowserEvent~MapBrowserEvent} and returns a
 * `{boolean}`. If the condition is met, true should be returned.
 *
 * @typedef {function(this: ?, import("../MapBrowserEvent.js").default): boolean} Condition
 */ /**
 * Creates a condition function that passes when all provided conditions pass.
 * @param {...Condition} var_args Conditions to check.
 * @return {Condition} Condition function.
 */ parcelHelpers.export(exports, "all", ()=>all);
parcelHelpers.export(exports, "altKeyOnly", ()=>altKeyOnly);
parcelHelpers.export(exports, "altShiftKeysOnly", ()=>altShiftKeysOnly);
parcelHelpers.export(exports, "focus", ()=>focus);
parcelHelpers.export(exports, "focusWithTabindex", ()=>focusWithTabindex);
parcelHelpers.export(exports, "always", ()=>always);
parcelHelpers.export(exports, "click", ()=>click);
parcelHelpers.export(exports, "mouseActionButton", ()=>mouseActionButton);
parcelHelpers.export(exports, "never", ()=>never);
parcelHelpers.export(exports, "pointerMove", ()=>pointerMove);
parcelHelpers.export(exports, "singleClick", ()=>singleClick);
parcelHelpers.export(exports, "doubleClick", ()=>doubleClick);
parcelHelpers.export(exports, "noModifierKeys", ()=>noModifierKeys);
parcelHelpers.export(exports, "platformModifierKeyOnly", ()=>platformModifierKeyOnly);
parcelHelpers.export(exports, "shiftKeyOnly", ()=>shiftKeyOnly);
parcelHelpers.export(exports, "targetNotEditable", ()=>targetNotEditable);
parcelHelpers.export(exports, "mouseOnly", ()=>mouseOnly);
parcelHelpers.export(exports, "touchOnly", ()=>touchOnly);
parcelHelpers.export(exports, "penOnly", ()=>penOnly);
parcelHelpers.export(exports, "primaryAction", ()=>primaryAction);
var _mapBrowserEventTypeJs = require("../MapBrowserEventType.js");
var _mapBrowserEventTypeJsDefault = parcelHelpers.interopDefault(_mapBrowserEventTypeJs);
var _functionsJs = require("../functions.js");
var _hasJs = require("../has.js");
var _assertsJs = require("../asserts.js");
function all(var_args) {
    const conditions = arguments;
    /**
   * @param {import("../MapBrowserEvent.js").default} event Event.
   * @return {boolean} All conditions passed.
   */ return function(event) {
        let pass = true;
        for(let i = 0, ii = conditions.length; i < ii; ++i){
            pass = pass && conditions[i](event);
            if (!pass) break;
        }
        return pass;
    };
}
const altKeyOnly = function(mapBrowserEvent) {
    const originalEvent = /** @type {KeyboardEvent|MouseEvent|TouchEvent} */ mapBrowserEvent.originalEvent;
    return originalEvent.altKey && !(originalEvent.metaKey || originalEvent.ctrlKey) && !originalEvent.shiftKey;
};
const altShiftKeysOnly = function(mapBrowserEvent) {
    const originalEvent = /** @type {KeyboardEvent|MouseEvent|TouchEvent} */ mapBrowserEvent.originalEvent;
    return originalEvent.altKey && !(originalEvent.metaKey || originalEvent.ctrlKey) && originalEvent.shiftKey;
};
const focus = function(event) {
    const targetElement = event.map.getTargetElement();
    const activeElement = event.map.getOwnerDocument().activeElement;
    return targetElement.contains(activeElement);
};
const focusWithTabindex = function(event) {
    return event.map.getTargetElement().hasAttribute("tabindex") ? focus(event) : true;
};
const always = (0, _functionsJs.TRUE);
const click = function(mapBrowserEvent) {
    return mapBrowserEvent.type == (0, _mapBrowserEventTypeJsDefault.default).CLICK;
};
const mouseActionButton = function(mapBrowserEvent) {
    const originalEvent = /** @type {MouseEvent} */ mapBrowserEvent.originalEvent;
    return originalEvent.button == 0 && !((0, _hasJs.WEBKIT) && (0, _hasJs.MAC) && originalEvent.ctrlKey);
};
const never = (0, _functionsJs.FALSE);
const pointerMove = function(mapBrowserEvent) {
    return mapBrowserEvent.type == "pointermove";
};
const singleClick = function(mapBrowserEvent) {
    return mapBrowserEvent.type == (0, _mapBrowserEventTypeJsDefault.default).SINGLECLICK;
};
const doubleClick = function(mapBrowserEvent) {
    return mapBrowserEvent.type == (0, _mapBrowserEventTypeJsDefault.default).DBLCLICK;
};
const noModifierKeys = function(mapBrowserEvent) {
    const originalEvent = /** @type {KeyboardEvent|MouseEvent|TouchEvent} */ mapBrowserEvent.originalEvent;
    return !originalEvent.altKey && !(originalEvent.metaKey || originalEvent.ctrlKey) && !originalEvent.shiftKey;
};
const platformModifierKeyOnly = function(mapBrowserEvent) {
    const originalEvent = /** @type {KeyboardEvent|MouseEvent|TouchEvent} */ mapBrowserEvent.originalEvent;
    return !originalEvent.altKey && ((0, _hasJs.MAC) ? originalEvent.metaKey : originalEvent.ctrlKey) && !originalEvent.shiftKey;
};
const shiftKeyOnly = function(mapBrowserEvent) {
    const originalEvent = /** @type {KeyboardEvent|MouseEvent|TouchEvent} */ mapBrowserEvent.originalEvent;
    return !originalEvent.altKey && !(originalEvent.metaKey || originalEvent.ctrlKey) && originalEvent.shiftKey;
};
const targetNotEditable = function(mapBrowserEvent) {
    const originalEvent = /** @type {KeyboardEvent|MouseEvent|TouchEvent} */ mapBrowserEvent.originalEvent;
    const tagName = /** @type {Element} */ originalEvent.target.tagName;
    return tagName !== "INPUT" && tagName !== "SELECT" && tagName !== "TEXTAREA" && // `isContentEditable` is only available on `HTMLElement`, but it may also be a
    // different type like `SVGElement`.
    // @ts-ignore
    !originalEvent.target.isContentEditable;
};
const mouseOnly = function(mapBrowserEvent) {
    const pointerEvent = /** @type {import("../MapBrowserEvent").default} */ mapBrowserEvent.originalEvent;
    (0, _assertsJs.assert)(pointerEvent !== undefined, 56); // mapBrowserEvent must originate from a pointer event
    // see https://www.w3.org/TR/pointerevents/#widl-PointerEvent-pointerType
    return pointerEvent.pointerType == "mouse";
};
const touchOnly = function(mapBrowserEvent) {
    const pointerEvt = /** @type {import("../MapBrowserEvent").default} */ mapBrowserEvent.originalEvent;
    (0, _assertsJs.assert)(pointerEvt !== undefined, 56); // mapBrowserEvent must originate from a pointer event
    // see https://www.w3.org/TR/pointerevents/#widl-PointerEvent-pointerType
    return pointerEvt.pointerType === "touch";
};
const penOnly = function(mapBrowserEvent) {
    const pointerEvt = /** @type {import("../MapBrowserEvent").default} */ mapBrowserEvent.originalEvent;
    (0, _assertsJs.assert)(pointerEvt !== undefined, 56); // mapBrowserEvent must originate from a pointer event
    // see https://www.w3.org/TR/pointerevents/#widl-PointerEvent-pointerType
    return pointerEvt.pointerType === "pen";
};
const primaryAction = function(mapBrowserEvent) {
    const pointerEvent = /** @type {import("../MapBrowserEvent").default} */ mapBrowserEvent.originalEvent;
    (0, _assertsJs.assert)(pointerEvent !== undefined, 56); // mapBrowserEvent must originate from a pointer event
    return pointerEvent.isPrimary && pointerEvent.button === 0;
};

},{"../MapBrowserEventType.js":"fB9ae","../functions.js":"iqv8I","../has.js":"6BDNi","../asserts.js":"e4TiF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"83edZ":[function(require,module,exports) {
/**
 * @module ol/interaction/DragRotate
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _pointerJs = require("./Pointer.js");
var _pointerJsDefault = parcelHelpers.interopDefault(_pointerJs);
var _functionsJs = require("../functions.js");
var _conditionJs = require("../events/condition.js");
var _rotationconstraintJs = require("../rotationconstraint.js");
/**
 * @typedef {Object} Options
 * @property {import("../events/condition.js").Condition} [condition] A function that takes an
 * {@link module:ol/MapBrowserEvent~MapBrowserEvent} and returns a boolean
 * to indicate whether that event should be handled.
 * Default is {@link module:ol/events/condition.altShiftKeysOnly}.
 * @property {number} [duration=250] Animation duration in milliseconds.
 */ /**
 * @classdesc
 * Allows the user to rotate the map by clicking and dragging on the map,
 * normally combined with an {@link module:ol/events/condition} that limits
 * it to when the alt and shift keys are held down.
 *
 * This interaction is only supported for mouse devices.
 * @api
 */ class DragRotate extends (0, _pointerJsDefault.default) {
    /**
   * @param {Options} [options] Options.
   */ constructor(options){
        options = options ? options : {};
        super({
            stopDown: (0, _functionsJs.FALSE)
        });
        /**
     * @private
     * @type {import("../events/condition.js").Condition}
     */ this.condition_ = options.condition ? options.condition : (0, _conditionJs.altShiftKeysOnly);
        /**
     * @private
     * @type {number|undefined}
     */ this.lastAngle_ = undefined;
        /**
     * @private
     * @type {number}
     */ this.duration_ = options.duration !== undefined ? options.duration : 250;
    }
    /**
   * Handle pointer drag events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   */ handleDragEvent(mapBrowserEvent) {
        if (!(0, _conditionJs.mouseOnly)(mapBrowserEvent)) return;
        const map = mapBrowserEvent.map;
        const view = map.getView();
        if (view.getConstraints().rotation === (0, _rotationconstraintJs.disable)) return;
        const size = map.getSize();
        const offset = mapBrowserEvent.pixel;
        const theta = Math.atan2(size[1] / 2 - offset[1], offset[0] - size[0] / 2);
        if (this.lastAngle_ !== undefined) {
            const delta = theta - this.lastAngle_;
            view.adjustRotationInternal(-delta);
        }
        this.lastAngle_ = theta;
    }
    /**
   * Handle pointer up events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   */ handleUpEvent(mapBrowserEvent) {
        if (!(0, _conditionJs.mouseOnly)(mapBrowserEvent)) return true;
        const map = mapBrowserEvent.map;
        const view = map.getView();
        view.endInteraction(this.duration_);
        return false;
    }
    /**
   * Handle pointer down events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   */ handleDownEvent(mapBrowserEvent) {
        if (!(0, _conditionJs.mouseOnly)(mapBrowserEvent)) return false;
        if ((0, _conditionJs.mouseActionButton)(mapBrowserEvent) && this.condition_(mapBrowserEvent)) {
            const map = mapBrowserEvent.map;
            map.getView().beginInteraction();
            this.lastAngle_ = undefined;
            return true;
        }
        return false;
    }
}
exports.default = DragRotate;

},{"./Pointer.js":"1GIxf","../functions.js":"iqv8I","../events/condition.js":"iQTYY","../rotationconstraint.js":"hSWd8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8xtsQ":[function(require,module,exports) {
/**
 * @module ol/interaction/DragZoom
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _dragBoxJs = require("./DragBox.js");
var _dragBoxJsDefault = parcelHelpers.interopDefault(_dragBoxJs);
var _easingJs = require("../easing.js");
var _conditionJs = require("../events/condition.js");
/**
 * @typedef {Object} Options
 * @property {string} [className='ol-dragzoom'] CSS class name for styling the
 * box.
 * @property {import("../events/condition.js").Condition} [condition] A function that
 * takes an {@link module:ol/MapBrowserEvent~MapBrowserEvent} and returns a
 * boolean to indicate whether that event should be handled.
 * Default is {@link module:ol/events/condition.shiftKeyOnly}.
 * @property {number} [duration=200] Animation duration in milliseconds.
 * @property {boolean} [out=false] Use interaction for zooming out.
 * @property {number} [minArea=64] The minimum area of the box in pixel, this value is used by the parent default
 * `boxEndCondition` function.
 */ /**
 * @classdesc
 * Allows the user to zoom the map by clicking and dragging on the map,
 * normally combined with an {@link module:ol/events/condition} that limits
 * it to when a key, shift by default, is held down.
 *
 * To change the style of the box, use CSS and the `.ol-dragzoom` selector, or
 * your custom one configured with `className`.
 * @api
 */ class DragZoom extends (0, _dragBoxJsDefault.default) {
    /**
   * @param {Options} [options] Options.
   */ constructor(options){
        options = options ? options : {};
        const condition = options.condition ? options.condition : (0, _conditionJs.shiftKeyOnly);
        super({
            condition: condition,
            className: options.className || "ol-dragzoom",
            minArea: options.minArea
        });
        /**
     * @private
     * @type {number}
     */ this.duration_ = options.duration !== undefined ? options.duration : 200;
        /**
     * @private
     * @type {boolean}
     */ this.out_ = options.out !== undefined ? options.out : false;
    }
    /**
   * Function to execute just before `onboxend` is fired
   * @param {import("../MapBrowserEvent.js").default} event Event.
   */ onBoxEnd(event) {
        const map = this.getMap();
        const view = /** @type {!import("../View.js").default} */ map.getView();
        let geometry = this.getGeometry();
        if (this.out_) {
            const rotatedExtent = view.rotatedExtentForGeometry(geometry);
            const resolution = view.getResolutionForExtentInternal(rotatedExtent);
            const factor = view.getResolution() / resolution;
            geometry = geometry.clone();
            geometry.scale(factor * factor);
        }
        view.fitInternal(geometry, {
            duration: this.duration_,
            easing: (0, _easingJs.easeOut)
        });
    }
}
exports.default = DragZoom;

},{"./DragBox.js":"b4kkx","../easing.js":"fYITA","../events/condition.js":"iQTYY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b4kkx":[function(require,module,exports) {
/**
 * @module ol/interaction/DragBox
 */ // FIXME draw drag box
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @classdesc
 * Events emitted by {@link module:ol/interaction/DragBox~DragBox} instances are instances of
 * this type.
 */ parcelHelpers.export(exports, "DragBoxEvent", ()=>DragBoxEvent);
var _eventJs = require("../events/Event.js");
var _eventJsDefault = parcelHelpers.interopDefault(_eventJs);
var _pointerJs = require("./Pointer.js");
var _pointerJsDefault = parcelHelpers.interopDefault(_pointerJs);
var _boxJs = require("../render/Box.js");
var _boxJsDefault = parcelHelpers.interopDefault(_boxJs);
var _conditionJs = require("../events/condition.js");
/**
 * A function that takes a {@link module:ol/MapBrowserEvent~MapBrowserEvent} and two
 * {@link module:ol/pixel~Pixel}s and returns a `{boolean}`. If the condition is met,
 * true should be returned.
 * @typedef {function(this: ?, import("../MapBrowserEvent.js").default, import("../pixel.js").Pixel, import("../pixel.js").Pixel):boolean} EndCondition
 */ /**
 * @typedef {Object} Options
 * @property {string} [className='ol-dragbox'] CSS class name for styling the box.
 * @property {import("../events/condition.js").Condition} [condition] A function that takes an {@link module:ol/MapBrowserEvent~MapBrowserEvent} and returns a boolean
 * to indicate whether that event should be handled.
 * Default is {@link ol/events/condition~mouseActionButton}.
 * @property {number} [minArea=64] The minimum area of the box in pixel, this value is used by the default
 * `boxEndCondition` function.
 * @property {EndCondition} [boxEndCondition] A function that takes a {@link module:ol/MapBrowserEvent~MapBrowserEvent} and two
 * {@link module:ol/pixel~Pixel}s to indicate whether a `boxend` event should be fired.
 * Default is `true` if the area of the box is bigger than the `minArea` option.
 * @property {function(this:DragBox, import("../MapBrowserEvent.js").default):void} [onBoxEnd] Code to execute just
 * before `boxend` is fired.
 */ /**
 * @enum {string}
 */ const DragBoxEventType = {
    /**
   * Triggered upon drag box start.
   * @event DragBoxEvent#boxstart
   * @api
   */ BOXSTART: "boxstart",
    /**
   * Triggered on drag when box is active.
   * @event DragBoxEvent#boxdrag
   * @api
   */ BOXDRAG: "boxdrag",
    /**
   * Triggered upon drag box end.
   * @event DragBoxEvent#boxend
   * @api
   */ BOXEND: "boxend",
    /**
   * Triggered upon drag box canceled.
   * @event DragBoxEvent#boxcancel
   * @api
   */ BOXCANCEL: "boxcancel"
};
class DragBoxEvent extends (0, _eventJsDefault.default) {
    /**
   * @param {string} type The event type.
   * @param {import("../coordinate.js").Coordinate} coordinate The event coordinate.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Originating event.
   */ constructor(type, coordinate, mapBrowserEvent){
        super(type);
        /**
     * The coordinate of the drag event.
     * @const
     * @type {import("../coordinate.js").Coordinate}
     * @api
     */ this.coordinate = coordinate;
        /**
     * @const
     * @type {import("../MapBrowserEvent.js").default}
     * @api
     */ this.mapBrowserEvent = mapBrowserEvent;
    }
}
/***
 * @template Return
 * @typedef {import("../Observable").OnSignature<import("../Observable").EventTypes, import("../events/Event.js").default, Return> &
 *   import("../Observable").OnSignature<import("../ObjectEventType").Types|
 *     'change:active', import("../Object").ObjectEvent, Return> &
 *   import("../Observable").OnSignature<'boxcancel'|'boxdrag'|'boxend'|'boxstart', DragBoxEvent, Return> &
 *   import("../Observable").CombinedOnSignature<import("../Observable").EventTypes|import("../ObjectEventType").Types|
 *     'change:active'|'boxcancel'|'boxdrag'|'boxend', Return>} DragBoxOnSignature
 */ /**
 * @classdesc
 * Allows the user to draw a vector box by clicking and dragging on the map,
 * normally combined with an {@link module:ol/events/condition} that limits
 * it to when the shift or other key is held down. This is used, for example,
 * for zooming to a specific area of the map
 * (see {@link module:ol/interaction/DragZoom~DragZoom} and
 * {@link module:ol/interaction/DragRotateAndZoom~DragRotateAndZoom}).
 *
 * @fires DragBoxEvent
 * @api
 */ class DragBox extends (0, _pointerJsDefault.default) {
    /**
   * @param {Options} [options] Options.
   */ constructor(options){
        super();
        /***
     * @type {DragBoxOnSignature<import("../events").EventsKey>}
     */ this.on;
        /***
     * @type {DragBoxOnSignature<import("../events").EventsKey>}
     */ this.once;
        /***
     * @type {DragBoxOnSignature<void>}
     */ this.un;
        options = options ? options : {};
        /**
     * @type {import("../render/Box.js").default}
     * @private
     */ this.box_ = new (0, _boxJsDefault.default)(options.className || "ol-dragbox");
        /**
     * @type {number}
     * @private
     */ this.minArea_ = options.minArea !== undefined ? options.minArea : 64;
        if (options.onBoxEnd) this.onBoxEnd = options.onBoxEnd;
        /**
     * @type {import("../pixel.js").Pixel}
     * @private
     */ this.startPixel_ = null;
        /**
     * @private
     * @type {import("../events/condition.js").Condition}
     */ this.condition_ = options.condition ? options.condition : (0, _conditionJs.mouseActionButton);
        /**
     * @private
     * @type {EndCondition}
     */ this.boxEndCondition_ = options.boxEndCondition ? options.boxEndCondition : this.defaultBoxEndCondition;
    }
    /**
   * The default condition for determining whether the boxend event
   * should fire.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent The originating MapBrowserEvent
   *     leading to the box end.
   * @param {import("../pixel.js").Pixel} startPixel The starting pixel of the box.
   * @param {import("../pixel.js").Pixel} endPixel The end pixel of the box.
   * @return {boolean} Whether or not the boxend condition should be fired.
   */ defaultBoxEndCondition(mapBrowserEvent, startPixel, endPixel) {
        const width = endPixel[0] - startPixel[0];
        const height = endPixel[1] - startPixel[1];
        return width * width + height * height >= this.minArea_;
    }
    /**
   * Returns geometry of last drawn box.
   * @return {import("../geom/Polygon.js").default} Geometry.
   * @api
   */ getGeometry() {
        return this.box_.getGeometry();
    }
    /**
   * Handle pointer drag events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   */ handleDragEvent(mapBrowserEvent) {
        this.box_.setPixels(this.startPixel_, mapBrowserEvent.pixel);
        this.dispatchEvent(new DragBoxEvent(DragBoxEventType.BOXDRAG, mapBrowserEvent.coordinate, mapBrowserEvent));
    }
    /**
   * Handle pointer up events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   */ handleUpEvent(mapBrowserEvent) {
        this.box_.setMap(null);
        const completeBox = this.boxEndCondition_(mapBrowserEvent, this.startPixel_, mapBrowserEvent.pixel);
        if (completeBox) this.onBoxEnd(mapBrowserEvent);
        this.dispatchEvent(new DragBoxEvent(completeBox ? DragBoxEventType.BOXEND : DragBoxEventType.BOXCANCEL, mapBrowserEvent.coordinate, mapBrowserEvent));
        return false;
    }
    /**
   * Handle pointer down events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   */ handleDownEvent(mapBrowserEvent) {
        if (this.condition_(mapBrowserEvent)) {
            this.startPixel_ = mapBrowserEvent.pixel;
            this.box_.setMap(mapBrowserEvent.map);
            this.box_.setPixels(this.startPixel_, this.startPixel_);
            this.dispatchEvent(new DragBoxEvent(DragBoxEventType.BOXSTART, mapBrowserEvent.coordinate, mapBrowserEvent));
            return true;
        }
        return false;
    }
    /**
   * Function to execute just before `onboxend` is fired
   * @param {import("../MapBrowserEvent.js").default} event Event.
   */ onBoxEnd(event) {}
}
exports.default = DragBox;

},{"../events/Event.js":"hwXQP","./Pointer.js":"1GIxf","../render/Box.js":"dUP5P","../events/condition.js":"iQTYY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dUP5P":[function(require,module,exports) {
/**
 * @module ol/render/Box
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _disposableJs = require("../Disposable.js");
var _disposableJsDefault = parcelHelpers.interopDefault(_disposableJs);
var _polygonJs = require("../geom/Polygon.js");
var _polygonJsDefault = parcelHelpers.interopDefault(_polygonJs);
class RenderBox extends (0, _disposableJsDefault.default) {
    /**
   * @param {string} className CSS class name.
   */ constructor(className){
        super();
        /**
     * @type {import("../geom/Polygon.js").default}
     * @private
     */ this.geometry_ = null;
        /**
     * @type {HTMLDivElement}
     * @private
     */ this.element_ = document.createElement("div");
        this.element_.style.position = "absolute";
        this.element_.style.pointerEvents = "auto";
        this.element_.className = "ol-box " + className;
        /**
     * @private
     * @type {import("../Map.js").default|null}
     */ this.map_ = null;
        /**
     * @private
     * @type {import("../pixel.js").Pixel}
     */ this.startPixel_ = null;
        /**
     * @private
     * @type {import("../pixel.js").Pixel}
     */ this.endPixel_ = null;
    }
    /**
   * Clean up.
   */ disposeInternal() {
        this.setMap(null);
    }
    /**
   * @private
   */ render_() {
        const startPixel = this.startPixel_;
        const endPixel = this.endPixel_;
        const px = "px";
        const style = this.element_.style;
        style.left = Math.min(startPixel[0], endPixel[0]) + px;
        style.top = Math.min(startPixel[1], endPixel[1]) + px;
        style.width = Math.abs(endPixel[0] - startPixel[0]) + px;
        style.height = Math.abs(endPixel[1] - startPixel[1]) + px;
    }
    /**
   * @param {import("../Map.js").default|null} map Map.
   */ setMap(map) {
        if (this.map_) {
            this.map_.getOverlayContainer().removeChild(this.element_);
            const style = this.element_.style;
            style.left = "inherit";
            style.top = "inherit";
            style.width = "inherit";
            style.height = "inherit";
        }
        this.map_ = map;
        if (this.map_) this.map_.getOverlayContainer().appendChild(this.element_);
    }
    /**
   * @param {import("../pixel.js").Pixel} startPixel Start pixel.
   * @param {import("../pixel.js").Pixel} endPixel End pixel.
   */ setPixels(startPixel, endPixel) {
        this.startPixel_ = startPixel;
        this.endPixel_ = endPixel;
        this.createOrUpdateGeometry();
        this.render_();
    }
    /**
   * Creates or updates the cached geometry.
   */ createOrUpdateGeometry() {
        const startPixel = this.startPixel_;
        const endPixel = this.endPixel_;
        const pixels = [
            startPixel,
            [
                startPixel[0],
                endPixel[1]
            ],
            endPixel,
            [
                endPixel[0],
                startPixel[1]
            ]
        ];
        const coordinates = pixels.map(this.map_.getCoordinateFromPixelInternal, this.map_);
        // close the polygon
        coordinates[4] = coordinates[0].slice();
        if (!this.geometry_) this.geometry_ = new (0, _polygonJsDefault.default)([
            coordinates
        ]);
        else this.geometry_.setCoordinates([
            coordinates
        ]);
    }
    /**
   * @return {import("../geom/Polygon.js").default} Geometry.
   */ getGeometry() {
        return this.geometry_;
    }
}
exports.default = RenderBox;

},{"../Disposable.js":"c0oTM","../geom/Polygon.js":"cJuQF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"49Q4F":[function(require,module,exports) {
/**
 * @module ol/interaction/KeyboardPan
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _eventTypeJs = require("../events/EventType.js");
var _eventTypeJsDefault = parcelHelpers.interopDefault(_eventTypeJs);
var _interactionJs = require("./Interaction.js");
var _interactionJsDefault = parcelHelpers.interopDefault(_interactionJs);
var _keyCodeJs = require("../events/KeyCode.js");
var _keyCodeJsDefault = parcelHelpers.interopDefault(_keyCodeJs);
var _conditionJs = require("../events/condition.js");
var _coordinateJs = require("../coordinate.js");
/**
 * @typedef {Object} Options
 * @property {import("../events/condition.js").Condition} [condition] A function that
 * takes an {@link module:ol/MapBrowserEvent~MapBrowserEvent} and returns a
 * boolean to indicate whether that event should be handled. Default is
 * {@link module:ol/events/condition.noModifierKeys} and
 * {@link module:ol/events/condition.targetNotEditable}.
 * @property {number} [duration=100] Animation duration in milliseconds.
 * @property {number} [pixelDelta=128] The amount of pixels to pan on each key
 * press.
 */ /**
 * @classdesc
 * Allows the user to pan the map using keyboard arrows.
 * Note that, although this interaction is by default included in maps,
 * the keys can only be used when browser focus is on the element to which
 * the keyboard events are attached. By default, this is the map div,
 * though you can change this with the `keyboardEventTarget` in
 * {@link module:ol/Map~Map}. `document` never loses focus but, for any other
 * element, focus will have to be on, and returned to, this element if the keys
 * are to function.
 * See also {@link module:ol/interaction/KeyboardZoom~KeyboardZoom}.
 * @api
 */ class KeyboardPan extends (0, _interactionJsDefault.default) {
    /**
   * @param {Options} [options] Options.
   */ constructor(options){
        super();
        options = options || {};
        /**
     * @private
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Browser event.
     * @return {boolean} Combined condition result.
     */ this.defaultCondition_ = function(mapBrowserEvent) {
            return (0, _conditionJs.noModifierKeys)(mapBrowserEvent) && (0, _conditionJs.targetNotEditable)(mapBrowserEvent);
        };
        /**
     * @private
     * @type {import("../events/condition.js").Condition}
     */ this.condition_ = options.condition !== undefined ? options.condition : this.defaultCondition_;
        /**
     * @private
     * @type {number}
     */ this.duration_ = options.duration !== undefined ? options.duration : 100;
        /**
     * @private
     * @type {number}
     */ this.pixelDelta_ = options.pixelDelta !== undefined ? options.pixelDelta : 128;
    }
    /**
   * Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event} if it was a
   * `KeyEvent`, and decides the direction to pan to (if an arrow key was
   * pressed).
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
   * @return {boolean} `false` to stop event propagation.
   */ handleEvent(mapBrowserEvent) {
        let stopEvent = false;
        if (mapBrowserEvent.type == (0, _eventTypeJsDefault.default).KEYDOWN) {
            const keyEvent = /** @type {KeyboardEvent} */ mapBrowserEvent.originalEvent;
            const keyCode = keyEvent.keyCode;
            if (this.condition_(mapBrowserEvent) && (keyCode == (0, _keyCodeJsDefault.default).DOWN || keyCode == (0, _keyCodeJsDefault.default).LEFT || keyCode == (0, _keyCodeJsDefault.default).RIGHT || keyCode == (0, _keyCodeJsDefault.default).UP)) {
                const map = mapBrowserEvent.map;
                const view = map.getView();
                const mapUnitsDelta = view.getResolution() * this.pixelDelta_;
                let deltaX = 0, deltaY = 0;
                if (keyCode == (0, _keyCodeJsDefault.default).DOWN) deltaY = -mapUnitsDelta;
                else if (keyCode == (0, _keyCodeJsDefault.default).LEFT) deltaX = -mapUnitsDelta;
                else if (keyCode == (0, _keyCodeJsDefault.default).RIGHT) deltaX = mapUnitsDelta;
                else deltaY = mapUnitsDelta;
                const delta = [
                    deltaX,
                    deltaY
                ];
                (0, _coordinateJs.rotate)(delta, view.getRotation());
                (0, _interactionJs.pan)(view, delta, this.duration_);
                keyEvent.preventDefault();
                stopEvent = true;
            }
        }
        return !stopEvent;
    }
}
exports.default = KeyboardPan;

},{"../events/EventType.js":"hrQJ6","./Interaction.js":"g1FUs","../events/KeyCode.js":"hChv2","../events/condition.js":"iQTYY","../coordinate.js":"85Vu7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hChv2":[function(require,module,exports) {
/**
 * @module ol/events/KeyCode
 */ /**
 * @enum {number}
 * @const
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4RjL4":[function(require,module,exports) {
/**
 * @module ol/interaction/KeyboardZoom
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _eventTypeJs = require("../events/EventType.js");
var _eventTypeJsDefault = parcelHelpers.interopDefault(_eventTypeJs);
var _interactionJs = require("./Interaction.js");
var _interactionJsDefault = parcelHelpers.interopDefault(_interactionJs);
var _conditionJs = require("../events/condition.js");
/**
 * @typedef {Object} Options
 * @property {number} [duration=100] Animation duration in milliseconds.
 * @property {import("../events/condition.js").Condition} [condition] A function that
 * takes an {@link module:ol/MapBrowserEvent~MapBrowserEvent} and returns a
 * boolean to indicate whether that event should be handled. Default is
 * {@link module:ol/events/condition.targetNotEditable}.
 * @property {number} [delta=1] The zoom level delta on each key press.
 */ /**
 * @classdesc
 * Allows the user to zoom the map using keyboard + and -.
 * Note that, although this interaction is by default included in maps,
 * the keys can only be used when browser focus is on the element to which
 * the keyboard events are attached. By default, this is the map div,
 * though you can change this with the `keyboardEventTarget` in
 * {@link module:ol/Map~Map}. `document` never loses focus but, for any other
 * element, focus will have to be on, and returned to, this element if the keys
 * are to function.
 * See also {@link module:ol/interaction/KeyboardPan~KeyboardPan}.
 * @api
 */ class KeyboardZoom extends (0, _interactionJsDefault.default) {
    /**
   * @param {Options} [options] Options.
   */ constructor(options){
        super();
        options = options ? options : {};
        /**
     * @private
     * @type {import("../events/condition.js").Condition}
     */ this.condition_ = options.condition ? options.condition : (0, _conditionJs.targetNotEditable);
        /**
     * @private
     * @type {number}
     */ this.delta_ = options.delta ? options.delta : 1;
        /**
     * @private
     * @type {number}
     */ this.duration_ = options.duration !== undefined ? options.duration : 100;
    }
    /**
   * Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event} if it was a
   * `KeyEvent`, and decides whether to zoom in or out (depending on whether the
   * key pressed was '+' or '-').
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
   * @return {boolean} `false` to stop event propagation.
   */ handleEvent(mapBrowserEvent) {
        let stopEvent = false;
        if (mapBrowserEvent.type == (0, _eventTypeJsDefault.default).KEYDOWN || mapBrowserEvent.type == (0, _eventTypeJsDefault.default).KEYPRESS) {
            const keyEvent = /** @type {KeyboardEvent} */ mapBrowserEvent.originalEvent;
            const key = keyEvent.key;
            if (this.condition_(mapBrowserEvent) && (key === "+" || key === "-")) {
                const map = mapBrowserEvent.map;
                const delta = key === "+" ? this.delta_ : -this.delta_;
                const view = map.getView();
                (0, _interactionJs.zoomByDelta)(view, delta, undefined, this.duration_);
                keyEvent.preventDefault();
                stopEvent = true;
            }
        }
        return !stopEvent;
    }
}
exports.default = KeyboardZoom;

},{"../events/EventType.js":"hrQJ6","./Interaction.js":"g1FUs","../events/condition.js":"iQTYY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aWbSH":[function(require,module,exports) {
/**
 * @module ol/Kinetic
 */ /**
 * @classdesc
 * Implementation of inertial deceleration for map movement.
 *
 * @api
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Kinetic {
    /**
   * @param {number} decay Rate of decay (must be negative).
   * @param {number} minVelocity Minimum velocity (pixels/millisecond).
   * @param {number} delay Delay to consider to calculate the kinetic
   *     initial values (milliseconds).
   */ constructor(decay, minVelocity, delay){
        /**
     * @private
     * @type {number}
     */ this.decay_ = decay;
        /**
     * @private
     * @type {number}
     */ this.minVelocity_ = minVelocity;
        /**
     * @private
     * @type {number}
     */ this.delay_ = delay;
        /**
     * @private
     * @type {Array<number>}
     */ this.points_ = [];
        /**
     * @private
     * @type {number}
     */ this.angle_ = 0;
        /**
     * @private
     * @type {number}
     */ this.initialVelocity_ = 0;
    }
    /**
   * FIXME empty description for jsdoc
   */ begin() {
        this.points_.length = 0;
        this.angle_ = 0;
        this.initialVelocity_ = 0;
    }
    /**
   * @param {number} x X.
   * @param {number} y Y.
   */ update(x, y) {
        this.points_.push(x, y, Date.now());
    }
    /**
   * @return {boolean} Whether we should do kinetic animation.
   */ end() {
        if (this.points_.length < 6) // at least 2 points are required (i.e. there must be at least 6 elements
        // in the array)
        return false;
        const delay = Date.now() - this.delay_;
        const lastIndex = this.points_.length - 3;
        if (this.points_[lastIndex + 2] < delay) // the last tracked point is too old, which means that the user stopped
        // panning before releasing the map
        return false;
        // get the first point which still falls into the delay time
        let firstIndex = lastIndex - 3;
        while(firstIndex > 0 && this.points_[firstIndex + 2] > delay)firstIndex -= 3;
        const duration = this.points_[lastIndex + 2] - this.points_[firstIndex + 2];
        // we don't want a duration of 0 (divide by zero)
        // we also make sure the user panned for a duration of at least one frame
        // (1/60s) to compute sane displacement values
        if (duration < 1000 / 60) return false;
        const dx = this.points_[lastIndex] - this.points_[firstIndex];
        const dy = this.points_[lastIndex + 1] - this.points_[firstIndex + 1];
        this.angle_ = Math.atan2(dy, dx);
        this.initialVelocity_ = Math.sqrt(dx * dx + dy * dy) / duration;
        return this.initialVelocity_ > this.minVelocity_;
    }
    /**
   * @return {number} Total distance travelled (pixels).
   */ getDistance() {
        return (this.minVelocity_ - this.initialVelocity_) / this.decay_;
    }
    /**
   * @return {number} Angle of the kinetic panning animation (radians).
   */ getAngle() {
        return this.angle_;
    }
}
exports.default = Kinetic;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gKXuR":[function(require,module,exports) {
/**
 * @module ol/interaction/MouseWheelZoom
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _eventTypeJs = require("../events/EventType.js");
var _eventTypeJsDefault = parcelHelpers.interopDefault(_eventTypeJs);
var _interactionJs = require("./Interaction.js");
var _interactionJsDefault = parcelHelpers.interopDefault(_interactionJs);
var _hasJs = require("../has.js");
var _conditionJs = require("../events/condition.js");
var _mathJs = require("../math.js");
/**
 * @typedef {'trackpad' | 'wheel'} Mode
 */ /**
 * @typedef {Object} Options
 * @property {import("../events/condition.js").Condition} [condition] A function that
 * takes an {@link module:ol/MapBrowserEvent~MapBrowserEvent} and returns a
 * boolean to indicate whether that event should be handled. Default is
 * {@link module:ol/events/condition.always}.
 * @property {boolean} [onFocusOnly=false] When the map's target has a `tabindex` attribute set,
 * the interaction will only handle events when the map has the focus.
 * @property {number} [maxDelta=1] Maximum mouse wheel delta.
 * @property {number} [duration=250] Animation duration in milliseconds.
 * @property {number} [timeout=80] Mouse wheel timeout duration in milliseconds.
 * @property {boolean} [useAnchor=true] Enable zooming using the mouse's
 * location as the anchor. When set to `false`, zooming in and out will zoom to
 * the center of the screen instead of zooming on the mouse's location.
 * @property {boolean} [constrainResolution=false] If true, the mouse wheel zoom
 * event will always animate to the closest zoom level after an interaction;
 * false means intermediary zoom levels are allowed.
 */ /**
 * @classdesc
 * Allows the user to zoom the map by scrolling the mouse wheel.
 * @api
 */ class MouseWheelZoom extends (0, _interactionJsDefault.default) {
    /**
   * @param {Options} [options] Options.
   */ constructor(options){
        options = options ? options : {};
        super(/** @type {import("./Interaction.js").InteractionOptions} */ options);
        /**
     * @private
     * @type {number}
     */ this.totalDelta_ = 0;
        /**
     * @private
     * @type {number}
     */ this.lastDelta_ = 0;
        /**
     * @private
     * @type {number}
     */ this.maxDelta_ = options.maxDelta !== undefined ? options.maxDelta : 1;
        /**
     * @private
     * @type {number}
     */ this.duration_ = options.duration !== undefined ? options.duration : 250;
        /**
     * @private
     * @type {number}
     */ this.timeout_ = options.timeout !== undefined ? options.timeout : 80;
        /**
     * @private
     * @type {boolean}
     */ this.useAnchor_ = options.useAnchor !== undefined ? options.useAnchor : true;
        /**
     * @private
     * @type {boolean}
     */ this.constrainResolution_ = options.constrainResolution !== undefined ? options.constrainResolution : false;
        const condition = options.condition ? options.condition : (0, _conditionJs.always);
        /**
     * @private
     * @type {import("../events/condition.js").Condition}
     */ this.condition_ = options.onFocusOnly ? (0, _conditionJs.all)((0, _conditionJs.focusWithTabindex), condition) : condition;
        /**
     * @private
     * @type {?import("../coordinate.js").Coordinate}
     */ this.lastAnchor_ = null;
        /**
     * @private
     * @type {number|undefined}
     */ this.startTime_ = undefined;
        /**
     * @private
     * @type {?}
     */ this.timeoutId_;
        /**
     * @private
     * @type {Mode|undefined}
     */ this.mode_ = undefined;
        /**
     * Trackpad events separated by this delay will be considered separate
     * interactions.
     * @type {number}
     */ this.trackpadEventGap_ = 400;
        /**
     * @type {?}
     */ this.trackpadTimeoutId_;
        /**
     * The number of delta values per zoom level
     * @private
     * @type {number}
     */ this.deltaPerZoom_ = 300;
    }
    /**
   * @private
   */ endInteraction_() {
        this.trackpadTimeoutId_ = undefined;
        const map = this.getMap();
        if (!map) return;
        const view = map.getView();
        view.endInteraction(undefined, this.lastDelta_ ? this.lastDelta_ > 0 ? 1 : -1 : 0, this.lastAnchor_);
    }
    /**
   * Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event} (if it was a mousewheel-event) and eventually
   * zooms the map.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
   * @return {boolean} `false` to stop event propagation.
   */ handleEvent(mapBrowserEvent) {
        if (!this.condition_(mapBrowserEvent)) return true;
        const type = mapBrowserEvent.type;
        if (type !== (0, _eventTypeJsDefault.default).WHEEL) return true;
        const map = mapBrowserEvent.map;
        const wheelEvent = /** @type {WheelEvent} */ mapBrowserEvent.originalEvent;
        wheelEvent.preventDefault();
        if (this.useAnchor_) this.lastAnchor_ = mapBrowserEvent.coordinate;
        // Delta normalisation inspired by
        // https://github.com/mapbox/mapbox-gl-js/blob/001c7b9/js/ui/handler/scroll_zoom.js
        let delta;
        if (mapBrowserEvent.type == (0, _eventTypeJsDefault.default).WHEEL) {
            delta = wheelEvent.deltaY;
            if ((0, _hasJs.FIREFOX) && wheelEvent.deltaMode === WheelEvent.DOM_DELTA_PIXEL) delta /= (0, _hasJs.DEVICE_PIXEL_RATIO);
            if (wheelEvent.deltaMode === WheelEvent.DOM_DELTA_LINE) delta *= 40;
        }
        if (delta === 0) return false;
        this.lastDelta_ = delta;
        const now = Date.now();
        if (this.startTime_ === undefined) this.startTime_ = now;
        if (!this.mode_ || now - this.startTime_ > this.trackpadEventGap_) this.mode_ = Math.abs(delta) < 4 ? "trackpad" : "wheel";
        const view = map.getView();
        if (this.mode_ === "trackpad" && !(view.getConstrainResolution() || this.constrainResolution_)) {
            if (this.trackpadTimeoutId_) clearTimeout(this.trackpadTimeoutId_);
            else {
                if (view.getAnimating()) view.cancelAnimations();
                view.beginInteraction();
            }
            this.trackpadTimeoutId_ = setTimeout(this.endInteraction_.bind(this), this.timeout_);
            view.adjustZoom(-delta / this.deltaPerZoom_, this.lastAnchor_);
            this.startTime_ = now;
            return false;
        }
        this.totalDelta_ += delta;
        const timeLeft = Math.max(this.timeout_ - (now - this.startTime_), 0);
        clearTimeout(this.timeoutId_);
        this.timeoutId_ = setTimeout(this.handleWheelZoom_.bind(this, map), timeLeft);
        return false;
    }
    /**
   * @private
   * @param {import("../Map.js").default} map Map.
   */ handleWheelZoom_(map) {
        const view = map.getView();
        if (view.getAnimating()) view.cancelAnimations();
        let delta = -(0, _mathJs.clamp)(this.totalDelta_, -this.maxDelta_ * this.deltaPerZoom_, this.maxDelta_ * this.deltaPerZoom_) / this.deltaPerZoom_;
        if (view.getConstrainResolution() || this.constrainResolution_) // view has a zoom constraint, zoom by 1
        delta = delta ? delta > 0 ? 1 : -1 : 0;
        (0, _interactionJs.zoomByDelta)(view, delta, this.lastAnchor_, this.duration_);
        this.mode_ = undefined;
        this.totalDelta_ = 0;
        this.lastAnchor_ = null;
        this.startTime_ = undefined;
        this.timeoutId_ = undefined;
    }
    /**
   * Enable or disable using the mouse's location as an anchor when zooming
   * @param {boolean} useAnchor true to zoom to the mouse's location, false
   * to zoom to the center of the map
   * @api
   */ setMouseAnchor(useAnchor) {
        this.useAnchor_ = useAnchor;
        if (!useAnchor) this.lastAnchor_ = null;
    }
}
exports.default = MouseWheelZoom;

},{"../events/EventType.js":"hrQJ6","./Interaction.js":"g1FUs","../has.js":"6BDNi","../events/condition.js":"iQTYY","../math.js":"5jEFr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5f8eF":[function(require,module,exports) {
/**
 * @module ol/interaction/PinchRotate
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _pointerJs = require("./Pointer.js");
var _pointerJsDefault = parcelHelpers.interopDefault(_pointerJs);
var _functionsJs = require("../functions.js");
var _rotationconstraintJs = require("../rotationconstraint.js");
/**
 * @typedef {Object} Options
 * @property {number} [duration=250] The duration of the animation in
 * milliseconds.
 * @property {number} [threshold=0.3] Minimal angle in radians to start a rotation.
 */ /**
 * @classdesc
 * Allows the user to rotate the map by twisting with two fingers
 * on a touch screen.
 * @api
 */ class PinchRotate extends (0, _pointerJsDefault.default) {
    /**
   * @param {Options} [options] Options.
   */ constructor(options){
        options = options ? options : {};
        const pointerOptions = /** @type {import("./Pointer.js").Options} */ options;
        if (!pointerOptions.stopDown) pointerOptions.stopDown = (0, _functionsJs.FALSE);
        super(pointerOptions);
        /**
     * @private
     * @type {import("../coordinate.js").Coordinate}
     */ this.anchor_ = null;
        /**
     * @private
     * @type {number|undefined}
     */ this.lastAngle_ = undefined;
        /**
     * @private
     * @type {boolean}
     */ this.rotating_ = false;
        /**
     * @private
     * @type {number}
     */ this.rotationDelta_ = 0.0;
        /**
     * @private
     * @type {number}
     */ this.threshold_ = options.threshold !== undefined ? options.threshold : 0.3;
        /**
     * @private
     * @type {number}
     */ this.duration_ = options.duration !== undefined ? options.duration : 250;
    }
    /**
   * Handle pointer drag events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   */ handleDragEvent(mapBrowserEvent) {
        let rotationDelta = 0.0;
        const touch0 = this.targetPointers[0];
        const touch1 = this.targetPointers[1];
        // angle between touches
        const angle = Math.atan2(touch1.clientY - touch0.clientY, touch1.clientX - touch0.clientX);
        if (this.lastAngle_ !== undefined) {
            const delta = angle - this.lastAngle_;
            this.rotationDelta_ += delta;
            if (!this.rotating_ && Math.abs(this.rotationDelta_) > this.threshold_) this.rotating_ = true;
            rotationDelta = delta;
        }
        this.lastAngle_ = angle;
        const map = mapBrowserEvent.map;
        const view = map.getView();
        if (view.getConstraints().rotation === (0, _rotationconstraintJs.disable)) return;
        // rotate anchor point.
        // FIXME: should be the intersection point between the lines:
        //     touch0,touch1 and previousTouch0,previousTouch1
        this.anchor_ = map.getCoordinateFromPixelInternal(map.getEventPixel((0, _pointerJs.centroid)(this.targetPointers)));
        // rotate
        if (this.rotating_) {
            map.render();
            view.adjustRotationInternal(rotationDelta, this.anchor_);
        }
    }
    /**
   * Handle pointer up events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   */ handleUpEvent(mapBrowserEvent) {
        if (this.targetPointers.length < 2) {
            const map = mapBrowserEvent.map;
            const view = map.getView();
            view.endInteraction(this.duration_);
            return false;
        }
        return true;
    }
    /**
   * Handle pointer down events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   */ handleDownEvent(mapBrowserEvent) {
        if (this.targetPointers.length >= 2) {
            const map = mapBrowserEvent.map;
            this.anchor_ = null;
            this.lastAngle_ = undefined;
            this.rotating_ = false;
            this.rotationDelta_ = 0.0;
            if (!this.handlingDownUpSequence) map.getView().beginInteraction();
            return true;
        }
        return false;
    }
}
exports.default = PinchRotate;

},{"./Pointer.js":"1GIxf","../functions.js":"iqv8I","../rotationconstraint.js":"hSWd8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5RZxv":[function(require,module,exports) {
/**
 * @module ol/interaction/PinchZoom
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _pointerJs = require("./Pointer.js");
var _pointerJsDefault = parcelHelpers.interopDefault(_pointerJs);
var _functionsJs = require("../functions.js");
/**
 * @typedef {Object} Options
 * @property {number} [duration=400] Animation duration in milliseconds.
 */ /**
 * @classdesc
 * Allows the user to zoom the map by pinching with two fingers
 * on a touch screen.
 * @api
 */ class PinchZoom extends (0, _pointerJsDefault.default) {
    /**
   * @param {Options} [options] Options.
   */ constructor(options){
        options = options ? options : {};
        const pointerOptions = /** @type {import("./Pointer.js").Options} */ options;
        if (!pointerOptions.stopDown) pointerOptions.stopDown = (0, _functionsJs.FALSE);
        super(pointerOptions);
        /**
     * @private
     * @type {import("../coordinate.js").Coordinate}
     */ this.anchor_ = null;
        /**
     * @private
     * @type {number}
     */ this.duration_ = options.duration !== undefined ? options.duration : 400;
        /**
     * @private
     * @type {number|undefined}
     */ this.lastDistance_ = undefined;
        /**
     * @private
     * @type {number}
     */ this.lastScaleDelta_ = 1;
    }
    /**
   * Handle pointer drag events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   */ handleDragEvent(mapBrowserEvent) {
        let scaleDelta = 1.0;
        const touch0 = this.targetPointers[0];
        const touch1 = this.targetPointers[1];
        const dx = touch0.clientX - touch1.clientX;
        const dy = touch0.clientY - touch1.clientY;
        // distance between touches
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (this.lastDistance_ !== undefined) scaleDelta = this.lastDistance_ / distance;
        this.lastDistance_ = distance;
        const map = mapBrowserEvent.map;
        const view = map.getView();
        if (scaleDelta != 1.0) this.lastScaleDelta_ = scaleDelta;
        // scale anchor point.
        this.anchor_ = map.getCoordinateFromPixelInternal(map.getEventPixel((0, _pointerJs.centroid)(this.targetPointers)));
        // scale, bypass the resolution constraint
        map.render();
        view.adjustResolutionInternal(scaleDelta, this.anchor_);
    }
    /**
   * Handle pointer up events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   */ handleUpEvent(mapBrowserEvent) {
        if (this.targetPointers.length < 2) {
            const map = mapBrowserEvent.map;
            const view = map.getView();
            const direction = this.lastScaleDelta_ > 1 ? 1 : -1;
            view.endInteraction(this.duration_, direction);
            return false;
        }
        return true;
    }
    /**
   * Handle pointer down events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   */ handleDownEvent(mapBrowserEvent) {
        if (this.targetPointers.length >= 2) {
            const map = mapBrowserEvent.map;
            this.anchor_ = null;
            this.lastDistance_ = undefined;
            this.lastScaleDelta_ = 1;
            if (!this.handlingDownUpSequence) map.getView().beginInteraction();
            return true;
        }
        return false;
    }
}
exports.default = PinchZoom;

},{"./Pointer.js":"1GIxf","../functions.js":"iqv8I","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lKEPe":[function(require,module,exports) {
/**
 * @module ol/size
 */ /**
 * An array of numbers representing a size: `[width, height]`.
 * @typedef {Array<number>} Size
 * @api
 */ /**
 * Returns a buffered size.
 * @param {Size} size Size.
 * @param {number} num The amount by which to buffer.
 * @param {Size} [dest] Optional reusable size array.
 * @return {Size} The buffered size.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buffer", ()=>buffer);
/**
 * Determines if a size has a positive area.
 * @param {Size} size The size to test.
 * @return {boolean} The size has a positive area.
 */ parcelHelpers.export(exports, "hasArea", ()=>hasArea);
/**
 * Returns a size scaled by a ratio. The result will be an array of integers.
 * @param {Size} size Size.
 * @param {number} ratio Ratio.
 * @param {Size} [dest] Optional reusable size array.
 * @return {Size} The scaled size.
 */ parcelHelpers.export(exports, "scale", ()=>scale);
/**
 * Returns an `Size` array for the passed in number (meaning: square) or
 * `Size` array.
 * (meaning: non-square),
 * @param {number|Size} size Width and height.
 * @param {Size} [dest] Optional reusable size array.
 * @return {Size} Size.
 * @api
 */ parcelHelpers.export(exports, "toSize", ()=>toSize);
function buffer(size, num, dest) {
    if (dest === undefined) dest = [
        0,
        0
    ];
    dest[0] = size[0] + 2 * num;
    dest[1] = size[1] + 2 * num;
    return dest;
}
function hasArea(size) {
    return size[0] > 0 && size[1] > 0;
}
function scale(size, ratio, dest) {
    if (dest === undefined) dest = [
        0,
        0
    ];
    dest[0] = size[0] * ratio + 0.5 | 0;
    dest[1] = size[1] * ratio + 0.5 | 0;
    return dest;
}
function toSize(size, dest) {
    if (Array.isArray(size)) return size;
    if (dest === undefined) dest = [
        size,
        size
    ];
    else {
        dest[0] = size;
        dest[1] = size;
    }
    return dest;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3ytzs":[function(require,module,exports) {
/**
 * @module ol/layer/Tile
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseTileJs = require("./BaseTile.js");
var _baseTileJsDefault = parcelHelpers.interopDefault(_baseTileJs);
var _tileLayerJs = require("../renderer/canvas/TileLayer.js");
var _tileLayerJsDefault = parcelHelpers.interopDefault(_tileLayerJs);
/**
 * @classdesc
 * For layer sources that provide pre-rendered, tiled images in grids that are
 * organized by zoom levels for specific resolutions.
 * Note that any property set in the options is set as a {@link module:ol/Object~BaseObject}
 * property on the layer object; for example, setting `title: 'My Title'` in the
 * options means that `title` is observable, and has get/set accessors.
 *
 * @template {import("../source/Tile.js").default} TileSourceType
 * @extends BaseTileLayer<TileSourceType, CanvasTileLayerRenderer>
 * @api
 */ class TileLayer extends (0, _baseTileJsDefault.default) {
    /**
   * @param {import("./BaseTile.js").Options<TileSourceType>} [options] Tile layer options.
   */ constructor(options){
        super(options);
    }
    createRenderer() {
        return new (0, _tileLayerJsDefault.default)(this);
    }
}
exports.default = TileLayer;

},{"./BaseTile.js":"g7Zx9","../renderer/canvas/TileLayer.js":"6bgv8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g7Zx9":[function(require,module,exports) {
/**
 * @module ol/layer/BaseTile
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _layerJs = require("./Layer.js");
var _layerJsDefault = parcelHelpers.interopDefault(_layerJs);
var _tilePropertyJs = require("./TileProperty.js");
var _tilePropertyJsDefault = parcelHelpers.interopDefault(_tilePropertyJs);
/***
 * @template Return
 * @typedef {import("../Observable").OnSignature<import("../Observable").EventTypes, import("../events/Event.js").default, Return> &
 *   import("../Observable").OnSignature<import("./Base").BaseLayerObjectEventTypes|
 *     import("./Layer.js").LayerEventType|'change:preload'|'change:useInterimTilesOnError', import("../Object").ObjectEvent, Return> &
 *   import("../Observable").OnSignature<import("../render/EventType").LayerRenderEventTypes, import("../render/Event").default, Return> &
 *   import("../Observable").CombinedOnSignature<import("../Observable").EventTypes|import("./Base").BaseLayerObjectEventTypes|
 *   import("./Layer.js").LayerEventType|'change:preload'|'change:useInterimTilesOnError'|import("../render/EventType").LayerRenderEventTypes, Return>} BaseTileLayerOnSignature
 */ /**
 * @template {import("../source/Tile.js").default} TileSourceType
 * @typedef {Object} Options
 * @property {string} [className='ol-layer'] A CSS class name to set to the layer element.
 * @property {number} [opacity=1] Opacity (0, 1).
 * @property {boolean} [visible=true] Visibility.
 * @property {import("../extent.js").Extent} [extent] The bounding extent for layer rendering.  The layer will not be
 * rendered outside of this extent.
 * @property {number} [zIndex] The z-index for layer rendering.  At rendering time, the layers
 * will be ordered, first by Z-index and then by position. When `undefined`, a `zIndex` of 0 is assumed
 * for layers that are added to the map's `layers` collection, or `Infinity` when the layer's `setMap()`
 * method was used.
 * @property {number} [minResolution] The minimum resolution (inclusive) at which this layer will be
 * visible.
 * @property {number} [maxResolution] The maximum resolution (exclusive) below which this layer will
 * be visible.
 * @property {number} [minZoom] The minimum view zoom level (exclusive) above which this layer will be
 * visible.
 * @property {number} [maxZoom] The maximum view zoom level (inclusive) at which this layer will
 * be visible.
 * @property {number} [preload=0] Preload. Load low-resolution tiles up to `preload` levels. `0`
 * means no preloading.
 * @property {TileSourceType} [source] Source for this layer.
 * @property {import("../Map.js").default} [map] Sets the layer as overlay on a map. The map will not manage
 * this layer in its layers collection, and the layer will be rendered on top. This is useful for
 * temporary layers. The standard way to add a layer to a map and have it managed by the map is to
 * use {@link import("../Map.js").default#addLayer map.addLayer()}.
 * @property {boolean} [useInterimTilesOnError=true] Use interim tiles on error.
 * @property {Object<string, *>} [properties] Arbitrary observable properties. Can be accessed with `#get()` and `#set()`.
 */ /**
 * @classdesc
 * For layer sources that provide pre-rendered, tiled images in grids that are
 * organized by zoom levels for specific resolutions.
 * Note that any property set in the options is set as a {@link module:ol/Object~BaseObject}
 * property on the layer object; for example, setting `title: 'My Title'` in the
 * options means that `title` is observable, and has get/set accessors.
 *
 * @template {import("../source/Tile.js").default} TileSourceType
 * @template {import("../renderer/Layer.js").default} RendererType
 * @extends {Layer<TileSourceType, RendererType>}
 * @api
 */ class BaseTileLayer extends (0, _layerJsDefault.default) {
    /**
   * @param {Options<TileSourceType>} [options] Tile layer options.
   */ constructor(options){
        options = options ? options : {};
        const baseOptions = Object.assign({}, options);
        delete baseOptions.preload;
        delete baseOptions.useInterimTilesOnError;
        super(baseOptions);
        /***
     * @type {BaseTileLayerOnSignature<import("../events").EventsKey>}
     */ this.on;
        /***
     * @type {BaseTileLayerOnSignature<import("../events").EventsKey>}
     */ this.once;
        /***
     * @type {BaseTileLayerOnSignature<void>}
     */ this.un;
        this.setPreload(options.preload !== undefined ? options.preload : 0);
        this.setUseInterimTilesOnError(options.useInterimTilesOnError !== undefined ? options.useInterimTilesOnError : true);
    }
    /**
   * Return the level as number to which we will preload tiles up to.
   * @return {number} The level to preload tiles up to.
   * @observable
   * @api
   */ getPreload() {
        return /** @type {number} */ this.get((0, _tilePropertyJsDefault.default).PRELOAD);
    }
    /**
   * Set the level as number to which we will preload tiles up to.
   * @param {number} preload The level to preload tiles up to.
   * @observable
   * @api
   */ setPreload(preload) {
        this.set((0, _tilePropertyJsDefault.default).PRELOAD, preload);
    }
    /**
   * Whether we use interim tiles on error.
   * @return {boolean} Use interim tiles on error.
   * @observable
   * @api
   */ getUseInterimTilesOnError() {
        return /** @type {boolean} */ this.get((0, _tilePropertyJsDefault.default).USE_INTERIM_TILES_ON_ERROR);
    }
    /**
   * Set whether we use interim tiles on error.
   * @param {boolean} useInterimTilesOnError Use interim tiles on error.
   * @observable
   * @api
   */ setUseInterimTilesOnError(useInterimTilesOnError) {
        this.set((0, _tilePropertyJsDefault.default).USE_INTERIM_TILES_ON_ERROR, useInterimTilesOnError);
    }
    /**
   * Get data for a pixel location.  The return type depends on the source data.  For image tiles,
   * a four element RGBA array will be returned.  For data tiles, the array length will match the
   * number of bands in the dataset.  For requests outside the layer extent, `null` will be returned.
   * Data for a image tiles can only be retrieved if the source's `crossOrigin` property is set.
   *
   * ```js
   * // display layer data on every pointer move
   * map.on('pointermove', (event) => {
   *   console.log(layer.getData(event.pixel));
   * });
   * ```
   * @param {import("../pixel").Pixel} pixel Pixel.
   * @return {Uint8ClampedArray|Uint8Array|Float32Array|DataView|null} Pixel data.
   * @api
   */ getData(pixel) {
        return super.getData(pixel);
    }
}
exports.default = BaseTileLayer;

},{"./Layer.js":"8J9Kf","./TileProperty.js":"cIL12","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cIL12":[function(require,module,exports) {
/**
 * @module ol/layer/TileProperty
 */ /**
 * @enum {string}
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    PRELOAD: "preload",
    USE_INTERIM_TILES_ON_ERROR: "useInterimTilesOnError"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6bgv8":[function(require,module,exports) {
/**
 * @module ol/renderer/canvas/TileLayer
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _layerJs = require("./Layer.js");
var _layerJsDefault = parcelHelpers.interopDefault(_layerJs);
var _imageTileJs = require("../../ImageTile.js");
var _imageTileJsDefault = parcelHelpers.interopDefault(_imageTileJs);
var _tileJs = require("../../reproj/Tile.js");
var _tileJsDefault = parcelHelpers.interopDefault(_tileJs);
var _tileRangeJs = require("../../TileRange.js");
var _tileRangeJsDefault = parcelHelpers.interopDefault(_tileRangeJs);
var _tileStateJs = require("../../TileState.js");
var _tileStateJsDefault = parcelHelpers.interopDefault(_tileStateJs);
var _transformJs = require("../../transform.js");
var _arrayJs = require("../../array.js");
var _extentJs = require("../../extent.js");
var _projJs = require("../../proj.js");
var _utilJs = require("../../util.js");
var _sizeJs = require("../../size.js");
/**
 * @classdesc
 * Canvas renderer for tile layers.
 * @api
 * @template {import("../../layer/Tile.js").default<import("../../source/Tile.js").default>|import("../../layer/VectorTile.js").default} [LayerType=import("../../layer/Tile.js").default<import("../../source/Tile.js").default>|import("../../layer/VectorTile.js").default]
 * @extends {CanvasLayerRenderer<LayerType>}
 */ class CanvasTileLayerRenderer extends (0, _layerJsDefault.default) {
    /**
   * @param {LayerType} tileLayer Tile layer.
   */ constructor(tileLayer){
        super(tileLayer);
        /**
     * Rendered extent has changed since the previous `renderFrame()` call
     * @type {boolean}
     */ this.extentChanged = true;
        /**
     * @private
     * @type {?import("../../extent.js").Extent}
     */ this.renderedExtent_ = null;
        /**
     * @protected
     * @type {number}
     */ this.renderedPixelRatio;
        /**
     * @protected
     * @type {import("../../proj/Projection.js").default}
     */ this.renderedProjection = null;
        /**
     * @protected
     * @type {number}
     */ this.renderedRevision;
        /**
     * @protected
     * @type {!Array<import("../../Tile.js").default>}
     */ this.renderedTiles = [];
        /**
     * @private
     * @type {boolean}
     */ this.newTiles_ = false;
        /**
     * @protected
     * @type {import("../../extent.js").Extent}
     */ this.tmpExtent = (0, _extentJs.createEmpty)();
        /**
     * @private
     * @type {import("../../TileRange.js").default}
     */ this.tmpTileRange_ = new (0, _tileRangeJsDefault.default)(0, 0, 0, 0);
    }
    /**
   * @protected
   * @param {import("../../Tile.js").default} tile Tile.
   * @return {boolean} Tile is drawable.
   */ isDrawableTile(tile) {
        const tileLayer = this.getLayer();
        const tileState = tile.getState();
        const useInterimTilesOnError = tileLayer.getUseInterimTilesOnError();
        return tileState == (0, _tileStateJsDefault.default).LOADED || tileState == (0, _tileStateJsDefault.default).EMPTY || tileState == (0, _tileStateJsDefault.default).ERROR && !useInterimTilesOnError;
    }
    /**
   * @param {number} z Tile coordinate z.
   * @param {number} x Tile coordinate x.
   * @param {number} y Tile coordinate y.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @return {!import("../../Tile.js").default} Tile.
   */ getTile(z, x, y, frameState) {
        const pixelRatio = frameState.pixelRatio;
        const projection = frameState.viewState.projection;
        const tileLayer = this.getLayer();
        const tileSource = tileLayer.getSource();
        let tile = tileSource.getTile(z, x, y, pixelRatio, projection);
        if (tile.getState() == (0, _tileStateJsDefault.default).ERROR) {
            if (tileLayer.getUseInterimTilesOnError() && tileLayer.getPreload() > 0) // Preloaded tiles for lower resolutions might have finished loading.
            this.newTiles_ = true;
        }
        if (!this.isDrawableTile(tile)) tile = tile.getInterimTile();
        return tile;
    }
    /**
   * @param {import("../../pixel.js").Pixel} pixel Pixel.
   * @return {Uint8ClampedArray} Data at the pixel location.
   */ getData(pixel) {
        const frameState = this.frameState;
        if (!frameState) return null;
        const layer = this.getLayer();
        const coordinate = (0, _transformJs.apply)(frameState.pixelToCoordinateTransform, pixel.slice());
        const layerExtent = layer.getExtent();
        if (layerExtent) {
            if (!(0, _extentJs.containsCoordinate)(layerExtent, coordinate)) return null;
        }
        const pixelRatio = frameState.pixelRatio;
        const projection = frameState.viewState.projection;
        const viewState = frameState.viewState;
        const source = layer.getRenderSource();
        const tileGrid = source.getTileGridForProjection(viewState.projection);
        const tilePixelRatio = source.getTilePixelRatio(frameState.pixelRatio);
        for(let z = tileGrid.getZForResolution(viewState.resolution); z >= tileGrid.getMinZoom(); --z){
            const tileCoord = tileGrid.getTileCoordForCoordAndZ(coordinate, z);
            const tile = source.getTile(z, tileCoord[1], tileCoord[2], pixelRatio, projection);
            if (!(tile instanceof (0, _imageTileJsDefault.default) || tile instanceof (0, _tileJsDefault.default)) || tile instanceof (0, _tileJsDefault.default) && tile.getState() === (0, _tileStateJsDefault.default).EMPTY) return null;
            if (tile.getState() !== (0, _tileStateJsDefault.default).LOADED) continue;
            const tileOrigin = tileGrid.getOrigin(z);
            const tileSize = (0, _sizeJs.toSize)(tileGrid.getTileSize(z));
            const tileResolution = tileGrid.getResolution(z);
            const col = Math.floor(tilePixelRatio * ((coordinate[0] - tileOrigin[0]) / tileResolution - tileCoord[1] * tileSize[0]));
            const row = Math.floor(tilePixelRatio * ((tileOrigin[1] - coordinate[1]) / tileResolution - tileCoord[2] * tileSize[1]));
            const gutter = Math.round(tilePixelRatio * source.getGutterForProjection(viewState.projection));
            return this.getImageData(tile.getImage(), col + gutter, row + gutter);
        }
        return null;
    }
    /**
   * @param {Object<number, Object<string, import("../../Tile.js").default>>} tiles Lookup of loaded tiles by zoom level.
   * @param {number} zoom Zoom level.
   * @param {import("../../Tile.js").default} tile Tile.
   * @return {boolean|void} If `false`, the tile will not be considered loaded.
   */ loadedTileCallback(tiles, zoom, tile) {
        if (this.isDrawableTile(tile)) return super.loadedTileCallback(tiles, zoom, tile);
        return false;
    }
    /**
   * Determine whether render should be called.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @return {boolean} Layer is ready to be rendered.
   */ prepareFrame(frameState) {
        return !!this.getLayer().getSource();
    }
    /**
   * Render the layer.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {HTMLElement} target Target that may be used to render content to.
   * @return {HTMLElement} The rendered element.
   */ renderFrame(frameState, target) {
        const layerState = frameState.layerStatesArray[frameState.layerIndex];
        const viewState = frameState.viewState;
        const projection = viewState.projection;
        const viewResolution = viewState.resolution;
        const viewCenter = viewState.center;
        const rotation = viewState.rotation;
        const pixelRatio = frameState.pixelRatio;
        const tileLayer = this.getLayer();
        const tileSource = tileLayer.getSource();
        const sourceRevision = tileSource.getRevision();
        const tileGrid = tileSource.getTileGridForProjection(projection);
        const z = tileGrid.getZForResolution(viewResolution, tileSource.zDirection);
        const tileResolution = tileGrid.getResolution(z);
        let extent = frameState.extent;
        const resolution = frameState.viewState.resolution;
        const tilePixelRatio = tileSource.getTilePixelRatio(pixelRatio);
        // desired dimensions of the canvas in pixels
        const width = Math.round((0, _extentJs.getWidth)(extent) / resolution * pixelRatio);
        const height = Math.round((0, _extentJs.getHeight)(extent) / resolution * pixelRatio);
        const layerExtent = layerState.extent && (0, _projJs.fromUserExtent)(layerState.extent, projection);
        if (layerExtent) extent = (0, _extentJs.getIntersection)(extent, (0, _projJs.fromUserExtent)(layerState.extent, projection));
        const dx = tileResolution * width / 2 / tilePixelRatio;
        const dy = tileResolution * height / 2 / tilePixelRatio;
        const canvasExtent = [
            viewCenter[0] - dx,
            viewCenter[1] - dy,
            viewCenter[0] + dx,
            viewCenter[1] + dy
        ];
        const tileRange = tileGrid.getTileRangeForExtentAndZ(extent, z);
        /**
     * @type {Object<number, Object<string, import("../../Tile.js").default>>}
     */ const tilesToDrawByZ = {};
        tilesToDrawByZ[z] = {};
        const findLoadedTiles = this.createLoadedTileFinder(tileSource, projection, tilesToDrawByZ);
        const tmpExtent = this.tmpExtent;
        const tmpTileRange = this.tmpTileRange_;
        this.newTiles_ = false;
        const viewport = rotation ? (0, _extentJs.getRotatedViewport)(viewState.center, resolution, rotation, frameState.size) : undefined;
        for(let x = tileRange.minX; x <= tileRange.maxX; ++x)for(let y = tileRange.minY; y <= tileRange.maxY; ++y){
            if (rotation && !tileGrid.tileCoordIntersectsViewport([
                z,
                x,
                y
            ], viewport)) continue;
            const tile = this.getTile(z, x, y, frameState);
            if (this.isDrawableTile(tile)) {
                const uid = (0, _utilJs.getUid)(this);
                if (tile.getState() == (0, _tileStateJsDefault.default).LOADED) {
                    tilesToDrawByZ[z][tile.tileCoord.toString()] = tile;
                    let inTransition = tile.inTransition(uid);
                    if (inTransition && layerState.opacity !== 1) {
                        // Skipping transition when layer is not fully opaque avoids visual artifacts.
                        tile.endTransition(uid);
                        inTransition = false;
                    }
                    if (!this.newTiles_ && (inTransition || !this.renderedTiles.includes(tile))) this.newTiles_ = true;
                }
                if (tile.getAlpha(uid, frameState.time) === 1) continue;
            }
            const childTileRange = tileGrid.getTileCoordChildTileRange(tile.tileCoord, tmpTileRange, tmpExtent);
            let covered = false;
            if (childTileRange) covered = findLoadedTiles(z + 1, childTileRange);
            if (!covered) tileGrid.forEachTileCoordParentTileRange(tile.tileCoord, findLoadedTiles, tmpTileRange, tmpExtent);
        }
        const canvasScale = tileResolution / viewResolution * pixelRatio / tilePixelRatio;
        // set forward and inverse pixel transforms
        (0, _transformJs.compose)(this.pixelTransform, frameState.size[0] / 2, frameState.size[1] / 2, 1 / pixelRatio, 1 / pixelRatio, rotation, -width / 2, -height / 2);
        const canvasTransform = (0, _transformJs.toString)(this.pixelTransform);
        this.useContainer(target, canvasTransform, this.getBackground(frameState));
        const context = this.context;
        const canvas = context.canvas;
        (0, _transformJs.makeInverse)(this.inversePixelTransform, this.pixelTransform);
        // set scale transform for calculating tile positions on the canvas
        (0, _transformJs.compose)(this.tempTransform, width / 2, height / 2, canvasScale, canvasScale, 0, -width / 2, -height / 2);
        if (canvas.width != width || canvas.height != height) {
            canvas.width = width;
            canvas.height = height;
        } else if (!this.containerReused) context.clearRect(0, 0, width, height);
        if (layerExtent) this.clipUnrotated(context, frameState, layerExtent);
        if (!tileSource.getInterpolate()) context.imageSmoothingEnabled = false;
        this.preRender(context, frameState);
        this.renderedTiles.length = 0;
        /** @type {Array<number>} */ let zs = Object.keys(tilesToDrawByZ).map(Number);
        zs.sort((0, _arrayJs.ascending));
        let clips, clipZs, currentClip;
        if (layerState.opacity === 1 && (!this.containerReused || tileSource.getOpaque(frameState.viewState.projection))) zs = zs.reverse();
        else {
            clips = [];
            clipZs = [];
        }
        for(let i = zs.length - 1; i >= 0; --i){
            const currentZ = zs[i];
            const currentTilePixelSize = tileSource.getTilePixelSize(currentZ, pixelRatio, projection);
            const currentResolution = tileGrid.getResolution(currentZ);
            const currentScale = currentResolution / tileResolution;
            const dx = currentTilePixelSize[0] * currentScale * canvasScale;
            const dy = currentTilePixelSize[1] * currentScale * canvasScale;
            const originTileCoord = tileGrid.getTileCoordForCoordAndZ((0, _extentJs.getTopLeft)(canvasExtent), currentZ);
            const originTileExtent = tileGrid.getTileCoordExtent(originTileCoord);
            const origin = (0, _transformJs.apply)(this.tempTransform, [
                tilePixelRatio * (originTileExtent[0] - canvasExtent[0]) / tileResolution,
                tilePixelRatio * (canvasExtent[3] - originTileExtent[3]) / tileResolution
            ]);
            const tileGutter = tilePixelRatio * tileSource.getGutterForProjection(projection);
            const tilesToDraw = tilesToDrawByZ[currentZ];
            for(const tileCoordKey in tilesToDraw){
                const tile = /** @type {import("../../ImageTile.js").default} */ tilesToDraw[tileCoordKey];
                const tileCoord = tile.tileCoord;
                // Calculate integer positions and sizes so that tiles align
                const xIndex = originTileCoord[1] - tileCoord[1];
                const nextX = Math.round(origin[0] - (xIndex - 1) * dx);
                const yIndex = originTileCoord[2] - tileCoord[2];
                const nextY = Math.round(origin[1] - (yIndex - 1) * dy);
                const x = Math.round(origin[0] - xIndex * dx);
                const y = Math.round(origin[1] - yIndex * dy);
                const w = nextX - x;
                const h = nextY - y;
                const transition = z === currentZ;
                const inTransition = transition && tile.getAlpha((0, _utilJs.getUid)(this), frameState.time) !== 1;
                let contextSaved = false;
                if (!inTransition) {
                    if (clips) {
                        // Clip mask for regions in this tile that already filled by a higher z tile
                        currentClip = [
                            x,
                            y,
                            x + w,
                            y,
                            x + w,
                            y + h,
                            x,
                            y + h
                        ];
                        for(let i = 0, ii = clips.length; i < ii; ++i)if (z !== currentZ && currentZ < clipZs[i]) {
                            const clip = clips[i];
                            if ((0, _extentJs.intersects)([
                                x,
                                y,
                                x + w,
                                y + h
                            ], [
                                clip[0],
                                clip[3],
                                clip[4],
                                clip[7]
                            ])) {
                                if (!contextSaved) {
                                    context.save();
                                    contextSaved = true;
                                }
                                context.beginPath();
                                // counter-clockwise (outer ring) for current tile
                                context.moveTo(currentClip[0], currentClip[1]);
                                context.lineTo(currentClip[2], currentClip[3]);
                                context.lineTo(currentClip[4], currentClip[5]);
                                context.lineTo(currentClip[6], currentClip[7]);
                                // clockwise (inner ring) for higher z tile
                                context.moveTo(clip[6], clip[7]);
                                context.lineTo(clip[4], clip[5]);
                                context.lineTo(clip[2], clip[3]);
                                context.lineTo(clip[0], clip[1]);
                                context.clip();
                            }
                        }
                        clips.push(currentClip);
                        clipZs.push(currentZ);
                    } else context.clearRect(x, y, w, h);
                }
                this.drawTileImage(tile, frameState, x, y, w, h, tileGutter, transition);
                if (clips && !inTransition) {
                    if (contextSaved) context.restore();
                    this.renderedTiles.unshift(tile);
                } else this.renderedTiles.push(tile);
                this.updateUsedTiles(frameState.usedTiles, tileSource, tile);
            }
        }
        this.renderedRevision = sourceRevision;
        this.renderedResolution = tileResolution;
        this.extentChanged = !this.renderedExtent_ || !(0, _extentJs.equals)(this.renderedExtent_, canvasExtent);
        this.renderedExtent_ = canvasExtent;
        this.renderedPixelRatio = pixelRatio;
        this.renderedProjection = projection;
        this.manageTilePyramid(frameState, tileSource, tileGrid, pixelRatio, projection, extent, z, tileLayer.getPreload());
        this.scheduleExpireCache(frameState, tileSource);
        this.postRender(context, frameState);
        if (layerState.extent) context.restore();
        context.imageSmoothingEnabled = true;
        if (canvasTransform !== canvas.style.transform) canvas.style.transform = canvasTransform;
        return this.container;
    }
    /**
   * @param {import("../../ImageTile.js").default} tile Tile.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {number} x Left of the tile.
   * @param {number} y Top of the tile.
   * @param {number} w Width of the tile.
   * @param {number} h Height of the tile.
   * @param {number} gutter Tile gutter.
   * @param {boolean} transition Apply an alpha transition.
   */ drawTileImage(tile, frameState, x, y, w, h, gutter, transition) {
        const image = this.getTileImage(tile);
        if (!image) return;
        const uid = (0, _utilJs.getUid)(this);
        const layerState = frameState.layerStatesArray[frameState.layerIndex];
        const alpha = layerState.opacity * (transition ? tile.getAlpha(uid, frameState.time) : 1);
        const alphaChanged = alpha !== this.context.globalAlpha;
        if (alphaChanged) {
            this.context.save();
            this.context.globalAlpha = alpha;
        }
        this.context.drawImage(image, gutter, gutter, image.width - 2 * gutter, image.height - 2 * gutter, x, y, w, h);
        if (alphaChanged) this.context.restore();
        if (alpha !== layerState.opacity) frameState.animate = true;
        else if (transition) tile.endTransition(uid);
    }
    /**
   * @return {HTMLCanvasElement} Image
   */ getImage() {
        const context = this.context;
        return context ? context.canvas : null;
    }
    /**
   * Get the image from a tile.
   * @param {import("../../ImageTile.js").default} tile Tile.
   * @return {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} Image.
   * @protected
   */ getTileImage(tile) {
        return tile.getImage();
    }
    /**
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {import("../../source/Tile.js").default} tileSource Tile source.
   * @protected
   */ scheduleExpireCache(frameState, tileSource) {
        if (tileSource.canExpireCache()) {
            /**
       * @param {import("../../source/Tile.js").default} tileSource Tile source.
       * @param {import("../../Map.js").default} map Map.
       * @param {import("../../Map.js").FrameState} frameState Frame state.
       */ const postRenderFunction = (function(tileSource, map, frameState) {
                const tileSourceKey = (0, _utilJs.getUid)(tileSource);
                if (tileSourceKey in frameState.usedTiles) tileSource.expireCache(frameState.viewState.projection, frameState.usedTiles[tileSourceKey]);
            }).bind(null, tileSource);
            frameState.postRenderFunctions.push(/** @type {import("../../Map.js").PostRenderFunction} */ postRenderFunction);
        }
    }
    /**
   * @param {!Object<string, !Object<string, boolean>>} usedTiles Used tiles.
   * @param {import("../../source/Tile.js").default} tileSource Tile source.
   * @param {import('../../Tile.js').default} tile Tile.
   * @protected
   */ updateUsedTiles(usedTiles, tileSource, tile) {
        // FIXME should we use tilesToDrawByZ instead?
        const tileSourceKey = (0, _utilJs.getUid)(tileSource);
        if (!(tileSourceKey in usedTiles)) usedTiles[tileSourceKey] = {};
        usedTiles[tileSourceKey][tile.getKey()] = true;
    }
    /**
   * Manage tile pyramid.
   * This function performs a number of functions related to the tiles at the
   * current zoom and lower zoom levels:
   * - registers idle tiles in frameState.wantedTiles so that they are not
   *   discarded by the tile queue
   * - enqueues missing tiles
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {import("../../source/Tile.js").default} tileSource Tile source.
   * @param {import("../../tilegrid/TileGrid.js").default} tileGrid Tile grid.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("../../proj/Projection.js").default} projection Projection.
   * @param {import("../../extent.js").Extent} extent Extent.
   * @param {number} currentZ Current Z.
   * @param {number} preload Load low resolution tiles up to `preload` levels.
   * @param {function(import("../../Tile.js").default):void} [tileCallback] Tile callback.
   * @protected
   */ manageTilePyramid(frameState, tileSource, tileGrid, pixelRatio, projection, extent, currentZ, preload, tileCallback) {
        const tileSourceKey = (0, _utilJs.getUid)(tileSource);
        if (!(tileSourceKey in frameState.wantedTiles)) frameState.wantedTiles[tileSourceKey] = {};
        const wantedTiles = frameState.wantedTiles[tileSourceKey];
        const tileQueue = frameState.tileQueue;
        const minZoom = tileGrid.getMinZoom();
        const rotation = frameState.viewState.rotation;
        const viewport = rotation ? (0, _extentJs.getRotatedViewport)(frameState.viewState.center, frameState.viewState.resolution, rotation, frameState.size) : undefined;
        let tileCount = 0;
        let tile, tileRange, tileResolution, x, y, z;
        for(z = minZoom; z <= currentZ; ++z){
            tileRange = tileGrid.getTileRangeForExtentAndZ(extent, z, tileRange);
            tileResolution = tileGrid.getResolution(z);
            for(x = tileRange.minX; x <= tileRange.maxX; ++x)for(y = tileRange.minY; y <= tileRange.maxY; ++y){
                if (rotation && !tileGrid.tileCoordIntersectsViewport([
                    z,
                    x,
                    y
                ], viewport)) continue;
                if (currentZ - z <= preload) {
                    ++tileCount;
                    tile = tileSource.getTile(z, x, y, pixelRatio, projection);
                    if (tile.getState() == (0, _tileStateJsDefault.default).IDLE) {
                        wantedTiles[tile.getKey()] = true;
                        if (!tileQueue.isKeyQueued(tile.getKey())) tileQueue.enqueue([
                            tile,
                            tileSourceKey,
                            tileGrid.getTileCoordCenter(tile.tileCoord),
                            tileResolution
                        ]);
                    }
                    if (tileCallback !== undefined) tileCallback(tile);
                } else tileSource.useTile(z, x, y, projection);
            }
        }
        tileSource.updateCacheSize(tileCount, projection);
    }
}
exports.default = CanvasTileLayerRenderer;

},{"./Layer.js":"fY3ny","../../ImageTile.js":"bGt2E","../../reproj/Tile.js":"lR1TX","../../TileRange.js":"3pvAn","../../TileState.js":"2fodI","../../transform.js":"1BqUf","../../array.js":"1Fbic","../../extent.js":"6YrVc","../../proj.js":"SznqC","../../util.js":"pLBjQ","../../size.js":"lKEPe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fY3ny":[function(require,module,exports) {
/**
 * @module ol/renderer/canvas/Layer
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "canvasPool", ()=>canvasPool);
var _layerJs = require("../Layer.js");
var _layerJsDefault = parcelHelpers.interopDefault(_layerJs);
var _eventJs = require("../../render/Event.js");
var _eventJsDefault = parcelHelpers.interopDefault(_eventJs);
var _eventTypeJs = require("../../render/EventType.js");
var _eventTypeJsDefault = parcelHelpers.interopDefault(_eventTypeJs);
var _transformJs = require("../../transform.js");
var _colorJs = require("../../color.js");
var _domJs = require("../../dom.js");
var _arrayJs = require("../../array.js");
var _extentJs = require("../../extent.js");
const canvasPool = [];
/**
 * @type {CanvasRenderingContext2D}
 */ let pixelContext = null;
function createPixelContext() {
    pixelContext = (0, _domJs.createCanvasContext2D)(1, 1, undefined, {
        willReadFrequently: true
    });
}
/**
 * @abstract
 * @template {import("../../layer/Layer.js").default} LayerType
 * @extends {LayerRenderer<LayerType>}
 */ class CanvasLayerRenderer extends (0, _layerJsDefault.default) {
    /**
   * @param {LayerType} layer Layer.
   */ constructor(layer){
        super(layer);
        /**
     * @protected
     * @type {HTMLElement}
     */ this.container = null;
        /**
     * @protected
     * @type {number}
     */ this.renderedResolution;
        /**
     * A temporary transform.  The values in this transform should only be used in a
     * function that sets the values.
     * @protected
     * @type {import("../../transform.js").Transform}
     */ this.tempTransform = (0, _transformJs.create)();
        /**
     * The transform for rendered pixels to viewport CSS pixels.  This transform must
     * be set when rendering a frame and may be used by other functions after rendering.
     * @protected
     * @type {import("../../transform.js").Transform}
     */ this.pixelTransform = (0, _transformJs.create)();
        /**
     * The transform for viewport CSS pixels to rendered pixels.  This transform must
     * be set when rendering a frame and may be used by other functions after rendering.
     * @protected
     * @type {import("../../transform.js").Transform}
     */ this.inversePixelTransform = (0, _transformJs.create)();
        /**
     * @type {CanvasRenderingContext2D}
     */ this.context = null;
        /**
     * @type {boolean}
     */ this.containerReused = false;
        /**
     * @private
     * @type {CanvasRenderingContext2D}
     */ this.pixelContext_ = null;
        /**
     * @protected
     * @type {import("../../Map.js").FrameState|null}
     */ this.frameState = null;
    }
    /**
   * @param {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} image Image.
   * @param {number} col The column index.
   * @param {number} row The row index.
   * @return {Uint8ClampedArray|null} The image data.
   */ getImageData(image, col, row) {
        if (!pixelContext) createPixelContext();
        pixelContext.clearRect(0, 0, 1, 1);
        let data;
        try {
            pixelContext.drawImage(image, col, row, 1, 1, 0, 0, 1, 1);
            data = pixelContext.getImageData(0, 0, 1, 1).data;
        } catch (err) {
            pixelContext = null;
            return null;
        }
        return data;
    }
    /**
   * @param {import('../../Map.js').FrameState} frameState Frame state.
   * @return {string} Background color.
   */ getBackground(frameState) {
        const layer = this.getLayer();
        let background = layer.getBackground();
        if (typeof background === "function") background = background(frameState.viewState.resolution);
        return background || undefined;
    }
    /**
   * Get a rendering container from an existing target, if compatible.
   * @param {HTMLElement} target Potential render target.
   * @param {string} transform CSS Transform.
   * @param {string} [backgroundColor] Background color.
   */ useContainer(target, transform, backgroundColor) {
        const layerClassName = this.getLayer().getClassName();
        let container, context;
        if (target && target.className === layerClassName && (!backgroundColor || target && target.style.backgroundColor && (0, _arrayJs.equals)((0, _colorJs.asArray)(target.style.backgroundColor), (0, _colorJs.asArray)(backgroundColor)))) {
            const canvas = target.firstElementChild;
            if (canvas instanceof HTMLCanvasElement) context = canvas.getContext("2d");
        }
        if (context && context.canvas.style.transform === transform) {
            // Container of the previous layer renderer can be used.
            this.container = target;
            this.context = context;
            this.containerReused = true;
        } else if (this.containerReused) {
            // Previously reused container cannot be used any more.
            this.container = null;
            this.context = null;
            this.containerReused = false;
        }
        if (!this.container) {
            container = document.createElement("div");
            container.className = layerClassName;
            let style = container.style;
            style.position = "absolute";
            style.width = "100%";
            style.height = "100%";
            context = (0, _domJs.createCanvasContext2D)();
            const canvas = context.canvas;
            container.appendChild(canvas);
            style = canvas.style;
            style.position = "absolute";
            style.left = "0";
            style.transformOrigin = "top left";
            this.container = container;
            this.context = context;
        }
        if (!this.containerReused && backgroundColor && !this.container.style.backgroundColor) this.container.style.backgroundColor = backgroundColor;
    }
    /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {import("../../extent.js").Extent} extent Clip extent.
   * @protected
   */ clipUnrotated(context, frameState, extent) {
        const topLeft = (0, _extentJs.getTopLeft)(extent);
        const topRight = (0, _extentJs.getTopRight)(extent);
        const bottomRight = (0, _extentJs.getBottomRight)(extent);
        const bottomLeft = (0, _extentJs.getBottomLeft)(extent);
        (0, _transformJs.apply)(frameState.coordinateToPixelTransform, topLeft);
        (0, _transformJs.apply)(frameState.coordinateToPixelTransform, topRight);
        (0, _transformJs.apply)(frameState.coordinateToPixelTransform, bottomRight);
        (0, _transformJs.apply)(frameState.coordinateToPixelTransform, bottomLeft);
        const inverted = this.inversePixelTransform;
        (0, _transformJs.apply)(inverted, topLeft);
        (0, _transformJs.apply)(inverted, topRight);
        (0, _transformJs.apply)(inverted, bottomRight);
        (0, _transformJs.apply)(inverted, bottomLeft);
        context.save();
        context.beginPath();
        context.moveTo(Math.round(topLeft[0]), Math.round(topLeft[1]));
        context.lineTo(Math.round(topRight[0]), Math.round(topRight[1]));
        context.lineTo(Math.round(bottomRight[0]), Math.round(bottomRight[1]));
        context.lineTo(Math.round(bottomLeft[0]), Math.round(bottomLeft[1]));
        context.clip();
    }
    /**
   * @param {import("../../render/EventType.js").default} type Event type.
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @private
   */ dispatchRenderEvent_(type, context, frameState) {
        const layer = this.getLayer();
        if (layer.hasListener(type)) {
            const event = new (0, _eventJsDefault.default)(type, this.inversePixelTransform, frameState, context);
            layer.dispatchEvent(event);
        }
    }
    /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @protected
   */ preRender(context, frameState) {
        this.frameState = frameState;
        this.dispatchRenderEvent_((0, _eventTypeJsDefault.default).PRERENDER, context, frameState);
    }
    /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @protected
   */ postRender(context, frameState) {
        this.dispatchRenderEvent_((0, _eventTypeJsDefault.default).POSTRENDER, context, frameState);
    }
    /**
   * Creates a transform for rendering to an element that will be rotated after rendering.
   * @param {import("../../coordinate.js").Coordinate} center Center.
   * @param {number} resolution Resolution.
   * @param {number} rotation Rotation.
   * @param {number} pixelRatio Pixel ratio.
   * @param {number} width Width of the rendered element (in pixels).
   * @param {number} height Height of the rendered element (in pixels).
   * @param {number} offsetX Offset on the x-axis in view coordinates.
   * @protected
   * @return {!import("../../transform.js").Transform} Transform.
   */ getRenderTransform(center, resolution, rotation, pixelRatio, width, height, offsetX) {
        const dx1 = width / 2;
        const dy1 = height / 2;
        const sx = pixelRatio / resolution;
        const sy = -sx;
        const dx2 = -center[0] + offsetX;
        const dy2 = -center[1];
        return (0, _transformJs.compose)(this.tempTransform, dx1, dy1, sx, sy, -rotation, dx2, dy2);
    }
    /**
   * Clean up.
   */ disposeInternal() {
        delete this.frameState;
        super.disposeInternal();
    }
}
exports.default = CanvasLayerRenderer;

},{"../Layer.js":"b6gGa","../../render/Event.js":"bpzid","../../render/EventType.js":"5G9JA","../../transform.js":"1BqUf","../../color.js":"4tahz","../../dom.js":"84QzQ","../../array.js":"1Fbic","../../extent.js":"6YrVc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b6gGa":[function(require,module,exports) {
/**
 * @module ol/renderer/Layer
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _eventTypeJs = require("../events/EventType.js");
var _eventTypeJsDefault = parcelHelpers.interopDefault(_eventTypeJs);
var _imageStateJs = require("../ImageState.js");
var _imageStateJsDefault = parcelHelpers.interopDefault(_imageStateJs);
var _observableJs = require("../Observable.js");
var _observableJsDefault = parcelHelpers.interopDefault(_observableJs);
var _utilJs = require("../util.js");
/**
 * @template {import("../layer/Layer.js").default} LayerType
 */ class LayerRenderer extends (0, _observableJsDefault.default) {
    /**
   * @param {LayerType} layer Layer.
   */ constructor(layer){
        super();
        /**
     * The renderer is initialized and ready to render.
     * @type {boolean}
     */ this.ready = true;
        /** @private */ this.boundHandleImageChange_ = this.handleImageChange_.bind(this);
        /**
     * @protected
     * @type {LayerType}
     */ this.layer_ = layer;
        /**
     * @type {import("../render/canvas/ExecutorGroup").default}
     */ this.declutterExecutorGroup = null;
    }
    /**
   * Asynchronous layer level hit detection.
   * @param {import("../pixel.js").Pixel} pixel Pixel.
   * @return {Promise<Array<import("../Feature").FeatureLike>>} Promise that resolves with
   * an array of features.
   */ getFeatures(pixel) {
        return (0, _utilJs.abstract)();
    }
    /**
   * @param {import("../pixel.js").Pixel} pixel Pixel.
   * @return {Uint8ClampedArray|Uint8Array|Float32Array|DataView|null} Pixel data.
   */ getData(pixel) {
        return null;
    }
    /**
   * Determine whether render should be called.
   * @abstract
   * @param {import("../Map.js").FrameState} frameState Frame state.
   * @return {boolean} Layer is ready to be rendered.
   */ prepareFrame(frameState) {
        return (0, _utilJs.abstract)();
    }
    /**
   * Render the layer.
   * @abstract
   * @param {import("../Map.js").FrameState} frameState Frame state.
   * @param {HTMLElement} target Target that may be used to render content to.
   * @return {HTMLElement} The rendered element.
   */ renderFrame(frameState, target) {
        return (0, _utilJs.abstract)();
    }
    /**
   * @param {Object<number, Object<string, import("../Tile.js").default>>} tiles Lookup of loaded tiles by zoom level.
   * @param {number} zoom Zoom level.
   * @param {import("../Tile.js").default} tile Tile.
   * @return {boolean|void} If `false`, the tile will not be considered loaded.
   */ loadedTileCallback(tiles, zoom, tile) {
        if (!tiles[zoom]) tiles[zoom] = {};
        tiles[zoom][tile.tileCoord.toString()] = tile;
        return undefined;
    }
    /**
   * Create a function that adds loaded tiles to the tile lookup.
   * @param {import("../source/Tile.js").default} source Tile source.
   * @param {import("../proj/Projection.js").default} projection Projection of the tiles.
   * @param {Object<number, Object<string, import("../Tile.js").default>>} tiles Lookup of loaded tiles by zoom level.
   * @return {function(number, import("../TileRange.js").default):boolean} A function that can be
   *     called with a zoom level and a tile range to add loaded tiles to the lookup.
   * @protected
   */ createLoadedTileFinder(source, projection, tiles) {
        return(/**
       * @param {number} zoom Zoom level.
       * @param {import("../TileRange.js").default} tileRange Tile range.
       * @return {boolean} The tile range is fully loaded.
       */ (zoom, tileRange)=>{
            const callback = this.loadedTileCallback.bind(this, tiles, zoom);
            return source.forEachLoadedTile(projection, zoom, tileRange, callback);
        });
    }
    /**
   * @abstract
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @param {import("../Map.js").FrameState} frameState Frame state.
   * @param {number} hitTolerance Hit tolerance in pixels.
   * @param {import("./vector.js").FeatureCallback<T>} callback Feature callback.
   * @param {Array<import("./Map.js").HitMatch<T>>} matches The hit detected matches with tolerance.
   * @return {T|undefined} Callback result.
   * @template T
   */ forEachFeatureAtCoordinate(coordinate, frameState, hitTolerance, callback, matches) {
        return undefined;
    }
    /**
   * @return {LayerType} Layer.
   */ getLayer() {
        return this.layer_;
    }
    /**
   * Perform action necessary to get the layer rendered after new fonts have loaded
   * @abstract
   */ handleFontsChanged() {}
    /**
   * Handle changes in image state.
   * @param {import("../events/Event.js").default} event Image change event.
   * @private
   */ handleImageChange_(event) {
        const image = /** @type {import("../Image.js").default} */ event.target;
        if (image.getState() === (0, _imageStateJsDefault.default).LOADED) this.renderIfReadyAndVisible();
    }
    /**
   * Load the image if not already loaded, and register the image change
   * listener if needed.
   * @param {import("../ImageBase.js").default} image Image.
   * @return {boolean} `true` if the image is already loaded, `false` otherwise.
   * @protected
   */ loadImage(image) {
        let imageState = image.getState();
        if (imageState != (0, _imageStateJsDefault.default).LOADED && imageState != (0, _imageStateJsDefault.default).ERROR) image.addEventListener((0, _eventTypeJsDefault.default).CHANGE, this.boundHandleImageChange_);
        if (imageState == (0, _imageStateJsDefault.default).IDLE) {
            image.load();
            imageState = image.getState();
        }
        return imageState == (0, _imageStateJsDefault.default).LOADED;
    }
    /**
   * @protected
   */ renderIfReadyAndVisible() {
        const layer = this.getLayer();
        if (layer && layer.getVisible() && layer.getSourceState() === "ready") layer.changed();
    }
    /**
   * Clean up.
   */ disposeInternal() {
        delete this.layer_;
        super.disposeInternal();
    }
}
exports.default = LayerRenderer;

},{"../events/EventType.js":"hrQJ6","../ImageState.js":"c4jJS","../Observable.js":"cQ2uI","../util.js":"pLBjQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c4jJS":[function(require,module,exports) {
/**
 * @module ol/ImageState
 */ /**
 * @enum {number}
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    IDLE: 0,
    LOADING: 1,
    LOADED: 2,
    ERROR: 3,
    EMPTY: 4
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bGt2E":[function(require,module,exports) {
/**
 * @module ol/ImageTile
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _tileJs = require("./Tile.js");
var _tileJsDefault = parcelHelpers.interopDefault(_tileJs);
var _tileStateJs = require("./TileState.js");
var _tileStateJsDefault = parcelHelpers.interopDefault(_tileStateJs);
var _domJs = require("./dom.js");
var _imageJs = require("./Image.js");
class ImageTile extends (0, _tileJsDefault.default) {
    /**
   * @param {import("./tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @param {import("./TileState.js").default} state State.
   * @param {string} src Image source URI.
   * @param {?string} crossOrigin Cross origin.
   * @param {import("./Tile.js").LoadFunction} tileLoadFunction Tile load function.
   * @param {import("./Tile.js").Options} [options] Tile options.
   */ constructor(tileCoord, state, src, crossOrigin, tileLoadFunction, options){
        super(tileCoord, state, options);
        /**
     * @private
     * @type {?string}
     */ this.crossOrigin_ = crossOrigin;
        /**
     * Image URI
     *
     * @private
     * @type {string}
     */ this.src_ = src;
        this.key = src;
        /**
     * @private
     * @type {HTMLImageElement|HTMLCanvasElement}
     */ this.image_ = new Image();
        if (crossOrigin !== null) this.image_.crossOrigin = crossOrigin;
        /**
     * @private
     * @type {?function():void}
     */ this.unlisten_ = null;
        /**
     * @private
     * @type {import("./Tile.js").LoadFunction}
     */ this.tileLoadFunction_ = tileLoadFunction;
    }
    /**
   * Get the HTML image element for this tile (may be a Canvas, Image, or Video).
   * @return {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} Image.
   * @api
   */ getImage() {
        return this.image_;
    }
    /**
   * Sets an HTML image element for this tile (may be a Canvas or preloaded Image).
   * @param {HTMLCanvasElement|HTMLImageElement} element Element.
   */ setImage(element) {
        this.image_ = element;
        this.state = (0, _tileStateJsDefault.default).LOADED;
        this.unlistenImage_();
        this.changed();
    }
    /**
   * Tracks loading or read errors.
   *
   * @private
   */ handleImageError_() {
        this.state = (0, _tileStateJsDefault.default).ERROR;
        this.unlistenImage_();
        this.image_ = getBlankImage();
        this.changed();
    }
    /**
   * Tracks successful image load.
   *
   * @private
   */ handleImageLoad_() {
        const image = /** @type {HTMLImageElement} */ this.image_;
        if (image.naturalWidth && image.naturalHeight) this.state = (0, _tileStateJsDefault.default).LOADED;
        else this.state = (0, _tileStateJsDefault.default).EMPTY;
        this.unlistenImage_();
        this.changed();
    }
    /**
   * Load the image or retry if loading previously failed.
   * Loading is taken care of by the tile queue, and calling this method is
   * only needed for preloading or for reloading in case of an error.
   *
   * To retry loading tiles on failed requests, use a custom `tileLoadFunction`
   * that checks for error status codes and reloads only when the status code is
   * 408, 429, 500, 502, 503 and 504, and only when not too many retries have been
   * made already:
   *
   * ```js
   * const retryCodes = [408, 429, 500, 502, 503, 504];
   * const retries = {};
   * source.setTileLoadFunction((tile, src) => {
   *   const image = tile.getImage();
   *   fetch(src)
   *     .then((response) => {
   *       if (retryCodes.includes(response.status)) {
   *         retries[src] = (retries[src] || 0) + 1;
   *         if (retries[src] <= 3) {
   *           setTimeout(() => tile.load(), retries[src] * 1000);
   *         }
   *         return Promise.reject();
   *       }
   *       return response.blob();
   *     })
   *     .then((blob) => {
   *       const imageUrl = URL.createObjectURL(blob);
   *       image.src = imageUrl;
   *       setTimeout(() => URL.revokeObjectURL(imageUrl), 5000);
   *     })
   *     .catch(() => tile.setState(3)); // error
   * });
   * ```
   *
   * @api
   */ load() {
        if (this.state == (0, _tileStateJsDefault.default).ERROR) {
            this.state = (0, _tileStateJsDefault.default).IDLE;
            this.image_ = new Image();
            if (this.crossOrigin_ !== null) this.image_.crossOrigin = this.crossOrigin_;
        }
        if (this.state == (0, _tileStateJsDefault.default).IDLE) {
            this.state = (0, _tileStateJsDefault.default).LOADING;
            this.changed();
            this.tileLoadFunction_(this, this.src_);
            this.unlisten_ = (0, _imageJs.listenImage)(this.image_, this.handleImageLoad_.bind(this), this.handleImageError_.bind(this));
        }
    }
    /**
   * Discards event handlers which listen for load completion or errors.
   *
   * @private
   */ unlistenImage_() {
        if (this.unlisten_) {
            this.unlisten_();
            this.unlisten_ = null;
        }
    }
}
/**
 * Get a 1-pixel blank image.
 * @return {HTMLCanvasElement} Blank image.
 */ function getBlankImage() {
    const ctx = (0, _domJs.createCanvasContext2D)(1, 1);
    ctx.fillStyle = "rgba(0,0,0,0)";
    ctx.fillRect(0, 0, 1, 1);
    return ctx.canvas;
}
exports.default = ImageTile;

},{"./Tile.js":"4sqb5","./TileState.js":"2fodI","./dom.js":"84QzQ","./Image.js":"c0Egp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4sqb5":[function(require,module,exports) {
/**
 * @module ol/Tile
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _targetJs = require("./events/Target.js");
var _targetJsDefault = parcelHelpers.interopDefault(_targetJs);
var _eventTypeJs = require("./events/EventType.js");
var _eventTypeJsDefault = parcelHelpers.interopDefault(_eventTypeJs);
var _tileStateJs = require("./TileState.js");
var _tileStateJsDefault = parcelHelpers.interopDefault(_tileStateJs);
var _utilJs = require("./util.js");
var _easingJs = require("./easing.js");
/**
 * A function that takes an {@link module:ol/Tile~Tile} for the tile and a
 * `{string}` for the url as arguments. The default is
 * ```js
 * source.setTileLoadFunction(function(tile, src) {
 *   tile.getImage().src = src;
 * });
 * ```
 * For more fine grained control, the load function can use fetch or XMLHttpRequest and involve
 * error handling:
 *
 * ```js
 * import TileState from 'ol/TileState.js';
 *
 * source.setTileLoadFunction(function(tile, src) {
 *   const xhr = new XMLHttpRequest();
 *   xhr.responseType = 'blob';
 *   xhr.addEventListener('loadend', function (evt) {
 *     const data = this.response;
 *     if (data !== undefined) {
 *       tile.getImage().src = URL.createObjectURL(data);
 *     } else {
 *       tile.setState(TileState.ERROR);
 *     }
 *   });
 *   xhr.addEventListener('error', function () {
 *     tile.setState(TileState.ERROR);
 *   });
 *   xhr.open('GET', src);
 *   xhr.send();
 * });
 * ```
 *
 * @typedef {function(Tile, string): void} LoadFunction
 * @api
 */ /**
 * {@link module:ol/source/Tile~TileSource} sources use a function of this type to get
 * the url that provides a tile for a given tile coordinate.
 *
 * This function takes an {@link module:ol/tilecoord~TileCoord} for the tile
 * coordinate, a `{number}` representing the pixel ratio and a
 * {@link module:ol/proj/Projection~Projection} for the projection  as arguments
 * and returns a `{string}` representing the tile URL, or undefined if no tile
 * should be requested for the passed tile coordinate.
 *
 * @typedef {function(import("./tilecoord.js").TileCoord, number,
 *           import("./proj/Projection.js").default): (string|undefined)} UrlFunction
 * @api
 */ /**
 * @typedef {Object} Options
 * @property {number} [transition=250] A duration for tile opacity
 * transitions in milliseconds. A duration of 0 disables the opacity transition.
 * @property {boolean} [interpolate=false] Use interpolated values when resampling.  By default,
 * the nearest neighbor is used when resampling.
 * @api
 */ /**
 * @classdesc
 * Base class for tiles.
 *
 * @abstract
 */ class Tile extends (0, _targetJsDefault.default) {
    /**
   * @param {import("./tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @param {import("./TileState.js").default} state State.
   * @param {Options} [options] Tile options.
   */ constructor(tileCoord, state, options){
        super();
        options = options ? options : {};
        /**
     * @type {import("./tilecoord.js").TileCoord}
     */ this.tileCoord = tileCoord;
        /**
     * @protected
     * @type {import("./TileState.js").default}
     */ this.state = state;
        /**
     * An "interim" tile for this tile. The interim tile may be used while this
     * one is loading, for "smooth" transitions when changing params/dimensions
     * on the source.
     * @type {Tile}
     */ this.interimTile = null;
        /**
     * A key assigned to the tile. This is used by the tile source to determine
     * if this tile can effectively be used, or if a new tile should be created
     * and this one be used as an interim tile for this new tile.
     * @type {string}
     */ this.key = "";
        /**
     * The duration for the opacity transition.
     * @type {number}
     */ this.transition_ = options.transition === undefined ? 250 : options.transition;
        /**
     * Lookup of start times for rendering transitions.  If the start time is
     * equal to -1, the transition is complete.
     * @type {Object<string, number>}
     */ this.transitionStarts_ = {};
        /**
     * @type {boolean}
     */ this.interpolate = !!options.interpolate;
    }
    /**
   * @protected
   */ changed() {
        this.dispatchEvent((0, _eventTypeJsDefault.default).CHANGE);
    }
    /**
   * Called by the tile cache when the tile is removed from the cache due to expiry
   */ release() {
        if (this.state === (0, _tileStateJsDefault.default).ERROR) // to remove the `change` listener on this tile in `ol/TileQueue#handleTileChange`
        this.setState((0, _tileStateJsDefault.default).EMPTY);
    }
    /**
   * @return {string} Key.
   */ getKey() {
        return this.key + "/" + this.tileCoord;
    }
    /**
   * Get the interim tile most suitable for rendering using the chain of interim
   * tiles. This corresponds to the  most recent tile that has been loaded, if no
   * such tile exists, the original tile is returned.
   * @return {!Tile} Best tile for rendering.
   */ getInterimTile() {
        if (!this.interimTile) //empty chain
        return this;
        let tile = this.interimTile;
        // find the first loaded tile and return it. Since the chain is sorted in
        // decreasing order of creation time, there is no need to search the remainder
        // of the list (all those tiles correspond to older requests and will be
        // cleaned up by refreshInterimChain)
        do {
            if (tile.getState() == (0, _tileStateJsDefault.default).LOADED) {
                // Show tile immediately instead of fading it in after loading, because
                // the interim tile is in place already
                this.transition_ = 0;
                return tile;
            }
            tile = tile.interimTile;
        }while (tile);
        // we can not find a better tile
        return this;
    }
    /**
   * Goes through the chain of interim tiles and discards sections of the chain
   * that are no longer relevant.
   */ refreshInterimChain() {
        if (!this.interimTile) return;
        let tile = this.interimTile;
        /**
     * @type {Tile}
     */ let prev = this;
        do {
            if (tile.getState() == (0, _tileStateJsDefault.default).LOADED) {
                //we have a loaded tile, we can discard the rest of the list
                //we would could abort any LOADING tile request
                //older than this tile (i.e. any LOADING tile following this entry in the chain)
                tile.interimTile = null;
                break;
            } else if (tile.getState() == (0, _tileStateJsDefault.default).LOADING) //keep this LOADING tile any loaded tiles later in the chain are
            //older than this tile, so we're still interested in the request
            prev = tile;
            else if (tile.getState() == (0, _tileStateJsDefault.default).IDLE) //the head of the list is the most current tile, we don't need
            //to start any other requests for this chain
            prev.interimTile = tile.interimTile;
            else prev = tile;
            tile = prev.interimTile;
        }while (tile);
    }
    /**
   * Get the tile coordinate for this tile.
   * @return {import("./tilecoord.js").TileCoord} The tile coordinate.
   * @api
   */ getTileCoord() {
        return this.tileCoord;
    }
    /**
   * @return {import("./TileState.js").default} State.
   */ getState() {
        return this.state;
    }
    /**
   * Sets the state of this tile. If you write your own {@link module:ol/Tile~LoadFunction tileLoadFunction} ,
   * it is important to set the state correctly to {@link module:ol/TileState~ERROR}
   * when the tile cannot be loaded. Otherwise the tile cannot be removed from
   * the tile queue and will block other requests.
   * @param {import("./TileState.js").default} state State.
   * @api
   */ setState(state) {
        if (this.state !== (0, _tileStateJsDefault.default).ERROR && this.state > state) throw new Error("Tile load sequence violation");
        this.state = state;
        this.changed();
    }
    /**
   * Load the image or retry if loading previously failed.
   * Loading is taken care of by the tile queue, and calling this method is
   * only needed for preloading or for reloading in case of an error.
   * @abstract
   * @api
   */ load() {
        (0, _utilJs.abstract)();
    }
    /**
   * Get the alpha value for rendering.
   * @param {string} id An id for the renderer.
   * @param {number} time The render frame time.
   * @return {number} A number between 0 and 1.
   */ getAlpha(id, time) {
        if (!this.transition_) return 1;
        let start = this.transitionStarts_[id];
        if (!start) {
            start = time;
            this.transitionStarts_[id] = start;
        } else if (start === -1) return 1;
        const delta = time - start + 1000 / 60; // avoid rendering at 0
        if (delta >= this.transition_) return 1;
        return (0, _easingJs.easeIn)(delta / this.transition_);
    }
    /**
   * Determine if a tile is in an alpha transition.  A tile is considered in
   * transition if tile.getAlpha() has not yet been called or has been called
   * and returned 1.
   * @param {string} id An id for the renderer.
   * @return {boolean} The tile is in transition.
   */ inTransition(id) {
        if (!this.transition_) return false;
        return this.transitionStarts_[id] !== -1;
    }
    /**
   * Mark a transition as complete.
   * @param {string} id An id for the renderer.
   */ endTransition(id) {
        if (this.transition_) this.transitionStarts_[id] = -1;
    }
}
exports.default = Tile;

},{"./events/Target.js":"7T5Yi","./events/EventType.js":"hrQJ6","./TileState.js":"2fodI","./util.js":"pLBjQ","./easing.js":"fYITA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c0Egp":[function(require,module,exports) {
/**
 * @module ol/Image
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @param {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} image Image element.
 * @param {function():any} loadHandler Load callback function.
 * @param {function():any} errorHandler Error callback function.
 * @return {function():void} Callback to stop listening.
 */ parcelHelpers.export(exports, "listenImage", ()=>listenImage);
var _eventTypeJs = require("./events/EventType.js");
var _eventTypeJsDefault = parcelHelpers.interopDefault(_eventTypeJs);
var _imageBaseJs = require("./ImageBase.js");
var _imageBaseJsDefault = parcelHelpers.interopDefault(_imageBaseJs);
var _imageStateJs = require("./ImageState.js");
var _imageStateJsDefault = parcelHelpers.interopDefault(_imageStateJs);
var _hasJs = require("./has.js");
var _extentJs = require("./extent.js");
var _eventsJs = require("./events.js");
/**
 * A function that takes an {@link module:ol/Image~ImageWrapper} for the image and a
 * `{string}` for the src as arguments. It is supposed to make it so the
 * underlying image {@link module:ol/Image~ImageWrapper#getImage} is assigned the
 * content specified by the src. If not specified, the default is
 *
 *     function(image, src) {
 *       image.getImage().src = src;
 *     }
 *
 * Providing a custom `imageLoadFunction` can be useful to load images with
 * post requests or - in general - through XHR requests, where the src of the
 * image element would be set to a data URI when the content is loaded.
 *
 * @typedef {function(ImageWrapper, string): void} LoadFunction
 * @api
 */ class ImageWrapper extends (0, _imageBaseJsDefault.default) {
    /**
   * @param {import("./extent.js").Extent} extent Extent.
   * @param {number|undefined} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   * @param {string} src Image source URI.
   * @param {?string} crossOrigin Cross origin.
   * @param {LoadFunction} imageLoadFunction Image load function.
   * @param {CanvasRenderingContext2D} [context] Canvas context. When provided, the image will be
   *    drawn into the context's canvas, and `getImage()` will return the canvas once the image
   *    has finished loading.
   */ constructor(extent, resolution, pixelRatio, src, crossOrigin, imageLoadFunction, context){
        super(extent, resolution, pixelRatio, (0, _imageStateJsDefault.default).IDLE);
        /**
     * @private
     * @type {string}
     */ this.src_ = src;
        /**
     * @private
     * @type {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement}
     */ this.image_ = new Image();
        if (crossOrigin !== null) this.image_.crossOrigin = crossOrigin;
        /**
     * @private
     * @type {CanvasRenderingContext2D}
     */ this.context_ = context;
        /**
     * @private
     * @type {?function():void}
     */ this.unlisten_ = null;
        /**
     * @protected
     * @type {import("./ImageState.js").default}
     */ this.state = (0, _imageStateJsDefault.default).IDLE;
        /**
     * @private
     * @type {LoadFunction}
     */ this.imageLoadFunction_ = imageLoadFunction;
    }
    /**
   * @return {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} Image.
   * @api
   */ getImage() {
        if (this.state == (0, _imageStateJsDefault.default).LOADED && this.context_ && !(this.image_ instanceof HTMLCanvasElement)) {
            const canvas = this.context_.canvas;
            canvas.width = this.image_.width;
            canvas.height = this.image_.height;
            this.context_.drawImage(this.image_, 0, 0);
            this.image_ = this.context_.canvas;
        }
        return this.image_;
    }
    /**
   * Tracks loading or read errors.
   *
   * @private
   */ handleImageError_() {
        this.state = (0, _imageStateJsDefault.default).ERROR;
        this.unlistenImage_();
        this.changed();
    }
    /**
   * Tracks successful image load.
   *
   * @private
   */ handleImageLoad_() {
        if (this.resolution === undefined) this.resolution = (0, _extentJs.getHeight)(this.extent) / this.image_.height;
        this.state = (0, _imageStateJsDefault.default).LOADED;
        this.unlistenImage_();
        this.changed();
    }
    /**
   * Load the image or retry if loading previously failed.
   * Loading is taken care of by the tile queue, and calling this method is
   * only needed for preloading or for reloading in case of an error.
   * @api
   */ load() {
        if (this.state == (0, _imageStateJsDefault.default).IDLE || this.state == (0, _imageStateJsDefault.default).ERROR) {
            this.state = (0, _imageStateJsDefault.default).LOADING;
            this.changed();
            this.imageLoadFunction_(this, this.src_);
            this.unlisten_ = listenImage(this.image_, this.handleImageLoad_.bind(this), this.handleImageError_.bind(this));
        }
    }
    /**
   * @param {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} image Image.
   */ setImage(image) {
        this.image_ = image;
        this.resolution = (0, _extentJs.getHeight)(this.extent) / this.image_.height;
    }
    /**
   * Discards event handlers which listen for load completion or errors.
   *
   * @private
   */ unlistenImage_() {
        if (this.unlisten_) {
            this.unlisten_();
            this.unlisten_ = null;
        }
    }
}
function listenImage(image, loadHandler, errorHandler) {
    const img = /** @type {HTMLImageElement} */ image;
    let listening = true;
    let decoding = false;
    let loaded = false;
    const listenerKeys = [
        (0, _eventsJs.listenOnce)(img, (0, _eventTypeJsDefault.default).LOAD, function() {
            loaded = true;
            if (!decoding) loadHandler();
        })
    ];
    if (img.src && (0, _hasJs.IMAGE_DECODE)) {
        decoding = true;
        img.decode().then(function() {
            if (listening) loadHandler();
        }).catch(function(error) {
            if (listening) {
                if (loaded) loadHandler();
                else errorHandler();
            }
        });
    } else listenerKeys.push((0, _eventsJs.listenOnce)(img, (0, _eventTypeJsDefault.default).ERROR, errorHandler));
    return function unlisten() {
        listening = false;
        listenerKeys.forEach((0, _eventsJs.unlistenByKey));
    };
}
exports.default = ImageWrapper;

},{"./events/EventType.js":"hrQJ6","./ImageBase.js":"2yGE2","./ImageState.js":"c4jJS","./has.js":"6BDNi","./extent.js":"6YrVc","./events.js":"dcspA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2yGE2":[function(require,module,exports) {
/**
 * @module ol/ImageBase
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _targetJs = require("./events/Target.js");
var _targetJsDefault = parcelHelpers.interopDefault(_targetJs);
var _eventTypeJs = require("./events/EventType.js");
var _eventTypeJsDefault = parcelHelpers.interopDefault(_eventTypeJs);
var _utilJs = require("./util.js");
/**
 * @abstract
 */ class ImageBase extends (0, _targetJsDefault.default) {
    /**
   * @param {import("./extent.js").Extent} extent Extent.
   * @param {number|undefined} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("./ImageState.js").default} state State.
   */ constructor(extent, resolution, pixelRatio, state){
        super();
        /**
     * @protected
     * @type {import("./extent.js").Extent}
     */ this.extent = extent;
        /**
     * @private
     * @type {number}
     */ this.pixelRatio_ = pixelRatio;
        /**
     * @protected
     * @type {number|undefined}
     */ this.resolution = resolution;
        /**
     * @protected
     * @type {import("./ImageState.js").default}
     */ this.state = state;
    }
    /**
   * @protected
   */ changed() {
        this.dispatchEvent((0, _eventTypeJsDefault.default).CHANGE);
    }
    /**
   * @return {import("./extent.js").Extent} Extent.
   */ getExtent() {
        return this.extent;
    }
    /**
   * @abstract
   * @return {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} Image.
   */ getImage() {
        return (0, _utilJs.abstract)();
    }
    /**
   * @return {number} PixelRatio.
   */ getPixelRatio() {
        return this.pixelRatio_;
    }
    /**
   * @return {number} Resolution.
   */ getResolution() {
        return /** @type {number} */ this.resolution;
    }
    /**
   * @return {import("./ImageState.js").default} State.
   */ getState() {
        return this.state;
    }
    /**
   * Load not yet loaded URI.
   * @abstract
   */ load() {
        (0, _utilJs.abstract)();
    }
}
exports.default = ImageBase;

},{"./events/Target.js":"7T5Yi","./events/EventType.js":"hrQJ6","./util.js":"pLBjQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lR1TX":[function(require,module,exports) {
/**
 * @module ol/reproj/Tile
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _commonJs = require("./common.js");
var _eventTypeJs = require("../events/EventType.js");
var _eventTypeJsDefault = parcelHelpers.interopDefault(_eventTypeJs);
var _tileJs = require("../Tile.js");
var _tileJsDefault = parcelHelpers.interopDefault(_tileJs);
var _tileStateJs = require("../TileState.js");
var _tileStateJsDefault = parcelHelpers.interopDefault(_tileStateJs);
var _triangulationJs = require("./Triangulation.js");
var _triangulationJsDefault = parcelHelpers.interopDefault(_triangulationJs);
var _reprojJs = require("../reproj.js");
var _mathJs = require("../math.js");
var _extentJs = require("../extent.js");
var _eventsJs = require("../events.js");
var _domJs = require("../dom.js");
/**
 * @typedef {function(number, number, number, number) : (import("../ImageTile.js").default)} FunctionType
 */ /**
 * @classdesc
 * Class encapsulating single reprojected tile.
 * See {@link module:ol/source/TileImage~TileImage}.
 *
 */ class ReprojTile extends (0, _tileJsDefault.default) {
    /**
   * @param {import("../proj/Projection.js").default} sourceProj Source projection.
   * @param {import("../tilegrid/TileGrid.js").default} sourceTileGrid Source tile grid.
   * @param {import("../proj/Projection.js").default} targetProj Target projection.
   * @param {import("../tilegrid/TileGrid.js").default} targetTileGrid Target tile grid.
   * @param {import("../tilecoord.js").TileCoord} tileCoord Coordinate of the tile.
   * @param {import("../tilecoord.js").TileCoord} wrappedTileCoord Coordinate of the tile wrapped in X.
   * @param {number} pixelRatio Pixel ratio.
   * @param {number} gutter Gutter of the source tiles.
   * @param {FunctionType} getTileFunction
   *     Function returning source tiles (z, x, y, pixelRatio).
   * @param {number} [errorThreshold] Acceptable reprojection error (in px).
   * @param {boolean} [renderEdges] Render reprojection edges.
   * @param {boolean} [interpolate] Use linear interpolation when resampling.
   */ constructor(sourceProj, sourceTileGrid, targetProj, targetTileGrid, tileCoord, wrappedTileCoord, pixelRatio, gutter, getTileFunction, errorThreshold, renderEdges, interpolate){
        super(tileCoord, (0, _tileStateJsDefault.default).IDLE, {
            interpolate: !!interpolate
        });
        /**
     * @private
     * @type {boolean}
     */ this.renderEdges_ = renderEdges !== undefined ? renderEdges : false;
        /**
     * @private
     * @type {number}
     */ this.pixelRatio_ = pixelRatio;
        /**
     * @private
     * @type {number}
     */ this.gutter_ = gutter;
        /**
     * @private
     * @type {HTMLCanvasElement}
     */ this.canvas_ = null;
        /**
     * @private
     * @type {import("../tilegrid/TileGrid.js").default}
     */ this.sourceTileGrid_ = sourceTileGrid;
        /**
     * @private
     * @type {import("../tilegrid/TileGrid.js").default}
     */ this.targetTileGrid_ = targetTileGrid;
        /**
     * @private
     * @type {import("../tilecoord.js").TileCoord}
     */ this.wrappedTileCoord_ = wrappedTileCoord ? wrappedTileCoord : tileCoord;
        /**
     * @private
     * @type {!Array<import("../ImageTile.js").default>}
     */ this.sourceTiles_ = [];
        /**
     * @private
     * @type {?Array<import("../events.js").EventsKey>}
     */ this.sourcesListenerKeys_ = null;
        /**
     * @private
     * @type {number}
     */ this.sourceZ_ = 0;
        const targetExtent = targetTileGrid.getTileCoordExtent(this.wrappedTileCoord_);
        const maxTargetExtent = this.targetTileGrid_.getExtent();
        let maxSourceExtent = this.sourceTileGrid_.getExtent();
        const limitedTargetExtent = maxTargetExtent ? (0, _extentJs.getIntersection)(targetExtent, maxTargetExtent) : targetExtent;
        if ((0, _extentJs.getArea)(limitedTargetExtent) === 0) {
            // Tile is completely outside range -> EMPTY
            // TODO: is it actually correct that the source even creates the tile ?
            this.state = (0, _tileStateJsDefault.default).EMPTY;
            return;
        }
        const sourceProjExtent = sourceProj.getExtent();
        if (sourceProjExtent) {
            if (!maxSourceExtent) maxSourceExtent = sourceProjExtent;
            else maxSourceExtent = (0, _extentJs.getIntersection)(maxSourceExtent, sourceProjExtent);
        }
        const targetResolution = targetTileGrid.getResolution(this.wrappedTileCoord_[0]);
        const sourceResolution = (0, _reprojJs.calculateSourceExtentResolution)(sourceProj, targetProj, limitedTargetExtent, targetResolution);
        if (!isFinite(sourceResolution) || sourceResolution <= 0) {
            // invalid sourceResolution -> EMPTY
            // probably edges of the projections when no extent is defined
            this.state = (0, _tileStateJsDefault.default).EMPTY;
            return;
        }
        const errorThresholdInPixels = errorThreshold !== undefined ? errorThreshold : (0, _commonJs.ERROR_THRESHOLD);
        /**
     * @private
     * @type {!import("./Triangulation.js").default}
     */ this.triangulation_ = new (0, _triangulationJsDefault.default)(sourceProj, targetProj, limitedTargetExtent, maxSourceExtent, sourceResolution * errorThresholdInPixels, targetResolution);
        if (this.triangulation_.getTriangles().length === 0) {
            // no valid triangles -> EMPTY
            this.state = (0, _tileStateJsDefault.default).EMPTY;
            return;
        }
        this.sourceZ_ = sourceTileGrid.getZForResolution(sourceResolution);
        let sourceExtent = this.triangulation_.calculateSourceExtent();
        if (maxSourceExtent) {
            if (sourceProj.canWrapX()) {
                sourceExtent[1] = (0, _mathJs.clamp)(sourceExtent[1], maxSourceExtent[1], maxSourceExtent[3]);
                sourceExtent[3] = (0, _mathJs.clamp)(sourceExtent[3], maxSourceExtent[1], maxSourceExtent[3]);
            } else sourceExtent = (0, _extentJs.getIntersection)(sourceExtent, maxSourceExtent);
        }
        if (!(0, _extentJs.getArea)(sourceExtent)) this.state = (0, _tileStateJsDefault.default).EMPTY;
        else {
            const sourceRange = sourceTileGrid.getTileRangeForExtentAndZ(sourceExtent, this.sourceZ_);
            for(let srcX = sourceRange.minX; srcX <= sourceRange.maxX; srcX++)for(let srcY = sourceRange.minY; srcY <= sourceRange.maxY; srcY++){
                const tile = getTileFunction(this.sourceZ_, srcX, srcY, pixelRatio);
                if (tile) this.sourceTiles_.push(tile);
            }
            if (this.sourceTiles_.length === 0) this.state = (0, _tileStateJsDefault.default).EMPTY;
        }
    }
    /**
   * Get the HTML Canvas element for this tile.
   * @return {HTMLCanvasElement} Canvas.
   */ getImage() {
        return this.canvas_;
    }
    /**
   * @private
   */ reproject_() {
        const sources = [];
        this.sourceTiles_.forEach((tile)=>{
            if (tile && tile.getState() == (0, _tileStateJsDefault.default).LOADED) sources.push({
                extent: this.sourceTileGrid_.getTileCoordExtent(tile.tileCoord),
                image: tile.getImage()
            });
        });
        this.sourceTiles_.length = 0;
        if (sources.length === 0) this.state = (0, _tileStateJsDefault.default).ERROR;
        else {
            const z = this.wrappedTileCoord_[0];
            const size = this.targetTileGrid_.getTileSize(z);
            const width = typeof size === "number" ? size : size[0];
            const height = typeof size === "number" ? size : size[1];
            const targetResolution = this.targetTileGrid_.getResolution(z);
            const sourceResolution = this.sourceTileGrid_.getResolution(this.sourceZ_);
            const targetExtent = this.targetTileGrid_.getTileCoordExtent(this.wrappedTileCoord_);
            this.canvas_ = (0, _reprojJs.render)(width, height, this.pixelRatio_, sourceResolution, this.sourceTileGrid_.getExtent(), targetResolution, targetExtent, this.triangulation_, sources, this.gutter_, this.renderEdges_, this.interpolate);
            this.state = (0, _tileStateJsDefault.default).LOADED;
        }
        this.changed();
    }
    /**
   * Load not yet loaded URI.
   */ load() {
        if (this.state == (0, _tileStateJsDefault.default).IDLE) {
            this.state = (0, _tileStateJsDefault.default).LOADING;
            this.changed();
            let leftToLoad = 0;
            this.sourcesListenerKeys_ = [];
            this.sourceTiles_.forEach((tile)=>{
                const state = tile.getState();
                if (state == (0, _tileStateJsDefault.default).IDLE || state == (0, _tileStateJsDefault.default).LOADING) {
                    leftToLoad++;
                    const sourceListenKey = (0, _eventsJs.listen)(tile, (0, _eventTypeJsDefault.default).CHANGE, function(e) {
                        const state = tile.getState();
                        if (state == (0, _tileStateJsDefault.default).LOADED || state == (0, _tileStateJsDefault.default).ERROR || state == (0, _tileStateJsDefault.default).EMPTY) {
                            (0, _eventsJs.unlistenByKey)(sourceListenKey);
                            leftToLoad--;
                            if (leftToLoad === 0) {
                                this.unlistenSources_();
                                this.reproject_();
                            }
                        }
                    }, this);
                    this.sourcesListenerKeys_.push(sourceListenKey);
                }
            });
            if (leftToLoad === 0) setTimeout(this.reproject_.bind(this), 0);
            else this.sourceTiles_.forEach(function(tile, i, arr) {
                const state = tile.getState();
                if (state == (0, _tileStateJsDefault.default).IDLE) tile.load();
            });
        }
    }
    /**
   * @private
   */ unlistenSources_() {
        this.sourcesListenerKeys_.forEach((0, _eventsJs.unlistenByKey));
        this.sourcesListenerKeys_ = null;
    }
    /**
   * Remove from the cache due to expiry
   */ release() {
        if (this.canvas_) {
            (0, _domJs.releaseCanvas)(this.canvas_.getContext("2d"));
            (0, _reprojJs.canvasPool).push(this.canvas_);
            this.canvas_ = null;
        }
        super.release();
    }
}
exports.default = ReprojTile;

},{"./common.js":"qh92B","../events/EventType.js":"hrQJ6","../Tile.js":"4sqb5","../TileState.js":"2fodI","./Triangulation.js":"3jZUN","../reproj.js":"jbreX","../math.js":"5jEFr","../extent.js":"6YrVc","../events.js":"dcspA","../dom.js":"84QzQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"qh92B":[function(require,module,exports) {
/**
 * @module ol/reproj/common
 */ /**
 * Default maximum allowed threshold  (in pixels) for reprojection
 * triangulation.
 * @type {number}
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ERROR_THRESHOLD", ()=>ERROR_THRESHOLD);
const ERROR_THRESHOLD = 0.5;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3jZUN":[function(require,module,exports) {
/**
 * @module ol/reproj/Triangulation
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _extentJs = require("../extent.js");
var _projJs = require("../proj.js");
var _mathJs = require("../math.js");
/**
 * Single triangle; consists of 3 source points and 3 target points.
 * @typedef {Object} Triangle
 * @property {Array<import("../coordinate.js").Coordinate>} source Source.
 * @property {Array<import("../coordinate.js").Coordinate>} target Target.
 */ /**
 * Maximum number of subdivision steps during raster reprojection triangulation.
 * Prevents high memory usage and large number of proj4 calls (for certain
 * transformations and areas). At most `2*(2^this)` triangles are created for
 * each triangulated extent (tile/image).
 * @type {number}
 */ const MAX_SUBDIVISION = 10;
/**
 * Maximum allowed size of triangle relative to world width. When transforming
 * corners of world extent between certain projections, the resulting
 * triangulation seems to have zero error and no subdivision is performed. If
 * the triangle width is more than this (relative to world width; 0-1),
 * subdivison is forced (up to `MAX_SUBDIVISION`). Default is `0.25`.
 * @type {number}
 */ const MAX_TRIANGLE_WIDTH = 0.25;
/**
 * @classdesc
 * Class containing triangulation of the given target extent.
 * Used for determining source data and the reprojection itself.
 */ class Triangulation {
    /**
   * @param {import("../proj/Projection.js").default} sourceProj Source projection.
   * @param {import("../proj/Projection.js").default} targetProj Target projection.
   * @param {import("../extent.js").Extent} targetExtent Target extent to triangulate.
   * @param {import("../extent.js").Extent} maxSourceExtent Maximal source extent that can be used.
   * @param {number} errorThreshold Acceptable error (in source units).
   * @param {?number} destinationResolution The (optional) resolution of the destination.
   */ constructor(sourceProj, targetProj, targetExtent, maxSourceExtent, errorThreshold, destinationResolution){
        /**
     * @type {import("../proj/Projection.js").default}
     * @private
     */ this.sourceProj_ = sourceProj;
        /**
     * @type {import("../proj/Projection.js").default}
     * @private
     */ this.targetProj_ = targetProj;
        /** @type {!Object<string, import("../coordinate.js").Coordinate>} */ let transformInvCache = {};
        const transformInv = (0, _projJs.getTransform)(this.targetProj_, this.sourceProj_);
        /**
     * @param {import("../coordinate.js").Coordinate} c A coordinate.
     * @return {import("../coordinate.js").Coordinate} Transformed coordinate.
     * @private
     */ this.transformInv_ = function(c) {
            const key = c[0] + "/" + c[1];
            if (!transformInvCache[key]) transformInvCache[key] = transformInv(c);
            return transformInvCache[key];
        };
        /**
     * @type {import("../extent.js").Extent}
     * @private
     */ this.maxSourceExtent_ = maxSourceExtent;
        /**
     * @type {number}
     * @private
     */ this.errorThresholdSquared_ = errorThreshold * errorThreshold;
        /**
     * @type {Array<Triangle>}
     * @private
     */ this.triangles_ = [];
        /**
     * Indicates that the triangulation crosses edge of the source projection.
     * @type {boolean}
     * @private
     */ this.wrapsXInSource_ = false;
        /**
     * @type {boolean}
     * @private
     */ this.canWrapXInSource_ = this.sourceProj_.canWrapX() && !!maxSourceExtent && !!this.sourceProj_.getExtent() && (0, _extentJs.getWidth)(maxSourceExtent) == (0, _extentJs.getWidth)(this.sourceProj_.getExtent());
        /**
     * @type {?number}
     * @private
     */ this.sourceWorldWidth_ = this.sourceProj_.getExtent() ? (0, _extentJs.getWidth)(this.sourceProj_.getExtent()) : null;
        /**
     * @type {?number}
     * @private
     */ this.targetWorldWidth_ = this.targetProj_.getExtent() ? (0, _extentJs.getWidth)(this.targetProj_.getExtent()) : null;
        const destinationTopLeft = (0, _extentJs.getTopLeft)(targetExtent);
        const destinationTopRight = (0, _extentJs.getTopRight)(targetExtent);
        const destinationBottomRight = (0, _extentJs.getBottomRight)(targetExtent);
        const destinationBottomLeft = (0, _extentJs.getBottomLeft)(targetExtent);
        const sourceTopLeft = this.transformInv_(destinationTopLeft);
        const sourceTopRight = this.transformInv_(destinationTopRight);
        const sourceBottomRight = this.transformInv_(destinationBottomRight);
        const sourceBottomLeft = this.transformInv_(destinationBottomLeft);
        /*
     * The maxSubdivision controls how many splittings of the target area can
     * be done. The idea here is to do a linear mapping of the target areas
     * but the actual overal reprojection (can be) extremely non-linear. The
     * default value of MAX_SUBDIVISION was chosen based on mapping a 256x256
     * tile size. However this function is also called to remap canvas rendered
     * layers which can be much larger. This calculation increases the maxSubdivision
     * value by the right factor so that each 256x256 pixel area has
     * MAX_SUBDIVISION divisions.
     */ const maxSubdivision = MAX_SUBDIVISION + (destinationResolution ? Math.max(0, Math.ceil(Math.log2((0, _extentJs.getArea)(targetExtent) / (destinationResolution * destinationResolution * 65536)))) : 0);
        this.addQuad_(destinationTopLeft, destinationTopRight, destinationBottomRight, destinationBottomLeft, sourceTopLeft, sourceTopRight, sourceBottomRight, sourceBottomLeft, maxSubdivision);
        if (this.wrapsXInSource_) {
            let leftBound = Infinity;
            this.triangles_.forEach(function(triangle, i, arr) {
                leftBound = Math.min(leftBound, triangle.source[0][0], triangle.source[1][0], triangle.source[2][0]);
            });
            // Shift triangles to be as close to `leftBound` as possible
            // (if the distance is more than `worldWidth / 2` it can be closer.
            this.triangles_.forEach((triangle)=>{
                if (Math.max(triangle.source[0][0], triangle.source[1][0], triangle.source[2][0]) - leftBound > this.sourceWorldWidth_ / 2) {
                    const newTriangle = [
                        [
                            triangle.source[0][0],
                            triangle.source[0][1]
                        ],
                        [
                            triangle.source[1][0],
                            triangle.source[1][1]
                        ],
                        [
                            triangle.source[2][0],
                            triangle.source[2][1]
                        ]
                    ];
                    if (newTriangle[0][0] - leftBound > this.sourceWorldWidth_ / 2) newTriangle[0][0] -= this.sourceWorldWidth_;
                    if (newTriangle[1][0] - leftBound > this.sourceWorldWidth_ / 2) newTriangle[1][0] -= this.sourceWorldWidth_;
                    if (newTriangle[2][0] - leftBound > this.sourceWorldWidth_ / 2) newTriangle[2][0] -= this.sourceWorldWidth_;
                    // Rarely (if the extent contains both the dateline and prime meridian)
                    // the shift can in turn break some triangles.
                    // Detect this here and don't shift in such cases.
                    const minX = Math.min(newTriangle[0][0], newTriangle[1][0], newTriangle[2][0]);
                    const maxX = Math.max(newTriangle[0][0], newTriangle[1][0], newTriangle[2][0]);
                    if (maxX - minX < this.sourceWorldWidth_ / 2) triangle.source = newTriangle;
                }
            });
        }
        transformInvCache = {};
    }
    /**
   * Adds triangle to the triangulation.
   * @param {import("../coordinate.js").Coordinate} a The target a coordinate.
   * @param {import("../coordinate.js").Coordinate} b The target b coordinate.
   * @param {import("../coordinate.js").Coordinate} c The target c coordinate.
   * @param {import("../coordinate.js").Coordinate} aSrc The source a coordinate.
   * @param {import("../coordinate.js").Coordinate} bSrc The source b coordinate.
   * @param {import("../coordinate.js").Coordinate} cSrc The source c coordinate.
   * @private
   */ addTriangle_(a, b, c, aSrc, bSrc, cSrc) {
        this.triangles_.push({
            source: [
                aSrc,
                bSrc,
                cSrc
            ],
            target: [
                a,
                b,
                c
            ]
        });
    }
    /**
   * Adds quad (points in clock-wise order) to the triangulation
   * (and reprojects the vertices) if valid.
   * Performs quad subdivision if needed to increase precision.
   *
   * @param {import("../coordinate.js").Coordinate} a The target a coordinate.
   * @param {import("../coordinate.js").Coordinate} b The target b coordinate.
   * @param {import("../coordinate.js").Coordinate} c The target c coordinate.
   * @param {import("../coordinate.js").Coordinate} d The target d coordinate.
   * @param {import("../coordinate.js").Coordinate} aSrc The source a coordinate.
   * @param {import("../coordinate.js").Coordinate} bSrc The source b coordinate.
   * @param {import("../coordinate.js").Coordinate} cSrc The source c coordinate.
   * @param {import("../coordinate.js").Coordinate} dSrc The source d coordinate.
   * @param {number} maxSubdivision Maximal allowed subdivision of the quad.
   * @private
   */ addQuad_(a, b, c, d, aSrc, bSrc, cSrc, dSrc, maxSubdivision) {
        const sourceQuadExtent = (0, _extentJs.boundingExtent)([
            aSrc,
            bSrc,
            cSrc,
            dSrc
        ]);
        const sourceCoverageX = this.sourceWorldWidth_ ? (0, _extentJs.getWidth)(sourceQuadExtent) / this.sourceWorldWidth_ : null;
        const sourceWorldWidth = /** @type {number} */ this.sourceWorldWidth_;
        // when the quad is wrapped in the source projection
        // it covers most of the projection extent, but not fully
        const wrapsX = this.sourceProj_.canWrapX() && sourceCoverageX > 0.5 && sourceCoverageX < 1;
        let needsSubdivision = false;
        if (maxSubdivision > 0) {
            if (this.targetProj_.isGlobal() && this.targetWorldWidth_) {
                const targetQuadExtent = (0, _extentJs.boundingExtent)([
                    a,
                    b,
                    c,
                    d
                ]);
                const targetCoverageX = (0, _extentJs.getWidth)(targetQuadExtent) / this.targetWorldWidth_;
                needsSubdivision = targetCoverageX > MAX_TRIANGLE_WIDTH || needsSubdivision;
            }
            if (!wrapsX && this.sourceProj_.isGlobal() && sourceCoverageX) needsSubdivision = sourceCoverageX > MAX_TRIANGLE_WIDTH || needsSubdivision;
        }
        if (!needsSubdivision && this.maxSourceExtent_) {
            if (isFinite(sourceQuadExtent[0]) && isFinite(sourceQuadExtent[1]) && isFinite(sourceQuadExtent[2]) && isFinite(sourceQuadExtent[3])) {
                if (!(0, _extentJs.intersects)(sourceQuadExtent, this.maxSourceExtent_)) // whole quad outside source projection extent -> ignore
                return;
            }
        }
        let isNotFinite = 0;
        if (!needsSubdivision) {
            if (!isFinite(aSrc[0]) || !isFinite(aSrc[1]) || !isFinite(bSrc[0]) || !isFinite(bSrc[1]) || !isFinite(cSrc[0]) || !isFinite(cSrc[1]) || !isFinite(dSrc[0]) || !isFinite(dSrc[1])) {
                if (maxSubdivision > 0) needsSubdivision = true;
                else {
                    // It might be the case that only 1 of the points is infinite. In this case
                    // we can draw a single triangle with the other three points
                    isNotFinite = (!isFinite(aSrc[0]) || !isFinite(aSrc[1]) ? 8 : 0) + (!isFinite(bSrc[0]) || !isFinite(bSrc[1]) ? 4 : 0) + (!isFinite(cSrc[0]) || !isFinite(cSrc[1]) ? 2 : 0) + (!isFinite(dSrc[0]) || !isFinite(dSrc[1]) ? 1 : 0);
                    if (isNotFinite != 1 && isNotFinite != 2 && isNotFinite != 4 && isNotFinite != 8) return;
                }
            }
        }
        if (maxSubdivision > 0) {
            if (!needsSubdivision) {
                const center = [
                    (a[0] + c[0]) / 2,
                    (a[1] + c[1]) / 2
                ];
                const centerSrc = this.transformInv_(center);
                let dx;
                if (wrapsX) {
                    const centerSrcEstimX = ((0, _mathJs.modulo)(aSrc[0], sourceWorldWidth) + (0, _mathJs.modulo)(cSrc[0], sourceWorldWidth)) / 2;
                    dx = centerSrcEstimX - (0, _mathJs.modulo)(centerSrc[0], sourceWorldWidth);
                } else dx = (aSrc[0] + cSrc[0]) / 2 - centerSrc[0];
                const dy = (aSrc[1] + cSrc[1]) / 2 - centerSrc[1];
                const centerSrcErrorSquared = dx * dx + dy * dy;
                needsSubdivision = centerSrcErrorSquared > this.errorThresholdSquared_;
            }
            if (needsSubdivision) {
                if (Math.abs(a[0] - c[0]) <= Math.abs(a[1] - c[1])) {
                    // split horizontally (top & bottom)
                    const bc = [
                        (b[0] + c[0]) / 2,
                        (b[1] + c[1]) / 2
                    ];
                    const bcSrc = this.transformInv_(bc);
                    const da = [
                        (d[0] + a[0]) / 2,
                        (d[1] + a[1]) / 2
                    ];
                    const daSrc = this.transformInv_(da);
                    this.addQuad_(a, b, bc, da, aSrc, bSrc, bcSrc, daSrc, maxSubdivision - 1);
                    this.addQuad_(da, bc, c, d, daSrc, bcSrc, cSrc, dSrc, maxSubdivision - 1);
                } else {
                    // split vertically (left & right)
                    const ab = [
                        (a[0] + b[0]) / 2,
                        (a[1] + b[1]) / 2
                    ];
                    const abSrc = this.transformInv_(ab);
                    const cd = [
                        (c[0] + d[0]) / 2,
                        (c[1] + d[1]) / 2
                    ];
                    const cdSrc = this.transformInv_(cd);
                    this.addQuad_(a, ab, cd, d, aSrc, abSrc, cdSrc, dSrc, maxSubdivision - 1);
                    this.addQuad_(ab, b, c, cd, abSrc, bSrc, cSrc, cdSrc, maxSubdivision - 1);
                }
                return;
            }
        }
        if (wrapsX) {
            if (!this.canWrapXInSource_) return;
            this.wrapsXInSource_ = true;
        }
        // Exactly zero or one of *Src is not finite
        // The triangles must have the diagonal line as the first side
        // This is to allow easy code in reproj.s to make it straight for broken
        // browsers that can't handle diagonal clipping
        if ((isNotFinite & 0xb) == 0) this.addTriangle_(a, c, d, aSrc, cSrc, dSrc);
        if ((isNotFinite & 0xe) == 0) this.addTriangle_(a, c, b, aSrc, cSrc, bSrc);
        if (isNotFinite) {
            // Try the other two triangles
            if ((isNotFinite & 0xd) == 0) this.addTriangle_(b, d, a, bSrc, dSrc, aSrc);
            if ((isNotFinite & 0x7) == 0) this.addTriangle_(b, d, c, bSrc, dSrc, cSrc);
        }
    }
    /**
   * Calculates extent of the `source` coordinates from all the triangles.
   *
   * @return {import("../extent.js").Extent} Calculated extent.
   */ calculateSourceExtent() {
        const extent = (0, _extentJs.createEmpty)();
        this.triangles_.forEach(function(triangle, i, arr) {
            const src = triangle.source;
            (0, _extentJs.extendCoordinate)(extent, src[0]);
            (0, _extentJs.extendCoordinate)(extent, src[1]);
            (0, _extentJs.extendCoordinate)(extent, src[2]);
        });
        return extent;
    }
    /**
   * @return {Array<Triangle>} Array of the calculated triangles.
   */ getTriangles() {
        return this.triangles_;
    }
}
exports.default = Triangulation;

},{"../extent.js":"6YrVc","../proj.js":"SznqC","../math.js":"5jEFr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jbreX":[function(require,module,exports) {
/**
 * @module ol/reproj
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "canvasPool", ()=>canvasPool);
/**
 * Calculates ideal resolution to use from the source in order to achieve
 * pixel mapping as close as possible to 1:1 during reprojection.
 * The resolution is calculated regardless of what resolutions
 * are actually available in the dataset (TileGrid, Image, ...).
 *
 * @param {import("./proj/Projection.js").default} sourceProj Source projection.
 * @param {import("./proj/Projection.js").default} targetProj Target projection.
 * @param {import("./coordinate.js").Coordinate} targetCenter Target center.
 * @param {number} targetResolution Target resolution.
 * @return {number} The best resolution to use. Can be +-Infinity, NaN or 0.
 */ parcelHelpers.export(exports, "calculateSourceResolution", ()=>calculateSourceResolution);
/**
 * Calculates ideal resolution to use from the source in order to achieve
 * pixel mapping as close as possible to 1:1 during reprojection.
 * The resolution is calculated regardless of what resolutions
 * are actually available in the dataset (TileGrid, Image, ...).
 *
 * @param {import("./proj/Projection.js").default} sourceProj Source projection.
 * @param {import("./proj/Projection.js").default} targetProj Target projection.
 * @param {import("./extent.js").Extent} targetExtent Target extent
 * @param {number} targetResolution Target resolution.
 * @return {number} The best resolution to use. Can be +-Infinity, NaN or 0.
 */ parcelHelpers.export(exports, "calculateSourceExtentResolution", ()=>calculateSourceExtentResolution);
/**
 * @typedef {Object} ImageExtent
 * @property {import("./extent.js").Extent} extent Extent.
 * @property {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} image Image.
 */ /**
 * Renders the source data into new canvas based on the triangulation.
 *
 * @param {number} width Width of the canvas.
 * @param {number} height Height of the canvas.
 * @param {number} pixelRatio Pixel ratio.
 * @param {number} sourceResolution Source resolution.
 * @param {import("./extent.js").Extent} sourceExtent Extent of the data source.
 * @param {number} targetResolution Target resolution.
 * @param {import("./extent.js").Extent} targetExtent Target extent.
 * @param {import("./reproj/Triangulation.js").default} triangulation Calculated triangulation.
 * @param {Array<ImageExtent>} sources Array of sources.
 * @param {number} gutter Gutter of the sources.
 * @param {boolean} [renderEdges] Render reprojection edges.
 * @param {boolean} [interpolate] Use linear interpolation when resampling.
 * @return {HTMLCanvasElement} Canvas with reprojected data.
 */ parcelHelpers.export(exports, "render", ()=>render);
var _extentJs = require("./extent.js");
var _domJs = require("./dom.js");
var _projJs = require("./proj.js");
var _mathJs = require("./math.js");
let brokenDiagonalRendering_;
const canvasPool = [];
/**
 * This draws a small triangle into a canvas by setting the triangle as the clip region
 * and then drawing a (too large) rectangle
 *
 * @param {CanvasRenderingContext2D} ctx The context in which to draw the triangle
 * @param {number} u1 The x-coordinate of the second point. The first point is 0,0.
 * @param {number} v1 The y-coordinate of the second point.
 * @param {number} u2 The x-coordinate of the third point.
 * @param {number} v2 The y-coordinate of the third point.
 */ function drawTestTriangle(ctx, u1, v1, u2, v2) {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(u1, v1);
    ctx.lineTo(u2, v2);
    ctx.closePath();
    ctx.save();
    ctx.clip();
    ctx.fillRect(0, 0, Math.max(u1, u2) + 1, Math.max(v1, v2));
    ctx.restore();
}
/**
 * Given the data from getImageData, see if the right values appear at the provided offset.
 * Returns true if either the color or transparency is off
 *
 * @param {Uint8ClampedArray} data The data returned from getImageData
 * @param {number} offset The pixel offset from the start of data.
 * @return {boolean} true if the diagonal rendering is broken
 */ function verifyBrokenDiagonalRendering(data, offset) {
    // the values ought to be close to the rgba(210, 0, 0, 0.75)
    return Math.abs(data[offset * 4] - 210) > 2 || Math.abs(data[offset * 4 + 3] - 191.25) > 2;
}
/**
 * Determines if the current browser configuration can render triangular clip regions correctly.
 * This value is cached so the function is only expensive the first time called.
 * Firefox on Windows (as of now) does not if HWA is enabled. See https://bugzilla.mozilla.org/show_bug.cgi?id=1606976
 * Chrome works, and everything seems to work on OSX and Android. This function caches the
 * result. I suppose that it is conceivably possible that a browser might flip modes while the app is
 * running, but lets hope not.
 *
 * @return {boolean} true if the Diagonal Rendering is broken.
 */ function isBrokenDiagonalRendering() {
    if (brokenDiagonalRendering_ === undefined) {
        const ctx = (0, _domJs.createCanvasContext2D)(6, 6, canvasPool);
        ctx.globalCompositeOperation = "lighter";
        ctx.fillStyle = "rgba(210, 0, 0, 0.75)";
        drawTestTriangle(ctx, 4, 5, 4, 0);
        drawTestTriangle(ctx, 4, 5, 0, 5);
        const data = ctx.getImageData(0, 0, 3, 3).data;
        brokenDiagonalRendering_ = verifyBrokenDiagonalRendering(data, 0) || verifyBrokenDiagonalRendering(data, 4) || verifyBrokenDiagonalRendering(data, 8);
        (0, _domJs.releaseCanvas)(ctx);
        canvasPool.push(ctx.canvas);
    }
    return brokenDiagonalRendering_;
}
function calculateSourceResolution(sourceProj, targetProj, targetCenter, targetResolution) {
    const sourceCenter = (0, _projJs.transform)(targetCenter, targetProj, sourceProj);
    // calculate the ideal resolution of the source data
    let sourceResolution = (0, _projJs.getPointResolution)(targetProj, targetResolution, targetCenter);
    const targetMetersPerUnit = targetProj.getMetersPerUnit();
    if (targetMetersPerUnit !== undefined) sourceResolution *= targetMetersPerUnit;
    const sourceMetersPerUnit = sourceProj.getMetersPerUnit();
    if (sourceMetersPerUnit !== undefined) sourceResolution /= sourceMetersPerUnit;
    // Based on the projection properties, the point resolution at the specified
    // coordinates may be slightly different. We need to reverse-compensate this
    // in order to achieve optimal results.
    const sourceExtent = sourceProj.getExtent();
    if (!sourceExtent || (0, _extentJs.containsCoordinate)(sourceExtent, sourceCenter)) {
        const compensationFactor = (0, _projJs.getPointResolution)(sourceProj, sourceResolution, sourceCenter) / sourceResolution;
        if (isFinite(compensationFactor) && compensationFactor > 0) sourceResolution /= compensationFactor;
    }
    return sourceResolution;
}
function calculateSourceExtentResolution(sourceProj, targetProj, targetExtent, targetResolution) {
    const targetCenter = (0, _extentJs.getCenter)(targetExtent);
    let sourceResolution = calculateSourceResolution(sourceProj, targetProj, targetCenter, targetResolution);
    if (!isFinite(sourceResolution) || sourceResolution <= 0) (0, _extentJs.forEachCorner)(targetExtent, function(corner) {
        sourceResolution = calculateSourceResolution(sourceProj, targetProj, corner, targetResolution);
        return isFinite(sourceResolution) && sourceResolution > 0;
    });
    return sourceResolution;
}
function render(width, height, pixelRatio, sourceResolution, sourceExtent, targetResolution, targetExtent, triangulation, sources, gutter, renderEdges, interpolate) {
    const context = (0, _domJs.createCanvasContext2D)(Math.round(pixelRatio * width), Math.round(pixelRatio * height), canvasPool);
    if (!interpolate) context.imageSmoothingEnabled = false;
    if (sources.length === 0) return context.canvas;
    context.scale(pixelRatio, pixelRatio);
    function pixelRound(value) {
        return Math.round(value * pixelRatio) / pixelRatio;
    }
    context.globalCompositeOperation = "lighter";
    const sourceDataExtent = (0, _extentJs.createEmpty)();
    sources.forEach(function(src, i, arr) {
        (0, _extentJs.extend)(sourceDataExtent, src.extent);
    });
    const canvasWidthInUnits = (0, _extentJs.getWidth)(sourceDataExtent);
    const canvasHeightInUnits = (0, _extentJs.getHeight)(sourceDataExtent);
    const stitchContext = (0, _domJs.createCanvasContext2D)(Math.round(pixelRatio * canvasWidthInUnits / sourceResolution), Math.round(pixelRatio * canvasHeightInUnits / sourceResolution), canvasPool);
    if (!interpolate) stitchContext.imageSmoothingEnabled = false;
    const stitchScale = pixelRatio / sourceResolution;
    sources.forEach(function(src, i, arr) {
        const xPos = src.extent[0] - sourceDataExtent[0];
        const yPos = -(src.extent[3] - sourceDataExtent[3]);
        const srcWidth = (0, _extentJs.getWidth)(src.extent);
        const srcHeight = (0, _extentJs.getHeight)(src.extent);
        // This test should never fail -- but it does. Need to find a fix the upstream condition
        if (src.image.width > 0 && src.image.height > 0) stitchContext.drawImage(src.image, gutter, gutter, src.image.width - 2 * gutter, src.image.height - 2 * gutter, xPos * stitchScale, yPos * stitchScale, srcWidth * stitchScale, srcHeight * stitchScale);
    });
    const targetTopLeft = (0, _extentJs.getTopLeft)(targetExtent);
    triangulation.getTriangles().forEach(function(triangle, i, arr) {
        /* Calculate affine transform (src -> dst)
     * Resulting matrix can be used to transform coordinate
     * from `sourceProjection` to destination pixels.
     *
     * To optimize number of context calls and increase numerical stability,
     * we also do the following operations:
     * trans(-topLeftExtentCorner), scale(1 / targetResolution), scale(1, -1)
     * here before solving the linear system so [ui, vi] are pixel coordinates.
     *
     * Src points: xi, yi
     * Dst points: ui, vi
     * Affine coefficients: aij
     *
     * | x0 y0 1  0  0 0 |   |a00|   |u0|
     * | x1 y1 1  0  0 0 |   |a01|   |u1|
     * | x2 y2 1  0  0 0 | x |a02| = |u2|
     * |  0  0 0 x0 y0 1 |   |a10|   |v0|
     * |  0  0 0 x1 y1 1 |   |a11|   |v1|
     * |  0  0 0 x2 y2 1 |   |a12|   |v2|
     */ const source = triangle.source;
        const target = triangle.target;
        let x0 = source[0][0], y0 = source[0][1];
        let x1 = source[1][0], y1 = source[1][1];
        let x2 = source[2][0], y2 = source[2][1];
        // Make sure that everything is on pixel boundaries
        const u0 = pixelRound((target[0][0] - targetTopLeft[0]) / targetResolution);
        const v0 = pixelRound(-(target[0][1] - targetTopLeft[1]) / targetResolution);
        const u1 = pixelRound((target[1][0] - targetTopLeft[0]) / targetResolution);
        const v1 = pixelRound(-(target[1][1] - targetTopLeft[1]) / targetResolution);
        const u2 = pixelRound((target[2][0] - targetTopLeft[0]) / targetResolution);
        const v2 = pixelRound(-(target[2][1] - targetTopLeft[1]) / targetResolution);
        // Shift all the source points to improve numerical stability
        // of all the subsequent calculations. The [x0, y0] is used here.
        // This is also used to simplify the linear system.
        const sourceNumericalShiftX = x0;
        const sourceNumericalShiftY = y0;
        x0 = 0;
        y0 = 0;
        x1 -= sourceNumericalShiftX;
        y1 -= sourceNumericalShiftY;
        x2 -= sourceNumericalShiftX;
        y2 -= sourceNumericalShiftY;
        const augmentedMatrix = [
            [
                x1,
                y1,
                0,
                0,
                u1 - u0
            ],
            [
                x2,
                y2,
                0,
                0,
                u2 - u0
            ],
            [
                0,
                0,
                x1,
                y1,
                v1 - v0
            ],
            [
                0,
                0,
                x2,
                y2,
                v2 - v0
            ]
        ];
        const affineCoefs = (0, _mathJs.solveLinearSystem)(augmentedMatrix);
        if (!affineCoefs) return;
        context.save();
        context.beginPath();
        if (isBrokenDiagonalRendering() || !interpolate) {
            // Make sure that all lines are horizontal or vertical
            context.moveTo(u1, v1);
            // This is the diagonal line. Do it in 4 steps
            const steps = 4;
            const ud = u0 - u1;
            const vd = v0 - v1;
            for(let step = 0; step < steps; step++){
                // Go horizontally
                context.lineTo(u1 + pixelRound((step + 1) * ud / steps), v1 + pixelRound(step * vd / (steps - 1)));
                // Go vertically
                if (step != steps - 1) context.lineTo(u1 + pixelRound((step + 1) * ud / steps), v1 + pixelRound((step + 1) * vd / (steps - 1)));
            }
            // We are almost at u0r, v0r
            context.lineTo(u2, v2);
        } else {
            context.moveTo(u1, v1);
            context.lineTo(u0, v0);
            context.lineTo(u2, v2);
        }
        context.clip();
        context.transform(affineCoefs[0], affineCoefs[2], affineCoefs[1], affineCoefs[3], u0, v0);
        context.translate(sourceDataExtent[0] - sourceNumericalShiftX, sourceDataExtent[3] - sourceNumericalShiftY);
        context.scale(sourceResolution / pixelRatio, -sourceResolution / pixelRatio);
        context.drawImage(stitchContext.canvas, 0, 0);
        context.restore();
    });
    (0, _domJs.releaseCanvas)(stitchContext);
    canvasPool.push(stitchContext.canvas);
    if (renderEdges) {
        context.save();
        context.globalCompositeOperation = "source-over";
        context.strokeStyle = "black";
        context.lineWidth = 1;
        triangulation.getTriangles().forEach(function(triangle, i, arr) {
            const target = triangle.target;
            const u0 = (target[0][0] - targetTopLeft[0]) / targetResolution;
            const v0 = -(target[0][1] - targetTopLeft[1]) / targetResolution;
            const u1 = (target[1][0] - targetTopLeft[0]) / targetResolution;
            const v1 = -(target[1][1] - targetTopLeft[1]) / targetResolution;
            const u2 = (target[2][0] - targetTopLeft[0]) / targetResolution;
            const v2 = -(target[2][1] - targetTopLeft[1]) / targetResolution;
            context.beginPath();
            context.moveTo(u1, v1);
            context.lineTo(u0, v0);
            context.lineTo(u2, v2);
            context.closePath();
            context.stroke();
        });
        context.restore();
    }
    return context.canvas;
}

},{"./extent.js":"6YrVc","./dom.js":"84QzQ","./proj.js":"SznqC","./math.js":"5jEFr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3pvAn":[function(require,module,exports) {
/**
 * @module ol/TileRange
 */ /**
 * A representation of a contiguous block of tiles.  A tile range is specified
 * by its min/max tile coordinates and is inclusive of coordinates.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @param {number} minX Minimum X.
 * @param {number} maxX Maximum X.
 * @param {number} minY Minimum Y.
 * @param {number} maxY Maximum Y.
 * @param {TileRange} [tileRange] TileRange.
 * @return {TileRange} Tile range.
 */ parcelHelpers.export(exports, "createOrUpdate", ()=>createOrUpdate);
class TileRange {
    /**
   * @param {number} minX Minimum X.
   * @param {number} maxX Maximum X.
   * @param {number} minY Minimum Y.
   * @param {number} maxY Maximum Y.
   */ constructor(minX, maxX, minY, maxY){
        /**
     * @type {number}
     */ this.minX = minX;
        /**
     * @type {number}
     */ this.maxX = maxX;
        /**
     * @type {number}
     */ this.minY = minY;
        /**
     * @type {number}
     */ this.maxY = maxY;
    }
    /**
   * @param {import("./tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @return {boolean} Contains tile coordinate.
   */ contains(tileCoord) {
        return this.containsXY(tileCoord[1], tileCoord[2]);
    }
    /**
   * @param {TileRange} tileRange Tile range.
   * @return {boolean} Contains.
   */ containsTileRange(tileRange) {
        return this.minX <= tileRange.minX && tileRange.maxX <= this.maxX && this.minY <= tileRange.minY && tileRange.maxY <= this.maxY;
    }
    /**
   * @param {number} x Tile coordinate x.
   * @param {number} y Tile coordinate y.
   * @return {boolean} Contains coordinate.
   */ containsXY(x, y) {
        return this.minX <= x && x <= this.maxX && this.minY <= y && y <= this.maxY;
    }
    /**
   * @param {TileRange} tileRange Tile range.
   * @return {boolean} Equals.
   */ equals(tileRange) {
        return this.minX == tileRange.minX && this.minY == tileRange.minY && this.maxX == tileRange.maxX && this.maxY == tileRange.maxY;
    }
    /**
   * @param {TileRange} tileRange Tile range.
   */ extend(tileRange) {
        if (tileRange.minX < this.minX) this.minX = tileRange.minX;
        if (tileRange.maxX > this.maxX) this.maxX = tileRange.maxX;
        if (tileRange.minY < this.minY) this.minY = tileRange.minY;
        if (tileRange.maxY > this.maxY) this.maxY = tileRange.maxY;
    }
    /**
   * @return {number} Height.
   */ getHeight() {
        return this.maxY - this.minY + 1;
    }
    /**
   * @return {import("./size.js").Size} Size.
   */ getSize() {
        return [
            this.getWidth(),
            this.getHeight()
        ];
    }
    /**
   * @return {number} Width.
   */ getWidth() {
        return this.maxX - this.minX + 1;
    }
    /**
   * @param {TileRange} tileRange Tile range.
   * @return {boolean} Intersects.
   */ intersects(tileRange) {
        return this.minX <= tileRange.maxX && this.maxX >= tileRange.minX && this.minY <= tileRange.maxY && this.maxY >= tileRange.minY;
    }
}
function createOrUpdate(minX, maxX, minY, maxY, tileRange) {
    if (tileRange !== undefined) {
        tileRange.minX = minX;
        tileRange.maxX = maxX;
        tileRange.minY = minY;
        tileRange.maxY = maxY;
        return tileRange;
    }
    return new TileRange(minX, maxX, minY, maxY);
}
exports.default = TileRange;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dmxOv":[function(require,module,exports) {
/**
 * @module ol/source/OSM
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ATTRIBUTION", ()=>ATTRIBUTION);
var _xyzJs = require("./XYZ.js");
var _xyzJsDefault = parcelHelpers.interopDefault(_xyzJs);
const ATTRIBUTION = '&#169; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors.';
/**
 * @typedef {Object} Options
 * @property {import("./Source.js").AttributionLike} [attributions] Attributions.
 * @property {number} [cacheSize] Initial tile cache size. Will auto-grow to hold at least the number of tiles in the viewport.
 * @property {null|string} [crossOrigin='anonymous'] The `crossOrigin` attribute for loaded images.  Note that
 * you must provide a `crossOrigin` value if you want to access pixel data with the Canvas renderer.
 * See https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image for more detail.
 * @property {boolean} [interpolate=true] Use interpolated values when resampling.  By default,
 * linear interpolation is used when resampling.  Set to false to use the nearest neighbor instead.
 * @property {number} [maxZoom=19] Max zoom.
 * @property {boolean} [opaque=true] Whether the layer is opaque.
 * @property {number} [reprojectionErrorThreshold=0.5] Maximum allowed reprojection error (in pixels).
 * Higher values can increase reprojection performance, but decrease precision.
 * @property {import("../Tile.js").LoadFunction} [tileLoadFunction] Optional function to load a tile given a URL. The default is
 * ```js
 * function(imageTile, src) {
 *   imageTile.getImage().src = src;
 * };
 * ```
 * @property {number} [transition=250] Duration of the opacity transition for rendering.
 * To disable the opacity transition, pass `transition: 0`.
 * @property {string} [url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'] URL template.
 * Must include `{x}`, `{y}` or `{-y}`, and `{z}` placeholders.
 * @property {boolean} [wrapX=true] Whether to wrap the world horizontally.
 * @property {number|import("../array.js").NearestDirectionFunction} [zDirection=0]
 * Choose whether to use tiles with a higher or lower zoom level when between integer
 * zoom levels. See {@link module:ol/tilegrid/TileGrid~TileGrid#getZForResolution}.
 */ /**
 * @classdesc
 * Layer source for the OpenStreetMap tile server.
 * @api
 */ class OSM extends (0, _xyzJsDefault.default) {
    /**
   * @param {Options} [options] Open Street Map options.
   */ constructor(options){
        options = options || {};
        let attributions;
        if (options.attributions !== undefined) attributions = options.attributions;
        else attributions = [
            ATTRIBUTION
        ];
        const crossOrigin = options.crossOrigin !== undefined ? options.crossOrigin : "anonymous";
        const url = options.url !== undefined ? options.url : "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
        super({
            attributions: attributions,
            attributionsCollapsible: false,
            cacheSize: options.cacheSize,
            crossOrigin: crossOrigin,
            interpolate: options.interpolate,
            maxZoom: options.maxZoom !== undefined ? options.maxZoom : 19,
            opaque: options.opaque !== undefined ? options.opaque : true,
            reprojectionErrorThreshold: options.reprojectionErrorThreshold,
            tileLoadFunction: options.tileLoadFunction,
            transition: options.transition,
            url: url,
            wrapX: options.wrapX,
            zDirection: options.zDirection
        });
    }
}
exports.default = OSM;

},{"./XYZ.js":"7BJTx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7BJTx":[function(require,module,exports) {
/**
 * @module ol/source/XYZ
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _tileImageJs = require("./TileImage.js");
var _tileImageJsDefault = parcelHelpers.interopDefault(_tileImageJs);
var _tilegridJs = require("../tilegrid.js");
/**
 * @typedef {Object} Options
 * @property {import("./Source.js").AttributionLike} [attributions] Attributions.
 * @property {boolean} [attributionsCollapsible=true] Attributions are collapsible.
 * @property {number} [cacheSize] Initial tile cache size. Will auto-grow to hold at least the number of tiles in the viewport.
 * @property {null|string} [crossOrigin] The `crossOrigin` attribute for loaded images.  Note that
 * you must provide a `crossOrigin` value if you want to access pixel data with the Canvas renderer.
 * See https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image for more detail.
 * @property {boolean} [interpolate=true] Use interpolated values when resampling.  By default,
 * linear interpolation is used when resampling.  Set to false to use the nearest neighbor instead.
 * @property {boolean} [opaque=false] Whether the layer is opaque.
 * @property {import("../proj.js").ProjectionLike} [projection='EPSG:3857'] Projection.
 * @property {number} [reprojectionErrorThreshold=0.5] Maximum allowed reprojection error (in pixels).
 * Higher values can increase reprojection performance, but decrease precision.
 * @property {number} [maxZoom=42] Optional max zoom level. Not used if `tileGrid` is provided.
 * @property {number} [minZoom=0] Optional min zoom level. Not used if `tileGrid` is provided.
 * @property {number} [maxResolution] Optional tile grid resolution at level zero. Not used if `tileGrid` is provided.
 * @property {import("../tilegrid/TileGrid.js").default} [tileGrid] Tile grid.
 * @property {import("../Tile.js").LoadFunction} [tileLoadFunction] Optional function to load a tile given a URL. The default is
 * ```js
 * function(imageTile, src) {
 *   imageTile.getImage().src = src;
 * };
 * ```
 * @property {number} [tilePixelRatio=1] The pixel ratio used by the tile service.
 * For example, if the tile service advertizes 256px by 256px tiles but actually sends 512px
 * by 512px images (for retina/hidpi devices) then `tilePixelRatio`
 * should be set to `2`.
 * @property {number|import("../size.js").Size} [tileSize=[256, 256]] The tile size used by the tile service.
 * Not used if `tileGrid` is provided.
 * @property {number} [gutter=0] The size in pixels of the gutter around image tiles to ignore.
 * This allows artifacts of rendering at tile edges to be ignored.
 * Supported images should be wider and taller than the tile size by a value of `2 x gutter`.
 * @property {import("../Tile.js").UrlFunction} [tileUrlFunction] Optional function to get
 * tile URL given a tile coordinate and the projection.
 * Required if `url` or `urls` are not provided.
 * @property {string} [url] URL template. Must include `{x}`, `{y}` or `{-y}`,
 * and `{z}` placeholders. A `{?-?}` template pattern, for example `subdomain{a-f}.domain.com`,
 * may be used instead of defining each one separately in the `urls` option.
 * @property {Array<string>} [urls] An array of URL templates.
 * @property {boolean} [wrapX=true] Whether to wrap the world horizontally.
 * @property {number} [transition=250] Duration of the opacity transition for rendering.
 * To disable the opacity transition, pass `transition: 0`.
 * @property {number|import("../array.js").NearestDirectionFunction} [zDirection=0]
 * Choose whether to use tiles with a higher or lower zoom level when between integer
 * zoom levels. See {@link module:ol/tilegrid/TileGrid~TileGrid#getZForResolution}.
 */ /**
 * @classdesc
 * Layer source for tile data with URLs in a set XYZ format that are
 * defined in a URL template. By default, this follows the widely-used
 * Google grid where `x` 0 and `y` 0 are in the top left. Grids like
 * TMS where `x` 0 and `y` 0 are in the bottom left can be used by
 * using the `{-y}` placeholder in the URL template, so long as the
 * source does not have a custom tile grid. In this case
 * a `tileUrlFunction` can be used, such as:
 * ```js
 *  tileUrlFunction: function(coordinate) {
 *    return 'http://mapserver.com/' + coordinate[0] + '/' +
 *      coordinate[1] + '/' + (-coordinate[2] - 1) + '.png';
 *  }
 * ```
 * @api
 */ class XYZ extends (0, _tileImageJsDefault.default) {
    /**
   * @param {Options} [options] XYZ options.
   */ constructor(options){
        options = options || {};
        const projection = options.projection !== undefined ? options.projection : "EPSG:3857";
        const tileGrid = options.tileGrid !== undefined ? options.tileGrid : (0, _tilegridJs.createXYZ)({
            extent: (0, _tilegridJs.extentFromProjection)(projection),
            maxResolution: options.maxResolution,
            maxZoom: options.maxZoom,
            minZoom: options.minZoom,
            tileSize: options.tileSize
        });
        super({
            attributions: options.attributions,
            cacheSize: options.cacheSize,
            crossOrigin: options.crossOrigin,
            interpolate: options.interpolate,
            opaque: options.opaque,
            projection: projection,
            reprojectionErrorThreshold: options.reprojectionErrorThreshold,
            tileGrid: tileGrid,
            tileLoadFunction: options.tileLoadFunction,
            tilePixelRatio: options.tilePixelRatio,
            tileUrlFunction: options.tileUrlFunction,
            url: options.url,
            urls: options.urls,
            wrapX: options.wrapX !== undefined ? options.wrapX : true,
            transition: options.transition,
            attributionsCollapsible: options.attributionsCollapsible,
            zDirection: options.zDirection
        });
        /**
     * @private
     * @type {number}
     */ this.gutter_ = options.gutter !== undefined ? options.gutter : 0;
    }
    /**
   * @return {number} Gutter.
   */ getGutter() {
        return this.gutter_;
    }
}
exports.default = XYZ;

},{"./TileImage.js":"2cBKP","../tilegrid.js":"1Yr4i","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2cBKP":[function(require,module,exports) {
/**
 * @module ol/source/TileImage
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _eventTypeJs = require("../events/EventType.js");
var _eventTypeJsDefault = parcelHelpers.interopDefault(_eventTypeJs);
var _imageTileJs = require("../ImageTile.js");
var _imageTileJsDefault = parcelHelpers.interopDefault(_imageTileJs);
var _tileJs = require("../reproj/Tile.js");
var _tileJsDefault = parcelHelpers.interopDefault(_tileJs);
var _tileCacheJs = require("../TileCache.js");
var _tileCacheJsDefault = parcelHelpers.interopDefault(_tileCacheJs);
var _tileStateJs = require("../TileState.js");
var _tileStateJsDefault = parcelHelpers.interopDefault(_tileStateJs);
var _urlTileJs = require("./UrlTile.js");
var _urlTileJsDefault = parcelHelpers.interopDefault(_urlTileJs);
var _projJs = require("../proj.js");
var _tilecoordJs = require("../tilecoord.js");
var _tilegridJs = require("../tilegrid.js");
var _utilJs = require("../util.js");
/**
 * @typedef {Object} Options
 * @property {import("./Source.js").AttributionLike} [attributions] Attributions.
 * @property {boolean} [attributionsCollapsible=true] Attributions are collapsible.
 * @property {number} [cacheSize] Initial tile cache size. Will auto-grow to hold at least the number of tiles in the viewport.
 * @property {null|string} [crossOrigin] The `crossOrigin` attribute for loaded images.  Note that
 * you must provide a `crossOrigin` value if you want to access pixel data with the Canvas renderer.
 * See https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image for more detail.
 * @property {boolean} [interpolate=true] Use interpolated values when resampling.  By default,
 * linear interpolation is used when resampling.  Set to false to use the nearest neighbor instead.
 * @property {boolean} [opaque=false] Whether the layer is opaque.
 * @property {import("../proj.js").ProjectionLike} [projection] Projection. Default is the view projection.
 * @property {number} [reprojectionErrorThreshold=0.5] Maximum allowed reprojection error (in pixels).
 * Higher values can increase reprojection performance, but decrease precision.
 * @property {import("./Source.js").State} [state] Source state.
 * @property {typeof import("../ImageTile.js").default} [tileClass] Class used to instantiate image tiles.
 * Default is {@link module:ol/ImageTile~ImageTile}.
 * @property {import("../tilegrid/TileGrid.js").default} [tileGrid] Tile grid.
 * @property {import("../Tile.js").LoadFunction} [tileLoadFunction] Optional function to load a tile given a URL. The default is
 * ```js
 * function(imageTile, src) {
 *   imageTile.getImage().src = src;
 * };
 * ```
 * @property {number} [tilePixelRatio=1] The pixel ratio used by the tile service. For example, if the tile
 * service advertizes 256px by 256px tiles but actually sends 512px
 * by 512px images (for retina/hidpi devices) then `tilePixelRatio`
 * should be set to `2`.
 * @property {import("../Tile.js").UrlFunction} [tileUrlFunction] Optional function to get tile URL given a tile coordinate and the projection.
 * @property {string} [url] URL template. Must include `{x}`, `{y}` or `{-y}`, and `{z}` placeholders.
 * A `{?-?}` template pattern, for example `subdomain{a-f}.domain.com`, may be
 * used instead of defining each one separately in the `urls` option.
 * @property {Array<string>} [urls] An array of URL templates.
 * @property {boolean} [wrapX] Whether to wrap the world horizontally. The default, is to
 * request out-of-bounds tiles from the server. When set to `false`, only one
 * world will be rendered. When set to `true`, tiles will be requested for one
 * world only, but they will be wrapped horizontally to render multiple worlds.
 * @property {number} [transition] Duration of the opacity transition for rendering.
 * To disable the opacity transition, pass `transition: 0`.
 * @property {string} [key] Optional tile key for proper cache fetching
 * @property {number|import("../array.js").NearestDirectionFunction} [zDirection=0]
 * Choose whether to use tiles with a higher or lower zoom level when between integer
 * zoom levels. See {@link module:ol/tilegrid/TileGrid~TileGrid#getZForResolution}.
 */ /**
 * @classdesc
 * Base class for sources providing images divided into a tile grid.
 *
 * @fires import("./Tile.js").TileSourceEvent
 * @api
 */ class TileImage extends (0, _urlTileJsDefault.default) {
    /**
   * @param {!Options} options Image tile options.
   */ constructor(options){
        super({
            attributions: options.attributions,
            cacheSize: options.cacheSize,
            opaque: options.opaque,
            projection: options.projection,
            state: options.state,
            tileGrid: options.tileGrid,
            tileLoadFunction: options.tileLoadFunction ? options.tileLoadFunction : defaultTileLoadFunction,
            tilePixelRatio: options.tilePixelRatio,
            tileUrlFunction: options.tileUrlFunction,
            url: options.url,
            urls: options.urls,
            wrapX: options.wrapX,
            transition: options.transition,
            interpolate: options.interpolate !== undefined ? options.interpolate : true,
            key: options.key,
            attributionsCollapsible: options.attributionsCollapsible,
            zDirection: options.zDirection
        });
        /**
     * @protected
     * @type {?string}
     */ this.crossOrigin = options.crossOrigin !== undefined ? options.crossOrigin : null;
        /**
     * @protected
     * @type {typeof ImageTile}
     */ this.tileClass = options.tileClass !== undefined ? options.tileClass : (0, _imageTileJsDefault.default);
        /**
     * @protected
     * @type {!Object<string, TileCache>}
     */ this.tileCacheForProjection = {};
        /**
     * @protected
     * @type {!Object<string, import("../tilegrid/TileGrid.js").default>}
     */ this.tileGridForProjection = {};
        /**
     * @private
     * @type {number|undefined}
     */ this.reprojectionErrorThreshold_ = options.reprojectionErrorThreshold;
        /**
     * @private
     * @type {boolean}
     */ this.renderReprojectionEdges_ = false;
    }
    /**
   * @return {boolean} Can expire cache.
   */ canExpireCache() {
        if (this.tileCache.canExpireCache()) return true;
        for(const key in this.tileCacheForProjection){
            if (this.tileCacheForProjection[key].canExpireCache()) return true;
        }
        return false;
    }
    /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @param {!Object<string, boolean>} usedTiles Used tiles.
   */ expireCache(projection, usedTiles) {
        const usedTileCache = this.getTileCacheForProjection(projection);
        this.tileCache.expireCache(this.tileCache == usedTileCache ? usedTiles : {});
        for(const id in this.tileCacheForProjection){
            const tileCache = this.tileCacheForProjection[id];
            tileCache.expireCache(tileCache == usedTileCache ? usedTiles : {});
        }
    }
    /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {number} Gutter.
   */ getGutterForProjection(projection) {
        if (this.getProjection() && projection && !(0, _projJs.equivalent)(this.getProjection(), projection)) return 0;
        return this.getGutter();
    }
    /**
   * @return {number} Gutter.
   */ getGutter() {
        return 0;
    }
    /**
   * Return the key to be used for all tiles in the source.
   * @return {string} The key for all tiles.
   */ getKey() {
        let key = super.getKey();
        if (!this.getInterpolate()) key += ":disable-interpolation";
        return key;
    }
    /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {boolean} Opaque.
   */ getOpaque(projection) {
        if (this.getProjection() && projection && !(0, _projJs.equivalent)(this.getProjection(), projection)) return false;
        return super.getOpaque(projection);
    }
    /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {!import("../tilegrid/TileGrid.js").default} Tile grid.
   */ getTileGridForProjection(projection) {
        const thisProj = this.getProjection();
        if (this.tileGrid && (!thisProj || (0, _projJs.equivalent)(thisProj, projection))) return this.tileGrid;
        const projKey = (0, _utilJs.getUid)(projection);
        if (!(projKey in this.tileGridForProjection)) this.tileGridForProjection[projKey] = (0, _tilegridJs.getForProjection)(projection);
        return this.tileGridForProjection[projKey];
    }
    /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {import("../TileCache.js").default} Tile cache.
   */ getTileCacheForProjection(projection) {
        const thisProj = this.getProjection();
        if (!thisProj || (0, _projJs.equivalent)(thisProj, projection)) return this.tileCache;
        const projKey = (0, _utilJs.getUid)(projection);
        if (!(projKey in this.tileCacheForProjection)) this.tileCacheForProjection[projKey] = new (0, _tileCacheJsDefault.default)(this.tileCache.highWaterMark);
        return this.tileCacheForProjection[projKey];
    }
    /**
   * @param {number} z Tile coordinate z.
   * @param {number} x Tile coordinate x.
   * @param {number} y Tile coordinate y.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @param {string} key The key set on the tile.
   * @return {!ImageTile} Tile.
   * @private
   */ createTile_(z, x, y, pixelRatio, projection, key) {
        const tileCoord = [
            z,
            x,
            y
        ];
        const urlTileCoord = this.getTileCoordForTileUrlFunction(tileCoord, projection);
        const tileUrl = urlTileCoord ? this.tileUrlFunction(urlTileCoord, pixelRatio, projection) : undefined;
        const tile = new this.tileClass(tileCoord, tileUrl !== undefined ? (0, _tileStateJsDefault.default).IDLE : (0, _tileStateJsDefault.default).EMPTY, tileUrl !== undefined ? tileUrl : "", this.crossOrigin, this.tileLoadFunction, this.tileOptions);
        tile.key = key;
        tile.addEventListener((0, _eventTypeJsDefault.default).CHANGE, this.handleTileChange.bind(this));
        return tile;
    }
    /**
   * @param {number} z Tile coordinate z.
   * @param {number} x Tile coordinate x.
   * @param {number} y Tile coordinate y.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {!(ImageTile|ReprojTile)} Tile.
   */ getTile(z, x, y, pixelRatio, projection) {
        const sourceProjection = this.getProjection();
        if (!sourceProjection || !projection || (0, _projJs.equivalent)(sourceProjection, projection)) return this.getTileInternal(z, x, y, pixelRatio, sourceProjection || projection);
        const cache = this.getTileCacheForProjection(projection);
        const tileCoord = [
            z,
            x,
            y
        ];
        let tile;
        const tileCoordKey = (0, _tilecoordJs.getKey)(tileCoord);
        if (cache.containsKey(tileCoordKey)) tile = cache.get(tileCoordKey);
        const key = this.getKey();
        if (tile && tile.key == key) return tile;
        const sourceTileGrid = this.getTileGridForProjection(sourceProjection);
        const targetTileGrid = this.getTileGridForProjection(projection);
        const wrappedTileCoord = this.getTileCoordForTileUrlFunction(tileCoord, projection);
        const newTile = new (0, _tileJsDefault.default)(sourceProjection, sourceTileGrid, projection, targetTileGrid, tileCoord, wrappedTileCoord, this.getTilePixelRatio(pixelRatio), this.getGutter(), (z, x, y, pixelRatio)=>this.getTileInternal(z, x, y, pixelRatio, sourceProjection), this.reprojectionErrorThreshold_, this.renderReprojectionEdges_, this.getInterpolate());
        newTile.key = key;
        if (tile) {
            newTile.interimTile = tile;
            newTile.refreshInterimChain();
            cache.replace(tileCoordKey, newTile);
        } else cache.set(tileCoordKey, newTile);
        return newTile;
    }
    /**
   * @param {number} z Tile coordinate z.
   * @param {number} x Tile coordinate x.
   * @param {number} y Tile coordinate y.
   * @param {number} pixelRatio Pixel ratio.
   * @param {!import("../proj/Projection.js").default} projection Projection.
   * @return {!ImageTile} Tile.
   * @protected
   */ getTileInternal(z, x, y, pixelRatio, projection) {
        let tile = null;
        const tileCoordKey = (0, _tilecoordJs.getKeyZXY)(z, x, y);
        const key = this.getKey();
        if (!this.tileCache.containsKey(tileCoordKey)) {
            tile = this.createTile_(z, x, y, pixelRatio, projection, key);
            this.tileCache.set(tileCoordKey, tile);
        } else {
            tile = this.tileCache.get(tileCoordKey);
            if (tile.key != key) {
                // The source's params changed. If the tile has an interim tile and if we
                // can use it then we use it. Otherwise we create a new tile.  In both
                // cases we attempt to assign an interim tile to the new tile.
                const interimTile = tile;
                tile = this.createTile_(z, x, y, pixelRatio, projection, key);
                //make the new tile the head of the list,
                if (interimTile.getState() == (0, _tileStateJsDefault.default).IDLE) //the old tile hasn't begun loading yet, and is now outdated, so we can simply discard it
                tile.interimTile = interimTile.interimTile;
                else tile.interimTile = interimTile;
                tile.refreshInterimChain();
                this.tileCache.replace(tileCoordKey, tile);
            }
        }
        return tile;
    }
    /**
   * Sets whether to render reprojection edges or not (usually for debugging).
   * @param {boolean} render Render the edges.
   * @api
   */ setRenderReprojectionEdges(render) {
        if (this.renderReprojectionEdges_ == render) return;
        this.renderReprojectionEdges_ = render;
        for(const id in this.tileCacheForProjection)this.tileCacheForProjection[id].clear();
        this.changed();
    }
    /**
   * Sets the tile grid to use when reprojecting the tiles to the given
   * projection instead of the default tile grid for the projection.
   *
   * This can be useful when the default tile grid cannot be created
   * (e.g. projection has no extent defined) or
   * for optimization reasons (custom tile size, resolutions, ...).
   *
   * @param {import("../proj.js").ProjectionLike} projection Projection.
   * @param {import("../tilegrid/TileGrid.js").default} tilegrid Tile grid to use for the projection.
   * @api
   */ setTileGridForProjection(projection, tilegrid) {
        const proj = (0, _projJs.get)(projection);
        if (proj) {
            const projKey = (0, _utilJs.getUid)(proj);
            if (!(projKey in this.tileGridForProjection)) this.tileGridForProjection[projKey] = tilegrid;
        }
    }
    clear() {
        super.clear();
        for(const id in this.tileCacheForProjection)this.tileCacheForProjection[id].clear();
    }
}
/**
 * @param {ImageTile} imageTile Image tile.
 * @param {string} src Source.
 */ function defaultTileLoadFunction(imageTile, src) {
    /** @type {HTMLImageElement|HTMLVideoElement} */ imageTile.getImage().src = src;
}
exports.default = TileImage;

},{"../events/EventType.js":"hrQJ6","../ImageTile.js":"bGt2E","../reproj/Tile.js":"lR1TX","../TileCache.js":"3AgyC","../TileState.js":"2fodI","./UrlTile.js":"2X3sL","../proj.js":"SznqC","../tilecoord.js":"bZ2LT","../tilegrid.js":"1Yr4i","../util.js":"pLBjQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3AgyC":[function(require,module,exports) {
/**
 * @module ol/TileCache
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _lrucacheJs = require("./structs/LRUCache.js");
var _lrucacheJsDefault = parcelHelpers.interopDefault(_lrucacheJs);
var _tilecoordJs = require("./tilecoord.js");
class TileCache extends (0, _lrucacheJsDefault.default) {
    clear() {
        while(this.getCount() > 0)this.pop().release();
        super.clear();
    }
    /**
   * @param {!Object<string, boolean>} usedTiles Used tiles.
   */ expireCache(usedTiles) {
        while(this.canExpireCache()){
            const tile = this.peekLast();
            if (tile.getKey() in usedTiles) break;
            else this.pop().release();
        }
    }
    /**
   * Prune all tiles from the cache that don't have the same z as the newest tile.
   */ pruneExceptNewestZ() {
        if (this.getCount() === 0) return;
        const key = this.peekFirstKey();
        const tileCoord = (0, _tilecoordJs.fromKey)(key);
        const z = tileCoord[0];
        this.forEach((tile)=>{
            if (tile.tileCoord[0] !== z) {
                this.remove((0, _tilecoordJs.getKey)(tile.tileCoord));
                tile.release();
            }
        });
    }
}
exports.default = TileCache;

},{"./structs/LRUCache.js":"cmjR9","./tilecoord.js":"bZ2LT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cmjR9":[function(require,module,exports) {
/**
 * @module ol/structs/LRUCache
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _assertsJs = require("../asserts.js");
/**
 * @typedef {Object} Entry
 * @property {string} key_ Key.
 * @property {Object} newer Newer.
 * @property {Object} older Older.
 * @property {*} value_ Value.
 */ /**
 * @classdesc
 * Implements a Least-Recently-Used cache where the keys do not conflict with
 * Object's properties (e.g. 'hasOwnProperty' is not allowed as a key). Expiring
 * items from the cache is the responsibility of the user.
 *
 * @fires import("../events/Event.js").default
 * @template T
 */ class LRUCache {
    /**
   * @param {number} [highWaterMark] High water mark.
   */ constructor(highWaterMark){
        /**
     * Desired max cache size after expireCache(). If set to 0, no cache entries
     * will be pruned at all.
     * @type {number}
     */ this.highWaterMark = highWaterMark !== undefined ? highWaterMark : 2048;
        /**
     * @private
     * @type {number}
     */ this.count_ = 0;
        /**
     * @private
     * @type {!Object<string, Entry>}
     */ this.entries_ = {};
        /**
     * @private
     * @type {?Entry}
     */ this.oldest_ = null;
        /**
     * @private
     * @type {?Entry}
     */ this.newest_ = null;
    }
    /**
   * @return {boolean} Can expire cache.
   */ canExpireCache() {
        return this.highWaterMark > 0 && this.getCount() > this.highWaterMark;
    }
    /**
   * Expire the cache.
   * @param {!Object<string, boolean>} [keep] Keys to keep. To be implemented by subclasses.
   */ expireCache(keep) {
        while(this.canExpireCache())this.pop();
    }
    /**
   * FIXME empty description for jsdoc
   */ clear() {
        this.count_ = 0;
        this.entries_ = {};
        this.oldest_ = null;
        this.newest_ = null;
    }
    /**
   * @param {string} key Key.
   * @return {boolean} Contains key.
   */ containsKey(key) {
        return this.entries_.hasOwnProperty(key);
    }
    /**
   * @param {function(T, string, LRUCache<T>): ?} f The function
   *     to call for every entry from the oldest to the newer. This function takes
   *     3 arguments (the entry value, the entry key and the LRUCache object).
   *     The return value is ignored.
   */ forEach(f) {
        let entry = this.oldest_;
        while(entry){
            f(entry.value_, entry.key_, this);
            entry = entry.newer;
        }
    }
    /**
   * @param {string} key Key.
   * @param {*} [options] Options (reserved for subclasses).
   * @return {T} Value.
   */ get(key, options) {
        const entry = this.entries_[key];
        (0, _assertsJs.assert)(entry !== undefined, 15); // Tried to get a value for a key that does not exist in the cache
        if (entry === this.newest_) return entry.value_;
        else if (entry === this.oldest_) {
            this.oldest_ = /** @type {Entry} */ this.oldest_.newer;
            this.oldest_.older = null;
        } else {
            entry.newer.older = entry.older;
            entry.older.newer = entry.newer;
        }
        entry.newer = null;
        entry.older = this.newest_;
        this.newest_.newer = entry;
        this.newest_ = entry;
        return entry.value_;
    }
    /**
   * Remove an entry from the cache.
   * @param {string} key The entry key.
   * @return {T} The removed entry.
   */ remove(key) {
        const entry = this.entries_[key];
        (0, _assertsJs.assert)(entry !== undefined, 15); // Tried to get a value for a key that does not exist in the cache
        if (entry === this.newest_) {
            this.newest_ = /** @type {Entry} */ entry.older;
            if (this.newest_) this.newest_.newer = null;
        } else if (entry === this.oldest_) {
            this.oldest_ = /** @type {Entry} */ entry.newer;
            if (this.oldest_) this.oldest_.older = null;
        } else {
            entry.newer.older = entry.older;
            entry.older.newer = entry.newer;
        }
        delete this.entries_[key];
        --this.count_;
        return entry.value_;
    }
    /**
   * @return {number} Count.
   */ getCount() {
        return this.count_;
    }
    /**
   * @return {Array<string>} Keys.
   */ getKeys() {
        const keys = new Array(this.count_);
        let i = 0;
        let entry;
        for(entry = this.newest_; entry; entry = entry.older)keys[i++] = entry.key_;
        return keys;
    }
    /**
   * @return {Array<T>} Values.
   */ getValues() {
        const values = new Array(this.count_);
        let i = 0;
        let entry;
        for(entry = this.newest_; entry; entry = entry.older)values[i++] = entry.value_;
        return values;
    }
    /**
   * @return {T} Last value.
   */ peekLast() {
        return this.oldest_.value_;
    }
    /**
   * @return {string} Last key.
   */ peekLastKey() {
        return this.oldest_.key_;
    }
    /**
   * Get the key of the newest item in the cache.  Throws if the cache is empty.
   * @return {string} The newest key.
   */ peekFirstKey() {
        return this.newest_.key_;
    }
    /**
   * Return an entry without updating least recently used time.
   * @param {string} key Key.
   * @return {T} Value.
   */ peek(key) {
        if (!this.containsKey(key)) return undefined;
        return this.entries_[key].value_;
    }
    /**
   * @return {T} value Value.
   */ pop() {
        const entry = this.oldest_;
        delete this.entries_[entry.key_];
        if (entry.newer) entry.newer.older = null;
        this.oldest_ = /** @type {Entry} */ entry.newer;
        if (!this.oldest_) this.newest_ = null;
        --this.count_;
        return entry.value_;
    }
    /**
   * @param {string} key Key.
   * @param {T} value Value.
   */ replace(key, value) {
        this.get(key); // update `newest_`
        this.entries_[key].value_ = value;
    }
    /**
   * @param {string} key Key.
   * @param {T} value Value.
   */ set(key, value) {
        (0, _assertsJs.assert)(!(key in this.entries_), 16); // Tried to set a value for a key that is used already
        const entry = {
            key_: key,
            newer: null,
            older: this.newest_,
            value_: value
        };
        if (!this.newest_) this.oldest_ = entry;
        else this.newest_.newer = entry;
        this.newest_ = entry;
        this.entries_[key] = entry;
        ++this.count_;
    }
    /**
   * Set a maximum number of entries for the cache.
   * @param {number} size Cache size.
   * @api
   */ setSize(size) {
        this.highWaterMark = size;
    }
}
exports.default = LRUCache;

},{"../asserts.js":"e4TiF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bZ2LT":[function(require,module,exports) {
/**
 * @module ol/tilecoord
 */ /**
 * An array of three numbers representing the location of a tile in a tile
 * grid. The order is `z` (zoom level), `x` (column), and `y` (row).
 * @typedef {Array<number>} TileCoord
 * @api
 */ /**
 * @param {number} z Z.
 * @param {number} x X.
 * @param {number} y Y.
 * @param {TileCoord} [tileCoord] Tile coordinate.
 * @return {TileCoord} Tile coordinate.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createOrUpdate", ()=>createOrUpdate);
/**
 * @param {number} z Z.
 * @param {number} x X.
 * @param {number} y Y.
 * @return {string} Key.
 */ parcelHelpers.export(exports, "getKeyZXY", ()=>getKeyZXY);
/**
 * Get the key for a tile coord.
 * @param {TileCoord} tileCoord The tile coord.
 * @return {string} Key.
 */ parcelHelpers.export(exports, "getKey", ()=>getKey);
/**
 * Get the tile cache key for a tile key obtained through `tile.getKey()`.
 * @param {string} tileKey The tile key.
 * @return {string} The cache key.
 */ parcelHelpers.export(exports, "getCacheKeyForTileKey", ()=>getCacheKeyForTileKey);
/**
 * Get a tile coord given a key.
 * @param {string} key The tile coord key.
 * @return {TileCoord} The tile coord.
 */ parcelHelpers.export(exports, "fromKey", ()=>fromKey);
/**
 * @param {TileCoord} tileCoord Tile coord.
 * @return {number} Hash.
 */ parcelHelpers.export(exports, "hash", ()=>hash);
/**
 * @param {TileCoord} tileCoord Tile coordinate.
 * @param {!import("./tilegrid/TileGrid.js").default} tileGrid Tile grid.
 * @return {boolean} Tile coordinate is within extent and zoom level range.
 */ parcelHelpers.export(exports, "withinExtentAndZ", ()=>withinExtentAndZ);
function createOrUpdate(z, x, y, tileCoord) {
    if (tileCoord !== undefined) {
        tileCoord[0] = z;
        tileCoord[1] = x;
        tileCoord[2] = y;
        return tileCoord;
    }
    return [
        z,
        x,
        y
    ];
}
function getKeyZXY(z, x, y) {
    return z + "/" + x + "/" + y;
}
function getKey(tileCoord) {
    return getKeyZXY(tileCoord[0], tileCoord[1], tileCoord[2]);
}
function getCacheKeyForTileKey(tileKey) {
    const [z, x, y] = tileKey.substring(tileKey.lastIndexOf("/") + 1, tileKey.length).split(",").map(Number);
    return getKeyZXY(z, x, y);
}
function fromKey(key) {
    return key.split("/").map(Number);
}
function hash(tileCoord) {
    return (tileCoord[1] << tileCoord[0]) + tileCoord[2];
}
function withinExtentAndZ(tileCoord, tileGrid) {
    const z = tileCoord[0];
    const x = tileCoord[1];
    const y = tileCoord[2];
    if (tileGrid.getMinZoom() > z || z > tileGrid.getMaxZoom()) return false;
    const tileRange = tileGrid.getFullTileRange(z);
    if (!tileRange) return true;
    return tileRange.containsXY(x, y);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2X3sL":[function(require,module,exports) {
/**
 * @module ol/source/UrlTile
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _tileEventTypeJs = require("./TileEventType.js");
var _tileEventTypeJsDefault = parcelHelpers.interopDefault(_tileEventTypeJs);
var _tileJs = require("./Tile.js");
var _tileJsDefault = parcelHelpers.interopDefault(_tileJs);
var _tileStateJs = require("../TileState.js");
var _tileStateJsDefault = parcelHelpers.interopDefault(_tileStateJs);
var _tileurlfunctionJs = require("../tileurlfunction.js");
var _tilecoordJs = require("../tilecoord.js");
var _utilJs = require("../util.js");
/**
 * @typedef {Object} Options
 * @property {import("./Source.js").AttributionLike} [attributions] Attributions.
 * @property {boolean} [attributionsCollapsible=true] Attributions are collapsible.
 * @property {number} [cacheSize] Cache size.
 * @property {boolean} [opaque=false] Whether the layer is opaque.
 * @property {import("../proj.js").ProjectionLike} [projection] Projection.
 * @property {import("./Source.js").State} [state] State.
 * @property {import("../tilegrid/TileGrid.js").default} [tileGrid] TileGrid.
 * @property {import("../Tile.js").LoadFunction} tileLoadFunction TileLoadFunction.
 * @property {number} [tilePixelRatio] TilePixelRatio.
 * @property {import("../Tile.js").UrlFunction} [tileUrlFunction] TileUrlFunction.
 * @property {string} [url] Url.
 * @property {Array<string>} [urls] Urls.
 * @property {boolean} [wrapX=true] WrapX.
 * @property {number} [transition] Transition.
 * @property {string} [key] Key.
 * @property {number|import("../array.js").NearestDirectionFunction} [zDirection=0] ZDirection.
 * @property {boolean} [interpolate=false] Use interpolated values when resampling.  By default,
 * the nearest neighbor is used when resampling.
 */ /**
 * @classdesc
 * Base class for sources providing tiles divided into a tile grid over http.
 *
 * @fires import("./Tile.js").TileSourceEvent
 */ class UrlTile extends (0, _tileJsDefault.default) {
    /**
   * @param {Options} options Image tile options.
   */ constructor(options){
        super({
            attributions: options.attributions,
            cacheSize: options.cacheSize,
            opaque: options.opaque,
            projection: options.projection,
            state: options.state,
            tileGrid: options.tileGrid,
            tilePixelRatio: options.tilePixelRatio,
            wrapX: options.wrapX,
            transition: options.transition,
            interpolate: options.interpolate,
            key: options.key,
            attributionsCollapsible: options.attributionsCollapsible,
            zDirection: options.zDirection
        });
        /**
     * @private
     * @type {boolean}
     */ this.generateTileUrlFunction_ = this.tileUrlFunction === UrlTile.prototype.tileUrlFunction;
        /**
     * @protected
     * @type {import("../Tile.js").LoadFunction}
     */ this.tileLoadFunction = options.tileLoadFunction;
        if (options.tileUrlFunction) this.tileUrlFunction = options.tileUrlFunction;
        /**
     * @protected
     * @type {!Array<string>|null}
     */ this.urls = null;
        if (options.urls) this.setUrls(options.urls);
        else if (options.url) this.setUrl(options.url);
        /**
     * @private
     * @type {!Object<string, boolean>}
     */ this.tileLoadingKeys_ = {};
    }
    /**
   * Return the tile load function of the source.
   * @return {import("../Tile.js").LoadFunction} TileLoadFunction
   * @api
   */ getTileLoadFunction() {
        return this.tileLoadFunction;
    }
    /**
   * Return the tile URL function of the source.
   * @return {import("../Tile.js").UrlFunction} TileUrlFunction
   * @api
   */ getTileUrlFunction() {
        return Object.getPrototypeOf(this).tileUrlFunction === this.tileUrlFunction ? this.tileUrlFunction.bind(this) : this.tileUrlFunction;
    }
    /**
   * Return the URLs used for this source.
   * When a tileUrlFunction is used instead of url or urls,
   * null will be returned.
   * @return {!Array<string>|null} URLs.
   * @api
   */ getUrls() {
        return this.urls;
    }
    /**
   * Handle tile change events.
   * @param {import("../events/Event.js").default} event Event.
   * @protected
   */ handleTileChange(event) {
        const tile = /** @type {import("../Tile.js").default} */ event.target;
        const uid = (0, _utilJs.getUid)(tile);
        const tileState = tile.getState();
        let type;
        if (tileState == (0, _tileStateJsDefault.default).LOADING) {
            this.tileLoadingKeys_[uid] = true;
            type = (0, _tileEventTypeJsDefault.default).TILELOADSTART;
        } else if (uid in this.tileLoadingKeys_) {
            delete this.tileLoadingKeys_[uid];
            type = tileState == (0, _tileStateJsDefault.default).ERROR ? (0, _tileEventTypeJsDefault.default).TILELOADERROR : tileState == (0, _tileStateJsDefault.default).LOADED ? (0, _tileEventTypeJsDefault.default).TILELOADEND : undefined;
        }
        if (type != undefined) this.dispatchEvent(new (0, _tileJs.TileSourceEvent)(type, tile));
    }
    /**
   * Set the tile load function of the source.
   * @param {import("../Tile.js").LoadFunction} tileLoadFunction Tile load function.
   * @api
   */ setTileLoadFunction(tileLoadFunction) {
        this.tileCache.clear();
        this.tileLoadFunction = tileLoadFunction;
        this.changed();
    }
    /**
   * Set the tile URL function of the source.
   * @param {import("../Tile.js").UrlFunction} tileUrlFunction Tile URL function.
   * @param {string} [key] Optional new tile key for the source.
   * @api
   */ setTileUrlFunction(tileUrlFunction, key) {
        this.tileUrlFunction = tileUrlFunction;
        this.tileCache.pruneExceptNewestZ();
        if (typeof key !== "undefined") this.setKey(key);
        else this.changed();
    }
    /**
   * Set the URL to use for requests.
   * @param {string} url URL.
   * @api
   */ setUrl(url) {
        const urls = (0, _tileurlfunctionJs.expandUrl)(url);
        this.urls = urls;
        this.setUrls(urls);
    }
    /**
   * Set the URLs to use for requests.
   * @param {Array<string>} urls URLs.
   * @api
   */ setUrls(urls) {
        this.urls = urls;
        const key = urls.join("\n");
        if (this.generateTileUrlFunction_) this.setTileUrlFunction((0, _tileurlfunctionJs.createFromTemplates)(urls, this.tileGrid), key);
        else this.setKey(key);
    }
    /**
   * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {string|undefined} Tile URL.
   */ tileUrlFunction(tileCoord, pixelRatio, projection) {
        return undefined;
    }
    /**
   * Marks a tile coord as being used, without triggering a load.
   * @param {number} z Tile coordinate z.
   * @param {number} x Tile coordinate x.
   * @param {number} y Tile coordinate y.
   */ useTile(z, x, y) {
        const tileCoordKey = (0, _tilecoordJs.getKeyZXY)(z, x, y);
        if (this.tileCache.containsKey(tileCoordKey)) this.tileCache.get(tileCoordKey);
    }
}
exports.default = UrlTile;

},{"./TileEventType.js":"9ZOYi","./Tile.js":"3ySVS","../TileState.js":"2fodI","../tileurlfunction.js":"gOwFC","../tilecoord.js":"bZ2LT","../util.js":"pLBjQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9ZOYi":[function(require,module,exports) {
/**
 * @module ol/source/TileEventType
 */ /**
 * @enum {string}
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    /**
   * Triggered when a tile starts loading.
   * @event module:ol/source/Tile.TileSourceEvent#tileloadstart
   * @api
   */ TILELOADSTART: "tileloadstart",
    /**
   * Triggered when a tile finishes loading, either when its data is loaded,
   * or when loading was aborted because the tile is no longer needed.
   * @event module:ol/source/Tile.TileSourceEvent#tileloadend
   * @api
   */ TILELOADEND: "tileloadend",
    /**
   * Triggered if tile loading results in an error. Note that this is not the
   * right place to re-fetch tiles. See {@link module:ol/ImageTile~ImageTile#load}
   * for details.
   * @event module:ol/source/Tile.TileSourceEvent#tileloaderror
   * @api
   */ TILELOADERROR: "tileloaderror"
}; /**
 * @typedef {'tileloadstart'|'tileloadend'|'tileloaderror'} TileSourceEventTypes
 */ 

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3ySVS":[function(require,module,exports) {
/**
 * @module ol/source/Tile
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @classdesc
 * Events emitted by {@link module:ol/source/Tile~TileSource} instances are instances of this
 * type.
 */ parcelHelpers.export(exports, "TileSourceEvent", ()=>TileSourceEvent);
var _eventJs = require("../events/Event.js");
var _eventJsDefault = parcelHelpers.interopDefault(_eventJs);
var _sourceJs = require("./Source.js");
var _sourceJsDefault = parcelHelpers.interopDefault(_sourceJs);
var _tileCacheJs = require("../TileCache.js");
var _tileCacheJsDefault = parcelHelpers.interopDefault(_tileCacheJs);
var _tileStateJs = require("../TileState.js");
var _tileStateJsDefault = parcelHelpers.interopDefault(_tileStateJs);
var _utilJs = require("../util.js");
var _assertsJs = require("../asserts.js");
var _projJs = require("../proj.js");
var _tilecoordJs = require("../tilecoord.js");
var _tilegridJs = require("../tilegrid.js");
var _sizeJs = require("../size.js");
/***
 * @template Return
 * @typedef {import("../Observable").OnSignature<import("../Observable").EventTypes, import("../events/Event.js").default, Return> &
 *   import("../Observable").OnSignature<import("../ObjectEventType").Types, import("../Object").ObjectEvent, Return> &
 *   import("../Observable").OnSignature<import("./TileEventType").TileSourceEventTypes, TileSourceEvent, Return> &
 *   import("../Observable").CombinedOnSignature<import("../Observable").EventTypes|import("../ObjectEventType").Types|
 *     import("./TileEventType").TileSourceEventTypes, Return>} TileSourceOnSignature
 */ /**
 * @typedef {Object} Options
 * @property {import("./Source.js").AttributionLike} [attributions] Attributions.
 * @property {boolean} [attributionsCollapsible=true] Attributions are collapsible.
 * @property {number} [cacheSize] CacheSize.
 * @property {boolean} [opaque=false] Whether the layer is opaque.
 * @property {number} [tilePixelRatio] TilePixelRatio.
 * @property {import("../proj.js").ProjectionLike} [projection] Projection.
 * @property {import("./Source.js").State} [state] State.
 * @property {import("../tilegrid/TileGrid.js").default} [tileGrid] TileGrid.
 * @property {boolean} [wrapX=false] WrapX.
 * @property {number} [transition] Transition.
 * @property {string} [key] Key.
 * @property {number|import("../array.js").NearestDirectionFunction} [zDirection=0] ZDirection.
 * @property {boolean} [interpolate=false] Use interpolated values when resampling.  By default,
 * the nearest neighbor is used when resampling.
 */ /**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * Base class for sources providing images divided into a tile grid.
 * @abstract
 * @api
 */ class TileSource extends (0, _sourceJsDefault.default) {
    /**
   * @param {Options} options SourceTile source options.
   */ constructor(options){
        super({
            attributions: options.attributions,
            attributionsCollapsible: options.attributionsCollapsible,
            projection: options.projection,
            state: options.state,
            wrapX: options.wrapX,
            interpolate: options.interpolate
        });
        /***
     * @type {TileSourceOnSignature<import("../events").EventsKey>}
     */ this.on;
        /***
     * @type {TileSourceOnSignature<import("../events").EventsKey>}
     */ this.once;
        /***
     * @type {TileSourceOnSignature<void>}
     */ this.un;
        /**
     * @private
     * @type {boolean}
     */ this.opaque_ = options.opaque !== undefined ? options.opaque : false;
        /**
     * @private
     * @type {number}
     */ this.tilePixelRatio_ = options.tilePixelRatio !== undefined ? options.tilePixelRatio : 1;
        /**
     * @type {import("../tilegrid/TileGrid.js").default|null}
     */ this.tileGrid = options.tileGrid !== undefined ? options.tileGrid : null;
        const tileSize = [
            256,
            256
        ];
        if (this.tileGrid) (0, _sizeJs.toSize)(this.tileGrid.getTileSize(this.tileGrid.getMinZoom()), tileSize);
        /**
     * @protected
     * @type {import("../TileCache.js").default}
     */ this.tileCache = new (0, _tileCacheJsDefault.default)(options.cacheSize || 0);
        /**
     * @protected
     * @type {import("../size.js").Size}
     */ this.tmpSize = [
            0,
            0
        ];
        /**
     * @private
     * @type {string}
     */ this.key_ = options.key || "";
        /**
     * @protected
     * @type {import("../Tile.js").Options}
     */ this.tileOptions = {
            transition: options.transition,
            interpolate: options.interpolate
        };
        /**
     * zDirection hint, read by the renderer. Indicates which resolution should be used
     * by a renderer if the views resolution does not match any resolution of the tile source.
     * If 0, the nearest resolution will be used. If 1, the nearest lower resolution
     * will be used. If -1, the nearest higher resolution will be used.
     * @type {number|import("../array.js").NearestDirectionFunction}
     */ this.zDirection = options.zDirection ? options.zDirection : 0;
    }
    /**
   * @return {boolean} Can expire cache.
   */ canExpireCache() {
        return this.tileCache.canExpireCache();
    }
    /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @param {!Object<string, boolean>} usedTiles Used tiles.
   */ expireCache(projection, usedTiles) {
        const tileCache = this.getTileCacheForProjection(projection);
        if (tileCache) tileCache.expireCache(usedTiles);
    }
    /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @param {number} z Zoom level.
   * @param {import("../TileRange.js").default} tileRange Tile range.
   * @param {function(import("../Tile.js").default):(boolean|void)} callback Called with each
   *     loaded tile.  If the callback returns `false`, the tile will not be
   *     considered loaded.
   * @return {boolean} The tile range is fully covered with loaded tiles.
   */ forEachLoadedTile(projection, z, tileRange, callback) {
        const tileCache = this.getTileCacheForProjection(projection);
        if (!tileCache) return false;
        let covered = true;
        let tile, tileCoordKey, loaded;
        for(let x = tileRange.minX; x <= tileRange.maxX; ++x)for(let y = tileRange.minY; y <= tileRange.maxY; ++y){
            tileCoordKey = (0, _tilecoordJs.getKeyZXY)(z, x, y);
            loaded = false;
            if (tileCache.containsKey(tileCoordKey)) {
                tile = /** @type {!import("../Tile.js").default} */ tileCache.get(tileCoordKey);
                loaded = tile.getState() === (0, _tileStateJsDefault.default).LOADED;
                if (loaded) loaded = callback(tile) !== false;
            }
            if (!loaded) covered = false;
        }
        return covered;
    }
    /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {number} Gutter.
   */ getGutterForProjection(projection) {
        return 0;
    }
    /**
   * Return the key to be used for all tiles in the source.
   * @return {string} The key for all tiles.
   */ getKey() {
        return this.key_;
    }
    /**
   * Set the value to be used as the key for all tiles in the source.
   * @param {string} key The key for tiles.
   * @protected
   */ setKey(key) {
        if (this.key_ !== key) {
            this.key_ = key;
            this.changed();
        }
    }
    /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {boolean} Opaque.
   */ getOpaque(projection) {
        return this.opaque_;
    }
    /**
   * @param {import("../proj/Projection").default} [projection] Projection.
   * @return {Array<number>|null} Resolutions.
   */ getResolutions(projection) {
        const tileGrid = projection ? this.getTileGridForProjection(projection) : this.tileGrid;
        if (!tileGrid) return null;
        return tileGrid.getResolutions();
    }
    /**
   * @abstract
   * @param {number} z Tile coordinate z.
   * @param {number} x Tile coordinate x.
   * @param {number} y Tile coordinate y.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {!import("../Tile.js").default} Tile.
   */ getTile(z, x, y, pixelRatio, projection) {
        return (0, _utilJs.abstract)();
    }
    /**
   * Return the tile grid of the tile source.
   * @return {import("../tilegrid/TileGrid.js").default|null} Tile grid.
   * @api
   */ getTileGrid() {
        return this.tileGrid;
    }
    /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {!import("../tilegrid/TileGrid.js").default} Tile grid.
   */ getTileGridForProjection(projection) {
        if (!this.tileGrid) return (0, _tilegridJs.getForProjection)(projection);
        return this.tileGrid;
    }
    /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {import("../TileCache.js").default} Tile cache.
   * @protected
   */ getTileCacheForProjection(projection) {
        const sourceProjection = this.getProjection();
        (0, _assertsJs.assert)(sourceProjection === null || (0, _projJs.equivalent)(sourceProjection, projection), 68 // A VectorTile source can only be rendered if it has a projection compatible with the view projection.
        );
        return this.tileCache;
    }
    /**
   * Get the tile pixel ratio for this source. Subclasses may override this
   * method, which is meant to return a supported pixel ratio that matches the
   * provided `pixelRatio` as close as possible.
   * @param {number} pixelRatio Pixel ratio.
   * @return {number} Tile pixel ratio.
   */ getTilePixelRatio(pixelRatio) {
        return this.tilePixelRatio_;
    }
    /**
   * @param {number} z Z.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {import("../size.js").Size} Tile size.
   */ getTilePixelSize(z, pixelRatio, projection) {
        const tileGrid = this.getTileGridForProjection(projection);
        const tilePixelRatio = this.getTilePixelRatio(pixelRatio);
        const tileSize = (0, _sizeJs.toSize)(tileGrid.getTileSize(z), this.tmpSize);
        if (tilePixelRatio == 1) return tileSize;
        return (0, _sizeJs.scale)(tileSize, tilePixelRatio, this.tmpSize);
    }
    /**
   * Returns a tile coordinate wrapped around the x-axis. When the tile coordinate
   * is outside the resolution and extent range of the tile grid, `null` will be
   * returned.
   * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @param {import("../proj/Projection.js").default} [projection] Projection.
   * @return {import("../tilecoord.js").TileCoord} Tile coordinate to be passed to the tileUrlFunction or
   *     null if no tile URL should be created for the passed `tileCoord`.
   */ getTileCoordForTileUrlFunction(tileCoord, projection) {
        projection = projection !== undefined ? projection : this.getProjection();
        const tileGrid = this.getTileGridForProjection(projection);
        if (this.getWrapX() && projection.isGlobal()) tileCoord = (0, _tilegridJs.wrapX)(tileGrid, tileCoord, projection);
        return (0, _tilecoordJs.withinExtentAndZ)(tileCoord, tileGrid) ? tileCoord : null;
    }
    /**
   * Remove all cached tiles from the source. The next render cycle will fetch new tiles.
   * @api
   */ clear() {
        this.tileCache.clear();
    }
    refresh() {
        this.clear();
        super.refresh();
    }
    /**
   * Increases the cache size if needed
   * @param {number} tileCount Minimum number of tiles needed.
   * @param {import("../proj/Projection.js").default} projection Projection.
   */ updateCacheSize(tileCount, projection) {
        const tileCache = this.getTileCacheForProjection(projection);
        if (tileCount > tileCache.highWaterMark) tileCache.highWaterMark = tileCount;
    }
    /**
   * Marks a tile coord as being used, without triggering a load.
   * @abstract
   * @param {number} z Tile coordinate z.
   * @param {number} x Tile coordinate x.
   * @param {number} y Tile coordinate y.
   * @param {import("../proj/Projection.js").default} projection Projection.
   */ useTile(z, x, y, projection) {}
}
class TileSourceEvent extends (0, _eventJsDefault.default) {
    /**
   * @param {string} type Type.
   * @param {import("../Tile.js").default} tile The tile.
   */ constructor(type, tile){
        super(type);
        /**
     * The tile related to the event.
     * @type {import("../Tile.js").default}
     * @api
     */ this.tile = tile;
    }
}
exports.default = TileSource;

},{"../events/Event.js":"hwXQP","./Source.js":"bgZ4G","../TileCache.js":"3AgyC","../TileState.js":"2fodI","../util.js":"pLBjQ","../asserts.js":"e4TiF","../proj.js":"SznqC","../tilecoord.js":"bZ2LT","../tilegrid.js":"1Yr4i","../size.js":"lKEPe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bgZ4G":[function(require,module,exports) {
/**
 * @module ol/source/Source
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _objectJs = require("../Object.js");
var _objectJsDefault = parcelHelpers.interopDefault(_objectJs);
var _projJs = require("../proj.js");
/**
 * @typedef {'undefined' | 'loading' | 'ready' | 'error'} State
 * State of the source, one of 'undefined', 'loading', 'ready' or 'error'.
 */ /**
 * A function that takes a {@link import("../View.js").ViewStateAndExtent} and returns a string or
 * an array of strings representing source attributions.
 *
 * @typedef {function(import("../View.js").ViewStateAndExtent): (string|Array<string>)} Attribution
 */ /**
 * A type that can be used to provide attribution information for data sources.
 *
 * It represents either
 * * a simple string (e.g. `'© Acme Inc.'`)
 * * an array of simple strings (e.g. `['© Acme Inc.', '© Bacme Inc.']`)
 * * a function that returns a string or array of strings ({@link module:ol/source/Source~Attribution})
 *
 * @typedef {string|Array<string>|Attribution} AttributionLike
 */ /**
 * @typedef {Object} Options
 * @property {AttributionLike} [attributions] Attributions.
 * @property {boolean} [attributionsCollapsible=true] Attributions are collapsible.
 * @property {import("../proj.js").ProjectionLike} [projection] Projection. Default is the view projection.
 * @property {import("./Source.js").State} [state='ready'] State.
 * @property {boolean} [wrapX=false] WrapX.
 * @property {boolean} [interpolate=false] Use interpolated values when resampling.  By default,
 * the nearest neighbor is used when resampling.
 */ /**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * Base class for {@link module:ol/layer/Layer~Layer} sources.
 *
 * A generic `change` event is triggered when the state of the source changes.
 * @abstract
 * @api
 */ class Source extends (0, _objectJsDefault.default) {
    /**
   * @param {Options} options Source options.
   */ constructor(options){
        super();
        /**
     * @protected
     * @type {import("../proj/Projection.js").default|null}
     */ this.projection = (0, _projJs.get)(options.projection);
        /**
     * @private
     * @type {?Attribution}
     */ this.attributions_ = adaptAttributions(options.attributions);
        /**
     * @private
     * @type {boolean}
     */ this.attributionsCollapsible_ = options.attributionsCollapsible !== undefined ? options.attributionsCollapsible : true;
        /**
     * This source is currently loading data. Sources that defer loading to the
     * map's tile queue never set this to `true`.
     * @type {boolean}
     */ this.loading = false;
        /**
     * @private
     * @type {import("./Source.js").State}
     */ this.state_ = options.state !== undefined ? options.state : "ready";
        /**
     * @private
     * @type {boolean}
     */ this.wrapX_ = options.wrapX !== undefined ? options.wrapX : false;
        /**
     * @private
     * @type {boolean}
     */ this.interpolate_ = !!options.interpolate;
        /**
     * @protected
     * @type {function(import("../View.js").ViewOptions):void}
     */ this.viewResolver = null;
        /**
     * @protected
     * @type {function(Error):void}
     */ this.viewRejector = null;
        const self = this;
        /**
     * @private
     * @type {Promise<import("../View.js").ViewOptions>}
     */ this.viewPromise_ = new Promise(function(resolve, reject) {
            self.viewResolver = resolve;
            self.viewRejector = reject;
        });
    }
    /**
   * Get the attribution function for the source.
   * @return {?Attribution} Attribution function.
   * @api
   */ getAttributions() {
        return this.attributions_;
    }
    /**
   * @return {boolean} Attributions are collapsible.
   * @api
   */ getAttributionsCollapsible() {
        return this.attributionsCollapsible_;
    }
    /**
   * Get the projection of the source.
   * @return {import("../proj/Projection.js").default|null} Projection.
   * @api
   */ getProjection() {
        return this.projection;
    }
    /**
   * @param {import("../proj/Projection").default} [projection] Projection.
   * @return {Array<number>|null} Resolutions.
   */ getResolutions(projection) {
        return null;
    }
    /**
   * @return {Promise<import("../View.js").ViewOptions>} A promise for view-related properties.
   */ getView() {
        return this.viewPromise_;
    }
    /**
   * Get the state of the source, see {@link import("./Source.js").State} for possible states.
   * @return {import("./Source.js").State} State.
   * @api
   */ getState() {
        return this.state_;
    }
    /**
   * @return {boolean|undefined} Wrap X.
   */ getWrapX() {
        return this.wrapX_;
    }
    /**
   * @return {boolean} Use linear interpolation when resampling.
   */ getInterpolate() {
        return this.interpolate_;
    }
    /**
   * Refreshes the source. The source will be cleared, and data from the server will be reloaded.
   * @api
   */ refresh() {
        this.changed();
    }
    /**
   * Set the attributions of the source.
   * @param {AttributionLike|undefined} attributions Attributions.
   *     Can be passed as `string`, `Array<string>`, {@link module:ol/source/Source~Attribution},
   *     or `undefined`.
   * @api
   */ setAttributions(attributions) {
        this.attributions_ = adaptAttributions(attributions);
        this.changed();
    }
    /**
   * Set the state of the source.
   * @param {import("./Source.js").State} state State.
   */ setState(state) {
        this.state_ = state;
        this.changed();
    }
}
/**
 * Turns the attributions option into an attributions function.
 * @param {AttributionLike|undefined} attributionLike The attribution option.
 * @return {Attribution|null} An attribution function (or null).
 */ function adaptAttributions(attributionLike) {
    if (!attributionLike) return null;
    if (Array.isArray(attributionLike)) return function(frameState) {
        return attributionLike;
    };
    if (typeof attributionLike === "function") return attributionLike;
    return function(frameState) {
        return [
            attributionLike
        ];
    };
}
exports.default = Source;

},{"../Object.js":"1zG8z","../proj.js":"SznqC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Yr4i":[function(require,module,exports) {
/**
 * @module ol/tilegrid
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @param {import("./proj/Projection.js").default} projection Projection.
 * @return {!TileGrid} Default tile grid for the
 * passed projection.
 */ parcelHelpers.export(exports, "getForProjection", ()=>getForProjection);
/**
 * @param {TileGrid} tileGrid Tile grid.
 * @param {import("./tilecoord.js").TileCoord} tileCoord Tile coordinate.
 * @param {import("./proj/Projection.js").default} projection Projection.
 * @return {import("./tilecoord.js").TileCoord} Tile coordinate.
 */ parcelHelpers.export(exports, "wrapX", ()=>wrapX);
/**
 * @param {import("./extent.js").Extent} extent Extent.
 * @param {number} [maxZoom] Maximum zoom level (default is
 *     DEFAULT_MAX_ZOOM).
 * @param {number|import("./size.js").Size} [tileSize] Tile size (default uses
 *     DEFAULT_TILE_SIZE).
 * @param {import("./extent.js").Corner} [corner] Extent corner (default is `'top-left'`).
 * @return {!TileGrid} TileGrid instance.
 */ parcelHelpers.export(exports, "createForExtent", ()=>createForExtent);
/**
 * @typedef {Object} XYZOptions
 * @property {import("./extent.js").Extent} [extent] Extent for the tile grid. The origin for an XYZ tile grid is the
 * top-left corner of the extent. If `maxResolution` is not provided the zero level of the grid is defined by the resolution
 * at which one tile fits in the provided extent. If not provided, the extent of the EPSG:3857 projection is used.
 * @property {number} [maxResolution] Resolution at level zero.
 * @property {number} [maxZoom] Maximum zoom. The default is `42`. This determines the number of levels
 * in the grid set. For example, a `maxZoom` of 21 means there are 22 levels in the grid set.
 * @property {number} [minZoom=0] Minimum zoom.
 * @property {number|import("./size.js").Size} [tileSize=[256, 256]] Tile size in pixels.
 */ /**
 * Creates a tile grid with a standard XYZ tiling scheme.
 * @param {XYZOptions} [options] Tile grid options.
 * @return {!TileGrid} Tile grid instance.
 * @api
 */ parcelHelpers.export(exports, "createXYZ", ()=>createXYZ);
/**
 * @param {import("./proj.js").ProjectionLike} projection Projection.
 * @param {number} [maxZoom] Maximum zoom level (default is
 *     DEFAULT_MAX_ZOOM).
 * @param {number|import("./size.js").Size} [tileSize] Tile size (default uses
 *     DEFAULT_TILE_SIZE).
 * @param {import("./extent.js").Corner} [corner] Extent corner (default is `'top-left'`).
 * @return {!TileGrid} TileGrid instance.
 */ parcelHelpers.export(exports, "createForProjection", ()=>createForProjection);
/**
 * Generate a tile grid extent from a projection.  If the projection has an
 * extent, it is used.  If not, a global extent is assumed.
 * @param {import("./proj.js").ProjectionLike} projection Projection.
 * @return {import("./extent.js").Extent} Extent.
 */ parcelHelpers.export(exports, "extentFromProjection", ()=>extentFromProjection);
var _tileGridJs = require("./tilegrid/TileGrid.js");
var _tileGridJsDefault = parcelHelpers.interopDefault(_tileGridJs);
var _commonJs = require("./tilegrid/common.js");
var _projJs = require("./proj.js");
var _extentJs = require("./extent.js");
var _sizeJs = require("./size.js");
function getForProjection(projection) {
    let tileGrid = projection.getDefaultTileGrid();
    if (!tileGrid) {
        tileGrid = createForProjection(projection);
        projection.setDefaultTileGrid(tileGrid);
    }
    return tileGrid;
}
function wrapX(tileGrid, tileCoord, projection) {
    const z = tileCoord[0];
    const center = tileGrid.getTileCoordCenter(tileCoord);
    const projectionExtent = extentFromProjection(projection);
    if (!(0, _extentJs.containsCoordinate)(projectionExtent, center)) {
        const worldWidth = (0, _extentJs.getWidth)(projectionExtent);
        const worldsAway = Math.ceil((projectionExtent[0] - center[0]) / worldWidth);
        center[0] += worldWidth * worldsAway;
        return tileGrid.getTileCoordForCoordAndZ(center, z);
    }
    return tileCoord;
}
function createForExtent(extent, maxZoom, tileSize, corner) {
    corner = corner !== undefined ? corner : "top-left";
    const resolutions = resolutionsFromExtent(extent, maxZoom, tileSize);
    return new (0, _tileGridJsDefault.default)({
        extent: extent,
        origin: (0, _extentJs.getCorner)(extent, corner),
        resolutions: resolutions,
        tileSize: tileSize
    });
}
function createXYZ(options) {
    const xyzOptions = options || {};
    const extent = xyzOptions.extent || (0, _projJs.get)("EPSG:3857").getExtent();
    const gridOptions = {
        extent: extent,
        minZoom: xyzOptions.minZoom,
        tileSize: xyzOptions.tileSize,
        resolutions: resolutionsFromExtent(extent, xyzOptions.maxZoom, xyzOptions.tileSize, xyzOptions.maxResolution)
    };
    return new (0, _tileGridJsDefault.default)(gridOptions);
}
/**
 * Create a resolutions array from an extent.  A zoom factor of 2 is assumed.
 * @param {import("./extent.js").Extent} extent Extent.
 * @param {number} [maxZoom] Maximum zoom level (default is
 *     DEFAULT_MAX_ZOOM).
 * @param {number|import("./size.js").Size} [tileSize] Tile size (default uses
 *     DEFAULT_TILE_SIZE).
 * @param {number} [maxResolution] Resolution at level zero.
 * @return {!Array<number>} Resolutions array.
 */ function resolutionsFromExtent(extent, maxZoom, tileSize, maxResolution) {
    maxZoom = maxZoom !== undefined ? maxZoom : (0, _commonJs.DEFAULT_MAX_ZOOM);
    tileSize = (0, _sizeJs.toSize)(tileSize !== undefined ? tileSize : (0, _commonJs.DEFAULT_TILE_SIZE));
    const height = (0, _extentJs.getHeight)(extent);
    const width = (0, _extentJs.getWidth)(extent);
    maxResolution = maxResolution > 0 ? maxResolution : Math.max(width / tileSize[0], height / tileSize[1]);
    const length = maxZoom + 1;
    const resolutions = new Array(length);
    for(let z = 0; z < length; ++z)resolutions[z] = maxResolution / Math.pow(2, z);
    return resolutions;
}
function createForProjection(projection, maxZoom, tileSize, corner) {
    const extent = extentFromProjection(projection);
    return createForExtent(extent, maxZoom, tileSize, corner);
}
function extentFromProjection(projection) {
    projection = (0, _projJs.get)(projection);
    let extent = projection.getExtent();
    if (!extent) {
        const half = 180 * (0, _projJs.METERS_PER_UNIT).degrees / projection.getMetersPerUnit();
        extent = (0, _extentJs.createOrUpdate)(-half, -half, half, half);
    }
    return extent;
}

},{"./tilegrid/TileGrid.js":"cZOJJ","./tilegrid/common.js":"bxYGl","./proj.js":"SznqC","./extent.js":"6YrVc","./size.js":"lKEPe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cZOJJ":[function(require,module,exports) {
/**
 * @module ol/tilegrid/TileGrid
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _tileRangeJs = require("../TileRange.js");
var _tileRangeJsDefault = parcelHelpers.interopDefault(_tileRangeJs);
var _commonJs = require("./common.js");
var _assertsJs = require("../asserts.js");
var _mathJs = require("../math.js");
var _extentJs = require("../extent.js");
var _tilecoordJs = require("../tilecoord.js");
var _intersectsextentJs = require("../geom/flat/intersectsextent.js");
var _arrayJs = require("../array.js");
var _sizeJs = require("../size.js");
/**
 * @private
 * @type {import("../tilecoord.js").TileCoord}
 */ const tmpTileCoord = [
    0,
    0,
    0
];
/**
 * Number of decimal digits to consider in integer values when rounding.
 * @type {number}
 */ const DECIMALS = 5;
/**
 * @typedef {Object} Options
 * @property {import("../extent.js").Extent} [extent] Extent for the tile grid. No tiles outside this
 * extent will be requested by {@link module:ol/source/Tile~TileSource} sources. When no `origin` or
 * `origins` are configured, the `origin` will be set to the top-left corner of the extent.
 * @property {number} [minZoom=0] Minimum zoom.
 * @property {import("../coordinate.js").Coordinate} [origin] The tile grid origin, i.e. where the `x`
 * and `y` axes meet (`[z, 0, 0]`). Tile coordinates increase left to right and downwards. If not
 * specified, `extent` or `origins` must be provided.
 * @property {Array<import("../coordinate.js").Coordinate>} [origins] Tile grid origins, i.e. where
 * the `x` and `y` axes meet (`[z, 0, 0]`), for each zoom level. If given, the array length
 * should match the length of the `resolutions` array, i.e. each resolution can have a different
 * origin. Tile coordinates increase left to right and downwards. If not specified, `extent` or
 * `origin` must be provided.
 * @property {!Array<number>} resolutions Resolutions. The array index of each resolution needs
 * to match the zoom level. This means that even if a `minZoom` is configured, the resolutions
 * array will have a length of `maxZoom + 1`.
 * @property {Array<import("../size.js").Size>} [sizes] Number of tile rows and columns
 * of the grid for each zoom level. If specified the values
 * define each zoom level's extent together with the `origin` or `origins`.
 * A grid `extent` can be configured in addition, and will further limit the extent
 * for which tile requests are made by sources. If the bottom-left corner of
 * an extent is used as `origin` or `origins`, then the `y` value must be
 * negative because OpenLayers tile coordinates use the top left as the origin.
 * @property {number|import("../size.js").Size} [tileSize] Tile size.
 * Default is `[256, 256]`.
 * @property {Array<number|import("../size.js").Size>} [tileSizes] Tile sizes. If given, the array length
 * should match the length of the `resolutions` array, i.e. each resolution can have a different
 * tile size.
 */ /**
 * @classdesc
 * Base class for setting the grid pattern for sources accessing tiled-image
 * servers.
 * @api
 */ class TileGrid {
    /**
   * @param {Options} options Tile grid options.
   */ constructor(options){
        /**
     * @protected
     * @type {number}
     */ this.minZoom = options.minZoom !== undefined ? options.minZoom : 0;
        /**
     * @private
     * @type {!Array<number>}
     */ this.resolutions_ = options.resolutions;
        (0, _assertsJs.assert)((0, _arrayJs.isSorted)(this.resolutions_, function(a, b) {
            return b - a;
        }, true), 17); // `resolutions` must be sorted in descending order
        // check if we've got a consistent zoom factor and origin
        let zoomFactor;
        if (!options.origins) for(let i = 0, ii = this.resolutions_.length - 1; i < ii; ++i){
            if (!zoomFactor) zoomFactor = this.resolutions_[i] / this.resolutions_[i + 1];
            else if (this.resolutions_[i] / this.resolutions_[i + 1] !== zoomFactor) {
                zoomFactor = undefined;
                break;
            }
        }
        /**
     * @private
     * @type {number|undefined}
     */ this.zoomFactor_ = zoomFactor;
        /**
     * @protected
     * @type {number}
     */ this.maxZoom = this.resolutions_.length - 1;
        /**
     * @private
     * @type {import("../coordinate.js").Coordinate|null}
     */ this.origin_ = options.origin !== undefined ? options.origin : null;
        /**
     * @private
     * @type {Array<import("../coordinate.js").Coordinate>}
     */ this.origins_ = null;
        if (options.origins !== undefined) {
            this.origins_ = options.origins;
            (0, _assertsJs.assert)(this.origins_.length == this.resolutions_.length, 20); // Number of `origins` and `resolutions` must be equal
        }
        const extent = options.extent;
        if (extent !== undefined && !this.origin_ && !this.origins_) this.origin_ = (0, _extentJs.getTopLeft)(extent);
        (0, _assertsJs.assert)(!this.origin_ && this.origins_ || this.origin_ && !this.origins_, 18); // Either `origin` or `origins` must be configured, never both
        /**
     * @private
     * @type {Array<number|import("../size.js").Size>}
     */ this.tileSizes_ = null;
        if (options.tileSizes !== undefined) {
            this.tileSizes_ = options.tileSizes;
            (0, _assertsJs.assert)(this.tileSizes_.length == this.resolutions_.length, 19); // Number of `tileSizes` and `resolutions` must be equal
        }
        /**
     * @private
     * @type {number|import("../size.js").Size}
     */ this.tileSize_ = options.tileSize !== undefined ? options.tileSize : !this.tileSizes_ ? (0, _commonJs.DEFAULT_TILE_SIZE) : null;
        (0, _assertsJs.assert)(!this.tileSize_ && this.tileSizes_ || this.tileSize_ && !this.tileSizes_, 22); // Either `tileSize` or `tileSizes` must be configured, never both
        /**
     * @private
     * @type {import("../extent.js").Extent}
     */ this.extent_ = extent !== undefined ? extent : null;
        /**
     * @private
     * @type {Array<import("../TileRange.js").default>}
     */ this.fullTileRanges_ = null;
        /**
     * @private
     * @type {import("../size.js").Size}
     */ this.tmpSize_ = [
            0,
            0
        ];
        /**
     * @private
     * @type {import("../extent.js").Extent}
     */ this.tmpExtent_ = [
            0,
            0,
            0,
            0
        ];
        if (options.sizes !== undefined) this.fullTileRanges_ = options.sizes.map(function(size, z) {
            const tileRange = new (0, _tileRangeJsDefault.default)(Math.min(0, size[0]), Math.max(size[0] - 1, -1), Math.min(0, size[1]), Math.max(size[1] - 1, -1));
            if (extent) {
                const restrictedTileRange = this.getTileRangeForExtentAndZ(extent, z);
                tileRange.minX = Math.max(restrictedTileRange.minX, tileRange.minX);
                tileRange.maxX = Math.min(restrictedTileRange.maxX, tileRange.maxX);
                tileRange.minY = Math.max(restrictedTileRange.minY, tileRange.minY);
                tileRange.maxY = Math.min(restrictedTileRange.maxY, tileRange.maxY);
            }
            return tileRange;
        }, this);
        else if (extent) this.calculateTileRanges_(extent);
    }
    /**
   * Call a function with each tile coordinate for a given extent and zoom level.
   *
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {number} zoom Integer zoom level.
   * @param {function(import("../tilecoord.js").TileCoord): void} callback Function called with each tile coordinate.
   * @api
   */ forEachTileCoord(extent, zoom, callback) {
        const tileRange = this.getTileRangeForExtentAndZ(extent, zoom);
        for(let i = tileRange.minX, ii = tileRange.maxX; i <= ii; ++i)for(let j = tileRange.minY, jj = tileRange.maxY; j <= jj; ++j)callback([
            zoom,
            i,
            j
        ]);
    }
    /**
   * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @param {function(number, import("../TileRange.js").default): boolean} callback Callback.
   * @param {import("../TileRange.js").default} [tempTileRange] Temporary import("../TileRange.js").default object.
   * @param {import("../extent.js").Extent} [tempExtent] Temporary import("../extent.js").Extent object.
   * @return {boolean} Callback succeeded.
   */ forEachTileCoordParentTileRange(tileCoord, callback, tempTileRange, tempExtent) {
        let tileRange, x, y;
        let tileCoordExtent = null;
        let z = tileCoord[0] - 1;
        if (this.zoomFactor_ === 2) {
            x = tileCoord[1];
            y = tileCoord[2];
        } else tileCoordExtent = this.getTileCoordExtent(tileCoord, tempExtent);
        while(z >= this.minZoom){
            if (this.zoomFactor_ === 2) {
                x = Math.floor(x / 2);
                y = Math.floor(y / 2);
                tileRange = (0, _tileRangeJs.createOrUpdate)(x, x, y, y, tempTileRange);
            } else tileRange = this.getTileRangeForExtentAndZ(tileCoordExtent, z, tempTileRange);
            if (callback(z, tileRange)) return true;
            --z;
        }
        return false;
    }
    /**
   * Get the extent for this tile grid, if it was configured.
   * @return {import("../extent.js").Extent} Extent.
   * @api
   */ getExtent() {
        return this.extent_;
    }
    /**
   * Get the maximum zoom level for the grid.
   * @return {number} Max zoom.
   * @api
   */ getMaxZoom() {
        return this.maxZoom;
    }
    /**
   * Get the minimum zoom level for the grid.
   * @return {number} Min zoom.
   * @api
   */ getMinZoom() {
        return this.minZoom;
    }
    /**
   * Get the origin for the grid at the given zoom level.
   * @param {number} z Integer zoom level.
   * @return {import("../coordinate.js").Coordinate} Origin.
   * @api
   */ getOrigin(z) {
        if (this.origin_) return this.origin_;
        return this.origins_[z];
    }
    /**
   * Get the resolution for the given zoom level.
   * @param {number} z Integer zoom level.
   * @return {number} Resolution.
   * @api
   */ getResolution(z) {
        return this.resolutions_[z];
    }
    /**
   * Get the list of resolutions for the tile grid.
   * @return {Array<number>} Resolutions.
   * @api
   */ getResolutions() {
        return this.resolutions_;
    }
    /**
   * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @param {import("../TileRange.js").default} [tempTileRange] Temporary import("../TileRange.js").default object.
   * @param {import("../extent.js").Extent} [tempExtent] Temporary import("../extent.js").Extent object.
   * @return {import("../TileRange.js").default|null} Tile range.
   */ getTileCoordChildTileRange(tileCoord, tempTileRange, tempExtent) {
        if (tileCoord[0] < this.maxZoom) {
            if (this.zoomFactor_ === 2) {
                const minX = tileCoord[1] * 2;
                const minY = tileCoord[2] * 2;
                return (0, _tileRangeJs.createOrUpdate)(minX, minX + 1, minY, minY + 1, tempTileRange);
            }
            const tileCoordExtent = this.getTileCoordExtent(tileCoord, tempExtent || this.tmpExtent_);
            return this.getTileRangeForExtentAndZ(tileCoordExtent, tileCoord[0] + 1, tempTileRange);
        }
        return null;
    }
    /**
   * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @param {number} z Integer zoom level.
   * @param {import("../TileRange.js").default} [tempTileRange] Temporary import("../TileRange.js").default object.
   * @return {import("../TileRange.js").default|null} Tile range.
   */ getTileRangeForTileCoordAndZ(tileCoord, z, tempTileRange) {
        if (z > this.maxZoom || z < this.minZoom) return null;
        const tileCoordZ = tileCoord[0];
        const tileCoordX = tileCoord[1];
        const tileCoordY = tileCoord[2];
        if (z === tileCoordZ) return (0, _tileRangeJs.createOrUpdate)(tileCoordX, tileCoordY, tileCoordX, tileCoordY, tempTileRange);
        if (this.zoomFactor_) {
            const factor = Math.pow(this.zoomFactor_, z - tileCoordZ);
            const minX = Math.floor(tileCoordX * factor);
            const minY = Math.floor(tileCoordY * factor);
            if (z < tileCoordZ) return (0, _tileRangeJs.createOrUpdate)(minX, minX, minY, minY, tempTileRange);
            const maxX = Math.floor(factor * (tileCoordX + 1)) - 1;
            const maxY = Math.floor(factor * (tileCoordY + 1)) - 1;
            return (0, _tileRangeJs.createOrUpdate)(minX, maxX, minY, maxY, tempTileRange);
        }
        const tileCoordExtent = this.getTileCoordExtent(tileCoord, this.tmpExtent_);
        return this.getTileRangeForExtentAndZ(tileCoordExtent, z, tempTileRange);
    }
    /**
   * Get the extent for a tile range.
   * @param {number} z Integer zoom level.
   * @param {import("../TileRange.js").default} tileRange Tile range.
   * @param {import("../extent.js").Extent} [tempExtent] Temporary import("../extent.js").Extent object.
   * @return {import("../extent.js").Extent} Extent.
   */ getTileRangeExtent(z, tileRange, tempExtent) {
        const origin = this.getOrigin(z);
        const resolution = this.getResolution(z);
        const tileSize = (0, _sizeJs.toSize)(this.getTileSize(z), this.tmpSize_);
        const minX = origin[0] + tileRange.minX * tileSize[0] * resolution;
        const maxX = origin[0] + (tileRange.maxX + 1) * tileSize[0] * resolution;
        const minY = origin[1] + tileRange.minY * tileSize[1] * resolution;
        const maxY = origin[1] + (tileRange.maxY + 1) * tileSize[1] * resolution;
        return (0, _extentJs.createOrUpdate)(minX, minY, maxX, maxY, tempExtent);
    }
    /**
   * Get a tile range for the given extent and integer zoom level.
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {number} z Integer zoom level.
   * @param {import("../TileRange.js").default} [tempTileRange] Temporary tile range object.
   * @return {import("../TileRange.js").default} Tile range.
   */ getTileRangeForExtentAndZ(extent, z, tempTileRange) {
        this.getTileCoordForXYAndZ_(extent[0], extent[3], z, false, tmpTileCoord);
        const minX = tmpTileCoord[1];
        const minY = tmpTileCoord[2];
        this.getTileCoordForXYAndZ_(extent[2], extent[1], z, true, tmpTileCoord);
        const maxX = tmpTileCoord[1];
        const maxY = tmpTileCoord[2];
        return (0, _tileRangeJs.createOrUpdate)(minX, maxX, minY, maxY, tempTileRange);
    }
    /**
   * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @return {import("../coordinate.js").Coordinate} Tile center.
   */ getTileCoordCenter(tileCoord) {
        const origin = this.getOrigin(tileCoord[0]);
        const resolution = this.getResolution(tileCoord[0]);
        const tileSize = (0, _sizeJs.toSize)(this.getTileSize(tileCoord[0]), this.tmpSize_);
        return [
            origin[0] + (tileCoord[1] + 0.5) * tileSize[0] * resolution,
            origin[1] - (tileCoord[2] + 0.5) * tileSize[1] * resolution
        ];
    }
    /**
   * Get the extent of a tile coordinate.
   *
   * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @param {import("../extent.js").Extent} [tempExtent] Temporary extent object.
   * @return {import("../extent.js").Extent} Extent.
   * @api
   */ getTileCoordExtent(tileCoord, tempExtent) {
        const origin = this.getOrigin(tileCoord[0]);
        const resolution = this.getResolution(tileCoord[0]);
        const tileSize = (0, _sizeJs.toSize)(this.getTileSize(tileCoord[0]), this.tmpSize_);
        const minX = origin[0] + tileCoord[1] * tileSize[0] * resolution;
        const minY = origin[1] - (tileCoord[2] + 1) * tileSize[1] * resolution;
        const maxX = minX + tileSize[0] * resolution;
        const maxY = minY + tileSize[1] * resolution;
        return (0, _extentJs.createOrUpdate)(minX, minY, maxX, maxY, tempExtent);
    }
    /**
   * Get the tile coordinate for the given map coordinate and resolution.  This
   * method considers that coordinates that intersect tile boundaries should be
   * assigned the higher tile coordinate.
   *
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @param {number} resolution Resolution.
   * @param {import("../tilecoord.js").TileCoord} [opt_tileCoord] Destination import("../tilecoord.js").TileCoord object.
   * @return {import("../tilecoord.js").TileCoord} Tile coordinate.
   * @api
   */ getTileCoordForCoordAndResolution(coordinate, resolution, opt_tileCoord) {
        return this.getTileCoordForXYAndResolution_(coordinate[0], coordinate[1], resolution, false, opt_tileCoord);
    }
    /**
   * Note that this method should not be called for resolutions that correspond
   * to an integer zoom level.  Instead call the `getTileCoordForXYAndZ_` method.
   * @param {number} x X.
   * @param {number} y Y.
   * @param {number} resolution Resolution (for a non-integer zoom level).
   * @param {boolean} reverseIntersectionPolicy Instead of letting edge
   *     intersections go to the higher tile coordinate, let edge intersections
   *     go to the lower tile coordinate.
   * @param {import("../tilecoord.js").TileCoord} [opt_tileCoord] Temporary import("../tilecoord.js").TileCoord object.
   * @return {import("../tilecoord.js").TileCoord} Tile coordinate.
   * @private
   */ getTileCoordForXYAndResolution_(x, y, resolution, reverseIntersectionPolicy, opt_tileCoord) {
        const z = this.getZForResolution(resolution);
        const scale = resolution / this.getResolution(z);
        const origin = this.getOrigin(z);
        const tileSize = (0, _sizeJs.toSize)(this.getTileSize(z), this.tmpSize_);
        let tileCoordX = scale * (x - origin[0]) / resolution / tileSize[0];
        let tileCoordY = scale * (origin[1] - y) / resolution / tileSize[1];
        if (reverseIntersectionPolicy) {
            tileCoordX = (0, _mathJs.ceil)(tileCoordX, DECIMALS) - 1;
            tileCoordY = (0, _mathJs.ceil)(tileCoordY, DECIMALS) - 1;
        } else {
            tileCoordX = (0, _mathJs.floor)(tileCoordX, DECIMALS);
            tileCoordY = (0, _mathJs.floor)(tileCoordY, DECIMALS);
        }
        return (0, _tilecoordJs.createOrUpdate)(z, tileCoordX, tileCoordY, opt_tileCoord);
    }
    /**
   * Although there is repetition between this method and `getTileCoordForXYAndResolution_`,
   * they should have separate implementations.  This method is for integer zoom
   * levels.  The other method should only be called for resolutions corresponding
   * to non-integer zoom levels.
   * @param {number} x Map x coordinate.
   * @param {number} y Map y coordinate.
   * @param {number} z Integer zoom level.
   * @param {boolean} reverseIntersectionPolicy Instead of letting edge
   *     intersections go to the higher tile coordinate, let edge intersections
   *     go to the lower tile coordinate.
   * @param {import("../tilecoord.js").TileCoord} [opt_tileCoord] Temporary import("../tilecoord.js").TileCoord object.
   * @return {import("../tilecoord.js").TileCoord} Tile coordinate.
   * @private
   */ getTileCoordForXYAndZ_(x, y, z, reverseIntersectionPolicy, opt_tileCoord) {
        const origin = this.getOrigin(z);
        const resolution = this.getResolution(z);
        const tileSize = (0, _sizeJs.toSize)(this.getTileSize(z), this.tmpSize_);
        let tileCoordX = (x - origin[0]) / resolution / tileSize[0];
        let tileCoordY = (origin[1] - y) / resolution / tileSize[1];
        if (reverseIntersectionPolicy) {
            tileCoordX = (0, _mathJs.ceil)(tileCoordX, DECIMALS) - 1;
            tileCoordY = (0, _mathJs.ceil)(tileCoordY, DECIMALS) - 1;
        } else {
            tileCoordX = (0, _mathJs.floor)(tileCoordX, DECIMALS);
            tileCoordY = (0, _mathJs.floor)(tileCoordY, DECIMALS);
        }
        return (0, _tilecoordJs.createOrUpdate)(z, tileCoordX, tileCoordY, opt_tileCoord);
    }
    /**
   * Get a tile coordinate given a map coordinate and zoom level.
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @param {number} z Zoom level.
   * @param {import("../tilecoord.js").TileCoord} [opt_tileCoord] Destination import("../tilecoord.js").TileCoord object.
   * @return {import("../tilecoord.js").TileCoord} Tile coordinate.
   * @api
   */ getTileCoordForCoordAndZ(coordinate, z, opt_tileCoord) {
        return this.getTileCoordForXYAndZ_(coordinate[0], coordinate[1], z, false, opt_tileCoord);
    }
    /**
   * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @return {number} Tile resolution.
   */ getTileCoordResolution(tileCoord) {
        return this.resolutions_[tileCoord[0]];
    }
    /**
   * Get the tile size for a zoom level. The type of the return value matches the
   * `tileSize` or `tileSizes` that the tile grid was configured with. To always
   * get an {@link import("../size.js").Size}, run the result through {@link module:ol/size.toSize}.
   * @param {number} z Z.
   * @return {number|import("../size.js").Size} Tile size.
   * @api
   */ getTileSize(z) {
        if (this.tileSize_) return this.tileSize_;
        return this.tileSizes_[z];
    }
    /**
   * @param {number} z Zoom level.
   * @return {import("../TileRange.js").default} Extent tile range for the specified zoom level.
   */ getFullTileRange(z) {
        if (!this.fullTileRanges_) return this.extent_ ? this.getTileRangeForExtentAndZ(this.extent_, z) : null;
        return this.fullTileRanges_[z];
    }
    /**
   * @param {number} resolution Resolution.
   * @param {number|import("../array.js").NearestDirectionFunction} [opt_direction]
   *     If 0, the nearest resolution will be used.
   *     If 1, the nearest higher resolution (lower Z) will be used. If -1, the
   *     nearest lower resolution (higher Z) will be used. Default is 0.
   *     Use a {@link module:ol/array~NearestDirectionFunction} for more precise control.
   *
   * For example to change tile Z at the midpoint of zoom levels
   * ```js
   * function(value, high, low) {
   *   return value - low * Math.sqrt(high / low);
   * }
   * ```
   * @return {number} Z.
   * @api
   */ getZForResolution(resolution, opt_direction) {
        const z = (0, _arrayJs.linearFindNearest)(this.resolutions_, resolution, opt_direction || 0);
        return (0, _mathJs.clamp)(z, this.minZoom, this.maxZoom);
    }
    /**
   * The tile with the provided tile coordinate intersects the given viewport.
   * @param {import('../tilecoord.js').TileCoord} tileCoord Tile coordinate.
   * @param {Array<number>} viewport Viewport as returned from {@link module:ol/extent.getRotatedViewport}.
   * @return {boolean} The tile with the provided tile coordinate intersects the given viewport.
   */ tileCoordIntersectsViewport(tileCoord, viewport) {
        return (0, _intersectsextentJs.intersectsLinearRing)(viewport, 0, viewport.length, 2, this.getTileCoordExtent(tileCoord));
    }
    /**
   * @param {!import("../extent.js").Extent} extent Extent for this tile grid.
   * @private
   */ calculateTileRanges_(extent) {
        const length = this.resolutions_.length;
        const fullTileRanges = new Array(length);
        for(let z = this.minZoom; z < length; ++z)fullTileRanges[z] = this.getTileRangeForExtentAndZ(extent, z);
        this.fullTileRanges_ = fullTileRanges;
    }
}
exports.default = TileGrid;

},{"../TileRange.js":"3pvAn","./common.js":"bxYGl","../asserts.js":"e4TiF","../math.js":"5jEFr","../extent.js":"6YrVc","../tilecoord.js":"bZ2LT","../geom/flat/intersectsextent.js":"7x08H","../array.js":"1Fbic","../size.js":"lKEPe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gOwFC":[function(require,module,exports) {
/**
 * @module ol/tileurlfunction
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @param {string} template Template.
 * @param {import("./tilegrid/TileGrid.js").default} tileGrid Tile grid.
 * @return {import("./Tile.js").UrlFunction} Tile URL function.
 */ parcelHelpers.export(exports, "createFromTemplate", ()=>createFromTemplate);
/**
 * @param {Array<string>} templates Templates.
 * @param {import("./tilegrid/TileGrid.js").default} tileGrid Tile grid.
 * @return {import("./Tile.js").UrlFunction} Tile URL function.
 */ parcelHelpers.export(exports, "createFromTemplates", ()=>createFromTemplates);
/**
 * @param {Array<import("./Tile.js").UrlFunction>} tileUrlFunctions Tile URL Functions.
 * @return {import("./Tile.js").UrlFunction} Tile URL function.
 */ parcelHelpers.export(exports, "createFromTileUrlFunctions", ()=>createFromTileUrlFunctions);
/**
 * @param {import("./tilecoord.js").TileCoord} tileCoord Tile coordinate.
 * @param {number} pixelRatio Pixel ratio.
 * @param {import("./proj/Projection.js").default} projection Projection.
 * @return {string|undefined} Tile URL.
 */ parcelHelpers.export(exports, "nullTileUrlFunction", ()=>nullTileUrlFunction);
/**
 * @param {string} url URL.
 * @return {Array<string>} Array of urls.
 */ parcelHelpers.export(exports, "expandUrl", ()=>expandUrl);
var _assertsJs = require("./asserts.js");
var _mathJs = require("./math.js");
var _tilecoordJs = require("./tilecoord.js");
function createFromTemplate(template, tileGrid) {
    const zRegEx = /\{z\}/g;
    const xRegEx = /\{x\}/g;
    const yRegEx = /\{y\}/g;
    const dashYRegEx = /\{-y\}/g;
    return(/**
     * @param {import("./tilecoord.js").TileCoord} tileCoord Tile Coordinate.
     * @param {number} pixelRatio Pixel ratio.
     * @param {import("./proj/Projection.js").default} projection Projection.
     * @return {string|undefined} Tile URL.
     */ function(tileCoord, pixelRatio, projection) {
        if (!tileCoord) return undefined;
        return template.replace(zRegEx, tileCoord[0].toString()).replace(xRegEx, tileCoord[1].toString()).replace(yRegEx, tileCoord[2].toString()).replace(dashYRegEx, function() {
            const z = tileCoord[0];
            const range = tileGrid.getFullTileRange(z);
            (0, _assertsJs.assert)(range, 55); // The {-y} placeholder requires a tile grid with extent
            const y = range.getHeight() - tileCoord[2] - 1;
            return y.toString();
        });
    });
}
function createFromTemplates(templates, tileGrid) {
    const len = templates.length;
    const tileUrlFunctions = new Array(len);
    for(let i = 0; i < len; ++i)tileUrlFunctions[i] = createFromTemplate(templates[i], tileGrid);
    return createFromTileUrlFunctions(tileUrlFunctions);
}
function createFromTileUrlFunctions(tileUrlFunctions) {
    if (tileUrlFunctions.length === 1) return tileUrlFunctions[0];
    return(/**
     * @param {import("./tilecoord.js").TileCoord} tileCoord Tile Coordinate.
     * @param {number} pixelRatio Pixel ratio.
     * @param {import("./proj/Projection.js").default} projection Projection.
     * @return {string|undefined} Tile URL.
     */ function(tileCoord, pixelRatio, projection) {
        if (!tileCoord) return undefined;
        const h = (0, _tilecoordJs.hash)(tileCoord);
        const index = (0, _mathJs.modulo)(h, tileUrlFunctions.length);
        return tileUrlFunctions[index](tileCoord, pixelRatio, projection);
    });
}
function nullTileUrlFunction(tileCoord, pixelRatio, projection) {
    return undefined;
}
function expandUrl(url) {
    const urls = [];
    let match = /\{([a-z])-([a-z])\}/.exec(url);
    if (match) {
        // char range
        const startCharCode = match[1].charCodeAt(0);
        const stopCharCode = match[2].charCodeAt(0);
        let charCode;
        for(charCode = startCharCode; charCode <= stopCharCode; ++charCode)urls.push(url.replace(match[0], String.fromCharCode(charCode)));
        return urls;
    }
    match = /\{(\d+)-(\d+)\}/.exec(url);
    if (match) {
        // number range
        const stop = parseInt(match[2], 10);
        for(let i = parseInt(match[1], 10); i <= stop; i++)urls.push(url.replace(match[0], i.toString()));
        return urls;
    }
    urls.push(url);
    return urls;
}

},{"./asserts.js":"e4TiF","./math.js":"5jEFr","./tilecoord.js":"bZ2LT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["jy52z","1Z4Rq"], "1Z4Rq", "parcelRequire8fe5")

//# sourceMappingURL=index.5d9dacde.js.map