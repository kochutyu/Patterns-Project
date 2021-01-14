import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppRoutingConstant} from "./core/constant/routing/app-routing.constant";
import {AppPreviewGuard} from "./core/guards/app-preview.guard";

const routes: Routes = [
  {path: '', redirectTo: AppRoutingConstant.getHomeRoute.path, pathMatch: 'full'},
  {
    path: AppRoutingConstant.getPreviewRoute.path,
    loadChildren: () => import('./modules/preview/preview.module').then(m => m.PreviewModule),
    canActivate: [AppPreviewGuard]
  },
  {
    path: AppRoutingConstant.getDashboardRoute.path,
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AppPreviewGuard]
  },
  {
    path: AppRoutingConstant.getSettingsRoute.path,
    loadChildren: () => import('./modules/settings/settings.module').then(m => m.SettingsModule),
    canActivate: [AppPreviewGuard]
  },
  {path: '**', redirectTo: AppRoutingConstant.getHomeRoute.path}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AppPreviewGuard
  ]
})
export class AppRoutingModule {
}
