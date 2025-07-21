// datetime.js — 1.1.0

function getthedate() {
  const dateOptions = {
    timeZone: 'America/New_York',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  const timeOptions = {
    timeZone: 'America/New_York',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  };

  const dateFormatter = new Intl.DateTimeFormat('en-US', dateOptions);
  const timeFormatter = new Intl.DateTimeFormat('en-US', timeOptions);

  const now = new Date();
  const formattedDate = dateFormatter.format(now);
  const formattedTime = timeFormatter.format(now);

  const clockElement = document.getElementById("clock");
  if (clockElement) {
    clockElement.innerHTML = `${formattedDate}, ${formattedTime}.`;
  }
}

function goforit() {
  getthedate();
  setInterval(getthedate, 1000);
}

window.onload = goforit;
