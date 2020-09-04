import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MaintenanceComponentComponent} from '../../main/maintenance-component/maintenance-component.component';

export const MRoutes: Routes = [
  {
    path: 'mocking',
    component: MaintenanceComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(MRoutes)],
  exports: [RouterModule]
})

export class AppRoutingMaintenanceModule {}
