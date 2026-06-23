using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Runtime.Serialization;
using WebApplication2.Data.Entities;

namespace WebApplication2.Model
{
  
    public class MenuModel
    {
        public Int32 Id { get; set; }
        public String Name { get; set; }
        public String Component { get; set; }
        public Int32? ParentId { get; set; }
        public Int16 MenuType { get; set; }
        public String Url { get; set; }
        public String PagePath { get; set; }
        public String IconCss { get; set; }
        public int Order { get; set; }
        public Int16 IsActive { get; set; }
    }
  
    public class GetMenuListById
    {
        public Int64 Id { get; set; }
    }
    
    public class MenuList
    {
        public bool IsSuccess { get; set; } = true;
        public string Message { get; set; } = "Data loaded successfully";
        public List<Menu> menuList { get; set; }
    }

}
