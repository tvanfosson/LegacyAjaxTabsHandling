using AjaxExample.Core.Models;

namespace AjaxExample.Core.Data
{
    public class InMemoryGadgetRepository : IGadgetRepository
    {
        private static Gadget _gadget;
        private static readonly object _lock = new object();

        public Gadget GetGadget()
        {
            lock (_lock)
            {
                return _gadget;
            }
        }

        public void UpdateGadget(Gadget gadget)
        {
            lock (_lock)
            {
                _gadget = gadget;
            }
        }
    }
}
