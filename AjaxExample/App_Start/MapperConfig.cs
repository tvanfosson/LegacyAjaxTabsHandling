
using AjaxExample.Core.Models;
using AjaxExample.Models;

using AutoMapper;

namespace AjaxExample
{
    public static class MapperConfig
    {
        public static void Register()
        {
            Mapper.CreateMap<Gadget, DetailsViewModel>()
                  .ForMember(m => m.Loaded, opt => opt.MapFrom(g => true));

            Mapper.CreateMap<Gadget, SummaryViewModel>()
                  .ForMember(m => m.Loaded, opt => opt.MapFrom(g => true));

            Mapper.CreateMap<Gadget, GadgetApiModel>();

            Mapper.CreateMap<GadgetApiModel, Gadget>();

            Mapper.AssertConfigurationIsValid();
        }
    }
}