using Microsoft.AspNetCore.SignalR;
using System.Threading;
using System.Threading.Tasks;

namespace realtimeCoreSignalRService
{
    public class LaHub : Hub
    {
        public async Task SendMessage(string message)
        {
            await Clients.All.SendAsync("receiveMessage", message);
        }

        public void GetNumber()
        {
            var someNum = new System.Random().Next(0, 1337);
            Clients.All.SendAsync("nextNumber", someNum);
            Thread.Sleep(1000);
        }

        public void GetNumbers()
        {
            for (var i = 0; i < 10; i++)
            {
                var someNum = new System.Random().Next(0, 1337);
                Clients.All.SendAsync("nextNumber", someNum);
                Thread.Sleep(1000);
            }
        }
    }
}
