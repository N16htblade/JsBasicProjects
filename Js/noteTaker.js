
var remove = document.getElementsByClassName("remove");
var view = document.getElementsByClassName("view");


function newNote() {
    var myText = document.getElementById("myText").value;
    var tr = document.createElement("tr");
    var td = document.createElement("td");

    if (myText === '') {
        alert("Empty text detected, please type something!");
    } else {
        var t = document.createTextNode(myText);
        td = tr.insertCell();
        td.appendChild(t)
        document.getElementById("myTable").appendChild(tr);    
    }

    var button = document.createElement("BUTTON");
    var textview = document.createTextNode("Show");
    button.className = "view";
    button.id = "openBtn";
    button.appendChild(textview);
    td = tr.insertCell();
    td.appendChild(button);

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "remove";
    span.appendChild(txt);
    td = tr.insertCell();
    td.appendChild(span);

    for (i = 0; i < remove.length; i++) {
        remove[i].onclick = function () {
            var p = this.parentNode.parentNode.rowIndex;
            document.getElementById('myTable').deleteRow(p);
        }
    }
    
    for (n = 0; n <view.length; n++) {
        var modal = document.getElementById("myModal");
        var span = document.getElementsByClassName("close")[0];

        view[n].onclick = function() {
            var t = this.parentNode.parentNode.rowIndex;
            var tr = document.getElementsByTagName('tr')[t];
            var p = tr.children[0].textContent;
            document.getElementById("myNote").innerHTML = p;
            modal.style.display="block";
        }
        span.onclick = function () {
            modal.style.display="none";
        }
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }
}