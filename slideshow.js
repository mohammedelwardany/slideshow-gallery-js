var cont = document.getElementById("container");
var n = 2;

function next() {

    window.n = n + 1;
    bg = `background-image: url(./img/${n}.jpg);`;
    console.log(bg);
    cont.setAttribute("style", bg)
    if (n == 6) {
        n = 0;
    }
}

function pravious() {

    window.n = n - 1;
    bg = `background-image: url(./img/${n}.jpg);`;
    console.log(bg);
    cont.setAttribute("style", bg)
    if (n == 1) {
        n = 7;
    }
}

function slideshow() {
    window.interval = setInterval(next, 2000);
}

function stop() {
    clearInterval(interval);
}