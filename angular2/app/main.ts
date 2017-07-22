import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
    {
        path: '/',
        component: AppComponent
    }
];

bootstrap(appRoutes, [HTTP_PROVIDERS]);