using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Console;

namespace practice5
{
    class Program
    {
        static void Main(string[] args)
        {
        }
        interface ICup
        {
            string color { get };
        }
    }
    class HotDrink
    {
        public bool Milk;
        public bool Sugar;

        public static void Drink()
        {
            WriteLine("Function Drink() has been called.");
        }
        public static void AddMilk()
        {
            WriteLine("Function AddMilk() has been called.");
        }
        public static void AddSugar()
        {
            WriteLine("Function AddSugar() has been called.");
        }
    }
    class CupOfCoffee:HotDrink
    {
        public string BeanType;
    }
    class CupOfTea:HotDrink
    {
        public string leafType;
    }
    static void ManipulateDrink(HotDrink drink)
    {
        ICup cupInterface = drink as ICup;
        cupInterface.Wash();
    }
}
// 不明