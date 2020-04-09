document.getElementById("bio").innerHTML = "Ozan Can";

var intro1 = document.getElementById("intro1");
var mesaj = document.getElementById("mesaj");
mesaj.innerHTML = intro1.innerHTML;

var tumListeler = document.getElementsByTagName("ul");
var sehirler = tumListeler[0];
tumElemanlar = sehirler.getElementsByTagName("li");

for (i = 0; i < tumListeler.length; i++) {
    console.log(tumElemanlar[i].innerHTML);
}

var classElemanlari = document.getElementsByClassName("intro1");
console.log(classElemanlari[1].innerHTML);
console.log(classElemanlari.length);

var queryElemanlari = document.querySelectorAll("p.intro1");
console.log(queryElemanlari.length);

var isimElemanlari = document.getElementsByName("musteriAdi");
console.log(isimElemanlari[0].value)

var ozan = document.getElementById("ozan").addEventListener("click", rengiDegistir);

function rengiDegistir() {
    document.getElementById("div1").style.color = "red";
    var isimElemanlari = document.getElementsByName("musteriAdi");
    isimElemanlari[0].value = "Can";
}

var node = document.getElementById("agac");
console.log(node.childNodes[0].nodeValue);

var baslik = document.createElement("h2");
node = document.createTextNode("Merhabaaaaa");
baslik.appendChild(node);

var div1 = document.getElementById("div1");
var p2 = document.getElementById("p2");

div1.insertBefore(baslik, p2);

alert("p2 siliniyor.");
div1.removeChild(p2);