using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;

namespace TaxiCalculatorAPI.Services
{
    public class CalculationsService : ICalculationsService
    {
        public string CalculateTaxiSum(DateTime Date, string Time, int Below, int Over)
        {

            try
            {
                TimeSpan ConvertedTime = DateTime.Parse(Time).TimeOfDay;
                DateTime DateAndTime = Date.Add(ConvertedTime);

                if (Below < 0 || Over < 0)
                    return "";


                double Total = 0.00;
                double BaseCost = 3.00;
                double UnitCost = 0.35;
                double NightCost = 0.50;
                double WeekDayCost = 1.00;
                double NYCost = 0.50;

                //Add Base Cost
                Total += BaseCost;

                //Add NY Cost
                Total += NYCost;


                //Night Surcharge Check
                if (DateAndTime >= Date.Add(TimeSpan.Parse("20:00")) || DateAndTime < Date.Add(TimeSpan.Parse("06:00")))
                    Total += NightCost;

                //Peak Surcharge Check
                if ((DateAndTime.DayOfWeek != DayOfWeek.Saturday && DateAndTime.DayOfWeek != DayOfWeek.Sunday) && (DateAndTime >= Date.Add(TimeSpan.Parse("16:00")) && DateAndTime < Date.Add(TimeSpan.Parse("20:00"))))
                    Total += WeekDayCost;

                //Less then 6 mph add
                Total += Convert.ToDouble(Below) * 5.00 * UnitCost;

                //Stationary and over 6 mph add
                Total += Convert.ToDouble(Over) * UnitCost;


                return Total.ToString();
            }
            catch(Exception e)
            {
                //log error
                return "";
            }
            
        }

    }
}
