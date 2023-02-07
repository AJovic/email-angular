import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IEmail } from '../../models/IEmail';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  emails$: Subscription
  emails: IEmail[] = []


  constructor(
    private emailService: EmailService
  ) { }

  ngOnInit(): void {
    this.emails$ = this.emailService.getEmails().subscribe(res => {
      this.emails = res
    });
  }

  ngOnDestroy() {
    if (this.emails$ != undefined) {
      this.emails$.unsubscribe()
    }
  }
}
