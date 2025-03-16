function updateDate() {
    const dateElement = document.getElementById('date');
    const curr_date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = curr_date.toLocaleDateString(undefined, options);

    // Request the next frame
    requestAnimationFrame(updateDate);
}

// Initialize the date display
requestAnimationFrame(updateDate);
