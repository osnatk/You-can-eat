using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dal;

namespace Bll
{
    public class Manager
    {
        public EditPlacesEntities db = new EditPlacesEntities();
        public Manager()
        {
        }

        public void SaveManager(Manager manager)
        {
            //db.Manager.Attach(manager);

            // db.Manager.Add( manager as Dal.Manager);
        }





    }
}
