var close = document.getElementsByClassName("close");


function newExpense() {

    var name = document.getElementById("name").value;
    var date = document.getElementById("date").value;
    var amount = document.getElementById("amount").value;
    var arrData = [name, date, amount, ""];

    if (name === '' || date == '' || amount === '') {
        alert("Empty field detected, please fill in all information!");
    } else {
        v = document.createTextNode(arrData[0]);
        var trow = document.createElement('div');
        trow.className = 'trow';

        var ncol = document.createElement('div');
        ncol.className = 'tcol-50';
        ncol.appendChild(v);
        trow.appendChild(ncol);

        for (var i = 1; i < arrData.length; i++) {
            v = document.createTextNode(arrData[i]);
            var tcol = document.createElement('div');
            tcol.className = 'tcol-15';
            tcol.appendChild(v);
            trow.appendChild(tcol);
        }

        var span = document.createElement("SPAN");
        var txt = document.createTextNode("Delete");
        span.className = "close";
        span.appendChild(txt);
        tcol.appendChild(span);
        trow.appendChild(tcol);

        document.getElementById('myTbl').appendChild(trow);
    }
    document.getElementById("name").value = "";
    document.getElementById("date").value = "";
    document.getElementById("amount").value = "";
    
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement.parentElement;
            div.style.display = "none";
        }
    }    
}