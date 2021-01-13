import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppRoutingConstant} from "./core/constant/routing/app-routing.constant";
import {AppGuard} from "./core/guards/app.guard";

const routes: Routes = [
  {path: '', redirectTo: AppRoutingConstant.getHomeRoute.path, pathMatch: 'full'},
  {
    path: AppRoutingConstant.getPreviewRoute.path,
    loadChildren: () => import('./modules/preview/preview.module').then(m => m.PreviewModule),
    canActivate: [AppGuard]
  },
  {
    path: AppRoutingConstant.getDashboardRoute.path,
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: AppRoutingConstant.getSettingsRoute.path,
    loadChildren: () => import('./modules/settings/settings.module').then(m => m.SettingsModule)
  },
  {path: '**', redirectTo: AppRoutingConstant.getHomeRoute.path}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AppGuard
  ]
})
export class AppRoutingModule {
}
