tupleListe = (2, 4, 6, "Ankara", (2, 3, 4), [])
liste = [2, 4, 6, "Ankara", [3, 4, 5], ()]

print(type(tupleListe))
print(type(liste))
print(tupleListe)
print(liste)
print(len(tupleListe))
print(len(liste))

liste[0]=6
#tupleListe[0]=6 tuple liste değiştirilemez. Performansı yüksektir. Bellekte sabit yer alır.

print(tupleListe)
print(liste)

print(tupleListe[-2])
print(liste[-2])

print(tupleListe[1:2]) #tek değer olduğunda yazılan değere göre tip alır. Tuple olduğunun belirtilmesi için tanımlarken sonuna 1 virgül yazılır.
print(liste[1:2])