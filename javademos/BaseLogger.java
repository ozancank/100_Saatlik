public class BaseLogger {
    public void Log(String message) { //publicten sonra final yazılırsa override edilemez.
        System.out.println("Default Logger : " + message);
    }
}