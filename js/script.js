document.addEventListener("DOMContentLoaded", function() {
    // Select all milestone elements
    const milestones = document.querySelectorAll(".milestone");
    const detailBox = document.querySelector(".milestone-detail");

    // Function to show milestone details
    function showDetail(event) {
        const detail = event.target.getAttribute("data-detail");
        detailBox.querySelector("p").textContent = detail;
        detailBox.classList.add("active");
    }

    // Function to hide milestone details when not hovering
    function hideDetail() {
        detailBox.classList.remove("active");
    }

    // Attach event listeners to milestones
    milestones.forEach(function(milestone) {
        milestone.addEventListener("mouseover", showDetail);
        milestone.addEventListener("mouseout", hideDetail);
    });
});
