using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace practice4
{
    public interface IPassengerCarrier
    {

    }
    public interface IHeavyLoadCarrier
    {

    }
    public class Traffic
    {
    }
    public class Vehicle
    {

    }
    public class Car:Vehicle
    {

    }
    public class Train : Vehicle
    {

    }
    public class Compact: Car, IPassengerCarrier
    {

    }
    public class Suv : Car, IPassengerCarrier
    {

    }
    public class Pickup : Car, IPassengerCarrier, IHeavyLoadCarrier
    {

    }
    public class PassengerTrain: Train, IPassengerCarrier, IHeavyLoadCarrier
    {

    }
    public class FreightTrain: Train, IHeavyLoadCarrier
    {

    }
    public class T424DoubleBogey: Train, IHeavyLoadCarrier
    {

    }
}
