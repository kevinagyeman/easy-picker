import EasyPicker from "./easy-picker";

// Helper function to update date output
const updateDateOutput = (date: Date | string | number) => {
	const output = document.getElementById("date-output");
	if (output) {
		// Convert to Date if not already
		const dateObj = date instanceof Date ? date : new Date(date);
		output.innerHTML = `<strong>Selected:</strong> ${dateObj.toLocaleDateString(
			"en-US",
			{
				weekday: "long",
				year: "numeric",
				month: "long",
				day: "numeric",
			},
		)}`;
	}
};

// Date Picker
const datePicker = new EasyPicker({
	container: "#date-picker",
	format: "date",
	initialDate: new Date(),
	onChange: updateDateOutput,
});

// Display initial date
updateDateOutput(datePicker.getRawDate());

// Helper function to update datetime output
const updateDateTimeOutput = (date: Date | string | number) => {
	const output = document.getElementById("datetime-output");
	if (output) {
		const dateObj = date instanceof Date ? date : new Date(date);
		output.innerHTML = `<strong>Selected:</strong> ${dateObj.toLocaleString(
			"en-US",
			{
				weekday: "long",
				year: "numeric",
				month: "long",
				day: "numeric",
				hour: "2-digit",
				minute: "2-digit",
			},
		)}`;
	}
};

// DateTime Picker
const dateTimePicker = new EasyPicker({
	container: "#datetime-picker",
	format: "datetime",
	initialDate: new Date(),
	onChange: updateDateTimeOutput,
});

// Display initial datetime
updateDateTimeOutput(dateTimePicker.getRawDate());

// Helper function to update time output
const updateTimeOutput = (date: Date | string | number) => {
	const output = document.getElementById("time-output");
	if (output) {
		const dateObj = date instanceof Date ? date : new Date(date);
		output.innerHTML = `<strong>Selected:</strong> ${dateObj.toLocaleTimeString(
			"en-US",
			{
				hour: "2-digit",
				minute: "2-digit",
			},
		)}`;
	}
};

// Time Picker
const timePicker = new EasyPicker({
	container: "#time-picker",
	format: "time",
	initialDate: new Date(),
	onChange: updateTimeOutput,
});

// Display initial time
updateTimeOutput(timePicker.getRawDate());
