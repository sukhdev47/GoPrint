import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ActivatedRoute , Router, ParamMap} from '@angular/router';
import { UserServiceService } from '../user-service.service';



@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  UserName:string;
  
  constructor(private route: ActivatedRoute, private router: Router,private ser:UserServiceService) 
  {
    
  }

  ngOnInit() 
  {
      this.route.paramMap.subscribe((params: ParamMap)=>{
      let id = params.get('username');
      this.UserName=id;
    });
    
     $(function(){      
      
      $('#loginName').hover(function(){
        $('#loginName').addClass('loginName');
        //alert("heello");
        
      });
      
      $('#loginName').mouseleave(function(){
        $('#loginName').removeClass('loginName');
        //alert("heello");
        
      });

      $('#OrdersBtn').mouseover(function(){

        $('div.dropdown-menu').hide();
      });
      $('#dropdownMenuButton').mouseover(function(){

        $('div.dropdown-menu').show(300);
      });

      $('#dropdownMenuButtonDetails').mouseover(function(){
      
        $('div.dropdown-menu').show(300);
      });

      $('#dropdownMenuButtonDetails').mouseleave(function(){

        $('div.dropdown-menu').hide(100);
      });

      $('dropdownMenuButton').mouseleave(function(){
        
        $('div.dropdown-menu').hide();
   
     });
  });
  }

  OrderNav()
  {
    this.router.navigate(['./Orders'],{relativeTo:this.route});
  }

  UpdateProfileNav()
  {
    this.router.navigate(['./UpdateProfile'],{relativeTo:this.route});
  }

  logout()
  {
    localStorage.removeItem('User');
  } 

  dashBoardRoute(event)
  {
    
    const targt=event.target.textContent;
    console.log(targt);
  
    if(targt.includes("Wallet"))
    {
    this.router.navigate(['./Wallet'],{relativeTo:this.route});
    }
    else if(targt.includes("Orders"))
    {
      this.router.navigate(['./Orders'],{relativeTo:this.route});
    }
    else if(targt.includes("Home"))
    {
      this.router.navigate(['./Home'],{relativeTo:this.route});
    }
    else if(targt.includes("Profile"))
    {
      this.router.navigate(['./UpdateProfile'],{relativeTo:this.route});
    }
    else if(targt.includes("Logout"))
    {
      localStorage.removeItem('User');
      this.router.navigate(['/Home']);
    }
    else if(targt.includes("Rate your Experience"))
    {
      this.router.navigate(['./Rate'],{relativeTo:this.route});
    }
    else if(targt.includes("Pricing"))
    {
      this.router.navigate(['./Pricing'],{relativeTo:this.route});
    }

  }

}
