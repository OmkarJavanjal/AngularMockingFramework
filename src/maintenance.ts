import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import {MaintenanceModule} from './app/shared/maintenance/maintenance.module';

platformBrowserDynamic().bootstrapModule(MaintenanceModule)
  .catch(err => console.error(err));
