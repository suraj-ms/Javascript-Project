# Date and Time Project

## Index.Html

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
    <div class="date">
        <div class="day date_item">
            <div class="head">Day</div>
            <div class="daytext body"></div>
        </div>
        <div class="month date_item">
            <div class="head">Month</div>
            <div class="monthtext body"></div>
        </div>
        <div class="year date_item">
            <div class="head">Year</div>
            <div class="yeartext body"></div>
        </div>
    </div>

    <br><br><hr><br><br>
    <div class="time">
        <div class="hour time_item">
            <div class="head">Hour</div>
            <div class="hourtext body"></div>
        </div>
        <div class="minutes time_item">
            <div class="head">Month</div>
            <div class="minutetext body"></div>
        </div>
        <div class="second time_item">
            <div class="head">Seconds</div>
            <div class="secondtext body"></div>
        </div>
        <div class="meridian time_item">
            <div class="head">Seconds</div>
            <div class="meridiantext body"></div>
        </div>
    </div>


    <script src="index.js"></script>
</body>
</html>
```
# CSS

```CSS
body{
    background-color: black;
     color:white;
}

.date, .time{
    display: flex;
    width: 450px;
    margin: auto;
    justify-content: space-between;
}

.time{
    width: 550px;
}

.date .date_item, .time .time_item{
    width: 100px;
    text-align: center;
}

.date .date_item .head, .time .time_item .head{
    background-color: rgb(187, 209, 61);
    padding: 10px;
    border-radius: 5px;
}


.date .date_item .body, .time .time_item .body{
    background-color: rgb(8, 128, 54);
    padding: 20px;
    border-radius: 5px;
}

```
## JavaScript

```javascript
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

'''
