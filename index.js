let timeoutId; // Declare a variable to store the timeout ID

// Get references to the input elements and the output spans
const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");

const yearSpan = document.getElementById("year-span");
const monthSpan = document.getElementById("month-span");
const daySpan = document.getElementById("day-span");

// Add an event listener to the button to trigger the age calculation
document
  .getElementById("calculate-btn")
  .addEventListener("click", calculateAge);

function calculateAge() {
  const birthDate = new Date(
    `${yearInput.value}-${monthInput.value}-${dayInput.value}`
  );
  const currentDate = new Date();

  if (isNaN(birthDate.getTime())) {
    document.getElementById("alert").innerHTML =
      "<center>Enter a valid number</center>";
    return;
  }

  if (birthDate > currentDate) {
    document.getElementById("alert").innerHTML =
      "<center>Must be in past </center>";
    return;
  }

  const ageInMilliseconds = currentDate - birthDate;

  const years = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor(
    (ageInMilliseconds / (1000 * 60 * 60 * 24 * 30.42)) % 12
  );
  const days = Math.floor((ageInMilliseconds / (1000 * 60 * 60 * 24)) % 30.42);

  yearSpan.textContent = years;
  monthSpan.textContent = months;
  daySpan.textContent = days;
}
