using System;
using static System.Console;

namespace ConstructorExample
{
    class Program
    {
        static void Main(string[] args)
        {
            //Student stu = new Student(1, "test");
            //Student st1 = new Student();
            //Console.WriteLine(stu.ID);
            //Console.WriteLine(stu.Name);
            //Console.WriteLine(st1.Name);
            Student stu = new Student();
        }
    }
    class Student
    {
        //public Student(int initId, string initName)
        //{
        //    this.ID = initId;
        //    this.Name = initName;
        //}
        //public Student()
        //{
        //    this.ID = 1;
        //    this.Name = "test1";
        //}
        public int ID;
        public string Name;
    }
}
