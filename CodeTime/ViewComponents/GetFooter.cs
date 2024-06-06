using Microsoft.AspNetCore.Mvc;

namespace CodeTime.ViewComponents
{
    public class GetFooter : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync()
        {
            return View("GetFooter");
        }
    }
}
