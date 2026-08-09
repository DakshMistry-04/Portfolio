/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", function () {

    mobileMenu.classList.toggle("active");

});


/* Close mobile menu after clicking a link */

const mobileLinks = document.querySelectorAll(".mobile-menu a");

mobileLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        mobileMenu.classList.remove("active");

    });

});


/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    /*
       Store form information inside a JavaScript object
    */

    const contactDetails = {

        name: document.getElementById("name").value,

        phone: document.getElementById("phone").value,

        email: document.getElementById("email").value,

        address: document.getElementById("address").value

    };


    /*
       Display the object in the browser console.
       This satisfies the task requirement of storing
       contact form information in a JavaScript object.
    */

    console.log("Contact Form Data:");
    console.log(contactDetails);


    alert(
        "Thank you, " +
        contactDetails.name +
        "! Your message has been recorded."
    );


    contactForm.reset();

});


/* =====================================================
   SCROLL REVEAL ANIMATION
===================================================== */

const revealElements = document.querySelectorAll(
    ".section-heading, .section-intro, .skill-card, .project-card, .timeline-item, .stat-card, .contact-header"
);


const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(function (element) {

    element.classList.add("reveal");

    observer.observe(element);

});