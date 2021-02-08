import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupsService } from '../../services/groups.service';
import { UploadService } from '../../services/upload.service';
import { EmpresasService } from '../../services/empresas.service';

import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { documento } from './dashboard';
import { ClasesDocService } from '../../services/clases-doc.service';
import { SubscriptionsService } from '../../services/subscriptions.service';
import { AuthenService } from '../../services/authen.service';
import { Router } from '@angular/router';
import { user } from '../user/user';

import { element } from 'protractor';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
@NgModule({
  imports: [CommonModule, BrowserModule],
  declarations: [DashboardComponent],
  providers: [],


})

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['./dashboard.css'],
})
export class DashboardComponent implements OnInit {
  
  constructor(public cdr: ChangeDetectorRef, public clasesService: ClasesDocService, public authService: AuthenService, public router: Router, public groupauthenService: GroupsService, public subscriptionsService: SubscriptionsService, public empresasService: EmpresasService, public uploadService: UploadService) {

  }

  ngOnInit() {
  
  }

}