using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http.HttpResults;
using System.Xml.Linq;

namespace WebApplication2.Data.Entities
{
    [Table("MENU")]
    public class Menu
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("ID")]
        public Int64 Id { get; set; }

        [Column("NAME")]
        public String Name { get; set; }

        [Column("COMPONENT")]
        public String Component { get; set; }

        [Column("PARENT_ID")]
        public Int32? ParentId { get; set; }

        [Column("Menu_Type")]
        public Int16? MenuType { get; set; }

        [Column("URL")]
        public String Url { get; set; }
        [Column("PAGEPATH")]
        public String PagePath { get; set; }

        [Column("ICON_CSS")]
        public String IconCss { get; set; }
        

        [Column("OrderBy")]
        public int Order { get; set; }

        [Column("IS_ACTIVE")]
        public Int16? IsActive { get; set; }

      
    }
}
