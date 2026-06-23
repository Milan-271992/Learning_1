using Microsoft.AspNetCore.Mvc;
using WebApplication2.Data;
using WebApplication2.Service.Interfaces;
using WebApplication2.Model;
using WebApplication2.Data.Entities;
using WebApplication2.Services.Implementations;

namespace WebApplication2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MenuController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly IMenuService _menuService;

        public MenuController(DataContext context, IMenuService menuService)
        {
            _context = context;
            _menuService = menuService;
        }
        
        [HttpGet]
        [Route("GetAllMenus")]
        public async Task<IActionResult> GetAllMenus()
        {
            var menus = await _menuService.GetAllMenusAsync();
            return Ok(new
            {
                IsSuccess = true,
                Message = "Menu data fetched successfully.",
                Data = menus
            });
        }
        [HttpPost]
        [Route("AddMenu")]
        public async Task<IActionResult> AddMenu(MenuModel mdm)
        {
            await _menuService.AddMenuAsync(mdm);
            return Ok("Menu added successfully");
        }
        [HttpGet]
        [Route("GetMenuById")]
        public async Task<IActionResult> GetMenuById(Int64 id)
        {
            var menus = await _menuService.GetMenuByIdAsync(id);
            return Ok(new
            {
                IsSuccess = true,
                Message = "Menu data fetched successfully.",
                Data = menus
            });
        }
        [HttpPost]
        [Route("UpdateMenu")]
        public async Task<IActionResult> UpdateMenu(Menu menu)
        {
            await _menuService.UpdateMenuAsync(menu);
            return Ok("Menu update successfully");
        }
        [HttpPost]
        [Route("DeleteMenu")]
        public async Task<IActionResult> DeleteMenu(Int64 id)
        {
            await _menuService.DeleteMenuAsync(id);
            return Ok("Menu delete successfully");
        }

        [HttpGet]
        [Route("GetMainMenus")]
        public async Task<IActionResult> GetMainMenus()
        {
            var menus = await _menuService.GetMainMenuAsync();
            return Ok(new
            {
                IsSuccess = true,
                Message = "Main Menu data fetched successfully.",
                Data = menus
            });
        }
    }
}
