
let counter = 0;
const themes = ["clair", "sombre", "système"];
const themeMedia = window.matchMedia("(prefers-color-scheme: dark)");

function getSystemTheme() {
	if (window.matchMedia && themeMedia.matches) {
		return "sombre";
	} else {
		return "clair";
	}
}

// prend en entrée le paramètre utilisateur en brut et renvoie le thème réel correspondant, soit "clair" soit "sombre"
function resolveTheme(theme) {
	let actualTheme = theme;
	if (theme == "système") {
		actualTheme = getSystemTheme();
	}
	return actualTheme;
}

function clearThemes() {
	// retire toutes les classes relatives au thème de l'élément racine
	for (let theme of themes) {
		document.documentElement.classList.toggle(theme, false);
	}
}

function updateTheme(newTheme) {
	clearThemes();
	const theme = resolveTheme(newTheme);
	document.documentElement.classList.toggle(theme, true);
	counter = themes.indexOf(theme);
	if (newTheme !== "système") {
		// on retire le listener précédemment ajouté si le thème ne dépend pas du système
		themeMedia.removeEventListener("change", updateSystemTheme);
	}
	localStorage.setItem("theme", newTheme);
	// document.getElementById("theme-state").innerText = newTheme;
}

// on a besoin de nommer la fonction que l'on renseigne dans l'eventListener pour pouvoir ensuite la retirer
function updateSystemTheme() {
	console.log("update system theme");
	updateTheme("système");
}

function handleClick() {
	counter = (counter + 1) % (themes.length - 1);
	const theme = themes[counter];
	
	updateTheme(theme);
}

function setupTheme() {
	const buttons = document.getElementsByClassName("theme-btn");

	let theme = localStorage.getItem("theme");
	if (!themes.includes(theme)) {
		// thème par défaut si le thème n'a pas encore été défini
		theme = "système";
	}

	if (theme === "système") {
		// si le système change de thème, le site suit
		themeMedia.addEventListener("change", updateSystemTheme);
	}

	counter = themes.indexOf(theme);
	updateTheme(theme);

	for (let btn of buttons) {
		btn.addEventListener("click", handleClick);
	}
}

setupTheme();