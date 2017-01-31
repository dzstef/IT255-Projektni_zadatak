import { Component, Directive } from 'angular2/core';
import {Component, FormBuilder, Validators, ControlGroup, Control, FORM_DIRECTIVES, FORM_BINDINGS} from 'angular2/common'
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import 'rxjs/Rx';
import {SearchPipe} from 'app/pipe/search';
import {Router, ROUTER_PROVIDERS} from 'angular2/router';

@Component({ 
  selector: 'najposeceniji', 
  templateUrl: 'app/najposeceniji/najposeceniji.html',  
  directives: [FORM_DIRECTIVES],
  viewBindings: [FORM_BINDINGS]
})

export class NajposecenijiComponent { 
  naziv:String = "";
  krevet:String = "";
  loginForm: ControlGroup;
  http: Http;
  router: Router;
  postResponse: String;
  stanovi: Object[];
  
  slike:String = "a";
  
	constructor(builder: FormBuilder, http: Http,  router: Router) {
	this.http = http;
	this.router = router;
	var headers = new Headers();
	headers.append('Content-Type', 'application/x-www-form-urlencoded');
	
	http.get('http://localhost/Projekat1/php/najtrazenijiStanovi.php',{headers:headers})
		.map(res => res.json()).share()
		.subscribe(stanovi => {
			this.stanovi = stanovi.stanovi;					
		},
		err => {
			 
		}
		);
  }
}