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
            <span (click)="fillFormWithUserData(i)">
                {{user.firstName}} - {{ user.lastName }} - {{ user.age }}
            </span>
            <span (click)="deleteUser(i)">X</span>
        </li>
    </ul>
    <form>
        <label>Name:</label>
        <input [(ngModel)]="newUser.firstName" />
        <label>Last name:</label>
        <input [(ngModel)]="newUser.lastName" />
        <label>Email:</label>
        <input [(ngModel)]="newUser.email" />
        <label>Age:</label>
        <input [(ngModel)]="newUser.age" />
    </form>
    <button (click)="handleSave()">Save</button>
</div>
`
})

export class DinosaurComponent implements OnInit {
  dinos: any[];
  error: any;
  users: any[];
  usersOlderThan20: any[];
  newUser: NewUser = {
    id: null,
    firstName: '',
    lastName: '',
    email: '',
    age: ''
  };
  index: number;

  constructor(private dinosaurService: DinosaurService) { }

  handleSave() {
      if (this.newUser.id) {
          this.updateUser();
      } else {
          this.addUser();
      }
  }

  addUser() {
      this.dinosaurService
      .addNewUser(this.newUser)
      .then(result => {
          const createdUser = JSON.parse(result._body);
          this.users.push(createdUser);
      });
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

  fillFormWithUserData(index) {
      this.newUser = new NewUser(
          this.users[index].id,
          this.users[index].firstName,
          this.users[index].lastName,
          this.users[index].email,
          this.users[index].age
      );
      this.index = index;
  }

  updateUser() {
      this.dinosaurService
        .updateUser(this.newUser)
        .then(result => {
              console.log(result._body);
              const updatedUser = JSON.parse(result._body);
              this.users.map((user, index, usersArray) => {
                  if (user.id === updatedUser.id) {
                      usersArray[index] = updatedUser;
                  }
              });
        })
        .catch(error => console.log(error));
  }

  ngOnInit() {
    //this.getDinos();
      this.getUsers();
  }
}
