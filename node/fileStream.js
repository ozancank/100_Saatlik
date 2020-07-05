var fs = require("fs");

fs.readFile("dosya.txt", "utf8", function (hata, data) {
  if (hata) {
    throw hata;
  }
  console.log(data.toString());
});

fs.writeFile("dosya2.txt", "Ozan Can", function (hata, data) {
  if (hata) {
    throw hata;
  }
  console.log("Yazıldı");
});

fs.appendFile("dosya2.txt", " Kösemez", function (hata, data) {
  if (hata) {
    throw hata;
  }
  console.log("Eklendi");
});

fs.unlink("dosya2.txt", function (hata) { //asekron çalışır.
  if (hata) {
    throw hata;
  }
  console.log("Silindi");
});
