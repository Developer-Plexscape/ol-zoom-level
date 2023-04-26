import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const AppElement = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('ol-zoom-level', AppElement);
  }
 }
