public class CustomerManager extends PersonManager{
    private BaseLogger logger;

    public CustomerManager(BaseLogger logger){
        this.logger=logger;
    }

    public void Remove(){
        System.out.println("Musteri silindi.");
        logger.Log("Mesajjjj");
    }
    
    public void Update(){
        System.out.println("Musteri guncellendi.");
    }    
}