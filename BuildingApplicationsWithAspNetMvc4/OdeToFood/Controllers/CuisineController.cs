using OdeToFood.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Mvc;

namespace OdeToFood.Controllers
{
    public class CuisineController : Controller
    {
        //
        // GET: /Cuisine/

        //[AcceptVerbs(HttpVerbs.Get | HttpVerbs.Post)]
        //[HttpGet]
        public ActionResult Search(string name = "guyanese")
        {
            //var name = RouteData.Values["name"];

            // deter against malicious input
            var msg = Server.HtmlEncode("GET: Here is some info on " + name + " cuisine");

            return Content(msg);

            //return RedirectToAction("Index", "Home", new {name = name});

            //return RedirectToRoute("Default", new { controller = "Home", action = "About", foo = "bar", name = name, id = name });

            var bytes = Encoding.UTF8.GetBytes(msg);
            var stream = new MemoryStream(bytes);
            //return File(stream, "text/plain");

            //return File(Server.MapPath("~/Content/Site.css"), "text/css");

            //return Json(new AboutModel() { Name = name, Location = "Earth" }, JsonRequestBehavior.AllowGet);
        }

        /*[HttpPost]
        public ActionResult Search() {
            var name = RouteData.Values["name"];

            // deter against malicious input
            var msg = Server.HtmlEncode("POST: Here is some info on " + name + " cuisine");

            return Content(msg);

            //return RedirectToAction("Index", "Home", new {name = name});

            //return RedirectToRoute("Default", new { controller = "Home", action = "About", foo = "bar", name = name, id = name });

            var bytes = Encoding.UTF8.GetBytes(msg);
            var stream = new MemoryStream(bytes);
            //return File(stream, "text/plain");

            //return File(Server.MapPath("~/Content/Site.css"), "text/css");

            //return Json(new AboutModel() { Name = name, Location = "Earth" }, JsonRequestBehavior.AllowGet);
        }*/

    }
}
