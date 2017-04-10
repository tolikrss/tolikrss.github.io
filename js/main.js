var fl = false,
    activeSlide = 0,
    sliders = document.getElementsByClassName('slide');
console.log(sliders);

function toggle() {
    var menu = document.getElementById('menu-show');
    if (fl) {
        menu.style.display = 'none'
        fl = !fl;
    } else {
        menu.style.display = 'block';
        fl = !fl;
    }
}

function displayNone() {
    for (var i = 0; i < sliders.length; i++) {
        if (i !== activeSlide) {
            sliders[i].style.display = 'none';
        }
    }
}

function next() {
    // Array.fotEach.call(sliders, function(element) {
    //
    // });
    if (activeSlide === (sliders.length - 1)) {
        activeSlide = 0;
    } else {
        activeSlide++;
    }
    sliders[activeSlide].style.display = 'block';
    displayNone();
}

function previous() {
    if (activeSlide === 0) {
        activeSlide = sliders.length - 1;
    } else {
        activeSlide--;
    }
    sliders[activeSlide].style.display = 'block';
    displayNone();
}
