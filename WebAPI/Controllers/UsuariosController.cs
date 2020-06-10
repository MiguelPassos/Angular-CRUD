using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {
        private readonly UsuarioContext _usuarioContext;

        public UsuariosController(UsuarioContext usuarioContext)
        {
            _usuarioContext = usuarioContext;
        }

        // GET api/usuarios
        [HttpGet]
        public ActionResult<IEnumerable<Usuario>> Get()
        {
            try
            {
                return Ok(_usuarioContext.Usuarios);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }

        // GET api/usuarios/5
        [HttpGet("{id}")]        
        public ActionResult<Usuario> Get(int id)
        {
            try
            {
                var usuario = _usuarioContext.Usuarios.FirstOrDefault(x => x.Id == id);

                if (usuario == null)
                    return NotFound();

                return Ok(usuario);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }

        // POST api/usuarios
        [HttpPost]        
        public ActionResult Post([FromBody] Usuario usuario)
        {
            try
            {
                if (!ModelState.IsValid)
                    return BadRequest("Dados de usuário inválidos.");

                _usuarioContext.Usuarios.Add(usuario);
                _usuarioContext.SaveChanges();

                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }

        // PUT api/usuarios/5
        [HttpPut]
        public ActionResult Put([FromBody] Usuario usuario)
        {
            try
            {
                if (!ModelState.IsValid)
                    return BadRequest("Dados de usuário inválidos.");

                Usuario usr = _usuarioContext.Usuarios.FirstOrDefault(x => x.Id == usuario.Id);

                if (_usuarioContext.Usuarios.FirstOrDefault(x => x.Id == usuario.Id) == null)
                    return NotFound("Usuário não localizado");

                usr.Nome = usuario.Nome;
                usr.Sobrenome = usuario.Sobrenome;
                usr.Email = usuario.Email;
                usr.DataNascimento = usuario.DataNascimento;
                usr.Escolaridade = usuario.Escolaridade;

                _usuarioContext.Usuarios.Update(usr);

                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }

        // DELETE api/usuarios/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            try
            {
                Usuario usuario = _usuarioContext.Usuarios.FirstOrDefault(x => x.Id == id);

                if (usuario == null)
                    return NotFound("Usuário não localizado");

                _usuarioContext.Usuarios.Remove(usuario);
                _usuarioContext.SaveChanges();

                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }
    }
}
