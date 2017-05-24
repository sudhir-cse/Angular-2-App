import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
        <h1>{{pageHeading}}</h1>
        <pm-products></pm-products>
    `
})
export class AppComponent { 
    pageHeading: string = 'Product List View'
}
