using System.Web.Mvc;

namespace AjaxExample.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Details()
        {
            return View("_Details");
        }

        public ActionResult About()
        {
            return View("_About");
        }
    }
}