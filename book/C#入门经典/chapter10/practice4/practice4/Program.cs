using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Console;

namespace practice4
{
    class Program
    {
        static void Main(string[] args)
        {
            MyCopyableClass obj1 = new MyCopyableClass();
            obj1.ContainedInt = 5;
            MyCopyableClass obj2 = obj1.GetCopy();
            obj1.ContainedInt = 9;
            WriteLine(obj2.ContainedInt);
            ReadKey();
        }
    }
    class MyCopyableClass
    {
        protected int myInt;
        public int ContainedInt
        {
            get
            {
                return myInt;
            }
            set
            {
                myInt = value;
            }
        }
        public MyCopyableClass GetCopy() => (MyCopyableClass)MemberwiseClone();
    }
}
