using Microsoft.AspNetCore.Mvc;
using WebApplication2.Service;
using WebApplication2.Data;
using WebApplication2.Data.Entities;
using WebApplication2.Service.Interfaces;
using WebApplication2.Model;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApplication2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentDetailsController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly IStudentService _studentService;

        public StudentDetailsController(DataContext context, IStudentService studentService)
        {
            _context = context;
            _studentService = studentService;
        }
        
        [HttpGet]
        [Route("GetAllStudents")]
        public async Task<IActionResult> GetAllStudents()
        {
            var students = await _studentService.GetAllStudentsAsync();
            return Ok(new
            {
                IsSuccess = true,
                Message = "Student data fetched successfully.",
                Data = students
            });
        }
        [HttpPost]
        [Route("AddStudent")]
        public async Task<IActionResult> AddStudent(StudentModel sdm)
        {
            await _studentService.AddStudentAsync(sdm);
            return Ok("Student added successfully");
        }
        [HttpGet]
        [Route("GetStudentById")]
        public async Task<IActionResult> GetStudentById(Int64 id)
        {
            var students = await _studentService.GetStudentByIdAsync(id);
            return Ok(new
            {
                IsSuccess = true,
                Message = "Student data fetched successfully.",
                Data = students
            });
        }
        [HttpPost]
        [Route("UpdateStudent")]
        public async Task<IActionResult> UpdateStudent(Student student)
        {
            await _studentService.UpdateStudentAsync(student);
            return Ok("Student update successfully");
        }
        [HttpPost]
        [Route("DeleteStudent")]
        public async Task<IActionResult> DeleteStudent(Int64 id)
        {
            await _studentService.DeleteStudentAsync(id);
            return Ok("Student delete successfully");
        }
    }
}
