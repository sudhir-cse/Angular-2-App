import { Component } from '@angular/core';

import { ProductService } from './products/product.service';

@Component({
    selector: 'pm-app',
    template: `
        <h1>{{pageHeading}}</h1>
        <pm-products></pm-products>
    `,
    providers: [ProductService]
})
export class AppComponent { 
    pageHeading: string = 'Product List View'
}
