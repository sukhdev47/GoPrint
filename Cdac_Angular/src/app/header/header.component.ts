import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {Routes, RouterModule, Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit { 
  

  constructor(private router: Router)
   { }

  ngOnInit()
  {
    
  }

  navigateToHeader()
  {
    this.router.navigate(['']);
  }

  contactUs()
  {
    this.router.navigate(['/ContactUs']);
  }

  aboutUs()
  {
    this.router.navigate(['/AboutUs']);
  }

  home()
  {
    this.router.navigate(['/Home']);
  }

  register()
  {
    this.router.navigate(['/Register']);
  }

}
