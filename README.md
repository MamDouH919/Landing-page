# Landing Page Project

## Table of Contents

* [Instructions](#instructions)

## Instructions

**Build the navigation menu.**
```javascript

for (condition){

    Adding list navigation

}

```
**Add functionality to distinguish the section in view**
```javascript

const SetActiveSection = function(){
    section.forEach(function(v) {
        let rect = v.getBoundingClientRect();
    }
}

}

```
**Add functionality to distinguish the list of section in view**
select all lists,

```javascript

function setActiveClass() {
    if (window.scrollY >= firstsection.offsetTop) {
        alllist.forEach((link) => {
        link.classList.remove("active");
        });
        firstsecList.classList.add("active");
    }
}

```
**Add the functionality to scroll to sections**
select all lists,

```javascript

firstLink.addEventListener("click", function(e){
    e.preventDefault();
    document.body.scrollTo({
        top: firstsection.offsetTop,
        behavior: 'smooth'
    })
})

```

**Responsive landing page**
first : build new menu to suits the mobiles and small width
second : put it in icon when on click open

```javascript
var res = window.matchMedia("(max-width: 600px)");

function Responsive(res) {
    if(matched){
        set menu list
    }
    else{
        set navigation
    }

}


```
