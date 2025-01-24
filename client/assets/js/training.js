document.addEventListener("DOMContentLoaded", function () {
    // Select all dashTopic elements
    const dashTopics = document.querySelectorAll(".dashTopic");

    // Select the submit button div
    const submitButtonDiv = document.getElementById("submitDiv");

    // Hide the submit button at the start
    submitButtonDiv.classList.add("hidden");

    // Initially hide all dashTopics except the first one
    dashTopics.forEach((topic, index) => {
        if (index !== 0) {
            topic.classList.add("hidden");
        }
    });

    // Function to handle submit button visibility
    function updateButtonVisibility() {
        // Get the last dashTopic in the list
        const lastTopic = dashTopics[dashTopics.length - 1];
        
        // Check if any bubble within the last topic has the 'selected' class
        const selectedBubble = lastTopic.querySelector(".bubble.selected");

        if (selectedBubble) {
            // Show submit button if a selection exists in the last topic
            submitButtonDiv.classList.remove("hidden");
        } else {
            // Hide submit button if no selection is made
            submitButtonDiv.classList.add("hidden");
        }
    }

    // Function to handle selection and topic visibility
    function chooseOptions(bubble) {
        // Find the closest topic (parent element) of the clicked bubble
        const currentTopic = bubble.closest(".dashTopic");

        // Get the index of the current topic within the dashTopics NodeList
        const currentTopicIndex = Array.from(dashTopics).indexOf(currentTopic);

        // Check if the clicked bubble is already selected
        if (!bubble.classList.contains("selected")) {
            // Remove 'selected' class and 'X' from all bubbles in the current topic
            currentTopic.querySelectorAll(".bubble").forEach(b => {
                b.classList.remove("selected");
                const bubbleX = b.querySelector(".fa-xmark");
                if (bubbleX) bubbleX.remove();
            });

            // Add 'selected' class to the clicked bubble
            bubble.classList.add("selected");

            // Add 'X' icon to the clicked bubble if it doesn't exist
            if (!bubble.querySelector(".fa-xmark")) {
                let closeX = document.createElement("i");
                closeX.classList.add("fa-solid", "fa-xmark");
                closeX.style.cursor = "pointer";  // Make the "X" clickable
                closeX.addEventListener("click", function (event) {
                    event.stopPropagation(); // Prevent bubble click event from triggering
                    deselectBubble(bubble, currentTopicIndex);
                });
                bubble.appendChild(closeX);
            }

            // Show the next topic if it exists
            const nextTopic = dashTopics[currentTopicIndex + 1];
            if (nextTopic) {
                nextTopic.classList.remove("hidden");
            }
        }
    }

    // Function to deselect a bubble by clicking the "X" icon
    function deselectBubble(bubble, currentTopicIndex) {
        bubble.classList.remove("selected");
        
        // Remove the "X" icon
        const closeX = bubble.querySelector(".fa-xmark");
        if (closeX) closeX.remove();

        // Hide all topics that come after the current topic
        for (let i = currentTopicIndex + 1; i < dashTopics.length; i++) {
            dashTopics[i].classList.add("hidden");

            // Remove selection from all bubbles in hidden topics
            dashTopics[i].querySelectorAll(".bubble").forEach(b => {
                b.classList.remove("selected");
                const bubbleX = b.querySelector(".fa-xmark");
                if (bubbleX) bubbleX.remove();
            });
        }

        // Update submit button visibility
        updateButtonVisibility();
    }

    // Add click event listener to each bubble
    document.querySelectorAll(".bubble").forEach((bubble) => {
        bubble.addEventListener("click", function () {
            chooseOptions(this);

            // Check and update the submit button visibility
            updateButtonVisibility();
        });
    });






    //RELOAD TO DASHBOARD | TALÁN JOBB LENNE KÜLÖN FILE
    const reloadButton = document.querySelector(".reloadDashboard");
    reloadButton.addEventListener("click", function () {
        location.reload();
    });
});




