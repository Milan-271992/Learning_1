using System.ComponentModel.DataAnnotations;
using System.Runtime.Serialization;
using WebApplication2.Data.Entities;

namespace WebApplication2.Model
{
  
    public class StudentModel
    {
        public long Id { get; set; }

        [Required(ErrorMessage = "User Name is required")]
        [StringLength(100, ErrorMessage = "Username can't exceed 100 characters")]
        public string UserName { get; set; }

        [Required(ErrorMessage = "Mobile Number is required")]
        [Range(1000000000, 9999999999, ErrorMessage = "Mobile number must be 10 digits")]
        public long MobileNumber { get; set; }

        [Required(ErrorMessage = "E-mail is required"), Display(Name = "E-mail")]
        [EmailAddress(ErrorMessage = "Invalid Email Address.")]
        [DataType(DataType.EmailAddress)]
        //[RegularExpression(@"^[\w\.-]+@[\w\.-]+\.com$", ErrorMessage = "Invalid Email Address.")]
        public string EmailId { get; set; }

        [Range(0, long.MaxValue, ErrorMessage = "Salary must be positive")]
        public long? Salary { get; set; }

    }
  
    public class GetStudentListById
    {
        public Int64 Id { get; set; }
    }
    
    public class StudentList
    {
        public bool IsSuccess { get; set; } = true;
        public string Message { get; set; } = "Data loaded successfully";
        public List<Student> readInformation { get; set; }
    }

}
