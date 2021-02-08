import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { DxButtonModule,DxDataGridModule, DxAccordionModule } from 'devextreme-angular';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import dxAccordion from 'devextreme/ui/accordion';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    DashboardRoutingModule,
    ChartsModule,
    DxButtonModule,
  DxAccordionModule,
  
    BsDropdownModule,
    DxDataGridModule,

    ButtonsModule.forRoot()
  ],
  declarations: [ DashboardComponent ]
})
export class DashboardModule { }
