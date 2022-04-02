using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public enum values
    {
    }
    public class Category
    {
        public int id { get; set; }
        public string name { get; set; }
        public string ProductId { get; set; }
        public DateTime date { get; set; }
        public Product products { get; set; }
        

    }
}
