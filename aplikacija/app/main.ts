import { bootstrap } from 'angular2/platform/browser';
import { bind } from 'angular2/core';
import { Http, Headers, HTTP_PROVIDERS } from 'angular2/http';
import {Router,ROUTER_PROVIDERS,RouteConfig, ROUTER_DIRECTIVES,APP_BASE_HREF,LocationStrategy,RouteParams,ROUTER_BINDINGS} from 'angular2/router';
import { AppComponent } from './app.component';
import {SharedService} from 'app/sharedService/sharedService';
import { ONamaComponent } from 'app/onama/onama.component';
bootstrap(AppComponent, [SharedService,
    ROUTER_PROVIDERS,bind(APP_BASE_HREF).toValue(location.pathname),HTTP_PROVIDERS,ROUTER_PROVIDERS]);
