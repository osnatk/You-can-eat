using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Schedule_Dal;
using Schedule_Model;
namespace Schedule_Bl
{
  public  class GroupService
    {
        private GroupRepository repository;
        private ScheduleDB context;
        public GroupService()
        {
            context = new ScheduleDB();
            repository = new GroupRepository(context);
        }
        public void Insert(Group g)
        {
            repository.Insert(g);
        }
        public Group GetByID(int id)
        {
            return repository.GetByID(id);
        }
        public ICollection<Group> GetAll()
        {
            return repository.GetAll();
        }

        public void Update(Group g)
        {
            repository.Update(g);
        }
        public void DeleteById(int id)
        {
            repository.Delete(id);
        }
        public void Delete(Group g)
        {
            repository.Delete(g);
        }
    }
}
