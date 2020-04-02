sayilar = [1, 2, 3, 4, 5]

# sayilarKareli=[]

# for sayi in sayilar:
#     sayilarKareli.append(sayi*sayi)

sayilarKareli = list(map(lambda sayi: sayi**2,sayilar))
sayilarFiltrerli = list(filter(lambda sayi: sayi>2,sayilar))

from functools import reduce
sayilarFaktoriyel = reduce(lambda x,y:x*y,sayilar) #x ile y çapımı bir sonraki x

print(sayilarKareli)
print(sayilarFiltrerli)
print(sayilarFaktoriyel)
