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

**Add the functionality to scroll to sections**
select all lists,

```javascript
const targetSection = document.querySelector('ul')
targetSection.addEventListener("click", function(e){
    e.preventDefault();
    document.body.scrollTo({
        top: document.querySelector(targetHref).offsetTop,
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
