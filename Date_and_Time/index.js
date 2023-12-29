let monthNames = ["January","February","March", "April", "May", "June", "July",
    "August","September","October","November","December"];

function refreshTime() {
    let currentDate = new Date();

    let hours = currentDate.getHours();
    let amOrPm = hours >= 12 ? "PM" : "AM";
    let formattedHours = hours % 12 || 12;

    document.querySelector(".daytext").textContent = currentDate.getDate();
    document.querySelector(".monthtext").textContent = monthNames[currentDate.getMonth()];
    document.querySelector(".yeartext").textContent = currentDate.getFullYear();
    document.querySelector(".hourtext").textContent =  formattedHours
    document.querySelector(".minutetext").textContent = currentDate.getMinutes();
    document.querySelector(".secondtext").textContent = currentDate.getSeconds()
    document.querySelector(".meridiantext").textContent = amOrPm;
}
setInterval(refreshTime, 1000);
