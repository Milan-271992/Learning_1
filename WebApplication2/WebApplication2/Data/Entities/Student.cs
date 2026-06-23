using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace WebApplication2.Data.Entities
{
    [Table("STUDENTS")]
    public class Student
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        [Column("ID"), Required]
        public Int64 Id { get; set; }
        [Column("USERNAME")]
        public String UserName { get; set; }
        [Column("MobileNumber")]
        public Int64? MobileNumber { get; set; }
        [Column("EmailId")]
        public String EmailId { get; set; }
        [Column("Salary")]
        public Int64? Salary { get; set; }

    }
}
