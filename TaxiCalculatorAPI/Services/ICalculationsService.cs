using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TaxiCalculatorAPI.Services
{
    public interface ICalculationsService
    {
        string CalculateTaxiSum(DateTime Date, string Time, int Below, int Over);
    }
}
