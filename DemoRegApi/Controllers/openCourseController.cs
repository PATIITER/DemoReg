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

    public class openCourseController : ControllerBase
    {
        public static List<Student> DataStudent = new List<Student>
        {
            new Student { IdStudent = "001", NameStudent = "abc", Score= "99", Username = "admin1", Password = "12356" },
            new Student { IdStudent = "002", NameStudent = "abc", Score= "99", Username = "admin1", Password = "12356" },
            new Student{ IdStudent = "003", NameStudent = "abc", Score= "99", Username = "admin1", Password = "12356" }
        };

         public static List<Teacher> DataTeacher = new List<Teacher>
        {
            new Teacher { IdTeacher = "1", NameTeacher = "sdf",Username = "admin1", Password = "12356"},
            new Teacher { IdTeacher = "2", NameTeacher = "sdtrwgg",Username = "admin2", Password = "12356" },
            new Teacher { IdTeacher = "3", NameTeacher = "wtdfg",Username = "admin3", Password = "12356" },

        };
        public static List<openCourse> DataopenCourse = new List<openCourse>
        {
            new openCourse { IdCourse = "001", NameCourse = " Business Administration",Teacher = DataTeacher.ToArray(),Students = DataStudent.ToArray()},
            new openCourse { IdCourse = "002", NameCourse = "Computer Engineering",Teacher = DataTeacher.ToArray(),Students = DataStudent.ToArray()},
            new openCourse { IdCourse = "003", NameCourse = "International Business" ,Teacher = DataTeacher.ToArray(),Students = DataStudent.ToArray()},

        };

        [HttpGet]
        public ActionResult<IEnumerable<openCourse>> GetClassAll()
        {
            return DataopenCourse.ToList();
        }

        [HttpGet("{id}")]
        public ActionResult<openCourse> GetUserById(string id)
        {
            return DataopenCourse.FirstOrDefault(it => it.IdCourse == id.ToString());
        }

        [HttpPost]
        public openCourse AddUser([FromBody] Class Classx)
        {
            var id = Guid.NewGuid().ToString();
            var item = new Class
            {
                
                IdClass = id,
                NameClass = Classx.NameClass
               
                
            };

            DataopenCourse.Add(item);
            return item;
        }

        // [HttpPut("{id}")]
        // public openCourse EditUser(string id, [FromBody] Class Classx)
        // {
        //     var _id = DataopenCourse.FirstOrDefault(it => it.IdCourse == id.ToString());
        //     var item = new Class
        //     {
        //         IdClass = id,
        //         NameClass = Classx.NameClass
               
                
        //     };
        //     DataopenCourse.Remove(_id);
        //     DataopenCourse.Add(item);
        //     return item;

        // }

        [HttpDelete("{id}")]
        public void DeleteClass(string id)
        {
            var delete = DataopenCourse.FirstOrDefault(it => it.IdCourse == id.ToString());
            DataopenCourse.Remove(delete);
        }


    }

}