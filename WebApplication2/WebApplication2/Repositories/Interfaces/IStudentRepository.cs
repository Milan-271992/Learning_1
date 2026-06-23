using WebApplication2.Data.Entities;
using WebApplication2.Model;

namespace WebApplication2.Repositories.Interfaces
{
    public interface IStudentRepository
    {
        Task<List<Student>> GetAllAsync();
        Task<Student> GetByIdAsync(long id);
        Task AddAsync(StudentModel sdm);
        Task UpdateAsync(Student student);
        Task DeleteAsync(long id);
    }
}
