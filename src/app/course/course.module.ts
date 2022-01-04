import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseRoutingModule } from './course-routing.module';

import { CourDashComponent } from './cour-dash/cour-dash.component';
import { CourAddComponent } from './cour-add/cour-add.component';
import { CourEditComponent } from './cour-edit/cour-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import {NgxPaginationModule} from 'ngx-pagination';

import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  declarations: [
    CourDashComponent,
    CourAddComponent,
    CourEditComponent

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CourseRoutingModule,
    FormsModule,ModalModule.forRoot(),
    NgxPaginationModule,
    Ng2SearchPipeModule
  ]
})
export class CourseModule { }
