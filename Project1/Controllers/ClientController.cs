using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Bll;


namespace ScheduleMe.Controllers
{
    public class ClientController : ApiController
    {
        Client client = new Client();


        [Route("api/Client/existHappening/{nameHappaning}/{passwordHappaning}")]
        [HttpGet]
        public IHttpActionResult existHappening(string nameHappaning, string passwordHappaning)
        {
            return Ok(client.IsexistHappening(nameHappaning, passwordHappaning));
        }
    }
}
