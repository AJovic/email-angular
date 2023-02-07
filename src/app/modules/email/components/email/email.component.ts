import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { emailsValidator } from '../../functions/validateEmails';
import { IEmail } from '../../models/IEmail';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class EmailComponent implements OnInit {

  emailForm = this.fb.group({
    from: ['', Validators.email],
    to: ['', Validators.email],
    cc: ['',  Validators.compose([emailsValidator, Validators.required])],
    importance: ['', Validators.required],
    subject: ['', Validators.required],
    content: ['', Validators.required]
  });

  isSubmitted = false;

  email: IEmail
  emailRequest$: Subscription

  constructor(
    private fb: FormBuilder,
    private emailService: EmailService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void {
  }

  saveEmail() {
    this.isSubmitted = true;

    if (this.emailForm.valid) {
      this.email = this.emailForm.value
      this.email.importance = Number(this.emailForm.value.importance)

      this.emailRequest$ = this.emailService.sendEmail(this.emailForm.value)
        .subscribe(res => {
          if (res.id != 0) {
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Email is saved', life: 3000 });
            this.emailForm.reset()
            this.isSubmitted = false;
          }
        });
    }
  }

  cancel(){
    this.confirmationService.confirm({
      message: 'Are you want to cancel?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.emailForm.reset()
      }
    });
  }

  get f() {
    return this.emailForm.controls;
  }

  ngOnDestroy() {
    if (this.emailRequest$ != undefined) {
      this.emailRequest$.unsubscribe()
    }
  }
}
