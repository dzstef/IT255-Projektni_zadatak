import { Component, View, bind, Directive } from 'angular2/core';
import {Component, FormBuilder, Validators, ControlGroup, Control, FORM_DIRECTIVES, FORM_BINDINGS} from 'angular2/common'
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import 'rxjs/Rx';
import {SearchPipe} from 'app/pipe/search';
import {PretragaKrevetPipe} from 'app/pipe/pretragaKrevet';
import {PretragaPovrsinaOdPipe} from 'app/pipe/povrsinaOd';
import {PretragaPovrsinaDoPipe} from 'app/pipe/povrsinaDo';
import {PretragaCenaOdPipe} from 'app/pipe/cenaOd';
import {PretragaCenaDoPipe} from 'app/pipe/cenaDo';
import {PretragaStrukturaPipe} from 'app/pipe/struktura';
import {PretragaVrstaPipe} from 'app/pipe/vrsta';
import {PretragaTipPipe} from 'app/pipe/tip';
import {PretragaNamestenostPipe} from 'app/pipe/namestenost';
import {PretragaInfostanPipe} from 'app/pipe/infostan';
import {Router,ROUTER_PROVIDERS,RouteConfig, ROUTER_DIRECTIVES,APP_BASE_HREF,LocationStrategy,RouteParams,ROUTER_BINDINGS} from 'angular2/router';
import {SharedService} from 'app/sharedService/sharedService';

@Component({ 
  selector: 'Pretraga', 
  templateUrl: 'app/pretraga/pretraga.html',
  pipes: [PretragaKrevetPipe, PretragaPovrsinaOdPipe, PretragaPovrsinaDoPipe, PretragaCenaOdPipe, PretragaCenaDoPipe
  PretragaStrukturaPipe, PretragaVrstaPipe, PretragaTipPipe, PretragaNamestenostPipe, PretragaInfostanPipe],
  directives: [FORM_DIRECTIVES],
  viewBindings: [FORM_BINDINGS]   
})

export class PretragaComponent { 
	povrsinaOd:number = 0;
	povrsinaDo:number = 1000000;
	cenaOd:number = 0;
	cenaDo:number = 1000000;
	struktura:String = "";
	vrsta:String = "";
	tip:String = "";
	namestenost: String = "";
	infostan: boolean = true;	
	 naziv:String = "";
    krevet:String = "";  
  loginForm: ControlGroup;
  http: Http;
  router: Router;
  postResponse: String;
  stanovi: Object[];  
  slike:String = "a";
  
	constructor(service: SharedService,builder: FormBuilder, http: Http,  router: Router) {
	this.service=service;
	this.http = http;
	this.router = router;
	var headers = new Headers();
	headers.append('Content-Type', 'application/x-www-form-urlencoded');	
	http.get('http://localhost/Projekat1/php/sviStanovi.php',{headers:headers})
		.map(res => res.json()).share()
		.subscribe(stanovi => {
			this.stanovi = stanovi.stanovi;	
		},
		err => {
			 
		}
		);
  }
  
  send(str){
    console.log(str);
    this.service.saveData(str); 
    console.log('str');
    this.router.navigate(['/Stan']);
  }
  
  
  
}
