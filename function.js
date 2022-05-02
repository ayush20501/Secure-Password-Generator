function myfunction() {
    var a = document.querySelectorAll('.checkbox');
    var c = document.getElementById("num").value

    var s = ""
    if(a[0].checked==false && a[1].checked==false && a[2].checked==false && a[3].checked==false && c==""){
        alert("Fields cannot be empty!");
    }
    else if(c == "") {
        alert("Length cannot be empty!");
    }
    else {
        for (var i = 0; i < a.length; i++) {
            if (a[i].checked == true && a[i].value == "1") {
                s = s + "0123456789"
            }
            if (a[i].checked == true && a[i].value == "#") {
                s = s + "!@#$%^&*()-_=+"
            }
            if (a[i].checked == true && a[i].value == "a") {
                s = s + "abcdefghijklmnopqrstuvwxyz"
            }
            if (a[i].checked == true && a[i].value == "A") {
                s = s + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            }
        }


        var b = s.split(""), n = b.length;

        for (var i = n - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = b[i];
            b[i] = b[j];
            b[j] = tmp;
        }
        b = b.join("")


        var s1 = ""
        if (b.length >= c) {
            for (var i = 0; i < c; i++) {
                s1 += b[i]
            }
            document.getElementById("ptag").innerHTML = s1;
        }
        else {
            rep = b.repeat(c)
            var d = rep.split(""), n = d.length;

            for (var i = n - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var tmp = d[i];
                d[i] = d[j];
                d[j] = tmp;
            }
            d = d.join("")

            var result = ""
            for (var i = 0; i < c; i++) {
                result += d[i]
            }
            document.getElementById("ptag").innerHTML = result;
        }
    }

}
function copyfunction() {
    var copyText = document.getElementById("ptag").textContent;
    navigator.clipboard.writeText(copyText);
    alert("Your password is copied to clipboard!");
    document.getElementById("ptag").innerHTML="Your Password will appear here!";
    document.getElementById("num").value="";
}