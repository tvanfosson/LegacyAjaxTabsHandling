using System.Web.Http;
using System.Web.Mvc;
using System.Web.Routing;

namespace AjaxExample
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            DependencyConfig.RegisterMvc(DependencyResolver.SetResolver);
            MapperConfig.Register();

            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
        }
    }
}
