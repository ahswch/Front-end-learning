using System;
using System.Collections.Generic;
using System.IO;
using System.Runtime.Loader;
using  System.Linq;
using System.Reflection;
using BabyStroller.SDK;

namespace BabyStroller {
    class Program {
        static void Main(string[] args) {
            var folder = Path.Combine(Environment.CurrentDirectory, "Animals");
            var files = Directory.GetFiles(folder);
            var animalsTypes = new List<Type>();
            foreach (var file in files) {
                var assembly = AssemblyLoadContext.Default.LoadFromAssemblyPath(file);
                var types = assembly.GetTypes();
                foreach (var t in types) {
                    if (t.GetInterfaces().Contains(typeof(IAnimal))) {
                        var isUnfinished = t.GetCustomAttributes(false)
                            .Any(a => a.GetType() == typeof(UnfinishedAttribute));
                        if (isUnfinished) continue;
                        animalsTypes.Add(t);
                    }
                }
            }

            while (true) {
                for (int i = 0; i < animalsTypes.Count; i++) {
                    Console.WriteLine($"{i + 1}. {animalsTypes[i].Name}");
                }

                Console.WriteLine("===========================");
                Console.WriteLine("Please choose animal:");
                int index = int.Parse(Console.ReadLine());
                if (index > animalsTypes.Count || index < 1) {
                    Console.WriteLine("No such an animals. Try again!");
                    continue;
                }

                Console.WriteLine("How many times?");
                int times = int.Parse(Console.ReadLine());
                var t = animalsTypes[index - 1];
                var m = t.GetMethod("Voice");
                var o = Activator.CreateInstance(t);
                var a = o as IAnimal;
                a.Voice(times);
//                m.Invoke(o, new object[]{times});
            }
        }
    }
}