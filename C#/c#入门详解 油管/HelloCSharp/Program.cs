using System;
using System.IO;

namespace HelloCSharp
{
    class Program
    {
        static void Main(string[] args)
        {
            var stream = File.Create(@"D:\c#\c#r入门详解 油管\Playground\Hello.txt");
            var writer = new StreamWriter(stream);
            writer.WriteLine("Hello C# World!");
            writer.Flush();
            writer.Close();
            Console.WriteLine("Done!");
        }
    }
}
