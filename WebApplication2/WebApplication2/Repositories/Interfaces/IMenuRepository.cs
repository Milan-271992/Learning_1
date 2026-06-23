using WebApplication2.Data.Entities;
using WebApplication2.Model;

namespace WebApplication2.Repositories.Interfaces
{
    public interface IMenuRepository
    {
        Task<List<Menu>> GetAllAsync();
        Task AddMenuAsync(MenuModel mdm);
        Task<Menu> GetByIdAsync(long id);
        Task UpdateAsync(Menu menu);
        Task DeleteAsync(long id);
        Task<List<MainMenu>> GetMainMenuAsync();
    }
}
