import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    private router: Router
  ) { }

  private navbarBackground;
  private siteBackground;

  private adminTheme = this.theme.getAdminTheme();


  ngOnInit(): void {
    this.changeToAdminTheme();
  }

  ngOnDestroy(){
  }

  public submitted = false;

  public adminForm = this.fb.group({
    email: ['', [Validators.required]],
    password : ['', [Validators.required]],
  });

  public onSubmit(){
    this.router.navigate([this.router.url + '/' +'home']);
  }

  private changeToAdminTheme(){
    this.navbarBackground = document.getElementById('site-navbar');
    this.siteBackground = document.getElementById('site-section');
    
    this.navbarBackground.style.background = this.adminTheme.color;
    this.siteBackground.style.backgroundImage = this.adminTheme.backgroundUrl;
  }
}
