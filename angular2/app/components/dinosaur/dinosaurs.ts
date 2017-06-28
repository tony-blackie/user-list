import { Component, OnInit } from '@angular/core';
import { DinosaurService } from '../../services/dinosaurService';

@Component({
  selector: 'dinosaurs',
  template: `<div><ul>
        <li *ngFor="let user of users; let i = index;">
            {{user.firstName}} - {{ user.secondName }} - {{ user.age }}
            <span (click)="deleteUser(i)">X</span>
        </li>
    </ul>
            <button (click)="addUser()">add user</button>
    </div>`
})

export class DinosaurComponent implements OnInit {
  dinos: any[];
  error: any;
  users: any[];
  usersOlderThan20: any[];

  constructor(private dinosaurService: DinosaurService) { }

  addUser() {
      const user = {
          firstName: 'Name',
          secondName: 'Surname',
          age: 35,
          email: 'smth@gmail.com'
      };
      this.users.push(user);
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
