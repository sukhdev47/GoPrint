import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  bal = 205.46;
  x = "hidden";
  showAvailableBalance:boolean;
  showAddMoney:boolean;
  showpassbook:boolean;
  showPaymentGateway:boolean;
  username:String;
	cardNumber:String;
	cvv:String;
	cardNumberInfo:String;
  usernameInfo:String;
  cvvInfo:String;
	cardNumberChkBool:true;
  usernameChkBool:true;	
  cvvChkBool:true;




  constructor() 
  {
    this.showAvailableBalance=true;
    this.showAddMoney=true;
    this.showpassbook=false;
    this.showPaymentGateway=false;

    this.username="";
    this.cardNumber="";
    this.cvv="";	

   }

  ngOnInit() {
  }

  money() 
  {
   this.x = "visible";
    alert("thse");
  }

  loadPassbook()
  {
    this.showpassbook=true;
    this.showAvailableBalance=false;
    this.showAddMoney=false;
    this.showPaymentGateway=false;
    
  }
  GoBack()
  {
    this.showpassbook=false;
    this.showAvailableBalance=true;
    this.showAddMoney=true;
    this.showPaymentGateway=false;
    
  }



  checkCardNumberFocusOut()
  {
    //this.emailInfo="Enter email";
    this.cardNumberInfo="";
    if(0==this.cardNumber.length)
    {
      this.cardNumberInfo="Please Enter card number";
    }   
  }

  checkcardNumberFocus()
  {
    this.cardNumberInfo="";
  }
  
  checkusernameFocusOut()
  {
    //this.emailInfo="Enter email";
    this.usernameInfo="";
    if(0==this.username.length)
    {
      this.usernameInfo="Please Enter Name On Card";
    }   
  }

  checkusernameFocus()
  {
    this.usernameInfo="";
  }

  checkcvvFocusOut()
  {
    //this.emailInfo="Enter email";
    this.cvvInfo="";
    if(0==this.cvv.length)
    {
      this.cvvInfo="Please Enter cvv number";
    }   
  }

  checkcvvFocus()
  {
    this.cvvInfo="";
  }
  
  checkcarddetails()
  {
	  
  }

  AddMoney()
  {
    this.showpassbook=false;
    this.showAvailableBalance=false;
    this.showAddMoney=false;
    this.showPaymentGateway=true;
  }

}
