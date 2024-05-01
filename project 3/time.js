function updateParticles() {
    let today = new Date();
    let thisSecond = today.getSeconds();

    // Map the number of seconds to a hue value between 0 and 360
    let mappedHue = map(thisSecond, 0, 59, 0, 360);

    // Set the background color of the particles-js div
    let particlesDiv = document.getElementById('particles-js');
    particlesDiv.style.background = "hsl(" + mappedHue + ", 100%, 50%)";

    // Set the background color of the overlay div
    let overlayDiv = document.getElementById('overlay');
    overlayDiv.style.backgroundColor = "hsla(" + mappedHue + ", 100%, 50%, 0.5)"; // 50% transparent

    // Change the size of the div based on the current amount of seconds
    let element = document.getElementById("myDiv");
    let mappedWidth = map(thisSecond, 0, 59, 0, 200); // Map seconds to width
    let mappedHeight = map(thisSecond, 0, 59, 0, 100); // Map seconds to height
    element.style.width = mappedWidth + "px";
    element.style.height = mappedHeight + "px";
}

// Call the updateParticles function every second
setInterval(updateParticles, 100);
