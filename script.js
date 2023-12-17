// Set up the the function for the clock
function cycleClock() {
        // Call for current time
        const nowTime = new Date();
        // Set up the hours, minutes, and seconds
        const hourTime = String(nowTime.getHours()).padStart(2, '0');
        const minuteTime = String(nowTime.getMinutes()).padStart(2, '0');
        const secondTime =String(nowTime.getSeconds()).padStart(2, '0');
        // Make a string to display the HH:MM:SS model
        const timeString = `The current time is:  ${hourTime}:${minuteTime}:${secondTime}`;
        // Bring the 'todo-clock' id here to display the time
        document.getElementById('display-clock').innerText = timeString;

        // Change the background color for each color of the day
        if (hourTime >= 0 && hourTime < 6) {
                document.body.style.backgroundColor = "#202020";
                document.getElementById('display-clock').style.color = "#FFFFFF";
        } else if (hourTime >= 6 && hourTime < 18) {
                document.body.style.backgroundColor = "#a4e0e7"; // Light blue color
                document.getElementById('display-clock').style.color = "#202020";
        } else {
                document.body.style.backgroundColor = "#03045e"; // Dark blue color
                document.getElementById('display-clock').style.color = "#F4F4F4";
        }
}

// 1000ms = 1 second
setInterval(cycleClock, 1000);
cycleClock();