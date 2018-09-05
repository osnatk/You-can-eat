using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Schedule_Model;
namespace Schedule_Dal
{
  public  class NonActiveDaysRepository : ScheduleRepository<NonActiveDays>
    {

        public NonActiveDaysRepository(ScheduleDB context) : base(context)
        {

        }
    }
}
