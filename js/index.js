// Your code goes here
const navLink = document.querySelectorAll('.nav-link');
const heading = document.querySelector('.logo-heading');
const introH2 = document.querySelector('.intro h2');
const introP = document.querySelector('.intro p');
const contentH2 = document.querySelector('.text-content h2');
const contentP = document.querySelector('.text-content p');
const imgs = document.querySelector('img-content img');
const destH2 = document.querySelector('.content-destination h2');
const destH4 = document.querySelector('.destination h4');
const button = document.querySelector('.btn');
const footer = document.querySelector('footer');

// 1-mouseover, 2-keydown, 3-focus, and 4-blur
Array.from(navLink).forEach(item => {
    item.addEventListener('mouseover', function(event){
    event.target.style.background = "pink";
    setTimeout(function() {
        event.target.style.background = "";
    }, 500);
}, false);
    item.addEventListener('keydown', event => {
        if (event.key === "Escape"){
            event.target.style.color = "red";
        }
    })
    item.addEventListener('focus', event => {
    event.target.style.border = '2px red dashed';
    event.stopPropagation();  //stop propagation
    item.addEventListener('blur', event => {
        event.target.style.border = '';
    })
    item.preventDefault(); //prevent nav default
})
});

// 5-wheel
function zoom(event){
    scale += event.deltaY*-0.01;
    event.preventDefault();
    scale = Math.min(Math.max(.125, scale), 4);
    elem.style.transform = `scale(${scale})`;
}
let scale = 1;
const elem = document.querySelector('img');
elem.onwheel = zoom;

// 6-load
window.addEventListener('load', (event) => {
    console.log('this is a load event!');
});

// 7-scroll
button.addEventListener('click', function(event){
    window.scrollTo(0,0);
});

// 8-dblclick
footer.addEventListener('dblclick', function(event) {
    footer.style.background = 'yellow';
})

// 9-select
function selector(event){
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    selection.style.color = 'green';
}
contentP.addEventListener('select', selector);

// 10-contextmenu
heading.addEventListener('contextmenu', event => {
    event.preventDefault();
    heading.style.background = 'forestgreen';
});

