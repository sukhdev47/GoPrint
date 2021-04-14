import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Router, ActivatedRoute }from '@angular/router'
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit 
{
  public email:string;
  password:string;
  result:string;
  loginObj:any;
  demo:string;
  emailInfo:string;
  emailChkBool=true;
  valid=false;
  iam:string;
  admin=[
        {email:"Goprint",password:"12345"},
        
        ];

  User=[
       {email:"kaushalkumarsingh10",password:"12345"},
       {email:"akashkannaujiya123",password:"12345"},
       {email:"amityadav",password:"12345"},
       {email:"parthgrover",password:"12345"},
       {email:"prashant",password:"12345"},
       ];

   Vendor=[
           {email:"akashkannaujiya123",password:"12345"},
          ];    

  constructor( private router:Router, private route: ActivatedRoute) 
  { 
    this.email="";
    this.password="";
       
  }

  ngOnInit() 
  {
  }

  checkEmailFocusOut()
  {
    //this.emailInfo="Enter email";
    this.emailInfo="";
    if(0==this.email.length)
    {
      this.emailInfo="Please Enter email";
    }
   
  }

  checkEmailFocus()
  {
    this.emailInfo="";
  }


  checkUser(eMail:string, Passwrd:string)
  {
    this.valid=false;
    this.User.forEach(element => 
    {
      if(element.email == this.email, element.password == this.password)
      {
        this.valid=true;
      }
    });
  }


  checkVendor(eMail:string, Passwrd:string)
  {
    this.valid=false;
    this.Vendor.forEach(element => 
    {
      if(element.email == this.email, element.password == this.password)
      {
        this.valid=true;
      }
    });
  }

  checkAdmin(eMail:string, Passwrd:string)
  {
    this.valid=false;
    this.admin.forEach(element => 
    {
      if(element.email == this.email, element.password == this.password)
      {
        this.valid=true;
      }
    });
  }

  checkLogin()
  {
    switch(this.iam)
    {
      case "User":this.checkUser(this.email,this.password);
                  //alert("User")
                  break;
      case "Vendor":this.checkVendor(this.email,this.password);
                    break;
      case "Admin":this.checkAdmin(this.email,this.password); //alert("Admin");
                    break;
    }
    //this.checkUser(this.email,this.password);
    //alert(this.iam);
    if(this.email.length != 0 && this.password.length != 0 && this.valid)
     { 

      this.loginObj=new Login(this.email,this.password);
      this.result=this.loginObj.email+"  "+this.loginObj.password;
      this.router.navigate([this.email],{relativeTo:this.route});
    }
  }

}
