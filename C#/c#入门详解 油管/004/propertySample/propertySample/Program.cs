using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace propertySample
{
    class Program
    {
        static void Main(string[] args)
        {
            AdventureWorksDW2012Entities proxy = new AdventureWorksDW2012Entities();
            foreach (DimProduct p in proxy.DimProducts)
            {
                Console.WriteLine(p.EnglishProductName);
            }
            Console.WriteLine("=======================");
            Console.WriteLine(proxy.DimProducts.Count());
        }
    }
}
