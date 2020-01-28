namespace DemoRegApi.Models{

    public class openCourse{
        public string IdCourse { get; set; }
        public string NameCourse { get; set; } 
        public Teacher[] Teacher { get; set;}
        public Student[] Students { get; set;}
        
      


    }
}