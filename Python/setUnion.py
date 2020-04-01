setA = {1, 2, 3, 4, 5}
setB = {1, 3, 4, 6, 7, 8}
#sırasız veri tutar.
print(setA | setB)
print(setA.union(setB))
print(setB.union(setA))
print("------------")
print(setA & setB)
print(setA.intersection(setB))
print(setB.intersection(setA))
print("------------")
print(setA - setB)
print(setA.difference(setB))
print(setB.difference(setA))
print("------------")
print(setA ^ setB)
print(setA.difference(setB))
print(setB.difference(setA))

for x in range(1,10,2):
    print(x)