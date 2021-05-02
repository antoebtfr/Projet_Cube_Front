import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    private modalService: ModalService,
  ) { }

  ngOnInit(): void {
  }

  public closeSidebar(){
    this.modalService.adminSidebarClose();
  }

  public adminSidebarStatus(){
    return this.modalService.getAdminSidebarStatus();
  }

  public openSidebar(){
    this.modalService.adminSidebarOpen();
  }
}
