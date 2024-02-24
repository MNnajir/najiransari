// /*======================== toggle icon navbar=============*/

// let menuIconcon = document.querySelector('#menu-icon'); 
// let navbar = document.querySelector('.navbar');

// menuIcon.onclick = () => { 
//     menuIcon.classList.toggle('bx-x'); 
//     navbar.classList.toggle('active');
// };


// // using sections
// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150 ;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');
//         if(top >= offset && top < offset + height) {
//           navLinks.forEach (links => {
//            links.classList.remove ('active');
//            document.querySelector ('header nav a[href*= ' + id + ']').classList.add('active');
//          });
//         };
//     });

//                    // using navbar

//    let header = document.querySelector('header');
//    header.classList.toggle('sticky', window.scrollY > 100);
 
//    /*======================== remove toggle icon and navbar when click navbar link (scroll)=============*/
//    menuIcon.classList.remove('bx-x'); 
//    navbar.classList.remove('active');
// };

// /*======================== scroll reveal =============*/

//  ScrollReveal({ 
//     reset: true,
//     distance: '80px',
//     duration:2000,
//     delay:200
// });

// ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
// ScrollReveal().reveal('.home-image, .Services-container, .portfolio-box, .contact form', { origin: 'bottom' });

// /*======================== types js=============*/
//  const typed = new typed('.multiple-text', {
//     string: ['Forntend Developer', 'Youtuber', 'Student', 'Blogger'],
//     typeSpeed: 100,
//     backSpeed: 100,
//     backDelay: 1000,
//     loop: true
//  });




// Selecting the menu icon
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Attaching click event listener to the menu icon
menuIcon.onclick = () => { 
    menuIcon.classList.toggle('bx-x'); 
    navbar.classList.toggle('active');
};

// Using sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150 ;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach (links => {
                links.classList.remove ('active');
            });
            document.querySelector ('header nav a[href*="' + id + '"]').classList.add('active');
        };
    });

    // Using navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
};

// Remove toggle icon and navbar when clicking navbar link (scroll)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x'); 
        navbar.classList.remove('active');
    });
});

/*======================== scroll reveal =============*/

ScrollReveal({ 
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-image, .Services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-imge', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/*======================== types js=============*/
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Youtuber', 'Student', 'Blogger'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
