public class ProductManager2 {
    public void add(Product2 product) {
        if (ProductValidator.isValid(product)) {
            System.out.println("Eklendi.");
        }else{
            System.out.println("Urun bilgisi gecersizdir.");
        }
    }
}