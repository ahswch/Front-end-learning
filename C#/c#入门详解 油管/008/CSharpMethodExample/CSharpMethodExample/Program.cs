using System;
using static System.Console;

namespace CSharpMethodExample
{
    class Program
    {
        static void Main(string[] args)
        {
            Calculator c = new Calculator();
            //Console.WriteLine(c.GetCircleArea(10));
            double result = Calculator.GetCircleArea(10);
            Console.WriteLine(result);
        }
    }
    class Calculator
    {
        public static double GetCircleArea(double r)
        {
            return Math.PI * r * r;
        }

        public static double GetCylinderVolume(double r, double h)
        {
            return GetCircleArea(r) * h;
        }

        public static double GetConeVolume(double r, double h)
        {
            return GetCylinderVolume(r, h) / 3;
        }
    }
}
