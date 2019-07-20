import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { RouterModule } from '@angular/router';

 // Components
import { SideNavComponent } from './side-nav/side-nav.component';
import { ProductsComponent } from './products/products.component';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { OrdersComponent } from './orders/orders.component';
import { ConfigureComponent } from './configure/configure.component';
import { UsersComponent } from './users/users.component';

const COMPONENTS = [
  SideNavComponent,
  ProductsComponent,
  AddNewProductComponent,
  EditProductComponent,
  OrdersComponent,
  ConfigureComponent,
  UsersComponent,
];

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
  ],
  declarations: [
    ...COMPONENTS,
    UsersComponent,
    ConfigureComponent,
  ],
  exports: [
    ...COMPONENTS,
  ],
})
export class SharedModule { }
