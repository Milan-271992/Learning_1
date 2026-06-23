using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http.HttpResults;
using System.Xml.Linq;

namespace WebApplication2.Data.Entities
{
    [Table("MAINMENU")]
    public class MainMenu
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("ID")]
        public Int64 Id { get; set; }

        [Column("NAME")]
        public String Name { get; set; }

        [Column("OrderBy")]
        public int Order { get; set; }

        [Column("IS_ACTIVE")]
        public Int16? IsActive { get; set; }

        [Column("CREATED_ON")]
        public DateTime? CreatedOn { get; set; }
        [Column("UPDATED_ON")]
        public DateTime? UpdatedOn { get; set; }
    }
}
