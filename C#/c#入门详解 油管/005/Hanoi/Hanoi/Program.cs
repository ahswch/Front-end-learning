using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Console;

namespace Hanoi
{
    class Program
    {
        static void Main(string[] args)
        {
            HanoiCalculator c = new HanoiCalculator();
            Console.WriteLine(c.CalculateHanoi(64));
            Console.ReadKey();
        }
    }
    class HanoiCalculator
    {
        public ulong CalculateHanoi(int count)
        {
            ulong stepForOnlyCurrentDish = 1;
            if (count == 1)
            {
                return stepForOnlyCurrentDish;
            }
            ulong totalSteps = stepForOnlyCurrentDish + CalculateHanoi(count - 1) * 2;
            return totalSteps;
        }
    }
}
