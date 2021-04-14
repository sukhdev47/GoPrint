import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { OrderClass } from '../order-class';
export enum eStatus
 {
     Pending, 
     Completed,
     Declined,
 }
 
@Component({
  selector: 'app-vendor-orders',
  templateUrl: './vendor-orders.component.html',
  styleUrls: ['./vendor-orders.component.css']
})
export class VendorOrdersComponent implements OnInit {

  message:string;
  Orders : OrderClass[];
  result:String;


  constructor(private ser:UserServiceService) 
  {
    this.showOrder();
  }

  showOrder()
  {
    this.ser.VendorOrders(localStorage.getItem('VendorFull')).subscribe((data)=>{
      if(data != null)
      {
        this.Orders=data;
      }
      else
      {
        this.message="No Orders, Place a Order";
      }
    });
  }

  Cancled(arrs:OrderClass)
  {
    arrs.status="canceled";
    this.ser.OrderUpdate(arrs).subscribe((data)=>{
      this.showOrder();
    });
  }
  ngOnInit()
  {
  }
}
