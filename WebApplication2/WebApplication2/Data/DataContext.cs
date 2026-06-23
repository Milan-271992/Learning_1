using Microsoft.EntityFrameworkCore;
using WebApplication2.Data.Entities;

namespace WebApplication2.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }
        public DbSet<Student> Students { get; set; }
        public DbSet<Menu> Menus { get; set; }
        public DbSet<MainMenu> MainMenus { get; set; }
    }
}
