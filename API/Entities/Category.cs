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
        public string address { get; set; }
       
        public Product products { get; set; }
        

    }
    public class SubCategory : Category
    {
        public Category categorys { get; set; }
        public int CategoryId { get; set; }
        public string name { get; set; }
        public int id { get; set; }


    }
}
