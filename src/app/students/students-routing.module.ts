import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StdaddComponent } from './stdadd/stdadd.component';
import { StddashComponent } from './stddash/stddash.component';
import { StdeditComponent } from './stdedit/stdedit.component';

const routes: Routes = [
  {path:"",component:StddashComponent},
  {path:"stddash",component:StddashComponent},
  {path:"stdadd",component:StdaddComponent},
  {path:"stdedit/:id",component:StdeditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
