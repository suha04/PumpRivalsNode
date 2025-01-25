document.addEventListener("DOMContentLoaded", function () {
    const dashTopics = document.querySelectorAll(".dashTopic");
    const submitButtonDiv = document.getElementById("submitDiv");

    // Initially hide the submit button and all dashTopics except the first one
    submitButtonDiv.classList.add("hidden");
    dashTopics.forEach((topic, index) => {
        if (index !== 0) topic.classList.add("hidden");
    });

    // Function to update submit button visibility
    function updateButtonVisibility() {
        const lastTopic = dashTopics[dashTopics.length - 1];
        const isSelected = lastTopic.querySelector(".bubble.selected");

        if (isSelected) {
            submitButtonDiv.classList.remove("hidden");
        } else {
            submitButtonDiv.classList.add("hidden");
        }
    }

    // Function to handle selection and topic visibility
    function chooseOptions(button) {
        const currentTopic = button.closest(".dashTopic");
        const currentTopicIndex = Array.from(dashTopics).indexOf(currentTopic);

        if (!button.classList.contains("selected")) {
            currentTopic.querySelectorAll(".bubble").forEach(b => {
                b.classList.remove("selected");
                b.querySelector(".fa-xmark")?.remove();
                b.disabled = false; // Enable other buttons
            });

            button.classList.add("selected");
            button.disabled = true; // Disable the selected button

            if (!button.querySelector(".fa-xmark")) {
                let closeX = document.createElement("i");
                closeX.classList.add("fa-solid", "fa-xmark");
                closeX.setAttribute("role", "button");
                closeX.setAttribute("aria-label", "Deselect");
                closeX.tabIndex = 0;
                closeX.style.cursor = "pointer";
                closeX.addEventListener("click", (event) => {
                    event.stopPropagation();
                    deselectBubble(button, currentTopicIndex);
                });
                button.appendChild(closeX);
            }

            const nextTopic = dashTopics[currentTopicIndex + 1];
            if (nextTopic) nextTopic.classList.remove("hidden");
        }

        updateButtonVisibility();
    }

    // Function to deselect a bubble by clicking the "X" or pressing Enter/Space
    function deselectBubble(button, currentTopicIndex) {
        button.classList.remove("selected");
        button.querySelector(".fa-xmark")?.remove();
        button.disabled = false; // Re-enable the button when deselected

        for (let i = currentTopicIndex + 1; i < dashTopics.length; i++) {
            dashTopics[i].classList.add("hidden");
            dashTopics[i].querySelectorAll(".bubble").forEach(b => {
                b.classList.remove("selected");
                b.querySelector(".fa-xmark")?.remove();
                b.disabled = false; // Re-enable other buttons in subsequent topics
            });
        }

        updateButtonVisibility();
    }

    // Add click and keyboard accessibility to each button
    document.querySelectorAll(".bubble").forEach((button) => {
        button.tabIndex = 0; // Make div focusable for keyboard navigation

        button.addEventListener("click", function () {
            chooseOptions(this);
        });

        button.addEventListener("keydown", function (event) {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                chooseOptions(this);
            }
        });
    });

    // Handle X button keyboard accessibility
    document.addEventListener("keydown", function (event) {
        if (event.target.classList.contains("fa-xmark") && (event.key === "Enter" || event.key === " ")) {
            event.preventDefault();
            event.target.click();
        }
    });

    // Section for Scroll Feature
    // ==================================================================
    // To disable the scroll feature, simply comment out the block below.

    const enableScrollFeature = true; // Set this to false if you don't want scroll behavior

    if (enableScrollFeature) {
        // Manage scroll focus for overflow elements
        document.querySelectorAll(".scrollArea").forEach(area => {
            area.setAttribute("tabindex", "-1");

            area.addEventListener("focusin", function (event) {
                const focusedElement = event.target;
                const areaRect = area.getBoundingClientRect();
                const focusedRect = focusedElement.getBoundingClientRect();

                if (focusedRect.right > areaRect.right || focusedRect.left < areaRect.left) {
                    focusedElement.scrollIntoView({
                        behavior: "smooth",
                        block: "nearest",
                        inline: "center"
                    });
                }
            });

            area.addEventListener("click", function () {
                this.removeAttribute("tabindex");
                this.focus();
            });

            area.addEventListener("blur", function () {
                this.setAttribute("tabindex", "-1");
            });

            // Scroll to the current scrollArea when it becomes visible
            area.addEventListener("transitionend", function () {
                if (!area.classList.contains("hidden")) {
                    area.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            });
        });
    }

    // ==================================================================

    // Reload to dashboard on header click
    document.querySelector(".reloadDashboard").addEventListener("click", function () {
        location.href = "/dashboard";
    });
});
