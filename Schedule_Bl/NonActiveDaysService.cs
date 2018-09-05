using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Schedule_Dal;
using Schedule_Model;
using Schedule_Dal;
namespace Schedule_Bl
{
  public  class NonActiveDaysService
    {
        private NonActiveDaysRepository repository;
        private ScheduleDB context;
        public NonActiveDaysService()
        {
            context = new ScheduleDB();
            repository = new NonActiveDaysRepository(context);
        }
        public void Insert(NonActiveDays n)
        {
            repository.Insert(n);
        }
        public NonActiveDays GetByID(int id)
        {
            return repository.GetByID(id);
        }
        public ICollection<NonActiveDays> GetAll()
        {
            return repository.GetAll();
        }

        public void Update(NonActiveDays n)
        {
            repository.Update(n);
        }
        public void DeleteById(int id)
        {
            repository.Delete(id);
        }
        public void Delete(NonActiveDays n)
        {
            repository.Delete(n);
        }


    }
}
