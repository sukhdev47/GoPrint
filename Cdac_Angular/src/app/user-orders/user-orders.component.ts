import { Component, OnInit } from '@angular/core';
import { OrderClass } from '../order-class';
import { UserServiceService } from '../user-service.service';



export enum eStatus
 {
     Printed, 
     Rejected,
     Declined,
 }


@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css']
})
export class UserOrdersComponent implements OnInit {

  message:string;
  Orders : OrderClass[];
  id:string;


  constructor(private ser:UserServiceService) 
  {
    this.id=localStorage.getItem('User');
  
    this.ser.UserOrders(this.id).subscribe((data)=>{  
      //alert(JSON.stringify(data));   
      if(data.length  > 0)
      {
       
        this.Orders=data;
      }
      else
      {
        this.message="No Orders, Place a Order";
      }
    });
  }

  ngOnInit() {
  }

}
