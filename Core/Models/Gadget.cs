using System.ComponentModel.DataAnnotations;

namespace AjaxExample.Core.Models
{
    public class Gadget
    {
        [Required]
        [StringLength(50)]
        public string Name { get; set; }

        [Required]
        [StringLength(500)]
        public string Description { get; set; }

        [StringLength(20)]
        public string Version { get; set; }

        [StringLength(2000)]
        public string Capabilities { get; set; }
    }
}
