import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailRoutingModule } from './email-routing.module';
import { EmailComponent } from './components/email/email.component';
import {ButtonModule} from 'primeng/button';
import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';
import {ChipsModule} from 'primeng/chips';
import {TabViewModule} from 'primeng/tabview';
import { TabComponent } from './components/tab/tab.component';
import { HistoryComponent } from './components/history/history.component';
import {TableModule} from 'primeng/table';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ToastModule} from 'primeng/toast';

@NgModule({
  declarations: [
    EmailComponent,
    TabComponent,
    HistoryComponent
  ],
  imports: [
    CommonModule,
    EmailRoutingModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    ChipsModule,
    TabViewModule,
    TableModule,
    ConfirmDialogModule,
    ToastModule
  ]
})
export class EmailModule { }
