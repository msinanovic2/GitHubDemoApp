using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GitHubDemo.Models;
using Newtonsoft.Json;
using System.IO;
using Microsoft.AspNetCore.Hosting;

namespace GitHubDemo.Controllers {
    [Route( "api/[controller]" )]
    [ApiController]
    public class ValuesController : ControllerBase {

        
         private IHostingEnvironment _env;

        public ValuesController( IHostingEnvironment _environment )
        {
            _env = _environment;
        }


        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<Repo>> Get()
        {

            var path = Path.Combine( Directory.GetCurrentDirectory(), "saved.json" );
            if (System.IO.File.Exists( path ))
            {
                string json = System.IO.File.ReadAllText( path );
                var repos = JsonConvert.DeserializeObject<List<Repo>>( json );
                return repos.ToArray();
            }
            return new Repo[0];


        }

        // GET api/values/5
        [HttpGet( "{id}" )]
        public ActionResult<string> Get( int id )
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post( [FromBody] Repo[] value )
        {
            string json = JsonConvert.SerializeObject( value.ToArray() );
            System.IO.File.WriteAllText( Path.Combine( Directory.GetCurrentDirectory(), "saved.json"), json );
        }

        // PUT api/values/5
        [HttpPut( "{id}" )]
        public void Put( int id, [FromBody] string value )
        {
        }

        // DELETE api/values/5
        [HttpDelete( "{id}" )]
        public void Delete( int id )
        {
        }
    }
}
