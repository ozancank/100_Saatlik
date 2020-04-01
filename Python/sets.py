studentSet = {"a", "b", "c", 2, "2"}
# index ve sıra yok. çok hızlı çalışır. aynısından iki tane olmaz.
print(studentSet)
print(type(studentSet))

for student in studentSet:
    print(student)

print("b" in studentSet)

if "b" in studentSet:
    print("b listede var")

studentSet.add("d")
print(studentSet)

studentSet.update(["x", "y", "z"])
print(studentSet)

studentSet.remove("c")  # yazılan içinde yoksa hata fırlatır.
studentSet.discard("c")  # yazılan içinde yoksa hata fırlatmaz.
print(len(studentSet))
print(studentSet)

x = studentSet.pop()
print(len(studentSet))
print(studentSet)

x = studentSet.clear()  # hafızada kalır içi boşalır.
print(len(studentSet))
print(studentSet)

del studentSet  # hafızadan komple siler.
