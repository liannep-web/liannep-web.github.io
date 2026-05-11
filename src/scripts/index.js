
import 'bootstrap';
// Or import specific plugins
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';

// import '../styles/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss';


// Lianne Dev Env IMAGES
import myLogo from '../assets/icons/li_2024-logo1.svg';
import icon99 from '../assets/icons/icon-99d.svg';
import iconBehance from '../assets/icons/icon-behance.svg';
import iconLinkedin from '../assets/icons/icon-linkedin.svg';
import bgImage from '../assets/hero-background.png';
import svcImage from '../assets/services-image-v3_800x510.jpg';


function loadImages() {
    let logos = document.querySelectorAll('.js-logo-image');

    // console.log(logos);
    logos.forEach(logo => { // Loop for multiple image uses
        logo.src = myLogo;
    });
    
    document.querySelector('.js-icon-99-image').src = icon99
    document.querySelector('.js-icon-behance-image').src = iconBehance
    document.querySelector('.js-icon-linkedin-image').src = iconLinkedin
    document.querySelector('.js-bg-image').src = bgImage
    document.querySelector('.js-svc-image').src = svcImage
}


loadImages()

