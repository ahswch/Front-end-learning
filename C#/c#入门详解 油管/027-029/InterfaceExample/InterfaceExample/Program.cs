using System;
using System.Collections;

namespace InterfaceExample {
    class Program {
        static void Main(string[] args) {
            int[] num1 = new int[] {1, 2, 3, 4, 5};
            ArrayList num2 = new ArrayList {1, 2, 3, 4, 5};
            Console.WriteLine(Sum(num1));
            Console.WriteLine(Avg(num1));
            Console.WriteLine(Sum(num2));
            Console.WriteLine(Avg(num2));
        }

        static int Sum(IEnumerable nums) {
            int sum = 0;
            foreach (var n in nums) sum += (int) n;
            return sum;
        }
        static double Avg(IEnumerable nums) {
            int sum = 0;
            double count = 0;
            foreach (var n in nums) {
                sum += (int) n;
                count++;
            }

            return sum / count;
        }
    }
}