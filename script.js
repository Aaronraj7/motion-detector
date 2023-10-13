function updateMotionStatus(message) {
    const motionStatusDiv = document.getElementById('motion-status');
    motionStatusDiv.textContent = message;
}

setInterval(function() {
    // Make an AJAX request to your server endpoint to fetch motion data
    fetch('/motion-data')
        .then(response => response.json())
        .then(data => {
            updateMotionStatus(data.message);
        })
        .catch(error => {
            console.error('Error fetching motion data:', error);
        });
}, 5000); // Update status every 5 seconds (5000 milliseconds)
