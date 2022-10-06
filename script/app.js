//ui variables
let homePage = document.querySelector(".homePage");

let servicesPage = document.querySelector(".servicesPage");

let caseStudyPage = document.querySelector(".servicesPage");

let aboutUsPage = document.querySelector(".servicesPage");

let blogsPage = document.querySelector(".servicesPage");

let sideMenuBtn = document.querySelector("#sideMenuBarBtn").firstElementChild;

let sideMenuBar = document.querySelector(".sideMenuBar");

let sideMenuCloseBtn = document.querySelector(".menuHideBtn");

//event listener and event handlers
sideMenuBtn.addEventListener("click",function(e){
  sideMenuBar.classList.toggle("hidePage");
})

sideMenuCloseBtn.addEventListener("click",function(e){
  sideMenuBar.classList.toggle("hidePage");
})