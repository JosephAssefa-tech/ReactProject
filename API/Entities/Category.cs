using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public enum values
    {
        isdeleted=1,
        isactive=2
    }
    public class Category
    {
        public int id { get; set; }
        public string name { get; set; }
 
       
        public Product products { get; set; }
        

    }
}
