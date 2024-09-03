const dateElement = document.getElementById("data-default-date");
const defaultDate = dateElement.getAttribute("data-date");
console.log("NOODLE0", dateElement);
console.log("NOODLE", defaultDate);

flatpickr("#selectedDate", {
    minDate: new Date("2024-07-10T00:00:00"),
    maxDate: new Date("2024-09-02T00:00:00"),
    defaultDate: new Date(defaultDate + "T00:00:00"),
    enable: [new Date("2024-07-10T00:00:00"), new Date("2024-07-11T00:00:00"), new Date("2024-07-12T00:00:00"), new Date("2024-07-17T00:00:00"), new Date("2024-07-19T00:00:00"), new Date("2024-07-22T00:00:00"), new Date("2024-07-23T00:00:00"), new Date("2024-07-24T00:00:00"), new Date("2024-07-25T00:00:00"), new Date("2024-07-26T00:00:00"), new Date("2024-07-29T00:00:00"), new Date("2024-07-30T00:00:00"), new Date("2024-07-31T00:00:00"), new Date("2024-08-01T00:00:00"), new Date("2024-08-02T00:00:00"), new Date("2024-08-05T00:00:00"), new Date("2024-08-06T00:00:00"), new Date("2024-08-07T00:00:00"), new Date("2024-08-08T00:00:00"), new Date("2024-08-09T00:00:00"), new Date("2024-08-12T00:00:00"), new Date("2024-08-13T00:00:00"), new Date("2024-08-14T00:00:00"), new Date("2024-08-15T00:00:00"), new Date("2024-08-16T00:00:00"), new Date("2024-08-19T00:00:00"), new Date("2024-08-21T00:00:00"), new Date("2024-08-22T00:00:00"), new Date("2024-08-23T00:00:00"), new Date("2024-08-26T00:00:00"), new Date("2024-08-27T00:00:00"), new Date("2024-08-28T00:00:00"), new Date("2024-08-29T00:00:00"), new Date("2024-08-30T00:00:00"), new Date("2024-09-02T00:00:00")],
    dateFormat: "l. F j, Y",
    onReady: function (selectedDates, dateStr, instance) {
        instance.input.value = instance.formatDate(new Date(defaultDate + "T00:00:00"), "l. F j, Y");
    },
    onChange: function (selectedDates, dateStr, instance) {
        const formattedDate = instance.formatDate(selectedDates[0], "Ymd");
        window.location.href = `https://ribbitribbit.co/index_${formattedDate}.html`;
    }
});