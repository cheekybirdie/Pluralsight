using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace UsingTaskBasedApi {
    class Program {
        static void Main(string[] args) {
            DemoThreadBasedTask();
        }

        public static void DemoThreadBasedTask() {
            var webClient = new WebClient();

            var url = "http://localhost:13511/api/values";

            // the thread is blocked until the DownloadString call completes
            var result = webClient.DownloadString(url);
            Console.WriteLine(result.Length + " bytes returned");
        }
    }
}
