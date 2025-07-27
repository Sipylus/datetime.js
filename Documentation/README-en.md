# datetime.js

JavaScript utility to display the current date and time.

## Version

- **1.0.0** – Initial release
- **1.0.1** – Internal Improvements
- **1.1.0** – Intl Upgrade
- **1.1.1** - Text Display Refinement

## Features

- Displays the current weekday, month, date, year, and time
- Uses 12-hour clock format with AM/PM
- Locale-aware using `Intl.DateTimeFormat` (v1.1.0+)
- Automatically updates every second
- Lightweight and browser-friendly
- Designed to display in a DOM element with ID `clock`

## Usage

Include the script in your HTML and ensure an element with ID `clock` exists:

```html
<div id="clock"></div>
<script src="datetime.js"></script>
