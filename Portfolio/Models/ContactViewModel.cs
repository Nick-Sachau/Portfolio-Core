using System.ComponentModel.DataAnnotations; //Grants access to data annotations for validation

namespace CORE1.Models
{
    public class ContactViewModel
    {
        //We can use Data Annotations to add validation to our model.
        //This is useful when we have required fileds or need certain
        //types of information.

        [Required(ErrorMessage = "*Name is required")]

        public string Name { get; set; }

        [Required(ErrorMessage = "*Email is required")]
        [DataType(DataType.EmailAddress)] //Certain formatting is expected (@ symbol, .com, etc.)
        public string Email { get; set; }

        [Required(ErrorMessage = "*Subject is required")]
        public string Subject { get; set; }

        [Required(ErrorMessage = "*Message is required")]
        [DataType(DataType.MultilineText)]// Increases the size of the textbox
        public string Message { get; set; }


    }
}
