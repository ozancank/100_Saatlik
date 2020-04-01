ogrenciler=["o1","o2","o3","o4","o5"]

f=open("ogrenci.txt","a")

for i in ogrenciler:
    f.write(i)
    f.write("\n")

f.close()

import os
os.remove("ogrenci.txt")