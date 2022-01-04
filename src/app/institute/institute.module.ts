import { NgModule } from '@angular/core';
import { InstituteRoutingModule } from './institute-routing.module';
import { InstDashComponent } from './inst-dash/inst-dash.component';
import { InstAddComponent } from './inst-add/inst-add.component';
import { InstEditComponent } from './inst-edit/inst-edit.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import {NgxPaginationModule} from 'ngx-pagination';

import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    InstDashComponent,
    InstAddComponent,
    InstEditComponent
  ],
  imports: [
    CommonModule,
    InstituteRoutingModule,
    HttpClientModule,
    FormsModule,ModalModule.forRoot(),
    NgxPaginationModule,
    Ng2SearchPipeModule
  ]
})
export class InstituteModule { }
