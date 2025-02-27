document.addEventListener("DOMContentLoaded", function() {
    // Simulate visitor count using local storage (this can be replaced with actual visitor counter logic)
    let visitorCount = localStorage.getItem("visitorCount");
    if (!visitorCount) {
        visitorCount = 1;
    } else {
        visitorCount = parseInt(visitorCount) + 1;
    }
    localStorage.setItem("visitorCount", visitorCount);
    document.getElementById("visitorCount").innerText = visitorCount;
});
