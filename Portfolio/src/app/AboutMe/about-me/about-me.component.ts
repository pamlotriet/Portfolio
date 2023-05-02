import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  show = false;
  seconds = 2;

  showContent() {
    this.show = true;
    return this.show
  }

  playAudio() {
    let audio = new Audio();
    audio.src = "assets/Spaceship.wav";
    audio.load();
    audio.play();
  }

  constructor() { }

  ngOnInit(): void {
    this.playAudio();
    setInterval(() => {
      this.showContent();
    }, this.seconds * 1000);
  }

}
