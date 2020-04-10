interface Product {
    id: number;
    name: string;
    unitPrice: number;
}

class Product2 {
    id: number;
    name: string;
    unitPrice: number;
}

function save(product: Product) {
    console.log(product.name + " kaydedildi!");
}

function save2(product: Product2) {
    console.log(product.name + " kaydedildi!");
}

save({ id: 1, name: "Laptop", unitPrice: 10 });

let mouse = new Product2();
mouse.name="Atech";

save2(mouse); 

interface PersonService {
    save();
}

class CustomService implements PersonService {
    save() {
    }
}