using Microsoft.EntityFrameworkCore;
using WebApplication2.Data;
using WebApplication2.Data.Entities;
using WebApplication2.Model;
using WebApplication2.Repositories.Interfaces;
using WebApplication2.Service.Interfaces;


namespace WebApplication2.Services.Implementations
{
    public class MenuService : IMenuService
    {
        private readonly DataContext _context;
        private readonly IMenuRepository _repository;
        public MenuService(DataContext context, IMenuRepository repository)
        {
            _context = context;
            _repository = repository;
        }
        public async Task<List<Menu>> GetAllMenusAsync()
        {
            return await _repository.GetAllAsync();
        }
        public async Task AddMenuAsync(MenuModel mdm)
        {
            await _repository.AddMenuAsync(mdm);
        }
        public async Task<Menu> GetMenuByIdAsync(long id)
        {
            return await _repository.GetByIdAsync(id);
        }
        public async Task UpdateMenuAsync(Menu menu)
        {
            await _repository.UpdateAsync(menu);
        }

        public async Task DeleteMenuAsync(long id)
        {
            await _repository.DeleteAsync(id);
        }
        public async Task<List<MainMenu>> GetMainMenuAsync()
        {
            return await _repository.GetMainMenuAsync();
        }
    }
}
