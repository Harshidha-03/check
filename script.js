

/* REVEAL ANIMATION */

const reveals =
document.querySelectorAll('.reveal');



window.addEventListener('scroll', () => {

    reveals.forEach((element) => {

        const windowHeight =
        window.innerHeight;

        const revealTop =
        element.getBoundingClientRect().top;

        const revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){

            element.classList.add('active');

        }

    });

});



/* NAVBAR SHADOW */

window.addEventListener('scroll', () => {

    const navbar =
    document.querySelector('.navbar');

    if(window.scrollY > 50){

        navbar.style.boxShadow =
        '0 10px 30px rgba(0,0,0,0.25)';

    }

    else{

        navbar.style.boxShadow =
        'none';

    }

});