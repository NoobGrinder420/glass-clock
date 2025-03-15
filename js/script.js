let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

let set_clock = setInterval(function clock() {
  let curr_date = new Date();
  let curr_hour = curr_date.getHours();
  let curr_minute = curr_date.getMinutes();
  let curr_seconds = curr_date.getSeconds();
  

//   Hour Hand: Moves 30° per hour (360° ÷ 12 hours).
//   Minute Hand: Moves 6° per minute (360° ÷ 60 minutes).
//   Second Hand: Moves 6° per second (360° ÷ 60 seconds).

  let calc_hour = (curr_hour * 30) + (curr_minute * (30/60)) + (curr_seconds * (30/60/60));
  let calc_minute = (curr_minute*6) + (curr_seconds * 6/60);
  let calc_second = (curr_seconds*6);

  hours.style.transform = `rotate(${calc_hour}deg)`;
  minutes.style.transform = `rotate(${calc_minute}deg)`;
  seconds.style.transform = `rotate(${calc_second}deg)`;

}, 1000);
