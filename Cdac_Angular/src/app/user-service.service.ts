import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http' 
import { OrderClass } from './order-class';
import { User } from './user';
import { VendorFull } from './vendor-full';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  public currentUser:any=new User();
  public currentVendorFull:any=new VendorFull();
  constructor(private http:HttpClient) { }
  

  UserAuth(UserName:string):Observable<any>
  {
    return this.http.get("http://localhost:8081/UserAuth?UserName="+UserName);
  }
  
  VendorAuth(UserName:string):Observable<any>
  {
    return this.http.get("http://localhost:8081/VendorAuth?UserName="+UserName);
  }

  Zone(pincode:number):Observable<any>
  {
    return this.http.get("http://localhost:8081/Zone?pincode="+pincode);
  }  

  VendorList(pincode:number):Observable<any>
  {
    return this.http.get("http://localhost:8080/vendorList?pincode="+pincode);
  }  

  UserOrders(id:string):Observable<any>
  {
    return this.http.get("http://localhost:8080/customerOrders?customerId="+id);
  }

  VendorOrders(UserName:string):Observable<any>
  {
    return this.http.get("http://localhost:8080/vendorOrders?vendorId="+UserName);
  }

  VendorPendingOrders(UserName:string):Observable<any>
  {
    return this.http.get("http://localhost:8080/pendingvendorOrders?vendorId="+UserName);
  }
  
  uploadFile(file:FormData):Observable<any>
  {
    return this.http.post("http://localhost:8080/uploadFile",file);
  }

  UserLoggedIn()
  {
    return (localStorage.getItem('User')!=null);
  }
  
  VendorLoggedIn()
  {
    return (localStorage.getItem('VendorFull')!=null);
  }

  OrderAdd(OrderObj:OrderClass):Observable<any>
  {
    return this.http.post("http://localhost:8080/uploadOrders",OrderObj);
  }

  OrderUpdate(OrderObj:OrderClass):Observable<any>
  {
    return this.http.post("http://localhost:8080/updateOrders",OrderObj);
  }
  
  getUserRecord(primarykey: string) 
  {
    return this.http.get("http://localhost:8080/getuserrecord?primarykey="+primarykey);
  }

  getVendorRecord(primarykey: string) 
  {
    return this.http.get("http://localhost:8080/getvendorrecord?primarykey="+primarykey);
  }

  updateVendor(obj:VendorFull) 
  {
    return this.http.post("http://localhost:8080/updateVendor",obj);
  }    
    
  updateUser(obj:User):Observable<any> 
  {
    return this.http.post("http://localhost:8080/updateUser",obj);
  }

}
