using System;
using Xunit;
using Moq;

namespace InterfaceExample3.Tests {
    public class DeskFanTests {
        [Fact] // 特征 特性 attribute 测试case
        public void PowerLowerThanZero_OK() {
            var mock = new Mock<IPowerSupply>();
            mock.Setup(ps=>ps.GetPower()).Returns(() => 0);
//            var fan = new DeskFan(new PowerSupplyLowerThanZero());
            var fan = new DeskFan(mock.Object);
            var expected = "Won't work.";
            var actual = fan.Work();
            Assert.Equal(expected, actual);
        }
        
        [Fact]
        public void PowerHigherThan200_Warning() {
            var mock = new Mock<IPowerSupply>();
            mock.Setup(ps=>ps.GetPower()).Returns(() => 220);
//            var fan = new DeskFan(new PowerSUpplyHigherThan200());
            var fan = new DeskFan(mock.Object);
            var expected = "Warning!";
            var actual = fan.Work();
            Assert.Equal(expected, actual);
        }
    }

//    class PowerSupplyLowerThanZero :IPowerSupply {
//        public int GetPower() {
//            return 0;
//        }
//    }
//
//    class PowerSUpplyHigherThan200 : IPowerSupply {
//        public int GetPower() {
//            return 220;
//        }
//    }
}