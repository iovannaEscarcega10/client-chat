import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';
import { ChatComponent } from './chat/chat/chat.component';
import { ChatroomPubliccComponent } from './pages/chatroom-publicc/chatroom-publicc.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent
    ChatroomPubliccComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    //HttpClientModule,
    //HttpClient,
    FormsModule,
    AppRoutingModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatMenuModule,
    MatCardModule,
    MatExpansionModule,
    MatGridListModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSelectModule,
<<<<<<< HEAD
    //HttpModule
=======
    FormsModule
>>>>>>> 7dc595dac2fb028fb6008cfbe24794e24213de9b
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
