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
    public class typePlaceHappeningController : ApiController
    {
        TypePlaceHappenigBl typePlaceHappenigBl = new TypePlaceHappenigBl();
        [Route("api/typePlaceHappening/getAllTypePlaces/")]
        [HttpGet]
        public ICollection<TypePlaceHappening> getAllTypePlaces()
        {
            return typePlaceHappenigBl.getAllTypes();
        }
    }
}
