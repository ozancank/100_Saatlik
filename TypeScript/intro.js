function selamVer(isim) {
    return "Merhaba " + isim;
}
var mesaj = selamVer('Ozan');
console.log(mesaj);
var sayi;
sayi = 10;
sayi = 10.4;
var sayilar = [1, 2, 3];
var sayilar2 = [1, 2, 3];
var dizi = [2, "Ankara"];
var Renk;
(function (Renk) {
    Renk[Renk["Kirmizi"] = 1] = "Kirmizi";
    Renk[Renk["Siyah"] = 2] = "Siyah";
    Renk[Renk["Mavi"] = 3] = "Mavi";
})(Renk || (Renk = {}));
var renk = Renk.Kirmizi;
var deger = "Ankara";
deger = 2;
deger = {};
var deger2 = undefined; //null referans tipte kullanılır. undefined ise değişken değerinde.
function selamVer2() {
    console.log("merhaba");
}
