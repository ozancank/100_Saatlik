sayi = int(input("Sayı Giriniz."))

sonuc = str(sayi) + " asaldır."

for x in range(2, sayi):
    if sayi % x == 0:
        sonuc = str(sayi) + " asal değildir."
        break
print(sonuc)


def Hesapla(a, b): return a*b/2


print(Hesapla(10, 2))
