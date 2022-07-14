import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.css']
})
export class MyWorkComponent implements OnInit {

  constructor() { }

  show = false;
  seconds = 2;

  showContent(){
    this.show = true;
    return this.show
  }
  
  ngOnInit(): void {
    setInterval(() => {
      this.showContent();
    }, this.seconds * 1000);
  }
}
