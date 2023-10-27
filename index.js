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

function showProgress(){
    progressBars.forEach(progressBar=>{
        const value = progressBar.dataset.progress;
        progressBar.style.opacity = 1;
        progressBar.style.width = `${value}%`;
    });
}


function hideProgress() {
    progressBars.forEach(p => {
        p.style.opacity = 0;
        p.style.width = 0;
    });
}

const skillsSelection = document.getElementById("skills");

const progressBars = document.querySelectorAll('.progress-bar');

window.addEventListener('scroll', () => {
    const screenPos = window.innerHeight / 2;
    const sectionPos = skillsSelection.getBoundingClientRect().top;
    if (sectionPos < screenPos) {
        showProgress();
    }else{
        hideProgress();
    }
});