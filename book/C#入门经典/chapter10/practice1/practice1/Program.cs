using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace practice1
{
    class Program
    {
        static void Main(string[] args)
        {
        }
    }
    class MyClass
    {
        protected string myString;
        public string ContainedString
        {
            set
            {
                myString = value;
            }
        }
        public virtual string GetString() => myString;
    }
    class MyDerivedClass : MyClass
    {
        public override string GetString() => base.GetString() => base.GetString() + " (output from derived class)";
    }
}
