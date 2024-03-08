
functionMaleNames(dayOfTheWeek) {
    const maleName = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
    return maleName [dayOfTheWeek];

}


functionMaleNames(dayOfTheWeek) { 
    const femaleName = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
    return femaleName [dayOfTheWeek];

}


function getDayOfTheWeek(dayOfTheWeek){
    switch (dayOfTheWeek){
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "Invalid day";
        
    }
}