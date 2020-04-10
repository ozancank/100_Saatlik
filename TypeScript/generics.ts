function deger<T>(x:T):T {
    return x;
}

let sayi=deger<number>(10);
console.log(sayi);

class GenericClass<T>{
    degisken:T;
    fonksiyon(parametre:T):T{
        return parametre;
    }
}

let sinif=new GenericClass<number>()
sinif.fonksiyon(55);