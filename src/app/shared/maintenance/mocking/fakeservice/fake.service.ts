/**
 * Created by AC12256 on 12/15/2017.
 */
import {Injectable, OnInit} from '@angular/core';

import {MOCKDATA} from "../../../../MockData/mockResp";
import {of} from 'rxjs';


@Injectable()

export class FakeService implements OnInit {

  private slicedURL;
  private urlEndPoint


  constructor(
  ) {
  }

  ngOnInit() {
  }

  getMockResponse(url: string): any {
    return of(this.serviceResponse(url));
  }

  serviceResponse(url: string) {
    console.log('inside service resp', url);
    let contentToReturn;
    this.urlDecoder(url);
    switch (this.urlEndPoint) {
      case 'posts' : contentToReturn = MOCKDATA; break;
      default: contentToReturn = null;
    }
  console.log('content to return', contentToReturn);
    if (!contentToReturn) {
      contentToReturn = 'none';
    }
    return contentToReturn;
  }

  urlDecoder(url: string) {
    this.slicedURL = url.split('/');
    console.log('sliced url', this.slicedURL);
    this.urlEndPoint = this.slicedURL[this.slicedURL.length - 1];
    console.log('url endpoint', this.urlEndPoint);
  }
}
