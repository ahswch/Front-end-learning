using System;

namespace InterfaceExample3 {
//    接口,解耦,依赖倒置原则是怎么被单元测试所应用的
//    生产电扇  高电流转的快  电流保护  依赖电源
    class Program {
        static void Main(string[] args) {
            var fan = new DeskFan(new PowerSupply());
            Console.WriteLine(fan.Work());
        }
    }

    public interface IPowerSupply {
        int GetPower();
    }

    public class PowerSupply : IPowerSupply {
        public int GetPower() {
            return 100;   //  测试需要修改类里的代码 不行 需解耦  供电增加 其他设备可能过载
        }
    }

    public class DeskFan {
        private IPowerSupply _powerSupply;

        public DeskFan(IPowerSupply powerSupply) {
            _powerSupply = powerSupply;
        }

        public string Work() {
            int power = _powerSupply.GetPower();
            if (power <= 0) {
                return "Won't work.";
            } else if (power < 100) {
                return "Slow";
            } else if (power < 200) {
                return "Work fine";
            }
            else {
                return "Warning!";
            }
        }
    }
}