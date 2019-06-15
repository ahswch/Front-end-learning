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
        struct order
        {
            public string itemName;
            public int unitCount;
            public double unitCost;
            public double TotalCost() => unitCost * unitCount;
            public string Info() => "Order Information: " + unitCount.ToString() + " " + itemName + " items at $" + unitCost.ToString() + " each, total cost $" + TotalCost().ToString();
        }
        static void Main(string[] args)
        {
        }
    }
}
