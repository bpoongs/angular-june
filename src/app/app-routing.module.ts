import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { ErrorComponent } from './error/error.component';
import { HelloComponent } from './hello/hello.component';
import { ListProductCardComponent } from './product/list-product-card/list-product-card.component';
import { ListProductComponent } from './list-product/list-product.component';
import { WeatherComponent } from './weather/weather.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { TemplateUserRegistrationComponent } from './template-user-registration/template-user-registration.component';
import { ReactiveUserRegistrationComponent } from './reactive-user-registration/reactive-user-registration.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/hello',
    pathMatch: 'full'
  },
  {
    path: 'counter',
    component: CounterComponent
  },
  {
    path: 'hello',
    component: HelloComponent
  },
  {
    path: 'list-product',
    component: ListProductComponent
  },
  {
    path: 'list-product-card',
    component: ListProductCardComponent
  },
  {
    path: 'weather',
    component: WeatherComponent
  },
  {
    //path: 'edit-product',
    path: 'edit-product/:prodId',
    component: EditProductComponent
  },
  {
    path: 'add-product',
    component: AddProductComponent
  },
  {
    path: 'template-register',
    component: TemplateUserRegistrationComponent
  },
  {
    path: 'reactive-register',
    component: ReactiveUserRegistrationComponent
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
