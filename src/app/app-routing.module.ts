import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ChatroomPubliccComponent } from './pages/chatroom-publicc/chatroom-publicc.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'chatroom-public', component: ChatroomPubliccComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
