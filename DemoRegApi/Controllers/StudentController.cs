using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DemoRegApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace DemoRegApi.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]

    public class StudentController : ControllerBase
    {
        public static List<Student> DataStudent = new List<Student>
        {
            new Student { IdStudent = "001", NameStudent = "abc",  Username = "admin1", Password = "12356" },
            new Student { IdStudent = "002", NameStudent = "def",  Username = "admin1", Password = "12356"},
            new Student { IdStudent = "003", NameStudent = "hij", Username = "admin1", Password = "12356" },

        };

        [HttpGet]
        public ActionResult<IEnumerable<Student>> GetStudentAll()
        {
            return DataStudent.ToList();
        }

        [HttpGet("{id}")]
        public ActionResult<Student> GetStudentById(string id)
        {
            return DataStudent.FirstOrDefault(it => it.IdStudent == id.ToString());
        }

        [HttpPost]
        public Student AddStudent([FromBody] Student Studentx)
        {
            var id = Guid.NewGuid().ToString();
            var item = new Student
            {
                IdStudent = id.ToString(),
                NameStudent = Studentx.NameStudent
               
                
            };

            DataStudent.Add(item);
            return item;
        }

        [HttpPut("{id}")]
        public Student EditStudent(string id, [FromBody] Student Studentx)
        {
            var _id = DataStudent.FirstOrDefault(it => it.IdStudent == id.ToString());
            var item = new Student
            {
                IdStudent = id,
                NameStudent = Studentx.NameStudent
               
                
            };
            DataStudent.Remove(_id);
            DataStudent.Add(item);
            return item;

        }

        [HttpDelete("{id}")]
        public void DeleteStudent(string id)
        {
            var delete = DataStudent.FirstOrDefault(it => it.IdStudent == id.ToString());
            DataStudent.Remove(delete);
        }


    }

}