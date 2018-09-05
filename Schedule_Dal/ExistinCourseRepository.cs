using Schedule_Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Schedule_Dal
{
public class ExistinCourseRepository : ScheduleRepository<ExistingCourses>
    {
     
        public ExistinCourseRepository(ScheduleDB context) : base(context)
        {
            
        }
    }
}
