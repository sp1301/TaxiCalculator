using System;
using TaxiCalculatorAPI.Controllers;
using TaxiCalculatorAPI.Services;
using Xunit;

namespace TaxiCalculator.Test
{
    public class CalculationControllerTests
    {
        private CalculationsService _CalculationsService;
        private CalculationsController _CalculationsController;
        public CalculationControllerTests()
        {
            _CalculationsService = new CalculationsService();
            _CalculationsController = new CalculationsController(_CalculationsService);
        }

        [Fact]
        public void GetTaxiCalculationsValid()
        {
            string result = _CalculationsController.GetTaxiCalculations("03/21/2020","8:00PM",5,5 );

            Assert.Equal("14.5", result);
        }

        [Fact]
        public void GetTaxiCalculationsDateFail()
        {
            string result = _CalculationsController.GetTaxiCalculations("03/212020", "8:00PM", 5, 5);

            Assert.Equal("", result);
        }

        [Fact]
        public void GetTaxiCalculationsTimeFail()
        {
            string result = _CalculationsController.GetTaxiCalculations("03/21/2020", "8:00P", 5, 5);

            Assert.Equal("", result);
        }

        [Fact]
        public void GetTaxiCalculationsBelowFail()
        {
            string result = _CalculationsController.GetTaxiCalculations("03/21/2020", "8:00PM", -1, 5);

            Assert.Equal("", result);
        }

        [Fact]
        public void GetTaxiCalculationsOverFail()
        {
            string result = _CalculationsController.GetTaxiCalculations("03/21/2020", "8:00PM", 5, -1);

            Assert.Equal("", result);
        }
    }
}
