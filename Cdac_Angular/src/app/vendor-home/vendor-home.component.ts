import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ActivatedRoute , Router, ParamMap} from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { OrderClass } from '../order-class';


export enum eStatus
 {
     Pending, 
     Completed,
     Declined,
 }
 
 @Component({
  selector: 'app-vendor-home',
  templateUrl: './vendor-home.component.html',
  styleUrls: ['./vendor-home.component.css']
})


export class VendorHomeComponent implements OnInit 
{
  
  constructor(private route: ActivatedRoute, private router: Router, private ser:UserServiceService) 
  {
    this.pendingOrders();
  }

  pendingOrders()
  {
    this.ser.VendorPendingOrders(localStorage.getItem('VendorFull')).subscribe((data)=>{
      if(data == null)
      {
        this.message="No Pending Orders";
      }
      else
      {
        this.VendorHomeData=data;
      }
      
    });
  }

  ngOnInit() {
  }

  result:any;
  a:Number;
  hide:Boolean;
  bal=2300;
  show1:boolean;
  show:boolean=true;
  show2:boolean=true;
  showMessage:false;
  user="";
  message:string;

  
  VendorHomeData : OrderClass[];

  completed(arrs:OrderClass)
  {
    arrs.status="completed";
    this.ser.OrderUpdate(arrs).subscribe((data)=>{
      this.pendingOrders();
    });
  }

  GetOrderDetails(Order:String)
  {
    
     this.show1=false;
     this.show=false;
     this.show2=false;
  }
  
  GetBalanceHistory()
  {
    this.show1=true;
    
    this.show=false;
    this.show2=false;
  }
  GoBack()
  {
    this.show1=false;
    this.show=true;
    this.show2=true;
  }
}
