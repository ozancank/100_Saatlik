import java.util.HashMap;

public class hashMapDemo {
    public static void main(String[] args) {
        final HashMap<String, String> sozluk = new HashMap<String, String>();
        sozluk.put("book", "kitap");
        sozluk.put("table", "masa");
        sozluk.put("computer", "bilgisayar");
        System.out.println(sozluk);
    }
}