import { Component, OnInit } from '@angular/core';
import { DinosaurService } from '../../services/dinosaurService';

@Component({
  selector: 'dinosaurs',
  template: `<ul> <li *ngFor="let user of users"> {{user.firstName}} - {{ user.secondName }}</li> </ul>`
})

//`<ul> <li *ngFor="let user of users"> {{ user.firstName }}</li> </ul>`
export class DinosaurComponent implements OnInit {
  dinos: any[];
  error: any;
  users: any[];

  constructor(private dinosaurService: DinosaurService) { }

  getDinos() {
    this.dinosaurService
        .getDinos()
        .then(dinos => this.dinos = dinos)
        .catch(error => this.error = error);
  }

  getUsers() {
      this.dinosaurService
        .getUsers()
        .then(users => this.users = users)
        .catch(error => this.error = error);
  }

  ngOnInit() {
    //this.getDinos();
      this.getUsers();
  }
}
