import {Base} from './base';

export class SampleUrl extends Base {

  getUrls() {
    return {
      getUser: this.getBaseUrl() + '/posts' /*+ this.getTargetId('local')*/
    };
  }
}

