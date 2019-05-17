using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace practice5
{
    class Program
    {
        static void Main(string[] args)
        {
            int a, b, c, d;
            Console.WriteLine("请输入第一个整数：");
            a = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("请输入第二个整数：");
            b = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("请输入第三个整数：");
            c = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("请输入第四个整数：");
            d = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine($"四个数相乘及a*b*c*d = {a * b * c * d}");
            Console.ReadKey();
        }
    }
}
