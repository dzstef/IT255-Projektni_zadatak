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
    var DodavanjeComponent;
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
            DodavanjeComponent = (function () {
                function DodavanjeComponent(service, builder, http, router) {
                    this.select = 1;
                    this.selectStruktura = 0;
                    this.selectTip = 1;
                    this.selectVrsta = 1;
                    this.selectFrizider = 1;
                    this.selectZamrzivac = 1;
                    this.selectKlima = 1;
                    this.selectSporet = 1;
                    this.selectMasina = 1;
                    this.selectOrmar = 1;
                    this.selectLokacija = 1;
                    this.http = http;
                    this.router = router;
                    this.service = service;
                    this.registerForm = builder.group({
                        cena: ["", common_1.Validators.none],
                        namestenost: [this.select, common_1.Validators.none],
                        struktura: [this.selectStruktura, common_1.Validators.none],
                        tip: [this.selectTip, common_1.Validators.none],
                        vrsta: [this.selectVrsta, common_1.Validators.none],
                        frizider: [this.selectFrizider, common_1.Validators.none],
                        zamrzivac: [this.selectZamrzivac, common_1.Validators.none],
                        klima: [this.selectKlima, common_1.Validators.none],
                        sporet: [this.selectSporet, common_1.Validators.none],
                        masina: [this.selectMasina, common_1.Validators.none],
                        ormar: [this.selectOrmar, common_1.Validators.none],
                        lokacija: [this.selectLokacija, common_1.Validators.none],
                        infostan: ["", common_1.Validators.none],
                        grejanje: ["", common_1.Validators.none],
                        internet: ["", common_1.Validators.none],
                        kablovska: ["", common_1.Validators.none],
                        telefon: ["", common_1.Validators.none],
                        struja: ["", common_1.Validators.none],
                        slika: ["", common_1.Validators.none]
                    });
                }
                DodavanjeComponent.prototype.dodaj = function () {
                    var _this = this;
                    var data = "cena=" + this.registerForm.value.cena + "&struktura_id=" + this.selectStruktura + "&namestenost_id=" +
                        this.select + "&tip_id=" + this.selectTip +
                        "&lokacija_id=" + this.selectLokacija +
                        "&vrsta_id=" + this.selectVrsta +
                        "&frizider=" + this.selectFrizider +
                        "&slika=" + this.registerForm.value.slika +
                        "&zamrzivac=" + this.selectZamrzivac +
                        "&klima=" + this.selectKlima +
                        "&sporet=" + this.selectSporet +
                        "&masina=" + this.selectMasina +
                        "&ormar=" + this.selectOrmar +
                        "&infostan=" + this.registerForm.value.infostan +
                        "&grejanje=" + this.registerForm.value.grejanje +
                        "&internet=" + this.registerForm.value.internet +
                        "&kablovska=" + this.registerForm.value.kablovska +
                        "&telefon=" + this.registerForm.value.telefon +
                        "&struja=" + this.registerForm.value.struja +
                        "&aspirator=1&vlasnik_id=1&opis=nekiop&slika=dsf";
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    console.log(this.service.getData());
                    this.http.post('http://localhost/Projekat1/php/dodavanjeservis.php', data, { headers: headers })
                        .map(function (res) { return res; })
                        .subscribe(function (data) { return _this.postResponse = data; }, function (err) {
                        var obj = JSON.parse(err._body);
                        document.getElementsByClassName("alert")[0].style.display = "block";
                        document.getElementsByClassName("alert")[0].innerHTML = obj.error.split("\\r\\n").join("<br/>").split("\"").join("");
                        console.log(_this.postResponse);
                        console.log(data);
                    }, function () {
                        var obj = JSON.parse(_this.postResponse._body);
                        _this.router.parent.navigate(['./Pocetna']);
                        console.log(_this.postResponse);
                        console.log(obj);
                    });
                };
                DodavanjeComponent = __decorate([
                    core_1.Component({
                        selector: 'Dodavanje',
                        templateUrl: 'app/dodavanje/dodavanje.html',
                        directives: [common_1.FORM_DIRECTIVES],
                        viewBindings: [common_1.FORM_BINDINGS]
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof sharedService_1.SharedService !== 'undefined' && sharedService_1.SharedService) === 'function' && _a) || Object, common_1.FormBuilder, http_1.Http, router_1.Router])
                ], DodavanjeComponent);
                return DodavanjeComponent;
                var _a;
            }());
            exports_1("DodavanjeComponent", DodavanjeComponent);
        }
    }
});
//# sourceMappingURL=dodavanje.component.js.map