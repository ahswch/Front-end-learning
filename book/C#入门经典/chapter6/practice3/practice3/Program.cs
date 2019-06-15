using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Console;

namespace practice3
{
    class Program
    {
        delegate string ReadLineDelegate();
        static void Main(string[] args)
        {
            ReadLineDelegate readLine = new ReadLineDelegate(ReadLine);
            WriteLine("请输入一个字符串：");
            string input = readLine();
            WriteLine($"你输入的是：{input}");
            ReadKey();
        }
    }
}
