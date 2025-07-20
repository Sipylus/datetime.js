// Function to get the current time and display it on the page
function getthedate() {
  const dayarray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const montharray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  let mydate = new Date();
  let year = mydate.getFullYear(); // Use getFullYear() instead of getYear()
  let day = mydate.getDay();
  let month = mydate.getMonth();
  let daym = mydate.getDate();
  let hours = mydate.getHours();
  let minutes = mydate.getMinutes();
  let seconds = mydate.getSeconds();
  let dn = "AM";

  if (hours >= 12) dn = "PM";
  if (hours > 12) hours = hours - 12;
  if (hours === 0) hours = 12;
  if (minutes <= 9) minutes = "0" + minutes;
  if (seconds <= 9) seconds = "0" + seconds;

  // Format the date string without the leading zero for the day
  let cdate = `${dayarray[day]}, ${montharray[month]} ${daym}, ${year} at ${hours}:${minutes}:${seconds} ${dn}`;

  // Update the clock element if it exists
  const clockElement = document.getElementById("clock");
  if (clockElement) {
    clockElement.innerHTML = `${cdate}.`;
  }
}

// Function to start the clock
function goforit() {
  setInterval(getthedate, 1000);  // Continuously call getthedate every second
}

// Start the clock when the page is loaded
window.onload = goforit;
