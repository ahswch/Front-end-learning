using System;
using System.Collections.Generic;

namespace CreateOperator
{
    class Program
    {
        static void Main(string[] args)
        {
            Person person1 = new Person();
            Person person2 = new Person();
            person1.Name = "Deer";
            person2.Name = "Deer's wife";
            List<Person> nation = person1 + person2;
            foreach (var item in nation)
            {
                Console.WriteLine(item.Name);
            }
        }
    }
    class Person
    {
        public string Name;

        public static List<Person> operator +(Person p1, Person p2) {
            List<Person> people = new List<Person>();
            people.Add(p1);
            people.Add(p2);
            for (int i = 0; i < 11; i++)
            {
                Person child = new Person();
                child.Name = p1.Name + " & " + p2.Name;
                people.Add(child);
            }

            return people; 
        }
    }
}
