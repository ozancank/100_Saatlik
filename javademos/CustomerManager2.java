public class CustomerManager2 {

    private ICustomerDal customerDal;

    public CustomerManager2(ICustomerDal customerDal) {
        this.customerDal = customerDal;
    }

    public void add() {
        customerDal.Add();
    }
}