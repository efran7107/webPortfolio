
const root = document.documentElement;
const rootClasses = root.classList;
const nav = document.getElementById("nav");
const themeBtns = document.querySelectorAll(".theme-btns");
const themeTab = document.querySelector(".theme-tab-cont");
const tab = document.getElementById('tab');
const lightBtn = document.getElementById('light');
const darkBtn = document.getElementById('dark');


const tabLeft = document
.createElement('i')
tabLeft.classList.add('fa-solid', 'fa-chevron-left')
tabLeft.id = 'tabLeft'

const tabRight = document
.createElement('i')
tabRight.classList.add('fa-solid', 'fa-chevron-right')
tabRight.id = 'tabRight'

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
    if(localStorage.getItem('thene') === 'dark'){
      if(lightBtn.classList.contains('active')){
        lightBtn.classList.remove('active');
      }
      darkBtn.classList.add('active')
    }else{
      if(darkBtn.classList.contains('active')){
      darkBtn.classList.remove('active');
    }
      lightBtn.classList.add('active')
    }
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

const changeTheme = (theme) => {
  const curTheme = rootClasses[0];
  switch (curTheme) {
    case "dark":
      if(curTheme === theme){
        return;
      }
      rootClasses.remove("dark");
      rootClasses.add("light");
      if(darkBtn.classList.contains('active')){
        darkBtn.classList.remove('active');
      }
      lightBtn.classList.add('active')
      addToLocalStorage("light");
      break;
    case "light":
      if(curTheme === theme){
        return;
      }
      rootClasses.remove("light");
      rootClasses.add("dark");
      if(lightBtn.classList.contains('active')){
        lightBtn.classList.remove('active');
      }
      darkBtn.classList.add('active')
      addToLocalStorage("dark");
      break;
  }
};

const addActiveClass = (isAdding) => {
  if (isAdding) {
    if(themeTab.classList.contains('active')){
      return;
    }
    themeTab.classList.add("active");
    tab.removeChild(tabLeft);
    tab.appendChild(tabRight);
    
  } else {
    if(!themeTab.classList.contains('active')){
      return;
    }
    themeTab.classList.remove("active");
    tab.removeChild(tabRight);
    tab.appendChild(tabLeft);
  }
}

const [light, dark] = themeBtns;

tabLeft.addEventListener("click", ()=> addActiveClass(true))
tabRight.addEventListener("click", ()=> addActiveClass(false))

light.addEventListener("click", () => changeTheme("light"));
dark.addEventListener("click", () => changeTheme("dark"));

tab.appendChild(tabLeft)

root.classList.add(getTheme());