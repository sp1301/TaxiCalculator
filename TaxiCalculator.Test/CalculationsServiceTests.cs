using System;
using TaxiCalculatorAPI.Services;
using Xunit;

namespace TaxiCalculator.Test
{
    public class CalculationServiceTests
    {
        private CalculationsService _CalculationsService;
        public CalculationServiceTests()
        {
            _CalculationsService = new CalculationsService();
        }

        [Fact]
        public void CalculateTaxiSumTestVaild()
        {
            string result = _CalculationsService.CalculateTaxiSum(DateTime.Parse("03/21/2020"),"8:00PM", 5, 5);

            Assert.Equal("14.5", result);
        }

        [Fact]
        public void CalculateTaxiSumTestTimeFail()
        {
            string result = _CalculationsService.CalculateTaxiSum(DateTime.Parse("03/21/2020"), "8:00P", 5, 5);

            Assert.Equal("", result);
        }

        [Fact]
        public void CalculateTaxiSumTestBelowFail()
        {
            string result = _CalculationsService.CalculateTaxiSum(DateTime.Parse("03/21/2020"), "8:00PM", -1, 5);

            Assert.Equal("", result);
        }

        [Fact]
        public void CalculateTaxiSumTestOverFail()
        {
            string result = _CalculationsService.CalculateTaxiSum(DateTime.Parse("03/21/2020"), "8:00PM", 5, -1);

            Assert.Equal("", result);
        }
    }
}
