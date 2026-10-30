const themeButton = document.getElementById("darkModeToggle");
const themeIcon = themeButton.querySelector("i");
const isGerman = document.documentElement.lang === "de";

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  themeButton.setAttribute("aria-pressed", String(theme === "dark"));
  themeButton.setAttribute("aria-label", isGerman
    ? (theme === "dark" ? "Zur hellen Darstellung wechseln" : "Zur dunklen Darstellung wechseln")
    : (theme === "dark" ? "Switch to light theme" : "Switch to dark theme"));
  if (themeIcon) themeIcon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
}

const requestedTheme = new URLSearchParams(window.location.search).get("scoutTheme");
const savedTheme = localStorage.getItem("theme");
if (requestedTheme === "light" || requestedTheme === "dark") setTheme(requestedTheme);
else if (savedTheme === "light" || savedTheme === "dark") setTheme(savedTheme);
else setTheme(document.documentElement.getAttribute("data-theme"));

themeButton.addEventListener("click", () => {
  const nextTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  setTheme(nextTheme);
  localStorage.setItem("theme", nextTheme);
});

document.getElementById("year").textContent = String(new Date().getFullYear());
