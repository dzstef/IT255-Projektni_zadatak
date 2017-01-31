import { Component, Directive } from 'angular2/core';
import {Component, FormBuilder, Validators, ControlGroup, Control, FORM_DIRECTIVES, FORM_BINDINGS} from 'angular2/common'
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import 'rxjs/Rx';
import {Router, ROUTER_PROVIDERS} from 'angular2/router'
import {SharedService} from 'app/sharedService/sharedService';
@Component({ 
  selector: 'Dodavanje', 
  templateUrl: 'app/dodavanje/dodavanje.html',
  directives: [FORM_DIRECTIVES],
  viewBindings: [FORM_BINDINGS]
})

export class DodavanjeComponent { 
registerForm: ControlGroup;
  http: Http;
  router: Router;
  postResponse: String;
  select: Int = 1;
  selectStruktura: Int = 0;
  selectTip: Int = 1;
  selectVrsta: Int = 1;
  selectFrizider: Int = 1;
  selectZamrzivac: Int = 1;
  selectKlima: Int = 1;
  selectSporet: Int = 1;
  selectMasina: Int = 1;
  selectOrmar: Int = 1;  
  selectLokacija: Int = 1;
  
  constructor(service:SharedService, builder: FormBuilder, http: Http,  router: Router) {
	this.http = http;
	this.router = router;
	this.service = service;
	
    this.registerForm = builder.group({
     cena: ["", Validators.none],
	 namestenost: [this.select, Validators.none],
	 struktura: [this.selectStruktura, Validators.none],
	 tip: [this.selectTip, Validators.none],
	 vrsta: [this.selectVrsta, Validators.none],
	 frizider: [this.selectFrizider, Validators.none],
	 zamrzivac: [this.selectZamrzivac, Validators.none],
	 klima: [this.selectKlima, Validators.none],
	 sporet: [this.selectSporet, Validators.none],
	 masina: [this.selectMasina, Validators.none],
	 ormar: [this.selectOrmar, Validators.none],
	 lokacija: [this.selectLokacija, Validators.none],
	 infostan: ["", Validators.none],
	 grejanje: ["", Validators.none],
	 internet: ["", Validators.none],
	 kablovska: ["", Validators.none],
	 telefon: ["", Validators.none],
	 struja: ["", Validators.none],
	 slika: ["", Validators.none]
   });
   
   
  }
  
  dodaj(): void {
	var data = "cena="+this.registerForm.value.cena+"&struktura_id="+this.selectStruktura+"&namestenost_id="+
	this.select+"&tip_id="+	this.selectTip+
	"&lokacija_id="+this.selectLokacija+
	"&vrsta_id="+this.selectVrsta+
	"&frizider="+	this.selectFrizider+
	"&slika="+	this.registerForm.value.slika+
	"&zamrzivac="+	this.selectZamrzivac+
	"&klima="+	this.selectKlima+
	"&sporet="+	this.selectSporet+
	"&masina="+	this.selectMasina+
	"&ormar="+	this.selectOrmar+
	"&infostan="+	this.registerForm.value.infostan+
	"&grejanje="+	this.registerForm.value.grejanje+
	"&internet="+	this.registerForm.value.internet+
	"&kablovska="+	this.registerForm.value.kablovska+
	"&telefon="+	this.registerForm.value.telefon+
	"&struja="+	this.registerForm.value.struja+
	"&aspirator=1&vlasnik_id=1&opis=nekiop&slika=dsf";
	var headers = new Headers();
	headers.append('Content-Type', 'application/x-www-form-urlencoded');
	console.log(this.service.getData());
		
	this.http.post('http://localhost/Projekat1/php/dodavanjeservis.php',data, {headers:headers})
    .map(res => res)
    .subscribe( data => this.postResponse = data,
	err => {
		var obj = JSON.parse(err._body);
		document.getElementsByClassName("alert")[0].style.display = "block";
		document.getElementsByClassName("alert")[0].innerHTML = obj.error.split("\\r\\n").join("<br/>").split("\"").join("");
		console.log(this.postResponse);
		console.log(data);
	},
	() => { 
		var obj = JSON.parse(this.postResponse._body);		
	    this.router.parent.navigate(['./Pocetna']);
			console.log(this.postResponse);
			console.log(obj);
	 }
	);
	
  }
  
}