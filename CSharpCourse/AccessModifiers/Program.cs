namespace AccessModifiers
{
    internal class Program
    {
        private static void Main(string[] args)
        {
        }
    }

    internal class Customer
    {
        protected int Id { get; set; }

        public void Save()
        {
        }

        public void Delete()
        {
        }
    }

    internal class Student : Customer
    {
        public void Save2()
        {
        }
    }

    public class Course
    {
        public string Name { get; set; }
    }
}