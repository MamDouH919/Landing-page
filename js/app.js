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

for (let i = 1; i <= 4; i++) {
    const newList = document.createElement('li');
    const newLista = document.createElement('a');
    newLista.textContent = 'Section ' + i;
    newLista.id = "link" + i;
    newList.id = 'sec' + i;
    newList.appendChild(newLista);
    navbarList.appendChild(newList);
}

// Add class 'active' to section when near top of viewport

const section = document.querySelectorAll('section')
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

// Add class 'active' to list of nav when near top of viewport
const navbar = document.querySelectorAll('li');
const firstsecList = document.querySelector('#sec1');
const secondSecList = document.querySelector('#sec2');
const thirdSecList = document.querySelector('#sec3');
const forthSecList = document.querySelector('#sec4');
function setActiveClass() {
    //NoSection
    if (window.scrollY < section1.offsetTop-200) {
        navbar.forEach((link) => {
        link.classList.remove("active");
        });
    }
    //Section1
    if (window.scrollY >= section1.offsetTop-250) {
        navbar.forEach((link) => {
        link.classList.remove("active");
        });
        firstsecList.classList.add("active");
    }
    //Section2
    if (window.scrollY >= section2.offsetTop-250) {
        navbar.forEach((link) => {
        link.classList.remove("active");
        });
        secondSecList.classList.add("active");
    }
    //Section3
    if (window.scrollY >= section3.offsetTop-250) {
        navbar.forEach((link) => {
        link.classList.remove("active");
        });
        thirdSecList.classList.add("active");
    }
    //Section4
    if (window.scrollY >= section4.offsetTop-250) {
        navbar.forEach((link) => {
        link.classList.remove("active");
        });
        forthSecList.classList.add("active");
    }
}
    window.addEventListener('scroll', setActiveClass);
// Scroll to anchor ID using scrollTO event

const firstLink = document.querySelector('#link1');
const thirdLink = document.querySelector('#link3');
const secondLink = document.querySelector('#link2');
const forthLink = document.querySelector('#link4');
//function to scroll to the section
firstLink.addEventListener("click", function(e){
    e.preventDefault();
    document.body.scrollTo({
        top: section1.offsetTop,
        behavior: 'smooth'
    });
});
secondLink.addEventListener("click", function(e){
    e.preventDefault();
    document.body.scrollTo({
        top: section2.offsetTop,
        behavior: 'smooth'
      });
});
thirdLink.addEventListener("click", function(e){
    e.preventDefault();
    document.body.scrollTo({
        top: section3.offsetTop,
        behavior: 'smooth'
      });
});
forthLink.addEventListener("click", function(e){
    e.preventDefault();
    document.body.scrollTo({
        top: section4.offsetTop,
        behavior: 'smooth'
      }); 
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
navmenu.classList = 'navbar__menu';
for (let i = 1; i <= 4; i++) {
    const links = document.createElement('a');
    links.textContent = 'Section ' + i;
    links.classList = "menu__link";
    links.id = 'linksec' + i;
    navmenu.appendChild(links);
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
const firstLinksec = document.querySelector('#linksec1');
const thirdLinksec = document.querySelector('#linksec3');
const secondLinksec = document.querySelector('#linksec2');
const forthLinksec = document.querySelector('#linksec4');
//function to scroll to the section
firstLinksec.addEventListener("click", function(e){
    e.preventDefault();
    navmenu.classList.toggle("show");
    document.body.scrollTo({
        top: section1.offsetTop,
        behavior: 'smooth'
    });
});
secondLinksec.addEventListener("click", function(e){
    e.preventDefault();
    navmenu.classList.toggle("show");
    document.body.scrollTo({
        top: section2.offsetTop,
        behavior: 'smooth'
      });
});
thirdLinksec.addEventListener("click", function(e){
    e.preventDefault();
    navmenu.classList.toggle("show");
    document.body.scrollTo({
        top: section3.offsetTop,
        behavior: 'smooth'
      });
});
forthLinksec.addEventListener("click", function(e){
    e.preventDefault();
    navmenu.classList.toggle("show");
    document.body.scrollTo({
        top: section4.offsetTop,
        behavior: 'smooth'
      }); 
});



