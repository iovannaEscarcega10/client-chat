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
  messages: any = [];
  msg: string;
  // Conexiones chat
  isConnected: boolean;
  isDisconnected: boolean;

  // Variables para los usuarios
  users: string[] = [];
  user: string;
  username: string[] = [];
  datos: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.connectToChat();
  }

  async connectToChat(){
    this.ws = await Ws('ws://127.0.0.1:3333');
    this.ws.connect();

    this.chat = this.ws.subscribe('chat');

    this.chat.on('message', (data: any) => {
      this.messages.push(data.text);
      this.username = data[this.username.length].username;
      this.datos.push(data);
      // this.username.push(data.username);
      // this.showusername = data[this.username.length - 1];
      console.log('mensajes pruebon: ' + data);
      console.log(data);
      console.log(data.length - 1);
      console.log(data[this.username.length].username);
    });

    this.ws.on('open', () => {
      console.log('connect');
      this.isConnected = true;
      if (this.isConnected) {
        const username = JSON.parse(sessionStorage.getItem('username')).username;
        this.joinRoomUser(username);
        this.chat.on('newUser', (data: any) => {
          if (data !== null || data !== '' || data.length !== 0){
            this.users = data;
          }
        });
      }
    });

    this.ws.on('close', () => {
        this.isDisconnected = true;
        if (this.isDisconnected) {
          console.log('HUBO UN PROBLEMA PRUEBE REFRESCANNDO LA PÁGINA');
        }
    });
  }

  async joinRoomUser(user) {
    this.chat.emit('newUser', user);
    this.user = user;
  }

  async sendMessage() {
    const id = JSON.parse(sessionStorage.getItem('username')).id;
    const user = JSON.parse(sessionStorage.getItem('username')).username;
    const data = {
      username: user,
      text: this.msg,
      sender_id: id
    };
    this.chat.emit('message', data);
    console.log(data);
    // this.username = data.username;
    this.messages.push(this.msg);
    this.msg = '';
  }
}
