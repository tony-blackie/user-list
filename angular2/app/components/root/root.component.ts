import { Component } from '@angular/core';

@Component({
  selector: 'my-root',
  template: '<div><nav>Menu</nav><router-outlet></router-outlet></div>'
})

export class Root {
  name:string = 'World'
  itIsJuly:boolean

  constructor() {
      var date = new Date()
      this.itIsJuly = (date.getMonth() == 6 && date.getFullYear() == 2017)
  }
}