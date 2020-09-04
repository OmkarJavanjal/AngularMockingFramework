import {SampleUrl} from "./urlFactory/sample-url";

export const environment = {
  production: false
};

export class Environment {
  constructor(private baseUrl: string,
              private envName: string,
              private mockingSet: boolean,
              private prodState: boolean,
  ) {
  }

  getEnv() {
    return {
      //Common Application parameters
      production: this.prodState,
      mocking: this.mockingSet,
      envName: this.envName,
      myBaseUrl: this.baseUrl,

      //New way to incorporate the services

      sampleURL: new SampleUrl(this.baseUrl, this.envName).getUrls()
    };
  }
}
