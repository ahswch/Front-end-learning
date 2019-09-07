using System;
using MyLib;

namespace HelloAccess {
    class Program {
        static void Main(string[] args) {
            Car car = new Car();
            car.Refuel();
            car.TurboAccelerate();
            Console.WriteLine(car.Speed);

            Bus bus = new Bus();
            bus.Refuel();
            bus.SlowAccelerate();
            Console.WriteLine(bus.Speed);
        }
    }

    class Bus : Vehicle {
        public void SlowAccelerate() {
            Burn(1);
            _rpm += 500;
        }
    }
}
