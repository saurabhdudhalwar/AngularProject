import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StddashComponent } from './stddash/stddash.component';
import { StdaddComponent } from './stdadd/stdadd.component';
import { StdeditComponent } from './stdedit/stdedit.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import {NgxPaginationModule} from 'ngx-pagination';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    StddashComponent,
    StdaddComponent,
    StdeditComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    HttpClientModule,
    FormsModule,ModalModule.forRoot(),
    NgxPaginationModule,
    Ng2SearchPipeModule
  ]
})
export class StudentsModule { }
