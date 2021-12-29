let countElement = document.getElementById("count-element");
let savePassenger = document.getElementById("save-passengers");
let passengerNumber = 0;

function passengerNumberCounter() {
  passengerNumber = passengerNumber + 1;
  countElement.textContent = passengerNumber;
}

function save() {
  let countPassengerData = " " + passengerNumber + " - ";
  savePassenger.textContent += countPassengerData;
  countElement.textContent = 0;
  passengerNumber = 0;
}
