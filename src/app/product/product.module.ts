import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from "./product-routing.module";

//Importar modulos aca
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
    declarations: [
        ProductsComponent,
        ProductComponent,
        ProductDetailComponent
    ],
    imports: [
        ProductRoutingModule,
        FormsModule,
        CommonModule,
        SharedModule,
        MaterialModule
    ]
})
export class ProductModule {

}