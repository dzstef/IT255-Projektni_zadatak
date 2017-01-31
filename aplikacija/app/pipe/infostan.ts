import {Pipe} from 'angular2/core';

@Pipe({
	name: 'pretragaInfostan';
})

export class PretragaInfostanPipe{
	transform (value, [queryString]) {
	if (value==null) {
      return null;
    }
	console.log('transform');
	if (String(queryString)=="true"){     		
		return value.filter(item=>item.infostan > 6);	
	}	
	else{
		return value.filter(item=>item.infostan < 1);	
	}
		
		
		
		
  }
}