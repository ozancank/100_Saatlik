﻿using System;
using System.Data;

namespace ReferenceAndValueType
{
    internal class Program
    {
        private static void Main(string[] args)
        {
            int number1 = 10;
            int number2 = 20;
            number2 = number1;
            number1 = 30;

            Console.WriteLine(number2);

            string[] cities1 = new string[] { "Ankara", "Adana", "Afyon" };//101
            string[] cities2 = new string[] { "Bursa", "Bolu", "Balıkesir" };
            //101
            cities2 = cities1;
            cities1[0] = "İstanbul";
            Console.WriteLine(cities2[0]);

            DataTable dataTable;
            DataTable dataTable2 = new DataTable();
            dataTable = dataTable2;

            Console.ReadLine();
        }
    }
}