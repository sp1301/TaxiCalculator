using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TaxiCalculatorAPI.Services;

namespace TaxiCalculatorAPI.Controllers
{
    [Route("api/calculations")]
    [ApiController]
    [EnableCors]
    public class CalculationsController : ControllerBase
    {
        private ICalculationsService _CalculationsService;
        public CalculationsController(ICalculationsService CalculationsService)
        {
            _CalculationsService = CalculationsService;
        }

        [HttpGet("taxicalculation")]
        public string GetTaxiCalculations([FromQuery]string date, [FromQuery]string time, [FromQuery]int below, [FromQuery]int over)
        {
            try
            {
                return _CalculationsService.CalculateTaxiSum(DateTime.Parse(date), time, below, over);
            }
            catch(Exception e)
            {
                //log error
                return "";
            }
        }

    }
}
