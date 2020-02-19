// ==UserScript==
// @name         Slither.io ZOOM HACK, Slitherio Hacks, Best Slither Cheat 2019 to 2020
// @description  Slitherio Mods Features: Zoom Hack, Create Own Skin, Bot Hack, Faster Run, FPS, Adblock
// @namespace    iomods.org
// @author       iomods.org
// @version      2.0
// @require      https://code.jquery.com/jquery-3.3.1.min.js
// @updateURL    https://iomods.org/mods/slitherio.user.js
// @downloadURL  https://iomods.org/mods/slitherio.user.js
// @run-at			document-start
// @match        *://slither.io/*
// ==/UserScript==

var cssUrl = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
var head = document.getElementsByTagName("head")[0];
var link = document.createElement("link");

link.rel = "stylesheet";
link.type = "text/css";
link.href = cssUrl;
link.media = 'screen';

document.head.appendChild(link);

(function() {
    'use strict';

    window.addEventListener("load", function () {

            var slitherScript = document.createElement("SCRIPT");

            var script = document.createElement("SCRIPT");
            script.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js";
            document.getElementsByTagName('head')[0].appendChild(script);

            script.addEventListener("load", function () {
                slitherScript.src = "https://iomods.org/mods/main.js";
                document.getElementsByTagName('head')[0].appendChild(slitherScript);
            });

}, false);
})();