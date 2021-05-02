import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
  }

  public sidebarStatus(){
    return this.modalService.getAdminSidebarStatus();
  }

  public selectedCategorie(){
    return this.modalService.getAdminTab();
  }

}
