import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user-list';
import { UserService } from '../services/UserService';
import { UserForm } from './user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserForm
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      RouterModule.forRoot([
          {
            path: 'users',
            component: UserComponent
          },
          {
            path: 'user/:id',
            component: UserForm
          }
      ])
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
