using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class Cart
    {
        public int id { get; set; }
        public string cartName { get; set; }
        public DateTime date { get; set; }
        public Category category { get; set; }
        public Product produst { get; set; }
        

    }
}
