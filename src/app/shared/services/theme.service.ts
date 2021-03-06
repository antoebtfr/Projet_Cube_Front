import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

  private defaultThemeNavbarColor = 'RGB(61, 185, 237)';
  private adminThemeColor  = "#214c0a";

  private defaultThemeBackground = 'http://iwallpapers.free.fr/upload/2016/02/20/20160220124930-dab0f38b.jpg';
  private adminThemeBackground = 'https://i.pinimg.com/564x/6d/4d/b3/6d4db3d3b8337a7a6dfc6108003f5b4c.jpg';

  private defaultAvatar = 'https://www.hayalanka.com/wp-content/uploads/2017/07/avtar-image.jpg';

  public getAdminTheme(){
    return {
      backgroundUrl : 'url(' + this.adminThemeBackground + ')',
      color : this.adminThemeColor
    }
  }

  public getDefaultTheme(){
    return {
      backgroundUrl: 'url(' +  this.defaultThemeBackground + ')',
      color: this.defaultThemeNavbarColor, 
    }
  }

  public getDefaultAvatar(){
    return this.defaultAvatar;
  }
}
