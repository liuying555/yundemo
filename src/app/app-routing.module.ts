import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayerComponent } from './layout/layer/layer.component';
import { Code404Component } from './common/code404/code404.component';
import { WelcomeComponent } from './common/welcome/welcome.component';
import { StudentsComponent } from './common/students/students/students.component';
import { ClassesComponent } from './common/classes/classes/classes.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'layer', component: LayerComponent,
    children:
      [
        {path: '', redirectTo: 'welcome', pathMatch: 'full'},
        {path: 'student', component: StudentsComponent},
        {path: 'class', component: ClassesComponent},
        {path: 'welcome', component: WelcomeComponent}
      ]
  },
  {path: '**', // fallback router must in the last
    component: Code404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
