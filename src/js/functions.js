const themeBtn = document.getElementById("themeBtn");
const root = document.documentElement;
const rootClasses = root.classList;
const nav = document.getElementById("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});
const addToLocalStorage = (key) => {
  if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", key);
    return;
  }
  localStorage.setItem("theme", key);
};

const getTheme = () => {
  if (localStorage.getItem("theme")) {
    return localStorage.getItem("theme");
  }
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    addToLocalStorage("dark");
    return "dark";
  } else {
    addToLocalStorage("light");
    return "light";
  }
};

const changeTheme = () => {
  const curTheme = rootClasses[0];
  switch (curTheme) {
    case "dark":
      rootClasses.remove("dark");
      rootClasses.add("light");
      addToLocalStorage("light");
      break;
    case "light":
      rootClasses.remove("light");
      rootClasses.add("dark");
      addToLocalStorage("dark");
      break;
  }
};

document.documentElement.classList.add(getTheme());

themeBtn.addEventListener("click", changeTheme);
