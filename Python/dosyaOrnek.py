ogrenciler=["o1","o2","o3","o4","o5"]

f=open("ogrenci.txt","a")
print("Dosya Oluştu.")
print("")

for i in ogrenciler:
    f.write(i)
    f.write("\n")
f.close()

f=open("ogrenci.txt","r")
print(f.read())
f.close()

import os

if os.path.exists("ogrenci.txt"):
    os.remove("ogrenci.txt")
    print("Dosya silindi.")
else:
    print("Dosya yok.")