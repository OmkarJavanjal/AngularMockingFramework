import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveformComponent } from './main/reactiveform/reactiveform.component';
import {MaintenanceServiceInterceptorInterceptor} from './shared/maintenance/mocking/interceptor/maintenance-service-interceptor.interceptor';
import {FakeService} from './shared/maintenance/mocking/fakeservice/fake.service';
import { MaintenanceComponentComponent } from './main/maintenance-component/maintenance-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveformComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  exports: [
    ReactiveformComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
