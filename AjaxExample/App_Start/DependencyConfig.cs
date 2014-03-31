using System;
using System.Web.Http;
using System.Web.Mvc;

using AjaxExample.Core.Data;

using Autofac;
using Autofac.Integration.Mvc;
using Autofac.Integration.WebApi;

namespace AjaxExample
{
    public static class DependencyConfig
    {
        public static void RegisterMvc(Action<IDependencyResolver> registerAction)
        {
            if (registerAction == null)
            {
                throw new ArgumentNullException("registerAction");
            }

            var builder = new ContainerBuilder();

            builder.RegisterControllers(typeof(MvcApplication).Assembly).InstancePerHttpRequest();

            builder.RegisterType<InMemoryGadgetRepository>().As<IGadgetRepository>().SingleInstance();

            registerAction(new AutofacDependencyResolver(builder.Build()));

        }

        public static void RegisterWebApi(HttpConfiguration configuration)
        {
            if (configuration == null)
            {
                throw new ArgumentNullException("configuration");
            }

            var builder = new ContainerBuilder();

            builder.RegisterApiControllers(typeof(MvcApplication).Assembly).InstancePerApiRequest();

            builder.RegisterType<InMemoryGadgetRepository>().As<IGadgetRepository>().SingleInstance();

            configuration.DependencyResolver = new AutofacWebApiDependencyResolver(builder.Build());
        }
    }
}