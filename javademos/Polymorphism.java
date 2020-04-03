public class Polymorphism {
    public static void main(String[] args) {
        EmailLogger emailLogger = new EmailLogger();
        emailLogger.Log("Log mesaji");

        BaseLogger[] loggers = new BaseLogger[] { new FileLogger(), new EmailLogger(), new DatabaseLogger() };
        for (BaseLogger logger : loggers) {
            logger.Log("Log mesaji");
        }

        CustomerManager customerManager = new CustomerManager(new DatabaseLogger());
        customerManager.Remove();
    }
}