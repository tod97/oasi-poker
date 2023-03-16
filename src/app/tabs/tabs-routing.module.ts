import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'ranking',
        loadChildren: () =>
          import('../ranking/ranking.module').then((m) => m.RankingPageModule),
      },
      {
        path: 'info',
        loadChildren: () =>
          import('../info/info.module').then((m) => m.InfoPageModule),
      },
      {
        path: '',
        redirectTo: '/tabs/ranking',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/ranking',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
