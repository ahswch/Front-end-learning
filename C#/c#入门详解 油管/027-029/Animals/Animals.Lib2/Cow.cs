using System;
using BabyStroller.SDK;

namespace Animals.Lib2 {
    
    [Unfinished]
    public class Cow : IAnimal {
        public void Voice(int times) {
            for (int i = 0; i < times; i++) {
                Console.WriteLine("Moo!");
            }
        }
    }
}