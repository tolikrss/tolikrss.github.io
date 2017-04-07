var fl = false;

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
