import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit 
{
  name:String;
  mobile:String;
  email:String;
  feedback:String;
  Token:number=1001;
  show:Boolean=false;
  constructor() { }

  ngOnInit() {
  }

  Send()
  {
    this.show=true;
    this.name="";
    this.email="";
    this.mobile="";
    this.feedback="";
    this.Token=++this.Token;
  }

}
