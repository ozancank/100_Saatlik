public class ProductValidator {

    static {
        System.out.println("Static yapici blok calisti.");
    }

    public ProductValidator() {
        System.out.println("Yapıcı blok çalıştı.");
    }

    // CSharp ile java farkı: constractur kod static fonksiyon kullanıldığında
    // çağrılır. Javada ise new yapıldığında çağrılır.
    //Java da ana class statşc olmaz.
    public static boolean isValid(Product2 product) {
        if (product.price > 0 && !product.name.isEmpty()) {
            return true;
        } else {
            return false;
        }
    }
}