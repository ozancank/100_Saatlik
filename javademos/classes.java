public class classes {
    public static void main(String[] args) {
        CustomerManager customerManager = new CustomerManager(new BaseLogger());
        CustomerManager customerManager2 = new CustomerManager(new BaseLogger());
        customerManager = customerManager2;
        customerManager.Add();
        customerManager.Remove();
        customerManager.Update();
        // new kullanılıyorsa bellekte heap kısmında tutulur. Aksi takdirde stock
        // alanındadır.
        int[] sayilar1 = new int[] { 1, 2, 3 };
        int[] sayilar2 = new int[] { 4, 5, 6 };
        sayilar2=sayilar1;
        sayilar1[0]=10;
        System.out.println(sayilar2[0]);
        //sadece stock
        int sayi1=10;
        int sayi2=20;
        sayi2=sayi1;
        sayi1=30;
        System.out.println(sayi2);
    }
}