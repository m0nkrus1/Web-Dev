//task1 create a date 
let date = new Date(2012, 1, 20, 3, 12);
alert(date); // Mon Feb 20 2012 03:12:00
//task2 show a weekday
function getWeekDay(date) {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    return days[date.getDay()];
}
let date2 = new Date(2012, 0, 3); // 3 Jan 2012
alert(getWeekDay(date2));
//task3 European weekday
function getLocalDay(date) {
    let day = date.getDay();
    if (day == 0) { // make Sunday (0) the last day
        day = 7;
    }
    return day;
}
let date3 = new Date(2012, 0, 3); // 3 Jan 2012
alert(getLocalDay(date3)); // 2
//task4 Which day of month was many days ago?
function getDateAgo(date, days) {
    let dateCopy = new Date(date);
    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
}
let date4 = new Date(2015, 0, 2);
alert(getDateAgo(date4, 1)); // 1, (1 Jan 2015)
alert(getDateAgo(date4, 2)); // 31, (31 Dec 2014)
alert(getDateAgo(date4, 365)); // 2, (2 Jan 2014)
//task5 Last day of month?
function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);    
    return date.getDate();
}  
alert(getLastDayOfMonth(2012, 1)); // 29
alert(getLastDayOfMonth(2013, 1)); // 28
alert(getLastDayOfMonth(2014, 1)); // 28
alert(getLastDayOfMonth(2015, 1)); // 28
alert(getLastDayOfMonth(2016, 1)); // 29
//task6 How many seconds have passed today?
function getSecondsToday() {
    let now = new Date();   
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let diff = now - today; // difference in milliseconds
    return Math.round(diff / 1000); // convert to seconds
}
alert(getSecondsToday());
//task7 How many seconds till tomorrow?
function getSecondsToTomorrow() {
    let now = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    let diff = tomorrow - now; // difference in milliseconds
    return Math.round(diff / 1000); // convert to seconds
}
alert(getSecondsToTomorrow());
//task8 Format the relative date
function formatDate(date) {
    let diff = new Date() - date;
    if (diff < 1000) {
        return "right now";
    } else if (diff < 60000) {
        return Math.floor(diff / 1000) + " sec. ago";
    } else if (diff < 3600000) {
        return Math.floor(diff / 60000) + " min. ago";
    } else {
        let d = date;
        d = [
            '0' + d.getDate(),
            '0' + (d.getMonth() + 1),
            '' + d.getFullYear(),
            '0' + d.getHours(),
            '0' + d.getMinutes()
        ].map(component => component.slice(-2));    
        return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
    }
}
alert(formatDate(new Date(new Date - 1))); // "right now"
alert(formatDate(new Date(new Date - 30 * 1000))); // "30 sec. ago"
alert(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 min. ago"
// yesterday: "31.12.2016 20:00"   
