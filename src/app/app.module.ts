import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SiderbarComponent } from './layout/siderbar/siderbar.component';
import { HeaderComponent } from './layout/header/header.component';
import { LayerComponent } from './layout/layer/layer.component';
import { Code404Component } from './common/code404/code404.component';
import { WelcomeComponent } from './common/welcome/welcome.component';
import { StudentsComponent } from './common/students/students/students.component';
import { ClassesComponent } from './common/classes/classes/classes.component';
import {CommonService } from './services/common/common.service';
registerLocaleData(zh);


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    SiderbarComponent,
    HeaderComponent,
    LayerComponent,
    Code404Component,
    WelcomeComponent,
    StudentsComponent,
    ClassesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgZorroAntdModule.forRoot()
  ],
  providers: [
    CommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
