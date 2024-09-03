import { Routes } from '@angular/router';
import { Urls } from './pages/const/urls';
import { TodoListComponent } from './pages/component/todo-list/todo-list.component';
import { TodoDadComponent } from './pages/component/todo-dad/todo-dad.component';
import { DashboardComponent } from './pages/component/dashboard/dashboard.component';

export const routes: Routes = [
    {path: '', redirectTo: Urls.SLASH + Urls.PATH_DASHBOARD, pathMatch: 'full'},
    {path: Urls.PATH_DASHBOARD, component: DashboardComponent},
    {path: Urls.PATH_TODO_LIST, component: TodoListComponent},
    {path: Urls.PATH_TODO_DAD, component: TodoDadComponent},
];
