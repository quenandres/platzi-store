import { Component, 
    Input, 
    Output, 
    EventEmitter, 
    OnChanges, 
    SimpleChanges, 
    OnInit, 
    DoCheck, 
    OnDestroy 
} from '@angular/core';
import { Product } from '../../../product.model';
import { ProductsService } from '../../../core/services/products/products.service';

//Decoradores, dan contexto a angular para saber si es un componente o un pipe, etc.
@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy {
    @Input() product: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    today = new Date();

    constructor(
        private productsService: ProductsService
    ) {

    }

    /* ngOnChanges(changes: SimpleChanges) {
        console.log('2. ngOnChanges');
        console.log(changes);        
    } */

    ngOnInit() {

    }

    ngDoCheck() {

    }

    ngOnDestroy() {

    }

    addCart(){

        this.productClicked.emit(this.product.id);
    }
}