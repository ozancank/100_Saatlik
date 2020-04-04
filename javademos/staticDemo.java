public class staticDemo {
    public static void main(String[] args) {
        ProductManager2 manager = new ProductManager2();
        Product2 product = new Product2();
        product.price = 10;
        product.name = "Mouse";

        manager.add(product);
    }
}