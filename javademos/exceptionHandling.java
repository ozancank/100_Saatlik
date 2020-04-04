public class exceptionHandling {
    public static void main(String[] args) {
        try {
            int[] sayilar = new int[] { 1, 2, 3 };
            System.out.println(sayilar[5]);
        } catch (Exception e) {
            System.out.println("Hata olustu. " + e);
        } finally {
            // ss
        }
    }
}