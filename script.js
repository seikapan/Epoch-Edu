document.addEventListener("DOMContentLoaded", function() {
    showMode('learn'); // Default mode

    // Drag and drop functionality
    const draggables = document.querySelectorAll(".draggable");
    const dropzones = document.querySelectorAll(".dropzone");

    draggables.forEach(draggable => {
        draggable.addEventListener("dragstart", function(e) {
            e.dataTransfer.setData("text", e.target.id);
        });
    });

    dropzones.forEach(dropzone => {
        dropzone.addEventListener("dragover", function(e) {
            e.preventDefault();
        });

        dropzone.addEventListener("drop", function(e) {
            e.preventDefault();
            const id = e.dataTransfer.getData("text");
            const draggedElement = document.getElementById(id);

            if (dropzone.getAttribute("data-correct") === id) {
                dropzone.textContent = draggedElement.textContent;
                dropzone.style.backgroundColor = "#2ecc71"; // Green for correct
                draggedElement.remove(); // Remove from draggable area
            } else {
                dropzone.style.backgroundColor = "#e74c3c"; // Red for incorrect
                setTimeout(() => dropzone.style.backgroundColor = "", 1000); // Reset color
            }
        });
    });
});

// Function to switch between modes
function showMode(mode) {
    document.querySelectorAll(".mode").forEach(section => {
        section.style.display = "none";
    });
    document.getElementById(mode).style.display = "block";
}
