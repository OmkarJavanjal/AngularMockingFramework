export class Base {
  constructor(private baseUrl: string, private envName: string) {}


  getTargetId(id) {
    let targetEnv;
    switch (this.envName) {
      case 'local':
        targetEnv = 'targetlocal';
        break;
      case 'qa':
        targetEnv = 'targetqa';
        break;
      default:
        targetEnv = '';
        break;
    }
    //return 'client_id=' + this.getTargetId(id) + targetEnv;
  }

  getBaseUrl() {
    return this.baseUrl;
  }

  getEnvName() {
    return this.envName;
  }

}
