using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
// using Microsoft.EntityFrameworkCore;
namespace MovieApp.Models{
    public class Detail{
        [Key]
        public int DetailId{get;set;}
        [Required]
        [MaxLength(30)]
        public string ?Actor{get;set;}
        [ForeignKey("Movie")]
        public int MovieId{get;set;}
        public string ?Gender{get;set;}
        public string ?Role{get;set;}
        public Movie ?Movie{get;set;}
    }
}