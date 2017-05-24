import {Component, OnInit} from '@angular/core';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    moduleId: module.id,
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']

})
export class ProductListComponent implements OnInit{ 
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    filterBy: string;
    products: IProduct[];
    errorMessage: string;

    constructor(private _productService: ProductService){

    }

    ngOnInit(){
        this._productService.getProducts()
            .subscribe(products => this.products = products,
                        error => this.errorMessage = <any>error);
    }

    toggleOnClick(): void {
        this.showImage = !this.showImage;
    }

    onRatingClicked(message: string){
        this.pageTitle = message;
    }
}