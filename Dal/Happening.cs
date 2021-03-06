//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Dal
{
    using System;
    using System.Collections.Generic;
    
    public partial class Happening
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Happening()
        {
            this.Seat = new HashSet<Seat>();
        }
    
        public decimal happeningId { get; set; }
        public Nullable<decimal> managerId { get; set; }
        public string happeningName { get; set; }
        public string happeningAddress { get; set; }
        public string happeningDescription { get; set; }
        public Nullable<System.DateTime> happeningDate { get; set; }
        public Nullable<System.DateTime> happeningStartDate { get; set; }
        public Nullable<System.DateTime> happeningEndDate { get; set; }
        public Nullable<decimal> happeningTypeId { get; set; }
        public string happeningPriceType { get; set; }
        public Nullable<int> happeningPrice { get; set; }
        public Nullable<int> happeningNumRows { get; set; }
        public Nullable<int> happeningNumColumns { get; set; }
        public string happeningPassword { get; set; }
    
        public virtual TypePlaceHappening TypePlaceHappening { get; set; }
        public virtual Manager Manager { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Seat> Seat { get; set; }
    }
}
