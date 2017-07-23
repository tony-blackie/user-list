import { Component } from '@angular/core';
import { DinosaurComponent } from './components/dinosaur/dinosaurs'
import { UserService } from './services/userService'

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}<span *ngIf="itIsJuly">, DjangoCon</span>!</h1>
              <dinosaurs></dinosaurs>`,
  providers: [UserService]
})

export class AppComponent {
  name:string = 'World'
  itIsJuly:boolean

  constructor() {
      var date = new Date()
      this.itIsJuly = (date.getMonth() == 6 && date.getFullYear() == 2017)
  }
}
