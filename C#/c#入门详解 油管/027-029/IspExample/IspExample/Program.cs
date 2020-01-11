using System;
using System.Reflection;
using  Microsoft.Extensions.DependencyInjection;

namespace IspExample {
    class Program {
        static void Main(string[] args) {
            // 依赖注入
            var sc =  new ServiceCollection();
            sc.AddScoped(typeof(ITank), typeof(HeavyTank)); // 改成不是HeavyTank 相关也会变
            sc.AddScoped(typeof(IVehicle), typeof(LightTank));
            sc.AddScoped<Driver>();
            var sp = sc.BuildServiceProvider();
            // =============  分割线以上是一次性注册, 可以在程序启动时注册 分割线以下代表你在其它各个地方 只要能看到BuildServiceProvider的地方都可以用 不再有new操作符
            var driver = sp.GetService<Driver>();
            driver.Drive();


//            var drive = new Driver(new HeavyTank());
//            drive.Drive();
            // ITank tank = new HeavyTank();
            // =========================== 分割线以下不用静态类型

            // 一般不这样写 使用封装好的-依赖注入
//            var t = tank.GetType();
//            object o = Activator.CreateInstance(t);
//            MethodInfo fireMi = t.GetMethod("Fire");
//            MethodInfo runMi = t.GetMethod("Run");
//            fireMi.Invoke(o, null);
//            runMi.Invoke(o, null);


        }
    }

    class Driver {
        private IVehicle _vehicle;

        public Driver(IVehicle vehicle) {
            _vehicle = vehicle;
        }

        public void Drive() {
            _vehicle.Run();
        }
    }

    interface IVehicle {
        void Run();
    }

    class Car : IVehicle {
        public void Run() {
            Console.WriteLine("Car is running...");
        }
    }
    
    class Truck : IVehicle {
        public void Run() {
            Console.WriteLine("Truck is running...");
        }
    }

    interface IWeanpon {
        void Fire();
    }

    interface ITank : IVehicle, IWeanpon {
      
    }

    class  LightTank : ITank {
        public void Fire() {
            Console.WriteLine("Boom!");
        }

        public void Run() {
            Console.WriteLine("Ka ka ka ...");
        }
    }

    
    
    class HeavyTank : ITank {
        public void Fire() {
            Console.WriteLine("Boom!!!");
        }

        public void Run() {
            Console.WriteLine("Ka!! ka!! ka!! ...");
        }
    }
}