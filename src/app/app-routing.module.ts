import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppRoutingConstant} from "./core/constant/routing/app-routing.constant";

const routes: Routes = [
  {path: '', redirectTo: AppRoutingConstant.getHomeRoute.route.join('/'), pathMatch: 'full'},
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
  {path: '**', redirectTo: AppRoutingConstant.getHomeRoute.route.join('/')}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
