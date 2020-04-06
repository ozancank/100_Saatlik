using System;

namespace InterfacesDemo
{
    internal class Program
    {
        private static void Main(string[] args)
        {
            IWorker[] workers = new IWorker[3]
            {
                new Manager(),
                new Worker(),
                new Robot()
            };

            foreach (var worker in workers)
            {
                worker.Work();
            }

            IEat[] eats = new IEat[2]
            {
                new Worker(),
                new Manager()
            };

            foreach (var eat in eats)
            {
                eat.Eat();
            }
        }
    }

    internal interface IWorker
    {
        void Work();
    }

    //SOLID, Interface Segregation
    internal interface IEat
    {
        void Eat();
    }

    internal interface ISalary
    {
        void GetSalary();
    }

    internal class Manager : IWorker, IEat, ISalary
    {
        public void Eat()
        {
            throw new NotImplementedException();
        }

        public void GetSalary()
        {
            throw new NotImplementedException();
        }

        public void Work()
        {
            throw new NotImplementedException();
        }
    }

    internal class Worker : IWorker, IEat, ISalary
    {
        public void Eat()
        {
            throw new NotImplementedException();
        }

        public void GetSalary()
        {
            throw new NotImplementedException();
        }

        public void Work()
        {
            throw new NotImplementedException();
        }
    }

    internal class Robot : IWorker
    {
        public void Work()
        {
            throw new NotImplementedException();
        }
    }
}