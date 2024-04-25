// Function to update the particles configuration
function updateParticles() {
    let today = new Date();
    let thisSecond = today.getSeconds();

    // Map the number of seconds to a range of particles from 1 to 400
    let mappedParticles = map(thisSecond, 0, 59, 1, 400);

    // Modify the number of particles based on the mapped value
    let particlesJSON = {
        "particles": {
            "number": {
                "value": mappedParticles // Set the number of particles to the mapped value
            },
            // Other particle configurations...
        },
        "interactivity": {
            // Interactivity configurations...
        }
    };

    // Use the modified configuration
    particlesJS('particles-js', particlesJSON);
}

// Call the updateParticles function initially
updateParticles();

// Call the updateParticles function every second
setInterval(updateParticles, 1000);

// DO NOT TOUCH THIS!
function map(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}
