import {Pipe} from 'angular2/core';

@Pipe({
	name: 'pretragaTip';
})

export class PretragaTipPipe{
	transform (value, [queryString]) {
    if (value==null) {
      return null;
    }
    console.log('transform');
	
    return value.filter(item=>item.tip.toLowerCase().indexOf(queryString.toLowerCase()) !== -1);
  }
}