// ==UserScript==
// @name         Yolk League Modifications
// @namespace    http://tampermonkey.net/
// @version      1
// @description  Changes the design, adds a skybox and features.
// @author       Yolk League
// @match        *://shellshock.io/
// @icon         https://raw.githubusercontent.com/yolkleague/TampermonkeyModification/main/icon.svg
// @grant        none
// ==/UserScript==

(function() {
	
	const addScript = () => {
		document.head.innerHTML +=
			`<link rel="stylesheet" href="https://raw.githubusercontent.com/yolkleague/TampermonkeyModification/main/colors.css">`
	}

	document.body ? addScript() : document.addEventListener("DOMContentLoaded", e => addScript());
	
})();
