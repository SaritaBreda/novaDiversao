import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'bloodshot',
    loadChildren: () => import('./filmes/bloodshot/bloodshot.module').then( m => m.BloodshotPageModule)
  },
  {
    path: 'aves-de-rapina',
    loadChildren: () => import('./filmes/aves-de-rapina/aves-de-rapina.module').then( m => m.AvesDeRapinaPageModule)
  },
  {
    path: 'riverdale',
    loadChildren: () => import('./series/riverdale/riverdale.module').then( m => m.RiverdalePageModule)
  },
  {
    path: 'the-walking-dead',
    loadChildren: () => import('./series/the-walking-dead/the-walking-dead.module').then( m => m.TheWalkingDeadPageModule)
  },
  {
    path: 'os-simpsons',
    loadChildren: () => import('./desenhos/os-simpsons/os-simpsons.module').then( m => m.OsSimpsonsPageModule)
  },
  {
    path: 'hora-de-aventura',
    loadChildren: () => import('./desenhos/hora-de-aventura/hora-de-aventura.module').then( m => m.HoraDeAventuraPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
