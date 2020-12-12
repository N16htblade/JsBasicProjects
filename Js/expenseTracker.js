var close = document.getElementsByClassName("close");

function newExpense() {

    var name = document.getElementById("name").value;
    var date = document.getElementById("date").value;
    var amount = document.getElementById("amount").value;
    var arrData = [name, date, amount, ""];

    if (name === '' || date == '' || amount === '') {
        alert("Empty field detected, please fill in all information!");
    } else {
        var table = document.getElementById("myTable");
        var tr = table.insertRow();
        for (var i = 0; i < arrData.length; i++) {
            var t = document.createTextNode(arrData[i]);
            td = tr.insertCell(i);
            td.appendChild(t)
            document.getElementById("myTable").appendChild(tr);
        }
    }
    document.getElementById("name").value = "";
    document.getElementById("date").value = "";
    document.getElementById("amount").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("Delete");
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