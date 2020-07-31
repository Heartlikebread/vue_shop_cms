using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using JWTDemo.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace JWTDemo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private IConfiguration Configuration;
        public LoginController(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        [HttpGet]
        public ResultModel Login(string username, string password,string lang) {
            var result = new ResultModel();
            try
            {
                UsersModel login = new UsersModel();
                login.Username = username;
                //加入hash轉碼

                login.PasswordHash = password;
                var user = AuthenticateUser(login);
                if (user != null)
                {
                    var token= GenerteJSONWebToken(user);
                    result.Data = token;
                }                  
                result.IsSuccess = true;
            }
            catch (Exception ex)
            {             
                result.Data = null;
                result.IsSuccess = false;
                result.Message = ex.Message;              
            }
            return result;
        }
        private UsersModel AuthenticateUser(UsersModel login)
        {
            UsersModel user = null;
            if (login.Username == "test" && login.PasswordHash == "test")
            {

                user = new UsersModel { Username = "test", PasswordHash = "test", Email = "test.email.com" };
            }
            else {
               throw new Exception ("帳號密碼輸入錯誤，請重新輸入!");
            }
            return user;

        }

        private string GenerteJSONWebToken(UsersModel userinfo) {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            var claims = new[] {
                 new Claim(JwtRegisteredClaimNames.Sub,userinfo.Username),
                 new Claim(JwtRegisteredClaimNames.Email,userinfo.Email),
                 new Claim(JwtRegisteredClaimNames.Jti,Guid.NewGuid().ToString())
            };

            var token = new JwtSecurityToken(
                issuer: Configuration["Jwt:Issuer"],
                audience: Configuration["Jwt:Issuer"],
            claims,
            expires: DateTime.Now.AddMinutes(120),
            signingCredentials: credentials);

            var encodetoken = new JwtSecurityTokenHandler().WriteToken(token);
            return encodetoken;
        }

        [Authorize]
        [HttpPost("Post")]
        public string Post() {
            var identity = HttpContext.User.Identity as ClaimsIdentity;
            IList<Claim> claim = identity.Claims.ToList();
            var userName = claim[0].Value;
            return "Welcome To：" + userName;
        }
        [Authorize]
        [HttpGet("GetValue")]
        public ActionResult<IEnumerable<string>> Get() {
            return new string[] { "Valuel", "Value2", "Value3" };
        
        }
    }
}