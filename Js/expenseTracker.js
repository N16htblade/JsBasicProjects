var myNodelist = document.getElementsByTagName("MyTable");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}


function newExpense() {

    var name = document.getElementById("name").value;
    var date = document.getElementById("date").value;
    var amount = document.getElementById("amount").value;
    var arrData = [name, date, amount, ""];

    if (name | date | amount === '') {
        alert("Empty field detected, please fill in all information!");
    } else {
        var tr = document.createElement("tr");
        for (var i = 0; i < arrData.length; i++) {
            var t = document.createTextNode(arrData[i]);
            var td = document.createElement("td");
            td = tr.insertCell(i);
            td.appendChild(t)
            document.getElementById("myTable").appendChild(tr);
        }
    }

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    td.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var p = this.parentNode.parentNode.rowIndex;
            console.log("Row index is: " + p)
            document.getElementById('myTable').deleteRow(p);
        }
    }
}