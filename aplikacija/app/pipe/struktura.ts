import {Pipe} from 'angular2/core';

@Pipe({
	name: 'pretragaStruktura';
})

export class PretragaStrukturaPipe{
	transform (value, [queryString]) {
    if (value==null) {
      return null;
    }
    console.log('transform');
	
    return value.filter(item=>item.struktura.toLowerCase().indexOf(queryString.toLowerCase()) !== -1);
  }
}