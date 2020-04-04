import java.util.ArrayList;
import java.util.Collections;

public class ArrayLists {
    public static void main(String[] args) throws Exception {
        int[] sayilar = new int[] { 1, 2, 3 };
        sayilar = new int[4];
        System.out.println(sayilar[0]);

        ArrayList<String> sayilar2 = new ArrayList<String>();
        sayilar2.add("1");
        sayilar2.add("10");
        sayilar2.add("Istanbul");
        sayilar2.add("Ankara");
        System.out.println(sayilar2.size());
        sayilar2.set(0, "100");
        Collections.sort(sayilar2);
        for (String x : sayilar2) {
            System.out.println(x);
        }
        sayilar2.remove(0);
        System.out.println(sayilar2.get(0));
        sayilar2.clear();
    }
}