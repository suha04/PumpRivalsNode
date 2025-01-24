document.addEventListener("DOMContentLoaded", () => {
    //! NEM MŰKÖDIK!

    // RELOAD TO DASHBOARD - majd lehet lesz egy külön reload.js fájl
    const reloadButton = document.querySelector(".reloadDashboard");
    reloadButton.addEventListener("click", function () {
        location.href = "/dashboard";
    });

    // EDIT DATA
    const editButton = document.getElementById("editButton");
    const saveButton = document.getElementById("saveButton");
    const inputs = document.querySelectorAll("input:not([type='button'])");

    inputs.forEach((input, index) => {
        input.setAttribute("tabindex", index + 1);
    });
    saveButton.setAttribute("tabindex", inputs.length + 1);

    editButton.addEventListener("click", () => {
        // Enable the input fields
        inputs.forEach(input => input.removeAttribute("disabled"));
        editButton.classList.add("hidden");
        saveButton.classList.remove("hidden");
    });

    saveButton.addEventListener("click", () => {
        // Save the profile information
        const profileData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            mobile: document.getElementById("mobile").value,
            password: document.getElementById("password").value
        };
        console.log("Profile saved:", profileData);
        alert("Profile saved successfully!");

        // Disable the input fields again
        inputs.forEach(input => input.setAttribute("disabled", "true"));
        editButton.classList.remove("hidden");
        saveButton.classList.add("hidden");
    });
});
