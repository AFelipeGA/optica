import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';


const appRoutes: Routes = [
    {
        path: 'productos',
        loadChildren: './products/products.module#ProductsModule'
    },
    {
        path: '',
        pathMatch: 'full',
        loadChildren: './home/home.module#HomeModule'
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],

    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}
