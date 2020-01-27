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

    public class TeacherController : ControllerBase
    {
        public static List<Student> DataStudent = new List<Student>
        {
            new Student { IdStudent = "001", NameStudent = "abc", Score= "99", Username = "admin1", Password = "12356" },
            new Student { IdStudent = "002", NameStudent = "def", Score= "80", Username = "admin2", Password = "12356"},
            new Student { IdStudent = "003", NameStudent = "hij", Score= "50", Username = "admin3", Password = "12356" },

        };
        public static List<Class> DataClass = new List<Class>
        {
            new Class { IdClass = "001", NameClass = "Business Administration",students = DataStudent.ToArray()  },
            new Class { IdClass = "002", NameClass = "Computer Engineering",students = DataStudent.ToArray()  },
            new Class { IdClass = "003", NameClass = "International Business",students = DataStudent.ToArray()  },

        };
        public static List<Teacher> DataTeacher = new List<Teacher>
        {
            new Teacher { IdTeacher = "1", NameTeacher = "sdf",Class = DataClass.ToArray(),Username = "admin1", Password = "12356"},
            new Teacher { IdTeacher = "2", NameTeacher = "sdtrwgg",Class = DataClass.ToArray(),Username = "admin2", Password = "12356" },
            new Teacher { IdTeacher = "3", NameTeacher = "wtdfg",Class = DataClass.ToArray(),Username = "admin3", Password = "12356" },

        };

        [HttpGet]
        public ActionResult<IEnumerable<Teacher>> GetTeacherAll()
        {
            return DataTeacher.ToList();
        }

        [HttpGet("{id}")]
        public ActionResult<Teacher> GetTeacherById(string id)
        {
            return DataTeacher.FirstOrDefault(it => it.IdTeacher == id.ToString());
        }

        [HttpGet("{id}")]
        public ActionResult<Teacher> GetTeacherId(string id)
        {
            return DataTeacher.FirstOrDefault(it => it.IdTeacher == id.ToString());

        }

        //ดูนักเรียนในวิชา
        [HttpGet("{id}")]
        public ActionResult<Class> GetTeacherByclass(string id)
        {
            return DataClass.FirstOrDefault(it => it.IdClass == id.ToString());

        }

        [HttpGet("{id}")]
        public ActionResult<Student> GetStudentById(string id)
        {

            return DataStudent.FirstOrDefault(it => it.IdStudent == id.ToString());


        }

        [HttpPost]
        public Teacher AddTeacher([FromBody] Teacher Teacherx)
        {
            // var id = Guid.NewGuid().ToString();

            var item = new Teacher
            {
                IdTeacher = Teacherx.IdTeacher,
                NameTeacher = Teacherx.NameTeacher,
                Class = Teacherx.Class,
                Username = Teacherx.Username,
                Password = Teacherx.Password

            };

            DataTeacher.Add(item);
            return item;
        }



        //เพิ่มวิชาในอาจาร
        [HttpPut("{id}")]
        public Teacher AddTeacherClass(string id, [FromBody]  Class Classx)
        {
            var data = DataTeacher.FirstOrDefault(it => it.IdTeacher == id.ToString());


            var AA = data.Class.ToList();
            Console.WriteLine(data.Class.ToList());

            var item = new Class
            {
                IdClass = Classx.IdClass,
                NameClass = Classx.NameClass,
                students = Classx.students


            };

            AA.Add(item);
            Console.WriteLine(AA.ToList());


            var item2 = new Teacher
            {
                IdTeacher = id.ToString(),
                NameTeacher = data.NameTeacher,
                Class = AA.ToArray(),
                Username = data.Username,
                Password = data.Password


            };
            DataTeacher.Remove(data);
            DataTeacher.Add(item2);
            return item2;

        }
        //เพื่มนักเรียนในวิชา
        [HttpPut("{idT}/{id}")]
        public Teacher AddStudentToClass(string idT, string id, [FromBody] Student Studentx)
        {
            var data2 = DataTeacher.FirstOrDefault(it => it.IdTeacher == idT.ToString());

            var data = DataClass.FirstOrDefault(it => it.IdClass == id.ToString());

            var AA = data.students.ToList();
            Console.WriteLine(data.students.ToList());

            var item = new Student
            {
                IdStudent = Studentx.IdStudent,
                NameStudent = Studentx.NameStudent,
                Score = Studentx.Score,
                Username = Studentx.Username,
                Password = Studentx.Password,
            };

            AA.Add(item);
            Console.WriteLine(AA.ToList());


            var item3 = new Class
            {
                IdClass = id.ToString(),
                //NameClass = data.NameClass,
                students = AA.ToArray()

            };

            DataClass.Remove(data);
            DataClass.Add(item3);
            //return item3;


            var item2 = new Teacher
            {
                IdTeacher = id.ToString(),
                // NameTeacher = data2.NameTeacher,
                Class = DataClass.ToArray(),
                // Username = data2.Username,
                // Password = data2.Password


            };
            DataTeacher.Remove(data2);
            DataTeacher.Add(item2);
            return item2;
        }


        [HttpDelete("{id}")]
        public void DeleteTeacher(string id)
        {
            var delete = DataTeacher.FirstOrDefault(it => it.IdTeacher == id.ToString());
            DataTeacher.Remove(delete);
        }

        [HttpPut("{id}")]
        public Teacher EditTeacher(string id, [FromBody] Teacher Teacherx)
        {
            var _id = DataTeacher.FirstOrDefault(it => it.IdTeacher == id.ToString());
            var item = new Teacher
            {
                IdTeacher = id,
                NameTeacher = Teacherx.NameTeacher,
                Class = Teacherx.Class,
                Username = Teacherx.Username,
                Password = Teacherx.Password


            };
            DataTeacher.Remove(_id);
            DataTeacher.Add(item);
            return item;

        }

    }

}