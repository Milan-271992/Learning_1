using WebApplication2.Data.Entities;
using WebApplication2.Data;
using WebApplication2.Service;
using WebApplication2.Model;
using Microsoft.EntityFrameworkCore;
using WebApplication2.Repositories.Interfaces;

namespace WebApplication2.Repositories.Implementations
{
    public class MenuRepository : IMenuRepository
    {
        private readonly DataContext _context;

        public MenuRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<List<Menu>> GetAllAsync()
        {
            return await _context.Menus.OrderBy(m=>m.Order).ToListAsync();
        }

        public async Task AddMenuAsync(MenuModel mdm)
        {
            Menu md = new Menu();
            md.Name = mdm.Name;
            md.Component = mdm.Component;
            md.ParentId = mdm.ParentId;
            md.MenuType = mdm.MenuType;
            md.Url = mdm.Url;
            md.PagePath = mdm.PagePath;
            md.IconCss = mdm.IconCss;
            md.Order = mdm.Order;
            md.IsActive = mdm.IsActive;
            _context.Menus.Add(md);
            await _context.SaveChangesAsync();
        }
        public async Task<Menu> GetByIdAsync(long id)
        {
            return await _context.Menus.FindAsync(id);
        }

        public async Task UpdateAsync(Menu menu)
        {
            _context.Menus.Update(menu);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(long id)
        {
            var menu = await _context.Menus.FindAsync(id);
            if (menu != null)
            {
                _context.Menus.Remove(menu);
                await _context.SaveChangesAsync();
            }
        }
        public async Task<List<MainMenu>> GetMainMenuAsync()
        {
            return await _context.MainMenus.OrderBy(m => m.Order).ToListAsync();
        }

    }
}
