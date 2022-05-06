using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class Customer
    {
        public int id { get; set; }
        public string name { get; set; }
        public string lname { get; set; }
        public string location { get; set; }
        public int age { get; set; }
    }
}
