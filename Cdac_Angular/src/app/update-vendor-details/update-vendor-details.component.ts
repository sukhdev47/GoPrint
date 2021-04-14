import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';
import { VendorFull } from '../vendor-full';


@Component({
  selector: 'app-update-vendor-details',
  templateUrl: './update-vendor-details.component.html',
  styleUrls: ['./update-vendor-details.component.css']
})
export class UpdateVendorDetailsComponent implements OnInit
{
   shopname:string;
   vendorname:string;
   email:string;
   mobileno:number;
   addressline1:string;
   pincode:number;
   oldpassword:string;
   newpassword:string;
   actualpassword:string;
   wallet:number;
   primarykey:string;
   showresult:boolean;
   result:string;
   object:Array<User>;
  
   constructor(private ser:UserServiceService, private router:Router)
   {
    this.primarykey= localStorage.getItem('VendorFull');
    this.ser.getVendorRecord(this.primarykey).subscribe(      
      (data:any)=>      
      {  
        if(data.rows!= 0)
        {
          this.vendorname=data.vendorName;
          this.shopname=data.shopName;
          this.mobileno=data.mobileNo;
          this.addressline1=data.addressLine;
          this.pincode=data.zone;
          this.actualpassword=data.password;
          this.wallet=data.wallet;
          this.email="abcd@gmail.com";
        }         
      });
   }

  ngOnInit() 
  {
    
  }

  Reset()
  {
    this.shopname="";
    this.vendorname="";
    this.email="";
    this.mobileno=null;
    this.pincode=null;
    this.newpassword="";
    this.oldpassword="";
    this.addressline1="";

    this.showresult=true;
    this.result="All the fields are reseted!!"
  }

  Update()
  {
    if(this.actualpassword==this.oldpassword)
    {
      let obj=new VendorFull();
      obj.vendorName=this.vendorname;
      obj.shopName=this.shopname;
      obj.email=this.email;
      obj.mobileNo=this.mobileno;
      obj.addressLine=this.addressline1;
      obj.zone=this.pincode;
      obj.password=this.newpassword;
      obj.wallet=this.wallet;
      obj.vendorId=localStorage.getItem('VendorFull');
        
      this.ser.updateVendor(obj).subscribe(
        (data:any)=>{ 
          if(data.rows!=0)
          {
            this.result ="Record Updated Successfully!!" ;
            this.showresult=true;
            this.shopname="";
            this.vendorname="";
            this.email="";
            this.mobileno=null;
            this.pincode=null;
            this.newpassword="";
            this.oldpassword="";
            this.addressline1="";
          }
          else
          {
            this.result="Updation Failed due to some technical issue!!! please wait for some time and try again later.";
            this.showresult=true;
          }      
        });
    }
    else
    {
      this.showresult=true;
      this.result="You have entered wrong old password!!";
    }
  }
}
