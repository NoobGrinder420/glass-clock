let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

function updateClock() {
    let curr_date = new Date();
    let curr_hour = curr_date.getHours();
    let curr_minute = curr_date.getMinutes();
    let curr_seconds = curr_date.getSeconds();

    // Calculate the angles for each hand
    let calc_hour = (curr_hour * 30) + (curr_minute * (30 / 60)) + (curr_seconds * (30 / 60 / 60));
    let calc_minute = (curr_minute * 6) + (curr_seconds * 6 / 60);
    let calc_second = (curr_seconds * 6);

    // Apply the rotation to each hand
    hours.style.transform = `rotate(${calc_hour}deg)`;
    minutes.style.transform = `rotate(${calc_minute}deg)`;
    seconds.style.transform = `rotate(${calc_second}deg)`;

    // Request the next frame
    requestAnimationFrame(updateClock);
}

// Initialize the clock
requestAnimationFrame(updateClock);
