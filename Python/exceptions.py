try:
    #sayi = int(input("Sayi Giriniz"))
    sayi = 2
except ValueError:
    print("Tip uyuşmazlığı: Sayı giriniz.")
except ZeroDivisionError:
    print("Payda sıfır olamaz.")
except:
    print("Bir hata oluştu.")

import sys

liste = [7,'ozan', 0, 3, "6"]

for x in liste:
    try:
        print("Sayı: "+str(x))
        sonuc = 1/int(x)
        print("Sonuç: "+str(sonuc))
    except ValueError:
        print("Tip uyuşmazlığı: Sayı giriniz.")
    except ZeroDivisionError:
        print("Payda sıfır olamaz.")
    except:
        print(str(x) + " hesaplanmadı")
        print("Hata Tanımı: " + str(sys.exc_info()[0]))
    finally:
        print("İşlemler Bitti.")