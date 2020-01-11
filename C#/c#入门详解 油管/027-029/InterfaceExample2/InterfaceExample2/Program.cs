using System;

namespace InterfaceExample2 {
    //通过接口降低依赖耦合度 松耦合
    class Program {
        static void Main(string[] args) {
            var user = new PhoneUser(new EricssonPhone());
            user.UsePhone();
        }
    }

    class PhoneUser {
        private IPhone _phone;

        public PhoneUser(IPhone phone) {
            _phone = phone;
        }

        public void UsePhone() {
            _phone.Dail();
            _phone.PickUp();
            _phone.Send();
            _phone.Receive();
        }
    }

    interface IPhone {
        void Dail();
        void PickUp();
        void Send();
        void Receive();
    }

    class NokiaPhone:IPhone {
        public void Dail() {
            Console.WriteLine("Nokia calling...");
        }

        public void PickUp() {
            Console.WriteLine("Hello! This is Tim!");
        }

        public void Send() {
            Console.WriteLine("Hello!");
        }

        public void Receive() {
            Console.WriteLine("Nokia message ring...");
        }
    }

    class EricssonPhone:IPhone {
        public void Dail() {
            Console.WriteLine("Ericsson calling...");
        }

        public void PickUp() {
            Console.WriteLine("Hi! This is Tim!");
        }

        public void Send() {
            Console.WriteLine("Hello!");
        }

        public void Receive() {
            Console.WriteLine("Ericsson ring...");
        }
    }
}