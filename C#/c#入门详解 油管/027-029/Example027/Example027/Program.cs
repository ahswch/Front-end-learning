using System;

namespace Example027 {
    class Program {
        static void Main(string[] args) {
            Vehicle v = new RaceCar();
            v.Run();
        }
    }

//    abstract class VehicleBase {
    interface IVehicle {
        void Stop();
        void Fill();
        void Run();
    }
    
    abstract class Vehicle : IVehicle {
        public void Stop() {
            Console.WriteLine("Stopped!");
        }
        
        public void Fill() {
            Console.WriteLine("Pay and fill...");
        }

        abstract public void Run();
    }
    
    class Car : Vehicle {
        public override void  Run() {
            Console.WriteLine("Car is running...");
        }
    }

    class Truck : Vehicle {
        public override void Run() {
            Console.WriteLine("Truck is running...");
        }
    }

    class RaceCar : Vehicle {
        public override void Run() {
            Console.WriteLine("Race car is running...");
        }
    }
}

//为做基类而生的"抽象类"与"开发/关闭原则"
