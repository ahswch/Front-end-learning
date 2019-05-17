using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Console;
using static System.Convert;

namespace practice4
{
    class Program
    {
        static void Main(string[] args)
        {
            string reverse = "", inputValue;
            WriteLine("请输入一个字符串");
            inputValue = ReadLine();
            for (int i = 0;i < inputValue.Length; i++)
            {
                reverse += inputValue[inputValue.Length - 1 - i];
            }
            WriteLine($"反转字符串：{reverse}");
            ReadKey();
        }
    }
}
