import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';
import { fillProperties } from '@angular/core/src/util/property';

@Component({
  selector: 'app-update-user-details',
  templateUrl: './update-user-details.component.html',
  styleUrls: ['./update-user-details.component.css']
})
export class UpdateUserDetailsComponent implements OnInit {
  firstname: string;
  lastname: string;
  email: string;
  mobileno: number;
  addressline1: string;
  pincode: number;
  oldpassword: string;
  newpassword: string;
  actualpassword: string;
  wallet: number;
  showresult: boolean;
  result: string;
  primarykey: string;
  object: Array<User>;

  constructor(private ser: UserServiceService, private router: Router) {
    this.primarykey = localStorage.getItem('User');
    this.ser.getUserRecord(this.primarykey).subscribe(
      (data: any) => {
        if (data != null) {
          this.firstname = data.firstName;
          this.lastname = data.lastName;
          this.mobileno = data.mobileNo;
          this.addressline1 = data.addressLine1;
          this.pincode = data.zone;
          this.wallet = data.wallet;
          this.actualpassword = data.password;
          this.email = "abcd@gmail.com";
        }
      });
  }

  ngOnInit() {
  }

  Reset() {
    this.firstname = "";
    this.lastname = "";
    this.email = "";
    this.mobileno = null;
    this.pincode = null;
    this.newpassword = "";
    this.oldpassword = "";
    this.addressline1 = "";

    this.showresult = true;
    this.result = "All the fields are reseted!!"
  }

  Update() {
    if (this.actualpassword == this.oldpassword) {
      let obj = new User();
      obj.firstName = this.firstname;
      obj.lastName = this.lastname;
      obj.email = this.email;
      obj.mobileNo = this.mobileno;
      obj.addressLine1 = this.addressline1;
      obj.zone = this.pincode;
      obj.password = this.newpassword;
      obj.wallet = this.wallet;
      obj.customerId = localStorage.getItem('User');
      this.ser.updateUser(obj).subscribe(
        (data: any) => {
          if (data.rows != 0) {
            this.result = "Record Updated Successfully!!";
            this.showresult = true;
            this.firstname = "";
            this.lastname = "";
            this.email = "";
            this.mobileno = null;
            this.pincode = null;
            this.newpassword = "";
            this.oldpassword = "";
            this.addressline1 = "";
          }
          else {
            this.result = "Updation Failed due to some technical issue!!! please wait for some time and try again later.";
            this.showresult = true;
          }
        });
    }
    else {
      this.showresult = true;
      this.result = "You have entered wrong old password!!";
    }
  }
}
