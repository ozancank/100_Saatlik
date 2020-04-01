
ogrenci1 = "o1"
ogrenci2 = "o2"
ogrenci3 = "o3"

print(ogrenci1)
print(ogrenci2)
print(ogrenci3)

ogrenciler = ["o1", "o2", "o3"]

print(ogrenciler)
ogrenciler.append("o4")
ogrenciler.remove("o2")
ogrenciler[0] = "oo1"
print(ogrenciler)
print(ogrenciler[1])

sehirler = list(("Ankara", "İstanbul"))
print(sehirler)
print(len(sehirler))

print(sehirler.clear())
print(sehirler)

sehirler = list(("Ankara", "İstanbul"))
print("Ankara Sayısı: "+str(sehirler.count("Ankara")))

