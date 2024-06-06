using CodeTime.Models;
using FluentValidation.Results;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace CodeTime.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        [Route("")]
        public async Task<IActionResult> Index()
        {
            return View();
        }
        [HttpPost]
        [Route("home/savemail")]
        public async Task<IActionResult> SaveMail(string mail)
        {
            using (StreamWriter writer = new StreamWriter("mails.txt", true))
            {
                writer.WriteLine($"{mail}:{DateTime.Now}");
            }
            return Json(true);
        }
        [HttpPost]
        [Route("home/savephone")]
        public async Task<IActionResult> SavePhone(string phone)
        {
            using (StreamWriter writer = new StreamWriter("phons.txt", true))
            {
                writer.WriteLine($"{phone}:{DateTime.Now}");
            }
            return Json(true);
        }



        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}