using System;
using System.Collections.Generic;

namespace Generics
{
    internal class Program
    {
        private static void Main(string[] args)
        {
            Utilities utilities = new Utilities();
            List<string> result = utilities.BuildList<string>("Ankara", "İzmir", "Adana");
            foreach (var item in result)
            {
                Console.WriteLine(item);
            }

            List<Customer> result2 = utilities.BuildList<Customer>(new Customer { FirstName = "Engin" }, new Customer { FirstName = "Derin" });

            foreach (var customer in result2)
            {
                Console.WriteLine(customer.FirstName);
            }
            Console.ReadLine();
        }
    }

    internal class Utilities
    {
        public List<T> BuildList<T>(params T[] items)
        {
            return new List<T>(items);
        }
    }

    internal class Product : IEntity
    {
    }

    internal interface IProductDal : IRepository<Product>
    {
    }

    internal class Customer : IEntity
    {
        public string FirstName { get; set; }
    }

    internal interface ICustomerDal : IRepository<Customer>
    {
        void Custom();
    }

    internal interface IStudentDal : IRepository<Student>
    {
    }

    internal class Student : IEntity
    {
    }

    internal interface IEntity
    {
    }

    internal interface IRepository<T> where T : class, IEntity, new()
    {
        List<T> GetAll();

        T Get(int id);

        void Add(T entity);

        void Delete(T entity);

        void Update(T entity);
    }

    internal class ProductDal : IProductDal
    {
        public void Add(Product entity)
        {
            throw new NotImplementedException();
        }

        public void Delete(Product entity)
        {
            throw new NotImplementedException();
        }

        public Product Get(int id)
        {
            throw new NotImplementedException();
        }

        public List<Product> GetAll()
        {
            throw new NotImplementedException();
        }

        public void Update(Product entity)
        {
            throw new NotImplementedException();
        }
    }

    internal class CustomerDal : ICustomerDal
    {
        public void Add(Customer entity)
        {
            throw new NotImplementedException();
        }

        public void Custom()
        {
            throw new NotImplementedException();
        }

        public void Delete(Customer entity)
        {
            throw new NotImplementedException();
        }

        public Customer Get(int id)
        {
            throw new NotImplementedException();
        }

        public List<Customer> GetAll()
        {
            throw new NotImplementedException();
        }

        public void Update(Customer entity)
        {
            throw new NotImplementedException();
        }
    }
}