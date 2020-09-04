import {Environment} from './environment';

export class EnvironmentLoader {

  static getEnvironmentFile(): any {
    const url = document.location.hostname;
    let baseUrl = '';
    let mockingSet = true;
    if (sessionStorage.getItem('mocking') ) {
      mockingSet = sessionStorage.getItem('mocking') === 'true' ? true : false;
    }
    const prodState = true;
    let envName = 'local';
    if (url.includes('local')) {
      baseUrl = 'https://my-json-server.typicode.com/OmkarJavanjal/onlineFakeAPIAndDatabase';
      envName = 'local';
    } else if (url.includes('xyz') || url.includes('jku')) {
      baseUrl = 'https://my-json-server.typicode.com/OmkarJavanjal/onlineFakeAPIAndDatabase';
      envName = 'xyz';
    }

    return new Environment(baseUrl,  envName, mockingSet, prodState).getEnv();
  }
}
export let env: any = EnvironmentLoader.getEnvironmentFile();
