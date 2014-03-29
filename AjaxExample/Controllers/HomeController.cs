using System.Web.Mvc;

namespace AjaxExample.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Summary()
        {
            return PartialView("_Summary");
        }

        public ActionResult Details()
        {
            return PartialView("_Details");
        }

        public ActionResult About()
        {
            return PartialView("_About");
        }
    }
}