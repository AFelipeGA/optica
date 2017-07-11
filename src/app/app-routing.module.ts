import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';


const appRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'app',
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
