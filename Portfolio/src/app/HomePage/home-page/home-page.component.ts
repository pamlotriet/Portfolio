import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/config/constants';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  errorMessage: any;
  constants: Constants = new Constants();

  constructor(private http: HttpClient) { }

  ngOnInit(): void { }
}
