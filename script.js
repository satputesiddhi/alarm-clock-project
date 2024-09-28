let alarms = [];

function updateTime() {
    const clock = document.getElementById('clock');

    //The function first creates a Date object using new Date(). This object represents the current date and time.
    const now = new Date(); 
    //It then extracts the hours, minutes, and seconds from the date object 
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    //Additionally, the function checks whether the time is in AM or PM using a conditional check:
    const ampm = hours >= 12 ? 'PM' : 'AM';

    //Since the Date object returns hours in 24-hour format, the function converts it to 12-hour format:
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    //The function uses a helper function pad() to ensure that hours, minutes, and seconds are always displayed with two digits.
    const timeString = `${pad(hours)}:${pad(minutes)}:${pad(seconds)} ${ampm}`;
    //innerHTML is used to update the clock display every second with the current time stored in timeString
    //Once the time is formatted, it is displayed in the #clock element on the webpage:
    clock.innerHTML = timeString;

    // Check if any alarm matches current time
    //The function iterates through the array of alarms. 
    //If the current time matches any alarm in the list, an alert is triggered to notify the user
    alarms.forEach(alarm => {
        if (alarm.time === timeString) {
            alert("Alarm ringing!");
            // deleteAlarm(alarm.id); //Automatically delete alarm


        }
    });
}

function pad(number) {
    return number < 10 ? '0' + number : number;
}

function setAlarm() {
    const hours = document.getElementById('hours').value;
    const minutes = document.getElementById('minutes').value;
    const seconds = document.getElementById('seconds').value;
    const ampm = document.getElementById('ampm').value;

    if (hours === "" || minutes === "" || seconds === "") {
        alert("Please enter valid time.");
        return;
    }

    //combines the values of hours, minutes, seconds, and AM/PM into a single string
    //pad() function is used to ensure each value is displayed as two digits
    const time = `${pad(hours)}:${pad(minutes)}:${pad(seconds)} ${ampm}`;
    const id = Date.now().toString();

    alarms.push({ id, time });

    const alarmList = document.getElementById('alarms');
    const li = document.createElement('li');
    li.setAttribute('id', id);
    li.innerHTML = `${time} <button onclick="deleteAlarm(${id})">Delete</button>`;
    alarmList.appendChild(li);

    document.getElementById('hours').value = "";
    document.getElementById('minutes').value = "";
    document.getElementById('seconds').value = "";
}

function deleteAlarm(id) {
    const index = alarms.findIndex(alarm => alarm.id == id);
    if (index > -1) {
        alarms.splice(index, 1);
    }
    document.getElementById(id).remove();
}

setInterval(updateTime, 1000);
