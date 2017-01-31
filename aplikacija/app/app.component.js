System.register(['angular2/core', 'angular2/router', 'app/pocetna/pocetna.component', 'app/pretraga/pretraga.component', 'app/stan/stan.component', 'app/register/register.component', 'app/dodavanje/dodavanje.component', 'app/login/login.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, pocetna_component_1, pretraga_component_1, stan_component_1, register_component_1, dodavanje_component_1, login_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (pocetna_component_1_1) {
                pocetna_component_1 = pocetna_component_1_1;
            },
            function (pretraga_component_1_1) {
                pretraga_component_1 = pretraga_component_1_1;
            },
            function (stan_component_1_1) {
                stan_component_1 = stan_component_1_1;
            },
            function (register_component_1_1) {
                register_component_1 = register_component_1_1;
            },
            function (dodavanje_component_1_1) {
                dodavanje_component_1 = dodavanje_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(router) {
                    var _this = this;
                    this.router = router;
                    router.subscribe(function (val) {
                        if (localStorage.getItem('token') !== null) {
                            _this.isAuth = "yes";
                        }
                        else {
                            _this.isAuth = "no";
                        }
                    });
                }
                AppComponent.prototype.onLogout = function () {
                    localStorage.removeItem("token");
                    this.router.navigate(['./Pocetna']);
                    if (localStorage.getItem('token') !== null) {
                        this.isAuth = "yes";
                    }
                    else {
                        this.isAuth = "no";
                    }
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'moja-aplikacija',
                        templateUrl: 'app/router.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'Pocetna', component: pocetna_component_1.PocetnaComponent, useAsDefault: true },
                        { path: '/pretraga', name: 'Pretraga', component: pretraga_component_1.PretragaComponent },
                        { path: '/stan', name: 'Stan', component: stan_component_1.StanComponent },
                        { path: '/login', name: 'LoginPage', component: login_component_1.LoginComponent },
                        { path: '/register', name: 'RegisterPage', component: register_component_1.RegisterComponent },
                        { path: '/dodavanje', name: 'Dodavanje', component: dodavanje_component_1.DodavanjeComponent },
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map