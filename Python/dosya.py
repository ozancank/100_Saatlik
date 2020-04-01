f=open("musteriler.txt","r")#r:oku,w:yaz,a:oku ve ekle,x:oluştur
#print(f.read())
print("----------------")
#print(f.read(10))
print("----------------")
#print(f.readline())
print("----------------")
for l in f:
    print(l)
print("----------------")
f.close()

#fileToAppend=open("ogrenciler.txt","a")
fileToAppend=open("ogrenciler.txt","w")
fileToAppend.write("a1")
fileToAppend.write("\n")
fileToAppend.write("a2")
fileToAppend.write("\n")
fileToAppend.close()

import os

if os.path.exists("ogrenciler.txt"):
    os.remove("ogrenciler.txt")
    print("Dosya silindi.")
else:
    print("Dosya yok.")

os.mkdir("empty")
os.rmdir("empty")