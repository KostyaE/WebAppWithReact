using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using WebAppWithReact.Models;

namespace WebAppWithReact.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private ApplicationDbContext _context;

        public WeatherForecastController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Employee> Get()
        {
            //IEnumerable<Employee> weathers = _context.Employees.ToArray();

            return _context.Employees.ToArray();
        }
        [HttpPost]
        public async Task<JsonResult> Post(Employee employee)
        {
            _context.Employees.Add(employee);
            await _context.SaveChangesAsync();

            return new JsonResult("Added Successfully");
        }


        [HttpPut]
        public async Task<JsonResult> Put(Employee employee)
        {
            var emp = _context.Employees.Where(c => c.EmployeeId == employee.EmployeeId).FirstOrDefault();
            emp = employee;
            await _context.SaveChangesAsync();

            return new JsonResult("Updated Successfully");
        }

        [HttpDelete("{id}")]
        public async Task<JsonResult> Delete(int id)
        {
            var emp = _context.Employees.Where(c => c.EmployeeId == id).FirstOrDefault();
            _context.Employees.Remove(emp);
            await _context.SaveChangesAsync();

            return new JsonResult("Deleted Successfully");
        }
    }
}
