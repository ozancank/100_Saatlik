sehirler = ["Ankara", "İstanbul", "İzmir"]

iteratorum = iter(sehirler)

print(next(iteratorum))
print(next(iteratorum))

for i in sehirler:
    print(i)