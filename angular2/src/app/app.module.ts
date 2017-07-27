import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './dinosaur';
import { UserService } from '../services/UserService';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      RouterModule.forRoot([
          {
            path: 'users',
            component: UserComponent
          }
      ])
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
