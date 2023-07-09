// write js code here if required
// Get the element where the timer will be displayed
      let timerDisplay = document.getElementById("timer");

      // Set the current date and time
      let currentDate = new Date();

      // Update the timer every second
      setInterval(function () {
        // Get the current date and time
        currentDate = new Date();

        // Update the timer display
        timerDisplay.innerHTML = currentDate.toLocaleString();
      }, 1000);