// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/javascript/svg.js":[function(require,module,exports) {
!function (a) {
  var t,
      n = '<svg><symbol id="icon-github" viewBox="0 0 1024 1024"><path d="M950.930286 512q0 143.433143-83.748571 257.974857t-216.283429 158.573714q-15.433143 2.852571-22.601143-4.022857t-7.168-17.115429l0-120.539429q0-55.442286-29.696-81.115429 32.548571-3.437714 58.587429-10.313143t53.686857-22.308571 46.299429-38.034286 30.281143-59.977143 11.702857-86.016q0-69.12-45.129143-117.686857 21.138286-52.004571-4.534857-116.589714-16.018286-5.12-46.299429 6.290286t-52.589714 25.161143l-21.723429 13.677714q-53.174857-14.848-109.714286-14.848t-109.714286 14.848q-9.142857-6.290286-24.283429-15.433143t-47.689143-22.016-49.152-7.68q-25.161143 64.585143-4.022857 116.589714-45.129143 48.566857-45.129143 117.686857 0 48.566857 11.702857 85.723429t29.988571 59.977143 46.006857 38.253714 53.686857 22.308571 58.587429 10.313143q-22.820571 20.553143-28.013714 58.88-11.995429 5.705143-25.746286 8.557714t-32.548571 2.852571-37.449143-12.288-31.744-35.693714q-10.825143-18.285714-27.721143-29.696t-28.306286-13.677714l-11.410286-1.682286q-11.995429 0-16.603429 2.56t-2.852571 6.582857 5.12 7.972571 7.460571 6.875429l4.022857 2.852571q12.580571 5.705143 24.868571 21.723429t17.993143 29.110857l5.705143 13.165714q7.460571 21.723429 25.161143 35.108571t38.253714 17.115429 39.716571 4.022857 31.744-1.974857l13.165714-2.267429q0 21.723429 0.292571 50.834286t0.292571 30.866286q0 10.313143-7.460571 17.115429t-22.820571 4.022857q-132.534857-44.032-216.283429-158.573714t-83.748571-257.974857q0-119.442286 58.88-220.306286t159.744-159.744 220.306286-58.88 220.306286 58.88 159.744 159.744 58.88 220.306286z"  ></path></symbol><symbol id="icon-phone" viewBox="0 0 1024 1024"><path d="M407.67602291 355.24061447L356.10930721 193.62233591C343.21762888 153.1627449 316.07917049 162.66322725 316.07917049 162.66322725 212.5428642 150.70508253 165.66402382 268.81921894 165.66402382 268.81921894 116.62435509 522.28774606 533.95590399 912.83469249 746.77850032 850.80643363 869.21284734 799.19569298 857.236758 704.59433766 857.236758 704.59433766 857.82274222 664.02470511 826.399285 655.44125938 826.399285 655.44125938L646.83134785 613.14759747 578.12454408 681.96191139C394.45471661 617.18254576 329.81319088 433.18860428 329.81319088 433.18860428L407.67602291 355.24061447ZM383.27771062 442.86998047C385.0922101 446.5851777 423.65141927 512.01163889 447.27473939 538.79484087 487.43417318 584.32608418 568.05471202 628.07374559 568.05471202 628.07374559L614.84450673 581.21072553C625.91621649 570.12170382 641.94133482 565.55813151 657.19396925 569.15058537L838.30974322 611.83778838C848.53859183 614.63183632 860.57850548 620.49751149 872.3396649 631.26183287 891.58918772 648.87987516 902.88043907 674.26523896 902.43294979 705.24715112 902.43294979 705.24715112 894.71828795 781.84035826 861.75359318 822.50102482 838.6158431 851.04052946 761.09509211 893.71537052 759.4262971 894.20175475 507.02934819 967.76415077 67.27090112 539.41840992 121.2860813 260.2332194 121.82083027 257.46922928 143.60510704 210.67290327 163.84396484 186.38207951 204.04911917 138.1275494 256.92975662 110.33026616 321.26527287 117.76084061 321.26527287 117.76084061 347.61447764 117.07098461 366.22646503 130.78073223 381.3558138 141.92514821 392.38275314 158.5770437 399.17138442 179.88273361L450.73812252 341.50101141C455.87583697 357.60340055 451.60044233 375.22684397 439.65533854 387.18498947 439.65533854 387.18498947 380.54032227 437.26513729 383.27771062 442.86998047Z"  ></path></symbol><symbol id="icon-wechat" viewBox="0 0 1024 1024"><path d="M512 884.3361c-65.406662 0-127.142725-13.488199-182.684716-37.021172l-145.736199 73.129554c-10.091846 5.613858-21.704324 6.557346-32.321126 3.541663-0.042979-0.01228-0.086981-0.010233-0.132006-0.020466-20.48966-5.311982-33.643238-23.857361-32.310893-43.586704 0.151449-4.579295 1.168616-9.012258 2.784416-13.233396l40.241516-144.048767c-52.792367-64.949244-84.212984-144.935973-84.212984-231.764528 0-217.050408 194.477296-393.003815 434.373015-393.003815 239.897765 0 434.373015 175.954431 434.373015 393.003815C946.373015 708.383716 751.897765 884.3361 512 884.3361zM512 181.065845c-194.202027 0-351.635639 138.912793-351.635639 310.266439 0 75.225285 30.368658 144.174634 80.84119 197.885929l-0.014326 0.058328c9.53926 10.288321 13.730723 24.847921 9.759271 39.194674l-20.142759 72.098062 72.453149-36.354999c13.289678-7.394411 29.150924-6.54916 41.970904 0.633427l0.388856-0.171915c49.541323 23.526833 106.177228 36.923958 166.379355 36.923958 194.204074 0 351.635639-138.910747 351.635639-310.266439C863.634616 319.978638 706.204074 181.065845 512 181.065845zM646.448108 470.647173c-28.559453 0-51.710732-23.150256-51.710732-51.710732 0-28.559453 23.152303-51.710732 51.710732-51.710732 28.561499 0 51.712779 23.152303 51.712779 51.710732C698.16191 447.49794 675.009607 470.647173 646.448108 470.647173zM377.550869 470.647173c-28.557406 0-51.710732-23.150256-51.710732-51.710732 0-28.559453 23.154349-51.710732 51.710732-51.710732 28.561499 0 51.710732 23.152303 51.710732 51.710732C429.262624 447.49794 406.112368 470.647173 377.550869 470.647173z"  ></path></symbol><symbol id="icon-email" viewBox="0 0 1024 1024"><path d="M892.963 831.757h-749.343c-30.316 0-55.484-24.595-55.484-55.484v-531.975c0-30.316 24.595-55.484 55.484-55.484h749.343c30.316 0 55.484 24.595 55.484 55.484v531.975c0 30.316-24.595 55.484-55.484 55.484zM144.765 775.129h747.054v-529.116h-747.054v529.116z"  ></path><path d="M517.149 526.299c-30.89 0-60.062-12.014-101.817-34.894l-311.177-157.306c-13.728-6.863-19.449-24.025-12.585-38.325 6.863-13.728 24.025-19.449 38.325-12.585l311.751 157.306c0 0 0.571 0 0.571 0.571 66.355 36.038 78.938 38.325 149.867 3.434l302.595-147.009c14.299-6.863 30.89-1.146 37.754 13.155 6.863 14.299 1.146 30.89-13.155 37.754l-302.595 147.009c-42.33 21.165-72.074 30.89-99.53 30.89z"  ></path></symbol><symbol id="icon-position" viewBox="0 0 1024 1024"><path d="M508.5 61.7c-193.9 0-351 157.2-351 351s269.7 544.1 351 544.1 351-350.2 351-544.1-157.1-351-351-351z m0 527.6c-97.5 0-176.6-79-176.6-176.6s79-176.6 176.6-176.6 176.6 79 176.6 176.6S606 589.3 508.5 589.3z" fill="#515151" ></path></symbol><symbol id="icon-jianshu" viewBox="0 0 1024 1024"><path d="M356.576 308.704c11.27466667 0.096 22.54933333-0.14933333 33.824 0.10666667 4.448 0.032 9.86666667 2.99733333 9.77066667 7.95733333-1.49333333 6.19733333-5.248 11.52-7.392 17.48266667 36.384 0.13866667 72.77866667-0.04266667 109.16266666 0.08533333-0.768 6.82666667-1.26933333 13.68533333-2.21866666 20.48-0.704 4.84266667-5.17333333 8.736-10.06933334 8.736-16.42666667 0.21333333-32.85333333-0.08533333-49.28 0.13866667 4.128 9.408 8.704 18.752 10.89066667 28.84266666 1.17333333 5.17333333-2.98666667 11.28533333-8.58666667 10.85866667-10.16533333-0.032-20.352 0.34133333-30.496-0.21333333-2.336-13.36533333-5.54666667-26.60266667-10.464-39.264-9.30133333-0.42666667-18.72-0.59733333-27.97866666 0.04266666-18.95466667 22.69866667-43.56266667 40.91733333-71.872 50.048 0.08533333-10.31466667-0.37333333-20.64 0.05333333-30.944 14.688-8.94933333 28.75733333-19.75466667 38.16533333-34.432 8.192-12.02133333 12.928-25.94133333 16.49066667-39.92533333zM675.17866667 308.55466667c14.42133333 0.13866667 28.85333333-0.07466667 43.28533333 0.096 0.256 19.34933333-0.55466667 38.76266667 0.29866667 58.08 42.41066667-0.288 84.82133333-0.096 127.232-0.04266667 0.05333333 39.12533333 0.10666667 78.25066667 0.064 117.376 16.62933333 0.11733333 33.26933333-0.05333333 49.89866666 0.07466667 0 39.88266667 0.30933333 79.776-0.192 119.65866666-0.896 22.95466667-20.84266667 42.464-43.56266666 43.936-15.24266667 0.52266667-30.528 0.128-45.78133334 0.21333334-5.01333333 0.21333333-10.496-3.01866667-11.31733333-8.23466667-1.01333333-7.31733333-1.664-14.67733333-2.42133333-22.02666667 14.18666667-0.46933333 28.39466667 0.16 42.57066666-0.32 9.26933333-0.46933333 17.71733333-8.416 17.51466667-17.94133333 0.17066667-27.79733333-0.01066667-55.60533333-0.01066667-83.40266667-44.75733333-0.096-89.52533333-0.064-134.28266666-0.02133333-0.20266667 51.66933333 0.04266667 103.33866667-0.128 155.008 0.36266667 7.008-5.408 13.09866667-12.23466667 13.92-10.37866667 1.20533333-20.78933333 2.336-31.21066667 3.136 0.01066667-57.29066667-0.07466667-114.58133333 0.032-171.872-43.28533333-0.56533333-86.60266667 0.01066667-129.888-0.27733333-5.22666667-0.16-9.696-4.77866667-10.048-9.93066667-0.8-7.24266667-1.568-14.48533333-2.31466666-21.71733333 47.40266667-0.448 94.816 0.032 142.22933333-0.21333334-0.11733333-28.352 0.032-56.704 0.01066667-85.04533333-35.136-0.27733333-70.29333333 0.07466667-105.42933334-0.17066667-4.93866667 0.064-9.856-3.41333333-10.432-8.50133333-1.056-7.872-1.73866667-15.79733333-2.464-23.70133333 39.424-0.04266667 78.848 0.032 118.26133334-0.032 0.26666667-19.34933333-0.39466667-38.72 0.32-58.048m43.744 90.4c-0.02133333 28.34133333-0.17066667 56.704 0.064 85.04533333 27.76533333 0.01066667 55.53066667-0.096 83.296 0.05333333 0.512-28.352 0.224-56.74666667 0.21333333-85.10933333-27.86133333-0.01066667-55.712-0.032-83.57333333 0.01066667zM181.25866667 308.928c11.392-0.21333333 22.79466667-0.18133333 34.18666666-0.032 4.27733333-0.01066667 9.68533333 2.89066667 9.38666667 7.76533333-1.504 6.31466667-4.928 11.968-7.31733333 17.97333334 34.304 0.064 68.59733333-0.04266667 102.90133333 0.04266666-0.512 6.64533333-1.16266667 13.29066667-2.08 19.88266667-0.75733333 5.29066667-5.73866667 9.30133333-11.05066667 9.088-15.81866667 0.16-31.63733333-0.07466667-47.456 0.10666667 4.01066667 9.25866667 8.01066667 18.57066667 10.58133334 28.352 1.57866667 5.152-2.50666667 11.12533333-7.968 11.17866666-10.24 0.224-20.49066667 0.17066667-30.72 0.01066667-1.99466667-13.46133333-5.86666667-26.51733333-10.35733334-39.31733333-7.53066667-0.56533333-15.104-0.288-22.64533333-0.16-19.63733333 24.56533333-46.90133333 42.912-77.10933333 51.69066666 0.05333333-10.12266667-0.16-20.24533333-0.032-30.368 30.77333333-13.856 53.51466667-43.072 59.68-76.21333333zM826.51733333 320.84266667c13.20533333-0.11733333 26.42133333-0.07466667 39.63733334-0.064 19.14666667 23.68 34.208 50.92266667 42.83733333 80.192 1.92 5.14133333-2.05866667 11.40266667-7.60533333 11.584-11.70133333 0.37333333-23.424 0.02133333-35.136 0.11733333-5.46133333-33.26933333-19.872-64.736-39.73333334-91.82933333z"  ></path><path d="M161.14133333 399.21066667c13.024 0.02133333 26.048 0 39.08266667 0.01066666 12.864 14.912 22.24 32.512 29.28 50.816 1.94133333 5.36533333-1.35466667 12.66133333-7.57333333 12.81066667-10.93333333 0.23466667-21.89866667 0.288-32.832-0.05333333-5.22666667-22.752-14.86933333-44.27733333-27.95733334-63.584zM234.69866667 417.99466667c81.824-0.10666667 163.648-0.08533333 245.472-0.01066667 0.192 74.00533333-0.032 148.01066667 0.10666666 222.016 0.42666667 21.49333333-15.79733333 41.84533333-36.704 46.60266667-14.304 3.008-29.056 1.056-43.56266666 1.64266666-5.39733333 0.62933333-11.38133333-2.28266667-12.72533334-7.85066666-1.51466667-7.648-1.83466667-15.488-3.008-23.18933334 13.184-0.61866667 26.4-0.08533333 39.57333334-0.672 8.78933333-0.48 14.92266667-9.10933333 14.336-17.536 0.05333333-63.14666667 0.14933333-126.29333333-0.05333334-189.44-63.552 0.10666667-127.104 0.032-190.656 0.032-5.04533333 0.48-9.52533333-3.37066667-10.31466666-8.26666666-1.248-7.72266667-1.62133333-15.56266667-2.464-23.328zM145.33333333 462.88c13.97333333-0.224 27.98933333-0.50133333 41.94133334 0.13866667-0.29866667 69.32266667 0.01066667 138.64533333-0.128 207.968 0.29866667 7.136-4.896 14.24-12.20266667 15.01866666-9.856 1.14133333-19.712 2.41066667-29.61066667 3.05066667 0.032-75.392 0.08533333-150.784 0-226.176z"  ></path><path d="M231.44533333 476.04266667c54.29333333 0.128 108.58666667 0.032 162.88 0.064 0.01066667 38.272 0.02133333 76.55466667-0.02133333 114.83733333 0.07466667 9.10933333-1.67466667 18.4-6.26133333 26.368-8.50133333 15.456-26.08 24.62933333-43.49866667 24.59733333-37.74933333 0.08533333-75.50933333 0.02133333-113.26933333 0.032-0.01066667-55.296-0.27733333-110.61333333 0.17066666-165.89866666m39.72266667 29.44c-0.064 12.10666667 0.064 24.20266667 0.032 36.30933333 27.616 0.33066667 55.25333333 0.16 82.88 0.10666667 0.064-12.17066667 0.096-24.34133333 0.04266667-36.512-27.648-0.01066667-55.30666667-0.18133333-82.95466667 0.096m-0.14933333 66.4c-0.20266667 13.07733333-0.16 26.15466667-0.096 39.24266666 22.06933333 0.01066667 44.14933333 0.096 66.21866666-0.02133333 7.15733333 0.21333333 14.53866667-4.21333333 16.256-11.456 1.64266667-9.12 0.52266667-18.51733333 0.71466667-27.75466667-27.70133333-0.02133333-55.392-0.02133333-83.09333333-0.01066666z"  ></path></symbol></svg>',
      e = (t = document.getElementsByTagName("script"))[t.length - 1].getAttribute("data-injectcss");

  if (e && !a.__iconfont__svg__cssinject__) {
    a.__iconfont__svg__cssinject__ = !0;

    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (t) {
      console && console.log(t);
    }
  }

  !function (t) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) setTimeout(t, 0);else {
        var e = function e() {
          document.removeEventListener("DOMContentLoaded", e, !1), t();
        };

        document.addEventListener("DOMContentLoaded", e, !1);
      }
    } else document.attachEvent && (n = t, o = a.document, c = !1, i = function i() {
      c || (c = !0, n());
    }, (_l = function l() {
      try {
        o.documentElement.doScroll("left");
      } catch (t) {
        return void setTimeout(_l, 50);
      }

      i();
    })(), o.onreadystatechange = function () {
      "complete" == o.readyState && (o.onreadystatechange = null, i());
    });

    var n, o, c, i, _l;
  }(function () {
    var t, e;
    (t = document.createElement("div")).innerHTML = n, n = null, (e = t.getElementsByTagName("svg")[0]) && (e.setAttribute("aria-hidden", "true"), e.style.position = "absolute", e.style.width = 0, e.style.height = 0, e.style.overflow = "hidden", function (t, e) {
      e.firstChild ? function (t, e) {
        e.parentNode.insertBefore(t, e);
      }(t, e.firstChild) : e.appendChild(t);
    }(e, document.body));
  });
}(window);
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64634" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/javascript/svg.js"], null)
//# sourceMappingURL=/svg.5270cb32.js.map