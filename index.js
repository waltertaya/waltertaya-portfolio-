function topNav() {
    document.getElementById("navbar").style.display="unset";
}
function showNav() {
    if (document.getElementById("navbar").style.display=="unset") {
        document.getElementById("navbar").style.display="none";
    }
}
let sections = document.querySelectorAll("section");
let navbar = document.querySelectorAll("nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navbar.forEach(links => {
                links.classList.remove('active');
                document.querySelector("nav a[href*=" + id + "]").classList.add('active');
            });
        };
    });
};