import { Component, OnInit  } from '@angular/core';
import Ws from '@adonisjs/websocket-client';
import { HttpClient } from '@angular/common/http';
import {Message} from './messages';

@Component({
  selector: 'app-chatroom-publicc',
  templateUrl: './chatroom-publicc.component.html',
  styleUrls: ['./chatroom-publicc.component.css']
})
export class ChatroomPubliccComponent implements OnInit {
  ws: any;
  chat: any;
  msg: string;

  messages: Message[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.connectToChat();
    this.httpmethod();
  }

  async httpmethod() {
    this.http.get('http://127.0.0.1:3333/api/messages/50').subscribe((result: any) => {
      this.messages = result;
    });
  }

  async connectToChat(){
    this.ws = await Ws('ws://127.0.0.1:3333');
    this.ws.connect();

    this.chat = this.ws.subscribe('chat');
    this.chat.on('message', (data: any) => {
      this.messages.push(data);
    });
  }

  async sendMessage() {
    const idx = JSON.parse(sessionStorage.getItem('username')).id;
    const datos = {
      sender_id: idx,
      text: this.msg
    };
    this.chat.emit('message', datos);
  }
}
