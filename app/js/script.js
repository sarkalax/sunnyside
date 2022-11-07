let hamburger = document.querySelector('.hamburger'),
    navMobile = document.querySelectorAll(".vyber"),
    wrapper = document.querySelector(".wrapper");

hamburger.addEventListener("click", () => {

    //close hamburger menu
    if (hamburger.classList.contains("open")){
        
        wrapper.classList.remove("no-scroll")
        hamburger.classList.remove("open")

        navMobile.forEach((parEl) => {
            parEl.classList.add("hide-navM")
        })

    }

    //open hamburger menu
    else {
        wrapper.classList.add("no-scroll")
        hamburger.classList.add("open")

        navMobile.forEach((parEl) => {
            parEl.classList.remove("hide-navM")
        })

        // navMobile.classList.remove("hide-navM")

    }

})