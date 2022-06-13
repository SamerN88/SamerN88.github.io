/*!
* Start Bootstrap - Grayscale v7.0.5 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }

        const masthead = document.getElementsByClassName('masthead')[0]
        let startOfAboutSection = parseInt(getComputedStyle(masthead).height);
        if (window.scrollY < startOfAboutSection) {  // when the About section starts
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Close menu if user taps outside
    const menu = document.getElementById('navbarResponsive');
    // const navLinks = document.getElementsByClassName('nav-link');
    function menuIsOpen() {
        return getComputedStyle(menu).display !== 'none';
    }
    window.addEventListener('click', (event) => {
        if ((!responsiveNavItems.includes(event.target)) && menuIsOpen()) {
            navbarToggler.click();
        }
    });
    window.addEventListener('touchstart', (event) => {
        if ((!responsiveNavItems.includes(event.target)) && menuIsOpen()) {
            navbarToggler.click();
        }
    });

});