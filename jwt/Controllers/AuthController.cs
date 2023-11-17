using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;

namespace jwt.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class AuthController : ControllerBase {

        [HttpPost]
        public IActionResult Login ([FromBody] LoginModel user){
            if(user is null){
                return BadRequest("Invalid Client request");
            }
            // code to access the username and password
            
            if(user.UserName =="Tom"  && user.Password =="Jerry"){

                var SecretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKey@345"));
                var signingCredentials = new SigningCredentials(secretKey,SecurityAlgorithms.HmacSha256);
                var tokenOptions = new JwtSecurityToken(
                    
                )

            }
        }
       
    }
}