import {Pipe} from 'angular2/core';

@Pipe({
	name: 'pretragaVrsta';
})

export class PretragaVrstaPipe{
	transform (value, [queryString]) {
    if (value==null) {
      return null;
    }
    console.log('transform');
	
    return value.filter(item=>item.vrsta.toLowerCase().indexOf(queryString.toLowerCase()) !== -1);
  }
}