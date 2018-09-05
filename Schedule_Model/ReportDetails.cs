
namespace Schedule_Model
{

    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

  public class ReportDetails
    {
        public int Id { get; set; }
        public DateTime SrartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Name { get; set; }
        public string Teacher { get; set; }
        public string Group { get; set; }
        public int NumHours { get; set; }
    }
}    
     