using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace SlowWeb.Controllers {
    public class ValuesController : ApiController {
        // GET api/values
        public IEnumerable<string> Get() {

            // slow down
            System.Threading.Thread.Sleep(10000);

            var path = HttpContext.Current.Server.MapPath("~/App_Data/sowpods_europe.txt");

            var content = "";

            if (File.Exists(path)) {
                content = File.ReadAllText(path);
            }

            //return new string[] { "value1", "value2" };
            return new string[] {content};
        }

        // GET api/values/5
        public string Get(int id) {
            return "value";
        }

        // POST api/values
        public void Post([FromBody]string value) {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value) {
        }

        // DELETE api/values/5
        public void Delete(int id) {
        }
    }
}