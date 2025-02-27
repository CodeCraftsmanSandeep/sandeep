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

if (window.innerWidth < 768) {
    alert("This website is designed for desktop screens. Please use a larger screen.");
  }  
