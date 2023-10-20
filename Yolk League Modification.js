// ==UserScript==
// @name         Yolk League Modifications
// @namespace    http://tampermonkey.net/
// @version      1
// @description  Changes the design, adds a skybox and features.
// @author       Yolk League
// @match        *://shellshock.io/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=shellshock.io
// @grant        none
// ==/UserScript==

(function() {
	
	const addScript = () => {
		document.head.innerHTML +=
			`<link rel="stylesheet" href="styles/transitions.css?1685981192">`
	}

	document.body ? addScript() : document.addEventListener("DOMContentLoaded", e => addScript());
	
})();
