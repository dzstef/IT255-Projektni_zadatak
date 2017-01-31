import {Pipe} from 'angular2/core';

@Pipe({
	name: 'pretragaNamestenost';
})

export class PretragaNamestenostPipe{
	transform (value, [queryString]) {
    if (value==null) {
      return null;
    }
    console.log('transform');
	
    return value.filter(item=>item.namestenost.toLowerCase().indexOf(queryString.toLowerCase()) !== -1);
  }
}