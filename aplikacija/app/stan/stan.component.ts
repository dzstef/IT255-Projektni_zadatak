import {Component,View,bind} from 'angular2/core';
import {SharedService} from 'app/sharedService/sharedService';
import {Router,ROUTER_PROVIDERS,RouteConfig, ROUTER_DIRECTIVES,APP_BASE_HREF,LocationStrategy,RouteParams,ROUTER_BINDINGS} from 'angular2/router';
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import 'rxjs/Rx';
@Component({ 
  selector: 'Stan', 
  templateUrl: 'app/stan/stan.html'
  
})

export class StanComponent { 
http: Http;
  postResponse: String;
  sid: String;
  stanovi: Object[];
  slike: Object[];
  edited: boolean = false;
  podaci2: boolean = true;
  infstan: int = 5;
  constructor(http: Http,router:Router,service:SharedService)
  {
	this.http = http;
    this.router=router;
    this.service=service;
    console.log('cone called');
    this.sid=service.getData();	
	this.dodavanjeSobe();
	this.dod();
  } 
  prikaziP1()
  {
	this.edited=true;
	this.podaci2=false;	
  }    
  prikaziP2()
  {
  this.edited=false;
	this.podaci2=true;
    }  

   dodavanjeSobe(): void {
	var data = "sidStana="+this.sid;
	var headers = new Headers();
	headers.append('Content-Type', 'application/x-www-form-urlencoded');
	this.http.post('http://localhost/Projekat1/php/selektovanStanBezSlika.php',data, {headers:headers})
    .map(res => res.json())
    .subscribe( stanovi => {
			this.stanovi = stanovi.stanovi;	
		},
	err => alert(JSON.stringify(err)),
	() => { 
	
			
		console.log(this.postResponse);
	 console.log(this.stanovi);
	 }
	);
	
  }
  
  dod(): void {
	var data = "sidStana="+this.sid;
	var headers = new Headers();
	headers.append('Content-Type', 'application/x-www-form-urlencoded');
	this.http.post('http://localhost/Projekat1/php/selektovanStan.php',data, {headers:headers})
    .map(res => res.json())
    .subscribe( stanovi => {
			this.slike = stanovi.stanovi;	
		},
	err => alert(JSON.stringify(err)),
	() => { 
	
			
		console.log(this.postResponse);
	 console.log(this.stanovi);
	 }
	);
	
  }
  
}