using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Console;

namespace Ch07Ex02
{
    class Program
    {
        static string[] eTypes = { "none", "simple", "index", "nested index", "filter" };
        static void Main(string[] args)
        {
            foreach (string etype in eTypes)
            {
                try
                {
                    WriteLine("Main() try block reached.");
                    WriteLine($"ThrowException(\"{etype}\") called.");
                    ThrowException(etype);
                    WriteLine("Main() try block continues.");
                }
                catch (System.IndexOutOfRangeException e) when (etype == "filter")
                {
                    WriteLine("Main() FILTERED System.IndexOutOfRangeException" + $"catch block reached. Message:\n\"{e.Message}\"");
                }
                catch (System.IndexOutOfRangeException e)
                {
                    WriteLine("Main() System.IndexOutOfRangeException" + $"catch block reached. Message:\n\"{e.Message}\"");
                }
                catch
                {
                    WriteLine("Main() general catch block reached.");
                }
                finally
                {
                    WriteLine("Main() finally block reached.");
                }
            }
            ReadKey();
        }
        static void ThrowException(string exceptionType)
        {
            WriteLine($"ThrowException(\"{exceptionType}\") reached.");
            switch (exceptionType)
            {
                case "none":
                    WriteLine("Not throwing an exception.");
                    break;
                case "simple":
                    WriteLine("Throwing System.Exception.");
                    throw new System.Exception();
                case "index":
                    WriteLine("Throwing System.indexOutOfRangeException.");
                    eTypes[5] = "error";
                    break;
                case "nested index":
                    try
                    {
                        WriteLine("ThrowException(\"nested index\") " + "try block reached.");
                        WriteLine("ThrowException(\"index\") called.");
                        ThrowException("index");
                    }
                    catch
                    {
                        WriteLine("ThrowException(\"nested index\") general" + " block reached.");
                    }
                    finally
                    {
                        WriteLine("ThrowException(\"nested index\") finally" + " block reached.");
                    }
                    break;
                case "filter":
                    try
                    {
                        WriteLine("ThrowException(\"filter\") " + "try block reached.");
                        WriteLine("ThrowException(\"index\") called.");
                        ThrowException("index");
                    }
                    catch
                    {
                        WriteLine("ThrowException(\"filter\") general" + " catch block reached.");
                    }
                    break;
            }
        }
    }
}
