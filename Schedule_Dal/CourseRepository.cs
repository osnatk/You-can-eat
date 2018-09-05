using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Schedule_Model;
namespace Schedule_Dal
{
    public class CourseRepository : ScheduleRepository<Course>
    {
        public CourseRepository(ScheduleDB context) : base(context)
        {

        }
    }
}
