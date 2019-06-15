using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Console;

namespace practice6
{
    class Program
    {
        static void Main(string[] args)
        {
            WriteLine("请输入一个字符串：");
            string inputValue = ReadLine();
            //String result = "\"" + inputValue.Replace(" ", "\" \"") + "\"";
            string[] result = inputValue.Split(' ');
            WriteLine($"单词加双引号后");
            foreach (string word in result)
            {
                Write($"\"{word}\" ");
            }
            ReadKey();
        }
    }
}
