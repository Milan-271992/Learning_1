using WebApplication2.Data.Entities;
using WebApplication2.Model;

namespace WebApplication2.Service.Interfaces
{
    public interface IStudentService
    {
        Task<List<Student>> GetAllStudentsAsync();
        Task<Student> GetStudentByIdAsync(long id);
        Task AddStudentAsync(StudentModel sdm);
        Task UpdateStudentAsync(Student student);
        Task DeleteStudentAsync(long id);
    }
}
