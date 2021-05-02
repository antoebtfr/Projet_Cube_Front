import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ThemeService } from 'src/app/shared/services/theme.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {

  constructor(
    private fb: FormBuilder,
    private theme: ThemeService,
  ) { }

  private navbarBackground;
  private siteBackground;

  private adminTheme = this.theme.getAdminTheme();


  ngOnInit(): void {
    this.changeToAdminTheme();
  }

  ngOnDestroy(){
    let defaultTheme = this.theme.getDefaultTheme();

    this.navbarBackground.style = defaultTheme.color;
    this.siteBackground.style =  defaultTheme.backgroundUrl;
  }

  public submitted = false;

  public adminForm = this.fb.group({
    email: ['', [Validators.required]],
    password : ['', [Validators.required]],
  });

  public onSubmit(){
    
  }

  private changeToAdminTheme(){
    this.navbarBackground = document.getElementById('site-navbar');
    this.siteBackground = document.getElementById('site-section');
    
    this.navbarBackground.style.background = this.adminTheme.color;
    this.siteBackground.style.backgroundImage = this.adminTheme.backgroundUrl;
  }
}
