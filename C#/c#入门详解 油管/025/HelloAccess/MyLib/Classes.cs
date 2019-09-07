using System;

namespace MyLib
{
    public class Vehicle {
        private string Owner { get; set; } // 默认private

        protected int _rpm;
        private int _fuel;

        public void Refuel() {
            _fuel = 100;
        }

        protected void Burn(int fuel) { // 子类可访问
            _fuel -= fuel;
        }
        public void Accelerate() {
            Burn(1);
            _rpm += 1000;
        }

        public int Speed { get { return _rpm / 100; } }
    }
    public class Car : Vehicle {
        public void ShowOwner() {
            //Console.WriteLine(base.Owner); // 继承了 但无权限访问
        }

        public void TurboAccelerate() {
            Burn(2);
            _rpm += 3000;
        }
    }
}
