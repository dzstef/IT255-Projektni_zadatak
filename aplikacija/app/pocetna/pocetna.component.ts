import { Component, Directive } from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {SearchPipe} from 'app/pipe/search';
import 'rxjs/Rx';
import { NajposecenijiComponent } from 'app/najposeceniji/najposeceniji.component';


@Component({ 
  selector: 'Pocetna', 
  templateUrl: 'app/pocetna/pocetna.html',
  directives: [NajposecenijiComponent]
})

export class PocetnaComponent{
}