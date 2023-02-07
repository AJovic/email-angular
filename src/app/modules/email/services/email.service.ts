import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IEmail } from '../models/IEmail';
import { EMAIL_URL } from 'src/app/shared/constants/constant';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  getEmails(): Observable<IEmail[]> {
    return this.http.get<IEmail[]>(EMAIL_URL)
  }

  sendEmail(newEmail: IEmail): Observable<IEmail> {
    return this.http.post<IEmail>(EMAIL_URL, newEmail)
  }
  
}
