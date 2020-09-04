import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {env} from '../../../../../environments/environment-loader';
import {FakeService} from '../fakeservice/fake.service';
import {map} from 'rxjs/operators';

@Injectable()
export class MaintenanceServiceInterceptorInterceptor implements HttpInterceptor {

  constructor(private fakeService: FakeService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!env.mocking){
      return next.handle(request);
    }
    return this.fakeService.getMockResponse(request.url).pipe(map(
      data => {
        if (data === 'none') {
          console.log('none was for: ', request.url);
          return new HttpResponse<any>({});
        }
        return new HttpResponse<any>({body: data});
      }
    ));
  }
}
