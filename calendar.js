
// Set up the date-dependent calendar.
const defaultDate = document.getElementById("data-default-date").getAttribute("data-date");

flatpickr("#selectedDate", {
    minDate: new Date("2024-07-10T00:00:00"),
    maxDate: new Date("2024-10-09T00:00:00"),
    defaultDate: new Date(defaultDate + "T00:00:00"),
    enable: [new Date("2024-07-10T00:00:00"),new Date("2024-07-11T00:00:00"),new Date("2024-07-12T00:00:00"),new Date("2024-07-17T00:00:00"),new Date("2024-07-19T00:00:00"),new Date("2024-07-22T00:00:00"),new Date("2024-07-23T00:00:00"),new Date("2024-07-24T00:00:00"),new Date("2024-07-25T00:00:00"),new Date("2024-07-26T00:00:00"),new Date("2024-07-29T00:00:00"),new Date("2024-07-30T00:00:00"),new Date("2024-07-31T00:00:00"),new Date("2024-08-01T00:00:00"),new Date("2024-08-02T00:00:00"),new Date("2024-08-05T00:00:00"),new Date("2024-08-06T00:00:00"),new Date("2024-08-07T00:00:00"),new Date("2024-08-08T00:00:00"),new Date("2024-08-09T00:00:00"),new Date("2024-08-12T00:00:00"),new Date("2024-08-13T00:00:00"),new Date("2024-08-14T00:00:00"),new Date("2024-08-15T00:00:00"),new Date("2024-08-16T00:00:00"),new Date("2024-08-19T00:00:00"),new Date("2024-08-21T00:00:00"),new Date("2024-08-22T00:00:00"),new Date("2024-08-23T00:00:00"),new Date("2024-08-26T00:00:00"),new Date("2024-08-27T00:00:00"),new Date("2024-08-28T00:00:00"),new Date("2024-08-29T00:00:00"),new Date("2024-08-30T00:00:00"),new Date("2024-09-02T00:00:00"),new Date("2024-09-04T00:00:00"),new Date("2024-09-05T00:00:00"),new Date("2024-09-06T00:00:00"),new Date("2024-09-09T00:00:00"),new Date("2024-09-10T00:00:00"),new Date("2024-09-11T00:00:00"),new Date("2024-09-12T00:00:00"),new Date("2024-09-13T00:00:00"),new Date("2024-09-16T00:00:00"),new Date("2024-09-17T00:00:00"),new Date("2024-09-18T00:00:00"),new Date("2024-09-19T00:00:00"),new Date("2024-09-20T00:00:00"),new Date("2024-09-23T00:00:00"),new Date("2024-09-24T00:00:00"),new Date("2024-09-25T00:00:00"),new Date("2024-09-26T00:00:00"),new Date("2024-09-27T00:00:00"),new Date("2024-09-30T00:00:00"),new Date("2024-10-01T00:00:00"),new Date("2024-10-03T00:00:00"),new Date("2024-10-04T00:00:00"),new Date("2024-10-07T00:00:00"),new Date("2024-10-09T00:00:00")],
    dateFormat: "l. F j, Y",
    onReady: function (selectedDates, dateStr, instance) {
        instance.input.value = instance.formatDate(new Date(defaultDate + "T00:00:00"), "l. F j, Y");
    },
    onChange: function (selectedDates, dateStr, instance) {
        const formattedDate = instance.formatDate(selectedDates[0], "Ymd");
        window.location.href = `https://ribbitribbit.co/index_${formattedDate}.html`;
    }
});
