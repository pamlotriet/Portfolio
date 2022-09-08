import { HttpClient } from'@angular/common/http';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { Constants } from 'src/app/config/constants';
@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})

export class ContactMeComponent {

  body: string = "";
  mailTo: string = "";
  postId: any;
  errorMessage: any;
  from: any;

  constants: Constants = new Constants;

  constructor(private http: HttpClient) {}
  
  openLink(){
    window.open("https://www.linkedin.com/in/pamela-lotriet-b4a1a0169/")
  }
  
  getFrom(item:any){
    this.from = item.target.value;
    console.log(this.from);
  }

  getBody(item:any){
    this.body = item.target.value;
    console.log(this.body);
  }

  sendEmails(){
    this.http.post<any>(this.constants.EMAIL_ENDPOINT, { FromMail: this.from, Body: this.body }).subscribe({
      next: data => {
        console.log(data);
        alert('Email Sent');
    },
      error: error => {
          this.errorMessage = error.message;
          console.error('There was an error!', error);
      }
  })
}}