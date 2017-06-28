import { Component, OnInit } from '@angular/core';
import { DinosaurService } from '../../services/dinosaurService';
import { FormsModule } from '@angular/forms';
import { NewUser } from './NewUser';

@Component({
  selector: 'dinosaurs',
  template: `
<div>
    <ul>
        <li *ngFor="let user of users; let i = index;">
            {{user.firstName}} - {{ user.secondName }} - {{ user.age }}
            <span (click)="deleteUser(i)">X</span>
        </li>
    </ul>
    <form>
        <label>Name:</label>
        <input [(ngModel)]="newUser.firstName" />
        <label>Last name:</label>
        <input [(ngModel)]="newUser.secondName" />
        <label>Email:</label>
        <input [(ngModel)]="newUser.email" />
        <label>Age:</label>
        <input [(ngModel)]="newUser.age" />
    </form>
    <button (click)="addUser()">add user</button>
</div>
`
})

export class DinosaurComponent implements OnInit {
  dinos: any[];
  error: any;
  users: any[];
  usersOlderThan20: any[];
  newUser: NewUser = {
    firstName: '',
    secondName: '',
    email: '',
    age: ''
  };

  constructor(private dinosaurService: DinosaurService) { }

  addUser() {
      console.log(this.newUser);
      //const user = {
      //    firstName: 'Name',
      //    secondName: 'Surname',
      //    age: 35,
      //    email: 'smth@gmail.com'
      //};
      //this.users.push(user);
  }

  deleteUser(index) {
      this.dinosaurService
      .deleteUser(this.users[index])
      .then((result) => {
          console.log(result);
          this.users.splice(index, 1);
      })
      .catch((error) => {
          console.log(error);
      });
  }

  getDinos() {
    this.dinosaurService
        .getDinos()
        .then(dinos => this.dinos = dinos)
        .catch(error => this.error = error);
  }

  getUsers() {
      this.dinosaurService
        .getUsers()
        .then(users => {
              const usersOlderThan20 = [];
              users.map(user => {
                  if (user.age > 20) {
                      usersOlderThan20.push(user);
                  }
              });
              this.users = users;
              this.usersOlderThan20 = usersOlderThan20;
          })
        .catch(error => this.error = error);
  }

  ngOnInit() {
    //this.getDinos();
      this.getUsers();
  }
}
