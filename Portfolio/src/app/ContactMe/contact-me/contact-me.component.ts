import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Constants } from 'src/app/config/constants';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css'],
  providers: [MessageService],
})
export class ContactMeComponent {
  body: string = '';
  mailTo: string = '';
  postId: any;
  errorMessage: any;
  from: any;
  emailAddress: string = 'Your Email Address...';
  message: string = 'Type your message here...';
  spinner: boolean = false;
  disabled: boolean = false;
  completed: boolean = false;

  constants: Constants = new Constants();

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  openLink() {
    window.open('https://www.linkedin.com/in/pamela-lotriet-b4a1a0169/');
  }

  getFrom(item: any) {
    this.from = item.target.value;
  }

  getBody(item: any) {
    this.body = item.target.value;
  }

  sendEmails() {
    this.spinner = true;
    this.disabled = true;

    if (
      this.validateEmail(this.from) === true &&
      this.inputsIsEmpty(this.from, this.body) === false
    ) {
      this.http
        .post<any>(this.constants.EMAIL_ENDPOINT, {
          FromMail: this.from,
          Body: this.body,
        })
        .subscribe({

          next: (data) => {

            this.spinner = false;
            this.showSuccess();
            window.location.reload();

          },
          error: (error) => {
            this.errorMessage = error.message;
            console.error('There was an error!', error);
          },
        });
    } else {
      this.spinner = false;
      this.disabled = false;
      this.showError();
    }


  }

  showSuccess() {
    this.completed = true;
    this.messageService.add({
      severity: 'success',
      summary: 'Message Sent',
      detail: 'Your message has successfully been sent',
      key: 'myToast',
    });

  }

  showError() {
    this.completed = true;
    this.messageService.add({
      severity: 'error',
      summary: 'Something went wrong',
      detail: 'You entered an invalid email or the body of your email is empty',
      key: 'myToast',
    });
  }

  validateEmail(email: string) {
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
  }

  inputsIsEmpty(from: string, body: string) {
    if (
      from === '' ||
      from === undefined ||
      body === '' ||
      body === undefined
    ) {

      return true;
    }

    if (from.trim() === '' || body.trim() === '') {
      return true
    }

    return false
  }
}
