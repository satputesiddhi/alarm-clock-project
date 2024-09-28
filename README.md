# alarm-clock-project

This project is a **web-based alarm clock** that allows users to view the current time and set alarms. When the current time matches the set alarm time, a **browser alert message** is triggered.

## Features

- Displays the current time in 12-hour format (AM/PM).
- Allows users to set alarms for specific hours, minutes, and seconds.
- Users can set multiple alarms and view them in a list.
- Each alarm comes with a delete button to remove the alarm.
- A **browser alert message** is shown when the current time matches the set alarm time.

## Technologies Used

- **HTML**: Structure of the alarm clock.
- **CSS**: Styling the clock display, input fields, and alarm list.
- **JavaScript**: Logic for setting and managing alarms, checking current time, and triggering an alert.

## How to Use

1. Enter the desired **hours**, **minutes**, and **seconds** in the input fields.
2. Select **AM/PM**.
3. Click the **"Set Alarm"** button.
4. The alarm will be displayed in the list of active alarms.
5. When the current time matches the set alarm, a **browser alert** will pop up.

### Deleting Alarms

- To delete an alarm, click the **Delete** button next to the alarm in the list.

## Code Overview

### `setAlarm()`

- Captures user input (hours, minutes, seconds, and AM/PM).
- Validates the input and formats it into a time string.
- Adds the alarm to the list of active alarms and stores it in an array.
- Clears the input fields after setting the alarm.

### `updateTime()`

- Updates the current time on the clock every second.
- Checks if the current time matches any active alarms.
- Triggers a **browser alert message** when the alarm time is reached.

### `deleteAlarm()`

- Removes the alarm from the list and the array when the user clicks the delete button.

