System.register(['angular2/core', 'angular2/common', 'angular2/http', 'rxjs/Rx', 'angular2/router', 'app/sharedService/sharedService'], function(exports_1, context_1) {
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
    var core_1, common_1, http_1, router_1, sharedService_1;
    var LoginComponent;
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
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (sharedService_1_1) {
                sharedService_1 = sharedService_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(service, builder, http, router) {
                    this.service = service;
                    this.http = http;
                    this.router = router;
                    this.loginForm = builder.group({
                        username: ["", common_1.Validators.none],
                        password: ["", common_1.Validators.none],
                    });
                    if (localStorage.getItem('token') != null) {
                        this.router.parent.navigate(['./Pocetna']);
                    }
                }
                LoginComponent.prototype.onLogin = function () {
                    var _this = this;
                    var data = "username=" + this.loginForm.value.username + "&password=" + this.loginForm.value.password;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    this.http.post('http://localhost/Projekat1/php/loginservice.php', data, { headers: headers })
                        .map(function (res) { return res; })
                        .subscribe(function (data) { return _this.postResponse = data; }, function (err) { return alert(JSON.stringify(err)); }, function () {
                        if (_this.postResponse._body.indexOf("error") === -1) {
                            var obj = JSON.parse(_this.postResponse._body);
                            localStorage.setItem('token', obj.token);
                            console.log(obj.token);
                            _this.service.saveData(obj.token);
                            _this.router.parent.navigate(['./Dodavanje']);
                            console.log(_this.postResponse);
                        }
                        else {
                            var obj = JSON.parse(_this.postResponse._body);
                            document.getElementsByClassName("alert")[0].style.display = "block";
                            document.getElementsByClassName("alert")[0].innerHTML = obj.error.split("\\r\\n").join("<br/>").split("\"").join("");
                            console.log(_this.postResponse);
                        }
                    });
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'LoginPage',
                        templateUrl: 'app/login/login.html',
                        directives: [common_1.FORM_DIRECTIVES],
                        viewBindings: [common_1.FORM_BINDINGS]
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof sharedService_1.SharedService !== 'undefined' && sharedService_1.SharedService) === 'function' && _a) || Object, common_1.FormBuilder, http_1.Http, router_1.Router])
                ], LoginComponent);
                return LoginComponent;
                var _a;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map