using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Console;
using static System.Convert;

namespace practice5
{
    class Program
    {
        static void Main(string[] args)
        {
            WriteLine("请输入一个字符串：");
            string inputValue = ReadLine();
            String result = inputValue.Replace("no", "yes");
            WriteLine($"如果输入的字符串含有\'no\'，将会被替换为\'yes\'：{result}");
            ReadKey();
        }
    }
}
