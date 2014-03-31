using AjaxExample.Core.Models;

namespace AjaxExample.Core.Data
{
    public interface IGadgetRepository
    {
        Gadget GetGadget();
        void UpdateGadget(Gadget gadget);
    }
}
