import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model';

//Decoradores, dan contexto a angular para saber si es un componente o un pipe, etc.
@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'
})
export class ProductComponent {
    @Input() product: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    addCart(){
        console.log('añadir al carrito');
        this.productClicked.emit(this.product.id);
    }
}