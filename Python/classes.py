class Matematik:
    def __init__(self, sayi1, sayi2):  # constructor
        self.sayi1 = sayi1
        self.sayi2 = sayi2
        print("Çalıştı")

    def topla(self):
        return self.sayi1 + self.sayi2

    def cikar(self):
        return self.sayi1 - self.sayi2

    def carp(self, sayi3, sayi4):
        return sayi3 * sayi4

    def bol(self, sayi3, sayi4):
        return sayi3 / sayi4


matematik = Matematik(2, 5)
print(matematik.topla())
print(matematik.carp(10, 2))


class Person:
    def __init__(self, firstName, lastName, age):
        self.firstName = firstName
        self.lastName = lastName
        self.age = age


person1 = Person("Ozan", "Can", 30)
print(person1.firstName)


class Worker(Person):
    def __init__(self, salary):
        self.salary = salary


class Customer(Person):
    def __init__(self, creditCardNumber):
        self.creditCardNumber = creditCardNumber

ahmet=Worker(2000)
ahmet.lastName="aa"