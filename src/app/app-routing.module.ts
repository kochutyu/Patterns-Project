import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppRoutingConstant} from "./core/constant/routing/app-routing.constant";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: AppRoutingConstant.getHomeRoute.route.join('/'),
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: AppRoutingConstant.getAdminPanelRoute.route.join('/'),
    loadChildren: () => import('./modules/admin-panel/admin-panel.module').then(m => m.AdminPanelModule)
  },
  {
    path: AppRoutingConstant.getSettingsRoute.route.join('/'),
    loadChildren: () => import('./modules/settings/settings.module').then(m => m.SettingsModule)
  },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  constructor() {
    console.log(AppRoutingConstant.getHomeRoute.route.join('/'))
  }
}
