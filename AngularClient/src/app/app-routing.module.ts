import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { UsersCrudComponent } from './views/users-crud/users-crud.component';
import { UserUpdateComponent } from './components/users/user-update/user-update.component';
import { UserDeleteComponent } from './components/users/user-delete/user-delete.component';
import { UserReadComponent } from './components/users/user-read/user-read.component';


const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "users",
        component: UsersCrudComponent
    },
    {
        path: "users/update/:id",
        component: UserUpdateComponent
    },
    {
        path: "users/delete/:id",
        component: UserDeleteComponent
    },
    {
        path: "users/detail/:id",
        component: UserReadComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
