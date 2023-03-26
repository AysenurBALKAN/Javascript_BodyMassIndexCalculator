function BMICalculate() {
    var weight = document.getElementById("weight").value;
    var lenght = document.getElementById("lenght").value;
    var result = weight / Math.pow(lenght, 2);
    document.getElementById("result").innerText = result.toFixed(2);

    if (result < 18.5) {
        document.getElementById("result-status").innerText="Under Weight";
        document.getElementById("result-status").style.color="blue";
    }
    else if (result >= 18.5 && result < 25) {
        document.getElementById("result-status").innerText="Normal";
        document.getElementById("result-status").style.color="forestgreen";
    }

    else if (result >= 25 && result < 30) {
        document.getElementById("result-status").innerText="Over Weight";
        document.getElementById("result-status").style.color="yellow";
    }
    else if (result >= 30) {
        document.getElementById("result-status").innerText="Obese";
        document.getElementById("result-status").style.color="darkred";
    }
}

function GetReset() {
    window.location.reload()
}