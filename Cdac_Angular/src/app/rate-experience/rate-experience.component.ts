import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rate-experience',
  templateUrl: './rate-experience.component.html',
  styleUrls: ['./rate-experience.component.css']
})
export class RateexperienceComponent implements OnInit {

show:boolean=true;
output1:String;
output2:String;
  constructor() { }

  ngOnInit() {
  }

  SubmitFeedback()
  {
    this.show=false;
    this.output1="Your feedback is submitted.";
    this.output2="Thanks for your response";
  }
}
