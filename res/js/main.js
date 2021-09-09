if (localStorage.getItem("setting_theme") === null) {
	localStorage.setItem("setting_theme", "light");
}
var setting_theme = localStorage.getItem("setting_theme");
var url = new URLSearchParams(window.location.search);

//theme
if (setting_theme == "dark") {
	document.getElementById("setting-theme-slider").classList.add("slider-on");
	document.getElementById("theme-stylesheet").href = "res/css/dark.css";
	document.getElementById("menu-icon").src = "res/img/menu-dark.png";
	document.getElementById("setting-icon").src = "res/img/setting-dark.png";
} else {
	document.getElementById("theme-stylesheet").href = "res/css/main.css";
}

//IO
function get(id) {
	return document.getElementById(id).value;
}
function put(id, val) {
	document.getElementById(id).innerHTML = val;
}
function puts(id, val) {
	document.getElementById(id).innerHTML += val;
}

//loading

function loading(loading_state) {
	if (loading_state) {
		document.getElementById("loading").style.display = "block";
	} else {
		document.getElementById("loading").style.display = "none";
	}
}

//ToolTip

function tooltip(id, msg) {
	var ttp = document.getElementById(id);
	ttp.innerHTML = msg;
	if (ttp.innerHTML == "") {
		ttp.style.display = "none";
	} else {
		ttp.style.display = "";
	}
}

function hide_tooltips() {
	var ttp = document.getElementsByClassName("tooltip");
	for (var i = 0; i < ttp.length; i++) {
		ttp[i].style.display = "none";
	}
}

//sliders

function set_sliders() {
	var sliders = document.getElementsByClassName("slider");
	for (var i = 0; i < sliders.length; i++) {
		sliders[i].innerHTML = "<span></span>";
	}
}

function slider_change(slider_id) {
	document.getElementById(slider_id).classList.toggle("slider-on");
}

//setting theme change

function setting_change_theme() {
	if (setting_theme == "dark") {
		localStorage.setItem("setting_theme", "light");
	} else {
		localStorage.setItem("setting_theme", "dark");
	}
	window.location.href = "?view=setting";
}

//-----main-----
window.onload = function () {
	if (splash_exist)
		view(['splash']);
	if (tab_exist)
		tab([default_tab]);
	if (url.has("tab"))
		tab([url.get("tab")]);
	if (url.has("view")) {
		view([url.get("view")]);
	} else {
		setTimeout(function () {
			view(['main']);
		}, splash_time);
	}

}
