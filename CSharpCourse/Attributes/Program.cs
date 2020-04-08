using System;

namespace Attributes
{
    internal class Program
    {
        private static void Main(string[] args)
        {
            Customer customer = new Customer { Id = 1, LastName = "Demiroğ", Age = 32 };
            CustomerDal customerDal = new CustomerDal();
            //customerDal.Add(customer);
            Console.ReadLine();
        }
    }

    [ToTable("Customers")]
    [ToTable("TblCustomers")]
    internal class Customer
    {
        public int Id { get; set; }

        [RequiredProperty]
        public string FirstName { get; set; }

        [RequiredProperty]
        public string LastName { get; set; }

        [RequiredProperty]
        public int Age { get; set; }
    }

    internal class CustomerDal
    {
        [Obsolete("Dont use Add, instead use AddNew Method")]
        public void Add(Customer customer)
        {
            Console.WriteLine("{0},{1},{2},{3} added!",
                customer.Id, customer.FirstName, customer.LastName, customer.Age);
        }

        public void AddNew(Customer customer)
        {
            Console.WriteLine("{0},{1},{2},{3} added!",
                customer.Id, customer.FirstName, customer.LastName, customer.Age);
        }
    }

    [AttributeUsage(AttributeTargets.Property, AllowMultiple = true)]
    internal class RequiredPropertyAttribute : Attribute
    {
    }

    [AttributeUsage(AttributeTargets.Class, AllowMultiple = true)]
    internal class ToTableAttribute : Attribute
    {
        private string _tableName;

        public ToTableAttribute(string tableName)
        {
            _tableName = tableName;
        }
    }
}