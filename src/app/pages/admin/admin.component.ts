import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {

  constructor(
    private fb: FormBuilder
  ) { }

  private navbarTheme;
  private siteTheme;
  private colorNavTheme = "#214c0a";
  private siteImageUrl = ''


  ngOnInit(): void {
    this.changeToAdminTheme();
  }

  ngOnDestroy(){
    this.navbarTheme.style = 'RGB(61, 185, 237)';
  }

  public submitted = false;

  public adminForm = this.fb.group({
    email: ['', [Validators.required]],
    password : ['', [Validators.required]],
  });

  public onSubmit(){
    
  }

  private changeToAdminTheme(){
    this.navbarTheme = document.getElementById('site-navbar');
    this.siteTheme = document.getElementById('site-section');
    
    this.navbarTheme.style.background = this.colorNavTheme;
    this.siteTheme.style.backgroundImage = 'url(' + this.siteImageUrl + ')';
  }
}
