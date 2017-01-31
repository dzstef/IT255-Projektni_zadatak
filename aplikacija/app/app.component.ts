import {Component, bind} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import  {Router,ROUTER_PROVIDERS,RouteConfig, ROUTER_DIRECTIVES,APP_BASE_HREF,LocationStrategy,RouteParams,ROUTER_BINDINGS} from 'angular2/router';
import {Pipe} from 'angular2/core';
import { PocetnaComponent } from 'app/pocetna/pocetna.component';
import { PretragaComponent } from 'app/pretraga/pretraga.component';
import { StanComponent } from 'app/stan/stan.component';
import {SharedService} from 'app/sharedService/sharedService';
import { RegisterComponent } from 'app/register/register.component';
import { DodavanjeComponent } from 'app/dodavanje/dodavanje.component';
import { LoginComponent } from 'app/login/login.component';
@Component({
    selector: 'moja-aplikacija',
	templateUrl: 'app/router.html',
	directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([ 
  {path:'/' name:'Pocetna', component: PocetnaComponent, useAsDefault: true},
  {path:'/pretraga', name:'Pretraga', component: PretragaComponent},
  {path:'/stan', name:'Stan', component: StanComponent},
  {path:'/login', name:'LoginPage', component: LoginComponent},
  {path:'/register', name:'RegisterPage', component: RegisterComponent},
  {path:'/dodavanje', name:'Dodavanje', component: DodavanjeComponent},  
])

export class AppComponent {
	router: Router;
	isAuth: String;	
	constructor(router: Router) {
		this.router = router;
		router.subscribe((val) => {		  
		  if(localStorage.getItem('token') !== null){
				this.isAuth = "yes";
		  }else{
			    this.isAuth = "no";
		  }
		  });
	}
	
 onLogout(): void {
	localStorage.removeItem("token");
	 this.router.navigate(['./Pocetna']);
	if(localStorage.getItem('token') !== null){
		this.isAuth = "yes";
	}else{
		this.isAuth = "no";
	}
 }
}

   
