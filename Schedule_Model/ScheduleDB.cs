namespace Schedule_Model
{
    using Nager.Date;
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;
    using System.Collections.Generic;

    public partial class ScheduleDB : DbContext
    {
        public ScheduleDB()
            : base("name=ScheduleModel")
        {
        }

        public virtual DbSet<Course> Course { get; set; }
        public virtual DbSet<ExistingCourses> ExistingCourses { get; set; }
        public virtual DbSet<Group> Group { get; set; }
        public virtual DbSet<NonActiveDays> NonactiveDays { get; set; }
        public virtual DbSet<sysdiagrams> sysdiagrams { get; set; }

        private DbSet<NonActiveDays> dbSets;
        private ScheduleDB contexts;


        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {           
            modelBuilder.Entity<Course>()
                .Property(e => e.Id)
                .HasPrecision(18, 0);

            //modelBuilder.Entity<Course>()
            //    .HasMany(e => e.ExistingCourses)
            //    .WithOptional(e => e.Course)
            //    .WillCascadeOnDelete();

            modelBuilder.Entity<ExistingCourses>()
                .Property(e => e.Id)
                .HasPrecision(18, 0);

            modelBuilder.Entity<ExistingCourses>()
                .Property(e => e.OrderNumber)
                .HasPrecision(18, 0);

            modelBuilder.Entity<ExistingCourses>()
                .Property(e => e.CourseId)
                .HasPrecision(18, 0);

            modelBuilder.Entity<ExistingCourses>()
                .Property(e => e.GroupId)
                .HasPrecision(18, 0);

            modelBuilder.Entity<Group>()
                .Property(e => e.Id)
                .HasPrecision(18, 0);


        }

        private void fillNonVactionDaysFromApiJustIfNotExistAndForNextYears()
        {
            this.contexts = new ScheduleDB();
            this.dbSets = this.contexts.Set<NonActiveDays>();
            List<NonActiveDays> getNoActiveDays = new List<NonActiveDays>();
            getNoActiveDays = dbSets.AsEnumerable<NonActiveDays>().ToList();
            if (getNoActiveDays.Max(m => m.Date) < new DateTime(2018, 05, 10))
            {
                var publicHolidays = DateSystem.GetPublicHoliday(CountryCode.IS, new DateTime(2018, 05, 11, 0, 0, 0), new DateTime(2018, 05, 20, 0, 0, 0));
                for (int i = 0, orderNumber = 1; i < publicHolidays.Count() && orderNumber <= 17; orderNumber++)
                {
                    if (getNoActiveDays.FindIndex(day => day.Date < publicHolidays.ElementAt(i).Date) >= 0)
                    {
                        NonActiveDays day = new NonActiveDays();
                        day.Date = publicHolidays.ElementAt(i).Date;
                        day.OrderNumber = orderNumber;
                        day.Reason = "���� ������ ������";
                        dbSets.Add(day);
                        contexts.SaveChanges();                       
                    }
                    if (orderNumber == 17)
                    {
                        orderNumber = 0;
                        i++;
                    }
                }

            }
        }
        private void fillNonVactionDaysFromApi(DateTime startDate, DateTime endDate)
        {
            this.contexts = new ScheduleDB();
            this.dbSets = this.contexts.Set<NonActiveDays>();
            var publicHolidays = DateSystem.GetPublicHoliday(CountryCode.IS, startDate, endDate);
            for (int i = 0, orderNumber = 1; i < publicHolidays.Count() && orderNumber <= 17; orderNumber++)
            {
                    NonActiveDays day = new NonActiveDays();
                    day.Date = publicHolidays.ElementAt(i).Date;
                    day.OrderNumber = orderNumber;
                    day.Reason = "���� ������ ������";
                    dbSets.Add(day);
                    contexts.SaveChanges();                  
                if (orderNumber == 17)
                {
                    orderNumber = 0;
                    i++;
                }
            }
        }

    }

}
