import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstAddComponent } from './inst-add/inst-add.component';
import { InstDashComponent } from './inst-dash/inst-dash.component';
import { InstEditComponent } from './inst-edit/inst-edit.component';

const routes: Routes = [
  {path:"",component:InstDashComponent},
  {path:"instdash",component:InstDashComponent},
  {path:"instadd",component:InstAddComponent},
  {path:"instedit/:id",component:InstEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstituteRoutingModule { }
