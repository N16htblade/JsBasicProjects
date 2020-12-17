
var close = document.getElementsByClassName("close");
var mclose = document.getElementsByClassName("mclose");
var view = document.getElementsByClassName("view");


function newNote() {

    var myText = document.getElementById("myText").value;

    if (myText === '') {
        alert("Empty text, please type something!");
    } else {
        var t = document.createTextNode(myText);
        var trow = document.createElement('div');
        trow.className = 'trow';

        var ncol = document.createElement('div');
        ncol.className = 'tcol-80';
        ncol.id = "note";
        ncol.append(t);
        trow.append(ncol);

        var vcol = document.createElement('div');
        vcol.className = 'tcol-10';
        var span = document.createElement("SPAN");
        var textview = document.createTextNode("Details");
        span.className = "view";
        span.id = "openBtn";
        span.appendChild(textview);
        vcol.append(span);
        trow.append(vcol);

        var rcol = document.createElement('div');
        rcol.className = 'tcol-10';
        document.getElementById('myTbl').appendChild(trow);
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("Delete");
        span.className = "close";
        span.appendChild(txt);
        rcol.append(span);
        trow.append(rcol);

        document.getElementById('myTbl').appendChild(trow);
    }

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement.parentElement;
            div.style.display = "none";
        }
    }

    for (i = 0; i < mclose.length; i++) {
        mclose[i].onclick = function () {
            var div = this.parentElement.parentElement;
            div.style.display = "none";
        }
    }    

    for (n = 0; n < view.length; n++) {
        var modal = document.getElementById("myModal");
        var span = document.getElementsByClassName("mclose")[0];

        view[n].onclick = function() {
            var note = this.parentElement.parentElement;
            var text = note.firstChild.textContent;
            var content = document.getElementById("myNote");
            content.textContent = text;
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