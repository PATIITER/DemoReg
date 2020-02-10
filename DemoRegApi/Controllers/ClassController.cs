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

    public class ClassController : ControllerBase
    {
        public static List<Student> DataStudent = new List<Student>
        {
            new Student { IdStudent = "001", NameStudent = "abc",  Username = "admin1", Password = "12356" },
            new Student { IdStudent = "002", NameStudent = "abc",  Username = "admin1", Password = "12356" },
            new Student{ IdStudent = "003", NameStudent = "abc",  Username = "admin1", Password = "12356" }
        };
        public static List<Class> DataClass = new List<Class>
        {
            new Class { IdClass = "001", NameClass = " Business Administration",students = DataStudent.ToArray() },
            new Class { IdClass = "002", NameClass = "Computer Engineering",students = DataStudent.ToArray()  },
            new Class { IdClass = "003", NameClass = "International Business" ,students = DataStudent.ToArray() },

        };

        [HttpGet]
        public ActionResult<IEnumerable<Class>> GetClassAll()
        {
            return DataClass.ToList();
        }

        [HttpGet("{id}")]
        public ActionResult<Class> GetUserById(string id)
        {
            return DataClass.FirstOrDefault(it => it.IdClass == id.ToString());
        }

        [HttpPost]
        public Class AddUser([FromBody] Class Classx)
        {
            var id = Guid.NewGuid().ToString();
            var item = new Class
            {
                IdClass = id,
                NameClass = Classx.NameClass
               
                
            };

            DataClass.Add(item);
            return item;
        }

        [HttpPut("{id}")]
        public Class EditUser(string id, [FromBody] Class Classx)
        {
            var _id = DataClass.FirstOrDefault(it => it.IdClass == id.ToString());
            var item = new Class
            {
                IdClass = id,
                NameClass = Classx.NameClass
               
                
            };
            DataClass.Remove(_id);
            DataClass.Add(item);
            return item;

        }

        [HttpDelete("{id}")]
        public void DeleteClass(string id)
        {
            var delete = DataClass.FirstOrDefault(it => it.IdClass == id.ToString());
            DataClass.Remove(delete);
        }


    }

}