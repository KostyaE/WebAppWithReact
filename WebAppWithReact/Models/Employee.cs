using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAppWithReact.Models
{
    public class Employee
    {
        public int EmployeeId { get; set; }
        public string EmployeeName { get; set; }
        public string Position { get; set; }
        public DateTime Birthday { get; set; }
        public string Gender { get; set; }
        public bool Decree { get; set; }
    }
}
