using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace practice1
{
    public class Person
    {
        private string name;
        private int age;
        public string Name
        {
            get { return name; }
            set { name = value; }
        }
        public int Age
        {
            get { return age; }
            set { age = value; }
        }
        public static bool operator >(Person p1, Person p2) =>
            p1.Age > p2.Age;
        public static bool operator <(Person p1, Person p2) =>
            p1.Age < p2.Age;
        public static bool operator >=(Person p1, Person p2) =>
            p1.Age < p2.Age;
        public static bool operator <=(Person p1, Person p2) =>
            p1.Age > p2.Age;
    }
}
