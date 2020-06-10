using Microsoft.EntityFrameworkCore;

namespace WebAPI.Models
{
    public class UsuarioContext : DbContext
    {
        public DbSet<Usuario> Usuarios { get; set; }

        public UsuarioContext(DbContextOptions<UsuarioContext> contextOptions) : base (contextOptions)
        {
        }
    }
}
