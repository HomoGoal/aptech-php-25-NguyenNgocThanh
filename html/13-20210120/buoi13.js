function chay() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.readyState);
            document.getElementById("demo").innerHTML = this.responseText;
        } else if (this.readyState == 1) {
            console.log(this.readyState);
        } else if (this.readyState == 2) {
            console.log(this.readyState);
        } else {
            console.log(this.readyState);
        }
    };
    xhttp.open("GET","buoi13.txt",true);
    xhttp.send();
}