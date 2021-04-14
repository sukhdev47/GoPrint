import { Component } from '@angular/core';

    @Component({
      selector: 'my-app',
      template: `
         <app-header></app-header>
         <router-outlet></router-outlet>
         <app-footer></app-footer>
      `, 
      styleUrls: ['./app.component.css']

    })
    export class AppComponent { 
      title = 'GoPrint';
     }