using System;

namespace OverrideExample {
    class Program {
        static void Main(string[] args) {
//            var v = new Vehicle();
//            v.Run();
//            var car = new Car();
//            car.Run();
//            
//            Car c = new RaceCar(); // 父类变量引用子类实例  调用的重写方法是 继承类上最新的版本
//            c.Run();
            Vehicle v = new Vehicle();
            v.Run();
            Console.WriteLine(v.Speed);

            Vehicle v1 = new Car();
            v1.Run();
            Console.WriteLine(v1.Speed);
        }
    }

    class Vehicle {
        private int _speed;

        public virtual int Speed {
            get { return _speed; }
            set { _speed = value; }
        }

        public virtual void Run() {
            Console.WriteLine("I'm running!'");
            _speed = 100;
        }
    }

    class Car : Vehicle {
        private int _rpm;

        public override int Speed {
            get { return _rpm / 100; }
            set { _rpm = value * 100; }
        }

        public override void Run() {
            Console.WriteLine("Car is running!");
            _rpm = 5000;
        }
    }

    class RaceCar : Car {
        public override void Run() {
            Console.WriteLine("Race car is running!");
        }
    }
}