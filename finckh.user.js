// ==UserScript==
// @name         Regelspiel Direkter Link
// @namespace    Uli Finckh
// @version      1.1
// @description  Durch dieses Skript können gezielt Fragen verlinkt werden. (z.B.: http://game.finckh.net/situat/alle.htm#s01 für die erste schwere Frage)
// @updateURL    https://github.com/PascalHelbig/regeln/raw/master/finckh.user.js
// @downloadURL  https://github.com/PascalHelbig/regeln/raw/master/finckh.user.js
// @supportURL   https://github.com/PascalHelbig/regeln
// @author       Pascal Helbig
// @match        http://game.finckh.net/situat/alle.htm
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  if (location.hash !== '') {
    // remove the '#':
    var hash = location.hash.substring(1);

    // set question and hide question-selector:
    document.getElementsByName('frage')[0].src = "http://game.finckh.net/situat/" + hash + "/film.htm";
    document.getElementsByName('unten')[0].src = "http://game.finckh.net/situat/leer.htm";
  }
})();
