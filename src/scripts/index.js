
// import 'bootstrap';
// Or import specific plugins
// import 'bootstrap/js/dist/util';
// import 'bootstrap/js/dist/dropdown';
// import 'bootstrap/js/dist/collapse.js';

// import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// import '../styles/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss';

import { updateCarousel, createScrollIndicator, handleSwipe } from './cardCarousel';
import { } from './tabsAutomatic';



// Lianne Dev Env IMAGES
import myLogo from '../assets/icons/li_2024-logo1.svg';
import icon99 from '../assets/icons/icon-99d.svg';
import iconBehance from '../assets/icons/icon-behance.svg';
import iconLinkedin from '../assets/icons/icon-linkedin.svg';
import bgImage from '../assets/hero-background.png';
import svcImage from '../assets/services-image-v4_4000x2120.png';
import profileImage from '../assets/profile-img.png';
import iconHtml from '../assets/icons/icon_html-75x75.svg';
import iconCss from '../assets/icons/icon_css-75x75.svg';
import iconJs from '../assets/icons/icon_js-75x75.svg';
import iconBootstrap from '../assets/icons/icon_bootstrap-95x75.svg';
import iconSass from '../assets/icons/icon_sass-95x75.svg';
import iconWebpack from '../assets/icons/icon_webpack-75x75.svg';
import iconNode from '../assets/icons/icon_node-js-75x75.svg';
import iconGithub from '../assets/icons/icon_github-75x75.svg';
import iconWpengine from '../assets/icons/icon_wpengine-75x75.svg';
import iconPhp from '../assets/icons/icon_php-95x75.svg';
import iconPs from '../assets/icons/icon_ps-75x75.svg';
import iconAi from '../assets/icons/icon_ai-75x75.svg';
import iconFigma from '../assets/icons/icon_figma-75x75.svg';
import iconWp from '../assets/icons/icon_wp-75x75.svg';
import iconSalesforce from '../assets/icons/icon_salesforce-95x75.svg';
import iconModx from '../assets/icons/icon_modx-75x75.svg';
import iconShopify from '../assets/icons/icon_shopify-75x75.svg';
import iconDuda from '../assets/icons/icon_duda-95x75.svg';
import iconJira from '../assets/icons/icon_jira-75x75.svg';
import iconMonday from '../assets/icons/icon_monday-250x75.svg';
import iconLocation from '../assets/icons/icon-location.svg';
import iconLink from '../assets/icons/icon-link.svg';


function loadImages() {
    let logos = document.querySelectorAll('.js-logo-image');
    let locations = document.querySelectorAll('.js-location-icon');
    let links = document.querySelectorAll('.js-link-icon');

    logos.forEach(logo => { // Loop for multiple image uses
        logo.src = myLogo;
    });

    locations.forEach(loc => { // Loop for multiple image uses
        loc.src = iconLocation;
    });

    links.forEach(link => { // Loop for multiple image uses
        link.src = iconLink;
    });
    
    document.querySelector('.js-icon-99-icon').src = icon99
    document.querySelector('.js-icon-behance-icon').src = iconBehance
    document.querySelector('.js-icon-linkedin-icon').src = iconLinkedin
    document.querySelector('.js-bg-image').src = bgImage
    document.querySelector('.js-svc-image').src = svcImage
    document.querySelector('.js-profile-image').src = profileImage
    document.querySelector('.js-html-icon').src = iconHtml
    document.querySelector('.js-css-icon').src = iconCss
    document.querySelector('.js-js-icon').src = iconJs
    document.querySelector('.js-bootstrap-icon').src = iconBootstrap
    document.querySelector('.js-sass-icon').src = iconSass
    document.querySelector('.js-webpack-icon').src = iconWebpack
    document.querySelector('.js-node-icon').src = iconNode
    document.querySelector('.js-github-icon').src = iconGithub
    document.querySelector('.js-wpengine-icon').src = iconWpengine
    document.querySelector('.js-php-icon').src = iconPhp
    document.querySelector('.js-ps-icon').src = iconPs
    document.querySelector('.js-ai-icon').src = iconAi
    document.querySelector('.js-figma-icon').src = iconFigma
    document.querySelector('.js-wp-icon').src = iconWp
    document.querySelector('.js-salesforce-icon').src = iconSalesforce
    document.querySelector('.js-modx-icon').src = iconModx
    document.querySelector('.js-shopify-icon').src = iconShopify
    document.querySelector('.js-duda-icon').src = iconDuda
    document.querySelector('.js-jira-icon').src = iconJira
    document.querySelector('.js-monday-icon').src = iconMonday


}


// function accordionCollapse() {
//     const collapseElementList = document.querySelectorAll('.collapse')
//     const collapseList = [...collapseElementList].map(collapseEl => new bootstrap.Collapse(collapseEl))
// }

loadImages()
// accordionCollapse()