using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace dotnet_core_react_redux_starter_template.Controllers
{
    public class SpaController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}