using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace JWTDemo.Controllers.IRepository
{
    public interface IUserRepository<TEntity, TKey> where TEntity : class
    {
        TKey Create(TEntity entity);

        void Update(TEntity entity);

        void Delete(TKey id);

        TEntity FindById(TKey id);

        IEnumerable<TEntity> FindAll();
        IEnumerable<TEntity> Find(Expression<Func<TEntity, bool>> expression);
    }
}
