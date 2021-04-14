import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../user-service.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit 
{  
  public username:string;
  password:string;
  result:string;
  loginObj:any;
  demo:string;
  usernameInfo:string;
  usernameChkBool=true;
  valid=false;
  selectedUser:string;


  iam=[]=["User","Vendor"];
  
  

  constructor( private router:Router, private route: ActivatedRoute, private ser:UserServiceService) 
  { 
    this.username="";
    this.password="";
    this.valid=false;       
  }

  ngOnInit() 
  {
     localStorage.clear();
  }

  navigateToHome()
  {
    this.router.navigate(['']);
  }  
  checkusernameFocusOut()
  {
    this.usernameInfo="";
    if(0==this.username.length)
    {
      this.usernameInfo="Please Enter username";
    }   
  }

  checkusernameFocus()
  {
    this.usernameInfo="";
  }


  checkUser(userName:string, Password:string)
  {
      this.ser.UserAuth(userName).subscribe((data)=>{
      if(Password == data[0].password)
      {
        localStorage.setItem('User',this.username);
        this.router.navigate(['/Home/User',this.username]);  
      }
      else
      {
        this.result="You have entered wrong username or password!!"
      }
    });
  }


  checkVendor(userName:string, Password:string)
  {
      this.ser.VendorAuth(userName).subscribe((data)=>{  
        //alert(data);
      if(Password == data[0].password)
      {
        localStorage.setItem('VendorFull',this.username);
        this.router.navigate(['/Home/Vendor',this.username]); 
      }
      else
      {
          this.result="You have entered wrong username or password!!"
      }
    });
  }


  checkLogin()
  {
    if(this.username.length != 0 && this.password.length != 0 )
     { 
      if(this.selectedUser == "User")
      {
        this.checkUser(this.username,this.password);            
      }
      else if(this.selectedUser == "Vendor")
      {
        this.checkVendor(this.username,this.password);  
      }
      else
      {
        this.result="Select Whether user or Vendor";
      }      
    }
    else
    {
      this.result="Invalid UserName / Password";
    }
  }



  Faq()
  {
    this.router.navigate(['/FAQ']);
  }


  contactUs()
  {
    this.router.navigate(['/ContactUs']);
  }

  gallery()
  {
    this.router.navigate(['/Gallary']);
  }
}
