/* =========================================================
   AA MEETING WEBSITE
   JavaScript
   ========================================================= */


/* ---------------------------------------------------------
   MOBILE NAVIGATION
   --------------------------------------------------------- */

const navToggle =
    document.querySelector(".nav-toggle");

const navLinks =
    document.querySelector(".nav-links");


if (navToggle && navLinks) {


    navToggle.addEventListener("click", () => {


        const isOpen =
            navLinks.classList.toggle("open");


        navToggle.setAttribute(
            "aria-expanded",
            isOpen
        );


    });


    document
        .querySelectorAll(".nav-links a")
        .forEach((link) => {


            link.addEventListener(
                "click",
                () => {


                    navLinks.classList.remove(
                        "open"
                    );


                    navToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );


                }
            );


        });


}


/* ---------------------------------------------------------
   SCROLL REVEAL
   --------------------------------------------------------- */

const revealElements =
    document.querySelectorAll(
        ".content-box, " +
        ".meeting-photo, " +
        ".page-header, " +
        ".hero-image, " +
        ".hero-content"
    );


revealElements.forEach((element) => {

    element.classList.add("reveal");

});


if ("IntersectionObserver" in window) {


    const observer =
        new IntersectionObserver(
            (entries, observer) => {


                entries.forEach((entry) => {


                    if (!entry.isIntersecting) {

                        return;

                    }


                    entry.target.classList.add(
                        "visible"
                    );


                    observer.unobserve(
                        entry.target
                    );


                });


            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach((element) => {

        observer.observe(element);

    });


} else {


    revealElements.forEach((element) => {

        element.classList.add(
            "visible"
        );

    });


}