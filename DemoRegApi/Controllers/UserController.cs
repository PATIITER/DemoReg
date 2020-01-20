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

    public class UserController : ControllerBase
    {
        public static List<User> DataUser = new List<User>
        {
            new User { IdUser = "1", NameUser = "admin1" , Username =  "1234", Password = "1234" },
            new User { IdUser = "1", NameUser = "admin1" , Username =  "1234", Password = "1234" },
            new User { IdUser = "1", NameUser = "admin1" , Username =  "1234", Password = "1234" },

        };

        [HttpGet]
        public ActionResult<IEnumerable<User>> GetUserAll()
        {
            return DataUser.ToList();
        }

        [HttpGet("{id}")]
        public ActionResult<User> GetUserById(string id)
        {
            return DataUser.FirstOrDefault(it => it.IdUser == id.ToString());
        }

        [HttpPost]
        public User AddUser([FromBody] User Userx)
        {
            var id = Guid.NewGuid().ToString();
            var item = new User
            {
                IdUser = id,
                NameUser = Userx.NameUser,
                Username = Userx.Username,
                Password = Userx.Password
                
            };

            DataUser.Add(item);
            return item;
        }

        [HttpPut("{id}")]
        public User EditUser(string id, [FromBody] User Userx)
        {
            var _id = DataUser.FirstOrDefault(it => it.IdUser == id.ToString());
            var item = new User
            {
                IdUser = id,
                NameUser = Userx.NameUser,
                Username = Userx.Username,
                Password = Userx.Password
                
            };
            DataUser.Remove(_id);
            DataUser.Add(item);
            return item;

        }

        [HttpDelete("{id}")]
        public void DeleteUser(string id)
        {
            var delete = DataUser.FirstOrDefault(it => it.IdUser == id.ToString());
            DataUser.Remove(delete);
        }


    }

}