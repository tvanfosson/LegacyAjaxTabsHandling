using System.Linq;
using System.Web.Http;
using System.Web.Mvc;

using AjaxExample.Core.Data;
using AjaxExample.Models;

using AutoMapper;

namespace AjaxExample.Controllers
{
    public class HomeController : Controller
    {
        private readonly IGadgetRepository _repository;

        public HomeController(IGadgetRepository repository)
        {
            _repository = repository;
        }

        private T GetViewModel<T>()
            where T : class, new()
        {
            var gadget = _repository.GetGadget();

            var model = gadget != null
                ? Mapper.Map<T>(gadget)
                : new T();

            return model;
        }

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Summary()
        {
            var model = GetViewModel<SummaryViewModel>();

            return PartialView("_Summary", model);
        }

        public ActionResult Details()
        {
            var model = GetViewModel<DetailsViewModel>();

            return PartialView("_Details", model);
        }

        public ActionResult About()
        {
            return PartialView("_About");
        }
    }
}