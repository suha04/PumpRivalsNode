document.addEventListener("DOMContentLoaded", () =>
{

    //! NEM MŰKÖDIK!

    //RELOAD TO DASHBOARD - majd lehet lesz egy külön reload.js fájl
    const reloadButton = document.querySelector(".reloadDashboard");
    reloadButton.addEventListener("click", function () {
        location.href = "/dashboard";
    });


    //EDIT DATA

    const editButton = document.querySelector(".button");
    const inputs = document.querySelectorAll("input:not([type='button'])");
    
    let isEditing = false;

    editButton.addEventListener("click", () => {
        if (!isEditing) {
            // Enable the input fields
            inputs.forEach(input => input.removeAttribute("disabled"));
            editButton.value = "Save Profile";
        } else {
            // Save the profile information (for now, just log it)
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
            editButton.value = "Edit Profile";
        }
        isEditing = !isEditing;
    });

});