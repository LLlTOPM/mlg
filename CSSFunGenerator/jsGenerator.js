var countMlgStaff = 21, //count png in folder mlgStaff +1
    div = document.getElementById('result');


function loadPage() {
    var output = ''

    for (var i = 0; i < countMlgStaff; i++) {
        output +=
            "<p>.mlgActive" + i + " {  position: relative;  animation-name: falling" + i + ", rotate" + i + ";  animation-duration: 8100ms; }</p>" +
            "<p> @keyframes falling" + i + " {  0% {  top: 0;  left: 0;  }  100% {  top: 1000px;  left: " + randomInteger(-350,350) + "px;  opacity: 0;  } }</p>" +
            "<p>@keyframes rotate" + i + " {  from {  transform: rotate(0deg);  }  to {  transform: rotate(" + randomInteger(-3500,3500) + "deg);  } }</p><br>"
    }
    div.innerHTML = output;
}

loadPage();

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}

