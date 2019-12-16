import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakePage } from './make.page';

const routes: Routes = [
  {
    path: '',
    component: MakePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class MakePageRoutingModule { }
