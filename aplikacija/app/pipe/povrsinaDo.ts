import {Pipe} from 'angular2/core';

@Pipe({
	name: 'pretragaPovrsinaDo';
})

export class PretragaPovrsinaDoPipe{
	transform (value, [queryString]) {
    if (value==null) {
      return null;
    }
    console.log('transform');
	
    return value.filter(item=>item.povrsina <= Number(queryString));
	
	
  }
}