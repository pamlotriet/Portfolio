import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Constants } from 'src/app/config/constants';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css'],
})
export class ContactMeComponent {
  body: string = '';
  mailTo: string = '';
  postId: any;
  errorMessage: any;
  from: any;
  spinner: boolean = false;
  disabled: boolean = false;
  completed: boolean = false;

  constants: Constants = new Constants();

  constructor(private http: HttpClient) {}

  openLink() {
    window.open('https://www.linkedin.com/in/pamela-lotriet-b4a1a0169/');
  }

  getFrom(item: any) {
    this.from = item.target.value;
    console.log(this.from);
  }

  getBody(item: any) {
    this.body = item.target.value;
    console.log(this.body);
  }

  sendEmails() {
    this.spinner = true;
    this.disabled = true;

    this.http
      .post<any>(this.constants.EMAIL_ENDPOINT, {
        FromMail: this.from,
        Body: this.body,
      })
      .subscribe({
        next: (data) => {
          this.spinner = false;
          this.completed = true;
        },
        error: (error) => {
          this.errorMessage = error.message;
          console.error('There was an error!', error);
        },
      });
  }


  
}
