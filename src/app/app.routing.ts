import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataTableComponent } from './datatable/datatable.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/datatable',
        pathMatch: 'full'
    },
    {
        path: 'datatable',
        component: DataTableComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
