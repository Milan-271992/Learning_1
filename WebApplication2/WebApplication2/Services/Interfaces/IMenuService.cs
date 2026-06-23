using WebApplication2.Data.Entities;
using WebApplication2.Model;

namespace WebApplication2.Service.Interfaces
{
    public interface IMenuService
    {
        Task<List<Menu>> GetAllMenusAsync();
        Task AddMenuAsync(MenuModel mdm);
        Task<Menu> GetMenuByIdAsync(long id);
        Task UpdateMenuAsync(Menu menu);
        Task DeleteMenuAsync(long id);

        Task<List<MainMenu>> GetMainMenuAsync();
    }
}
