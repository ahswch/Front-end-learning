using System;

namespace IspExample2 {
    // 显式接口实例  这个杀手不太冷
    class Program {
        static void Main(string[] args) {
            IKiller killer = new WarmKiller();
            killer.Kill();
            var wk = killer as WarmKiller;
            wk.Love();
        }
    }

    interface IGentleman {
        void Love();
    }

    interface IKiller {
        void Kill();
    }

    class WarmKiller : IGentleman, IKiller {
        public void Love() {
            Console.WriteLine("I will love you for ever ...");
        }

        void IKiller.Kill() {
            Console.WriteLine("Let me kill the enemy ...");
        }
    }
}