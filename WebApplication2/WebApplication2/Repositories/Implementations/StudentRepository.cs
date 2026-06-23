using WebApplication2.Data.Entities;
using WebApplication2.Data;
using WebApplication2.Service;
using WebApplication2.Model;
using Microsoft.EntityFrameworkCore;
using WebApplication2.Repositories.Interfaces;

namespace WebApplication2.Repositories.Implementations
{
    public class StudentRepository : IStudentRepository
    {
        private readonly DataContext _context;

        public StudentRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<List<Student>> GetAllAsync()
        {
            return await _context.Students.ToListAsync();
        }

        public async Task<Student> GetByIdAsync(long id)
        {
            return await _context.Students.FindAsync(id);
        }

        public async Task AddAsync(StudentModel sdm)
        {
            Student sd = new Student();
            sd.UserName = sdm.UserName;
            sd.EmailId = sdm.EmailId;
            sd.MobileNumber = sdm.MobileNumber; 
            sd.Salary = sdm.Salary;
            _context.Students.Add(sd);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(Student student)
        {
            _context.Students.Update(student);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(long id)
        {
            var student = await _context.Students.FindAsync(id);
            if (student != null)
            {
                _context.Students.Remove(student);
                await _context.SaveChangesAsync();
            }
        }
    }
}
