import { trigger, transition, group, query, style, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {
  title = 'Portfolio';
}
