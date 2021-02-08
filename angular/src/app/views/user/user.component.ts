import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { user, user2 } from './user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GroupsService } from '../../services/groups.service';
import { SubscriptionsService } from '../../services/subscriptions.service';

import { AuthenService } from '../../services/authen.service';
import { UploadService } from '../../services/upload.service';
import { element } from 'protractor';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import Swal from 'sweetalert2';
import { EmpresasService } from '../../services/empresas.service';
import { empresa } from '../empresas/empresas';
import * as e from 'cors';
import { Z_DEFAULT_STRATEGY } from 'zlib';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 

  menuTipoDatos: string[] = [
    "Activo",
    "Inactivo",
  ];

  
  constructor(public userService: UserService, public uploadService: UploadService, public subscriptionService: SubscriptionsService, public groupService: GroupsService, public empresasService: EmpresasService, public authService: AuthenService) {
 
  }

  ngOnInit() {
    

  }

}