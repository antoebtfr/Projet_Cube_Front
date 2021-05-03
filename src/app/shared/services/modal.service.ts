import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  private changeNameStatus = false;
  private ressourceModalStatus = false;
  private adminSidebarStatus = true;
  private adminTab = 'stats';

  public getChangeNameStatus(){
    return this.changeNameStatus;
  }

  public changeNameModalOpen(){
    this.changeNameStatus = true;
  }

  public changeNameModalClose(){
    this.changeNameStatus = false;
  }

  public getAdminSidebarStatus(){
      return this.adminSidebarStatus;
  }

  public adminSidebarOpen(){
      this.adminSidebarStatus = true;
  }

  public adminSidebarClose(){
    this.adminSidebarStatus = false;
  }

  public switchAdminTabTo(tabname: string){
    this.adminTab = tabname;
  }

  public getAdminTab(){
    return this.adminTab;
  }

  public getRessourceModalStatus(){
    return this.ressourceModalStatus;
  }

  public toggleRessourceModalStatus(){
    this.ressourceModalStatus = !this.ressourceModalStatus;
  }

  public ressourceModalToFalse(){
    this.ressourceModalStatus = false;
  }
}
