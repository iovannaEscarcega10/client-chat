import { Component, OnInit  } from '@angular/core';
import Ws from '@adonisjs/websocket-client';

@Component({
  selector: 'app-chatroom-publicc',
  templateUrl: './chatroom-publicc.component.html',
  styleUrls: ['./chatroom-publicc.component.css']
})
export class ChatroomPubliccComponent implements OnInit {
  ws: any;
  chat: any;
  messages: string[] = [];
  msg: string;
  // Conexiones chat
  isConnected: boolean;
  isDisconnected: boolean;

  // Variables para los usuarios
  users: string[] = [];
  user: string;

  constructor() { }

  ngOnInit(): void {
    this.connectToChat();
  }

  async connectToChat(){
    this.ws = await Ws('ws://127.0.0.1:3333');
    this.ws.connect();

    let isConnected = false;
    let isDisconnected = false;

    this.ws.on('open', () => {
      isConnected = true;
      if (isConnected) {
        this.isConnected = true;
        this.isDisconnected = false;
        this.chat = this.ws.subscribe('chat');
        this.joinRoomUser(sessionStorage.getItem('username'));
        this.chat.on('message', (data: any) => {
          this.messages.push(data);
        });
      }
    });

    this.ws.on('close', () => {
      isDisconnected = true;
      if (isDisconnected) {
        console.log('HUBO UN PROBLEMA PRUEBE REFRESCANNDO LA PÁGINA');
        this.chat.emit('leaveRoomUser', this.user);
        this.isDisconnected = true;
      }
      console.log('Ups! Hubo algún problema, pruebe refrescando el navegador');
    });
  }

  async joinRoomUser(user) {
    this.chat.on('newUser', (data: any) => {
      if (data !== null || data !== '' || data.length !== 0){
        this.users = data;
      }
    });
    this.chat.emit('newUser', user);
    this.user = user;
  }

  async sendMessage() {
    console.log('SEND MESSAGE');
    this.chat.emit('message', this.msg);
    this.messages.push(this.msg);
    this.msg = '';
  }

}
