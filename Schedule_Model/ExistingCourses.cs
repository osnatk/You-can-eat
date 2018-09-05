namespace Schedule_Model
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class ExistingCourses
    {
        [Column(TypeName = "numeric")]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public decimal Id { get; set; }

        [Column(TypeName = "smalldatetime")]
        public DateTime? Date { get; set; }

        [Column(TypeName = "numeric")]
        public decimal? OrderNumber { get; set; }

        [Column(TypeName = "numeric")]
        public decimal? CourseId { get; set; }

        [Column(TypeName = "numeric")]
        public decimal? GroupId { get; set; }

        [StringLength(50)]
        public string Comments { get; set; }
        public virtual Course Course { get; set; }

        public virtual Group Group { get; set; }
    }
}
