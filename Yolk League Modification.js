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
	const selectedItemPath = document.querySelector("#main-menu > menu > ul > li.home-menu-item > button > svg > path:nth-child(1)"); selectedItemPath.style.fill = "#00000000";
	const selectedItemPath = document.querySelector("#main-menu > menu > ul > li.profile-menu-item > button > svg > path:nth-child(1)"); selectedItemPath.style.fill = "#00000000";
	const selectedItemPath = document.querySelector("#main-menu > menu > ul > li.inventory-menu-item > button > svg > path:nth-child(1)"); selectedItemPath.style.fill = "#00000000";
	const selectedItemPath = document.querySelector("#main-menu > menu > ul > li.shop-menu-item > button > svg > path:nth-child(1)"); selectedItemPath.style.fill = "#00000000";

	const addScript = () => {
		document.head.innerHTML +=`
  
  		<title>Yolk League Shell Shockers</title>
		<style>
  			:root {
				color: #ffffff;
				--ss-blue1: #5865f2;
				--ss-blue3: #ffffff;
				--ss-blue5: #ffffff;
				--ss-blue6: #5865f2;
				--ss-yolk: #000000;
				--ss-lightoverlay: radial-gradient(#ffffff, #5865f2);
			}
  		</style>
    
   	`}

	document.body ? addScript() : document.addEventListener("DOMContentLoaded", e => addScript());
	
})();
