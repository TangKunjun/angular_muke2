import { Component } from '@angular/core';
import {OverlayContainer} from '@angular/cdk/overlay';
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    squareState: string;
  darkTheme: boolean;
  constructor(private oc: OverlayContainer){}

  switchTheme(dark) {
    this.darkTheme = dark;
    // this.oc.themeClass = dark ? 'myapp-dark-theme' : null;  //全局设置主题（弹出框类型的主题）
  }


}
