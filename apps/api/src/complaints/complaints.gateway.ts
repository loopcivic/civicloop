import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect
} from "@nestjs/websockets";

import { Server } from "socket.io";

@WebSocketGateway({
  cors: {
    origin: "*",
    credentials: true
  }
})
export class ComplaintsGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{

  @WebSocketServer()
  server: Server;

  handleConnection(client: any) {
    console.log("Client connected:", client.id);
  }

  handleDisconnect(client: any) {
    console.log("Client disconnected:", client.id);
  }

  broadcastComplaintUpdate(complaint: any) {

    this.server.emit("complaintUpdated", complaint);

  }

}
