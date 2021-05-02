import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  private changeNameStatus = false; 

  public getChangeNameStatus(){
    return this.changeNameStatus;
  }

  public changeNameModalOpen(){
    this.changeNameStatus = true;
  }

  public changeNameModalClose(){
    this.changeNameStatus = false;
  }
}
