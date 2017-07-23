import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { provideRouter, RouterConfig } from '@angular/router';

import { AppComponent } from './app.component';
import { Root } from './components/root/root.component';

const appRoutes: RouterConfig = [
    {
        path: 'user',
        component: AppComponent
    }
];

const routeProviders = [
    provideRouter(appRoutes)
];

bootstrap(Root, [HTTP_PROVIDERS, routeProviders]);