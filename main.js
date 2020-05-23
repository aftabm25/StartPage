searchBarId = "search-box";
searchTextId = "search-text";
messageDivId = "message";
dateDivId = "date";
dateId = "date-text";
messageId = "message-text";
userName = "Aftab";
musicBoxId = "musicbox";
musicTextId = "music-text";
dateMap = {
    0: "Jan",
    1: "Feb",
    2: "Mar",
    3: "Apr",
    4: "May",
    5: "Jun",
    6: "Jul",
    7: "Aug",
    8: "Sep",
    9: "Oct",
    10: "Nov",
    11: "Dec"
}
function buildMsg() {
  date= new Date();
  currenthour= date.getHours();
  currentmin= date.getMinutes();
  currentTime= currenthour + ( 0.01*currentmin);
  if (inRange(currentTime, 0, 2.59))
        return "Time to be productive";
    if (inRange(currentTime, 3, 8.59))
        return "Go to sleep";
    if (inRange(currentTime, 9, 11.59))
        return "Have a good day ahead";
    if (inRange(currentTime, 12, 16.59))
        return "Good Afternoon";
    if (inRange(currentTime, 17, 19.59))
        return "Good Evening";
    if (inRange(currentTime, 20, 24))
        return "Time to be productive";
    else
        return "";
}
function uptime() {
    currentDate = new Date();
    date = currentDate.getDate();
    month = dateMap[currentDate.getMonth()];
    minutes = currentDate.getMinutes();
    seconds = currentDate.getSeconds();
    time = currentDate.getHours() + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
    finalDate = date + " " + month + ", " + time;
    document.getElementById(dateId).textContent = finalDate;
}
setInterval(uptime,1000);
function inRange(number, min, max) {
    return (number >= min && number <= max);
}
function displayMsg() {
  msg= buildMsg();
  msg=`Hey ${userName}, ${msg}!`;
  document.getElementById(messageId).textContent=msg;
}
displayMsg();
setInterval(uptime,100);
