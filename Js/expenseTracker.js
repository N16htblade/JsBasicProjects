function newExpense() {

    var name = document.getElementById("name").value;
    var date = document.getElementById("date").value;
    var amount = document.getElementById("amount").value;
    var arrData = [name, date, amount];

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
}