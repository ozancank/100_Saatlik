using System;

namespace Inheritance
{
    internal class Program
    {
        private static void Main(string[] args)
        {
            Person[] persons = new Person[3]
            {
                new Customer
                {
                    FirstName = "Engin"
                }, new Student
                {
                    FirstName = "Derin"
                }, new Person
                {
                    FirstName = "Salih"
                }
            };
            foreach (var person in persons)
            {
                Console.WriteLine(person.FirstName);
            }

            Console.ReadLine();
        }
    }

    internal class Person
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }

    internal class Customer : Person
    {
        public string City { get; set; }
    }

    internal class Student : Person
    {
        public string Department { get; set; }
    }
}