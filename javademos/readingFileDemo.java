import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

public class readingFileDemo {
    public static void main(String[] args) throws IOException { // burada throws verilirse bu fonksiyonu kullanacak kod
                                                                // try catch içine almalı
        BufferedReader reader = null;
        int total = 0;
        try {
            reader = new BufferedReader(new FileReader("D:\\OneDrive\\Program\\83_Saatlik\\javademos\\sayilar.txt"));
            String line = null;
            while ((line = reader.readLine()) != null) {
                total += Integer.valueOf(line);
            }
            System.out.println("Toplam = " + total);
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } finally {
            reader.close();
        }
    }
}