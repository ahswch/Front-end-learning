using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Console;
using static System.Convert;

namespace Ch05Ex04
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] friendNames = { "Todd Anthony", "Kevin Holton", "Shana Laigle" };
            //int i;
            WriteLine($"Here are {friendNames.Length} of my friends:");
            //for (i=0; i < friendNames.Length; i++)
            //{
            //    WriteLine(friendNames[i]);
            //}
            foreach (string friendName in friendNames)
            {
                WriteLine(friendNames);
            }
            ReadKey();
        }
    }
}
