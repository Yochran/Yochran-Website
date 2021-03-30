const mainContent = document.getElementById("main-container");
const infoContent = document.getElementById("info-container");
const linksContent = document.getElementById("links-container");

var mainLoaded = true;
var infoLoaded = false;
var linksLoaded = false;
var theme = "LIGHT";

/**
 * -- FUNCTIONS --
 * This is the code for each function.
 */

function loadPage() {
    const loading = document.getElementById("loading");

    setTimeout(() => {
        loading.style.top = "-125%";
    }, 500);

    setTimeout(() => {
        mainContent.style.top = "33.5%";
    }, 1000);
}

function loadInfo() {
    mainContent.style.left = "125%";
    infoContent.style.left = "39%";

    infoLoaded = true;
    mainLoaded = false;
}

function loadMain() {
    linksContent.style.top = "125%";
    infoContent.style.top = "27%";

    if (linksLoaded) {
        setTimeout(() => {
            mainContent.style.left = "39%";
            infoContent.style.left = "-125%";
        }, 500);
    } else {
        mainContent.style.left = "39%";
        infoContent.style.left = "-125%";
    }

    infoLoaded = false;
    linksLoaded = false;
    mainLoaded = true;
}

function loadLinks() {
    linksContent.style.top = "75%";
    infoContent.style.top = "5%";

    linksLoaded = true;
}

function darkTheme() {
    const titles = document.getElementById("title");
    const tohi = document.getElementById("tohi");

    const darkTheme = document.getElementById("dark-theme");
    const loadLinks = document.getElementById("load-links");
    const loadMain = document.getElementById("load-main");
    const loadInfo = document.getElementById("load-info");

    if (theme === "LIGHT") {
        document.body.style.backgroundColor = "#151515";

        titles.style.color = "#ffffff";
        tohi.style.color = "#fffffff";
        mainContent.style.color = "#ffffff"
        infoContent.style.color = "#ffffff"
        linksContent.style.color = "#ffffff"

        loadInfo.style.color = "#ffffff";
        loadInfo.style.border = "3px solid #ffffff"
        loadMain.style.color = "#ffffff";
        loadMain.style.border = "3px solid #ffffff"
        darkTheme.style.color = "#ffffff";
        darkTheme.style.border = "3px solid #ffffff"
        loadLinks.style.color = "#ffffff";
        loadLinks.style.border = "3px solid #ffffff"

        document.getElementById("dark-theme").innerHTML = "Click to enable light theme.";
        theme = "DARK";
    } else {
        document.body.style.backgroundColor = "#ffffff";

        titles.style.color = "#000000";
        tohi.style.color = "#000000";
        mainContent.style.color = "#000000"
        infoContent.style.color = "#000000"
        linksContent.style.color = "#000000"

        loadInfo.style.color = "#000000";
        loadInfo.style.border = "3px solid #000000"
        loadMain.style.color = "#000000";
        loadMain.style.border = "3px solid #000000"
        darkTheme.style.color = "#000000";
        darkTheme.style.border = "3px solid #000000"
        loadLinks.style.color = "#000000";
        loadLinks.style.border = "3px solid #000000"

        document.getElementById("dark-theme").innerHTML = "Click to enable dark theme.";
        theme = "LIGHT";
    }
}

/**
 * -- LISTENERS --
 * These are the listeners.
 */

document.onreadystatechange = () => { loadPage(); logMessage("Page has loaded succesfully."); }
document.getElementById("load-info").onclick = () => { loadInfo(); logMessage("Info has been loaded."); }
document.getElementById("load-main").onclick = () => { loadMain(); logMessage("Main has been loaded."); }
document.getElementById("load-links").onclick = () => { loadLinks(); logMessage("Links have been loaded."); }
document.getElementById("dark-theme").onclick = () => { darkTheme(); logMessage("Theme has been switched."); }
document.getElementById("tohi").onclick = () => { window.open("https://tohi.dev", "_blank"); }

/**
 * -- UTILITY --
 * This is the utility section.
 */

function getTime() {
    const fullTime = new Date();

    const hours = fullTime.getHours();
    const minutes = fullTime.getMinutes();

    const time = `${hours}:${minutes}`;

    return time;
}

function logMessage(msg) {
    const time = getTime();
    console.log(`${time} ${msg}`);
}

// -- END -- \\