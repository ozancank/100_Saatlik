import java.util.Scanner;

public class packagesDemo {
    public static void main(String[] args) {
        Scanner data = new Scanner(System.in);

        System.out.println("Adinizi giriniz:");
        String isim = data.nextLine();

        System.out.println("Adiniz " + isim);

        data.close();;
    }
}