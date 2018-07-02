using Microsoft.AspNetCore.SignalR;
using Microsoft.AspNetCore.Sockets;
using System;
using System.Threading;

namespace AngularAspNetCoreSignalR
{
    public class ChatHub : Hub
    {
        public void SendToAll(string name, string message)
        {
            Clients.All.InvokeAsync("sendToAll", name, message);
        }

        

        public void GetNumbers()
        {
            for(var i = 0; i < 10; i++)
            {
                var someNum = new Random().Next(0, 1337);
                Clients.All.InvokeAsync("nextNumber", someNum);
                Thread.Sleep(1000);
            }
        }
    }
}