using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Console;
using static System.Convert;

namespace practice2
{
    class Program
    {
        static void Main(string[] args)
        {
            bool numberMark = false;
            double firstNumber, secondNumber;
            firstNumber = 0;
            secondNumber = 0;
            while (!numberMark)
            {
                WriteLine("请输入一个数字：");
                firstNumber = ToDouble(ReadLine());
                WriteLine("请输入另一个数字：");
                secondNumber = ToDouble(ReadLine());
                if ((firstNumber > 10) && (secondNumber > 10))
                {
                    WriteLine("只能有一个数字大于10");
                } else
                {
                    numberMark = true;
                }
            }
            WriteLine($"你输入的两个数是{firstNumber}和{secondNumber}");
            ReadKey();
        }
    }
}
