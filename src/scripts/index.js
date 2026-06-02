
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
import projectStories from '../assets/1projects_stories.png';
import projectCardBenefits from '../assets/2projects_card-benefits.png';
import projectSleekComponents from '../assets/3projects_sleek-components.png';
import projectReuseComponents from '../assets/4projects_reusable-components.png';
import projectSandbox from '../assets/5projects_sandbox.png';
import projectBoostup from '../assets/6projects_boostup.png';


function loadImages() {
    let logos = document.querySelectorAll('.js-logo-image');
    let locations = document.querySelectorAll('.js-location-icon');
    let links = document.querySelectorAll('.js-link-icon');
    let behanceIcons = document.querySelectorAll('.js-icon-behance-icon');
    let linkedinIcons = document.querySelectorAll('.js-icon-linkedin-icon');
    let ninetynineIcons = document.querySelectorAll('.js-icon-99-icon');
    let bgImages = document.querySelectorAll('.js-bg-image');


    // console.log(logos.length, locations.length, links.length);

    if (logos.length || locations.length || links.length || behanceIcons.length || linkedinIcons.length || ninetynineIcons.length || bgImages.length) {

        logos.forEach(logo => { // Loop for multiple image uses
            logo.src = myLogo;
        });

        locations.forEach(loc => { // Loop for multiple image uses
            loc.src = iconLocation;
        });

        links.forEach(link => { // Loop for multiple image uses
            link.src = iconLink;
        });

        behanceIcons.forEach(behance => { // Loop for multiple image uses
            behance.src = iconBehance;
        });

        linkedinIcons.forEach(linkedin => { // Loop for multiple image uses
            linkedin.src = iconLinkedin;
        });

        ninetynineIcons.forEach(ninetynine => { // Loop for multiple image uses
            ninetynine.src = icon99;
        });

        bgImages.forEach(bg => { // Loop for multiple image uses
            bg.src = bgImage;
        });
    }

    
    const imageMap = {
        '.js-icon-99-icon': icon99,
        '.js-icon-behance-icon': iconBehance,
        '.js-icon-linkedin-icon': iconLinkedin,
        '.js-bg-image': bgImage,
        '.js-svc-image': svcImage,
        '.js-profile-image': profileImage,
        '.js-html-icon': iconHtml,
        '.js-css-icon': iconCss,
        '.js-js-icon': iconJs,
        '.js-bootstrap-icon': iconBootstrap,
        '.js-sass-icon': iconSass,
        '.js-webpack-icon': iconWebpack,
        '.js-node-icon': iconNode,
        '.js-github-icon': iconGithub,
        '.js-wpengine-icon': iconWpengine,
        '.js-php-icon': iconPhp,
        '.js-ps-icon': iconPs,
        '.js-ai-icon': iconAi,
        '.js-figma-icon': iconFigma,
        '.js-wp-icon': iconWp,
        '.js-salesforce-icon': iconSalesforce,
        '.js-modx-icon': iconModx,
        '.js-shopify-icon': iconShopify,
        '.js-duda-icon': iconDuda,
        '.js-jira-icon': iconJira,
        '.js-monday-icon': iconMonday,
        '.js-project-stories' : projectStories,
        '.js-project-card-benefits' : projectCardBenefits,
        '.js-sleek-components' : projectSleekComponents,
        '.js-reuse-components' : projectReuseComponents,
        '.js-project-sandbox' : projectSandbox,
        '.js-project-boostup' : projectBoostup

    };

    Object.entries(imageMap).forEach(([selector, src]) => {
        const element = document.querySelector(selector);
        if (element) element.src = src;
    });


}


// function accordionCollapse() {
//     const collapseElementList = document.querySelectorAll('.collapse')
//     const collapseList = [...collapseElementList].map(collapseEl => new bootstrap.Collapse(collapseEl))
// }

loadImages()
// accordionCollapse()