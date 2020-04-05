import java.io.BufferedWriter;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class workingWithFiles {
    public static void main(String[] args) {
        createFile();
        System.out.println("----------------------------------");
        getFileInfo();
        System.out.println("----------------------------------");
        writeFile();
        System.out.println("----------------------------------");
        readFile();
    }

    public static void createFile() {
        File file = new File("D:\\OneDrive\\Program\\83_Saatlik\\javademos\\Files\\student.txt");
        try {
            if (file.createNewFile()) {
                System.out.println("Dosya olusturuldu.");
            } else {
                System.out.println("Dosya zaten mevcut.");
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void getFileInfo() {
        File file = new File("D:\\OneDrive\\Program\\83_Saatlik\\javademos\\Files\\student.txt");
        if (file.exists()) {
            System.out.println("Dosya adi : " + file.getName());
            System.out.println("Dosya yolu : " + file.getAbsolutePath());
            System.out.println("Dosya yazilabilir mi : " + file.canWrite());
            System.out.println("Dosya okunabilir mi : " + file.canRead());
            System.out.println("Dosya boyutu (byte) : " + file.length());
        }
    }

    public static void readFile() {
        File file = new File("D:\\OneDrive\\Program\\83_Saatlik\\javademos\\Files\\student.txt");
        try {
            Scanner reader = new Scanner(file);
            while (reader.hasNextLine()) {
                String line = reader.nextLine();
                System.out.println(line);
            }
            reader.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }

    public static void writeFile() {
        try {
            BufferedWriter writer = new BufferedWriter(
                    new FileWriter("D:\\OneDrive\\Program\\83_Saatlik\\javademos\\Files\\student.txt", true));
            writer.newLine();
            writer.write("01");
            System.out.println("Dosyaya yazildi.");
            writer.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}