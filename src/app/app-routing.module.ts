import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BatchComponent} from './batch/batch.component';
import {NewBatchComponent} from './new-batch/new-batch.component';
import {ExecBatchComponent} from './exec-batch/exec-batch.component';
import { LoginComponent } from './login/login.component';
import {BatchHistoryComponent} from './batch-history/batch-history.component';

const routes: Routes = [
  {
  path:"batch",component:BatchComponent
},
  {
    path:"new-batch",component:NewBatchComponent
  },

  {
    path:"Exec-Batch",component:ExecBatchComponent
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"History-batch",component:BatchHistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
