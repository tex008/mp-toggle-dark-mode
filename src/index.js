if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

window.onload = () => {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  const checkbox = document.querySelector('input[type="checkbox"]');

  if (localStorage.theme === "light") checkbox.checked = true;

  const soundClick = new Audio("./sounds/click.wav");

  const startLightMode = () => {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
    soundClick.play();
  };

  const startDarkMode = () => {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
    soundClick.play();
  };

  checkbox.addEventListener("change", (event) =>
    event.target.checked ? startLightMode() : startDarkMode()
  );
};
