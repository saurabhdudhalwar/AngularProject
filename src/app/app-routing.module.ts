import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EdituserComponent } from './edituser/edituser.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './shared/Authentication/auth.guard';
import { StdaddComponent } from './students/stdadd/stdadd.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "adduser", component: UsersComponent, canActivate: [AuthGuard] },
  { path: "edituser/:id", component: EdituserComponent, canActivate: [AuthGuard] },
  { path: "logout", component: LogoutComponent, canActivate: [AuthGuard] },
  { path: "stdadd", component: StdaddComponent, canActivate: [AuthGuard] },
  { path: "register", component: RegisterComponent, canActivate: [AuthGuard] },
  { path: "edituser", component: EdituserComponent, canActivate: [AuthGuard] },
  { path: "students", loadChildren: () => import('./students/students.module').then((m) => m.StudentsModule), canActivate: [AuthGuard] },
  { path: "institute", loadChildren: () => import('./institute/institute.module').then((n) => n.InstituteModule), canActivate: [AuthGuard] },
  { path: "course", loadChildren: () => import('./course/course.module').then((b) => b.CourseModule), canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
