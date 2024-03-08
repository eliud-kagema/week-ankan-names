$(document).ready(function() {
    // Initializing the datepicker
    $('.datepicker').datepicker();

    // Handling form submission
    $('#ankanForm').submit(function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Calling the function to calculate the Akan name
        calculateAkanName();
    });
});

function calculateAkanName() {
    const birthday = new Date($('#datepicker').val());
    const gender = $('#gender').val();

    if (isNaN(birthday.getTime())) {
        alert("Please select a valid date of birth.");
        return;
    }

    const dayOfTheWeek = birthday.getDay();
    const dayName = getDayOfTheWeek(dayOfTheWeek);
    const akanName = (gender === 'male') ? getMaleName(dayOfTheWeek) : getFemaleName(dayOfTheWeek);

    // Display the result
    $('#result').text(`You were born on a ${dayName}. Your Akan Name is ${akanName}.`);
}

function getDayOfTheWeek(dayOfTheWeek) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[dayOfTheWeek];
}

function getMaleName(dayOfTheWeek) {
    const maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
    return maleNames[dayOfTheWeek];
}

function getFemaleName(dayOfTheWeek) {
    const femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
    return femaleNames[dayOfTheWeek];
}
