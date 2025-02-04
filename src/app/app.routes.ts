import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { DataBindingComponent } from './component/data-binding/data-binding.component';
import { ListEmployeeComponent } from './component/list-employee/list-employee.component';
import { StructuralDirComponent } from './component/directive/structural-dir/structural-dir.component';
import { IfelseComponent } from './component/controlflow/ifelse/ifelse.component';

export const routes: Routes = [
    {
        path: 'Add-Employee',
        component: AddEmployeeComponent
    },
    {
        path: 'Data-Binding',
        component: DataBindingComponent
    },
    {
        path: 'List-Employee',
        component: ListEmployeeComponent
    },
    {
        path: 'Structural-dir',
        component: StructuralDirComponent
    },
    {
        path: 'if-else',
        component: IfelseComponent
    }

];
