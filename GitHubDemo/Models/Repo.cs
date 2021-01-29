using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GitHubDemo.Models {
    public class Repo {
        public int id { get; set; }
        public string name { get; set; }
        public string login { get; set; }
        public string description { get; set; }
        public string url { get; set; }
        public string avatar { get; set; }


    }
}
