System.register(['angular2/core', 'app/sharedService/sharedService', 'angular2/router', 'angular2/http', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, sharedService_1, router_1, http_1;
    var StanComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (sharedService_1_1) {
                sharedService_1 = sharedService_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            StanComponent = (function () {
                function StanComponent(http, router, service) {
                    this.edited = false;
                    this.podaci2 = true;
                    this.infstan = 5;
                    this.http = http;
                    this.router = router;
                    this.service = service;
                    console.log('cone called');
                    this.sid = service.getData();
                    this.dodavanjeSobe();
                    this.dod();
                }
                StanComponent.prototype.prikaziP1 = function () {
                    this.edited = true;
                    this.podaci2 = false;
                };
                StanComponent.prototype.prikaziP2 = function () {
                    this.edited = false;
                    this.podaci2 = true;
                };
                StanComponent.prototype.dodavanjeSobe = function () {
                    var _this = this;
                    var data = "sidStana=" + this.sid;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    this.http.post('http://localhost/Projekat1/php/selektovanStanBezSlika.php', data, { headers: headers })
                        .map(function (res) { return res.json(); })
                        .subscribe(function (stanovi) {
                        _this.stanovi = stanovi.stanovi;
                    }, function (err) { return alert(JSON.stringify(err)); }, function () {
                        console.log(_this.postResponse);
                        console.log(_this.stanovi);
                    });
                };
                StanComponent.prototype.dod = function () {
                    var _this = this;
                    var data = "sidStana=" + this.sid;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    this.http.post('http://localhost/Projekat1/php/selektovanStan.php', data, { headers: headers })
                        .map(function (res) { return res.json(); })
                        .subscribe(function (stanovi) {
                        _this.slike = stanovi.stanovi;
                    }, function (err) { return alert(JSON.stringify(err)); }, function () {
                        console.log(_this.postResponse);
                        console.log(_this.stanovi);
                    });
                };
                StanComponent = __decorate([
                    core_1.Component({
                        selector: 'Stan',
                        templateUrl: 'app/stan/stan.html'
                    }), 
                    __metadata('design:paramtypes', [http_1.Http, router_1.Router, (typeof (_a = typeof sharedService_1.SharedService !== 'undefined' && sharedService_1.SharedService) === 'function' && _a) || Object])
                ], StanComponent);
                return StanComponent;
                var _a;
            }());
            exports_1("StanComponent", StanComponent);
        }
    }
});
//# sourceMappingURL=stan.component.js.map