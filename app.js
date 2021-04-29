// Menu

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');



    burger.addEventListener('click', () => {
        // toggle nav
        if (nav.classList == "nav-links nav-inactive") {
            nav.classList.remove('nav-inactive');
            nav.classList.add('nav-active');
        } else {
            nav.classList.remove('nav-active');
            nav.classList.add('nav-inactive');
        }


        // animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5 ease forwards ${index / 7 + 2.5}s`;
            }
        });
        // burger animation
        burger.classList.toggle('toggle');
    });


};

navSlide();



