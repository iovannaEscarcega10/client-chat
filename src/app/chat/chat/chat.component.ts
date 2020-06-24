import { Component, OnInit } from '@angular/core';
import Ws from '@adonisjs/websocket-client';
/*import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';*/
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor() { }
  ws: any;
  chat: any;
  messages: string[] = [];
  msg: string;
  ngOnInit(): void {
    this.ws = Ws("ws://localhost:3333", {
      path: "adonis-ws"
    });
    this.ws.connect();
    this.chat = this.ws.subscribe("chat");
    this.chat.on("message", (data: any) => {
      this.messages.push(data)
    });
  }
  sendMessage() {
    this.chat.emit("message", this.msg);
    this.messages.push(this.msg)
    this.msg = ''
  }

}
