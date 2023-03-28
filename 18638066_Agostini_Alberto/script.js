const starscream = document.getElementsByClassName("screamer");
const about = document.getElementsByClassName('about');
const lugnut = document.getElementsByClassName("about2");

about[0].addEventListener('mouseover', (e) => {
    starscream[0].style.visibility = 'visible';
    lugnut[0].style.display = "unset";
    lugnut[0].style.visibility = 'hidden';
    const body = document.querySelector("body");
    body.style.backgroundColor = "#c82000";
    const nav = document.getElementsByClassName("navigator")[0];
    nav.style.border = "3px solid #c82000"
});

about[0].addEventListener('mouseout', function handleMouseOut() {
    starscream[0].style.visibility = 'hidden';
    const body = document.querySelector("body");
    body.style.backgroundColor = "#98638a84";
    lugnut[0].style.display = "flex";
    lugnut[0].style.visibility = 'visible';
    const nav = document.getElementsByClassName("navigator")[0];
    nav.style.border = "3px solid #2d181822"
});
