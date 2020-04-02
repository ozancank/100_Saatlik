public class Arrays {
    public static void main(String[] args) {
        String ogrenci1 = "O1";
        String ogrenci2 = "O2";
        String ogrenci3 = "O3";

        System.out.println(ogrenci1);
        System.out.println(ogrenci2);
        System.out.println(ogrenci3);

        System.out.println("-----------------------------");

        String[] ogrenciler = new String[3];
        ogrenciler[0] = "A1";
        ogrenciler[1] = "A2";
        ogrenciler[2] = "A3";

        for (int i = 0; i < ogrenciler.length; i++) {
            System.out.println(ogrenciler[i]);
        }

        System.out.println("-----------------------------");

        for (String ogrenci : ogrenciler) {
            System.out.println(ogrenci);
        }

        System.out.println("-----------------------------");

        double[] liste = { 1.2, 6.3, 4.3, 5.6 };
        double total = 0;
        double max = liste[0];
        for (double number : liste) {
            if (max < number) {
                max = number;
            }
            total += number;
            System.out.println(number);
        }
        System.out.println("Toplam = " + total);
        System.out.println("En Buyuk = " + max);
    }
}