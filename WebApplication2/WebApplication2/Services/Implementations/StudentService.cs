using Microsoft.EntityFrameworkCore;
using WebApplication2.Data;
using WebApplication2.Data.Entities;
using WebApplication2.Model;
using WebApplication2.Repositories.Interfaces;
using WebApplication2.Service.Interfaces;


namespace WebApplication2.Services.Implementations
{
    public class StudentService : IStudentService
    {
        private readonly DataContext _context;
        private readonly IStudentRepository _repository;
        public StudentService(DataContext context, IStudentRepository repository)
        {
            _context = context;
            _repository = repository;
        }
        public async Task<List<Student>> GetAllStudentsAsync()
        {
            return await _repository.GetAllAsync();
        }

        public async Task<Student> GetStudentByIdAsync(long id)
        {
            return await _repository.GetByIdAsync(id);
        }

        public async Task AddStudentAsync(StudentModel sdm)
        {
            await _repository.AddAsync(sdm);
        }

        public async Task UpdateStudentAsync(Student student)
        {
            await _repository.UpdateAsync(student);
        }

        public async Task DeleteStudentAsync(long id)
        {
            await _repository.DeleteAsync(id);
        }
    }
}
