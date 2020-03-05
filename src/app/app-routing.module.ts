import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CodeGuard } from './guards/code.guard';
import { CodeComponent } from './pages/code/code.component';

const routes: Routes = [
  {
    path: 'public',
    loadChildren: () =>
      import('./modules/main/main.module').then(m => m.MainModule),
    canLoad: [CodeGuard],
  },
  {
    path: 'code',
    component: CodeComponent,
    pathMatch: 'full',
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin/admin.module').then(m => m.AdminModule),
    canLoad: [AdminGuard],
  },
  { path: '404', component: NotFoundComponent },
  { path: '', component: CodeComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
