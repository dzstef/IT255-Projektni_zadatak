import {Pipe} from 'angular2/core';

@Pipe({
	name: 'pretragaCenaDo';
})

export class PretragaCenaDoPipe{
	transform (value, [queryString]) {
    if (value==null) {
      return null;
    }
    console.log('transform');
	
    return value.filter(item=>item.cena <= Number(queryString));
	
	
  }
}