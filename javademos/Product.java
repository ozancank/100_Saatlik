public class Product {
    
    public Product(){
        System.out.println("Yapici Blok Calisti.");
    }

    private int id;
    private String name;
    private String description;
    private double price;
    private int stockAmount;
    private String renk;
    //private String kod;

    public int getId() {
        return id;
    }

    public String getKod() {
        return this.name.substring(0, 1) + id;
    }

    public String getRenk() {
        return renk;
    }

    public void setRenk(String renk) {
        this.renk = renk;
    }

    public int getStockAmount() {
        return stockAmount;
    }

    public void setStockAmount(int stockAmount) {
        this.stockAmount = stockAmount;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setId(int id) {
        this.id = id;
    }

}