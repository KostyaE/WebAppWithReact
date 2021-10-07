using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAppWithReact.Models
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Employee> Employees { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
            Database.EnsureCreated();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            Employee employee1 = new Employee { EmployeeId = 1, EmployeeName = "Иван Иванов", Birthday = new DateTime(2015, 5, 20), Decree = false, Gender = "Male", Position = "DevOps"};
            Employee employee2 = new Employee { EmployeeId = 2, EmployeeName = "Светлана Иванова", Birthday = new DateTime(1985, 7, 20), Decree = true, Gender = "Female", Position = "Manager" };
            Employee employee3 = new Employee { EmployeeId = 3, EmployeeName = "Николай Иванов", Birthday = new DateTime(1988, 7, 10), Decree = false, Gender = "Male", Position = "Tester" };
            Employee employee4 = new Employee { EmployeeId = 4, EmployeeName = "Руслан Валиев", Birthday = new DateTime(1989, 2, 22), Decree = false, Gender = "Male", Position = "Tester" };
            Employee employee5 = new Employee { EmployeeId = 5, EmployeeName = "Артур Исхаков", Birthday = new DateTime(1984, 3, 23), Decree = false, Gender = "Male", Position = "DevOps" };
            Employee employee6 = new Employee { EmployeeId = 6, EmployeeName = "Степан Егоров", Birthday = new DateTime(1983, 6, 1), Decree = false, Gender = "Male", Position = "Manager" };
            Employee employee7 = new Employee { EmployeeId = 7, EmployeeName = "Дмитрий Иванов", Birthday = new DateTime(1989, 1, 2), Decree = false, Gender = "Male", Position = "Developer" };
            Employee employee8 = new Employee { EmployeeId = 8, EmployeeName = "Алина Нуриева", Birthday = new DateTime(1988, 8, 24), Decree = false, Gender = "Female", Position = "Manager" };
            Employee employee9 = new Employee { EmployeeId = 9, EmployeeName = "Айсылу Камалиева", Birthday = new DateTime(1985, 9, 14), Decree = true, Gender = "Female", Position = "Developer" };
            Employee employee10 = new Employee { EmployeeId = 10, EmployeeName = "Марат Миннулин", Birthday = new DateTime(1982, 7, 20), Decree = false, Gender = "Male", Position = "Developer" };

            modelBuilder.Entity<Employee>().HasData(new Employee[] {
                employee1,
                employee2,
                employee3,
                employee4,
                employee5,
                employee6,
                employee7,
                employee8,
                employee9,
                employee10});
            base.OnModelCreating(modelBuilder);
        }       
    }
}
