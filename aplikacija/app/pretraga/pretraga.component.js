System.register(['angular2/core', 'angular2/common', 'angular2/http', 'rxjs/Rx', 'app/pipe/pretragaKrevet', 'app/pipe/povrsinaOd', 'app/pipe/povrsinaDo', 'app/pipe/cenaOd', 'app/pipe/cenaDo', 'app/pipe/struktura', 'app/pipe/vrsta', 'app/pipe/tip', 'app/pipe/namestenost', 'app/pipe/infostan', 'angular2/router', 'app/sharedService/sharedService'], function(exports_1, context_1) {
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
    var core_1, common_1, http_1, pretragaKrevet_1, povrsinaOd_1, povrsinaDo_1, cenaOd_1, cenaDo_1, struktura_1, vrsta_1, tip_1, namestenost_1, infostan_1, router_1, sharedService_1;
    var PretragaComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (pretragaKrevet_1_1) {
                pretragaKrevet_1 = pretragaKrevet_1_1;
            },
            function (povrsinaOd_1_1) {
                povrsinaOd_1 = povrsinaOd_1_1;
            },
            function (povrsinaDo_1_1) {
                povrsinaDo_1 = povrsinaDo_1_1;
            },
            function (cenaOd_1_1) {
                cenaOd_1 = cenaOd_1_1;
            },
            function (cenaDo_1_1) {
                cenaDo_1 = cenaDo_1_1;
            },
            function (struktura_1_1) {
                struktura_1 = struktura_1_1;
            },
            function (vrsta_1_1) {
                vrsta_1 = vrsta_1_1;
            },
            function (tip_1_1) {
                tip_1 = tip_1_1;
            },
            function (namestenost_1_1) {
                namestenost_1 = namestenost_1_1;
            },
            function (infostan_1_1) {
                infostan_1 = infostan_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (sharedService_1_1) {
                sharedService_1 = sharedService_1_1;
            }],
        execute: function() {
            PretragaComponent = (function () {
                function PretragaComponent(service, builder, http, router) {
                    var _this = this;
                    this.povrsinaOd = 0;
                    this.povrsinaDo = 1000000;
                    this.cenaOd = 0;
                    this.cenaDo = 1000000;
                    this.struktura = "";
                    this.vrsta = "";
                    this.tip = "";
                    this.namestenost = "";
                    this.infostan = true;
                    this.naziv = "";
                    this.krevet = "";
                    this.slike = "a";
                    this.service = service;
                    this.http = http;
                    this.router = router;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    http.get('http://localhost/Projekat1/php/sviStanovi.php', { headers: headers })
                        .map(function (res) { return res.json(); }).share()
                        .subscribe(function (stanovi) {
                        _this.stanovi = stanovi.stanovi;
                    }, function (err) {
                    });
                }
                PretragaComponent.prototype.send = function (str) {
                    console.log(str);
                    this.service.saveData(str);
                    console.log('str');
                    this.router.navigate(['/Stan']);
                };
                PretragaComponent = __decorate([
                    core_1.Component({
                        selector: 'Pretraga',
                        templateUrl: 'app/pretraga/pretraga.html',
                        pipes: [pretragaKrevet_1.PretragaKrevetPipe, povrsinaOd_1.PretragaPovrsinaOdPipe, povrsinaDo_1.PretragaPovrsinaDoPipe, cenaOd_1.PretragaCenaOdPipe, cenaDo_1.PretragaCenaDoPipe,
                            struktura_1.PretragaStrukturaPipe, vrsta_1.PretragaVrstaPipe, tip_1.PretragaTipPipe, namestenost_1.PretragaNamestenostPipe, infostan_1.PretragaInfostanPipe],
                        directives: [common_1.FORM_DIRECTIVES],
                        viewBindings: [common_1.FORM_BINDINGS]
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof sharedService_1.SharedService !== 'undefined' && sharedService_1.SharedService) === 'function' && _a) || Object, common_1.FormBuilder, http_1.Http, router_1.Router])
                ], PretragaComponent);
                return PretragaComponent;
                var _a;
            }());
            exports_1("PretragaComponent", PretragaComponent);
        }
    }
});
//# sourceMappingURL=pretraga.component.js.map