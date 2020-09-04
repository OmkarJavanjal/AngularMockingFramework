import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppComponent} from "../../app.component";
import {BrowserModule} from "@angular/platform-browser";
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../../app-routing.module';
import {AppModule} from "../../app.module";
import {FakeService} from './mocking/fakeservice/fake.service';
import { MaintenanceServiceInterceptorInterceptor } from './mocking/interceptor/maintenance-service-interceptor.interceptor';
import {MaintenanceComponentComponent} from '../../main/maintenance-component/maintenance-component.component';
import {AppRoutingMaintenanceModule} from './maintenance-routing.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    MaintenanceComponentComponent
  ],
    imports: [
      CommonModule,
      BrowserModule,
      HttpClientModule,
      AppModule,
      AppRoutingMaintenanceModule,
      ReactiveFormsModule
    ],
  providers: [FakeService, { provide: HTTP_INTERCEPTORS, useClass: MaintenanceServiceInterceptorInterceptor, multi: true }],
  bootstrap: [AppComponent]
}
)
export class MaintenanceModule { }
