import {Component, Injectable,Input,Output,EventEmitter} from 'angular2/core'

// Name Service
export interface myData {
   name:string;
}

@Injectable()
export class SharedService {
  sharingData: myData={name:"nyks"};
  saveData(str){
    console.log('save data function called' + str + this.sharingData.name);
    this.sharingData.name=str; 
  }
  getData:string()
  {
    console.log('get data function called');
    return this.sharingData.name;
  }
} 