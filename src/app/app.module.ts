import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { CounterComponent } from './counter/counter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListProductComponent } from './list-product/list-product.component';
import { ListProductCardComponent } from './product/list-product-card/list-product-card.component';
import { SortPipe } from './pipes/sort.pipe';
import { ColorDirective } from './directives/color.directive';
import { ProductComponent } from './list-product/product/product.component';
import { WeatherComponent } from './weather/weather.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { ErrorComponent } from './error/error.component';
import { TemplateUserRegistrationComponent } from './template-user-registration/template-user-registration.component';
import { ReactiveUserRegistrationComponent } from './reactive-user-registration/reactive-user-registration.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { MustMatchDirective } from './directives/must-match.directive';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    CounterComponent,
    ListProductComponent,
    ListProductCardComponent,
    ColorDirective,
    SortPipe,
    ProductComponent,
    WeatherComponent,
    HeaderComponent,
    EditProductComponent,
    ErrorComponent,
    TemplateUserRegistrationComponent,
    ReactiveUserRegistrationComponent,
    AddProductComponent,
    MustMatchDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
