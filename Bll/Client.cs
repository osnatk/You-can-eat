using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dal;

namespace Bll
{
    public class Client
    {
      public  EditPlacesEntities db=new EditPlacesEntities();
        public Client()
        {
        }
      
        public Happening IsexistHappening(string name, string password)
        {
         return db.Happening.Where(h => h.happeningName == name && h.happeningPassword == password).SingleOrDefault();
        }





    }
}
