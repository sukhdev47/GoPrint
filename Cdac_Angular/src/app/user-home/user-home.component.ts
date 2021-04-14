import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { OrderClass } from '../order-class';
import { VendorFull } from '../vendor-full';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {


  ordersObj = new OrderClass();
  amount: number;
  orderId : number;
  message: string;
  arr: VendorFull[];
  v1: number;

  vendor: string;
  table = false;
  upload = false;
  printbtn = true;
  fId: string;

  constructor(private route: ActivatedRoute, private router: Router, private _location: Location, private ser: UserServiceService) {
  //alert(new Date().toString());
  //alert(Math.random()*100000000);
  let s = new Date();
  let dateStr=s.getDate()+" / "+(s.getMonth()+1)+" / "+s.getFullYear();
 //alert(dateStr);
  }

  ngOnInit() {
    //localStorage.clear();

  }

  selectedVendor(arrs: VendorFull) {
    //alert(arrs.vendorId);
    this.vendor = arrs.vendorId;
  }

  fetchmy() {
    this.ser.VendorList(this.v1).subscribe(
      (data: any) => {
        //alert(data);
        if (data == null) {
          this.message = "Service not Available at this pincode";
          this.table = false;
          this.upload = false;
        }
        else {
          this.table = true;
          this.arr = data;
          this.upload = true;
        }
      }
    );

  }

  userFile: any = File;
  OnSelectFile(event) 
  {    
    const file = event.target.files[0];
    console.log(file);
    this.userFile = file;
    this.printbtn = false;   
  }


  PrintVendor() 
  {
    
    var formData = new FormData();
    formData.append('file', this.userFile);
    this.ser.uploadFile(formData).subscribe((data) => {
      this.fId = data.fileDownloadUri;
      
      console.log(data);


      this.ordersObj.orderId = Math.random()*100000000;
      this.ordersObj.amount = this.amount;
      this.ordersObj.fileId = this.fId;
      let s = new Date();
      let dateStr=s.getDate()+" / "+(s.getMonth()+1)+" / "+s.getFullYear();
      this.ordersObj.ordeDate = dateStr;
      this.ordersObj.status = 'pending';
      this.ordersObj.customerId = localStorage.getItem('User');
      this.ordersObj.vendorId = this.vendor;
     
      this.ser.OrderAdd(this.ordersObj).subscribe((data) => {
        this.message = "Order Placed Successfully";
        this.table = false;
        this.upload = false;
        
        this.printbtn = true;
        this.v1=0;
        this.amount=0;
      });
    });

  }

}
