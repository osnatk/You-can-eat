using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dal;
using System.Windows;
namespace Bll
{
    public class ManagerBI
    {
        public EditPlacesEntities db = new EditPlacesEntities();
        public ManagerBI()
        {
        }

        public void SaveManager(Manager m)
        {
            db.Manager.Add(m);
            db.SaveChanges();
        }





    }
}
