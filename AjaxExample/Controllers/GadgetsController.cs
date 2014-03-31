using System.Net;
using System.Web.Http;
using AjaxExample.Core.Data;
using AjaxExample.Core.Models;
using AjaxExample.Models;

using AutoMapper;

namespace AjaxExample.Controllers
{
    public class GadgetsController : ApiController
    {
        private readonly IGadgetRepository _repository;

        public GadgetsController(IGadgetRepository repository)
        {
            _repository = repository;
        }

        public GadgetApiModel Get()
        {
            var gadget = _repository.GetGadget();
            if (gadget == null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }

            return Mapper.Map<GadgetApiModel>(gadget);
        }

        public void Post([FromBody]GadgetApiModel model)
        {
            if (!ModelState.IsValid)
            {
                throw new HttpResponseException(HttpStatusCode.BadRequest);
            }

            var gadget = Mapper.Map<Gadget>(model);

            _repository.UpdateGadget(gadget);
        }

        public void Delete()
        {
            _repository.UpdateGadget(null);
        }
    }
}