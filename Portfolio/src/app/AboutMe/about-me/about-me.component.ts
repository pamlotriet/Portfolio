import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  
  show = false;
  seconds = 3.5;

  showContent(){
    this.show = true;
    return this.show
  }



  constructor() { }

  
  ngOnInit(): void {
    setInterval(() => {
      this.showContent();
    }, this.seconds * 1000);
  }

}
