// Get the dropdown
const filter = document.getElementById("filter");

// Get all player cards
const cards = document.querySelectorAll(".col-md-4");

// Listen for dropdown changes
filter.addEventListener("change", function () {

    const selected = filter.value;

    cards.forEach(function(card) {

        // Get the position text from each card
        const position = card.innerText.toLowerCase();

        // Show all
        if (selected === "0") {
            card.style.display = "block";
        }

        // Forwards
        else if (
            selected === "1" &&
            (
                position.includes("center") ||
                position.includes("left wing") ||
                position.includes("right wing")
            )
        ) {
            card.style.display = "block";
        }

        // Defensemen
        else if (
            selected === "2" &&
            position.includes("defenseman")
        ) {
            card.style.display = "block";
        }

        // Goalies
        else if (
            selected === "3" &&
            position.includes("goalie")
        ) {
            card.style.display = "block";
        }

        // Hide everything else
        else {
            card.style.display = "none";
        }

    });

});