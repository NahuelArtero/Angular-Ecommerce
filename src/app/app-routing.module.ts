import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { RegisterComponent } from './views/register/register.component';
import { LoginComponent } from './views/login/login.component';
import { ProductDetailComponent } from './views/product-detail/product-detail.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"register",component: RegisterComponent, canActivate:[AuthGuard]},
  {path:"login", component: LoginComponent, canActivate:[AuthGuard]},
  {path:"product/:id",component: ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
