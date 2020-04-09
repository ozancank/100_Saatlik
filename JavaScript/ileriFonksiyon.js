var selamFonksiyonu = function selam() {
    console.log("Merhaba");
}

selamFonksiyonu();

const selamFonksiyonu2 = () => {
    console.log("Merhaba 2");
}

selamFonksiyonu2();

var topla = (sayi1, sayi2) => {
    return sayi1 + sayi2;
}

let toplam = topla(3, 5);

console.log(toplam);

const dizi = [1, 2, 3, 4];
const karedizisi = [];

dizi.forEach(sayi => {
    karedizisi.push(sayi * sayi);
});

console.log(karedizisi);

const mapDizi = dizi.map(sayi => sayi * 3);

console.log(mapDizi);

const filtreliDizi = dizi.filter(sayi => sayi > 2);
console.log(filtreliDizi);

const toplmm = dizi.reduce((acc, sayi) => { //kümülatif toplam
    return acc + sayi;
});

console.log(toplmm);

const toplmmm = dizi.reduce((acc, sayi) => { //kümülatif toplam
    return acc + sayi;
},10);

console.log(toplmmm);