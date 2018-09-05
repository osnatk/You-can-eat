using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Bll;
using Dal;

namespace ScheduleMe.Controllers
{
    public class managerController : ApiController
    {
        ManagerBI m = new ManagerBI();

        [Route("api/manager/saveManager")]
        [HttpPost]
        public string saveManager(Manager manager)
        {
            //return Ok(m.SaveManager(manager)); 
           return "the manager is saved";
        }
    }
}
