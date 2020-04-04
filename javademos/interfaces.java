public class interfaces {
    public static void main(String[] args) {
        CustomerManager2 customerManager=new CustomerManager2(new MySqlCustomerDal());
        // CustomerManager2 customerManager=new CustomerManager2();
        // customerManager.customerDal=new OracleCustomerDal();
        // customerManager.customerDal=new MySqlCustomerDal();
        customerManager.add();
    }
}