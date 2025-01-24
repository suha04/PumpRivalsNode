document.addEventListener("DOMContentLoaded", function() {
    
    //All the a hrefs that should lead to forms

    const loginAs = document.querySelectorAll(".loginA");
    const registerAs = document.querySelectorAll(".registerA");
    const forgotPwAs = document.querySelectorAll(".forgotPwA");


    //All the topic forms

    const loginForm = document.querySelector("#login");
    const registerForm = document.querySelector("#register");
    const forgotPwForm = document.querySelector("#forgotPw");

    //Give them EventListeners

    // When login hrefs are pressed:

    loginAs.forEach(loginA => {
        loginA.addEventListener("click", (e) =>
        {

            // I hate #
            e.preventDefault()

            // Login is showed
            loginForm.classList.remove("hidden");
            // Others are playing hide and seek
            registerForm.classList.add("hidden");
            forgotPwForm.classList.add("hidden");
        })
    });

    // When register hrefs are pressed:

    registerAs.forEach(registerA => {
        registerA.addEventListener("click", (e) =>
        {
             // I hate #
             e.preventDefault()
            // Register is showed
            registerForm.classList.remove("hidden");
            // Others are playing hide and seek
            loginForm.classList.add("hidden");
            forgotPwForm.classList.add("hidden");
        })
    });

     // When forgotPw hrefs are pressed:

     forgotPwAs.forEach(forgotPwA => {
        forgotPwA.addEventListener("click", (e) =>
        {
             // I hate #
             e.preventDefault()
            // Register is showed
            forgotPwForm.classList.remove("hidden");
            // Others are playing hide and seek
            loginForm.classList.add("hidden");
            registerForm.classList.add("hidden");
        })
    });

});
