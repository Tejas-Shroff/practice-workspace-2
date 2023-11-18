
// //Controller Detail Controller

// using MovieApp.Models;
// // using Microsoft.EntityFrameworkCore;
// using Microsoft.AspNetCore.Mvc;
// using System;
// // namespace MovieApp.Controllers{
// //     [ApiController]
// //     [Route("/[controller]")]
// //     public class DetailController:ControllerBase{
// //         MovieContext context=new MovieContext();
// //         [HttpGet]
// //         [Route("ListDetails")]
// //         public  IActionResult Get(){
// //             var data=from d in context.Details select new{
// //                 d.Movie.Name,
// //                 d.Actor,
// //                 d.Role
// //             };
// //             return Ok(data);
// //         }
// //         [Route("MovieDetails/{id}")]
// //         public IActionResult Get(int id)
// //         {
// //             var data=from d in context.Details where d.MovieId==d.Movie.Id select new{
// //                 d.Actor,
// //                 d.Role,
// //                 d.Movie.Name,
// //                 d.Movie.YearRelease
 
 
// //             };
// //             return Ok(data.ToList());
// //         }
// //         // [HttpGet]
// //         // [Route("ListDetails")]
// //         // public  IActionResult Get(){
// //         //     var data=from m in context.Details select m;
// //         //     return Ok(data);
// //         // }
// //         [HttpPost]
// //         [Route("AddDetails")]
// //         public IActionResult Post(Detail d){
// //             if(ModelState.IsValid){
// //                 try{
// //                 context.Details.Add(d);
// //                 context.SaveChanges();
// //                 }
// //                 catch(System.Exception ex){
// //                     return BadRequest(ex.InnerException.Message);
// //                 }
// //             }
// //             return Created("Details Added",d); 
// //         }
// //     }

// // }






// namespace MovieApp.Controllers{
//     [ApiController]
//     [Route("/[controller]")]
//     public class DetailController:ControllerBase{
//         MovieContext context=new MovieContext();
//         [HttpGet]
//         [Route("ListDetails")]
//         public IActionResult Get(){
//             var data=from d in context.Details select new{
//                 d.Movie.Name,
//                 d.Actors,
//                 d.Role
//             };
//             return Ok(data.ToList());
//         }
//         [HttpGet]
//         [Route("MovieDetails/{id}")]
//         public IActionResult Get(int id){
//             var data=from d in context.Details where d.MovieId==id select new{
//             d.Actors,
//             d.Role,
//             d.Movie.Name,
//             d.Movie.YearRelease
//             };
//             return Ok(data);
//         }
//         [HttpPost]
//         [Route("AddMovieDetails")]
//         public IActionResult Post(Detail d){
//             if(ModelState.IsValid){
//                 try{
//                     context.Details.Add(d);
//                     context.SaveChanges();
//                 }catch(System.Exception ex){
//                     return BadRequest(ex.InnerException.Message);
//                 }
//             }
//             return Created("Details",d);
//         }

//     }
// }







using Microsoft.AspNetCore.Mvc;
using MovieApp.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using Microsoft.Extensions.Logging;
 
namespace MoviesApp.Controllers
{
    [ApiController]
    [Route("/[controller]")]
    public class DetailController : ControllerBase
    {
        MovieContext context = new MovieContext();
        [HttpGet]
        [Route("DisplayMovieDetails/(id)")]
 
        public IActionResult Get(int id)
        {
            var data = from d in context.Details where d.MovieId == id select new{
                Artist = d.Actors, Role=d.Role,MovieName=d.Movie.Name,Year = d.Movie.YearReleased};
                return Ok(data);
        }
        [HttpGet]
        [Route("ListDetail")]
 
        public IActionResult Get()
        {
            var data = from d in context.Details select new {MovieName=d.Movie.Name,Artist=d.Actors};
            return Ok(data);
        }
        [HttpGet]
        [Route("ListDetails/{id}")]
 
        public IActionResult Get(int? id)
        {
            if(id==null){
                return BadRequest("Id cannot be null");
            }
            var data = (from d in context.Details where d.MovieId ==id select d).FirstOrDefault();
            if(id==null){
                return NotFound($"Detail {id} not found");
            }
            return Ok(data);
        }
         [HttpPost]
        [Route("AddDetails")]
        public IActionResult Post([FromBody] Detail detail)
        {
            if(ModelState.IsValid){
                try{
                    context.Details.Add(detail);
                    context.SaveChanges();
                }
                catch(System.Exception ex){
                    return BadRequest(ex.InnerException.Message);
                }
            }
            return Created("Record Added",detail);
        }
 
        [HttpPut]
        [Route("EditDetails/id")]
        public IActionResult Put(int id, Detail detail)
        {
            if(ModelState.IsValid)
            {Detail detail1 = context.Details.Find(id);
            detail1.DetailId = detail.DetailId;
            detail1.Actors=detail.Actors;
            detail1.MovieId=detail.MovieId;
            detail1.Gender=detail.Gender;
            detail1.Role=detail.Gender;
            context.SaveChanges();
            return Ok();
            }  
           
            return BadRequest("Unable to Edit record");
        }
        [HttpDelete]
        [Route("DeleteMovies/id")]
        public IActionResult Delete(int id)
        {
            try{
                    // var movie = context.Movies.Where(m=>m.Id==id);
                    // if(movie.Count()!=0){
                    //     throw new Exception("Cannot Delete Movie");
                    // }
                    var data = context.Details.Find(id);
                    context.Details.Remove(data);
                    return Ok();
                }
                catch(System.Exception ex){
                    return BadRequest(ex.Message);
                }
        }
 
    }
}