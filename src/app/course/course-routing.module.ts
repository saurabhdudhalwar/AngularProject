import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourAddComponent } from './cour-add/cour-add.component';
import { CourDashComponent } from './cour-dash/cour-dash.component';
import { CourEditComponent } from './cour-edit/cour-edit.component';

const routes: Routes = [
  {path:"",component:CourDashComponent},
  {path:"courdash",component:CourDashComponent},
  {path:"couradd",component:CourAddComponent},
  {path:"couredit/:id",component:CourEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
