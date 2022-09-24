import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Constants } from 'src/app/config/constants';
import {MessageService} from 'primeng/api';

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
  emailAddress: string = "Your Email Address...";
  message: string = "Type your message here...";
  spinner: boolean = false;
  disabled: boolean = false;
  completed: boolean = false;

  constants: Constants = new Constants();

  constructor(private http: HttpClient, private messageService: MessageService) {}

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
          this.showSuccess();
          setTimeout(()=>{                           // <<<---using ()=> syntax
            this.completed = false;
            window.location.reload();
        }, 3000);
        },
        error: (error) => {
          this.errorMessage = error.message;
          console.error('There was an error!', error);
        },
      });

      
  }

  showSuccess(){
    this.completed = true;
    this.messageService.add({severity:'success', summary: 'Message Sent', detail: 'Your message has successfully been sent', key:'myToast'});
  }

  
}
