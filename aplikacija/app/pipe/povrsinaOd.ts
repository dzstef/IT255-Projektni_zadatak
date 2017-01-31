import {Pipe} from 'angular2/core';

@Pipe({
	name: 'pretragaPovrsinaOd';
})

export class PretragaPovrsinaOdPipe{
	transform (value, [queryString]) {
    if (value==null) {
      return null;
    }
    console.log('transform');
	
    return value.filter(item=>item.povrsina >= Number(queryString));
	
	
  }
}