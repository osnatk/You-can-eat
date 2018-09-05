
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dal;

namespace Bll
{
   public class TypePlaceHappenigBl
    { 
        EditPlacesEntities db = new EditPlacesEntities();
        public ICollection<TypePlaceHappening> getAllTypes()
        {
            return db.TypePlaceHappening.ToList();
        }
    }
}
