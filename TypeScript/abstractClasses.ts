abstract class KrediBase{
    constructor(){

    }

    kaydet():void{
        console.log("Kaydedildi.");
    }

    abstract hesapla():void;
}

class TuketiciKredi extends KrediBase{
    constructor(){
        super();
    }

    hesapla(): void {
        console.log("Tüketici kredisine göre hesaplandı.")
    }
}

class KonutKredi extends KrediBase{
    constructor(){
        super();
    }

    hesapla(): void {
        console.log("Konut kredisine göre hesaplandı.")
    }
}

let tk=new  TuketiciKredi();
tk.hesapla();
tk.kaydet();

let kk=new  KonutKredi();
tk.hesapla();
tk.kaydet();
