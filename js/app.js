/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const navbarList = document.querySelector('ul');
const Sections = document.querySelectorAll('section')
const nav = document.querySelector('.navbar__menu');
const section1 = document.querySelector('#section1');
const section2 = document.querySelector('#section2');
const section3 = document.querySelector('#section3');
const section4 = document.querySelector('#section4');
const pageHeader = document.querySelector('.page__header');
var numberOfSection=document.getElementsByTagName('section');
const section = document.querySelectorAll('section')




//Create Button To scroll to the top
const button = document.createElement('button');
button.textContent = 'Scroll To Top';
pageHeader.appendChild(button);


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

for (let i = 1; i <=numberOfSection.length ; i++) {
    const newList = document.createElement('li');
    const newLista = document.createElement('a');
    newLista.textContent = 'Section ' + i;
    newLista.id = "link" + i;
    newLista.href = "#section" + i;
    // newList.id = 'sec' + i;
    newList.appendChild(newLista);
    navbarList.appendChild(newList);
}

// Add class 'active' to section when near top of viewport
const SetActiveSection = function(){
            section.forEach(function(v) {
                let rect = v.getBoundingClientRect();
                if (rect.top+200 > 0 && rect.top+200 < window.innerHeight) {
                    v.classList.add("your-active-class");
                } 
                else{
                    v.classList.remove("your-active-class");
                }
            })
        };
window.addEventListener("scroll", SetActiveSection);


// Scroll to anchor ID using scrollTO event

document.addEventListener("DOMContentLoaded", function() { 

const targetSection = document.querySelector('ul');
targetSection.addEventListener("click", 
    function(e){
        let targetHref = e.target.getAttribute("href");
    e.preventDefault();
    document.body.scrollTo({
                top: document.querySelector(targetHref).offsetTop,
                behavior: 'smooth'
            });
    })
  });

//function to back to top page
button.addEventListener("click", function(e){
    e.preventDefault();
    document.body.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
});
    /**
 * End Main Functions
 * Begin Events
 * 
*/
// Build menu 
const menu = document.createElement('a')
menu.classList = 'fa fa-bars icon'
pageHeader.appendChild(menu)
const navmenu = document.createElement('div')
navmenu.classList = 'navbar__menu menu';
const menuUl = document.createElement('ul');
navmenu.appendChild(menuUl)

for (let i = 1; i <= numberOfSection.length; i++) {
    const li = document.createElement('li');
    const links = document.createElement('a');
    links.textContent = 'Section ' + i;
    li.classList = "menu__link";
    links.id = 'linksec' + i;
    links.href = "#section" + i;
    li.appendChild(links);
    menuUl.appendChild(li);
}
pageHeader.appendChild(navmenu)

// Resposive to all devices
function Responsive(res) {
  if (res.matches) {
    nav.style.display = "none";
    menu.style.display = "block";
  } else {
      //Hide Navbar during scrolling
    let isScrolling;

    window.addEventListener('scroll', function ( ) {
        // Clear our timeout throughout the scroll
        window.clearTimeout( isScrolling );
        //invisble the nav and visible the button
        if(window.scrollY < document.body.offsetHeight - window.innerHeight){
        navbarList.style.display = 'block';
        button.style.display = 'none';
        pageHeader.style.background = '#fff';
        pageHeader.style.top = '0';
        }
        if(
            window.innerHeight + window.pageYOffset >=document.body.offsetHeight
            ){
            navbarList.style.display = 'none';
            menu.style.display = 'none';
            button.style.display = 'block';
            pageHeader.style.background = 'transparent';
            pageHeader.style.top = '10';
        }
        // Set a timeout to run after scrolling ends
        isScrolling = setTimeout(function() {
            if(window.scrollY >= section1.offsetTop){
            navbarList.style.display = 'none';
            }
        }, 2000);
    
    }, false);
    nav.style.display = "block";
    menu.style.display = "none";
  }
}

var res = window.matchMedia("(max-width: 600px)");
Responsive(res); // Call listener function at run time
res.addEventListener("change", Responsive);
res.addEventListener("refresh", Responsive);

// Function to open the menu List
menu.addEventListener("click", function(e){
    e.preventDefault();
    navmenu.classList.toggle("show");
});

// Scroll to section on link click
document.addEventListener("DOMContentLoaded", function () {
  const targetSection = document.querySelector(".menu ul");
  console.log(targetSection);

  targetSection.addEventListener("click", function (e) {
    var targetHrefLink = e.target.getAttribute("href");
    e.preventDefault();
    navmenu.classList.toggle("show");
    let top = document.querySelector(targetHrefLink).offsetTop
    document.body.scrollTo({
    top: top,
    behavior: "smooth",
    });
  });
});



