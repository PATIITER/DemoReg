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
        public static List<Class> DataClass = new List<Class>
        {
            new Class { IdClass = "001", NameClass = " Business Administration"},
            new Class { IdClass = "002", NameClass = "Computer Engineering" },
            new Class { IdClass = "003", NameClass = "International Business"  },

        };
        public static List<Student> DataStudent = new List<Student>
        {
            new Student { IdStudent = "001", NameStudent = "abc", Username = "admin1", Password = "12356",score = 55,MidScore = 20,FinalScore = 20 ,TotalScore = 100},
            new Student { IdStudent = "002", NameStudent = "abc", Username = "admin2", Password = "12356",score = 55,MidScore = 20 ,FinalScore = 20,TotalScore = 100},
            new Student{ IdStudent = "003", NameStudent = "abc",  Username = "admin3", Password = "12356",score = 55,MidScore = 20 ,FinalScore = 20,TotalScore = 100}
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
        public ActionResult<IEnumerable<openCourse>> GetOpenCourseAll()
        {
            return DataopenCourse.ToList();
        }

        [HttpGet]
        public ActionResult<IEnumerable<Class>> GetClassAll()
        {
            return DataClass.ToList();
        }

        [HttpGet]
        public ActionResult<IEnumerable<Student>> GetStudentAll()
        {
            return DataStudent.ToList();
        }
        [HttpGet]
        public ActionResult<IEnumerable<Teacher>> GetTeacherAll()
        {
            return DataTeacher.ToList();
        }


        [HttpGet("{id}")]
        public ActionResult<openCourse> GetOpenCourseById(string id)
        {
            return DataopenCourse.FirstOrDefault(it => it.IdCourse == id.ToString());
        }

        [HttpGet("{id}")]
        public ActionResult<Teacher> GetTeacherId(string id)
        {
            return DataTeacher.FirstOrDefault(it => it.Username == id.ToString());

        }
        [HttpGet("{id}")]
        public ActionResult<Student> GetStudentId(string id)
        {
           

            return DataStudent.FirstOrDefault(it => it.Username == id.ToString());

        }
         
        

        [HttpPost]
        public openCourse AddCourse([FromBody] openCourse openCoursex)
        {
            var id = Guid.NewGuid().ToString();
            var item = new openCourse
            {

                IdCourse = openCoursex.IdCourse,
                NameCourse = openCoursex.NameCourse,
                Teacher = openCoursex.Teacher,
                Students = openCoursex.Students


            };

            DataopenCourse.Add(item);
            return item;
        }
        
        [HttpPost]
        public Teacher AddNewTeacherinopenCourse([FromBody] Teacher Teacherx)
        {
            var item = new Teacher
            {
                IdTeacher = Teacherx.IdTeacher,
                NameTeacher = Teacherx.NameTeacher,
                
                Username = Teacherx.Username,
                Password = Teacherx.Password

            };

            DataTeacher.Add(item);
            return item;
        }

        [HttpPost]
        public Class AddClass([FromBody] Class Classx)
        {
            var id = Guid.NewGuid().ToString();
            var item = new Class
            {
                IdClass = Classx.IdClass,
                NameClass = Classx.NameClass


            };

            DataClass.Add(item);
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

        [HttpPut("{id}")]
        public openCourse AddTeacherToOpenCourse(string id, [FromBody]  Teacher Teacherx)
        {
            var data = DataopenCourse.FirstOrDefault(it => it.IdCourse == id.ToString());


            var AA = data.Teacher.ToList();
            Console.WriteLine(data.Teacher.ToList());

            var item = new Teacher
            {
                IdTeacher = Teacherx.IdTeacher,
                NameTeacher = Teacherx.NameTeacher,
                Username = Teacherx.Username,
                Password = Teacherx.Password
            };
            //AA.Remove(item);
            AA.Add(item);
            Console.WriteLine(AA.ToList());


            var item2 = new openCourse
            {

                IdCourse = id.ToString(),
                NameCourse = data.NameCourse,
                Teacher = AA.ToArray(), 
                Students = data.Students
            };
             DataopenCourse.Remove(data);
            DataopenCourse.Add(item2);
            return item2;

        }

        [HttpPut("{id}")]
        public openCourse AddStudentToOpenCourse(string id, [FromBody]  Student Studentx)
        {
            var data = DataopenCourse.FirstOrDefault(it => it.IdCourse == id.ToString());


            var AA = data.Students.ToList();
            Console.WriteLine(data.Students.ToList());

            var item = new Student
            {
                IdStudent = Studentx.IdStudent,
                NameStudent = Studentx.NameStudent,
                Username = Studentx.Username,
                Password = Studentx.Password
            };

            AA.Add(item);
            Console.WriteLine(AA.ToList());


            var item2 = new openCourse
            {

                IdCourse = id.ToString(),
                NameCourse = data.NameCourse,
                Teacher = data.Teacher,
                Students = AA.ToArray()
            };
            DataopenCourse.Remove(data);
            DataopenCourse.Add(item2);
            return item2;

        }

        [HttpPut("{id}/{ids}")]
        public openCourse AddScoreToStudent(string id, string ids, [FromBody]  Student Studentx)
        {

            var data = DataopenCourse.FirstOrDefault(it => it.IdCourse == id.ToString());
            var AA = data.Students.ToList();
            var data2 = AA.FirstOrDefault(it => it.IdStudent == ids.ToString());

            Console.WriteLine(data.Students.ToList());

            var item = new Student
            {
                IdStudent = ids.ToString(),
                NameStudent = data2.NameStudent,
                Username = data2.Username,
                Password = data2.Password,
                score = Studentx.score,
                MidScore = Studentx.MidScore,
                FinalScore = Studentx.FinalScore,
                TotalScore = Studentx.TotalScore

            };
            AA.Remove(data2);
            AA.Add(item);
            Console.WriteLine(AA.ToList());


            var item2 = new openCourse
            {

                IdCourse = id.ToString(),
                NameCourse = data.NameCourse,
                Teacher = data.Teacher,
                Students = AA.ToArray()
            };

            DataopenCourse.Remove(data);
            DataopenCourse.Add(item2);
            return item2;


        }

        [HttpDelete("{id}")]
        public void DeleteClass(string id)
        {
            var delete = DataopenCourse.FirstOrDefault(it => it.IdCourse == id.ToString());
            DataopenCourse.Remove(delete);
        }


    }

}