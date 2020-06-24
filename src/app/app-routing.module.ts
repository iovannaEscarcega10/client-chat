import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat/chat.component';
import { LoginComponent } from './pages/login/login.component';
import { ChatroomPubliccComponent } from './pages/chatroom-publicc/chatroom-publicc.component';

const routes: Routes = [
  { path: 'chat', component: ChatComponent },
  { path: 'login', component: LoginComponent },
  { path: 'chatroom-public', component: ChatroomPubliccComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
